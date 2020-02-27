/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema } from 'mongoose';
export const qcmSchema: Schema = new Schema({
    question: { type: String, required: true },
    reponse: { type: String, required: true },
    point: { type: Number , default: 3}
})
