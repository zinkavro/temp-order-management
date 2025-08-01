import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'jayavel',
      database: 'orders_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    OrderModule,
  ],
})
export class AppModule {}
