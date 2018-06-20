<template>
  <div class="pda">
    <swiper :options="swiperOption" ref="myswiper" class="wrap-slides">
      <swiper-slide class="map bg">
        <div class="bg-1">
          <div class="bg-2">
            <div class="desc-map" style="position:relative;top:10px">
              根据全国网点分布图显示，中航长江建设工程有限公司（以下简称“中航长江”）旗下共有29家分公司。2015年，中航长江建立全国首个设计师产业园——中航长江设计师产业园。如图所示，产业园的复制推广工作正如火如荼展开，第一个对外复制推广的中航长江（武汉）设计师产业园也即将开园。而这只是开始，在未来，设计师产业园将向全国各地发展，打造“长江设计”品牌影响力，让“长江设计”走向世界！
            </div>
          </div>
        </div>
        <div class="entry">
          <router-link :to="{path:'/entryForm'}" tag="span" style="text-decoration:underline">
            申请入驻 >>
          </router-link>
          <div class="wrap-manual">
            <a href="https://i.eqxiu.com/s/Fh9sFt3O" target="_blank">请阅读&nbsp;&nbsp;
              <span style="text-decoration: underline;">招商手册</span>
            </a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="wuh bg">
        <div class="desc-wuh">
          中航长江拟在
          <span class="focus">武汉</span>市江岸区黄埔科技园中的黄埔创立方，投资建设35000平方米的设计师产业园，黄埔创立方是江岸区政府、科技局重点扶持产业升级示范区，规划总建筑面积约7万方，以科技金融、互联网+、文化创意、智能制造、信息技术等现代服务业为产业导向，与中航长江打造的设计师产业园理念相契合。 中航长江设计师产业园是以打造中国设计全球中心为理念，引进工业设计、建筑设计和建筑装饰设计等三大领域的优秀设计师资源，配套项目/造价咨询、监理、金融投资、劳务、效果图制作、施工图细化等公司，并在园区内建设新型建筑材料研发中心、智能家居研发中心、建筑VR视觉研发中心、建筑材料电子商务中心和创业孵化中心，通过与当地相关专业高等院校建立校企合作，为园区的设计师、科研中心与创业者提供后备人才、高科技研发支持及创业孵化服务，打造以工业制造和建筑工程等设计为核心，打通工业和建筑行业整体产业链为纽带的超大型行业众创服务平台，预计投资1.25亿元。
        </div>
      </swiper-slide>
      <swiper-slide class="nanc bg">
        <div class="bg-1">
          <div class="desc-nanc">
            中航长江设计师产业园是国内首个将互联网思维+传统工程行业进行产业升级的专业型众创空间，由中航长江建设工程有限公司（以下简称“中航长江”）于2015年11月在江西省
            <span class="focus">南昌</span>市创办，2016年8月23日，李克强总理参观了园区并肯定了产业园的创新模式。 目前，在江西南昌已建成的设计师产业园总投资1.2亿元，一期投资5200万元已建成，南昌设计师产业园一期是对原乔家珊食品厂的废旧厂房进行升级改造，总面积10000余平方米，容纳钢结构设计、室内设计、园林设计、幕墙设计、软装设计、规划设计、机电设计、漆画制作、墙体彩绘、雕塑设计等37个设计中心及辅助团队，含建筑与设计研究中心、培训教育中心、建筑材料展示中心、融资中心及相关辅助配套设施。年产值10亿，上缴税收4000余万元，并且，已经为200余名设计师、200余名大学生、400余名工程管理人员以及10000余名农民工提供就业和创业机会。
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination my-pagination" slot="pagination"></div>
      <div slot="scrollbar" class="wrap-arrow">
        <svg t="1521685799789" v-if="down" class="arrow-down" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="648" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
          <path d="M956.031 461.954c0-23.955-19.441-43.396-43.396-43.396-10.773 0-20.33 4.346-27.937 10.86l-0.425-0.425-2.235 2.235c-0.044 0.044-0.067 0.063-0.112 0.106l-358.336 358.338c-6.256 6.239-16.377 6.239-22.609 0l-360.685-360.679-0.659 0.659c-7.646-6.685-17.355-11.093-28.298-11.093-23.935 0-43.374 19.441-43.374 43.396 0 15.289 8.389 28.084 20.355 35.812 0.726 1.344 0.576 2.983 1.705 4.112l410.958 410.948c6.233 6.244 16.353 6.244 22.609 0l410.951-410.949c1.279-1.279 1.172-3.108 1.916-4.641 11.522-7.794 19.57-20.336 19.57-35.283zM956.031 149.884c0-23.955-19.441-43.394-43.396-43.394-10.773 0-20.33 4.345-27.937 10.857l-0.425-0.425-2.235 2.235c-0.044 0.045-0.067 0.063-0.112 0.109l-358.337 358.338c-6.256 6.239-16.377 6.239-22.609 0l-360.685-360.683-0.659 0.659c-7.646-6.685-17.355-11.091-28.298-11.091-23.935 0-43.374 19.439-43.374 43.394 0 15.29 8.389 28.087 20.355 35.815 0.726 1.341 0.576 2.98 1.705 4.109l410.959 410.951c6.233 6.239 16.353 6.239 22.609 0l410.951-410.951c1.279-1.277 1.172-3.108 1.916-4.641 11.522-7.794 19.57-20.336 19.57-35.283z" p-id="649" fill="#ffffff"></path>
        </svg>
        <svg v-else t="1521687329979" class="arrow-down" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="633" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200">
          <path d="M67.969 562.046c0 23.955 19.441 43.396 43.396 43.396 10.773 0 20.33-4.346 27.937-10.86l0.425 0.425 2.235-2.235c0.044-0.044 0.067-0.063 0.112-0.106l358.336-358.338c6.256-6.239 16.377-6.239 22.61 0l360.685 360.679 0.658-0.659c7.647 6.685 17.356 11.093 28.3 11.093 23.935 0 43.374-19.441 43.374-43.396 0-15.289-8.389-28.084-20.355-35.812-0.724-1.344-0.576-2.983-1.705-4.112l-410.958-410.948c-6.234-6.244-16.354-6.244-22.61 0l-410.95 410.949c-1.279 1.279-1.172 3.108-1.916 4.641-11.522 7.794-19.571 20.336-19.571 35.283zM67.969 874.116c0 23.955 19.441 43.394 43.396 43.394 10.773 0 20.33-4.342 27.937-10.855l0.425 0.425 2.235-2.235c0.044-0.045 0.067-0.065 0.112-0.109l358.336-358.339c6.256-6.239 16.377-6.239 22.61 0l360.685 360.684 0.658-0.66c7.647 6.685 17.356 11.091 28.3 11.091 23.935 0 43.374-19.439 43.374-43.394 0-15.289-8.389-28.087-20.355-35.815-0.724-1.341-0.576-2.98-1.705-4.109l-410.958-410.951c-6.234-6.239-16.354-6.239-22.61 0l-410.95 410.953c-1.279 1.277-1.172 3.107-1.916 4.641-11.522 7.794-19.571 20.334-19.571 35.282z" p-id="634" fill="#ffffff"></path>
        </svg>
      </div>
    </swiper>
  </div>
</template>
<script>
import $ from "jquery";
import { swiper, swiperSlide } from "vue-awesome-swiper";
var topHeight = document.documentElement.clientHeight;
export default {
  data() {
    return {
      down: true,
      swiperOption: {
        direction: "vertical",
        height: topHeight,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        on: {
          slideChange: () => {
            var dex = this.$refs.myswiper.swiper.realIndex;
            if (dex == 2) {
              this.down = false;
            } else {
              this.down = true;
            }
          }
        }
      }
    };
  },
  components: {
    swiper: swiper,
    swiperSlide: swiperSlide
  },
  destroyed() {
    window.onscroll = null;
  },
  mounted() {
    // var container = document.querySelector(".container");
    // container.ontouchmove = function(){
    //   return false;
    // }
    // console.log(1);
    // document.documentElement.scrollTop = 0;
    // window.onscroll = function() {
    //   document.documentElement.scrollTop = 0;
    // };

    // topHeight*3
    var topHeight = document.documentElement.clientHeight;
    document
      .querySelector(".swiper-wrapper")
      .setAttribute("style", "height:" + topHeight + "px;");

    // $(window).scroll(function() {
    // console.log();
    // window.scrollTop = 0;
    // console.log(document.documentElement.scrollTop);
    // document.documentElement.scrollTop = 0;
    // $("span").text((x += 1));
    // });

    var arrow = document.querySelector(".arrow-down");
    arrow.ontouchstart = function() {
      return false;
    };
  }
};
</script>

<style>
@import "viewerjs/dist/viewer.min.css";
@import "swiper/dist/css/swiper.css";
</style>
<style lang="less" scoped>
.pda {
  font-size: 14px;
  .bg {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }
  .my-pagination {
    position: fixed;
  }
  .map {
    .bg-2 {
      height: 100%;
      width: 100%;
      background-image: url(../../assets/pcindex/map5-pda.png);
      background-repeat: no-repeat;
      background-size: contain;
      background-position-y: 75%;
    }
    .bg-1 {
      .bg-2;
      background-image: url(../../assets/pcindex/2.jpg);
      background-size: cover;
      background-position-y: center;
      // background-position-x: center;
      background-repeat: no-repeat;
      // background-position: center;
      //  background:  url(../../assets/pcindex/2.jpg) no-repeat center center;
      // background: url(../../assets/pcindex/2.jpg) center cover no-repeat;
    }
    .desc-map {
      width: 85%;
      margin: auto;
      //   margin-top: 10px;
      padding: 10px;
      text-align: left;
      text-indent: 24px;
      line-height: 24px;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 20px;
    }
    .entry {
      font-size: 20px;
      position: absolute;
      top: 60%;
      left: 20px;
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 10px;
      color: #0475f2;
      font-weight: 600;
      // text-decoration: underline;
    }
  }
  .wuh {
    background-image: url(../../assets/pcindex/1.jpg);
    .desc-wuh {
      .map .desc-map;
      margin: 0px;
      position: absolute;
      bottom: 0px;
      left: 50%;
      top: 50%;
      height: 450px;
      transform: translate(-50%, -50%);
    }
  }
  .nanc {
    .desc-nanc {
      .wuh .desc-wuh;
      height: 400px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .bg-1 {
      height: 100%;
      width: 100%;
      background-image: url(../../assets/pcindex/3.jpg);
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
  .arrow-down {
    position: absolute;
    width: 40px;
    height: 40px;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
  .focus {
    font-size: 28px;
    color: yellow;
  }
}
.wrap-arrow {
  position: absolute;
  bottom: 50px;
  left: 50%;
}
.wrap-manual {
  margin-top: 20px;
  a {
    text-decoration-style: none;
    color: #707073;
    font-size: 14px;
  }
}
</style>