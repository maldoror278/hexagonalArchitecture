import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.enity';
import { IDataService } from '../../domain/abstracts/data-services.abstract';

@Injectable()
export class AddUserUseCase {
    @Inject(IDataService)
    private readonly dataService: IDataService;

    async createUser(user: User): Promise<User> {
        return this.dataService.users.create(user);
    }
}
