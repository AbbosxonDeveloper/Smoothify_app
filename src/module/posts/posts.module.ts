import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { PostEntity } from 'src/entities/post.entity';
import { CheckToken } from 'src/utils/checktoken';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, PostEntity])
  ],
  controllers: [PostsController],
  providers: [PostsService, CheckToken]
})
export class PostsModule {}
