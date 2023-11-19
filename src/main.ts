import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import 'vant/lib/index.css';
import router from "./router";
import Vant from 'vant'


const app = createApp(App);


app.use(router);

app.use(Vant);
app.mount('#app')
