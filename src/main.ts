import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'

import './styles/main.css'
import './styles/less.less'

import './utils/rem'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const app = createApp(App)
app.use(router)
app.use(Antd)
app.mount('#app')
