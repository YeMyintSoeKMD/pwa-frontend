import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios';
axios.defaults.baseURL = 'http://pwa-backend.test/api/';

// Service worker registration
if("serviceWorker" in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('sw registered'))
        .catch(err => console.log(err))
    })
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
