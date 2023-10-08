import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { DataServicesModule } from './services/data-services/data-services.module';

@Module({
    imports: [ProductsModule, UsersModule, DataServicesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
