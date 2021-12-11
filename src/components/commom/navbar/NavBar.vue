<template>
  <!--  定义导航栏-->
  <div id="nav-bar">
      <!-- 定义插槽,方便扩展 -->
      <slot></slot>

      <!-- <div class="tab-bar-item">首页</div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">归档</div>
      <div class="tab-bar-item">搜索</div>
      <div class="tab-bar-item">关于我</div> -->

  </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>
    body {
        /* 左边，上边距 */
        padding: 0;
        margin: 0;
    }
    #nav-bar {
        /* 水平分布 */
        display: flex;
        /* 背景颜色 */
        background-color: #f6f6f6;


        /* position: fixed;
        left: 0;
        right: 0;
        bottom: 0; */

        box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  }

  .tab-bar-item {
    /* 元素均等分 */
    flex: 1;
    /* 内容居中 */
    text-align: center;
    /* 给一个高度 */
    height: 49px;
    font-size: 14px;
  }
</style>
