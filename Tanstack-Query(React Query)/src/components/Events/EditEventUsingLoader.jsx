import { Link, redirect, useNavigate, useNavigation, useParams, useSubmit } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
    const navigate = useNavigate();
    const { state } = useNavigation();
    const submit = useSubmit();
    const params = useParams();
    const id = params.id;

    const { data, isError, error } = useQuery({
        queryKey: ["events", id], //because this query depends on the ID of the event which we're trying to edit
        queryFn: ({ signal }) => fetchEvent({ signal, id: id }),
        staleTime: 10000 //with that we make sure that the cached data is used without re-fetching it behind the scenes if that data is less than 10nseconds old  | because we noticed in the network dev tool that the same request is send from the loader and the useQuery (redundent http requests)
    });


    function handleSubmit(formData) {
        submit(formData, { method: 'PUT' }) //anything except get because the action function will be triggered for all the non get methods
        //we're not sending an http request , we're triggering the code in the action function
    }

    function handleClose() {
        navigate("../");
    }

    let content;

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
                {state === 'submitting' ? <p>Updating data...</p> : <>
                    <Link to="../" className="button-text">
                        Cancel
                    </Link>
                    <button type="submit" className="button">
                        Update
                    </button>
                </>}
            </EventForm>
        );
    }

    return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader({ params }) {
    const id = params.id
    return queryClient.fetchQuery({ //trigger a query programmatically without using useQuery hook
        queryKey: ["events", id], //because this query depends on the ID of the event which we're trying to edit
        queryFn: ({ signal }) => fetchEvent({ signal, id: id }),
    });
}

export async function action({ request, params }) { //triggered whenever a form is submitted  | request: info about the submitted form | params: info about the route to which this form submission belongs
    const formData = await request.formData(); //formData() get hold of the submitted data
    const updatedEventData = Object.fromEntries(formData); //to transfor the complex formData obj yielded by formData method to a simple key value pair obj in js
    //no need to trigger a mutation because useMutation hook was in the end just a wrapper around this function (of course with extra info like isPending... but we don't need that here)
    await updateEvent({ id: params.id, event: updatedEventData }); // the id and event are expected by the updateEvent function
    await queryClient.invalidateQueries(['events']);
    return redirect('../');
}

//in react router a form submission is needed to trigger the action functions 
