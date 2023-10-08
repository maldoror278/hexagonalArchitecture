import { Module } from '@nestjs/common';
import { MongoDataServiceModule } from '../../users/infrastructure/mongo-data-service/mongo-data-service.module';

@Module({
    imports: [MongoDataServiceModule],
    exports: [MongoDataServiceModule],
})
export class DataServicesModule {}
