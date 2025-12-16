import { Injectable } from "@nestjs/common";
import { ServicesRepository } from "../infra/repository/services.repository";

@Injectable()
export class ServicesService {
    constructor(
        private readonly servicesRepository: ServicesRepository,
    ) {}
}