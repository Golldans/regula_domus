import { Module } from '@nestjs/common';
import { BillingModule } from './billings/billings.module';
import { ServicesModule } from './services/services.module';
import { UserModule } from './user/user.module';
import { AlertModule } from './alert/alert.module';

@Module({
  imports: [
    AlertModule,
    BillingModule,
    ServicesModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
