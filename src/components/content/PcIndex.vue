<template>
    <div class="pc">
        <!-- 专业领域和作品 -->
        <div class="site-title t-h2">
            <h2>
                设计师产业园网点分布
            </h2>
            <h2 style="margin-right:170px">专业设计领域</h2>
        </div>
        <el-row :gutter="20">
            <el-col :span="16">
                <div class="wrap-entry-img">
                    <img src="../../assets/pcindex/1.jpg" alt="" onload="autoFitWrapImg(this)">
                    <router-link tag="a" :to="{path:'/infoIntro'}">
                        <div class="white-blank">
                            <div class="text-desc">
                                <a>
                                    中航长江（武汉）设计师产业园即将开园，敬请期待
                                </a>
                            </div>
                            <div class="text-desc">
                                <a>
                                    详情请点击查看
                                </a>
                            </div>
                        </div>
                    </router-link>
                </div>
            </el-col>
            <!-- 专业领域 -->
            <el-col :span="8">
                <div class="grid-content bg-purple pro">
                    <ul class="el-card">
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '室内装修' }}">
                                <figure>
                                    <img src="../../assets/profession/InteriorDecoration.jpg">
                                    <figcaption>室内装修</figcaption>
                                </figure>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '外装设计' }}">
                                <figure>
                                    <img src="../../assets/profession/ExteriorDesign.png">
                                    <figcaption>外装设计</figcaption>
                                </figure>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '软装设计' }}">
                                <figure>
                                    <img src="../../assets/profession/SoftDecoration.png">
                                    <figcaption>软装设计</figcaption>
                                </figure>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '品牌策划' }}">
                                <figure>
                                    <img src="../../assets/profession/EffectPicture.jpg">
                                    <figcaption>品牌策划</figcaption>
                                </figure>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '效果图深化' }}">
                                <figure>
                                    <img src="../../assets/profession/EffectPictureDesign.jpg">
                                    <figcaption>效果图深化</figcaption>
                                </figure>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '艺术品定制' }}">
                                <figure>
                                    <img src="../../assets/profession/Artwork.jpg">
                                    <figcaption>艺术品定制</figcaption>
                                </figure>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '墙体彩绘' }}">
                                <figure>
                                    <img src="../../assets/profession/ColorDrawing.jpg">
                                    <figcaption>墙体彩绘</figcaption>
                                </figure>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '景观雕塑' }}">
                                <figure>
                                    <img src="../../assets/profession/Sculpture.jpg">
                                    <figcaption>景观雕塑</figcaption>
                                </figure>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '园林规划' }}">
                                <figure>
                                    <img src="../../assets/profession/Landscaping.jpg">
                                    <figcaption>园林规划</figcaption>
                                </figure>
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" :to="{ path: '/professionType', query: { id: '风水研究' }}">
                                <figure>
                                    <img src="../../assets/profession/ResearchOfFengshul.jpg">
                                    <figcaption>风水研究</figcaption>
                                </figure>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </el-col>
            <!-- 作品开始 -->
            <!-- <el-col :span="8" v-for="(item,dex) in prod.md" :key="dex" v-if="dex < 2">
                <div class="grid-content bg-purple">
                    <el-card :body-style="{ padding: '0px' }" class="e-card">
                        <div class="wrap-img">
                            <img :src="item.src" class="image" onload="fitImg(this,225,384)">
                        </div>
                        <div style="" class="wrap-bottom">
                            <h3>{{item.title}}</h3>
                            <div class="bottom clearfix">
                                <p>
                                    {{item.desc}}
                                </p>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col> -->
        </el-row>
        <!-- 渲染作品大图 -->
        <el-row :gutter="0">
            <el-col :span="24" v-for="(item,dex) in prod.bg" v-if=" dex < 1" :key="dex">
                <div class="grid-content bg-purple">
                    <el-card :body-style="{ padding: '0px' }" class="e-card">
                        <div class="wrap-img">
                            <img :src="item.src" class="image" onload="fitImg(this,225,1200)">
                        </div>
                        <div style="" class="wrap-bottom">
                            <h3>{{item.title}}</h3>
                            <div class="bottom clearfix">
                                <p>
                                    {{item.desc}}
                                </p>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8" v-for="(item,dex) in prod.md" :key="dex" v-if=" dex >= 2">
                <div class="grid-content bg-purple pro">
                    <el-card :body-style="{ padding: '0px' }" class="e-card">
                        <div class="wrap-img">
                            <img :src="item.src" class="image" onload="fitImg(this,225,384)">
                        </div>
                        <div style="" class="wrap-bottom">
                            <h3>{{item.title}}</h3>
                            <div class="bottom clearfix">
                                <p>
                                    {{item.desc}}
                                </p>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
        <!--   公司       -->
        <div class="site-title">
            <h2>入驻团队</h2>
        </div>
        <el-row :gutter="15" class="company">
            <el-col :span="4" v-for="(item,dex) in company" :key="dex" v-if=" dex < 6">
                <el-card :body-style="{ padding: '0px' }" class="e-card">
                    <router-link tag="a" :to="{ path: item.link}">
                        <div class="wrap-img">
                            <img :src="item.src" class="image" onload="fitImg(this,225,185)">
                        </div>
                        <div style="" class="wrap-bottom">
                            <h3>{{item.title}}</h3>
                        </div>
                    </router-link>
                </el-card>
            </el-col>
        </el-row>
        <!-- 设计师 -->
        <div class="site-title">
            <h2>设计师</h2>
        </div>
        <el-row :gutter="15" class="designer">
            <el-col :span="4" v-for="(item,dex) in designer" :key="dex" v-if="dex < 6">
                <el-card :body-style="{ padding: '0px' }" class="e-card">
                    <router-link tag="a" :to="{ path: item.link}">
                        <div class="wrap-img">
                            <img :src="item.src" class="image" onload="fitImg(this,225,185)">
                        </div>
                        <div style="" class="wrap-bottom">
                            <h3>{{item.title}}</h3>
                            <div class="bottom clearfix">
                                <p>
                                    {{item.desc}}
                                </p>
                            </div>
                        </div>
                    </router-link>
                </el-card>
            </el-col>
        </el-row>
        <!-- 新闻 -->
        <div class="site-title">
            <h2>媒体报道</h2>
        </div>
        <el-row :gutter="25">
            <el-col :span="6" v-for="(item,dex) in news.md" :key="dex" v-if="dex < 6">
                <el-card :body-style="{ padding: '0px' }" class="e-card">
                    <a :href="item.link" target="_blank">
                        <div class="wrap-img">
                            <img :src="item.src" class="image" onload="fitImg(this,225,279)">
                        </div>
                        <div style="" class="wrap-bottom">
                            <h3>{{item.title}}</h3>
                            <div class="bottom clearfix">
                                <p>
                                    {{item.desc}}
                                </p>
                            </div>
                        </div>
                    </a>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="0">
            <el-col :span="24" v-for="(item,dex) in news.bg" :key="dex" v-if="dex < 1">
                <el-card :body-style="{ padding: '0px' }" class="e-card">
                    <a :href="item.link" target="_blank">
                        <div class="wrap-img">
                            <img :src="item.src" class="image" onload="fitImg(this,225,1198)">
                        </div>
                        <div style="" class="wrap-bottom">
                            <h3>{{item.title}}</h3>
                            <div class="bottom clearfix">
                                <p>
                                    {{item.desc}}
                                </p>
                            </div>
                        </div>
                    </a>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  props: ["prod", "news", "designer", "company"],
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@color: #35b5ff;
.pc {
  .site-title {
    padding: 20px;
    font-size: 17px;
    h2:after {
      content: "";
      display: inline-block;
      vertical-align: middle;
      width: 25px;
      height: 25px;
      background-image: url(../../ARROW.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      margin: -3px 10px 0 5px;
    }
  }
  width: 1200px;
  text-align: left;
  margin: auto;
  @media (max-width: 992px) {
    display: none;
  }
  font-size: 14px;
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    height: 325px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .e-card {
    cursor: pointer;
    &:hover {
      .wrap-img {
        img {
          transform: scale(1.2);
        }
      }
      .wrap-bottom {
        h3 {
          color: @color;
        }
      }
    }
    .time {
      font-size: 13px;
      color: #999;
    }
    .bottom {
      margin-top: 13px;
      line-height: 18px;
      p {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
    .button {
      padding: 0;
      float: right;
    }
    .wrap-img {
      width: 100%;
      height: 225px;
      overflow: hidden;
      img {
        transition: all 1s ease 0s;
      }
    }
    .image {
      margin: auto;
    }
    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both;
    }
    .wrap-bottom {
      padding: 14px;
      height: 70px;
      overflow: hidden;
    }
  }
  .pro {
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      font-size: 14px;
      li {
        padding: 18px 17px;
        cursor: pointer;
        &:hover {
          img {
            transform: rotate(360deg);
          }
          figcaption {
            color: @color;
          }
        }
        a {
          display: inline-block;
        }
      }
      img {
        font-size: 0px;
        max-width: 0.88rem;
        transition: all 1s ease 0s;
      }
      figure {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 62px;
      }
      figcaption {
        flex-wrap: nowrap;
        font-size: 12px;
        padding-top: 8px;
      }
    }
  }
  .company,
  .designer {
    .wrap-bottom {
      height: 24px;
      line-height: 24px;
    }
  }
  h3 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .designer {
    .wrap-bottom {
      height: 70px;
    }
  }
  .wrap-entry-img {
    overflow: hidden;
    height: 325px;
    position: relative;
  }
  .t-h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .white-blank {
    position: absolute;
    width: 100%;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 15px;
    left: 0px;
    display: flex;
    flex-direction: column;
    align-items: self-start;
    justify-content: center;
    &:hover {
      cursor: pointer;
      a {
        text-decoration: underline;
      }
    }
    .text-desc {
      color: white;
      padding-left: 20px;
      font-size: 15px;
      a {
        color: white;
        //   &:hover{
        //       cursor: pointer;
        //   }
      }
    }
    .text-desc:nth-child(1) {
      margin-bottom: 5px;
    }
  }
}
</style>


