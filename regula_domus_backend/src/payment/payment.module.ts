import { Module } from "@nestjs/common";
import { PaymentController } from "./presentation/payment.controller";
import { PaymentService } from "./domain/payment.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PaymentSchema } from "./infra/schema/payment.schema";
import { PaymentRepository } from "./infra/repository/payment.repository";

@Module({
    controllers: [PaymentController],
    exports: [PaymentService],
    imports: [TypeOrmModule.forFeature([
        PaymentSchema,
    ])],
    providers: [PaymentService, PaymentRepository],
})
export class PaymentModule {}
