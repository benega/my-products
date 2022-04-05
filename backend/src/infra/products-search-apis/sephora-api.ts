import axios, { AxiosRequestConfig } from 'axios';
import { ProductSearchInfo } from './product-search-info';
import { ProductsSearchApi } from './products-search-api';

const sanitizePrice = (priceStr: string): number => {
  const res = priceStr.split('-')[0].replace('$', '');
  console.log('sanitizePrice', res);
  return Number(res);
};

export class SephoraApi implements ProductsSearchApi {
  async search(query: string): Promise<ProductSearchInfo[]> {
    const options: AxiosRequestConfig<any> = {
      method: 'GET',
      url: 'https://sephora.p.rapidapi.com/products/search',
      params: { q: query, pageSize: '100', currentPage: '1' },
      headers: {
        'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
        'X-RapidAPI-Key': '70de8bc5b3msh7985f146c2a8404p10a7e0jsn80e2d8f6a2c1',
      },
    };

    try {
      const res = await axios.request(options);
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
