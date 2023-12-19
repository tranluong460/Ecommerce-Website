import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

class Size {
  @IsNotEmpty({ message: 'Tên kích thước không được để trống!' })
  @IsString({ message: 'Tên kích thước phải là chuỗi!' })
  name: string;

  @IsNotEmpty({ message: 'Số lượng kích thước không được để trống!' })
  @IsNumber({}, { message: 'Số lượng kích thước phải là số!' })
  @Min(0, { message: 'Số lượng kích thước nhỏ nhất là không!' })
  quantity: number;
}

class ColorImage {
  @IsNotEmpty({ message: 'Ảnh theo màu không được để trống!' })
  @IsString({ message: 'Ảnh theo màu phải là chuỗi!' })
  url: string;
}

class Attribute {
  @IsNotEmpty({ message: 'Màu không được để trống!' })
  @IsString({ message: 'Màu phải là chuỗi!' })
  color: string;

  @IsArray({ message: 'Kích thước phải là mảng!' })
  @ArrayNotEmpty({ message: 'Kích thước không được để trống!' })
  @ArrayMinSize(1, { message: 'Kích thước ít nhất phải có một phần tử!' })
  @ValidateNested({
    each: true,
    message: 'Mỗi giá trị trong kích thước phải là đối tượng hoặc mảng!',
  })
  @Type(() => Size)
  sizes: Size[];

  @IsArray({ message: 'Ảnh theo màu phải là mảng!' })
  @ArrayNotEmpty({ message: 'Ảnh theo màu không được để trống!' })
  @ArrayMinSize(1, { message: 'Ảnh theo màu ít nhất phải có một phần tử!' })
  @ValidateNested({
    each: true,
    message: 'Mỗi giá trị trong ảnh theo màu phải là đối tượng hoặc mảng',
  })
  @Type(() => ColorImage)
  color_images: ColorImage[];
}

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
  @Min(1, { message: 'Giá nhỏ nhất là một!' })
  price: number;

  @IsNotEmpty({ message: 'Giá gốc không được để trống!' })
  @IsNumber({}, { message: 'Giá gốc phải là số!' })
  @Min(1, { message: 'Giá gốc nhỏ nhất là 1' })
  original_price: number;

  @IsArray({ message: 'Điểm nổi bật phải là mảng!' })
  @ArrayNotEmpty({ message: 'Điểm nổi bật không được để trống!' })
  @ArrayMinSize(1, { message: 'Điểm nổi bật ít nhất phải có một phần tử!' })
  @ValidateNested({
    each: true,
    message: 'Mỗi giá trị trong điểm nổi bật phải là đối tượng hoặc mảng',
  })
  @Type(() => Highlight)
  highlights: Highlight[];

  @IsArray({ message: 'Thuộc tính phải là mảng!' })
  @ArrayNotEmpty({ message: 'Thuộc tính không được để trống!' })
  @ArrayMinSize(1, { message: 'Thuộc tính ít nhất phải có một phần tử!' })
  @ValidateNested({
    each: true,
    message: 'Mỗi giá trị trong thuộc tính phải là đối tượng hoặc mảng',
  })
  @Type(() => Attribute)
  attributes: Attribute[];

  @IsNotEmpty({ message: 'Mô tả ngắn không được để trống!' })
  @IsString({ message: 'Mô tả ngắn phải là chuỗi!' })
  short_description: string;

  @IsNotEmpty({ message: 'Mô tả không được để trống!' })
  @IsString({ message: 'Mô tả phải là chuỗi!' })
  description: string;

  id_comments?: string[];
}
