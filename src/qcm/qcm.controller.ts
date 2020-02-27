/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Post, Body} from "@nestjs/common";
import { QcmService } from "./Qcm.service";


@Controller('qcm')
export class QcmController {
    constructor(private readonly qcmService: QcmService) { }
    @Post()
    async addQuestion( @Body() obj: any ):Promise<any> {
        const addQuest = await this.qcmService.insertQuestion(obj);
       
        if(addQuest.question == addQuest.reponse){
            addQuest.point = 3;
            return {point : '3'}
            
        } else{
            addQuest.point = -1;
            return  {point : '-1'}

        }
    }
}