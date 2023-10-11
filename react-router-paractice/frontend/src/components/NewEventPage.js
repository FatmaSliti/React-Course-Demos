// import { json, redirect } from 'react-router-dom';
import EventForm from './EventForm'

function NewEventPage() {
    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     //...
    // } but there is a better approach when using react router which is actions (like loaders for loading data we use actions when it comes to sending data)
    return (
        <EventForm method='post' />
    )
}

export default NewEventPage

//==========> This action was moved to EventForm.js

// export const action = async ({ request, params }) => { //{request, params} to get the data from the form
//     const data = await request.formData(); // we can benifit from this formData when use

//     // data.get('')//to get access to the input field values that were submitted

//     // const enteredTitle = data.get('title');
//     // const enteredImage = data.get('image');

//     const eventData = {
//         title: data.get('title'),
//         image: data.get('image'),
//         date: data.get('date'),
//         description: data.get('description'),
//     }

//     const response = await fetch('http://localhost:8080/events', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(eventData),
//     });

//     if (response.status === 422) {
//         return response; //the response got back from the backend if the status is 422 (backend file called events)
//     }

//     if (!response.ok) {
//         throw json({ message: 'Could not save event' }, { status: 500 })
//     }

//     return redirect('/events')
// }
