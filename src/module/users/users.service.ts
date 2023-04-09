import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import jwt from 'src/utils/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userentity: Repository<UserEntity>,
  ){}

  async register(payload: unknown): Promise<unknown>{
    const {raw: [raw]} = await this.userentity.createQueryBuilder()
    .insert()
    .into(UserEntity)
    .values(payload)
    .returning(['*'])
    .execute()
    
    return jwt.sign(raw.user_id)
  }

  async login(payload: unknown): Promise<unknown>{
    const findUser = await this.userentity.findOneBy(payload)

    if(!findUser){
      return 'User Not Found'
    }else {
      return jwt.sign(findUser.user_id)
    }
  }

  async verify(token: string): Promise<unknown>{
    return jwt.verify(token)
  }
}
