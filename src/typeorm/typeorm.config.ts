import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from 'dotenv'
import { UserEntity } from "src/entities/user.entity";
dotenv.config()

export const typeormConfig: TypeOrmModuleOptions = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME,
    database: process.env.DATABASE,
    entities: [
        __dirname + "/../**/*.entity{.ts,.js}"
    ],
    synchronize: true
}