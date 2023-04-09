import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { CreateUserDto, LoginDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ){}

  @Post('/register')
  register(@Body() body: CreateUserDto){  
    return this.usersService.register(body)
  }

  @Post('/login')
  login(@Body() body: LoginDto){
    return this.usersService.login(body)
  }

  @Get('/verify')
  async verify(@Headers() headers: any){
    return this.usersService.verify(headers.authorization)
  }
}


