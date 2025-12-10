import { Injectable } from "@nestjs/common";
import { BillingsRepository } from "../infra/repository/billings.repository";

@Injectable()
export class BillingService {
    constructor(
        private readonly billingRepository: BillingsRepository,
    ) {}
}