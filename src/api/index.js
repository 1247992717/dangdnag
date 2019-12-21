import ajax from "./ajax"


//请求经纬度
export const reqAddress = (latitude,longitude) => ajax.get(`/position/${latitude},${longitude}`)


//获取食品分类列表
export const reqFoodCategory = () => ajax.get(`/index_category`)

//根据经纬度获取商铺列表
export const reqShops = ({latitude,longitude}) => ajax.get(`/shops`,{params:{latitude,longitude}})

//发送短信验证码
export const reqCode = (phone) => ajax.get(`/sendcode`,{params:{phone}})

//用户名密码登陆
export const reqLogin_pwd = ({name,pwd,captcha}) => ajax.post(`/login_pwd`,{name,pwd,captcha})

//手机号验证码登陆
export const reqLogin_sms = ({phone,code}) => ajax.post(`/login_sms`,{phone,code})

//自动登陆
export const reqAuto_login = () => ajax.get(`/auto_login`)

//获取商家商品数组
// export const reqShop_goods = () => ajax.get(`/shop_goods`)

//获取商家评价数组
// export const reqShop_ratings = () => ajax.get(`/shop_ratings`)

//获取商家信息
// export const reqShop_info = () => ajax.get(`/shop_info`)


//获取商家shop
export const reqShop = (id) => ajax('/shop/' + id)








