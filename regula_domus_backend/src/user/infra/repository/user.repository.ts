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

    async findAll() {
        return this.repository.find();
    }

    async findById(id: number) {
        return this.repository.findOne({ where: { id } });
    }

    async findbyEmail(email: string) {
        return this.repository.findOne({ where: { email } });
    }

    async create(userData: Partial<UserSchema>) {
        const user = this.repository.create(userData);
        return this.repository.save(user);
    }

    async update(id: number, userData: Partial<UserSchema>) {
        await this.repository.update(id, userData);
        return this.findById(id);
    }
}