import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

class Highlight {
  @IsNotEmpty({ message: 'Tên điểm nổi bật không được để trống!' })
  @IsString({ message: 'Tên điểm nổi bật phải là chuỗi!' })
  name: string;
}

export class CreateProductDto {
  @IsNotEmpty({ message: 'Tên không được để trống!' })
  @IsString({ message: 'Tên phải là chuỗi!' })
  name: string;

  @IsNotEmpty({ message: 'Giá không được để trống!' })
  @IsNumber({}, { message: 'Giá phải là số!' })
  @Min(1, { message: 'Giá nhỏ nhất là 1' })
  price: number;

  @IsNotEmpty({ message: 'Giá gốc không được để trống!' })
  @IsNumber({}, { message: 'Giá gốc phải là số!' })
  @Min(1, { message: 'Giá gốc nhỏ nhất là 1' })
  original_price: number;

  @ArrayNotEmpty({ message: 'Điểm nổi bật không được để trống!' })
  @ArrayMinSize(1, { message: 'Điểm nổi bật ít nhất phải có một phần tử!' })
  @ValidateNested({ each: true })
  @Type(() => Highlight)
  highlights: Highlight[];

  @IsNotEmpty({ message: 'Mô tả ngắn không được để trống!' })
  @IsString({ message: 'Mô tả ngắn phải là chuỗi!' })
  short_description: string;

  @IsNotEmpty({ message: 'Mô tả không được để trống!' })
  @IsString({ message: 'Mô tả phải là chuỗi!' })
  description: string;

  comments?: string[];
}
