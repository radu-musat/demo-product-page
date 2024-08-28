<template>
  <Dialog v-model:visible="visible" modal header="Contact Form" class="w-full max-w-lg">
    <span class="text-surface-500 dark:text-surface-400 block mb-8">
      Enter your contact details
    </span>
    <div class="flex flex-col gap-4 mb-2">
      <label for="firstName" class="font-semibold w-24">First Name</label>
      <InputText id="firstName" class="flex-auto" autocomplete="off" v-model="firstName" />
    </div>
    <div class="flex flex-col gap-4 mb-2">
      <label for="lastName" class="font-semibold w-24">Last Name</label>
      <InputText id="lastName" class="flex-auto" autocomplete="off" v-model="lastName" />
    </div>
    <div class="flex flex-col gap-4 mb-2">
      <label for="email" class="font-semibold w-24">Email</label>
      <InputText id="email" class="flex-auto" autocomplete="off" v-model="email" />
    </div>
    <div class="flex flex-col gap-4 mb-4">
      <label for="message" class="font-semibold w-24">Message</label>
      <Textarea id="message" class="flex-grow resize-none max-h-20" v-model="message" />
    </div>
    <div class="flex justify-end gap-2">
      <Button
        type="button"
        label="Cancel"
        severity="secondary"
        @click="contactFormModalStore.toggleModal()"
      />
      <Button type="button" label="Send" @click="sendEmail" />
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import AxiosService from '@/services/AxiosService';
import { ref, computed } from 'vue';
import { useContactFormModalStore } from '@/stores/contactFormModal';
import type { WritableComputedRef } from 'vue';

const contactFormModalStore = useContactFormModalStore();
const visible: WritableComputedRef<boolean> = computed({
  get() {
    return contactFormModalStore.formModalIsOpen;
  },
  set() {
    contactFormModalStore.toggleModal();
  }
});

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const message = ref('');

const sendEmail = async () => {};
</script>

<style scoped lang="scss"></style>
