import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export async function fetchEvents({ signal, searchTerm, max }) { //signal : to make sure that the request that is being sent is aborted if react query thinks that it should be aborted (for example because we left the page)
    console.log(searchTerm);

    let url = 'http://localhost:3000/events';

    if (searchTerm && max) {
        url += '?search=' + searchTerm + '&max=' + max;
    } else if (searchTerm) {
        url += '?search=' + searchTerm;
    } else {
        url += '?max=' + max;
    }


    const response = await fetch(url, { signal: signal });

    if (!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        error.code = response.status; //store the status in the code property of the error
        error.info = await response.json(); //store the response in the info property of the error for providing more information about the error
        throw error;
    }

    const { events } = await response.json();

    return events;
}



export async function createNewEvent(eventData) {
    const response = await fetch(`http://localhost:3000/events`, {
        method: 'POST',
        body: JSON.stringify(eventData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const error = new Error('An error occurred while creating the event');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { event } = await response.json();

    return event;
}



export async function fetchSelectableImages({ signal }) {
    const response = await fetch(`http://localhost:3000/events/images`, { signal });

    if (!response.ok) {
        const error = new Error('An error occurred while fetching the images');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { images } = await response.json();

    return images;
}


//view details

export async function fetchEvent({ id, signal }) {
    const response = await fetch(`http://localhost:3000/events/${id}`, { signal });

    if (!response.ok) {
        const error = new Error('An error occurred while fetching the event');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const { event } = await response.json();

    return event;
}


export async function deleteEvent({ id }) {
    const response = await fetch(`http://localhost:3000/events/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        const error = new Error('An error occurred while deleting the event');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    return response.json();
}



export async function updateEvent({ id, event }) {
    const response = await fetch(`http://localhost:3000/events/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ event }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const error = new Error('An error occurred while updating the event');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    return response.json();
}







// before making it flexible for both fetching all events and fetching events that match a search term
/*
export async function fetchEvents() {
    const response = await fetch('http://localhost:3000/events');

    if (!response.ok) {
        const error = new Error('An error occurred while fetching the events');
        error.code = response.status; //store the status in the code property of the error
        error.info = await response.json(); //store the response in the info property of the error for providing more information about the error
        throw error;
    }

    const { events } = await response.json();

    return events;
}

*/