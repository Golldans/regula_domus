import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PaymentSchema } from "../schema/payment.schema";
import { Repository } from "typeorm";

@Injectable()
export class PaymentRepository {
    constructor(
        @InjectRepository(PaymentSchema)
        private readonly repository: Repository<PaymentSchema>,
    ) {}

    async findAll() {
        return this.repository.find();
    }

    async findById(id: number) {
        return this.repository.findOne({ where: { id } });
    }

    async findByUserId(userId: number) {
        return this.repository.find({ where: { userId }, order: { createdAt: "DESC" } });
    }

    async create(paymentData: Partial<PaymentSchema>) {
        const payment = this.repository.create(paymentData);
        return this.repository.save(payment);
    }

    async update(id: number, paymentData: Partial<PaymentSchema>) {
        await this.repository.update(id, paymentData);
        return this.findById(id);
    }

    async delete(id: number) {
        await this.repository.softDelete(id);
    }
}