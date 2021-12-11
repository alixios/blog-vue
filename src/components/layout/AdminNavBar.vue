<template>
  <div class="navbar-container">
    <el-menu class="navbar" mode="horizontal">
       <!--折叠导航栏-->
      <hamburger class="hamburger-container"/>

       <!--右侧工具栏-->
      <div class="right-menu">

<!--        <el-tooltip content="门户页面" effect="dark" placement="bottom">-->
<!--          <Website id="website" class="right-menu-item" />-->
<!--        </el-tooltip>-->

<!--        <el-tooltip effect="dark" content="全屏" placement="bottom">-->
<!--          <screenfull class="screenfull right-menu-item"></screenfull>-->
<!--        </el-tooltip>-->

        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <img src="https://picsum.photos/seed/picsum/40/20" class="user-avatar">
            <i class="el-icon-caret-bottom"/>
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <el-dropdown-item>
              <span style="display:block;" >关于我</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <span style="display:block;" >更新日志</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <span style="display:block;" >退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

    </el-menu>
  </div>
</template>

<script>
import Hamburger from "./Hamburger";
export default {
  name: "AdminNavBar",
  components: {
    Hamburger
  }
}
</script>

<style lang="less" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;

  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }

    .screenfull {
      height: 20px;
    }

    .international {
      vertical-align: top;
    }

    .theme-switch {
      vertical-align: 15px;
    }

    .avatar-container {
      height: 50px;
      margin-right: 30px;

      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
