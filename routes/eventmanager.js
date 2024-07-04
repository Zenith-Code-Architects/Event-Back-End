import { Router } from "express";
import { addEvent, deleteEvent, editEvent, getEvent, getEvents } from "../controllers/eventmanager.js";
import { remoteUpload } from "../middleware/flier-uploads.js";

//ROUTER CREATIONS
const eventRouter = Router();

//DEFINING ROUTES
eventRouter.get('/events', getEvents);

eventRouter.get('/events/:id', getEvent);

eventRouter.post('/events', remoteUpload.single('eventFlier'), addEvent);

eventRouter.patch('/events/:id', remoteUpload.single('eventFlier'), editEvent);

eventRouter.delete('/events/:id', deleteEvent);

export default eventRouter;