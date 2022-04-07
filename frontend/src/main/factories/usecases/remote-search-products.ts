import { RemoteSearchProducts } from "../../../data/usecases/remote-search-products";
import { SearchProducts } from "../../../domain/usecases/search-products";
import { makeAxiosHttpClient } from "../http/axios-http-client-factory";

export const makeRemoteSearchProducts = (): SearchProducts =>
    new RemoteSearchProducts(makeAxiosHttpClient())