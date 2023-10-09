import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.enity';
import { IDataService } from '../../domain/abstracts/data-services.abstract';
import { CreateUserDto } from 'src/users/infrastructure/dtos/save-users.dto';

@Injectable()
export class AddUserUseCase {
    @Inject(IDataService)
    private readonly dataService: IDataService;

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        return await this.dataService.users.create(createUserDto);
    }
}
