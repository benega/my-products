import { Product } from '../models/product';

export interface ProductsSearchApi {
  search(query: string): Promise<Product[]>;
}
