<template>
    <div>
        <main>
            <router-view></router-view>
        </main>

       <Footer/>
    </div>
</template>

<script>
    import Footer from "./components/footer/footer"
    export default {
        mounted(){
            this.$store.dispatch('autoLogin')
        },
        components:{
            Footer
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

