import { 
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
  HttpCode,
  Controller,
  HttpStatus, 
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}


  @Post('/create')
  @HttpCode(HttpStatus.ACCEPTED)
  create(@Headers() headers: any,@Body() body: PostDto) {
    return this.postsService.create(body, headers);
  }

  @Get('/getall')
  @HttpCode(HttpStatus.ACCEPTED)
  getAll(@Headers() headers: any) {
    return this.postsService.getAll(headers);
  }
}
