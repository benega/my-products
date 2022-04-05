import { Product } from '../models/product';

const products: Product[] = [
  { id: '1', name: 'iPhone 11', price: 1000, isFavourited: false },
  { id: '2', name: '1Phone 12', price: 2000, isFavourited: true },
  { id: '3', name: '1Phone XR', price: 3000, isFavourited: true },
  { id: '4', name: '1Phone 13', price: 4000, isFavourited: false },
];

export class ProductsRepository {
  list(): Product[] {
    return products;
  }

  getFavourites(): Product[] {
    return this.list().filter((p) => p.isFavourited);
  }
}
