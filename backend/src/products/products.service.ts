import { Injectable } from '@nestjs/common';
import { ProductsSearchFacade } from './api/products-search-facade';
import { Product } from './models/product';

@Injectable()
export class ProductsService {
  constructor(private productsSearch: ProductsSearchFacade) {}

  async search(query: string): Promise<Product[]> {
    return this.productsSearch.search(query);
  }

  async getByName(name: string): Promise<Product> {
    const encodedName = encodeURI(name);
    const res = await this.search(encodedName);
    return res.find((p) => encodeURI(p.name) == encodedName);
  }

  async getFavourites(query: string): Promise<Product[]> {
    const res = await this.search(query);
    return res.filter((p) => p.isFavourited);
  }
}
