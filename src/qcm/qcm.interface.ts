import  { Document } from 'mongoose';
export interface Qcm extends Document{
    id: string,
    question: string,
    reponse: string,
    point: number,
}