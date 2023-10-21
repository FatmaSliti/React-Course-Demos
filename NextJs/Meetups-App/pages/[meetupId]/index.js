import { MongoClient, ObjectId } from "mongodb";
import React, { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";

function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description} />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
        // <MeetupDetail
        //     image="img2.jpg"
        //     title="First Meetup"
        //     address="Some Street 5, Some City"
        //     description="This is a first meetup"
        // />
    );
}

export async function getStaticPaths() {
    //connect to the db
    const client = await MongoClient.connect(
        "mongodb+srv://fatmasliti:AZLgG0d4L197VdFf@cluster0.wiof51u.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupCollection = db.collection("meetups");

    //fetch data
    const meetups = await meetupCollection.find({}, { _id: 1 }).toArray(); //all the docs but with only the ID

    client.close();

    //used in dynamic pages containing the getStaticProps function to tell NextJs for which dynamic values this page should pre-generated
    return {
        //all the dynamic segment values (all the meetup IDs (meetup is called a segment)) for which this page should be re-generated
        fallback: false, // when it's set to false it returns a 404 error for unknown paths (any path except m1 or m2 declared in the paths bellow)
        //fallback pre-generates only the pages with m1 and m2 IDs (the most popular pages in the site for e.g)

        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
        })),

        // paths: [
        //     {
        //         params: {
        //             meetupId: 'm1',
        //         }
        //     },
        //     {
        //         params: {
        //             meetupId: 'm2',
        //         }
        //     },
        // ]
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    //params is an obj where the identifier (meeetupId) will be the property and the values will be the actual values encoded in the url

    // console.log(meetupId); //not shown in the console of the browser because thes code inside getStaticProps runs during build time

    //connect to the db
    const client = await MongoClient.connect(
        "mongodb+srv://fatmasliti:AZLgG0d4L197VdFf@cluster0.wiof51u.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    //fetch data for a single meetup
    const selectMeetup = await meetupsCollection.findOne({
        _id: new ObjectId(meetupId),
    }); //filter by id

    client.close();

    return {
        props: {
            // meetupData: selectMeetup,//but as we need to convert the id =>
            meetupData: {
                id: selectMeetup._id.toString(),
                title: selectMeetup.title,
                address: selectMeetup.address,
                image: selectMeetup.image,
                description: selectMeetup.description,
            },
            // meetupData: {
            // image: "one.png",
            // id: meetupId,
            // title: "First Meetup",
            // address: "Some Street 5, Some City",
            // description: "This is a first meetup",
            // },
        },
    };
}

export default MeetupDetails;
