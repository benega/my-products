import { ProductSearchInfo } from './product-search-info';

export interface ProductsSearchApi {
  search(query: string): Promise<ProductSearchInfo[]>;
}
