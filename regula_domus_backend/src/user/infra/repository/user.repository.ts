import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserSchema } from "../schema/user.schema";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(UserSchema)
        private readonly repository: Repository<UserSchema>,
    ) {}
}