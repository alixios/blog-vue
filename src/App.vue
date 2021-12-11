<template>
  <div id="app">
   <top-nav-bar v-show="(path==='/home' || path==='/blogTypes' || path==='/Type' || path==='/music'
   || path==='/archives'  || path==='/blog' || path==='/tags' || path==='/profile' || path==='/login')" ></top-nav-bar>

    <router-view></router-view>
  </div>
</template>

<script>
  import TopNavBar from "./components/layout/TopNavBar";
  export default {
    name: 'app',
    data() {
      return {
        path: '',
      }
    },
    components: {
      TopNavBar
    },
    // 判断路由
    mounted () {
      this.path = this.$route.path
      // console.log(this.$route.path)
    },
    watch: {
      $route (to, from) {
        this.path = to.path
      }
    }
  }
</script>

<style>

</style>
