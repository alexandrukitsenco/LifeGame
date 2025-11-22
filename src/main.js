import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import router from './router/index.js'
const pinia = createPinia()

const app = createApp(App)

app.use(router)

app.use(pinia)
app.use(PrimeVue, {
    theme: {
        preset: Material
    }
});

app.mount('#app')
