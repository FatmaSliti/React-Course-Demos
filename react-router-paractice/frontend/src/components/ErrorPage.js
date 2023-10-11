import React from 'react'
import MainNavigation from './MainNavigation'
import PageContent from './PageContent'

import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError(); //an error object

    let title = 'An Error occured !';
    let message = 'Something went wrong!';

    if (error.status === 500) {
        // message = JSON.parse(error.data).message; //Json.parse to convert it into an object instead of Json format in case of using the (new Response)
        message = error.data.message; // in case of using the json function the parsing will be done by react router for us
        //the error.data gives us access to the data in the response (EventsPage component) and then to the message
    }

    if (error.status === 404) { //404 is the default status set by react router for not supported paths 
        title = 'Not found!'
        message = 'Could not find ressources or page.'
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
            {/* <div>An Error occured !</div>  */}
        </>
    )
}

export default ErrorPage
