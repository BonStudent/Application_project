import { createApp } from 'vue';
// import { createPinia } from 'pinia';
import router from './router';
import { pinia } from './store'
import App from './App.vue';

// const pinia = createPinia();
// const app = createApp(App);
// app.use(pinia);
// app.use(router);

// app.mount('#app');

createApp(App).use(router).use(pinia).mount('#app')