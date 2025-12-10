import { Module } from '@nestjs/common';
import { BillingModule } from './billings/billings.module';
import { ServicesModule } from './services/services.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    BillingModule,
    ServicesModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
