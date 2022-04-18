import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import './icons/index'
import './styles/index.scss'
import 'virtual:svg-icons-register' // svg
import SvgIcon from '@/components/SvgIcon/index'

// import './utils/permission'
import vant from '@/components/Vant'
import { createPinia } from 'pinia' // use pinia replace vuex
const pinia = createPinia()
const app = createApp(App)
app.component('SvgIcon', SvgIcon)
app.use(router).use(vant).use(pinia).mount('#app')
