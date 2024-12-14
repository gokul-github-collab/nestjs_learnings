import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}

  findAll(userId?: string) {
    const user = this.usersService.findOneById(userId);
    return [
      {
        user: user,
        title: 'dfsdfs',
        content: 'sfookg',
      },
      {
        user: user,
        title: 'dfsdfs',
        content: 'sfookg',
      },
      {
        user: userId,
        title: 'dfsdfs',
        content: 'sfookg',
      },
    ];
  }
}
