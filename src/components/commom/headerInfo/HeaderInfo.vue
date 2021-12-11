<template>
  <div class="header-info">
    <div class="ui segment m-opacity">
      <!--    头-->
      <div class="ui two column grid">
        <div class="middle aligned column">
          <h3 class="ui header">{{titleInfo}}</h3>
        </div>
        <div class="right aligned column">
          共<h2 class="ui orange header m-inline-block m-text-thin">3</h2>篇
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderInfo",
  props: {
    titleInfo: {
      type: String,
      default: "列表"
    }
  }
}
</script>

<style scoped>

</style>
