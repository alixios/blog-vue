<template>
  <div>
    <!--       盒子模型，响应式-->

    <div class="ui segment top attached m-opacity">
      <div class="ui vertical grid">
        <!--博文信息-->
        <div class="eleven wide column " style="cursor:pointer;">
          <h3 class="ui header" @click="blog" >{{title}}</h3>
          <p class="m-text">戴上金箍，没法爱你；放下金箍，没法保护你。我知道上天不会给我第二次机会，曾经我们说好的永远，原来也仅仅只有，十二画，而已。。......</p>
          <div class="ui m-margin-top-max grid">
            <div class="eleven wide column">
              <div class="ui mini horizontal link list">
                <div class="item">
                  <img src="~assets/images/home1.png"  alt="" class="ui avatar image">
                  <div class="content"><a href="#" target="_blank" class="header" >username</a></div>
                </div>
                <div class="item">
                  <i class="calendar icon"></i><span>2020-01-01</span>
                </div>
                <div class="item">
                  <i class="eye icon"></i> <span>2222</span>
                </div>
                <div class="item">
                  <i class="comment outline icon"></i> <span>2222</span>
                </div>
              </div>
            </div>
            <div class="right aligned five wide column">
              <a href="#" target="_blank" class="ui teal basic label m-padded-tiny m-text-thin">好文</a>
            </div>
          </div>
        </div>

        <!--博文图片-->
        <div class="right aligned middle aligned five wide column">
          <a href="#" target="_blank">
            <img src="~assets/images/img.png" alt="" class="ui rounded image">
          </a>
        </div>


      </div>
    </div>
    <div class="ui segment attached m-opacity">
      <div class="ui vertical grid">
        <!--博文信息-->
        <div class="eleven wide  column">
          <h3 class="ui header" ><a href="#" target="_blank" class="m-black">内容标题</a></h3>
          <p class="m-text">戴上金箍，没法爱你；放下金箍，没法保护你。我知道上天不会给我第二次机会，曾经我们说好的永远，原来也仅仅只有，十二画，而已。。......</p>
          <div class="ui m-margin-top-max grid">
            <div class="eleven wide column">
              <div class="ui mini horizontal link list">
                <div class="item">
                  <img src="~assets/images/home1.png"  alt="" class="ui avatar image">
                  <div class="content"><a href="#" target="_blank" class="header" >username</a></div>
                </div>
                <div class="item">
                  <i class="calendar icon"></i><span>2020-01-01</span>
                </div>
                <div class="item">
                  <i class="eye icon"></i> <span>2222</span>
                </div>
                <div class="item">
                  <i class="comment outline icon"></i> <span>2222</span>
                </div>
              </div>
            </div>
            <div class="right aligned five wide column">
              <a href="#" target="_blank" class="ui teal basic label m-padded-tiny m-text-thin">好文</a>
            </div>
          </div>
        </div>

        <!--博文图片-->
        <div class="right aligned middle aligned five wide column">
          <a href="#" target="_blank">
            <img src="~assets/images/img.png" alt="" class="ui rounded image">
          </a>
        </div>


      </div>
    </div>
    <div class="ui segment attached m-opacity">
      <div class="ui vertical grid">
        <!--博文信息-->
        <div class="eleven wide  column">
          <h3 class="ui header" ><a href="#" target="_blank" class="m-black">内容标题</a></h3>
          <p class="m-text">戴上金箍，没法爱你；放下金箍，没法保护你。我知道上天不会给我第二次机会，曾经我们说好的永远，原来也仅仅只有，十二画，而已。。......</p>
          <div class="ui m-margin-top-max grid">
            <div class="eleven wide column">
              <div class="ui mini horizontal link list">
                <div class="item">
                  <img src="~assets/images/home1.png"  alt="" class="ui avatar image">
                  <div class="content"><a href="#" target="_blank" class="header" >username</a></div>
                </div>
                <div class="item">
                  <i class="calendar icon"></i><span>2020-01-01</span>
                </div>
                <div class="item">
                  <i class="eye icon"></i> <span>2222</span>
                </div>
                <div class="item">
                  <i class="comment outline icon"></i> <span>2222</span>
                </div>
              </div>
            </div>
            <div class="right aligned five wide column">
              <a href="#" target="_blank" class="ui teal basic label m-padded-tiny m-text-thin">好文</a>
            </div>
          </div>
        </div>

        <!--博文图片-->
        <div class="right aligned middle aligned five wide column">
          <a href="#" target="_blank">
            <img src="~assets/images/img.png" alt="" class="ui rounded image">
          </a>
        </div>


      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "BlogList",
  data() {
    return {
      title: '标题内容'
    }
  },
  methods: {
    blog() {
      console.log('header');
      this.$router.push('/blog')
    }
  }
}
</script>

<style scoped>

</style>
