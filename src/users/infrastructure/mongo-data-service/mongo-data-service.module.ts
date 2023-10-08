import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { IDataService } from '../../domain/abstracts/data-services.abstract';
import { MongoDataService } from './mongo-data-services.service';
@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), MongooseModule.forRoot('mongodb://localhost:27017/nest')],
    providers: [
        {
            provide: IDataService,
            useClass: MongoDataService,
        },
    ],
    exports: [IDataService],
})
export class MongoDataServiceModule {}
