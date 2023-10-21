//API routes will only run on the server
import { MongoClient } from 'mongodb'; // this obj allows us to connect

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
    //req obj: contains data about the incoming request
    //res obj: needed for sending back a response
    if (req.method === 'POST') {
        const data = req.body;

        // const { title, image, address, description } = data;

        const client = await MongoClient.connect('mongodb+srv://fatmasliti:900eTa1yTp6fc7DY@cluster0.wiof51u.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupCollection = db.collection('meetups');
        // asingle meetup would be a single document

        // meetupCollection.insertOne({ title, image, address, description });
        const result = await meetupCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup inserted!'})
    }
}

export default handler

//the code defined in here (api) will never end up on the client side
//so this is a secure place to store credentials
