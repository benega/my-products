import { Controller, Get, Query } from '@nestjs/common';
import { ProductsRepository } from './repositories/products.repository';

@Controller('products')
export class ProductsController {
  repository: ProductsRepository;

  constructor() {
    this.repository = new ProductsRepository();
  }

  @Get()
  async fetchProducts(@Query('name') name?: string) {
    console.log('query name', name);
    return this.repository.list();
  }

  @Get('/favourites')
  async fetchFavourites(@Query('name') name?: string) {
    return this.repository.getFavourites();
  }
}
