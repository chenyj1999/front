import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

/*import CKEditor from '@ckeditor/ckeditor5-vue2';

Vue.use(CKEditor);*/

const app = createApp(App)

app.use(router)

app.mount('#app')
