import { Module } from "@nestjs/common";
import { BillingController } from "./presentation/billings.controller";
import { BillingService } from "./domain/billings.service";
import { BillingsRepository } from "./infra/repository/billings.repository";

@Module({
    controllers: [BillingController],
    exports: [BillingService],
    imports: [],
    providers: [BillingService, BillingsRepository]
})
export class BillingModule {}
