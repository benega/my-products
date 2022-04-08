import { ProductModel } from "../models/product-model"

export type AuthenticationParams = {
  email: string
  password: string
}

export interface FavouriteProduct {
  add: (params: ProductModel) => Promise<void>;
  remove: (params: ProductModel) => Promise<void>;
}
