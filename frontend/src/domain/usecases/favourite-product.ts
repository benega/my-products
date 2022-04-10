import { ProductModel } from "../models/product-model"


export interface FavouriteProduct {
  add: (params: ProductModel) => Promise<void>;
  remove: (params: ProductModel) => Promise<void>;
  getAll: () => Promise<ProductModel[]>;
}
