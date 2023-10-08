import { User } from '../entities/user.enity';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataService {
    abstract users: IGenericRepository<User>;
}
