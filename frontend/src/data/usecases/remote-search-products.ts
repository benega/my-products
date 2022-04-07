import { SearchProducts } from "../../domain/usecases/search-products";
import { HttpClient } from "../protocols/http-client";

export class RemoteSearchProducts implements SearchProducts {
    constructor(
        private readonly url: string,
        private readonly httpClient: HttpClient<SearchProducts.Model>
    ) { }

    async search(params: SearchProducts.Params): Promise<SearchProducts.Model> {
        const res = await this.httpClient.request({
            method: "get",
            url: `${this.url}/public?query=${params.name}`,
            // url: `http://localhost:3000/products/public?query=${params.name}`,
        });
        return res.body || [];
    }
}