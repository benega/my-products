import { Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get('/:name')
  async getByName(@Param('name') name: string) {
    console.log('getByName', name);
    console.log('getByName decodeURI', decodeURI(name));
    return this.productsService.getByName(name);
  }

  @Get('/favourites')
  async searchFavourites(@Query('query') query: string) {
    return this.productsService.getFavourites(query);
  }
}
