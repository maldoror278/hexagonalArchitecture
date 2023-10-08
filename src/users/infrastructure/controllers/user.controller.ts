import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Param, Post } from '@nestjs/common';
//import { CreateUserDto } from '../dtos/save-users.dto';
import { AddUserUseCase } from '../../aplication/useCase/add-user-use-case';

@Controller({ path: 'users' })
export class UserController {
    @Inject(AddUserUseCase)
    private readonly addUserUseCase: AddUserUseCase;

    @Get()
    @HttpCode(HttpStatus.OK)
    async find() {
        const response = {
            status: ' success general',
        };
        return response;
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('id') id: string) {
        const response = {
            status: ` success findOne ${id}}`,
        };
        return response;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createUser(@Body() userDto) {
        this.addUserUseCase.createUser(userDto);
    }
}
