<template>
    <footer class="footer_guide" v-show="$route.meta.isShowFooter">
        <div class="navs">
            <router-link to="/msite">
                <a href="javascript:;" class="guide_item">
                        <span class="item_icon">
                            <i class="iconfont icon-waimai"></i>
                        </span>
                    <span>外卖</span>
                </a>
            </router-link>
            <router-link to="search">
                <a href="javascript:;" class="guide_item">
                        <span class="item_icon">
                            <i class="iconfont icon-search"></i>
                        </span>
                    <span>搜索</span>
                </a>

            </router-link>
            <router-link to="order">
                <a href="javascript:;" class="guide_item">
                        <span class="item_icon">
                            <i class="iconfont icon-dingdan"></i>
                        </span>
                    <span>订单</span>
                </a>
            </router-link>
            <router-link to="profile">
                <a href="javascript:;" class="guide_item">
                        <span class="item_icon">
                            <i class="iconfont icon-geren"></i>
                        </span>
                    <span>我的</span>
                </a>

            </router-link>
        </div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../comment/stylus/mixins.styl"
    .router-link-active {
        span {
            color #02a774 !important
        }
    }

    .footer_guide {
        position fixed !important
        z-index 100
        left 0
        right 0
        bottom 0
        background-color #fff
        width 100%
        height 50px
        display flex
        top-border-1px(#cccccc)
        .navs {
            width 90%
            margin 0 auto
            display flex
            justify-content space-between

            .guide_item {
                display flex
                flex 1
                text-align center
                flex-direction column
                align-items center
                margin 5px
                color #999999

                span {
                    font-size 12px
                    margin-top 2px
                    margin-bottom 2px

                    .iconfont {
                        font-size 22px
                    }
                }
            }
        }
    }
</style>