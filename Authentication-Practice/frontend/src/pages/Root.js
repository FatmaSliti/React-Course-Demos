import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTokenDuration } from '../util/auth';

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit(); // to programatically submit a form

  // const navigation = useNavigation();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') { // (auth.js)
      submit(null, { action: '/logout', method: 'post' });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' })
      // }, 1 * 60 * 60 * 1000) //clear the token after one hour
    }, tokenDuration) //clear the token after one hour

  }, [token, submit]) // to set a timer whenever the application starts


  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
