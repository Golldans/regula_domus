import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ServicesSchema } from "../schema/services.schema";
import { Repository } from "typeorm";

@Injectable()
export class ServicesRepository {
    constructor(
        @InjectRepository(ServicesSchema)
        private readonly repository: Repository<ServicesSchema>,
) {}
}