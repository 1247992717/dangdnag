import {reqShop} from "../../api";
import Vue from "vue";
import {getLocalFoodCount} from "../../utils"

export default {
    state:{
        shop:{},
        cartFoods:[]
    },
    mutations:{
        // setGoods(state,data){
        //     state.goods = data
        // },
        // setRatings(state,data){
        //     state.ratings = data
        // },
        // setInfo(state,data){
        //     state.info = data
        // },
        setShop(state,{shop={},cartFoods=[]}){
            state.shop = shop;
            state.cartFoods = cartFoods;
        },

        addFoodCount(state,food){
            if(food.count){
                food.count++;
            }else{
                Vue.set(food, 'count', 1)
                state.cartFoods.push(food)
            }
        },
        reduceFoodCount(state,food){
            food.count--;
            if(food.count === 0){
                state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            }
        },
        clearFood(state){
            state.cartFoods.forEach((food) => {food.count = 0})
            state.cartFoods = []
        }
    },
    actions:{
        // async getShopInfo({commit}, cb) {
        //     const result = await reqShop_info()
        //     if(result.code===0) {
        //         const info = result.data
        //         info.score = 3.5
        //         commit("setInfo", info)
        //         cb && cb()
        //     }
        // },

// 异步获取商家评价列表
//         async getShopRatings({commit}, cb) {
//             const result = await reqShop_ratings()
//             if(result.code===0) {
//                 const ratings = result.data
//                 commit("setRatings", ratings)
//
//                 cb && cb()
//             }
//         },

// 异步获取商家商品列表
//         async getShopGoods({commit}, cb) {
//             const result = await reqShop_goods()
//             if(result.code===0) {
//                 const goods = result.data
//                 commit("setGoods", goods)
//                 // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
//                 cb && cb()
//             }
//         },
        //获取shop
        async getShop({commit,state},id){

                if(id == state.shop.id) return;

                if(id !== state.shop.id){
                    commit("setShop",{})
                }

                const result = await reqShop(id)
                const shop = result.data
                if(result.code === 0){
                    const cartFoods = getLocalFoodCount(shop)

                    commit("setShop",{shop,cartFoods})

                }
        },

        updataFoodCount({commit},{isAdd,food}){
            if(isAdd){
                commit("addFoodCount",food)
            }else {
                commit("reduceFoodCount",food)
            }

        }
    },
    getters:{
        totalCount(state){
            return state.cartFoods.reduce((total,food) => total + food.count ,0)
        },
        totalPrice(state){
            return state.cartFoods.reduce((total,food) => total + food.count*food.price ,0)
        },
        positiveSize(state){
            const ratings = state.shop.ratings || []
            return ratings.reduce((total,rating) => total + (rating.rateType === 0 ? 1 : 0),0)
        }
    }
}