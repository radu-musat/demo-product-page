import AxiosService from '@/services/AxiosService';
import type { Product } from '@/types/product';

export default {
  async getProducts(): Promise<Product[]> {
    const response = await AxiosService.get('/products');
    return response.data;
  }
};
