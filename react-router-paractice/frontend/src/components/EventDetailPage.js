import React from "react";
import {
    Link,
    // useParams,
    json,
    // useLoaderData,
    useRouteLoaderData,
    redirect,
} from "react-router-dom";
import EventItem from "./EventItem";

function EventDetailPage() {
    // const data = useLoaderData(); //it only knows the loader of the compo to which it belongs
    const data = useRouteLoaderData("event-detail"); // it detects it anywhere through the given id
    // const params = useParams();
    return (
        <>
            <EventItem event={data.event} />
            {/* <p>{params.eventId}</p> */}
            <Link to=".." relative="path">
                Back
            </Link>
        </>
    );
}

export default EventDetailPage;

export async function loader({ request, params }) {
    //of course inside the loader function we can't use Hooks but loader has already the params (contains an object with all our route params) offered by react router to acess the needed params  / request is for queries (request.url ...)
    //fetch the data for a single evnt
    const id = params.eventId;
    const response = await fetch("http://localhost:8080/events/" + id);
    // return response;
    //react router will automatically wait for the promise and give us access to the data to which it resolves

    if (!response.ok) {
        throw json(
            { message: "could not fetch data for selected event." },
            { status: 500 }
        );
    } else {
        return response;
    }
}

export const action = async ({ params, request }) => {
    const eventId = params.eventId;
    const response = await fetch("http://localhost:8080/events/" + eventId, {
        method: "DELETE",
        // method: request.method
    });

    if (!response.ok) {
        throw json({ message: "could not delete event." }, { status: 500 });
    }

    return redirect("/events");
};
