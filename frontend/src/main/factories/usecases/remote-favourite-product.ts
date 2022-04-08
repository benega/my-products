import { RemoteFavouriteProduct } from "../../../data/usecases/remote-favourite-product"
import { FavouriteProduct } from "../../../domain/usecases/favourite-product"
import { makeApiUrl } from "../http/api-url-factory"
import { makeAxiosHttpClient } from "../http/axios-http-client-factory"

export const makeRemoteFavouriteProduct = (): FavouriteProduct => {
    return new RemoteFavouriteProduct(makeApiUrl('products/favourite'), makeAxiosHttpClient())
}
