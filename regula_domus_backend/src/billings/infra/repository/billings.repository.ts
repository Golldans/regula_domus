import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BillingSchema } from "../schema/billings.schema";
import { Repository } from "typeorm";

@Injectable()
export class BillingsRepository {
    constructor(
        @InjectRepository(BillingSchema)
        private readonly repository: Repository<BillingSchema>,
    ) {}
}