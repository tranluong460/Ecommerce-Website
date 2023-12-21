import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':clerkId')
  getUserByClerkId(@Param('clerkId') clerkId: string) {
    return this.usersService.getUserByClerkId(clerkId);
  }

  @Patch(':clerkId')
  updateUserByClerkId(
    @Param('clerkId') clerkId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUserByClerkId(clerkId, updateUserDto);
  }

  @Delete(':clerkId')
  removeUserByClerkId(@Param('clerkId') clerkId: string) {
    return this.usersService.removeUserByClerkId(clerkId);
  }
}
