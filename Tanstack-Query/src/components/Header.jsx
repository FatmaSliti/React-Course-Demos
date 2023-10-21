import { useIsFetching } from "@tanstack/react-query";

export default function Header({ children }) {
  const fetching = useIsFetching(); //to find out whether react query is fetching somewhere in the application or not
  //fetching is a number that's '0' if react query is not fetching any data anywhere is the app / a higher number if it's fetching data
  return (
    <>
      <div id="main-header-loading">
        {fetching > 0 && <progress />}
      </div>
      <header id="main-header">
        <div id="header-title">
          <h1>React Events</h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}
