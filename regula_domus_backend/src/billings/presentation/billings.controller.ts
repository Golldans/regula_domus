import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BillingService } from "../domain/billings.service";
import { BillingSchema } from "../infra/schema/billings.schema";

@Controller({
    path: "/billing",
    version: "1",
})
export class BillingController {

    constructor(
        private readonly billingService: BillingService,
    ) { }


    @Get("")
    async listBillings() {
        return this.billingService.listAll();
    }

    @Get("/user/:userId")
    async listBillingsByUserId(@Param("userId") userId: number) {
        return this.billingService.listByUserId(userId);
    }

    @Post("")
    async createBilling(@Body() body: Partial<BillingSchema>) {
        return await this.billingService.createBilling(body);
    }

    @Delete("/:id")
    async deleteBilling(@Param("id") id: number) {
        return this.billingService.deleteBilling(id);
    }

    @Put("/:id")
    async updateBilling(@Param("id") id: number, @Body() body: Partial<BillingSchema>) {
        return this.billingService.updateBilling(id, body);
    }
}