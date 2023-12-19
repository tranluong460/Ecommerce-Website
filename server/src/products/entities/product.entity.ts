import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Comment } from 'src/comments/entities/comment.entity';

export type ProductDocument = HydratedDocument<Product>;

interface IHighlights {
  name: string;
}

@Schema({ timestamps: true, versionKey: false })
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  original_price: number;

  @Prop({
    required: true,
    type: [{ _id: false, name: { type: String, required: true } }],
  })
  highlights: IHighlights[];

  @Prop({ required: true })
  short_description: string;

  @Prop({ required: true })
  description: string;

  @Prop({
    required: false,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  })
  id_comments: Comment[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
