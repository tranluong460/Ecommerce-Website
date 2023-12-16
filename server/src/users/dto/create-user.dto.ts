import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Clerk ID không được để trống!' })
  @IsString({ message: 'Clerk ID phải là chuỗi!' })
  clerkId: string;

  @IsNotEmpty({ message: 'Họ không được để trống!' })
  @IsString({ message: 'Họ phải là chuỗi!' })
  firstName: string;

  @IsNotEmpty({ message: 'Tên không được để trống!' })
  @IsString({ message: 'Tên phải là chuỗi!' })
  lastName: string;

  @IsEmail({}, { message: 'Email không đúng định dạng!' })
  @IsNotEmpty({ message: 'Email không được để trống!' })
  @IsString({ message: 'Email phải là chuỗi!' })
  email: string;

  username?: string;

  @IsNotEmpty({ message: 'Hình ảnh không được để trống!' })
  @IsString({ message: 'Hình ảnh phải là chuỗi!' })
  photo: string;
}
