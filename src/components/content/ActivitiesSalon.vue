<template>
  <div class="activities">
    <el-row :gutter="gutter" class="e-row">
      <el-col :span="leftCol">
        <el-carousel trigger="click" :indicator-position="indicatorPosition" :height="height" class="e-carousel">
          <el-carousel-item v-for="(item,dex) in activities.common" :key="dex" v-if=" dex < 3">
            <div class="top-imgs">
              <a :href="item.link" target="_blank">
                <figure>
                  <img :src="item.src" onload="newsFitImgForBig(this)">
                  <figcaption>{{item.title}}</figcaption>
                </figure>
              </a>
            </div>
          </el-carousel-item>
        </el-carousel>
        <section>
          <el-card v-for="(item,dex) in activities.common" :key="dex" v-if="dex >= 3" class="e-card" :body-style="{ padding: '0px'}">
            <a :href="item.link" target="_blank">
              <div class="e-body">
                <div class="wrap-img">
                  <img :src="item.src" alt="" onload="newsFitImgForCommon(this)">
                </div>
                <div class="detail">
                  <div class="top">
                    <h3>{{item.title}}</h3>
                    <p class="hidden-md-and-down">
                      <span>
                                                      <span>发布时间:</span>
                      <span>{{item.date}}</span>
                      </span>
                      <span>
                                                      <span>来源:</span>
                      <span>{{item.from}}</span>
                      </span>
                    </p>
                  </div>
                  <p class="desc">
                    {{item.desc}}
                  </p>
                </div>
              </div>
            </a>
          </el-card>
        </section>
        <el-row :gutter="0" class="pagination">
          <el-col :span="24">
            <el-pagination :background="background" :current-page="currentPage" @current-change="currentChange" :small="small" layout="prev, pager, next" :total="total" :page-size="pageSize">
            </el-pagination>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="rightCol" class="rightCol hidden-md-and-down">
        <aside class="sidebar">
          <h3>
            <span>热门活动</span>
          </h3>
          <ul>
            <li v-for="(item,dex) in activities.hot" :key="dex">
              <span class="dex">{{dex + 1}}</span>
              <span class="title">
                  <a :href="item.link" target="_blank" >
                        {{item.title}}
                  </a>
              </span>
            </li>
          </ul>
        </aside>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import testData from "../../testData";
  import {
    bus
  } from "../../util";
  import $ from "jquery";
  export default {
    data() {
      return {
        indicatorPosition: "outside",
        height: "350px",
        small: false,
        tabPosition: 'top',
        background: true,
        activities: testData.activities,
        // designHouse: testData.designHouse,
        // designer: testData.designer,
        total: 40,
        pageSize: 5,
        currentPage: 1,
        leftCol: 17,
        rightCol: 7,
        gutter: 50
      };
    },
    methods: {
      currentChange: function() {}
    },
    mounted() {
      var self = this;
      // bus.$on('navFit');
      $(document).ready(function() {
        windowSizeChange.bind(self)();
        $(window).resize(() => {
          windowSizeChange.bind(self)();
        });
      })
    }
  }
  function windowSizeChange() {
    var width = document.documentElement.clientWidth;
    if (width > 992) {
      this.small = false;
      this.background = true;
      this.gutter = 50;
      this.leftCol = 17;
    } else {
      this.height = "150px";
      this.small = true;
      this.gutter = 0;
      this.leftCol = 24;
      this.background = false;
    }
  }
</script>

<style scoped lang="less">
  .activities {
    background-color: white;
    .rightCol {
      background-color: #f7f7f7;
      margin-top: 20px;
    }
    width: 1200px;
    @media (max-width: 992px) {
      width: 100%;
    }
    font-size: 14px;
    margin: auto;
    .e-card {
      margin-bottom: 10px;
      cursor: pointer;
      &:hover {
        .wrap-img {
          img {
            transform: scale(1.2);
          }
        }
        .top {
          h3 {
            color: #35b5ff; // text-decoration: underline;
          }
        }
      }
    }
    .e-body {
      display: flex;
      align-items: center;
      @media (max-width: 992px) {
        padding-left:10px;
      }
      .wrap-img {
        height: 113px;
        width: 200px;
        overflow: hidden;
        img {
          transition: all 1s ease 0s;
        }
        @media (max-width: 992px) {
          height: 66px;
          width: 100px;
        }
      }
      .detail {
        text-align: left; // padding-left: 20px;
        padding: 5px 20px;
        @media (max-width: 992px) {
          padding: 20px 10px;
        }
        flex: 1; // margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .top {
          h3 {
            margin-bottom: 10px; // p + span{
            font-weight: 700; // margin-bottom: 10px;
            font-weight: 700;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap; // max-width: 200px;
            max-width: 583px;
            @media (max-width: 992px) {
              max-width: calc(100vw * 0.6);
              margin-bottom: 0px;
            }
          }
          p>span {
            color: #b5b9bc;
            margin-right: 20px;
          }
        }
        .desc {
          margin-top: 13px;
          line-height: 18px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          @media (max-width: 992px) {
            font-size: 12px;
          }
        }
      }
    }
    .e-carousel {
      margin: 20px 0px;
      @media (max-width: 992px) {
        margin: 0px 0px;
      }
    }
    .top-imgs {
      height: 100%;
      width: 100%;
      position: relative;
      cursor: pointer;
      figcaption {
        position: absolute;
        bottom: 0px;
        left: 0px;
        background-color: rgba(0, 0, 0, 0.3);
        color: white;
        line-height: 46px;
        // width: 100%;
        text-align: left;
        padding-left: 50px;
        max-width: 80%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      img {
        width: 100%;
      }
    }
    .e-row {
      @media (min-width: 992px) {
        margin: auto; // width: 1200px;
        display: flex;
        justify-content: space-between;
      }
    }
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
    .pagination {
      margin-top: 20px;
    }
    .sidebar {
      h3 {
        font-size: 16px;
        color: #14191e;
        padding: 20px 0px;
        border-bottom: 1px solid #d0d6d9;
        text-align: left;
      }
      li {
        border-bottom: 1px dotted #9e9e9e;
        padding: 15px 0px;
        color: #14191e;
        .title {
          &:hover {
            // text-decoration: underline;
            cursor: pointer;
          }
          overflow: hidden;
          text-overflow: ellipsis;
          width: 75%;
          white-space: nowrap;
          text-align: left;
        }
        .dex {
          font-size: 18px;
          color: white;
          background-color: #ccc;
          padding: 2px;
          border-radius: 7px;
          line-height: 20px;
          width: 20px;
          height: 20px;
        }
        &:nth-child(1) {
          margin-top: 10px;
        }
        span {
          &:nth-child(1) {
            margin-right: 20px;
          }
        } // margin-top: 30px;
        display: flex;
        height: 20px;
        align-items: center;
      }
    }
  }
</style>

