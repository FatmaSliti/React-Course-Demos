// import React from "react";
// import { Link } from "react-router-dom";

// const EVENTS = [
//     { id: "e1", event: "go to the cinema" },
//     { id: "e2", event: "go to the gym" },
//     { id: "e3", event: "go to the wedding ceremony" },
// ];

// function EventsPage() {
//     return (
//         <>
//             {EVENTS.map((item) => (
//                 <li key={item.id}>
//                     <Link to={`/events/${item.id}`}>{item.event}</Link>
//                 </li>
//             ))}
//         </>
//     );
// }

// export default EventsPage;

import { useEffect, useState } from 'react';

import EventsList from '../components/EventsList';

function EventsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedEvents, setFetchedEvents] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchEvents() {
            setIsLoading(true);
            const response = await fetch('http://localhost:8080/events');

            if (!response.ok) {
                setError('Fetching events failed.');
            } else {
                const resData = await response.json();
                setFetchedEvents(resData.events);
            }
            setIsLoading(false);
        }

        fetchEvents();
    }, []);

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}
            </div>
            {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
        </>
    );
}

export default EventsPage;
