<template>

  <div class="m-container-small m-padded-tb">
    <div class="container">
      <!--        头-->
      <header-info :title-info="headerTitle"></header-info>
      <div class="ui bottom attached segment">
        <div class="ui labeled button">
          <a href="#" class="ui teal basic button">操作系统</a>
          <div class="ui teal left pointing basic label">123</div>
        </div>
        <div class="ui labeled button m-margin-tb-tiny">
          <a href="#" class="ui  basic button">笔记</a>
          <div class="ui  left pointing basic label">123</div>
        </div>
        <div class="ui labeled button m-margin-tb-tiny">
          <a href="#" class="ui  basic button">总结</a>
          <div class="ui  left pointing basic label">123</div>
        </div>
        <div class="ui labeled button m-margin-tb-tiny">
          <a href="#" class="ui  basic button">运维</a>
          <div class="ui left pointing basic label">123</div>
        </div>
        <div class="ui labeled button m-margin-tb-tiny">
          <a href="#" class="ui  basic button">操作系统</a>
          <div class="ui  left pointing basic label">123</div>
        </div>
        <div class="ui labeled button m-margin-tb-tiny">
          <a href="#" class="ui  basic button">操作系统</a>
          <div class="ui left pointing basic label">123</div>
        </div>
      </div>

      <!--      内容-->
      <blog-list></blog-list>
    </div>
  </div>

</template>

<script>
import HeaderInfo from "../components/commom/headerInfo/HeaderInfo";
import BlogList from "./home/childComps/BlogList";
export default {
  name: "BlogTypes",
  data() {
    return {
      headerTitle: "分类"
    }
  },
  components: {
    HeaderInfo,
    BlogList
  }
}
</script>

<style scoped>

</style>
