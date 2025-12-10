import { Module } from "@nestjs/common";
import { AlertController } from "./presentation/alert.controller";
import { AlertService } from "./domain/alert.service";
import { AlertRepository } from "./infra/repository/alert.repository";

@Module({
    controllers: [AlertController],
    exports: [AlertService],
    imports: [],
    providers: [AlertService, AlertRepository],
})
export class AlertModule {}
