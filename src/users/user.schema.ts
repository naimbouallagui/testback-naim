/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema } from 'mongoose';
export const userSchema: Schema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})
