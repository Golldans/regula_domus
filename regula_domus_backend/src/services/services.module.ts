import { Module } from "@nestjs/common";
import { ServicesController } from "./presentation/services.controller";
import { ServicesService } from "./domain/services.service";
import { ServicesRepository } from "./infra/repository/services.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServicesSchema } from "./infra/schema/services.schema";

@Module({
    controllers: [ServicesController],
    exports: [ServicesService],
    imports: [TypeOrmModule.forFeature([
        ServicesSchema,
    ])],
    providers: [ServicesService, ServicesRepository]
})
export class ServicesModule {}
