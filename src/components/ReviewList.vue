<template>
  <section class="container mb-10" id="reviews">
    <div class="p-14 bg-teal-500 rounded">
      <h2 class="text-center mb-8 md:mb-12">They already made the decision choose our product</h2>
      <div class="flex-col sm:flex-row mx-auto flex flex-wrap gap-4">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="flex flex-col flex-1 bg-white p-4 rounded-lg shadow-md"
        >
          <h3 class="text-lg font-semibold text-gray-800">{{ review.name }}</h3>
          <p class="text-sm p-0 py-1 text-gray-600 mb-0">{{ review.description }}</p>
          <div class="flex items-center mt-auto">
            <span class="text-yellow-500" v-for="n in review.rating" :key="n">★</span>
            <span class="text-gray-400" v-for="n in 5 - review.rating" :key="n">★</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { Review } from '@/types/review';

const reviews = ref<Review[]>([
  { name: 'John Doe', description: 'Great product, highly recommend!', rating: 5 },
  { name: 'Jane Smith', description: 'Good quality, but a bit pricey.', rating: 4 },
  { name: 'Alice Johnson', description: 'Average experience, nothing special.', rating: 3 }
]);
</script>

<style scoped></style>
