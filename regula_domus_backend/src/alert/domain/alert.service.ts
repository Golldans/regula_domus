import { Injectable } from "@nestjs/common";
import { AlertRepository } from "../infra/repository/alert.repository";

@Injectable()
export class AlertService {
    constructor(
        private readonly alertRepository: AlertRepository,
    ) {}
}