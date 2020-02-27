import { Injectable } from "@nestjs/common";
import { User } from "./user.interface";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }
    async insertUser(obj: User) {
        return await this.userModel.create(obj);
    }
    async getUsers() {
        return await this.userModel.find();
    }
    
}
