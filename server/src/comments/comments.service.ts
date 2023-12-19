import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const createComment = new this.commentModel(createCommentDto);

    if (!createComment) {
      throw new NotFoundException('Thêm mới bình luận thất bại!');
    }

    await this.productModel
      .updateMany(
        { _id: createComment.id_product },
        { $push: { comments: createComment._id } },
      )
      .exec();

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
      .updateMany({ comments: id }, { $pull: { comments: id } })
      .exec();

    return removeComment;
  }
}
