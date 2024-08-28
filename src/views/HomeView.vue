<template>
  <main>
    <Hero :product="activeProduct" v-if="activeProduct" @change-product="setRandomProduct" />
    <ReviewList />
    <BenefitsList />
    <ContactModal />
  </main>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useProductsStore } from '@/stores/products';
import { storeToRefs } from 'pinia';
import Hero from '@/components/Hero.vue';
import type { ComputedRef } from 'vue';
import type { Product } from '@/types/product';
import ReviewList from '@/components/ReviewList.vue';
import BenefitsList from '@/components/BenefitsList.vue';
import ContactModal from '@/components/ContactFormModal.vue';
const productsStore = useProductsStore();
const { getProducts } = storeToRefs(productsStore);
const activeProduct: ComputedRef<Product | undefined> = computed(() => productsStore.getProduct);

let lastIndex = -1;
const setRandomProduct = (): void => {
  if (getProducts.value?.length) {
    let randomIndex: number = Math.floor(Math.random() * getProducts.value.length);
    while (lastIndex === randomIndex) {
      randomIndex = Math.floor(Math.random() * getProducts.value.length);
    }
    lastIndex = randomIndex;
    productsStore.setProduct(getProducts.value[randomIndex]);
  }
};

onMounted(async () => {
  await productsStore.setProducts();
  setRandomProduct();
});
</script>

<style scoped></style>
