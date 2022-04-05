import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsSearchFacade } from './api/products-search-facade';

@Module({
  providers: [ProductsService, ProductsSearchFacade],
  controllers: [ProductsController],
})
export class ProductsModule {}
