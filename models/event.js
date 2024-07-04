import { Schema, model } from "mongoose";
import { toJSON } from '@reis/mongoose-to-json';

const eventSchema = new Schema({
    "name": { type: String, required: true, unique: true },
    "date": { type: Date, required: true },
    "price": { type: Number, required: true },
    "location": { type: String, required: true },
    "eventHost": {type: String},
    "eventDescription": {type: String, required: true},
    "eventFlier": { type: String }
}, {
    timestamps: true
});

eventSchema.plugin(toJSON);
//EXPORTING MODEL
export const EventModel = model('event', eventSchema);