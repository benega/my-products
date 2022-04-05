import { Module } from '@nestjs/common';
import { ProductsSearchFacade } from './products-search-apis/products-search-facade';

@Module({
  providers: [ProductsSearchFacade],
  exports: [ProductsSearchFacade],
})
export class InfraModule {}
