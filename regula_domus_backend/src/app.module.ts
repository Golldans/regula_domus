import { Module } from '@nestjs/common';
import { BillingModule } from './billings/billings.module';
import { ServicesModule } from './services/services.module';
import { UserModule } from './user/user.module';
import { AlertModule } from './alert/alert.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AlertModule,
    BillingModule,
    ServicesModule,
    UserModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root123',
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
