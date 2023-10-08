export abstract class IGenericRepository<T> {
    abstract getAll(): Promise<T[]>;
    abstract getById(id: number): Promise<T>;
    abstract create(item: T): Promise<T>;
    abstract update(id: string, item: T): Promise<T>;
}
