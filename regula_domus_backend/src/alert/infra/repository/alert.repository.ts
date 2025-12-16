import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AlertSchema } from "../schema/alert.schema";
import { Repository } from "typeorm";

@Injectable()
export class AlertRepository {
    constructor(
        @InjectRepository(AlertSchema)
        private readonly repository: Repository<AlertSchema>,
    ) {}
}