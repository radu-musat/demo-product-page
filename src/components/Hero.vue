<template>
  <section
    class="container mx-auto py-8 md:pb-12 flex flex-col sm:gap-6 sm:flex-row sm:items-center lg:justify-between"
    id="hero"
  >
    <!-- Text Section -->
    <div class="text-center sm:text-left sm:w-7/12 mb-3 md:mb-0 flex flex-col">
      <h1 class="font-bold text-slate-700 mb-4">{{ product.title }}</h1>
      <p class="text-base text-gray-600 mb-3 lg:text-lg">
        {{ product.description }}
      </p>
      <div class="flex flex-col gap-2 justify-center sm:justify-start sm:flex-row items-center">
        <Button
          href="#"
          class="mr-3 mb-0 !bg-teal-400 text-white py-2 px-6 !rounded-full text-base font-semibold hover:bg-teal-500 transition duration-300 no-underline"
          @click="contactFormModalStore.toggleModal()"
        >
          Request a Quote
        </Button>
        <Button
          href="#"
          class="mr-3 mb-0 !bg-teal-400 text-white py-2 px-6 !rounded-full text-base font-semibold hover:bg-teal-500 transition duration-300 no-underline"
          @click="$emit('changeProduct')"
        >
          Show Other Product
        </Button>
      </div>
    </div>
    <!-- Image Section -->
    <div class="sm:w-4/12 h-60 sm:h-auto sm:h-96">
      <img
        :src="props.product.image"
        alt="Product Image"
        class="w-full h-full rounded-lg object-contain"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useContactFormModalStore } from '@/stores/contactFormModal';
import type { Product } from '@/types/product';
interface Props {
  product: Product;
}

const props = defineProps<Props>();
const emit = defineEmits(['changeProduct']);
const contactFormModalStore = useContactFormModalStore();
</script>

<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 115px);
}
</style>
