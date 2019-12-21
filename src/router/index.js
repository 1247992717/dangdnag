import Vue from "vue"
import VueRouter from "vue-router"
import Msite from "../pages/msite/msite"
import Search from "../pages/search/search"
import Order from "../pages/order/order"
import Profile from "../pages/profile/profile"
import Login from "../pages/login/login"
import Shop from "../pages/shop/shop"
import Goods from "@/pages/shop/goods"
import Ratings from "@/pages/shop/ratings"
import Info from "@/pages/shop/info"
import UserInfo from "@/components/userInfo/userInfo"

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
            path: "/user_info",
            component: UserInfo
        },
        {
            path: "/shop/:id",
            component: Shop,
            props:true,
            // props: toRoute => ({id: toRoute.params.id}),
            children:[
                {
                    path: "goods",
                    component: Goods
                },
                {
                    path: "ratings",
                    component: Ratings
                },
                {
                    path: "info",
                    component: Info
                },
                {
                    path:"",
                    redirect:"goods"
                }
            ]
        },
        {
            path:"/",
            redirect:"msite"
        }
    ]
})