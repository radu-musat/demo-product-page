<template>
  <nav class="sticky top-0 bg-stone-100 z-50">
    <Menubar :model="items" class="container !border-none md:mb-1 !rounded-none !bg-stone-100">
      <template #start>
        <img class="max-w-24 rounded" src="@/assets/img/logo.png" alt="logo" />
      </template>
      <template #item="{ item, props }">
        <a
          class="flex items-center"
          v-bind="props.action"
          v-if="item.callBack"
          @click="item.callBack()"
        >
          <span class="text-lg font-bold">{{ item.label }}</span>
        </a>
        <a
          class="flex items-center"
          v-bind="props.action"
          @click="scrollToElement(item.scrollTo)"
          v-else
        >
          <span class="text-lg font-bold">{{ item.label }}</span>
        </a>
      </template>
    </Menubar>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useContactFormModalStore } from '@/stores/contactFormModal';
import Menubar from 'primevue/menubar';
import type { Ref } from 'vue';
import type { MenuItem } from 'primevue/menuitem';

const contactFormModalStore = useContactFormModalStore();
const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const offset = 150;
    const topPosition = element.getBoundingClientRect().top + window.scrollY - offset;

    const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
    const scrollBehavior = isFirefox ? 'instant' : 'smooth';

    window.scrollTo({
      top: topPosition,
      behavior: scrollBehavior
    });
  }
};
const items: Ref<MenuItem[]> = ref([
  {
    label: 'Product',
    scrollTo: 'hero'
  },
  {
    label: 'Reviews',
    scrollTo: 'reviews'
  },
  {
    label: 'Contact',
    callBack: () => {
      contactFormModalStore.toggleModal();
    }
  }
]);

onMounted(() => {});

onBeforeUnmount(() => {});
</script>
<style scoped lang="scss">
:deep(.p-menubar-button) {
  margin-left: auto;
}

:deep(.p-menubar-root-list) {
  margin-left: auto;
}
</style>
