import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./entities/user.entity";

@Module({
    controllers: [UserController],
    imports: [
        MongooseModule.forFeature([
            { name: 'User', schema: UserSchema }
        ])
    ],
    providers: [UserService],
    exports: []
})
export class UserModule { }