import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from 'src/entities/post.entity';
import { UserEntity } from 'src/entities/user.entity';
import { CheckToken } from 'src/utils/checktoken';
import { TreeRepository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userentity: TreeRepository<UserEntity>,

    @InjectRepository(PostEntity)
    private readonly postentity: TreeRepository<PostEntity>,

    private readonly tokenservice: CheckToken
  ){}

  async create(payload: any, headers: any): Promise<unknown>{
    const findUserId = await this.tokenservice.verify(headers)

    await this.postentity.createQueryBuilder()
    .insert()
    .into(PostEntity)
    .values({user: findUserId, post_title: payload.post_title})
    .execute()

    return 'created';
  }

  async getAll(headers: any): Promise<unknown>{
    const findUserId: any = await this.tokenservice.verify(headers)

    const getUser = await this.userentity.find({relations: {allposts: true}})
    return getUser
  }
}
