import { Injectable } from "@nestjs/common";
import { UserRepository } from "../infra/repository/user.repository";
import { RegisterUserRequest } from "../presentation/user.controller";

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
    ) {}

    async registerUser(request: RegisterUserRequest) {
        return this.userRepository.create({
            email: request.email, name: request.name, password: request.password,
        });
    }

    async loginUser(request: RegisterUserRequest) {
        const user = await this.userRepository.findbyEmail(request.email);

        if (!user) {
            throw new Error("User not found");
        }

        if (user && user.password === request.password) {
            return user;
        }
        throw new Error("Invalid credentials");
    }
}