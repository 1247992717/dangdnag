import Vue from "vue"
import VueRouter from "vue-router"
import Msite from "../pages/msite/msite"
import Search from "../pages/search/search"
import Order from "../pages/order/order"
import Profile from "../pages/profile/profile"
import Login from "../pages/login/login"

Vue.use(VueRouter)

export default new VueRouter({
    mode:"history",
    routes: [
        {
            path: "/msite",
            component: Msite,
            meta:{
                isShowFooter:true
            }
        },
        {
            path: "/search",
            component: Search,
            meta:{
                isShowFooter:true
            }
        },
        {
            path: "/order",
            component: Order,
            meta:{
                isShowFooter:true
            }
        },
        {
            path: "/profile",
            component: Profile,
            meta:{
                isShowFooter:true
            }
        },
        {
            path: "/login",
            component: Login
        },
        {
            path:"/",
            redirect:"/msite"
        }
    ]
})