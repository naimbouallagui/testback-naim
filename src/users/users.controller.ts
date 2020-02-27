/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Post, Body, Get} from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./user.interface";


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    @Post()
    async addUser( @Body() obj: User ):Promise<User> {
        return  await this.usersService.insertUser(obj);
    }

    @Get('/getAllUser')
    async getAllUsers() {
        const users = await this.usersService.getUsers();
        return users;
    }
}