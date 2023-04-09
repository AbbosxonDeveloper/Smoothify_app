import { Transform } from "class-transformer";
import { IsString,IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @Length(1,40)
    @Transform(({value}) => value.trim())
    username: string;

    @IsString()
    @IsNotEmpty()
    @Length(8,40)
    @Transform(({value}) => value.trim())
    password: string;

}
