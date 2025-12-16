import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "../domain/user.service";

export interface RegisterUserRequest {
    email: string;
    name?: string;
    password: string;
}

@Controller({
    path: "/user",
    version: "1",
})
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}


    @Post("/register")
    async registerUser(@Body() body: RegisterUserRequest) {
        return this.userService.registerUser(body);
    }

    @Post("/login")
    async loginUser(@Body() body: RegisterUserRequest) {
        return this.userService.loginUser(body);
    }
}