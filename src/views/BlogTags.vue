<template>
  <div class="m-container-small m-padded-tb">
    <div class="ui container">
      <!--        头-->
      <header-info :title-info="headerTitle"></header-info>
      <div class="ui bottom attached segment">
        <a href="#" target="_blank" class="ui teal basic label left pointing m-margin-tb-tiny  m-padded-tb">
          java <div class="detail">88</div>
        </a>
        <a href="#" target="_blank" class="ui  basic label left pointing m-margin-tb-tiny  m-padded-tb">
          java <div class="detail">88</div>
        </a>
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
  name: "BlogTags",
  data() {
    return {
      headerTitle: "标签"
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
