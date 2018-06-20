<template>
    <div class="register">
        <el-tabs type="border-card" @tab-click="tabChange" v-model="currentTab">
            <el-tab-pane label="个人用户" name="person">
                <el-form :model="personForm" label-width="0px" :rules="rules" ref="personForm">
                    <el-form-item label="" prop="user">
                        <el-input placeholder="用户名" prefix-icon="user" v-model="personForm.user">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="email">
                        <el-input placeholder="邮箱" prefix-icon="email" v-model="personForm.email">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="pwd">
                        <el-input type="password" placeholder="密码" prefix-icon="pwd" v-model="personForm.pwd" @keyup.enter.native="submitForm('personForm')">
                        </el-input>
                    </el-form-item>
                    <div v-bind:class="[isActive ? 'errorShow' : '', 'error-tab' ,'el-alert' ,'el-alert--error']" class="">
                        <i class="el-alert__icon el-icon-error"></i>
                        <div class="el-alert__content">
                            <span class="el-alert__title">{{errorMsg}}</span>
                        </div>
                    </div>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('personForm')" class="loginBtn">注册</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="建材商" name="company">
                <el-form :model="companyForm" label-width="0px" :rules="rules" ref="companyForm">
                    <el-form-item label="" prop="companyName">
                        <el-input placeholder="建材商名称" prefix-icon="company-icon" v-model="companyForm.companyName">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="user">
                        <el-input placeholder="联系人" prefix-icon="user" v-model="companyForm.user">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="email">
                        <el-input placeholder="邮箱" prefix-icon="email" v-model="companyForm.email">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="pwd">
                        <el-input type="password" placeholder="密码" prefix-icon="pwd" v-model="companyForm.pwd" @keyup.enter.native="submitForm('companyForm')">
                        </el-input>
                    </el-form-item>
                    <div v-bind:class="[isActive ? 'errorShow' : '', 'error-tab' ,'el-alert' ,'el-alert--error']" class="">
                        <i class="el-alert__icon el-icon-error"></i>
                        <div class="el-alert__content">
                            <span class="el-alert__title">{{errorMsg}}</span>
                        </div>
                    </div>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('companyForm')" class="loginBtn">注册</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="设计师" name="designer">
                <el-form :model="designerForm" label-width="0px" :rules="rules" ref="designerForm">
                    <el-form-item label="" prop="houses" :error="cascaderError">
                        <el-cascader @focus="cascaderFocus" @active-item-change="handleItemChange" v-model="designerForm.houses" @blur="cascaderBlur" :show-all-levels="false" placeholder="设计所名称" :options="options" size="100%"></el-cascader>
                    </el-form-item>
                    <el-form-item label="" prop="user" :error="userError">
                        <el-input placeholder="用户名" prefix-icon="user" v-model="designerForm.user">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="realName" :error="realNameError">
                        <el-input placeholder="姓名" prefix-icon="user" v-model="designerForm.realName">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="email" :error="emailError">
                        <el-input placeholder="邮箱" prefix-icon="email" v-model="designerForm.email">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="pwd">
                        <el-input type="password" placeholder="密码" prefix-icon="pwd" v-model="designerForm.pwd">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="" prop="pwd2">
                        <el-input type="password" placeholder="密码" prefix-icon="pwd" v-model="designerForm.pwd2" @keyup.enter.native="submitForm('designerForm')">
                        </el-input>
                    </el-form-item>
                    <div v-bind:class="[isActive ? 'errorShow' : '', 'error-tab' ,'el-alert' ,'el-alert--error']" class="">
                        <i class="el-alert__icon el-icon-error"></i>
                        <div class="el-alert__content">
                            <span class="el-alert__title">{{errorMsg}}</span>
                        </div>
                    </div>
                    <el-form-item>
                        <!-- <el-button type="primary" @click="designerFormAction('designerForm')" class="loginBtn">注册</el-button> -->
                        <el-button type="primary" @click="submitForm('designerForm')" class="loginBtn">注册</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <span class="back-login">
                <router-link to="/entry/login">返回登入</router-link>
            </span>
        </el-tabs>
    </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import testData from "../../testData";
export default {
  data() {
    return {
      currentTab: "person",
      pTab: "person",
      userError: "",
      cascaderError: "",
      emailError: "",
      realNameError: "",
      options: [],
      offset: 2,
      gutter: 30,
      isActive: false,
      errorMsg: "this is errror",
      personForm: {
        user: "",
        pwd: "",
        email: ""
      },
      companyForm: {
        companyName: "",
        user: "",
        email: "",
        pwd: ""
      },
      designerForm: {
        parkId: "",
        houses: [],
        user: "",
        realName: "",
        email: "",
        pwd: "",
        pwd2: ""
      },
      // ruleForm: {
      //     user: "",
      //     pwd: "",
      //     email: "",
      //     companyName: "",
      //     realName: "",
      //     houses: []
      // },
      rules: {
        pwd: [
          {
            required: true,
            message: "密码不能为空"
          },
          {
            min: 6,
            message: "密码至少需要6位字符"
          }
        ],
        pwd2: [
          {
            validator: this.validatePass,
            trigger: "blur"
          }
        ],
        user: [
          {
            required: true,
            message: "用户名不能为空"
          }
        ],
        email: [
          {
            required: true,
            message: "邮箱不能为空"
          },
          {
            type: "email",
            required: true,
            message: "邮箱不和法"
          }
        ],
        realName: [
          {
            required: true,
            message: "姓名不能为空"
          }
        ],
        companyName: [
          {
            required: true,
            message: "建材商名不能为空"
          }
        ],
        houses: [
          {
            required: true,
            message: "设计所不能为空"
          }
        ]
      }
    };
  },
  mounted() {
    // alert();
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
    tabChange(tab) {
      // debugger;
      // console.log(11);
      // console.log(this.currentTab)
      // console.log(tab.name)
      if (this.currentTab != this.pTab) {
        this.pTab = tab.name;
        this.errorMsg = "";
        // console.log(this.errorMsg);
        // debugger;
        this.isActive = false;
      }
    },
    validatePass(rule, value, callback) {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.designerForm.pwd) {
        callback(new Error("两次输入的密码不一致"));
      } else {
        callback();
      }
    },
    handleItemChange(parent) {
      // console.log(parent);
      // setTimeout(() => {
      //     this.options = testData.cascadeOpt;
      // }, 300);
    },
    personFormAction(formName) {
      // var mock = new MockAdapter(axios);
      // // Mock any GET request to /users
      // // arguments for reply are (status, data, headers)
      // mock.onPost('/Account/CheckUser').reply(200, "Failed");
      // mock.onPost('/Account/SaveUser').reply(200, "");
      axios({
        method: "post",
        url: "/Account/CheckUser",
        data: {
          parameters: [
            this.personForm.user,
            this.personForm.email,
            this.personForm.pwd
          ]
        }
      })
        .then(resp => {
          // debugger;
          if (resp.data == "Failed") {
            axios({
              method: "post",
              url: "/Account/SaveUser",
              data: {
                parameters: [
                  this.personForm.user,
                  this.personForm.email,
                  this.personForm.pwd
                ]
              }
            }).then(resp => {
              // 不做处理
            });
          } else {
            this.isActive = true;
            this.errorMsg = "用户已经存在";
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
    },
    companyFormAction() {
      // var mock = new MockAdapter(axios);
      // // Mock any GET request to /users
      // // arguments for reply are (status, data, headers)
      // mock.onPost('/Account/CheckUser').reply(200, "Failed1");
      // mock.onPost('/Account/SaveUser').reply(200, "");
      axios({
        method: "post",
        url: "/Account/CheckUser",
        data: {
          parameters: [this.companyForm.user, this.companyForm.email, "company"]
        }
      })
        .then(resp => {
          if (resp.data == "Failed") {
            axios({
              method: "post",
              url: "/Account/SaveUser",
              data: {
                parameters: [
                  this.companyForm.companyName,
                  this.companyForm.user,
                  this.companyForm.email,
                  "company",
                  this.companyForm.pwd
                ]
              }
            }).then(resp => {
              // 不做处理
            });
          } else {
            this.isActive = true;
            this.errorMsg = "用户已经存在";
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
    },
    designerFormAction() {
      // var mock = new MockAdapter(axios);
      // Mock any GET request to /users
      // arguments for reply are (status, data, headers)
      // mock.onPost('/Account/AjaxRegister').reply(200, {
      //     code: 0,
      //     msg: ""
      // });
      // mock.onPost('/AccountCheck/Create').reply(200, "");
      // debugger;
      axios({
        method: "post",
        url: "/Account/AjaxRegister",
        data: {
          ParkId: this.designerForm.houses[0],
          InstitutionId: this.designerForm.houses[1],
          UserName: this.designerForm.user,
          RealName: this.designerForm.realName,
          Email: this.designerForm.email,
          Password: this.designerForm.pwd,
          ConfirmPassword: this.designerForm.pwd2
        }
      })
        .then(resp => {
          if (resp.data.code == 0) {
            axios({
              method: "post",
              url: "/AccountCheck/Create",
              data: {
                // parameters: {
                json: true
                // }
              }
            }).then(resp => {
              // 不做处理
              if (resp.data.code == 0) {
                window.location = "/Account/CreateConfirmed";
              } else {
                console.log("/AccountCheck/Create 失败");
              }
            });
          } else {
            this.isActive = true;
            this.errorMsg = resp.data.msg;
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
    },
    submitForm(formName) {
      // debugger;
      this.$refs[formName].validate(valid => {
        // debugger;
        // console.log(valid);
        if (valid) {
          switch (formName) {
            case "personForm":
              this.personFormAction();
              break;
            case "companyForm":
              this.companyFormAction();
              break;
            case "designerForm":
              this.designerFormAction();
              break;
          }
        } else {
          return false;
        }
      });
      // if( formName == "designerForm"){
      //     this.designerFormAction();
      // }
    },
    designerFormSubmit() {},
    resetForm(formName) {
      // debugger;
      this.$refs[formName].resetFields();
    },
    cascaderBlur() {
      if (this.designerForm.houses.length == 0) {
        this.cascaderError = "设计所不能为空";
      }
    },
    cascaderFocus() {
      this.options = testData.cascadeOpt;
    }
  }
};
function windowSizeChange() {
  var width = document.documentElement.clientWidth;
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
.register {
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
  .remote-message {
    margin-bottom: 22px;
  }
  .back-login {
    a {
      cursor: pointer;
      color: #827979;
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