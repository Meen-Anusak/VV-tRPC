import { createApp } from 'vue'
import {VueQueryPlugin} from 'vue-query';
import './style.css'
import App from './App.vue'
import router from './router/index';

const app  = createApp(App)
app.use(router)
app.use(VueQueryPlugin)

app.mount('#app')
