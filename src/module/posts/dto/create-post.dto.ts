import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, IsUUID, MaxLength } from "class-validator";

export class PostDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(245)
    @Transform(({value}) => value.trim())
    post_title: string;
}