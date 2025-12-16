import { Controller } from "@nestjs/common";
import { AlertService } from "../domain/alert.service";

@Controller({
    path: "/alert",
    version: "1",
})
export class AlertController {
    constructor(
        private readonly alertService: AlertService,
    ) {}
}