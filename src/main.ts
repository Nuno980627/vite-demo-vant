import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import './icons/index'
import './styles/tailwind.css'
import './styles/index.scss'

// import './utils/permission'
import vant from '@/components/Vant'
import { createPinia } from 'pinia' // use pinia replace vuex
const pinia = createPinia()
createApp(App).use(router).use(vant).use(pinia).mount('#app')
