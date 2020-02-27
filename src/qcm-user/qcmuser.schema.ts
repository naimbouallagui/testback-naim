/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema } from 'mongoose';
export const qcmuserSchema: Schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    point: { type: Number}
})
