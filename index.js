import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import expressOasGenerator from "express-oas-generator";
import eventRouter from "./routes/eventmanager.js";


// Connect to database
await mongoose.connect(process.env.Mongo_Url);
console.log("Connected to Event Management Database");

// Create Express App
const eventapp = express();
expressOasGenerator.handleResponses(eventapp, {
    alwaysServeDocs: true,
    tags: ['events'],
    mongooseModels: mongoose.modelNames(),
})

// Apply middlewares-application middleware unwraps data posted from the frontend
// cors middleware to allow access to the api
eventapp.use(cors());
eventapp.use(express.json());

// Use routes- enable us make use of other routes defined in other files
eventapp.use(eventRouter);
expressOasGenerator.handleRequests();
eventapp.use((req, res) => res.redirect('/api-docs'));

// Listen for incoming requests
const port = process.env.PORT || 8088;
eventapp.listen(port, () => {
    console.log(`App listening on port ${port}`);
});