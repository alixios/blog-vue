<template>
<!--  顶部导航栏-->
  <div class="nav-bar">
    <div class="ui container">
      <div class="ui inverted stackable secondary menu">
        <h2 class="ui olive header item" style="font-family: STSong">fengliang</h2>
        <!--   搜索栏       -->
        <div class="right m-item item" id="search">
          <form name="search" action="#" method="post" target="_blank">
            <div class="ui icon transparent input m-margin-tb-tiny" style="color: white">
              <input style="color: white" type="text" name="query" placeholder="Search....">
              <i onclick="document.forms['search'].submit()" class="search link icon"></i>
            </div>
          </form>
        </div>
         <!--  功能栏      -->
        <div class="active m-item item" id="index" @click="indexClick">
          <i class="home icon" ></i>首页
        </div>
        <div class="m-item item" @click="typeClick">
          <i class="home icon"></i>分类
        </div>
        <div class="m-item item" @click="archivesClick">
          <i class="clock icon"></i>归档
        </div>
        <div class="m-item item" @click="musicClick">
          <i class="music icon"></i>音乐
        </div>
        <div class="m-item item" @click="profileClick">
          <i class="info icon"></i>关于我
        </div>
        <div class="m-item item" @click="loginClick">
          <i class="info icon"></i>登录
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "TopNavBar",
  methods: {
    indexClick() {
      this.$router.push('/home')
    },
    typeClick() {
      this.$router.push('/Type')
    },
    musicClick() {
      this.$router.push('/music')
    },
    profileClick() {
      this.$router.push('/profile')
    },
    archivesClick() {
      this.$router.push('/archives')
    },
    loginClick() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.nav-bar {
  width: 100%;
  min-height: 60px;
  opacity: 0.8;
  /*position: fixed;*/
  position: relative;/*相对定位*/
  background-color: rgba(0,0,0,1);
  z-index: 9;
  top: 0;
  left: 0;
  border-bottom: 1px solid #e8e9e7;
  font-size: 15px;
}
  #index {
    margin-left: auto;
  }

  #search {

  }

</style>
