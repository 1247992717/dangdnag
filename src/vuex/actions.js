
import {reqAddress,reqFoodCategory,reqShops,reqAuto_login,reqShop_goods,reqShop_info,reqShop_ratings} from "../api"


export default {
    async getAddress({commit,state}){
        const latitude = state.latitude // 纬度
        const longitude = state.longitude// 经度
        const result = await reqAddress(latitude,longitude)
        const {data} = result
        if(result.code === 0){
            commit("setAddress",data)
        }
    },
    async getFoodCategory({commit}){
        const result = await reqFoodCategory()
        const {data} = result
        if(result.code === 0){
            commit("setCategorys",data)
        }
    },
    async getShops({commit,state}){
        const latitude = state.latitude // 纬度
        const longitude = state.longitude// 经度
        const result = await reqShops({latitude,longitude})
        const {data} = result
        if(result.code === 0){
            commit("setShops",data)
        }
    },

    async getUser({commit},user){
        localStorage.setItem("token_key",user.token)
        commit("setToken",user.token)

        delete user.token
        commit("setUser",user)
    },

    async autoLogin({commit,state}){
        if(state.token && !state.user._id){
            const result = await reqAuto_login()
            if(result.code === 0){
                commit("setUser",result.data)
            }
        }
    },
    logout({commit}){
        localStorage.removeItem("token_key")
        commit("setUser",{})
    },

    async getShopInfo({commit}, cb) {
        const result = await reqShop_info()
        if(result.code===0) {
            const info = result.data
            info.score = 3.5
            commit("setInfo", info)
            cb && cb()
        }
    },

// 异步获取商家评价列表
    async getShopRatings({commit}, cb) {
        const result = await reqShop_ratings()
        if(result.code===0) {
            const ratings = result.data
            commit("setRatings", ratings)

            cb && cb()
        }
    },

// 异步获取商家商品列表
    async getShopGoods({commit}, cb) {
        const result = await reqShop_goods()
        if(result.code===0) {
            const goods = result.data
            commit("setGoods", goods)
            // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
            cb && cb()
        }
    },

}














