import Vue from 'vue'
import App from './App.vue'
import "lib-flexible"

import router from "./router"
import Header from "./components/header/header"
import store from "./vuex/store"

Vue.component("Header",Header)
Vue.use(VeeValidate)
Vue.config.productionTip = false

import VeeValidate,{ Validator } from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN';
Vue.use(VeeValidate);
Validator.localize('zh_CN', zh_CN);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')