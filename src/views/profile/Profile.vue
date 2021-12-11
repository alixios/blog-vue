<template>
  <div class="profile">
    <div  class="m-container m-padded-tb">
      <div class="ui container">

        <div class="ui stackable grid">
          <div class="eleven wide column">
            <div class="ui segment my-shadow">
              <img src="https://picsum.photos/seed/picsum/800/510" alt="" class="ui rounded image">
            </div>
          </div>
          <div class="five wide column">
            <div class="ui top attached segment my-shadow">
              <div class="ui header">关于我</div>
            </div>
            <div class="ui attached segment my-shadow">
              <p class="m-text">一个普通的在校生，对新奇的技术有着求知的欲望，但愿能与各位共同进步</p>
              <p class="m-text">热爱编程，喜欢仰望星空，希望此站能够记录我的学习心得</p>
            </div>
            <div class="ui attached segment my-shadow">
              <div class="ui orange basic left pointing label">编程</div>
              <div class="ui orange basic left pointing label">写作</div>
              <div class="ui orange basic left pointing label">思考</div>
              <div class="ui orange basic left pointing label">运动</div>
            </div>
            <div class="ui attached segment my-shadow">
              <div class="ui my-blue basic left pointing label m-margin-tb-tiny">Java</div>
              <div class="ui my-blue basic left pointing label m-margin-tb-tiny">JavaScript</div>
              <div class="ui my-blue basic left pointing label m-margin-tb-tiny">Node</div>
              <div class="ui my-blue basic left pointing label m-margin-tb-tiny">ElasticSearch</div>
              <div class="ui my-blue basic left pointing label m-margin-tb-tiny">Deeplearning4j</div>
              <div class="ui my-blue basic left pointing label m-margin-tb-tiny">MYSQL</div>
              <div class="ui my-blue basic left pointing label m-margin-tb-tiny">...</div>
            </div>
            <div class="ui bottom attached segment my-shadow">
              <a class="ui github circular icon button" data-content="https://gitee.com/fang-jiale" data-position="bottom center"><i class="github icon"></i></a>
              <a class="ui wechat circular icon button"><i class="weixin icon"></i></a>
              <a class="ui qq circular icon button" data-content="1626680964" data-position="bottom center"><i class="qq icon"></i></a>
            </div>

            <div class="ui wechat-qr flowing popup transition hidden">
              <img src="https://r.photo.store.qq.com/psc?/V53KcXfb1umonn4HbITu3rINxs43TczD/45NBuzDIW489QBoVep5mcaapv*CZPLor9HYeVrOOiVLnyRm8OUpwb6xeJ6lITPL.CQBAMN*ufWnqF4BJBqO4o0iDboC.V.GwA1i2AehYs7g!/r" alt="" class="ui rounded image" style="width: 110px">
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="ui toc-container flowing popup transition hidden" style="width: 250px!important;">
      <ol class="js-toc">

      </ol>
    </div>

    <div id="qrcode" class="ui wechat-qr flowing popup transition hidden " style="width: 130px !important;">
      <!--<img src="./static/images/wechat.jpg" alt="" class="ui rounded image" style="width: 120px !important;">-->
    </div>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

</style>
