import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/users/entities/user.entity';
import { Product } from 'src/products/entities/product.entity';

export type ProductDocument = HydratedDocument<Comment>;

@Schema({ timestamps: true, versionKey: false })
export class Comment {
  @Prop({ required: true })
  clerkId: string;

  @Prop({ required: false, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  id_user: User;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  })
  id_product: Product;

  @Prop({ required: true })
  comment: string;

  @Prop({ required: true, min: 1, max: 5 })
  rate: number;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
