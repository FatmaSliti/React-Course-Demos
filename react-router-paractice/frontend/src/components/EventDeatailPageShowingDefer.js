import React, { Suspense } from "react";
import {
    // Link,
    // useParams,
    json,
    // useLoaderData,
    useRouteLoaderData,
    redirect,
    defer,
    Await
} from "react-router-dom";
import EventItem from "./EventItem";
import EventsList from "./EventsList";

function EventDetailPage() {
    const { event, events } = useRouteLoaderData("event-detail");

    return (
        <>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={event}>
                    {loadedEvent => <EventItem event={loadedEvent} />}
                </Await>
            </Suspense>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={events}>
                    {loadedEvents => <EventsList events={loadedEvents} />}
                </Await>
            </Suspense>

            {/* <EventItem event={data.event} />
                <EventsList events={} /> */}
        </>
    );
}

export default EventDetailPage;


async function loadEvent(id) {
    const response = await fetch("http://localhost:8080/events/" + id);

    if (!response.ok) {
        throw json(
            { message: "could not fetch data for selected event." },
            { status: 500 }
        );
    } else {
        const resData = await response.json();
        return resData.event;
    }
}


async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'could not fetch events.' }), { status: 500 })
    } else {
        // return response; when using defer between the loader and useLoaderData we should parse the response manually
        const resData = await response.json();
        console.log(resData.events)
        return resData.events;
    }
}



export async function loader({ request, params }) {
    //of course inside the loader function we can't use Hooks but loader has already the params (contains an object with all our route params) offered by react router to acess the needed params  / request is for queries (request.url ...)
    //fetch the data for a single evnt
    const id = params.eventId;

    return defer({
        event: await loadEvent(id), // defer waits for this data to be loaded before loading this page component at all (before moving to that page)
        events: loadEvents(), //but still load this data after the page was loaded
    })
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
