<template>
  <div class="login_form">
    <el-row>
      <el-col :span="8">
        <h3>{{ msg }}</h3>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-input type="text" class="qxs-ic_user qxs-icon" placeholder="用户名" v-model="userName"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-input type="text" class="qxs-ic_password qxs-icon" placeholder="密码" v-model="password"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <el-button
          class="login_btn"
          @click.native="login"
          type="primary"
          round
          :loading="isBtnLoading"
        >登录</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div style="margin-top: 10px">
          <!-- <span style="color: #000099;" @click="login">司机账号登陆111</span> -->
          <span style="float: right;color: #A9A9AB">忘记密码请联系管理员!</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
      isBtnLoading: false,
      msg: "请登录"
    };
  },
  created() {
    if (
      JSON.parse(localStorage.getItem("user")) &&
      JSON.parse(localStorage.getItem("user")).userName
    ) {
      this.userName = JSON.parse(localStorage.getItem("user")).userName;
      this.password = JSON.parse(localStorage.getItem("user")).password;
    }
  },
  computed: {
    btnText() {
      if (this.isBtnLoading) return "登录中...";
      return "登录";
    }
  },
  methods: {
    login() {
      if (!this.userName) {
        this.$message.error("请输入用户名");
        return;
      }
      if (!this.password) {
        this.$message.error("请输入密码");
        return;
      }
      console.log(222222);
    }
  }
};
</script>
<style>
.login_form {
  /* padding-top: 10%; */
  padding-left: 40%;
  /* padding-right: 10%; */
}
.el-row {
  margin-bottom: 20px;
}
.login-box {
  margin-top: 20%;
  margin-left: 40%;
}
.qxs-ic_user {
  /* background: url("../../assets/login/ic_user.png") no-repeat; */
  background-size: 13px 15px;
  background-position: 3%;
}
.qxs-ic_password {
  /* background: url("../../assets/login/ic_password.png") no-repeat; */
  background-size: 13px 15px;
  background-position: 3%;
  margin-bottom: 20px;
}
.login_logo {
  height: 100%;
}
.login_btn {
  width: 100%;
  font-size: 16px;
  background: -webkit-linear-gradient(
    left,
    #000099,
    #2154fa
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    right,
    #000099,
    #2154fa
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    right,
    #000099,
    #2154fa
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #000099, #2154fa); /* 标准的语法 */
  filter: brightness(1.4);
}
</style>