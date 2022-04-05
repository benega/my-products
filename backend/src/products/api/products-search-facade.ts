import { Injectable } from '@nestjs/common';
import { Product } from '../models/product';
import { ProductsSearchApi } from './products-search-api';
import { SephoraApi } from './sephora-api';

@Injectable()
export class ProductsSearchFacade {
  private apis: ProductsSearchApi[];

  constructor() {
    this.apis = [new SephoraApi()];
  }

  async search(query: string): Promise<Product[]> {
    const res = await Promise.all(this.apis.map((api) => api.search(query)));
    return res.flatMap((prods) => prods);
  }

  async getByName(name: string): Promise<Product> {
    const res = await this.search(name);
    console.log('getByName', name, res);
    return res.find((p) => p.name == name);
  }
}
