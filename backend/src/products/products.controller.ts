import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async searchProducts(@Query('query') query: string) {
    console.log('searchProducts', query);
    console.log('searchProducts decodeURI', decodeURI(query));
    return this.productsService.search(query);
  }

  @Get()
  async getByName(@Query('name') name: string) {
    console.log('searchProducts', name);
    console.log('searchProducts decodeURI', decodeURI(name));
    return this.productsService.getByName(name);
  }

  @Get('/favourites')
  async searchFavourites(@Query('query') query: string) {
    return this.productsService.getFavourites(query);
  }
}
