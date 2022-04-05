import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsSearchFacade } from 'src/infra/products-search-apis/products-search-facade';

@Module({
  providers: [ProductsService, ProductsSearchFacade],
  controllers: [ProductsController],
})
export class ProductsModule {}
