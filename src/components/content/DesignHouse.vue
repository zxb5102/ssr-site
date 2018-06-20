<template>
    <div class="design-house">
        <el-row :gutter="gutter" class="e-row">
            <el-col :span="leftCol">
                <el-row :gutter="0">
                    <el-col :span="24">
                        <div class="top-search">
                            <el-input v-model="input" placeholder="搜索设计所"></el-input>
                            <el-button size="medium" type="primary" icon="el-icon-search">搜索</el-button>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="0" v-for="(item,dex) in designHouse" :key="dex" v-if="dex < 5">
                    <el-col :span="24" class="e-col">
                        <el-card :body-style="{ padding: '0px' }" class="e-card">
                            <router-link tag="a" :to="{ path: item.link}">
                                <div class="e-body">
                                    <div class="wrap-img">
                                        <img :src="item.logo" class="image" onload="designerHouseFitImg(this)">
                                    </div>
                                    <div style="" class="wrap-bottom">
                                        <h3>
                                            <span>{{item.title}}</span>
                                        </h3>
                                        <p>{{item.desc}}</p>
                                    </div>
                                </div>
                            </router-link>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row :gutter="0" class="pagination">
                    <el-col :span="24">
                        <el-pagination :background="background" :current-page="currentPage" @current-change="currentChange" :small="small" layout="prev, pager, next" :total="total" :page-size="pageSize">
                        </el-pagination>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="rightCol" class="hidden-md-and-down">
                <aside class="sidebar">
                    <h3>
                        <span>优秀设计师</span>
                    </h3>
                    <section>
                        <ul>
                            <li v-for="(item,dex) in designer" :key="dex" v-if="dex < 5">
                                <!-- <span class="dex">{{dex+1}}</span> -->
                                <div class="left">
                                    <img :src="item.src" alt="">
                                </div>
                                <div class="right">
                                    <h5>
                                        <router-link tag="a" :to="{path:item.link}">
                                            {{item.title}}
                                        </router-link>
                                    </h5>
                                    <p>{{item.desc}}</p>
                                </div>
                            </li>
                        </ul>
                    </section>
                </aside>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import testData from "../../testData.js";
import { bus } from "../../util";
import $ from "jquery";
export default {
  data() {
    return {
      input: "",
      small: false,
      tabPosition: "top",
      designHouse: testData.designHouse,
      designer: testData.designer,
      total: 40,
      pageSize: 5,
      currentPage: 1,
      leftCol: 17,
      rightCol: 7,
      gutter: 50,
      background: true
    };
  },
  methods: {
    currentChange: function(currentPage) {
      this.currentPage = currentPage;
    }
  },
  mounted() {
    var self = this;
    // bus.$emit('navFit');
    $(document).ready(function() {
      windowSizeChange.bind(self)();
      $(window).resize(() => {
        windowSizeChange.bind(self)();
      });
    });
  }
};
function windowSizeChange() {
  var width = document.documentElement.clientWidth;
  if (width > 992) {
    // this.tabPosition = "left";
    this.small = false;
    this.gutter = 50;
    this.leftCol = 17;
    this.background = true;
  } else {
    // this.tabPosition = "top";
    this.small = true;
    this.gutter = 0;
    this.leftCol = 24;
    this.background = false;
  }
}
</script>

<style scoped lang="less">
.e-row {
  @media (min-width: 992px) {
    margin: auto; // width: 1200px;
    display: flex;
    justify-content: space-between;
  }
}
.e-body {
  display: flex;
}
.wrap-img {
  height: 100px;
  width: 100px;
  overflow: hidden;
  min-width: 100px;
  @media (min-width: 992px) {
    height: 113px;
    width: 200px;
    min-width: 200px;
  }
}
.e-col {
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    img {
      transform: scale(1.2);
    }
    .wrap-bottom {
      h3 {
        color: #35b5ff;
      }
    }
  }
  img {
    transition: all 1s ease 0s;
  }
}
.wrap-bottom {
  padding: 14px;
  text-align: left;
  @media (max-width: 992px) {
    padding: 10px;
  }
  h3 {
    font-weight: 800;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .wrap-logo {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      overflow: hidden;
    }
    img {
      max-width: 50px;
      max-height: 50px;
      margin: auto;
    }
  }
  p {
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
.design-house {
  background-color: white;
  font-size: 14px;
  width: 95%;
  margin: auto;
  @media (min-width: 992px) {
    width: 1200px;
  }
  .pagination {
    margin-top: 20px;
  }
}
.top-search {
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  button {
    margin-left: 10px;
  }
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
    &:nth-child(n) {
      .dex {
        font-size: 18px;
        color: #b5b9bc;
      }
    }
    &:nth-child(1) {
      .dex {
        color: #f8b551; // font-size: 50px;
      }
    }
    &:nth-child(2) {
      .dex {
        color: #787d82; // font-size: 50px;
      }
    }
    &:nth-child(3) {
      .dex {
        color: #ec6941; // font-size: 50px;
      }
    }
    display: flex;
    align-items: center; // background: red;
    margin-top: 30px;
    .dex {
      flex: 1;
    }
    .right {
      flex: 11;
      display: flex;
      flex-direction: column;
      align-items: left;
      a {
        color: #787d92;
        text-decoration: none;
        &:hover {
          color: #14191e;
        }
      }
      p {
        font-size: 12px;
        color: #b5b9bc;
        line-height: 25px;
      }
    }
    .left {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 20px;
      margin-left: 20px; // display: flex;
      img {
        margin: auto;
        height: 100%; // max-width: 100%;
        // max-height: 100%;
      }
    }
  }
}
</style>