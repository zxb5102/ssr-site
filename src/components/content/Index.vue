<template>
    <div>
        <div class="top">
            <el-carousel indicator-position="outside" :height="carouselHeight" :autoplay="autoplay" trigger="click" :type="type" :options="{preventDefault: false}">
                <el-carousel-item v-for="item in indexTopImgs" :key="item.img">
                    <a :href="item.link" class="top-a-img">
                        <img onload="autoFit(this)" :src="item.img" alt="" />
                        <!-- <img onload="alert()" :src="item.img" alt="" /> -->
                        <!-- <img :src="item.img" alt="" /> -->
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div>
        <main>
            <pda-index :company="company" :news="news" :prod="prod" :designer="designer" />
            <pc-index :company="company" :news="news" :prod="prod" :designer="designer" />
        </main>
    </div>
</template>

<script>
import testData from "@/testData.js";
// import IScroll from 'iscroll';
import PdaIndex from "./PdaIndex";
import PcIndex from "./PcIndex";
import $ from "jquery";
import { autoFit } from "../../util";
export default {
  data() {
    return {
      carouselHeight: "450px",
      indexTopImgs: testData.indexTopImgs,
      prod: testData.prod,
      company: testData.company,
      news: testData.news,
      designer: testData.designer,
      autoplay: true,
      type: "",
      scale: 1040 / 248
    };
  },
  methods: {},
  components: {
    PdaIndex,
    PcIndex
  },
  mounted() {
    // var height = document.documentElement.clientWidth / this.scale;
    // if (height < 150) {
    //     // this.type = "card";
    //     height = 150;
    // }
    if (document.documentElement.clientWidth < 992) {
      this.carouselHeight = "150px";
    }
    // $(window).resize(() => {
    //     var height = document.documentElement.clientWidth / this.scale;
    //     this.carouselHeight = height + "px";
    //     if (height < 115) {
    //         this.carouselHeight = "150px"
    //         // this.type = "card";
    //     } else {
    //         this.carouselHeight = height + "px";
    //         // this.type = "";
    //     }
    //     //重新设置 图片的位置
    //     var list = document.querySelectorAll(".top .el-carousel__container img");
    //     for (let item of list) {
    //         autoFit(item);
    //     }
    // });
  }
};
</script>

<style scoped lang="less">
@margin-bottom: 20px;
.top {
  background: white;
  border-bottom: 1px solid #c6c6c6;
  margin-bottom: 20px;
  font-size: 14px;
  .top-a-img {
    // width: 100%;
    img {
      // width: 100%;
      // height: auto;
    }
  }
}
#scroller {
  z-index: 1;
  width: 650px;
  height: 100%;
  transform: translateZ(0);
  user-select: none;
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
@media (max-width: 992px) {
  .carousel {
    height: 200px;
  }
  .el-carousel__item {
    // display: flex;
    // align-items: center;
  }
}
@media (min-width: 992px) {
  .carousel {
    height: 450px;
  }
}
.el-carousel__item {
  a {
    display: inline-block; // width: 100%;
    font-size: 0px;
  }
  img {
    // width: 100%;
    display: inline-block;
  }
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

