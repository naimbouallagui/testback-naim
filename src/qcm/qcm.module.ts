import { Module } from '@nestjs/common';
import { QcmController } from './Qcm.controller';
import { QcmService } from './Qcm.service';
import { MongooseModule } from '@nestjs/mongoose';
import { qcmSchema } from './qcm.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Qcm', schema: qcmSchema}])],
  controllers: [QcmController],
  providers: [QcmService],
  exports: [QcmService]

})
export class QcmModule {}