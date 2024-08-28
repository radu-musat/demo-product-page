import type { Product } from '@/types/product';
import { defineStore } from 'pinia';
import ProductsService from '@/services/ProductsService';
interface State {
  activeProduct: Product | null;
  allProducts: Product[] | null;
}
export const useProductsStore = defineStore('productsStore', {
  state: (): State => ({
    activeProduct: null,
    allProducts: null
  }),
  getters: {
    getProduct(s: State): Product | undefined {
      if (s.activeProduct) {
        return s.activeProduct;
      }
    },
    getProducts(s: State): Product[] | undefined {
      if (s.allProducts) {
        return s.allProducts;
      }
    }
  },
  actions: {
    async setProducts(): Promise<void> {
      const response = await ProductsService.getProducts();
      this.allProducts = response;
    },
    setProduct(product: Product): void {
      this.activeProduct = product;
    }
  }
});
