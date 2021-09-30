import { createApp } from 'vue'
import App from './App.vue'
import { store }  from './config/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
   faUserSecret, faAngleDown, 
   faAngleRight, faCogs, 
   faSignOutAlt, faHome } 
from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(
   faUserSecret, faAngleDown, 
   faAngleRight, faCogs, 
   faSignOutAlt, faHome)

//import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
//import "bootstrap-vue/dist/bootstrap-vue.css"
import VueGravatar from "vue3-gravatar";
import router from './config/router'


//createApp(App).mount('#app')// 
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(VueGravatar);
app.use(router);
app.use(store);
app.mount("#app");