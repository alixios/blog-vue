<template>
  <div class="home">
    <!--  顶距-->
    <div class="m-padded-tb-big">
      <!-- 容器 -->
      <div class="ui container">
        <!--    布局:占16份-->
        <div class="ui grid">

          <!--   右边博客，占11份-->
          <div class="eleven wide column">
            <header-info :titleInfo='headerInfo'></header-info>
           <blog-list></blog-list>
            <div class="ui container">
              <div class="ui segment ">
                <div >
                  <el-pagination class="pagiantion"
                                 :total="1000">

                  </el-pagination>
                </div>
              </div>
            </div>

          </div>

          <!--   左边内容，占五份      -->
          <div class="five wide column">
            <!--  多个盒子-->
            <div class="ui segments m-opacity">
              <!-- 左边标签-->
              <tags></tags>
              <!-- 左边分类-->
              <types></types>
            </div>
          </div>

        </div>
      </div>
    </div>
   <!--    页脚-->
    <home-footer></home-footer>
  </div>

</template>

<script>
import HeaderInfo from "../../components/commom/headerInfo/HeaderInfo";
import BlogList from './childComps/BlogList'
import Tags from './childComps/Tags'
import Types from './childComps/Types'
import HomeFooter from './childComps/HomeFooter'


export default {
  name: "Home",
  data() {
    return {
      //组件通信，定义头标题
      headerInfo: '列表',
      total : ""
    }
  },
  components: {
    HeaderInfo,
    BlogList,
    HomeFooter,
    Tags,
    Types
  }
}
</script>

<style scoped>

</style>
