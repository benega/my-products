import { ProductsSearchFacade } from 'src/infra/products-search-apis/products-search-facade';
import { Product } from '../models/product';

const products: Product[] = [
  { id: '1', name: 'iPhone 11', price: 1000, isFavourited: false },
  { id: '2', name: '1Phone 12', price: 2000, isFavourited: true },
  { id: '3', name: '1Phone XR', price: 3000, isFavourited: true },
  { id: '4', name: '1Phone 13', price: 4000, isFavourited: false },
];

export class ProductsRepository {
  productsSearch: ProductsSearchFacade;

  constructor() {
    this.productsSearch = new ProductsSearchFacade();
  }

  list(): Product[] {
    return products;
  }

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
