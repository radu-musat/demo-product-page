import type { App } from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
export default {
  install: (app: App): void => {
    app.component('Button', Button);
    app.component('Dialog', Dialog);
    app.component('InputText', InputText);
    app.component('Textarea', Textarea);
  }
};
