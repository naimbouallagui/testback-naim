import  { Document } from 'mongoose';
export interface QcmUser extends Document{
    id: string,
    userId: string,
    point: string,
}