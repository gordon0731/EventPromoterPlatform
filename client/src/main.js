import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Icon } from '@iconify/vue';

const app = createApp(App)
app.use(router)
app.use(Icon)
app.mount('#app')
