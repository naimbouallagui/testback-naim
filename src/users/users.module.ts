import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { userSchema } from "./user.schema";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";

@Module({
    imports: [MongooseModule.forFeature([{name: 'User', schema: userSchema}])],
    controllers : [UsersController],
    providers : [UsersService],
    exports: [UsersService]
})
export class UsersModule {}