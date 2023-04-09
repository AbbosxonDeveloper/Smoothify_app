import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Repository, TreeRepository } from 'typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckToken } from 'src/utils/checktoken';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [UsersController],
  providers: [UsersService, CheckToken],
})
export class UsersModule {}
