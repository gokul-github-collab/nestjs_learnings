import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id?')
  @ApiOperation({
    summary: 'Fetches users from database',
  })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully based on the query',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    example: '10',
    required: false,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    example: '1',
    required: false,
  })
  findAll(
    @Param() getUserParamDto: GetUserParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(getUserParamDto);
    return this.usersService.findAll(getUserParamDto, limit, page);
  }
  @Patch()
  patchUsers(@Body(new ValidationPipe()) patchUserDto: PatchUserDto) {
    console.log(patchUserDto);
    return 'used PATCH method in users';
  }

  @Post()
  createUsers(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    console.log(createUserDto instanceof CreateUserDto);
    return this.usersService.createUser(createUserDto);
  }
}
