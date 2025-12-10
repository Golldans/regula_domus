import { Module } from "@nestjs/common";
import { UserController } from "./presentation/user.controller";
import { UserService } from "./domain/user.service";
import { UserRepository } from "./infra/repository/user.repository";

@Module({
    controllers: [UserController],
    exports: [UserService],
    imports: [],
    providers: [UserService, UserRepository]
})
export class UserModule {}
