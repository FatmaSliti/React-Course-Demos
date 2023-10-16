// import { useEffect, useState } from 'react';

// import LoadingIndicator from '../UI/LoadingIndicator.jsx';
// import ErrorBlock from '../UI/ErrorBlock.jsx';
// import EventItem from './EventItem.jsx';

// export default function NewEventsSection() {
//   const [data, setData] = useState();
//   const [error, setError] = useState();
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     async function fetchEvents() {
//       setIsLoading(true);
//       const response = await fetch('http://localhost:3000/events');

//       if (!response.ok) {
//         const error = new Error('An error occurred while fetching the events');
//         error.code = response.status;
//         error.info = await response.json();
//         throw error;
//       }

//       const { events } = await response.json();

//       return events;
//     }

//     fetchEvents()
//       .then((events) => {
//         setData(events);
//       })
//       .catch((error) => {
//         setError(error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, []);

//   let content;

//   if (isLoading) {
//     content = <LoadingIndicator />;
//   }

//   if (error) {
//     content = (
//       <ErrorBlock title="An error occurred" message="Failed to fetch events" />
//     );
//   }

//   if (data) {
//     content = (
//       <ul className="events-list">
//         {data.map((event) => (
//           <li key={event.id}>
//             <EventItem event={event} />
//           </li>
//         ))}
//       </ul>
//     );
//   }

//   return (
//     <section className="content-section" id="new-events-section">
//       <header>
//         <h2>Recently added events</h2>
//       </header>
//       {content}
//     </section>
//   );
// }


//with the use of Tanstack quey

import { useQuery } from '@tanstack/react-query';

import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import { fetchEvents } from '../../util/http.js'

export default function NewEventsSection() {
  // const queryObj = useQuery({
  const { data, isPending, isError, error } = useQuery({ //contains the response data as a value (the data returned by the fetching function)
    // queryKey: ['events'], //used internally by tanstack to cache the data yielded by that request so data can be shown to the user quicker if we already have it
    queryKey: ['events', { max: 3 }],
    // queryFn: fetchEvents, //define the actual code that will send the actual request
    // queryFn: ({ signal }) => fetchEvents({ signal, max: 3 }), 
    queryFn: ({ signal, queryKey }) => fetchEvents({ signal, ...queryKey[1] }), // to avoid repetition of the max:3
    staleTime: 5000, //(default: 0)  //this controls after which time react query will send such a behind the scenes request to get updated data if found in the cache 
    //gcTime: 1000  //default : 5min //garbage collection time //controls how long the data in the cache will be kept around
  });

  //queryKey: 
  //react query caches the response data and reuse that data whenever it encounters another useQuery execution with the same querykey
  //it will instantly yield that data BUT at the same time also send this request again behind the scenes to see if updated data is available
  //then it will silently replace that data with the updated data so that after a couple of seconds or however long it takes to fetch the data we do have the updated data on the screen
  //======> so that we get the best of both worlds !!!!!

  let content;

  // if (isLoading) {
  if (isPending) { //to show the loading indicator whilst we're waiting for the response (that's the difference between isLoading and isPending )
    content = <LoadingIndicator />;
  }

  // if (error) {
  //   content = (
  //     <ErrorBlock title="An error occurred" message="Failed to fetch events" />
  //   );
  // }

  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message || 'Failed to fetch events.'} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
