import { Injectable } from "@nestjs/common";
import { PaymentRepository } from "../infra/repository/payment.repository";
import { PaymentSchema } from "../infra/schema/payment.schema";

@Injectable()
export class PaymentService {
    constructor(
        private readonly paymentRepository: PaymentRepository,
    ) {}

    async listAll() {
        return this.paymentRepository.findAll();
    }

    async createPayment(paymentData: Partial<PaymentSchema>) {
        return this.paymentRepository.create(paymentData);
    }

    async deletePayment(id: number) {
        return this.paymentRepository.delete(id);
    }

    async updatePayment(id: number, paymentData: Partial<PaymentSchema>) {
        return this.paymentRepository.update(id, paymentData);
    }

    async listByUserId(userId: number) {
        return this.paymentRepository.findByUserId(userId);
    }
}