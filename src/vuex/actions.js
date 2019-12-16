
import {reqAddress,reqFoodCategory,reqShops} from "../api"


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
    }
}