import axios, { AxiosRequestConfig } from 'axios';
import { ProductSearchInfo } from './product-search-info';
import { ProductsSearchApi } from './products-search-api';

const sanitizePrice = (priceStr: string): number => {
  return Number(priceStr.split('-')[0].replace('$', ''));
};

const prepareRequestOptions = (query: string): AxiosRequestConfig<any> => ({
  method: 'GET',
  url: process.env.SEPHORA_API_URL,
  params: { q: query, pageSize: '100', currentPage: '1' },
  headers: {
    'X-RapidAPI-Host': process.env.SEPHORA_API_HOST,
    'X-RapidAPI-Key': process.env.SEPHORA_API_KEY,
  },
});

export class SephoraApi implements ProductsSearchApi {
  async search(query: string): Promise<ProductSearchInfo[]> {
    try {
      const res = await axios.request(prepareRequestOptions(query));
      return res.data.products.map(
        (p): ProductSearchInfo => ({
          name: p.productName,
          picture: p.image250,
          price: sanitizePrice(p.currentSku.listPrice),
        }),
      );
    } catch (e) {
      console.error(e);
      return [];
    }
  }
}
