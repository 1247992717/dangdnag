<template>
    <div>
        <div class="goods">
            <div class="menu-wrapper" ref="left">
                <ul ref="leftUl">
<!--                    current-->
                    <li class="menu-item " v-for="(item,index) in goods" :key="index"
                        :class="{current:index === currentIndex}"
                        @click="clickLeft(index)"
                    >
                        <span class="text bottom-border-1px">
                            <img class="icon" :src="item.icon" v-if="item.icon">
                            {{item.name}}
                        </span>
                    </li>
                </ul>
            </div>
            <div class="foods-wrapper" ref="right">
                <ul ref="rightUl">
                    <li class="food-list-hook" v-for="(item,index) in goods" :key="index">
                        <h1 class="title">{{item.name}}</h1>
                        <ul>
                            <li class="food-item bottom-border-1px" v-for="(food,index) in item.foods" :key="index" @click="showFood(food)">
                                <div class="icon">
                                    <img width="57" height="57" :src="food.image">
                                </div>
                                <div class="content">
                                    <h2 class="name">{{food.name}}</h2>
                                    <p class="desc">{{food.description}}</p>
                                    <div class="extra">
                                        <span class="count">月售{{food.sellCount}}份</span>
                                        <span>好评率{{food.rating}}%</span></div>
                                    <div class="price">
                                        <span class="now">￥{{food.price}}</span>
                                        <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                                    </div>
                                    <div class="cartcontrol-wrapper">
                                        <CartControl :food="food"/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <ShopCart/>
        <Food :food="food" :toggleShowFood="toggleShowFood" v-if="isShowFood"/>
    </div>

</template>

<script>
    import {mapState} from "vuex"
    import BScroll from 'better-scroll'
    import Food from "@/components/food/food"
    import ShopCart from "@/components/shopCart/shopCart"
    export default {
        data(){
            return {
                rightTops:[0],
                scrollY:0,
                food:[],
                isShowFood:false
            }
        },
        computed:{
            // ...mapState(["goods"]),
            ...mapState({
                goods:state => state.shop.goods
            }),
            currentIndex(){
                const {rightTops,scrollY} = this;
                const index = rightTops.findIndex((top,index) => scrollY >= rightTops[index] && scrollY < rightTops[index + 1])

                if (index!==this.index && this.leftScroll) {
                    // 将新的下标保存起来
                    this.index = index
                    // 让左侧列表滑动到当前分类处
                    const li = this.$refs.leftUl.children[index]
                    this.leftScroll.scrollToElement(li, 300)
                }
                return index
            }
        },
        methods:{
            clickLeft(index){
                const top = this.rightTops[index];
                this.scrollY = top;
                this.rightScroll.scrollTo(0,-top,200)
            },
            initTops(){
                const rightLis = Array.prototype.slice.call(this.$refs.rightUl.children)

                let rightTopSum = 0
                rightLis.forEach((top) => {
                    rightTopSum += top.clientHeight
                    this.rightTops.push(rightTopSum)
                })
            },
            initScroll(){
                this.leftScroll = new BScroll(this.$refs.left,{
                    click:true
                })
                this.rightScroll = new BScroll(this.$refs.right,{
                    click:true,
                    probeType:1
                })

                this.rightScroll.on("scroll",({y}) => {
                    this.scrollY = Math.abs(y)
                })

                this.rightScroll.on("scrollEnd",({y}) => {
                    this.scrollY = Math.abs(y)
                })
            },
            showFood(food){
                this.food = food
                this.toggleShowFood()
            },
            toggleShowFood(){
                this.isShowFood = !this.isShowFood
            }
        },
        watch:{
            goods(){
                this.$nextTick(() => {
                    this.initScroll()
                    this.initTops();
                })
            }
        },
        components:{
            Food,
            ShopCart
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../comment/stylus/mixins.styl"
    .goods
        display: flex
        position: absolute
        top: 225px
        bottom: 46px
        width: 100%
        background: #fff;
        overflow: hidden
        .menu-wrapper
            flex: 0 0 80px
            width: 80px
            background: #f3f5f7
            .menu-item
                display: table
                height: 54px
                width: 56px
                padding: 0 12px
                line-height: 14px
                &.current
                    position: relative
                    z-index: 10
                    margin-top: -1px
                    background: #fff
                    color: $green
                    font-weight: 700
                    .text
                        border-none()
                .icon
                    display: inline-block
                    vertical-align: top
                    width: 12px
                    height: 12px
                    margin-right: 2px
                    background-size: 12px 12px
                    background-repeat: no-repeat
                .text
                    display: table-cell
                    width: 56px
                    vertical-align: middle
                    bottom-border-1px(rgba(7, 17, 27, 0.1))
                    font-size: 12px
        .foods-wrapper
            flex: 1
            .title
                padding-left: 14px
                height: 26px
                line-height: 26px
                border-left: 2px solid #d9dde1
                font-size: 12px
                color: rgb(147, 153, 159)
                background: #f3f5f7
            .food-item
                display: flex
                margin: 18px
                padding-bottom: 18px
                bottom-border-1px(rgba(7, 17, 27, 0.1))
                &:last-child
                    border-none()
                    margin-bottom: 0
                .icon
                    flex: 0 0 57px
                    margin-right: 10px
                .content
                    flex: 1
                    .name
                        margin: 2px 0 8px 0
                        height: 14px
                        line-height: 14px
                        font-size: 14px
                        color: rgb(7, 17, 27)
                    .desc, .extra
                        line-height: 10px
                        font-size: 10px
                        color: rgb(147, 153, 159)
                    .desc
                        line-height: 12px
                        margin-bottom: 8px
                    .extra
                        .count
                            margin-right: 12px
                    .price
                        font-weight: 700
                        line-height: 24px
                        .now
                            margin-right: 8px
                            font-size: 14px
                            color: rgb(240, 20, 20)
                        .old
                            text-decoration: line-through
                            font-size: 10px
                            color: rgb(147, 153, 159)
                    .cartcontrol-wrapper
                        position: absolute
                        right: 0
                        bottom: 12px
</style>

