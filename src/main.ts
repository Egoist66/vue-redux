import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRedux } from './plugins/redux-plugin'
import { store } from './store/app-store'

const app = createApp(App)

app.use(createRedux(store))
app.mount('#app')
