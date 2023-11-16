import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

import 'vant/lib/index.css';
import {Tabbar, TabbarItem, NavBar} from 'vant';

const app = createApp(App);

app.use(NavBar);

app.use(Tabbar);
app.use(TabbarItem);


app.mount('#app')
