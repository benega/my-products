import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async searchProducts(@Query('query') query: string) {
    return this.productsService.search(query);
  }

  @Get('/favourites')
  async searchFavourites(@Query('query') query: string) {
    return this.productsService.getFavourites(query);
  }
}
