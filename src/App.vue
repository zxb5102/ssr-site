<template>
  <div class="wrap-outer" id="app">
    <div >
      <!-- header部分 -->
      <Header/>
      <!-- 路由部分 -->
      <router-view/>
      <!--  footer部分    -->
      <Footer/>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import "element-ui/lib/theme-chalk/icon.css";
import "element-ui/lib/theme-chalk/display.css";
import "element-ui/lib/theme-chalk/alert.css";
// '@ElementUI'
import "element-ui/lib/theme-chalk/input.css";
import input from "element-ui/lib/input";
Vue.component(input.name, input);
import "element-ui/lib/theme-chalk/button.css";
import button from "element-ui/lib/button";
Vue.component(button.name, button);
import "element-ui/lib/theme-chalk/collapse.css";
import collapse from "element-ui/lib/collapse";
Vue.component(collapse.name, collapse);
import "element-ui/lib/theme-chalk/collapse-item.css";
import collapseItem from "element-ui/lib/collapse-item";
Vue.component(collapseItem.name, collapseItem);
import "element-ui/lib/theme-chalk/table.css";
import table from "element-ui/lib/table";
Vue.component(table.name, table);
import "element-ui/lib/theme-chalk/table-column.css";
import tableColumn from "element-ui/lib/table-column";
Vue.component(tableColumn.name, tableColumn);
import "element-ui/lib/theme-chalk/dialog.css";
import dialog from "element-ui/lib/dialog";
Vue.component(dialog.name, dialog);
import "element-ui/lib/theme-chalk/card.css";
import card from "element-ui/lib/card";
Vue.component(card.name, card);
import "element-ui/lib/theme-chalk/col.css";
import col from "element-ui/lib/col";
Vue.component(col.name, col);
import "element-ui/lib/theme-chalk/row.css";
import row from "element-ui/lib/row";
Vue.component(row.name, row);
import "element-ui/lib/theme-chalk/carousel.css";
import carousel from "element-ui/lib/carousel";
Vue.component(carousel.name, carousel);
import "element-ui/lib/theme-chalk/carousel-item.css";
import carouselItem from "element-ui/lib/carousel-item";
Vue.component(carouselItem.name, carouselItem);
import "element-ui/lib/theme-chalk/pagination.css";
import pagination from "element-ui/lib/pagination";
Vue.component(pagination.name, pagination);
import "element-ui/lib/theme-chalk/tabs.css";
import tabs from "element-ui/lib/tabs";
Vue.component(tabs.name, tabs);
import "element-ui/lib/theme-chalk/tab-pane.css";
import tabPane from "element-ui/lib/tab-pane";
Vue.component(tabPane.name, tabPane);

// var window = {};
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import $ from "jquery";
// import {
//   fitImg,
//   autoFit,
//   autoFitWrapImg,
//   cacheFit,
//   proFitImg,
//   designerHouseFitImg,
//   newsFitImgForCommon,
//   newsFitImgForBig
// } from "./util.js";
// import Index from '@/components/content/Index'
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  // beforeMount() {
  //   window.fitImg = fitImg;
  //   window.autoFit = autoFit;
  //   window.autoFitWrapImg = autoFitWrapImg;
  //   window.cacheFit = cacheFit;
  //   window.newsFitImgForCommon = newsFitImgForCommon;
  //   window.newsFitImgForBig = newsFitImgForBig;
  //   window.designerHouseFitImg = designerHouseFitImg;
  //   window.proFitImg = proFitImg;
  // },
  mounted() {
    var hml = document.documentElement;
    hml.style.fontSize = hml.clientWidth / 750 * 100 + "px";
    $(window).resize(() => {
      var hml = document.documentElement;
      hml.style.fontSize = hml.clientWidth / 750 * 100 + "px";
    });
  }
};
</script>

<style lang="less">
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale; */
  background-color: white;
  @media (max-width: 992px) {
    background-color: #f3f3f3;
  }
  text-align: center; // overflow: hidden;
}
html {
  overflow-y: scroll;
}
a {
  text-decoration: none;
  color: #303133;
}
.wrap-outer {
  // position: relative;
  // left: calc(100vw - 100%);
}
.user {
  height: 100%;
  width: 17px;
  background-image: url(./assets/login/user.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
}
.pwd {
  display: inline-block;
  height: 100%;
  width: 17px;
  background-image: url(./assets/login/password.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.company-icon {
  display: inline-block;
  height: 100%;
  width: 17px;
  background-image: url(./assets/register/company.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.email {
  display: inline-block;
  height: 100%;
  width: 17px;
  background-image: url(./assets/register/email.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.wrap-bottom p,
.wrap-bottom .desc,
.wrap-text {
  -webkit-box-orient: vertical;
}
</style>