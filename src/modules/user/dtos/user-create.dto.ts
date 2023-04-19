import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UserCreateDto{

    @ApiProperty({
        description: 'user name',
        example: 'Oliver white',
    })
    @IsNotEmpty()
    @IsString()
    name: string

    @ApiProperty({
        description: 'email address',
        example: 'username@mail.com',
    })
    @IsNotEmpty()
    @IsString()
    email: string;
}