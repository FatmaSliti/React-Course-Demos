import React, { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail
            image="img2.jpg"
            title="First Meetup"
            address="Some Street 5, Some City"
            description="This is a first meetup"
        />
    );
}

export async function getStaticPaths() { //used in dynamic pages containing the getStaticProps function to tell NextJs for which which dynamic values this page should pre-generated
    return { //all the dynamic segment values (all the meetup IDs (meetup is called a segment)) for which this page should be re-generated
        fallback: false, // when it's set to false it returns a 404 error for unknown paths (any path except m1 or m2 declared in the paths bellow) or 'blocking' for incremental static regeneration, which allows you to generate pages on-demand
        //fallback pre-generates only the pages with m1 and m2 IDs (most popular ones in the site for e.g)
        paths: [
            {
                params: {
                    meetupId: 'm1',
                }
            },
            {
                params: {
                    meetupId: 'm2',
                }
            },
        ]
    }
}

export async function getStaticProps(context) {
    //fetch data for a single meetup

    const meetupId = context.params.meetupId;
    //params is an obj where the identifier (meeetupId) will be the property and the values will be the actual values encoded in the url

    console.log(meetupId); //not shown in the console of the browser because thes code inside getStaticProps runs during build time

    return {
        props: {
            meetupData: {
                image: "one.png",
                id: meetupId,
                title: "First Meetup",
                address: "Some Street 5, Some City",
                description: "This is a first meetup"
            }
        }
    }
}

export default MeetupDetails;
