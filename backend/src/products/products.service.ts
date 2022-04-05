import { Injectable } from '@nestjs/common';
import { ProductsSearchFacade } from 'src/infra/products-search-apis/products-search-facade';
import { Product } from './models/product';

@Injectable()
export class ProductsService {
  constructor(private productsSearch: ProductsSearchFacade) {}

  async search(query: string): Promise<Product[]> {
    const search = await this.productsSearch.search(query);
    return search.map((p) => ({
      id: '',
      isFavourited: false,
      name: p.name,
      price: p.price,
    }));
  }

  async getFavourites(query: string): Promise<Product[]> {
    const res = await this.search(query);
    return res.filter((p) => p.isFavourited);
  }
}
