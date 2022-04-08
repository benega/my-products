import { SearchProducts } from "../../domain/usecases/search-products";
import { HttpClient } from "../protocols/http-client";

export class RemoteSearchProducts implements SearchProducts {
    constructor(
        private readonly baseUrl: string,
        private readonly httpClient: HttpClient<SearchProducts.Model>
    ) { }

    async search(params: SearchProducts.Params): Promise<SearchProducts.Model> {
        const isUserLogged = !!localStorage.accessToken;
        const url = this.baseUrl + (isUserLogged ? '' : '/public');
        const res = await this.httpClient.request({
            method: "get",
            url: `${url}?query=${params.name}`,
            authorized: isUserLogged,
        });
        return res.body || [];
    }

}