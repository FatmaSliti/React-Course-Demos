import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { createNewEvent } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { queryClient } from "../../util/http.js";

export default function NewEvent() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    //useMutation unlike useQuery does not automatically send the request when the componet is rendred but instead when we tell it to send that request (with help of the mutate function)
    mutationFn: createNewEvent,
    onSuccess: () => { //will only be exececuted if the mutation did succeed
      // queryClient.invalidateQueries({queryKey: ['events'], exact: true}); //tells react query that the data fetched by certain queries (having the same querKey) is outdated now and that an immediate refetch should be triggered if the query belongs to a component that's currently visible on the screen // exact: true  means exactly with this key so it can't for example update the find events section because it has an additional element in the queryKey array 
      queryClient.invalidateQueries({queryKey: ['events']}); 
      navigate('/events') 
    },
  });

  function handleSubmit(formData) {
    mutate({ event: formData }) //this will send the request above creacted with useMutation because the useMutation  unlike the useQuery will only send the request if we tell it to do with help of this mutate function
    // navigate('/events'), // we can do that but this will not wait for the response to be sent before closing the screen (the errors e.g won't be shown to us) ==> the solution: onSuccess
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && "Submitting..."}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title="failed to create event"
          message={
            error.info?.message ||
            "failed to create event. Please check your inputs and try agin later."
          }
        />
      )}
    </Modal>
  );
}
