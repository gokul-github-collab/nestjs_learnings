import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreatePostsDto } from './dtos/create-posts.dto';
import { PatchPostDto } from './dtos/patch-post.dto';
import path from 'path';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get(':userId?')
  @ApiParam({
    name: 'userId',
    type: 'number',
    example: '12',
    required: false,
    description: 'Filter user by ID',
  })
  getPosts(
    @Param('userId', new DefaultValuePipe(1), ParseIntPipe) userId: string,
  ) {
    console.log(userId);
    return this.postsService.findAll(userId);
  }

  @Post()
  createPost(@Body() createPostDto: CreatePostsDto) {
    return createPostDto instanceof CreatePostsDto;
  }

  @Patch()
  updatePost(@Body() patchPostDto: PatchPostDto) {
    return patchPostDto instanceof PatchPostDto;
  }
}
