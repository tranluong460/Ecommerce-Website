import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(createUserDto);

    if (!createUser) {
      throw new NotFoundException('Thêm mới người dùng thất bại!');
    }

    return createUser.save();
  }

  async findAll(): Promise<User[]> {
    const allUsers = await this.userModel.find().exec();

    if (allUsers.length === 0) {
      throw new NotFoundException('Không có danh sách người dùng!');
    }

    return allUsers;
  }

  async findOne(id: string): Promise<User> {
    const oneUser = await this.userModel.findById(id).exec();

    if (!oneUser) {
      throw new NotFoundException('Không có thông tin người dùng!');
    }

    return oneUser;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updateUser = await this.userModel
      .findByIdAndUpdate(id, { $set: updateUserDto }, { new: true })
      .exec();

    if (!updateUser) {
      throw new NotFoundException('Cập nhật người dùng thất bại!');
    }

    return updateUser;
  }

  async remove(id: string) {
    const removeUser = await this.userModel.findByIdAndDelete(id).exec();

    if (!removeUser) {
      throw new NotFoundException('Xóa người dùng thất bại!');
    }

    return removeUser;
  }
}
