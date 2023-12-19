import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import { Product } from '../products/entities/product.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
    @InjectModel(Product.name) private productModel: Model<Product>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const user = await this.userModel.findOne({
      clerkId: createCommentDto.clerkId,
    });

    if (!user) {
      throw new NotFoundException('Không tìm thấy người dùng!');
    }

    const product = await this.productModel.findOne({
      _id: createCommentDto.id_product,
    });

    if (!product) {
      throw new NotFoundException('Không tìm thấy sản phẩm!');
    }

    const createComment = new this.commentModel({
      ...createCommentDto,
      id_user: user._id,
    });

    if (!createComment) {
      throw new NotFoundException('Thêm mới bình luận thất bại!');
    }

    await this.productModel
      .updateMany(
        { _id: product._id },
        { $push: { id_comments: createComment._id } },
      )
      .exec();

    await this.userModel.updateMany(
      { _id: user._id },
      { $push: { id_comments: createComment._id } },
    );

    return createComment.save();
  }

  async findAll(): Promise<Comment[]> {
    const allComments = await this.commentModel.find().exec();

    if (allComments.length === 0) {
      throw new NotFoundException('Không có danh sách bình luận!');
    }

    return allComments;
  }

  async findOne(id: string): Promise<Comment> {
    const oneComment = await this.commentModel.findById(id).exec();

    if (!oneComment) {
      throw new NotFoundException('Không có thông tin bình luận!');
    }

    return oneComment;
  }

  async update(
    id: string,
    updateCommentDto: UpdateCommentDto,
  ): Promise<Comment> {
    const updateComment = await this.commentModel
      .findByIdAndUpdate(id, { $set: updateCommentDto }, { new: true })
      .exec();

    if (!updateComment) {
      throw new NotFoundException('Cập nhật bình luận thất bại!');
    }

    return updateComment;
  }

  async remove(id: string) {
    const removeComment = await this.commentModel.findByIdAndDelete(id).exec();

    if (!removeComment) {
      throw new NotFoundException('Xóa bình luận thất bại!');
    }

    await this.productModel
      .updateMany({ id_comments: id }, { $pull: { id_comments: id } })
      .exec();

    await this.userModel
      .updateMany({ id_comments: id }, { $pull: { id_comments: id } })
      .exec();

    return removeComment;
  }
}
