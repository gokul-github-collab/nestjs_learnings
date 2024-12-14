import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  login(email: string, username: string, password: string) {
    const user = this.usersService.findOneById('212131');

    return 'SAMPLE_TOKEN';
  }

  isAuth() {
    return true;
  }
}
