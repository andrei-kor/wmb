import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import ElementPlus from 'element-plus';
import router from '@/router/index.ts';
const app = createApp(App);

app.use(createPinia());
app.use(ElementPlus);
app.use(router);

app.mount('#app');
