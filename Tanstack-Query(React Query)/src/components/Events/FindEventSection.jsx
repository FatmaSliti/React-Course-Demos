import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "../../util/http";
import LoadingIndicator from "../UI/LoadingIndicator";
import ErrorBlock from "../UI/ErrorBlock";
import EventItem from "./EventItem";

export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setSearchTerm] = useState();

  // const { data, isPending, isError, error } = useQuery({
  const { data, isLoading, isError, error } = useQuery({
    // queryKey: ['events', {searchElement: searchElement.current.value}],
    // queryFn: () => fetchEvents(searchElement.current.value), //doing it like this will not cause the component to re-render after entering a new search term
    queryKey: ["events", { search: searchTerm }],
    queryFn: ({ signal }) => fetchEvents({ signal, searchTerm }), //signal for aborting requests (e.g if we navigate away from the page before the request was finished)
    // enabled: false, //disable the query
    // enabled: searchTerm !== '', //disable the query if we didn't enter a search term
    enabled: searchTerm !== undefined, //if it's undefined which is the initial value this query will be disabled BUT is the search term is anything else including the empty string the request will be sent
  });

  let content = <p>Please enter a search term and to find events.</p>;

  // if (isPending) {
    //the difference between isLoading and isPending is that the isLoading will not be true if the query is desabled (to not show the loading spinner initially)
  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occured"
        message={error.info?.message || "Failed to fetch events."}
      />
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

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchElement.current.value);
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
