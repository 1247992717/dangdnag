import Vue from 'vue'
import App from './App.vue'
import "lib-flexible"
import {Button} from "mint-ui"

import router from "./router"
import Header from "./components/header/header"
import store from "./vuex/store"
import "@/mock/mockServer"


Vue.component("Header",Header)
Vue.component(Button.name,Button)
Vue.use(VeeValidate)
Vue.config.productionTip = false

import VeeValidate,{ Validator } from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN';
import i18n from './i18n'
Vue.use(VeeValidate);
Validator.localize('zh_CN', zh_CN);

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')