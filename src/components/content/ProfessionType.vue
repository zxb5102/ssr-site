<template>
  <div class="pro">
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane :label="item.name" v-for="(item,dex) in pro" :key="dex">
        <el-row :gutter="0">
          <el-col :span="24" v-for="(each,dex) in item.content" :key="dex" class="e-col">
            <el-card :body-style="{ padding: '0px' }" class="e-card">
              <router-link tag="a" :to="{ path: each.link}">
                <!-- <a :href="each.link" target="_blank"> -->
                <div class="e-body">
                  <div class="wrap-img">
                    <img :src="each.src" class="image" onload="proFitImg(this)">
                  </div>
                  <div style="" class="wrap-bottom">
                    <h3>
                      <div class="wrap-logo">
                        <img :src="each.logo" alt="">
                      </div>
                      <span>{{each.title}}</span>
                    </h3>
                    <p>{{each.desc}}</p>
                  </div>
                </div>
              </router-link>
              <!-- </a> -->
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <el-row :gutter="0" class="pagination">
      <el-col :span="24">
        <el-pagination :background="background" :current-page="currentPage" @current-change="currentChange" :small="small" layout="prev, pager, next" :total="total" :page-size="pageSize">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import testData from "../../testData.js";
import $ from "jquery";
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");
import { bus } from "../../util";
export default {
  data() {
    return {
      small: false,
      tabPosition: "left",
      pro: [],
      total: 50,
      pageSize: 5,
      currentPage: 1,
      background: true
    };
  },
  methods: {
    currentChange: function(currentPage) {
      this.currentPage = currentPage;
    }
  },
  mounted() {
    if (ISDEV) {
      var mock = new MockAdapter(axios);
      mock.onPost("/Home/GetProfessionFieldData").reply(200, testData.protest);
    }

    $(document).ready(() => {
      var id = this.$route.query.id;
      $(".pro div[role=tablist] > div:contains(" + id + ")")
        .eq(0)
        .click();
      windowSizeChange.bind(this)();
      $(window).resize(() => {
        windowSizeChange.bind(this)();
      });
    });
    // axios get remote data

    axios({
      method: "post",
      url: "/Home/GetProfessionFieldData",
      data: {}
    })
      .then(resp => {
        var data = resp.data;
        var map = new Map();
        for (var item of data.ProType) {
          map.set(item.Id, {
            name: item.TypeName,
            content: []
          });
        }
        for (var item of data.Profession) {
          var site = "http://cyy.zhcjjs.com";
          var id = item.TypeId;
          var mapItem = map.get(id);
          if (mapItem) {
            var ary = mapItem.content;

            var paths = item.ProductPaths;
            var pary = paths.split(";");
            var src = pary[0].replace("../..", site);
            var tobj = {};
            tobj["src"] = src;
            tobj["logo"] = item.CompanyLogo.replace("../..", site);
            tobj["title"] = item.CompanyName;
            tobj["desc"] = item.CompanyDescription;
            tobj["phone"] = item.CompanyPhone;
            tobj["address"] = item.CompanyAddress;
            tobj["link"] = "/designDetail?companyId=" + item.CompanyId;

            ary.push(tobj);
          }
        }

        var result = [];
        var all = Array.from(map.values());

        for (var value of all) {
          result.push(value);
        }
        this.pro = result;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
function windowSizeChange() {
  var width = document.documentElement.clientWidth;
  if (width > 992) {
    this.tabPosition = "left";
    this.small = false;
    this.background = true;
  } else {
    this.tabPosition = "top";
    this.small = true;
    this.background = false;
  }
}
</script>

<style scoped lang="less">
.e-body {
  // margin:20px;
  // background: red;
  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center; // background-color: red;
    .wrap-img {
      flex: 1;
    }
    .wrap-bottom {
      flex: 3;
    }
  }
}
.pro {
  & > div {
    margin-top: 20px;
  }
  background-color: white;
  font-size: 14px;
  margin: auto;
  display: inline-block; // background-color: red;
  @media (max-width: 992px) {
    width: 95%;
  }
  @media (min-width: 992px) {
    width: 1200px;
  }
  .e-col {
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
      .wrap-img {
        img {
          transform: scale(1.2);
        }
      }
      h3 {
        color: #35b5ff;
      }
    }
    .wrap-bottom {
      padding: 14px;
      text-align: left;
      h3 {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .wrap-logo {
          height: 80px;
          @media (max-width: 992px) {
            overflow: hidden;
            height: 60px;
            width: 60px;
          }
          // width: 50px;
          // border-radius: 50%;
          // display: flex;
          // overflow: hidden;
        }
        img {
          height: 100%;
          // max-width: 50px;
          // max-height: 50px;
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
        height: 35px; //hack 方法 强制 IE下面 overflow
      }
    }
    .wrap-img {
      height: 150px;
      overflow: hidden;
      width: 100%;
      img {
        width: 100%;
        transition: all 1s ease 0s;
      }
    }
  }
  .pagination {
    margin-top: 20px;
  }
}
</style>

