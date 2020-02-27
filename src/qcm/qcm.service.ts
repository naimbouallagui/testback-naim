import { Injectable } from "@nestjs/common";
import { Qcm } from "./qcm.interface";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class QcmService {

    constructor(@InjectModel('Qcm') private readonly qcmModel: Model<Qcm>) { }
    async insertQuestion(obj: Qcm) {
        return await this.qcmModel.create(obj);
    }
    
}
