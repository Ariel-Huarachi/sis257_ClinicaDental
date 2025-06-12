import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.min.css'

import App from './App.vue'
import router from './router'



const app = createApp(App)
console.log('Base URL:', import.meta.env.VITE_BASE_URL_ENDPOINT)
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false,
    },
  },
})

app.mount('#app')
