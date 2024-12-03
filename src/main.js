import './assets/main.css'
import { createApp } from 'vue'
import App from './RouterApp.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
