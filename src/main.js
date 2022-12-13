import { createApp } from 'vue'
import App from './App.vue'
import router from './lib/router.js'
import { createPinia } from 'pinia';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);
app.component('vue3-loading-overlay', Loading)
const pinia = createPinia();
app.use(router).use(pinia).use(Toast, {position: POSITION.BOTTOM_CENTER}).mount('#app')