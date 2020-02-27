import { Injectable } from "@nestjs/common";
import {  QcmUser } from "./qcmuser.interface";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class QcmUserService {

    constructor(@InjectModel('QcmUser') private readonly qcmuserModel: Model<QcmUser>) { }
    async insertQuestion(obj: QcmUser) {
        return await this.qcmuserModel.create(obj);
    }
    
}
