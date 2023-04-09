import { registerAs } from "@nestjs/config";


interface IAppConfig {
    host: string;
    port: number;
}

export const appConfig = registerAs(
    'app',
    (): IAppConfig => ({
        port: process.env.PORT ? +process.env.PORT : undefined,
        host: process.env.HOST ? process.env.HOST : undefined
    })
)