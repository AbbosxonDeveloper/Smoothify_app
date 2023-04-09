import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'
import { config } from './config';
import {TypeOrmModule} from '@nestjs/typeorm'
import { typeormConfig } from './typeorm/typeorm.config';
import { UsersModule } from './module/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(config),
    TypeOrmModule.forRoot(typeormConfig),
    UsersModule
  ],
})
export class AppModule {}
