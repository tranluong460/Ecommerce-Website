import {
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty({ message: 'Clerk Id không được để trống!' })
  @IsString({ message: 'Clerk Id phải là chuỗi!' })
  clerkId: string;

  id_user?: string;

  @IsNotEmpty({ message: 'ID sản phẩm không được để trống!' })
  @IsMongoId({ message: 'ID sản phẩm không hợp lệ!' })
  id_product: string;

  @IsNotEmpty({ message: 'Bình luận không được để trống!' })
  @IsString({ message: 'Bình luận phải là chuỗi!' })
  comment: string;

  @IsNotEmpty({ message: 'Bình luận không được để trống!' })
  @IsNumber({}, { message: 'Bình luận phải là số!' })
  @Min(1, { message: 'Đánh giá nhỏ nhất là 1' })
  @Max(5, { message: 'Đánh giá lớn nhất là 5' })
  rate: number;
}
