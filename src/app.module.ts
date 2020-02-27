import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { QcmModule } from './qcm/qcm.module';
import { QcmUserModule } from './qcm-user/qcmuser.module';


@Module({
  imports: [UsersModule, QcmModule, QcmUserModule, MongooseModule.forRoot('mongodb://localhost/testback')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
