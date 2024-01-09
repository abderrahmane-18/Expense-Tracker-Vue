import './assets/style.css'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css' 
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n';

const app= createApp(App)
app.use(Toast)
app.use(i18n)
.mount('#app')
