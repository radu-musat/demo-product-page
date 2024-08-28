<template>
  <section class="benefits py-8">
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">Why You’ll Love It</h2>
      <div class="flex flex-col gap-6">
        <!-- Loop through benefits array -->
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-md p-6 lg:p-8 text-center lg:text-left"
        >
          <div
            class="flex-shrink-0 w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center mb-4 lg:mb-0 lg:mr-6"
          >
            <i :class="benefit.iconClass + ' text-white text-3xl'"></i>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-700 mb-2">{{ benefit.title }}</h3>
            <p class="text-gray-600">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Define the array of benefits
const benefits = ref([
  {
    title: 'High Quality',
    description:
      'Our product is made with the highest quality materials, ensuring durability and longevity.',
    iconClass: 'pi pi-star'
  },
  {
    title: 'Easy to Use',
    description:
      'Designed with user-friendliness in mind, making it simple to use right out of the box.',
    iconClass: 'pi pi-check'
  },
  {
    title: 'Affordable Price',
    description: 'Get the best value for your money with our competitively priced product.',
    iconClass: 'pi pi-tag'
  }
]);
</script>
