import Vue from 'vue'
import App from './App.vue'
import "lib-flexible"
import VueLazyload from 'vue-lazyload'
import {Button} from "mint-ui"
import VeeValidate,{ Validator } from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN';
import i18n from './i18n'

import router from "./router"
import Header from "./components/header/header"
import CartControl from "./components/cartControl/cartControl"
import store from "./vuex/store"
import "@/mock/mockServer"
import loading from "@/pages/shop/images/loading.gif"

Vue.use(VeeValidate)
Vue.use(VueLazyload,{
    loading
})

Vue.component("Header",Header)
Vue.component(Button.name,Button)
Vue.component("CartControl",CartControl)

Vue.config.productionTip = false
Validator.localize('zh_CN', zh_CN);

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')