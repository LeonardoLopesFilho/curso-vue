import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-2c6cc-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
})