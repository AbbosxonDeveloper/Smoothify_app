import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import jwt from './jwt'
import { UserEntity } from 'src/entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { TreeRepository } from 'typeorm'

export class CheckToken {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userentity: TreeRepository<UserEntity>
    ){}
    async verify(headers: any){
        const auth = headers.authorization
        if(!auth || !auth.trim()){
            throw new HttpException("You don't have token", HttpStatus.BAD_REQUEST)
        }

        const id: any = jwt.verify(auth)
        
        const find = await this.userentity.findOneBy({user_id: id})

        if(!find){
            throw new HttpException("User Not Found", HttpStatus.NOT_FOUND)
        }
        return id
    }
}