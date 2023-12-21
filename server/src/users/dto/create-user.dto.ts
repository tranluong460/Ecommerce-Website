import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';

class EmailAddresses {
  @IsEmail({}, { message: 'Email không đúng định dạng!' })
  @IsNotEmpty({ message: 'Email không được để trống!' })
  @IsString({ message: 'Email phải là chuỗi!' })
  email_address: string;

  @IsNotEmpty({ message: 'ID email không được để trống!' })
  @IsString({ message: 'ID email phải là chuỗi!' })
  email_address_id: string;
}

export class CreateUserDto {
  @IsNotEmpty({ message: 'Clerk ID không được để trống!' })
  @IsString({ message: 'Clerk ID phải là chuỗi!' })
  clerkId: string;

  @IsArray({ message: 'Danh sách email phải là mảng!' })
  @ArrayNotEmpty({ message: 'Danh sách email không được để trống!' })
  @ArrayMinSize(1, { message: 'Danh sách email ít nhất phải có một phần tử!' })
  @ValidateNested({
    each: true,
    message: 'Mỗi giá trị trong Danh sách email phải là đối tượng hoặc mảng',
  })
  @Type(() => EmailAddresses)
  email_addresses: EmailAddresses[];

  first_name?: string;

  last_name?: string;

  username?: string;

  primary_email_address_id?: string;

  photo?: string;

  banned?: boolean;
}
