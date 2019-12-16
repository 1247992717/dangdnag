import ajax from "./ajax"


//请求经纬度
export const reqAddress = (latitude,longitude) => ajax(`/position/${latitude},${longitude}`)


//获取食品分类列表
export const reqFoodCategory = () => ajax(`/index_category`)

//根据经纬度获取商铺列表
export const reqShops = ({latitude,longitude}) => ajax(`/shops`,{params:{latitude,longitude}})

//根据经纬度和关键字搜索商铺列表


