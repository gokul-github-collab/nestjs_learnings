import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePostsDto } from './create-posts.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class PatchPostDto extends PartialType(CreatePostsDto) {
  @ApiProperty({
    description: 'ID of the post that needs to be updated',
  })
  @IsInt()
  @IsNotEmpty()
  id: number;
}
