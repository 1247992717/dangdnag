import Mock from 'mockjs'
import data from './data.json'
import shops from "./shops.json"

// console.log('mockServer')
// 指定监听的url和对应的json数据模板
Mock.mock('/api/shop_goods', {
    code: 0,
    data: data.goods
})
Mock.mock('/api/shop_ratings', {
    code: 0,
    data: data.ratings
})
Mock.mock('/api/shop_info', {
    code: 0,
    data: data.info
})



// 根据请求在id参数返回对应的商家数据
Mock.mock(/^\/api\/shop\/\d+$/, function(options){ // /api/shop/12
                                                   // 得到请求params参数id
    const id = options.url.substring(10)
    // 找到对应shops
    const shop = shops.find(shop => shop.id==id)
    // console.log('/api/shop', options, shop || shops[0])
    // 返回一个动态数据
    return Mock.mock({code: 0, data: shop || shops[0]})
}) //

// export default xxx  不需要