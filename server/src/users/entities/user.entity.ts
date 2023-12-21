import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Comment } from '../../comments/entities/comment.entity';

export type UserDocument = HydratedDocument<User>;

enum UserRole {
  Administrator = 'Administrator',
  User = 'User',
}

class EmailAddresses {
  @Prop({ required: true })
  email_address: string;
}

@Schema({ timestamps: true, versionKey: false })
export class User {
  @Prop({ required: true, unique: true })
  clerkId: string;

  @Prop({ required: true, type: [EmailAddresses] })
  email_addresses: EmailAddresses[];

  @Prop({ required: false })
  first_name: string;

  @Prop({ required: false })
  last_name: string;

  @Prop({ required: false, unique: true })
  username: string;

  @Prop({ required: false })
  photo: string;

  @Prop({ required: false })
  primary_email_address_id: string;

  @Prop({
    required: false,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  })
  id_comments: Comment[];

  @Prop({ required: false })
  banned: boolean;

  @Prop({ default: UserRole.User, enum: UserRole })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
