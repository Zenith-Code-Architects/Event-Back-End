import express from "express";
import mongoose from "mongoose";

// Connect to database
await mongoose.connect(process.env.Mongo_url);
console.log ("Connected to Event Management Database");

// Create Express App
const eventapp = express();

// Apply middlewares-application middleware unwraps data posted from the frontend
eventapp.use(express.json());

// Use routes- enable us make use of other routes defined in other files
// eventapp.use(eventRouter);

// Listen for incoming requests
const port = process.env.PORT || 8080;
eventapp.listen(port, () => {
    console.log(`App listening on port ${port}`);
});



