import { Module } from "@nestjs/common";
import { AlertController } from "./presentation/alert.controller";
import { AlertService } from "./domain/alert.service";
import { AlertRepository } from "./infra/repository/alert.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AlertSchema } from "./infra/schema/alert.schema";

@Module({
    controllers: [AlertController],
    exports: [AlertService],
    imports: [
        TypeOrmModule.forFeature([
            AlertSchema,
        ]),
    ],
    providers: [AlertService, AlertRepository],
})
export class AlertModule { }
