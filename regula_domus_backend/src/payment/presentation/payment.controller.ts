import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { PaymentService } from "../domain/payment.service";
import { PaymentSchema } from "../infra/schema/payment.schema";

@Controller({
    path: "/payment",
    version: "1",
})
export class PaymentController {
    constructor(
        private readonly paymentService: PaymentService,
    ) {}

    @Get("/userId/:userId")
    async listPaymentsByUserId(@Param("userId") userId: number) {
        return this.paymentService.listByUserId(userId);
    }

    @Post("")
    async createPayment(@Body() body: Partial<PaymentSchema>) {
        return await this.paymentService.createPayment(body);
    }

    @Delete("/:id")
    async deletePayment(@Param("id") id: number) {
        return this.paymentService.deletePayment(id);
    }
}