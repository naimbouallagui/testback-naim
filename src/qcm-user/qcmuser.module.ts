import { Module } from '@nestjs/common';
import {  QcmUserController } from './qcmuser.controller';
import {  QcmUserService } from './qcmuser.service';
import { MongooseModule } from '@nestjs/mongoose';
import { qcmuserSchema } from './qcmuser.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'QcmUser', schema: qcmuserSchema}])],
  controllers: [QcmUserController],
  providers: [QcmUserService],
  exports: [QcmUserService]

})
export class QcmUserModule {}