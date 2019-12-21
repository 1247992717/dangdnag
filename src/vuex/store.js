import Vue from "vue"
import Vuex from "vuex"

import mutations from "./mutations"
import actions from "./actions"

import msite from "./modules/msite"
import shop from "./modules/shop"
import user from "./modules/user"

Vue.use(Vuex)

export default new Vuex.Store({
    mutations,
    actions,
    modules:{
        msite,
        shop,
        user
    }
})