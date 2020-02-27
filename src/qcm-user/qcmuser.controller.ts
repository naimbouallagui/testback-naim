/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller} from "@nestjs/common";
import {  QcmUserService } from "./qcmuser.service";


@Controller('qcmuser')
export class QcmUserController {
    constructor(private readonly qcmuserService: QcmUserService) { }
   
}