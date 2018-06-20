<template>
    <div class="pda">
        <section class=" pro">
            <header class="label">
                <h3>专业领域</h3>
                <p>更多>></p>
            </header>
            <div id="wrapper">
                <div id="scroller">
                    <ul>
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
            </div>
        </section>
        <div class="all-park-entry">
            <header class="label">
                <h3>设计师产业园网点分布</h3>
            </header>
            <router-link tag="div" :to="{ path: '/pdaInfoIntro'}">
                <div class="hold-img">
                    <img src="../../assets/pcindex/1.jpg" alt="">
                    <div class="mask-info">
                        <div>
                            中航长江（武汉）设计师产业园即将开园，敬请期待
                        </div>
                        <div>
                            详情请点击查看
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
        <section class="product">
            <header class="label">
                <h3>设计作品</h3>
                <p>更多>></p>
            </header>
            <ul>
                <li v-for="(item , dex) in prod.md" :key="dex" v-if="dex < 4">
                    <figure>
                        <div class="wrap-img">
                            <img :src="item.src" onload="autoFitWrapImg(this)">
                        </div>
                        <figcaption>
                            <p class="wrap-text">{{item.desc}}</p>
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </section>
        <section class="company">
            <header class="label">
                <h3>入驻团队</h3>
                <p>更多>></p>
            </header>
            <ul>
                <li v-for="(item , dex) in company" :key="dex" v-if="dex < 6">
                    <router-link tag="a" :to="{ path: item.link}">
                        <figure>
                            <div class="wrap-img">
                                <img :src="item.src" onload="autoFitWrapImg(this)">
                            </div>
                            <figcaption>
                                <p class="wrap-text">{{item.title}}</p>
                            </figcaption>
                        </figure>
                    </router-link>
                </li>
            </ul>
        </section>
        <section class="news">
            <header class="label">
                <h3>媒体报道</h3>
                <p>更多>></p>
            </header>
            <ul class="news-list">
                <li v-for="(item,dex) in news.md" :key="dex" v-if="dex<2">
                    <a :href="item.link" target="_blank">
                        {{item.title}}
                    </a>
                </li>
            </ul>
            <ul>
                <li v-for="(item , dex) in news.md" :key="dex" v-if="dex >= 2 && dex < 4">
                    <a :href="item.link" target="_blank">
                        <figure>
                            <div class="wrap-img">
                                <img :src="item.src" onload="autoFitWrapImg(this)">
                            </div>
                            <figcaption>
                                <p class="wrap-text">{{item.desc}}</p>
                            </figcaption>
                        </figure>
                    </a>
                </li>
            </ul>
        </section>
        <section class="designer">
            <header class="label">
                <h3>设计师</h3>
                <p>更多>></p>
            </header>
            <div id="designerWrapper">
                <div id="designerScroller">
                    <ul>
                        <li v-for="(item , dex) in designer" :key="dex">
                            <router-link tag="a" :to="{ path: item.link}">
                                <!-- <a :href="item.link" target="_blank"> -->
                                <figure>
                                    <div class="wrap-img">
                                        <img :src="item.src" onload="autoFitWrapImg(this)">
                                    </div>
                                    <figcaption>
                                        <p class="wrap-text">{{item.title}}</p>
                                    </figcaption>
                                </figure>
                                <!-- </a> -->
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import testData from "@/testData.js";
import $ from "jquery";
import IScroll from "iscroll";
export default {
  props: ["prod", "news", "designer", "company"],
  data() {
    return {};
  },
  methods: {},
  mounted() {
    var myScroll = new IScroll("#wrapper", {
      scrollX: true,
      scrollY: false,
      click: true,
      tap: true,
      mouseWheel: true
    });
    var myScroll2 = new IScroll("#designerWrapper", {
      scrollX: true,
      scrollY: false,
      click: true,
      tap: true,
      mouseWheel: true
    });
  }
};
</script>

<style scoped lang="less">
@margin-bottom: 20px;
#scroller {
  z-index: 1;
  width: 650px;
  transform: translateZ(0);
  user-select: none;
  ul li a {
    display: inline-block;
  }
}
#wrapper {
  padding: 10px 0px;
  touch-action: none;
  position: relative;
  z-index: 1;
  top: 0px;
  bottom: 48px;
  left: 0px;
  width: 100%;
  overflow: hidden;
}
@media (min-width: 992px) {
  .pda {
    display: none;
  }
}
.pro {
  width: 100%;
  background-color: white;
  margin-bottom: @margin-bottom;
  border-bottom: 1px solid #c6c6c6;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    li {
      padding: 0 0px;
    }
    img {
      font-size: 0px;
      max-width: 0.88rem;
    }
    figure {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    figcaption {
      flex-wrap: nowrap;
      font-size: 12px;
    }
  }
}
.label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.7rem;
  padding: 7px 12px;
  h3 {
    font-size: 15px;
  }
  p {
    font-size: 12px;
    color: #999;
  }
}
.product,
.company,
.news,
.designer {
  background-color: white;
  border-bottom: 1px solid #c6c6c6;
  margin-bottom: @margin-bottom;
  ul {
    width: 100%;
    font-size: 0px;
    align-content: center;
    justify-content: center;
    li {
      width: 49%;
      display: inline-block;
      padding: 0 1px;
      color: #999;
      font-size: 12px;
      img {
        display: inline-block;
      }
      .wrap-img {
        background-color: #d3dce6;
        height: 2.08rem;
        overflow: hidden;
        position: relative;
      }
      figcaption {
        padding: 8px 2px 8px 12px;
        height: 0.84rem;
        overflow: hidden;
      }
      .wrap-text {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-align: left;
      }
    }
  }
}
.company,
.designer {
  ul {
    li {
      width: 122px;
      .wrap-img {
        height: 3.28rem;
        background-color: gray;
        position: relative;
      }
      figcaption {
        height: 22px;
      }
    }
  }
}
.company {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    li {
      width: 2.45rem;
      padding: 0px;
      .wrap-img {
        height: 2.45rem;
        border: 1px solid #c5c0c0;
      }
    }
  }
}
.designer {
  ul {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
    li {
      .wrap-img {
        height: 164px;
      }
    }
  }
}
.news {
  overflow: hidden;
  .news-list {
    padding-left: 10px;
    overflow: hidden;
    li {
      width: 100%;
      display: block;
      text-align: left;
      font-size: 14px;
      margin-bottom: 15px;
      padding-left: 31px;
      background-image: url(../../assets/arrowR.png);
      background-position: left;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
}
#designerScroller {
  z-index: 1;
  width: 1610px;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
#designerWrapper {
  padding: 10px 0px;
  -ms-touch-action: none;
  touch-action: none;
  position: relative;
  z-index: 1;
  top: 0px;
  bottom: 48px;
  left: 0px;
  width: 100%;
  overflow: hidden;
}
.all-park-entry {
  background-color: white;
  margin-bottom: 20px;
  overflow: hidden;
  .hold-img {
    position: relative;
    img {
      width: 100%;
      height: auto;
    }
    .mask-info {
      font-size: 14px;
      padding-left: 10px;
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0.5rem;
      width: 100%;
      height: 1rem;
      background-color: rgba(0, 0, 0, 0.4);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      div {
        line-height: 24px;
      }
    }
  }
}
</style>

