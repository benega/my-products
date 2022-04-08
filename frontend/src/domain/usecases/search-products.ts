import { ProductModel } from "../models/product-model";

export interface SearchProducts {
    search: (params: SearchProducts.Params) => Promise<SearchProducts.Model>
}

export namespace SearchProducts {
    export type Params = {
        name: string;
    }

    export type Model = ProductModel[]
}