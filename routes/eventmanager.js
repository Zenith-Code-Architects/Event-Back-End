import { Router } from "express";
import { addEvents, deleteEvent, editEvent, getEvents } from "../controllers/eventmanager.js";

//ROUTER CREATIONS
const eventRouter = Router();

//DEFINING ROUTES
eventRouter.get('/events', getEvents);

eventRouter.post('/events', addEvents);

eventRouter.patch('/events/:id', editEvent);

eventRouter.delete('/events/:id', deleteEvent);



export default eventRouter;