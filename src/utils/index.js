import Vue from "vue"

export const setLocalFoodCount = (shopId,cartFoods=[]) => {

    const countObj = cartFoods.reduce((pre,food) => {

        pre[food.id] = food.count;

        return pre;
    },{})

    sessionStorage.setItem(shopId+"_key",JSON.stringify(countObj))
}


export const getLocalFoodCount = (shop) => {
    const cartFoods = [];
    const countObj = JSON.parse(sessionStorage.getItem(shop.id + "_key")) || {}
    shop.goods.forEach((good) => {
        good.foods.forEach((food) => {
            const count = countObj[food.id]
            if(count){
                Vue.set(food, 'count', count)
                cartFoods.push(food)
            }
        })
    })
    return cartFoods;
}