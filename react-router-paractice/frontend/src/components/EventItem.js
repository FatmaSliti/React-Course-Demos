import { Link, useSubmit } from 'react-router-dom';
import classes from './EventItem.module.css';

function EventItem({ event }) {
  const submit = useSubmit(); //this hook returns a submit function

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure you want delete this event?')

    if (proceed) {
      // submit({here we put the data}, {method:'delete', action:'/different-path'} ); //the data we pass to the submit function will automatically be wrapped by a form data object
      submit(null, { method: 'delete' });
      console.log("This");
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
