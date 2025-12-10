import { Module } from "@nestjs/common";
import { ServicesController } from "./presentation/services.controller";
import { ServicesService } from "./domain/services.service";
import { ServicesRepository } from "./infra/repository/services.repository";

@Module({
    controllers: [ServicesController],
    exports: [ServicesService],
    imports: [],
    providers: [ServicesService, ServicesRepository]
})
export class ServicesModule {}
