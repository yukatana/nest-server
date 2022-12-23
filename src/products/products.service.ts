import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Product, ProductDocument } from './schemas/product.schema'
import { Model } from 'mongoose'

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  async create(product: Product): Promise<Product> {
    const createdProduct = new this.productModel(product)
    return createdProduct.save()
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec()
  }

  async findById(id: string): Promise<Product> {
    return this.productModel.findById(id)
  }

  async update(id: string, data: Product): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, data)
  }

  async delete(id: string): Promise<Product> {
    return this.productModel.findByIdAndDelete(id)
  }
}
