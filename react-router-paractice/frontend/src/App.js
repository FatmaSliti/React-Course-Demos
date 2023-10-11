// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";
import EventsPage, {
  loader as eventsloader,
} from "./components/EventsPageUsingLoader";
import EditEventPage from "./components/EditEventPage";
// import NewEventPage, { action as newEventAction } from "./components/NewEventPage";
import NewEventPage from "./components/NewEventPage";
import RootLayout from "./components/RootLayout";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./components/EventDeatailPageShowingDefer";
import EventsRoot from "./components/EventsRoot";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from './components/Newsletter';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />, //in case of 404 errors or errors related to loaders (anywhere in our routes)
    children: [
      { path: "/", element: <HomePage /> }, //path: '/' or index = true
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsloader,
          }, //the loader function will be triggered before the EventsPage gets rendered (that's the goal)
          {
            path: ":eventId",
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              { index: true, element: <EventDetailPage />, action: deleteEventAction },
              { path: "edit", element: <EditEventPage />, action: manipulateEventAction },
            ],
          },
          { path: "new", element: <NewEventPage />, action: manipulateEventAction },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;



/*
errorElement: <ErrorPage />, //in case of 404 errors or errors related to loaders (anywhere in our routes)
  children: [
    { path: '/', element: <HomePage /> }, //path: '/' or index = true
    {
      path: 'events', element: <EventsRoot />, children: [
        {
          index: true,
          element: <EventsPage />,
          loader: eventsloader, // we moved the code below to the EventsPage componet and point to it with the eventsLoader pointer
          // async () => {
          // const response = await fetch('http://localhost:8080/events');

          // if (!response.ok) {
          //   //...
          // } else {
          //   const resData = await response.json();
          //   return resData.events; //the returned data from inside the loader function will automaticaaly be available to the EventsPage and other components that need the data
          // }
          // }
        }, //the loader function will be triggered before the EventsPage gets rendered (that's the goal)
        { path: ':eventId', element: <EventDetailPage />, loader: detailLoader },
        // { path: '/events/new', element: <NewEventPage /> },
        { path: 'new', element: <NewEventPage /> },
        { path: ':eventId/edit', element: <EditEventPage /> }
      ]
*/
