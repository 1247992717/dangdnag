import {reqAddress, reqFoodCategory, reqShops} from "../../api";


export default {
    state:{
        latitude: 40.10038, // 纬度
        longitude: 116.36867, // 经度
        address: {}, // 地址信息对象
        categorys: [], // 分类数组
        shops: [], //商家数组
    },
    mutations:{
        setAddress(state,data){
            state.address = data;
        },
        setCategorys(state,data){
            state.categorys = data;
        },
        setShops(state,data){
            state.shops = data;
        }
    },
    actions:{
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
    },
    getters:{

    }
}