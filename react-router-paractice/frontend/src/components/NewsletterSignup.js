import { useFetcher } from 'react-router-dom';

import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {
    //useFetcher is used to interact with some action or loader without transitioning / send requests behind the scenes without triggering any route changes
    const fetcher = useFetcher();
    const { data, state } = fetcher;

    //idle : we're not executing an action or a loader anymore 

    useEffect(() => {
        if (state === 'idle' && data && data.message) { //and if we got data and that data got a message property (check the teturn statement newsletter.js )
            window.alert(data.message)
        }
    }, [data, state])

    return (
        // <form method="post" className={classes.newsletter}>
        // <Form method="post" className={classes.newsletter}> //Form would automatically trigger the action that belongs to the currently active route
        <fetcher.Form method="post" action='/newsletter' className={classes.newsletter}> {/* trigger an action but it will not initialize a route transition (we don't move to a different route) */}
            <input
                type="email"
                name='email'
                placeholder="Sign up for newsletter..."
                aria-label="Sign up for newsletter"
            />
            <button>Sign up</button>
        </fetcher.Form>
    );
}

export default NewsletterSignup;
