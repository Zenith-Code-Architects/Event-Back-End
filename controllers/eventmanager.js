import { EventModel } from "../models/event.js";

//  Fetch from database with and without conditions and with pagination
export const getEvents = async (req, res, next) => {
    try {
        // Get query params- the structuring
        const {
            filter = "{}",
            sort = "{}",
            fields = "{}",
            limit = 10,
            skip = 0
        } = req.query;
        // Get all events from database
        const allEvents = await EventModel
            .find(JSON.parse(filter))
            .sort(JSON.parse(sort))
            .select(JSON.parse(fields))
            .limit(limit)
            .skip(skip);
        // Return response
        res.status(200).json(allEvents);
    } catch (error) {
        next(error);
    }
}

//  Get an event by Id
export const getEvent = async (req, res, next) => {
    try {
        const oneEvent = await EventModel.findById(req.params.id);
        //  return response
        res.status(200).json(oneEvent);
    } catch (error) {
        next(error);
    }
}

//POSTING NEW EVENT
export const addEvent = async (req, res, next) => {
    try {
        //Add a new event to database
        const postEvent = await EventModel.create({
            ...req.body,
            eventFlier: req.file.filename
        });
        //Return added event to homepage
        res.status(201).json(postEvent);
    } catch (error) {
        next(error);
    }
}

//UPDATING EVENT DETAILS
export const editEvent = async (req, res, next) => {

    try {
        const update = req.body
        const updatedEvent = await EventModel.findByIdAndUpdate(
            req.params.id,
            {...update, eventFlier: req?.file?.filename},
            { new: true }
        );
        res.status(200).json(updatedEvent)
    } catch (error) {
        next(error)
    }
}

//DELETING AN EVENT
export const deleteEvent = async (req, res, next) => {
    try {
        //Delete event by ID
        const deletedEvent = await EventModel.findByIdAndDelete(req.params.id)
        //Return response
        res.json('Event deleted successfully')

    } catch (error) {
        next(error)
    }
}