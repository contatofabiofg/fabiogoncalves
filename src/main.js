import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..
AOS.init({
  duration: 600,
  startEvent: 'DOMContentLoaded',
  easing: 'ease-in-out-cubic',
  once: true,
  useClassNames: true,
  offset: 120,
})

createApp(App).mount('#app')
