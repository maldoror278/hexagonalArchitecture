import { Model } from 'mongoose';
import { IGenericRepository } from '../../domain/abstracts/generic-repository.abstract';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
    private _repository: Model<T>;
    private _populateOnFind: string[];

    constructor(repository: Model<T>, populateOnFind: string[] = []) {
        this._repository = repository;
        this._populateOnFind = populateOnFind;
    }

    async getAll(): Promise<T[]> {
        return this._repository.find().populate(this._populateOnFind).exec();
    }
    async getById(id: number): Promise<any> {
        return this._repository.findById(id).populate(this._populateOnFind).exec();
    }
    async create(item: T): Promise<T> {
        return this._repository.create(item);
    }
    async update(id: string, item: any): Promise<any> {
        return this._repository.findByIdAndUpdate(id, item);
    }
}
