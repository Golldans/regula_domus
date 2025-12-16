import { Module } from '@nestjs/common';
import { BillingModule } from './billings/billings.module';
import { ServicesModule } from './services/services.module';
import { UserModule } from './user/user.module';
import { AlertModule } from './alert/alert.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    AlertModule,
    BillingModule,
    ServicesModule,
    UserModule,
    PaymentModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'regula_domus',
        entities: [__dirname + '/**/*.schema{.ts,.js}'],
        synchronize: true,
      }),
    }),
    //DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
