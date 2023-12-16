import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Clerk ID không được để trống!' })
  @IsString({ message: 'Clerk ID phải là chuỗi!' })
  clerkId: string;

  @IsEmail({}, { message: 'Email không đúng định dạng!' })
  @IsNotEmpty({ message: 'Email không được để trống!' })
  @IsString({ message: 'Email phải là chuỗi!' })
  email: string;

  firstName?: string;

  lastName?: string;

  username?: string;

  photo?: string;
}
