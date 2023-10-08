import { Module } from '@nestjs/common';
import { UserController } from './infrastructure/controllers/user.controller';
import { MongoDataServiceModule } from './infrastructure/mongo-data-service/mongo-data-service.module';
import { AddUserUseCase } from './aplication/useCase/add-user-use-case';
@Module({
    imports: [MongoDataServiceModule],
    controllers: [UserController],
    providers: [AddUserUseCase],
    exports: [AddUserUseCase],
})
export class UsersModule {}
