<template>
  <div>
    <header>
      <div class="container">
        <div class="menu-btn menu-btn-normal" @click="clickMenuBtn($event)">
        </div>
        <h1 class="logo">
          <a href="">
            <img src="../assets/logo.png">
          </a>
        </h1>
        <div>
          <ul class="nav nav-close" @click.self="clickNavItem">
            <li>
              <router-link to="/index">首页</router-link>
            </li>
            <li>
              <router-link to="/professionType">专业领域</router-link>
            </li>
            <li>
              <router-link to="/designHouse">入驻团队</router-link>
            </li>
            <li>
              <router-link to="/activitiesSalon">活动沙龙</router-link>
            </li>
            <li>
              <router-link to="/companyNews">园区新闻</router-link>
            </li>
            <!-- <li>
              <a href="http://www.zhcjjs.com/" target="_blank">公司官网</a>
            </li> -->
            <li class="service">
              <div class="menu-top">
                <a class="exclude">
                  <span>关于我们</span>
                  <div class="icon-down icon-indicate"></div>
                </a>
              </div>
              <div class="sub-menu">
                <ul>
                  <li>
                    <!-- <a href="/backstage.html">个人中心</a> -->
                    <a href="https://baike.baidu.com/item/%E4%B8%AD%E8%88%AA%E9%95%BF%E6%B1%9F%E5%BB%BA%E8%AE%BE%E5%B7%A5%E7%A8%8B%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8" target="_blank">百度百科</a>
                  </li>
                  <li>
                    <!-- <a href="/backstage.html">个人中心</a> -->
                    <a href="http://www.zhcjjs.com/" target="_blank">公司官网</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="login" v-if="!isLogin">
              <router-link to="/entry/login">登入/注册</router-link>
            </li>
            <li class="service" v-else>
              <div class="menu-top">
                <a class="exclude">
                  <span>园区服务</span>
                  <div class="icon-down icon-indicate"></div>
                </a>
              </div>
              <div class="sub-menu">
                <ul>
                  <li>
                    <a href="/Contract/List" target="_blank">合同审批</a>
                  </li>
                  <li>
                    <a href="/static/backstage.html" v-if="dev">个人中心</a>
                    <a href="/static/backstagePda.html" v-else-if="isPda">个人中心</a>
                    <a href="/static/backstage.html" v-else>个人中心</a>
                  </li>
                </ul>
              </div>
            </li>
            <li v-if="isLogin" class="pc-logout">
              <a @click="logOut">注销</a>
            </li>
          </ul>
        </div>
        <div class="welcome" v-if="isLogin">
          <div>
            <!-- <router-link to="/entry/login">登入/注册</router-link> -->
            <a href="/static/backstage.html" v-if="dev">你好，{{userName}}</a>
            <a href="/static/backstagePda.html" v-else-if="isPda">你好，{{userName}}</a>
            <a href="/static/backstage.html" v-else>你好，{{userName}}</a>
            <a @click="logOut" class="logOut">注销</a>
          </div>
        </div>
      </div>
      <div class="nav-mask" @click="clickMask($event)"></div>
    </header>
  </div>
</template>

<script>
// import { bus } from "../backstage/MsgBus";
import { userInfo } from "../backstage/testData";
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

import $ from "jquery";
import { bus } from "../util";
function navOpen() {
  var nav = document.querySelector(".nav");
  $(nav)
    .removeClass("nav-close")
    .addClass("nav-open");
  // this.fitNavBar();
}
function fitNavBar() {
  var nav = document.querySelector("ul[class*=nav]");
  var height = document.querySelector("#app").clientHeight - 51;
  // console.log(height);
  $(nav).height(height);
}
function navClose() {
  if ($(".sub-menu")[0]) {
    $(".sub-menu")[0].removeAttribute("style");
  }
  var nav = document.querySelector(".nav");
  $(nav)
    .removeClass("nav-open")
    .addClass("nav-close");
  // this.fitNavBar();
}
function menuBtnClose() {
  $(".menu-btn")
    .eq(0)
    .removeClass("menu-btn-normal")
    .addClass("menu-btn-close");
  maskShow();
}
function menuBtnOpen() {
  $(".menu-btn")
    .eq(0)
    .removeClass("menu-btn-close")
    .addClass("menu-btn-normal");
  maskHide();
}
function maskShow() {
  $(".nav-mask")
    .eq(0)
    .fadeIn(150);
}
function maskHide() {
  $(".nav-mask")
    .eq(0)
    .fadeOut(150);
}
export default {
  data() {
    return {
      isLogin: false,
      userName: "",
      dev:ISDEV,
      isPda:false,
    };
  },
  created(){
    var windowWidth = document.documentElement.clientWidth;
    if(windowWidth < 992){
      this.isPda = true;
    }else{
      this.isPda = false;
    }
  },
  methods: {
    fitNavBar: fitNavBar,
    //控制 导航条的点击
    clickNavItem: function(e) {
      var item = $(e.target).parent();
      item.siblings().removeClass("active");
      if (!item.hasClass("active")) {
        item.addClass("active");
      }
      navClose();
      menuBtnOpen();
      //关闭导航条展示
    },
    clickMenuBtn: function(e) {
      var item = $(e.target);
      var flag = item.hasClass("menu-btn-normal");
      if (flag) {
        menuBtnClose();
        navOpen();
      } else {
        menuBtnOpen();
        navClose();
      }
    },
    clickMask: function(e) {
      navClose();
      menuBtnOpen();
      maskHide();
    },
    logOut: function() {
      this.isLogin = false;
      this.clearAllCookie();
      axios({
        method: "post",
        url: "/Account/LogOff",
        data: {}
      })
        .then(resp => {})
        .catch(error => {});
    },
    clearAllCookie: function() {
      var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
      if (keys) {
        for (var i = keys.length; i--; )
          document.cookie = keys[i] + "=0;expires=" + new Date(0).toUTCString();
      }
    }
  },
  mounted: function() {
    //登入后触发重新获取用户的信息
    bus.$on("login", () => {
      if (ISDEV) {
        var mock = new MockAdapter(axios);
        mock.onPost("/Account/GetInfo").reply(200, userInfo);
        // console.log(userInfo);
      }
      getUserInfo.bind(this)();
    });
    window.addEventListener("scroll", () => {
      this.clickMask();
    });
    //点击菜单触发导航条指示改变
    bus.$on("navChange", id => {
      var target = document.querySelector("a[href*=" + id + "]");
      this.clickNavItem({
        target: target
      });
    });
    $(document).ready(() => {
      // this.fitNavBar();
      var id = this.$route.name;
      var target = document.querySelector("a[href*=" + id + "]");
      this.clickNavItem({
        target: target
      });
      var nav = document.querySelector("ul[class*=nav]");
      var appHeight = document.querySelector("#app").clientHeight;
      var height = appHeight - 51;
      var w = document.documentElement.clientWidth;
      if (w < 992) {
        // $(nav).height(height);
      } else {
        nav.removeAttribute("style");
      }
      $(window).resize(() => {
        var appHeight = document.querySelector("#app").clientHeight;
        var height = appHeight - 51;
        var w = document.documentElement.clientWidth;
        if (w < 992) {
          // $(nav).height(height);
        } else {
          nav.removeAttribute("style");
        }
        maskHide();
        menuBtnOpen();
        navClose();
      });
    });

    if (ISDEV) {
      var mock = new MockAdapter(axios);
      mock.onPost("/Account/GetInfo").reply(200, userInfo);
      // console.log(userInfo);
    }
    getUserInfo.bind(this)();
  }
};
function getUserInfo() {
  axios({
    method: "post",
    url: "/Account/GetInfo"
    // data: {}
  })
    .then(resp => {
      // console.log("getUserInfo end");
      if (resp.data.code == 0) {
        this.isLogin = true;
        this.userName = resp.data.data.user.name;
      }
    })
    .catch(error => {});
}
</script>

<style scoped lang="less">
@transition: 0.15s ease-out;
@time: 150;
.nav-mask {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
header {
  border-bottom: 1px solid black;
  position: relative;
}
.menu-btn {
  cursor: pointer;
}
@media (max-width: 992px) {
  .container {
    height: 50px;
  }
}
@media (min-width: 992px) {
  .container {
    height: 105px;
  }
}
.container {
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  max-width: 1200px;
  margin: auto;
  a {
    color: black; // font-size: 50px;
  }
  .menu-btn-close {
    width: 25px;
    height: 25px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(../assets/black-close.png);
  }
  .menu-btn-normal {
    width: 25px;
    height: 25px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(../assets/black-menu.png);
  }
  @media (min-width: 992px) {
    ul {
      display: flex;
    }
    .menu-btn {
      display: none;
    }
  }
  @media (max-width: 992px) {
    ul {
      display: block;
      min-height: calc(100vh - 51px);
      position: absolute;
      top: 51px;
      width: 35%;
      transition: @transition;
      background-color: white;
    }
    .nav-open {
      left: 0%;
    }
    .nav-close {
      left: -35%;
    }
    .menu-btn {
      display: block;
      transition: @transition;
    }
    h1 img {
      height: 40px;
    }
  }
  ul {
    font-size: 0px;
    flex: 1;
    z-index: 20;
    justify-content: space-around;
    align-items: center;
    a {
      // display: inline-block;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      padding: 15px;
      @media (max-width: 992px) {
        font-size: 15px;
      }
      font-size: 18px;
      font-weight: bold;
      transition: @transition;
    }
    a:not(class*=exclude):hover {
      color: #fff;
    }
    .login {
      a {
        font-size: 14px;
        @media (max-width: 992px) {
          font-size: 12px;
        }
      }
    }
    li {
      transition: @transition;
    }
    li:not([class*="service"]):hover {
      background-color: #a9a9a9;
    }
    .active {
      background: #a9a9a9;
      a {
        color: #fff;
      }
    }
  }
  .logo {
    padding: 10px;
    font-size: 0px;
    display: inline-block;
    @media (min-width: 992px) {
      img {
        width: 155px;
      }
    }
  }
  .service {
    position: relative;
    .icon-indicate {
      display: inline-block;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      width: 20px;
      height: 20px;
      @media (max-width: 992px) {
        height: 15px;
        width: 15px;
      }
      margin-left: 5px;
    }
    .icon-up {
      //   .icon-indicate;
      background-image: url(../assets/icon_up_arrow.png);
    }
    .icon-down {
      //   .icon-indicate;
      background-image: url(../assets/icon_down_arrow.png);
    }
    .menu-top {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .sub-menu {
      // min-height: 200px;
      padding: 10px 0px 10px;
      background: white;
      position: absolute;
      z-index: 20;
      width: 80%;
      transform: translate(10%, 0);
      display: none;
      background-color: #fff;
      border: 1px solid #ebeef5;
      border-radius: 4px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

      ul {
        font-size: 14px;
        display: block;
        width: 100%;
        min-height: 0px;
        li {
          line-height: 35px;
          cursor: pointer;
          a {
            font-size: 14px;
            padding: 0px;
            // line-height: 14px;
            height: 100%;
            width: 100%;
            display: inline-block;
          }
        }
      }
    }
    &:hover {
      .sub-menu {
        display: block;
        ul {
          position: relative;
          top: 0px;
          left: 0px;
        }
      }
      .menu-top {
        .icon-indicate {
          background-image: url(../assets/icon_up_arrow.png);
        }
      }
    }
    .menu-top {
      cursor: pointer;
      .exclude {
        @media (max-width: 992px) {
          font-size: 14px;
          padding: 10px 8px 10px 10px;
        }
      }
    }
  }
  .welcome {
    font-size: 14px;
    @media (max-width: 992px) {
      display: none;
    }
    a {
      cursor: pointer;
    }
    a:not([class="logOut"]):hover {
      color: #409eff;
    }
    .logOut {
      margin-left: 20px;
      color: red;
    }
  }
  .pc-logout {
    @media (min-width: 992px) {
      display: none;
    }
  }
}
</style>