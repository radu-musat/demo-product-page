<template>
  <Navbar />
  <RouterView />
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>

<style scoped lang="scss"></style>
