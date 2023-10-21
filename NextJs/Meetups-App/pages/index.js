import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "Afirst title",
        image: "two.png",
        address: "some address 5, 12354 some city",
        description: "This is a first meetup!",
    },
    {
        id: "m2",
        title: "A second title",
        image: "three.png",
        address: "some address 10, 42851 some city",
        description: "This is a second meetup!",
    },
];

function HomePage(props) {

    //first method which has the flaw of pre-rendering an HTML page without data because the state is initially set as an []
    // const [loadedMeetups, setLoadedMeetups] = useState([]);
    // useEffect(() => {
    //     //fetch data
    //     setLoadedMeetups(DUMMY_MEETUPS);
    // }, []);
    console.log(props.meetups);
    return (
        <MeetupList meetups={props.meetups} />
    );

}




export async function getStaticProps() {
    //1-it has to be named getStaticProps
    //2-it only works in the pages folder
    //3-it'll be excuted during the pre-rendering process (before the component and its JSX)
    //4-its job is to prepare props for this page
    //5-all the code inside of it will never end up on the client side(we can do securely connect to a DB)
    //6-always returns an obj {props: }

    //fetch data from an API
    return {
        props: { //it has to be named props and its content is passed via props to the component
            meetups: DUMMY_MEETUPS,
        },
        revalidate: 1 //every 1 second for e.g //it unlocks a feature called incremental static generation so no need to rebuild and redeploy all the time just because some data changed 
        //ensures that the data updates regularly
    }
}



//second function for pre-generating the page on the server for every incoming request
// export async function getServerSideProps(context) { //won't run during the build process but instead on the server after deployment
//     const req = context.req;
//     const res = context.res;//these two are used for authentication for e.g

//     //fetch data from an API or ..
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//         //no need for revalidate because getServerSideProps runs for every incoming request anyways
//     }
// }


//which one is better?
//The getStaticProps is faster (because it will be cached and reused) instead pre-generating and fetching the data for every incoming request
//but if we have data that changes multiple times every second (even revalidate won't help us) or if we need access to the concret request object the second one will be the right choice 

export default HomePage;
