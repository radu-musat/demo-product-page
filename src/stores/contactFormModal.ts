import { defineStore } from 'pinia';
interface State {
  isOpen: boolean;
}
export const useContactFormModalStore = defineStore('contactFormStore', {
  state: (): State => ({
    isOpen: false
  }),
  getters: {
    formModalIsOpen: (s: State): boolean => s.isOpen
  },
  actions: {
    toggleModal(): void {
      this.isOpen = !this.isOpen;
    }
  }
});
