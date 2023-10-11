import { useNavigate, Form, useNavigation, useActionData, redirect, json } from "react-router-dom";

import classes from "./EventForm.module.css";

// function EventForm(props) {
function EventForm({ method, event }) {
  const data = useActionData(); // the response is parsed automatically by react-router for us
  const navigate = useNavigate();
  const navigation = useNavigation(); //navigation is an obj

  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate("..");
  }

  return (
    // <Form method="post" className={classes.form}> {/* this request will be sent to the action (of the currently active route) istead of being sent automatically to the backend */}
    <Form method={method} className={classes.form}> {/* this request will be sent to the action (of the currently active route) istead of being sent automatically to the backend */}
      {data && data.errors && <ul> {/* errors is defined in the backend (events file) / it contains the potential errors */}
        {Object.values(data.errors).map((err) => (
          <li key={err}>{err}</li>
        ))}
      </ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'submitting...' : 'Save'}</button> {/* if we are submitting this button is disabled */}
      </div>
    </Form>
  );
}

export default EventForm;


export const action = async ({ request, params }) => { //{request, params} to get the data from the form
  const method = request.method;
  const data = await request.formData(); // we can benifit from this formData when use 

  // data.get('')//to get access to the input field values that were submitted

  // const enteredTitle = data.get('title');
  // const enteredImage = data.get('image');

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  }

  let url = 'http://localhost:8080/events';

  if (method === 'PATCH') {
    const eventId = params.eventId;
    url = 'http://localhost:8080/events/' + eventId;
  }

  const response = await fetch(url, {
    // method: 'POST',
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response; //the response got back from the backend if the status is 422 (backend file called events)
  }

  if (!response.ok) {
    throw json({ message: 'Could not save event' }, { status: 500 })
  }

  return redirect('/events')
}
