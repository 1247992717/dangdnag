<template>
    <div>
        <header>

        </header>

        <main>
            <router-view></router-view>
        </main>

       <Footer/>
    </div>
</template>

<script>
    import Footer from "./components/footer"
    export default {
        data() {
            return {
                
            }
        },
        components:{
            Footer
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./comment/stylus/mixins.styl"

</style>

