import { Controller, Get } from "@nestjs/common";
import { BillingService } from "../domain/billings.service";

@Controller({
    path: "/billing",
    version: "1",
})
export class BillingController {

    constructor(
        private readonly billingService: BillingService,
    ) {}


    @Get("")
    async listBillings() {
        return this.billingService.listAll();
    }
    
}