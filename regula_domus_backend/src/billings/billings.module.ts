import { Module } from "@nestjs/common";
import { BillingController } from "./presentation/billings.controller";
import { BillingService } from "./domain/billings.service";
import { BillingsRepository } from "./infra/repository/billings.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BillingSchema } from "./infra/schema/billings.schema";

@Module({
    controllers: [BillingController],
    exports: [BillingService],
    imports: [TypeOrmModule.forFeature([
        BillingSchema,
    ])],
    providers: [BillingService, BillingsRepository]
})
export class BillingModule {}
