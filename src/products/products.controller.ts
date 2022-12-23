import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common'
import { ProductsService } from './products.service'
import { Product } from './schemas/product.schema'

@Controller('products')
export class ProductsController {
  @Inject(ProductsService)
  private readonly productsService: ProductsService

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return await this.productsService.findAll()
  }

  @Get(':id')
  async getProductById(@Param('id') id: string): Promise<Product> {
    return await this.productsService.findById(id)
  }

  @Post()
  async createProduct(@Body() body: Product): Promise<Product> {
    return await this.productsService.create(body)
  }

  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() body: Product): Promise<Product> {
    return await this.productsService.update(id, body)
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<Product> {
    return await this.productsService.delete(id)
  }
}