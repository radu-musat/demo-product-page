<template>
  <Dialog v-model:visible="visible" modal header="Contact Form" class="w-full max-w-lg">
    <span class="text-surface-500 dark:text-surface-400 block mb-8">
      Enter your contact details
    </span>

    <!-- First Name Field -->
    <div class="flex flex-col gap-4 mb-2">
      <label for="firstName" class="font-semibold w-24">First Name</label>
      <InputText
        id="firstName"
        class="flex-auto"
        autocomplete="off"
        v-model="firstName"
        :class="{ 'border-red-500': errors.firstName }"
      />
      <span v-if="errors.firstName" class="text-red-500 text-sm">First name is required.</span>
    </div>

    <!-- Last Name Field -->
    <div class="flex flex-col gap-4 mb-2">
      <label for="lastName" class="font-semibold w-24">Last Name</label>
      <InputText
        id="lastName"
        class="flex-auto"
        autocomplete="off"
        v-model="lastName"
        :class="{ 'border-red-500': errors.lastName }"
      />
      <span v-if="errors.lastName" class="text-red-500 text-sm">Last name is required.</span>
    </div>

    <!-- Email Field -->
    <div class="flex flex-col gap-4 mb-2">
      <label for="email" class="font-semibold w-24">Email</label>
      <InputText
        id="email"
        class="flex-auto"
        autocomplete="off"
        v-model="email"
        :class="{ 'border-red-500': errors.email }"
      />
      <span v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</span>
    </div>

    <!-- Message Field -->
    <div class="flex flex-col gap-4 mb-4">
      <label for="message" class="font-semibold w-24">Message</label>
      <Textarea
        id="message"
        class="flex-grow resize-none max-h-20"
        v-model="message"
        :class="{ 'border-red-500': errors.message }"
      />
      <span v-if="errors.message" class="text-red-500 text-sm">Message is required.</span>
    </div>

    <!-- Buttons -->
    <div class="flex justify-end gap-2">
      <Button
        type="button"
        label="Cancel"
        severity="secondary"
        @click="contactFormModalStore.toggleModal()"
      />
      <Button type="button" label="Send" @click="sendEmail(email, 'demo app order details')" />
      <Toast />
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import Toast from 'primevue/toast';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
import { ref, computed } from 'vue';
import { useContactFormModalStore } from '@/stores/contactFormModal';
import type { WritableComputedRef } from 'vue';
import type { ToastServiceMethods } from 'primevue/toastservice';

interface Props {
  activeProductName: string;
}

const props = defineProps<Props>();
const toast: ToastServiceMethods = useToast();
const contactFormModalStore = useContactFormModalStore();
const visible: WritableComputedRef<boolean> = computed({
  get() {
    return contactFormModalStore.formModalIsOpen;
  },
  set() {
    contactFormModalStore.toggleModal();
  }
});

// Form Data
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const message = ref('');

// Validation Errors
const errors = ref<Record<string, string>>({});

const validateForm = () => {
  errors.value = {};
  let isValid = true;

  if (!firstName.value) {
    errors.value.firstName = 'First name is required.';
    isValid = false;
  }
  if (!lastName.value) {
    errors.value.lastName = 'Last name is required.';
    isValid = false;
  }
  if (!email.value) {
    errors.value.email = 'Email is required.';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    errors.value.email = 'Invalid email format.';
    isValid = false;
  }
  if (!message.value) {
    errors.value.message = 'Message is required.';
    isValid = false;
  }

  return isValid;
};

const sendEmail = async (to: string, subject: string) => {
  if (!validateForm()) return;

  const text = `
    Hello thanks for checking out the demo app.
    Here are the details for your fictive order.

    Currently viewed product: ${props.activeProductName}.
    Name of client: ${firstName.value} ${lastName.value}.

    The message attached to the contact form:
    ${message.value}
  `;

  try {
    const response = await axios.post('/api/sendEmail', {
      to,
      subject,
      text
    });
    toast.add({
      severity: 'success',
      summary: 'Success',
      detail: `${response.data.message}`,
      life: 1500
    });
    setTimeout(() => {
      contactFormModalStore.toggleModal();
    }, 1500);
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Could not send email please try again later!',
      life: 1500
    });
    console.error('Error sending email:', error);
  }
};
</script>
