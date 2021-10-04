import { createApp } from 'vue'
import App from './App.vue'
import { store }  from './config/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
   faUserSecret, faAngleDown, faTrashAlt, 
   faAngleRight, faCogs, faPencilAlt,
   faSignOutAlt, faHome } 
from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(
   faUserSecret, faAngleDown, 
   faAngleRight, faCogs, 
   faSignOutAlt, faHome,
   faTrashAlt, faPencilAlt)


import BootstrapVue3 from 'bootstrap-vue-3'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import VueGravatar from "vue3-gravatar";
import router from './config/router'
import Toaster from '@meforma/vue-toaster';
import axios from 'axios'
import VueAxios from 'vue-axios'



//createApp(App).mount('#app')// 
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
app.use(Toaster);
app.use(BootstrapVue3);
app.use(VueGravatar);
app.use(router);
app.use(store);
app.mount("#app");