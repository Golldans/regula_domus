import { Module } from "@nestjs/common";
import { UserController } from "./presentation/user.controller";
import { UserService } from "./domain/user.service";
import { UserRepository } from "./infra/repository/user.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserSchema } from "./infra/schema/user.schema";

@Module({
    controllers: [UserController],
    exports: [UserService],
    imports: [TypeOrmModule.forFeature([
        UserSchema,
    ])],
    providers: [UserService, UserRepository]
})
export class UserModule {}
