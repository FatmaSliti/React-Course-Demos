import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", id], //because this query depends on the ID of the event which we're trying to edit
    queryFn: ({ signal }) => fetchEvent({ signal, id: id }),
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    //the old method
    // onSuccess: () => {
    //   queryClient.invalidateQueries({queryKey: ['events']})
    // }
    //with optimistic updating
    onMutate: async (data) => {
      //executed right when we call mutate (before the process is done / before we get back a response from the backend)  || data : react query passes automatically the data passed to the mutate function as a value to onMutate (formData we need here)
      //update the data cached by React Query & get the currently stored data to manipulate and edit it
      const newEvent = data.event; //the currently stored data / the data passed from mutate to onMutate automatically by react query
      await queryClient.cancelQueries({ queryKey: ["events", id] }); //cancel all active ongoing queries for this data (having this key) and setting our own data  (to don't have clashing response data from those queries (because if those ongoing queries finished before the updating request was done we would've fetched old data again) //this function doesn't cancel mutation (only queries triggered by useQuery)

      const previousEvent = queryClient.getQueryData(["events", id]); //gives us the currently stored data  //roll back to this event if the update mutation failed

      queryClient.setQueryData(["events", id], newEvent); //to manipulate the stored data without waiting for a response (normally it's manipulated by react query whenever we got a new response that's being cached)
      // first argument : the key of the query we do want to edit // the second argument : the new data that i'll send to the backend
      return { previousEvent };
    },
    onError: (error, data, context) => {
      //executed if the update mutation fails | roll back the optimistic update if the mutation fails
      //data: submitted to the mutation | context: receives auto the returned object
      queryClient.setQueryData(["events", id], context.previousEvent);
    },
    onSettled: () => {
      //force react query to refetch the data behind the scenes to make sure that we fetch the latest data from the backend (even though everything is okay)
      queryClient.invalidateQueries(["events", id]);
    },
  });

  function handleSubmit(formData) {
    mutate({ id: id, event: formData });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={
            error.info?.message ||
            "Failed to load event, please check your inputs and try again later."
          }
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

