import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import 'reset-css';
import './styles/global.style.scss';
// 引入uno.css
import 'uno.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
