import { EventModel } from "../models/event.js";

//VIEWING ALL EVENTS
export const getEvents = async (req, res, next) => {
    try {
        //Get all events from database
        const allEvents = await EventModel.find()
        //Return all events to homepage
        res.status(200).json(allEvents)
    } catch (error) {
        next(error);
    }
}



//POSTING NEW EVENT
export const addEvents = async (req, res, next) => {
    try {
        //Add a new events to database
       const postEvent = await EventModel.create(req.body);
        //Return added event to homepage
        res.status(201).json(postEvent);
    } catch (error) {
        next(error);
    }
}


//UPDATING EVENT DETAILS
export const editEvent =  async (req, res, next) => {
    
    try {
        const update = req.body
        const updatedEvent = await EventModel.findByIdAndUpdate(req.params.id, update, {new: true})
        res.status(200).json(updatedEvent)
    } catch (error) {
        next(error)
    }
}

//DELETING A SINGLE EVENT
export const deleteEvent = async (req, res, next) => {
    try {
     //Delete event by ID
     const deletedEvent =  await EventModel.findByIdAndDelete(req.params.id)
     //Return response
      res.json('Event deleted successfully')
 
    } catch (error) {
     next(error)
    }
 }