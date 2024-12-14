import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { DatabaseService } from 'src/database/database.service';

/**
 * Class to connect to Users table and perform business operations
 */
@Injectable()
export class UsersService {
  /**
   * The method to get all users from the database
   */
  constructor(private readonly dataBaseService: DatabaseService) {}

  async createUser(createUserDto: CreateUserDto) {
    return this.dataBaseService.users.create({ data: createUserDto });
  }
  findAll(getUserParamDto: GetUserParamDto, limit: number, page: number) {
    return [
      {
        firstName: 'John',
        email: 'john@email.com',
      },
      {
        firstName: 'Gokul',
        email: 'gokul@email.com',
      },
      {
        firstName: 'Doe',
        email: 'doe@email.com',
      },
      {
        firstName: 'Addams',
        email: 'addams@email.com',
      },
      {
        firstName: 'pattu',
        email: 'pattu@email.com',
      },
    ];
  }

  findOneById(userId: string) {
    return {
      id: userId,

      firstName: 'pattu',
      email: 'pattu@email.com',
    };
  }
}
