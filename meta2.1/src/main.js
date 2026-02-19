import { createApp } from 'vue'
import App from './App.vue'
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import './asset/main.css';
const app = createApp(App);
app.provide('bootstrap',bootstrap);
app.mount('#app');
