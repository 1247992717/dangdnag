import Vue from "vue"
import VueRouter from "vue-router"
import Msite from "../pages/msite"
import Search from "../pages/search"
import Order from "../pages/order"
import Profile from "../pages/profile"

Vue.use(VueRouter)

export default new VueRouter({
    mode:"history",
    routes: [
        {path: "/msite", component: Msite},
        {path: "/search", component: Search},
        {path: "/order", component: Order},
        {path: "/profile", component: Profile},
        {path:"/",redirect:"/msite"}
    ]
})