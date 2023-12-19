import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Comment } from 'src/comments/entities/comment.entity';

export type ProductDocument = HydratedDocument<Product>;

class Size {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  quantity: number;
}

class ColorImage {
  @Prop({ required: true })
  url: string;
}

class Attribute {
  @Prop({ required: true })
  color: string;

  @Prop({ required: true, type: [Size] })
  sizes: Size[];

  @Prop({ required: true, type: [ColorImage] })
  color_images: ColorImage[];
}

class Highlight {
  @Prop({ required: true })
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

  @Prop({ type: [Attribute] })
  attributes: Attribute[];

  @Prop({
    required: true,
    type: [Highlight],
  })
  highlights: Highlight[];

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
