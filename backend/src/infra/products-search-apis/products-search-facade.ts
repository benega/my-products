import { Injectable } from '@nestjs/common';
import { ProductSearchInfo } from './product-search-info';
import { ProductsSearchApi } from './products-search-api';
import { SephoraApi } from './sephora-api';

@Injectable()
export class ProductsSearchFacade {
  private apis: ProductsSearchApi[];

  constructor() {
    this.apis = [new SephoraApi()];
  }

  async search(query: string): Promise<ProductSearchInfo[]> {
    const res = await Promise.all(this.apis.map((api) => api.search(query)));
    return res.flatMap((prods) => prods);
  }
}
