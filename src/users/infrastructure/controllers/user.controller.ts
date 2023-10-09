import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Param, Post } from '@nestjs/common';
import { AddUserUseCase } from '../../aplication/useCase/add-user-use-case';
import { CreateUserDto } from '../dtos/save-users.dto';

@Controller({ path: 'users' })
export class UserController {
    constructor(@Inject(AddUserUseCase) private readonly addUserUseCase: AddUserUseCase) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.addUserUseCase.createUser(createUserDto);
    }
}
