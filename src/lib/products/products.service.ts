import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {

  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>,
  ) { }


  async create(createProductDto: CreateProductDto) {
    const resp = await this.productModel.create(createProductDto)
    return resp;
  }

  async findAll() {
    return await this.productModel.find();
  }

  async findOne(id: number) {
    const resp = await this.productModel.findOne({ codProduct: id });
    return resp;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const resp = await this.productModel.updateOne({ codProduct: id, updateProductDto: updateProductDto })
    return resp;
  }

  async remove(id: number) {
    const resp = await this.productModel.deleteOne({ codProduct: id });
    return resp;
  }
}
