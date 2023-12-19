import {
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty({ message: 'ID người dùng không được để trống!' })
  @IsMongoId({ message: 'ID người dùng không hợp lệ!' })
  id_user: string;

  @IsNotEmpty({ message: 'Bình luận không được để trống!' })
  @IsString({ message: 'Bình luận phải là chuỗi!' })
  comment: string;

  @IsNotEmpty({ message: 'Bình luận không được để trống!' })
  @IsNumber({}, { message: 'Bình luận phải là số!' })
  @Min(1, { message: 'Đánh giá nhỏ nhất là 1' })
  @Max(5, { message: 'Đánh giá lớn nhất là 5' })
  rate: number;
}
