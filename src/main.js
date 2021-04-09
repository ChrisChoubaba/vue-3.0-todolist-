import {createApp} from 'vue';
import App from './App.vue'
import 'babel-polyfill'
import router from './router/index'
import axios from "axios";
// console.log(router)
const app = createApp(App)

app.use(router)
app.mount('#app')
