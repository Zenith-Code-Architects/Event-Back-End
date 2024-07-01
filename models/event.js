import { Schema, model } from "mongoose";
import {toJSON} from '@reis/mongoose-to-json';

const eventSchema = new Schema({
    "name": {type: String, required: true},
    "date": {type: Date, required: true},
    "price": {type: String},
    "location": {type: String},
    "flierURL": {type: String}
}, {
    timestamps: true
});

eventSchema.plugin(toJSON);
//EXPORTING MODEL
export const EventModel = model('event', eventSchema);