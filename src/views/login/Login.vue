<template>
  <div class="login-container">
   <div class="login_box">
     <div class="avatar_box">
       <img src="../../assets/images/logo.png" alt="">
     </div>
     <el-form ref="form"  label-width="0px" class="login_form">
        <!--       用户名-->
       <el-form-item >
         <el-input prefix-icon="el-icon-user-solid" placeholder="请输入用户名"></el-input>
       </el-form-item>
         <!--       密码-->
       <el-form-item >
         <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" type="password"></el-input>
       </el-form-item>
         <!--       提交-->
       <el-form-item class="btns">
         <el-button type="primary">登录</el-button>
         <el-button type="info">重置</el-button>
       </el-form-item>
     </el-form>
   </div>
  </div>
</template>

<script>
export default {
  name: "Login",
}
</script>

<style lang="less" scoped>
  .login-container {
    background-color: #0e566c;
    height: 100%;
  }
  .login_box {
    width: 450px;
    height: 360px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar_box {
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }

  .login_form {
    position: absolute;
    bottom: 50px;
    width: 100%;
    padding: 0 25px;
    box-sizing: border-box;
  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }
  .avatar-uploader .el-upload {
    border: 5px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }


</style>
