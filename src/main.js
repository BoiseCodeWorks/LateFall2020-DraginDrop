// @ts-ignore
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const root = createApp(App)

root
  .use(router)
  .mount('#app')
