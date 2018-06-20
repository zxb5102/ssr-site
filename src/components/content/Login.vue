<template>
  <div class="login">
    <el-card>
      <h3 class="login-title">欢迎登入</h3>
      <el-form :model="ruleForm" label-width="0px" :rules="rules" ref="ruleForm">
        <el-form-item label="" prop="user">
          <el-input placeholder="用户名" prefix-icon="user" v-model="ruleForm.user">
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="pwd">
          <el-input type="password" placeholder="密码" prefix-icon="pwd" v-model="ruleForm.pwd" @keyup.enter.native="submitForm('ruleForm')">
          </el-input>
        </el-form-item>
        <!-- <div class="wrap-remember"> -->
        <el-form-item class="wrap-remember">
          <span class="remember-text">记住密码</span>
          <el-switch v-model="remember">
          </el-switch>
        </el-form-item>
        <div v-bind:class="[isActive ? 'errorShow' : '', 'error-tab' ,'el-alert' ,'el-alert--error']" class="">
          <i class="el-alert__icon el-icon-error"></i>
          <div class="el-alert__content">
            <span class="el-alert__title">{{errorMsg}}</span>
          </div>
        </div>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="loginBtn">登入</el-button>
        </el-form-item>
        <div class="text-btn">
          <span>
            <router-link to="/entry/register">注册账号</router-link>
          </span>
          <span>
            <a href="/Account/ForgotPassword" target="_blank">
              忘记密码
            </a>
          </span>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { bus } from "../../util";
import $ from "jquery";
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");
export default {
  data() {
    return {
      remember: false,
      leftCol: 14,
      rightCol: 8,
      offset: 2,
      gutter: 30,
      isActive: false,
      errorMsg: "用户名或密码错误",
      ruleForm: {
        user: "",
        pwd: ""
      },
      rules: {
        pwd: [
          {
            required: true,
            message: "密码不能为空"
          }
        ],
        user: [
          {
            required: true,
            message: "用户名不能为空"
          }
        ]
      }
    };
  },
  mounted() {
    if (ISDEV) {
      var mock = new MockAdapter(axios);
      mock.onPost("/Account/AjaxLogin").reply(200, {
        code: 0,
        msg: "账号或是密码错误"
        // code:0
      });
    }
    var self = this;
    // bus.$emit('navFit')
    $(document).ready(function() {
      windowSizeChange.bind(self)();
      $(window).resize(() => {
        windowSizeChange.bind(self)();
      });
    });
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios({
            method: "post",
            url: "/Account/AjaxLogin",
            data: {
              UserName: this.ruleForm.user,
              Password: this.ruleForm.pwd,
              RememberMe: this.remember
            }
          })
            .then(resp => {
              var code = resp.data.code;
              if (code == 1) {
                //error
                this.errorMsg = resp.data.msg;
                this.isActive = true;
                this.ruleForm.pwd = "";
                this.remember = false;
              } else {
                bus.$emit("login");
                this.errorMsg = "";
                this.isActive = false;
                // window.location = "/backstage.html";
                this.$router.push("/");
              }
            })
            .catch(error => {
              if (error.request) {
                this.errorMsg = "服务器繁忙,请稍后重试";
              } else if (error.response) {
                this.errorMsg = "服务器升级中,请联系管理员";
              }
              this.isActive = true;
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
function windowSizeChange() {
  var width = document.documentElement.clientWidth;
  // debugger;
  if (width > 992) {
    // this.show = false;
    // leftCol: 14,
    this.rightCol = 8;
    this.offset = 2;
    this.gutter = 30;
  } else {
    this.rightCol = 24;
    this.offset = 0;
    this.gutter = 0;
    // rightCol: 8,
    // offset: 2,
    // gutter: 30,
  }
}
</script>

<style scoped lang="less">
.login {
  font-size: 14px;
  @media (max-width: 992px) {
  }
  .ruleForm {
    width: 70%;
    margin: auto;
  }
  .loginBtn {
    width: 100%;
  }
  .text-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span,
    a {
      cursor: pointer;
      color: #827979;
      &:hover {
        color: black;
      }
    }
  }
  .login-title {
    line-height: 20px;
    font-size: 18px;
    padding-bottom: 20px;
  }
  .wrap-remember {
    text-align: left; // display: flex;
    .remember-text {
      color: #827979;
      margin-right: 20px;
    }
  }
  .error-tab {
    margin-bottom: 22px;
    display: none;
  }
  .errorShow {
    display: flex;
  }
}
</style>

