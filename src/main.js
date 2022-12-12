import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './lib/router.js'
import { createPinia } from 'pinia';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

const app = createApp(App);
app.component('vue3-loading-overlay', Loading)
const pinia = createPinia();
app.use(router).use(pinia).mount('#app')