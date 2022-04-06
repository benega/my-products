import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { User } from 'src/user/models/user';
import { ProductDto } from './dto/product.dto';
import { ProductsService } from './products.service';

const getUserFromReq = (req: any): User => {
  return req.user;
};

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async searchProducts(@Query('query') query: string) {
    console.log('searchProducts', query);
    console.log('searchProducts decodeURI', decodeURI(query));
    return this.productsService.search(query);
  }

  @Get('/name/:name')
  async getByName(@Param('name') name: string) {
    console.log('getByName', name);
    console.log('getByName decodeURI', decodeURI(name));
    return this.productsService.getByName(name);
  }

  @Get('/favourite')
  async searchFavourites(@Req() req: any, @Query('name') name: string) {
    console.log('search favourites');
    return this.productsService.getFavourites(getUserFromReq(req), name);
  }

  @Post('/favourite')
  async makeFavourite(@Req() req: any, @Body() productDto: ProductDto) {
    console.log('makeFavourite', productDto);
    return this.productsService.makeFavourite(getUserFromReq(req), productDto);
  }

  @Delete('/favourite')
  async removeFavourite(@Req() req: any, @Body() productDto: ProductDto) {
    return this.productsService.removeFavourite(
      getUserFromReq(req),
      productDto,
    );
  }
}
