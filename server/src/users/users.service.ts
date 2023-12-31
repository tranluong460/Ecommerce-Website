import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUserByClerk(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(createUserDto);

    if (!createUser) {
      throw new NotFoundException('Thêm mới người dùng thất bại!');
    }

    return createUser.save();
  }

  async getUserByClerkId(clerkId: string): Promise<User> {
    const oneUser = await this.userModel.findOne({ clerkId }).exec();

    if (!oneUser) {
      throw new NotFoundException('Người dùng không tồn tại!');
    }

    return oneUser;
  }

  async updateUserByClerkId(
    clerkId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const updateUser = await this.userModel
      .findOneAndUpdate({ clerkId }, { $set: updateUserDto }, { new: true })
      .exec();

    if (!updateUser) {
      throw new NotFoundException('Cập nhật người dùng thất bại!');
    }

    return updateUser;
  }

  async removeUserByClerkId(clerkId: string) {
    const removeUser = await this.userModel
      .findOneAndDelete({ clerkId })
      .exec();

    if (!removeUser) {
      throw new NotFoundException('Xóa người dùng thất bại!');
    }

    return removeUser;
  }
}
