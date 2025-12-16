import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BillingSchema } from "../schema/billings.schema";
import { Repository } from "typeorm";

@Injectable()
export class BillingsRepository {
    constructor(
        @InjectRepository(BillingSchema)
        private readonly repository: Repository<BillingSchema>,
    ) {}

    async findAll() {
        return this.repository.find();
    }

    async findById(id: number) {
        return this.repository.findOne({ where: { id } });
    }

    async findByUserId(userId: number) {
        return this.repository.find({ where: { userId } });
    }

    async create(billingData: Partial<BillingSchema>) {
        const billing = this.repository.create(billingData);
        return this.repository.save(billing);
    }

    async update(id: number, billingData: Partial<BillingSchema>) {
        await this.repository.update(id, billingData);
        return this.findById(id);
    }

    async delete(id: number) {
        await this.repository.softDelete(id);
    }
}