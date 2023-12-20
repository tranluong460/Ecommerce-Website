import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Comment } from '../../comments/entities/comment.entity';

export type UserDocument = HydratedDocument<User>;

enum UserRole {
  Admin = 'Admin',
  User = 'User',
}

@Schema({ timestamps: true, versionKey: false })
export class User {
  @Prop({ required: true, unique: true })
  clerkId: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: false })
  firstName: string;

  @Prop({ required: false })
  lastName: string;

  @Prop({ required: false, unique: true })
  username: string;

  @Prop({ required: false })
  photo: string;

  @Prop({
    required: false,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  })
  id_comments: Comment[];

  @Prop({ default: UserRole.User, enum: UserRole })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
