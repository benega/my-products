import { InvalidCredentialsError } from "../../domain/errors/invalid-credentials-error";
import { UnexpectedError } from "../../domain/errors/unexpected-error";
import { ProductModel } from "../../domain/models/product-model";
import { FavouriteProduct } from "../../domain/usecases/favourite-product";
import { HttpClient, HttpResponse, HttpStatusCode } from "../protocols/http-client"

export class RemoteFavouriteProduct implements FavouriteProduct {
    constructor(
        private readonly url: string,
        private readonly httpClient: HttpClient<void>
    ) { }

    async add(product: ProductModel): Promise<void> {
        const httpResponse = await this.httpClient.request({
            method: "post",
            url: this.url,
            body: product,
            authorized: true,
        });
        this.handleResponse(httpResponse);
    }

    async remove(product: ProductModel): Promise<void> {
        const httpResponse = await this.httpClient.request({
            method: "delete",
            url: this.url,
            body: product,
            authorized: true,
        })
        this.handleResponse(httpResponse);
    }

    async getAll(): Promise<ProductModel[]> {
        const httpRes = await this.httpClient.request({
            method: "get",
            url: this.url,
            authorized: true,
        });
        this.handleResponse(httpRes);

        const data: any = httpRes.body;
        return data as ProductModel[];
    }

    handleResponse(res: HttpResponse) {
        switch (res.statusCode) {
            case HttpStatusCode.ok:
                break;
            case HttpStatusCode.unauthorized:
                throw new InvalidCredentialsError()
            default:
                throw new UnexpectedError()
        }
    }
}
