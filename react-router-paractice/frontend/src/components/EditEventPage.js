import React from "react";
import { Link, useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventForm from "./EventForm";

function EditEventPage() {
    // const data = useLoaderData();
    const data = useRouteLoaderData("event-detail");
    return (
        <>
            {/* <div>EditEventPage</div> */}
            <EventForm event={data.event} method="patch" />
            {/* <Link to=".." relative="path">
                Back
            </Link> */}
        </>
    );
}

export default EditEventPage;
