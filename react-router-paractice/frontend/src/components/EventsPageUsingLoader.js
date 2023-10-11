import { useLoaderData, json, defer, Await } from 'react-router-dom'; //useLoaderData get access to the closest loader data

import EventsList from '../components/EventsList';
import { Suspense } from 'react';

//=====> without defer
// function EventsPage() {
//     const data = useLoaderData(); //data will be the data returned by the loader (don't mind about the promise this hook will give us the final data)

//     // if (data.isError) {
//     //     return <p>{data.message}</p>
//     // }

//     const events = data.events;
//     return (
//         <>
//             {/* <EventsList events={fetchedEvents} /> */}
//             <EventsList events={events} />
//             {/* <EventsList /> */}
//         </>
//     );
// }



function EventsPage() {
    const { events } = useLoaderData();

    // const data = useLoaderData();
    // const events = data.events;

    // return (
    //     <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}> {/* used to show a fallback whilst we're waiting fot other data to arrive */}
    //         <Await resolve={events}> {/* will wait for that data to be there */}
    //              {(loadedEvents) => <EventsList events={loadedEvents} />}{/* excecuted by react router once that data is there */}
    //             {/* {(loadedEvents) => <EventsList events={loadedEvents}></EventsList>} */}
    //         </Await>
    //     </Suspense>
    // );
    return (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    );
}

export default EventsPage;




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


export function loader() {
    return defer({ // we have  a value that will eventually resolve to another value and we wanna load & render a component even though that future value isn't there yet
        events: loadEvents() //it returns a promise since it's an async function and it must be a promise
    })
}


//promise :  a value that will eventually resolve to another value

//=====> The loader before using defer

// export async function loader() {
//     const response = await fetch('http://localhost:8080/events');

//     if (!response.ok) {
//         // return { isError: true, message: 'could not fetch events!' }
//         throw new Response(JSON.stringify({ message: 'could not fetch events.' }), { status: 500 }) //using the response type with its status prop helps us building a generic error handing component
//         // throw json({ message: 'could not fetch events.' }, { status: 500 }) //json is a function that creates a response object that includes data in the json format
//     } else {
//         return response; // (useLoaderData will extract the data automatically so no need to trasform it with the json method)
//     }
// }







//loader() can return any type of data (string, number, object, response object ...)
//response object is a modern feature in the browser
//loader function is a client side code so all browser features can be used inside of it except hooks because loader is not a component


// export async function loader() {
//     const response = await fetch('http://localhost:8080/events');
// if (!response.ok) {
//     //...
// } else {
//     const resData = await response.json();
//     // return resData.events; //the returned data from inside the loader function will automatically be available to the EventsPage and other components that need that data
//     const res = new Response('data', {status: 201});
//     return res
// }

