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
  async searchProducts(@Req() req: any, @Query('query') query: string) {
    return this.productsService.search(getUserFromReq(req), query);
  }

  @Get('/name/:name')
  async getByName(@Req() req: any, @Param('name') name: string) {
    return this.productsService.getByName(getUserFromReq(req), name);
  }

  @Get('/favourite')
  async searchFavourites(@Req() req: any, @Query('name') name: string) {
    return this.productsService.searchFavourites(getUserFromReq(req), name);
  }

  @Post('/favourite')
  async makeFavourite(@Req() req: any, @Body() productDto: ProductDto) {
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
