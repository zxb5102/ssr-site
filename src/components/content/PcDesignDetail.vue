<template>
  <div class="designDetail">
    <div class="top-img">
      <img :src="msg.bgImg" alt="" onload="autoFitWrapImg(this)">
      <div class="wrap-logo">
        <img :src="msg.logo" alt="">
      </div>
    </div>
    <div class="main-content">
      <el-tabs v-model="currentTab" :tab-position="tabPosition">
        <el-tab-pane label="简介" name="intro">
          <div class="intro-main">
            <h3 class="each-tab">描述</h3>
            <div class="desc">
              {{msg.desc}}
            </div>
            <div class="wrap-a-p">
              <div class="address">
                <span class="wrap-icon">
                  <img src="../../assets/designDetail/location.png" alt="">
                </span>
                <span class="text">{{msg.address}}</span>
              </div>
              <div class="phone">
                <span class="wrap-icon">
                  <img src="../../assets/designDetail/phone.png" alt="">
                </span>
                <span class="text">{{msg.phone}}</span>
              </div>
            </div>
            <h3 class="each-tab designer-show">
              <span>
                设计师风采
              </span>
            </h3>
            <swiper :options="swiperOption" class="my-swiper">
              <swiper-slide v-for="(item,dex) in msg.designers" :key="dex">
                <div class="list-item">
                  <div class="wrap-designer-img">
                    <img :src="item.img" alt="" onload="autoFitWrapImg(this)">
                  </div>
                  <div class="designer-desc">
                    {{item.position}}:{{item.name}}
                  </div>
                </div>
              </swiper-slide>
              <div class="swiper-pagination my-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </el-tab-pane>
        <el-tab-pane label="荣誉/证书" name="certificate">
          <div class="certificate-main">
            <h3 class="each-tab">
              <span>
                证书
              </span>
            </h3>
            <ul class="design-items" id="viewer">
              <li v-for="(item,dex) in msg.certs" :key="dex" v-if="dex <=6">
                <div class="wrap-designer-img">
                  <img :src="item.img" alt="" onload="autoFitWrapImg(this)">
                </div>
                <div class="designer-desc">
                  {{item.name}}
                </div>
              </li>
            </ul>
            <el-pagination background layout="prev, pager, next" :total="1000" class="center-pag">
            </el-pagination>
            <h3 class="each-tab">
              <span>荣誉</span>
            </h3>
            <ul class="honor-list">
              <li v-for="(item,dex) in msg.honors" :key="dex">
                <span>{{item.name}}</span>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="作品 " name="production">
          <div class="producton-main">
            <h3 class="each-tab">
              <span>精品工程</span>
            </h3>
            <ul class="design-items" id="competitive-prod">
              <li v-for="(item,dex) in msg.competitionProd" :key="dex" v-if="dex <=6">
                <div class="wrap-designer-img">
                  <img :src="item.img" alt="" onload="autoFitWrapImg(this)">
                </div>
                <div class="designer-desc">
                  {{item.name}}
                </div>
              </li>
            </ul>
            <el-pagination background layout="prev, pager, next" :total="1000" class="center-pag" />
            <h3 class="each-tab">
              <span>作品赏析</span>
            </h3>
            <ul class="design-items" id="enjoy-prod">
              <li v-for="(item,dex) in msg.enjoyProd" :key="dex" v-if="dex <=6">
                <div class="wrap-designer-img">
                  <img :src="item.img" alt="" onload="autoFitWrapImg(this)">
                </div>
                <div class="designer-desc">
                  {{item.name}}
                </div>
              </li>
            </ul>
            <el-pagination background layout="prev, pager, next" :total="1000" class="center-pag" />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Viewer from "viewerjs";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: ["msg"],
  data() {
    return {
      isReady: false,
      numbers: [1, 2, 3, 4, 5, 6, 7],
      currentTab: "intro",
      tabPosition: "left",
      decorate: "",
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {},
  watch: {
    msg: function() {
      // debugger;
      setTimeout(() => {
        var vie = document.getElementById("viewer");
        new Viewer(vie);
        new Viewer(document.getElementById("competitive-prod"));
        new Viewer(document.getElementById("enjoy-prod"));
      }, 1000);
    }
  },
  mounted() {},
  components: {
    swiper: swiper,
    swiperSlide: swiperSlide
  }
};
</script>
<style>
@import "viewerjs/dist/viewer.min.css";
@import "swiper/dist/css/swiper.css";
</style>

<style lang="less" scoped>
.designDetail {
  @paddingLeft: 20px;
  @paddingTop: 50px;
  @eachLiHeight: 323px * 0.8;
  @eachLiWidth: 253px * 0.8;
  @allPaddingLeft: 10px;
  @certWidth: 350px*0.8;
  @certHeight: 205px*0.8;
  text-align: left;
  font-size: 14px;
  width: 1200px;
  margin: auto;
  .top-img {
    height: 300px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
    }
    .wrap-logo {
      height: 150px;
      width: 150px;
      overflow: hidden;
      position: absolute;
      bottom: 20px;
      left: 20px;
      display: flex;
      background-color: white;
      img {
        margin: auto;
        max-width: 100%;
        max-width: 100%;
      }
    }
  }
  .main-content {
    margin-top: 50px;
    .each-tab {
      font-size: 25px;
      font-weight: 300;
      border-bottom: 1px solid black;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
    }
    .wrap-a-p {
      padding-left: @paddingLeft;
      margin-top: 20px;
      display: flex;
      .address,
      .phone {
        display: flex;
        align-items: center;
        .wrap-icon {
          margin-right: 10px;
          img {
            height: 20px;
            width: 20px;
          }
        }
      }
    }
    .wrap-a-p > div {
      width: 50%;
      display: inline-block;
      flex: 1;
    }
    .desc {
      padding: @paddingTop @paddingLeft 0px @paddingLeft;
      line-height: 24px;
      letter-spacing: 2px;
    }
    .intro-main {
      padding-left: @allPaddingLeft;
      .designer-show {
        margin-top: 50px;
      }
      .wrap-designer-img {
        width: @eachLiWidth;
        height: @eachLiHeight;
        background: gray;
        position: relative;
        overflow: hidden;
        img {
        }
      }
      .designer-desc {
        height: 50px;
        line-height: 50px;
        text-align: center;
      }
      .design-items {
        padding: @paddingTop 0 0 100px;
        display: flex;
        flex-wrap: wrap;
        li {
          width: @eachLiWidth;
          margin-right: 20px;
          margin-bottom: 20px;
        }
      }
    }
    .certificate-main {
      .intro-main;
      .wrap-designer-img {
        overflow: hidden;
        width: @certWidth;
        height: @certHeight;
      }
      .design-items {
        li {
          &:hover {
            cursor: pointer;
            color: #409eff;
          }
          width: @certWidth;
        }
      }
      .honor-list {
        padding-left: @paddingLeft*2;
        padding-top: @paddingTop;
        li {
          list-style-type: disc;
          line-height: 35px;
          height: 35px;
          &:hover {
            color: #409eff;
            cursor: pointer;
          }
        }
      }
    }
    .producton-main {
      .certificate-main;
    }
    .list-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .my-pagination {
      position: static;
      margin-top: 20px;
    } // 设计师的展示页面
    .my-swiper {
      margin-top: @paddingTop;
      overflow: unset;
      cursor: pointer;
      .list-item {
        .wrap-designer-img {
          transition: all 0.4s;
        }
        &:hover {
          .wrap-designer-img {
            transform: translate(0, -20px);
          }
          .designer-desc {
            color: #409eff;
          }
        }
      }
    }
    .center-pag {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  } //详细页面的css
  .bread-wrap {
    div {
      font-size: 15px;
      line-height: inherit;
    }
    height: 50px;
    line-height: 50px;
  }
  .view-detail-designer {
    .main-content .intro-main;
    padding-left: 0px;
  }
  .view-detail-certificate {
    .main-content .certificate-main;
    padding-left: 0px;
  }
  .view-detail-production {
    .main-content .producton-main;
    padding-left: 0px;
  }
}
</style>



