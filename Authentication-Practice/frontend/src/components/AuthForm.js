// import { useState } from 'react';
// import { Form } from 'react-router-dom';

// import classes from './AuthForm.module.css';

// function AuthForm() {
//   const [isLogin, setIsLogin] = useState(true);

//   function switchAuthHandler() {
//     setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
//   }

//   return (
//     <>
//       <Form method="post" className={classes.form}>
//         <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
//         <p>
//           <label htmlFor="email">Email</label>
//           <input id="email" type="email" name="email" required />
//         </p>
//         <p>
//           <label htmlFor="image">Password</label>
//           <input id="password" type="password" name="password" required />
//         </p>
//         <div className={classes.actions}>
//           <button onClick={switchAuthHandler} type="button">
//             {isLogin ? 'Create new user' : 'Login'}
//           </button>
//           <button>Save</button>
//         </div>
//       </Form>
//     </>
//   );
// }

// export default AuthForm;




//second method using react router query params instead of useState to toggle the login and sign up forms

import { Form, Link, useActionData, useNavigation, useSearchParams } from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const data = useActionData();
  const navigation = useNavigation();
  // const [searchParams, setSearchParams] = useSearchParams();
  //searchParams: an obj that gives us access to the currently set query parameters
  //setSearchParams: a function to update the currently set query parameters
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login"; //check if the mode query parameter is currently set to login if it's set to any other value then I assume I'm in sign up mode
  const isSubmitting = navigation.state === 'submitting';

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {" "}
            {/* query parameter */}
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
