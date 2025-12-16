import { Injectable } from "@nestjs/common";
import { BillingsRepository } from "../infra/repository/billings.repository";
import { BillingSchema } from "../infra/schema/billings.schema";

@Injectable()
export class BillingService {
    constructor(
        private readonly billingRepository: BillingsRepository,
    ) {}

    async listAll() {
        return this.billingRepository.findAll();
    }

    async listByUserId(userId: number) {
        return this.billingRepository.findByUserId(userId);
    }

    async deleteBilling(id: number) {
        return this.billingRepository.delete(id);
    }

    async updateBilling(id: number, billingData: Partial<BillingSchema>) {
        return this.billingRepository.update(id, {
            value: billingData.value,
        });
    }

    async createBilling(billingData: Partial<BillingSchema>) {
        return this.billingRepository.create({
            ...billingData,
            value: Number(billingData.value) * 100,
        });
    }
}