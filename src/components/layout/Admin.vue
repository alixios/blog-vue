<template>
  <el-container class="home-container">
    <!--    侧边栏-->
    <el-aside width="200px">

      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF">

        <el-submenu index="1" >

          <!--  一级菜单-->
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>博客管理</span>
          </template>

           <!--二级菜单-->
          <router-link to="/admin/add">
            <el-menu-item  index="1-1" >
              <template slot="title" >
                <i class="el-icon-location"></i>
                <span>发布博客</span>
              </template>
            </el-menu-item>
          </router-link>

          <router-link to="/admin/blog">
            <el-menu-item  index="1-2" >
              <template slot="title" >
                <i class="el-icon-location"></i>
                <span>博客管理</span>
              </template>
            </el-menu-item>
          </router-link>

          <el-menu-item  index="1-3" >
            <template slot="title" >
              <i class="el-icon-location"></i>
              <span>分类管理</span>
            </template>
          </el-menu-item>
          <el-menu-item  index="1-4" >
            <template slot="title" >
              <i class="el-icon-location"></i>
              <span>标签管理</span>
            </template>
          </el-menu-item>


       </el-submenu>

        <el-submenu index="2" >

          <!--  一级菜单-->
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>用户管理</span>
          </template>

          <!--二级菜单-->
          <el-menu-item  index="2-1" >
            <template slot="title" >
              <i class="el-icon-location"></i>
              <span>个人信息</span>
            </template>
          </el-menu-item>
          <el-menu-item  index="2-2" >
            <template slot="title" >
              <i class="el-icon-location"></i>
              <span>评论管理</span>
            </template>
          </el-menu-item>

        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>数据监控</span>
          </template>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>返回首页</span>
          </template>
        </el-submenu>

      </el-menu>
    </el-aside>

    <div class="main-container">
      <admin-nav-bar></admin-nav-bar>
      <!-- 路由占位 -->
      <router-view></router-view>
    </div>


  </el-container>
</template>

<script>
import AdminNavBar from "./AdminNavBar";
export default {
  name: "Admin",
  components: {
    AdminNavBar
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    Gotoadd() {
      this.$router.replace('/add')
    },
    Gotoblog() {
      this.$router.replace('/blog')
    }

  }
}
</script>

<style lang="less" scoped>
  .main-container {
    width: 100%;
  }
  .home-container {
    height: 100%;
    background-color: white;
  }
  .el-aside {
    background-color: #304156;
    .el-menu {
      border-right: none;
    }
  }

</style>
