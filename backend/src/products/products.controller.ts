import { Controller, Get, Query } from '@nestjs/common';
import { ProductsRepository } from './repositories/products.repository';

@Controller('products')
export class ProductsController {
  repository: ProductsRepository;

  constructor() {
    this.repository = new ProductsRepository();
  }

  @Get()
  async searchProducts(@Query('query') query: string) {
    console.log('query', query);
    return this.repository.search(query);
  }

  @Get('/favourites')
  async searchFavourites(@Query('query') query: string) {
    return this.repository.getFavourites(query);
  }
}
