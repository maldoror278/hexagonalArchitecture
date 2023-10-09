import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { DataServicesModule } from './services/data-services/data-services.module';

@Module({
    imports: [ProductsModule, UsersModule, DataServicesModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
