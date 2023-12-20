import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createProduct = new this.productModel(createProductDto);

    if (!createProduct) {
      throw new NotFoundException('Thêm mới sản phẩm thất bại!');
    }

    return createProduct.save();
  }

  async findAll(): Promise<Product[]> {
    const allProducts = await this.productModel.find().exec();

    if (allProducts.length === 0) {
      throw new NotFoundException('Không có danh sách sản phẩm!');
    }

    return allProducts;
  }

  async findOne(id: string): Promise<Product> {
    const oneProduct = await this.productModel
      .findById(id)
      .populate('id_comments')
      .exec();

    if (!oneProduct) {
      throw new NotFoundException('Không có thông tin sản phẩm!');
    }

    return oneProduct;
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const updateProduct = await this.productModel
      .findByIdAndUpdate(id, { $set: updateProductDto }, { new: true })
      .exec();

    if (!updateProduct) {
      throw new NotFoundException('Cập nhật sản phẩm thất bại!');
    }

    return updateProduct;
  }

  async remove(id: string) {
    const removeProduct = await this.productModel.findByIdAndDelete(id).exec();

    if (!removeProduct) {
      throw new NotFoundException('Xóa sản phẩm thất bại!');
    }

    return removeProduct;
  }
}
