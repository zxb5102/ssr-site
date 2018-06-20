<template>
  <div class="info-intro">
    <div class="top-hold">
      <div class="map-hold">
        <div class="nanc location">
          <div class="info-dialog">
            中航长江设计师创意产业园是国内首个将互联网思维+传统工程行业进行产业升级的专业型众创空间，由中航长江建设工程有限公司（以下简称“中航长江”）于2015年11月在江西省南昌市创办，2016年8月23日，李克强总理参观了园区并肯定了产业园的创新模式。 目前，在江西南昌已建成的设计师产业园总投资1.2亿元，一期投资5200万元已建成，南昌设计师产业园一期是对原乔家珊食品厂的废旧厂房进行升级改造，总面积10000余平方米，容纳钢结构设计、室内设计、园林设计、幕墙设计、软装设计、规划设计、机电设计、漆画制作、墙体彩绘、雕塑设计等37个设计中心及辅助团队，含建筑与设计研究中心、培训教育中心、建筑材料展示中心、融资中心及相关辅助配套设施。年产值10亿，上缴税收4000余万元，并且，已经为200余名设计师、200余名大学生、400余名工程管理人员以及10000余名农民工提供就业和创业机会。园区已列入2017年度国家备案众创空间名单，被评为江西省众创空间、江西省现代服务业集聚区、江西省首批大众创业万众创新示范基地。
          </div>
          <img src="../../assets/pcindex/indicator.png" alt="">
          <span class="company-name">南昌产业园</span>
        </div>
        <div class="wuh location">
          <img src="../../assets/pcindex/indicator.png" alt="">
          <span class="company-name">武汉产业园</span>
          <div class="info-dialog">
            中航长江拟在武汉市江岸区黄埔科技园中的黄埔创立方，投资建设35000平方米的设计师产业园，黄埔创立方是江岸区政府、科技局重点扶持产业升级示范区，规划总建筑面积约7万方，以科技金融、互联网+、文化创意、智能制造、信息技术等现代服务业为产业导向，与中航长江打造的设计师产业园理念相契合。 中航长江设计师产业园是以打造中国设计全球中心为理念，引进工业设计、建筑设计和建筑装饰设计等三大领域的优秀设计师资源，配套项目/造价咨询、监理、金融投资、劳务、效果图制作、施工图细化等公司，并在园区内建设新型建筑材料研发中心、智能家居研发中心、建筑VR视觉研发中心、建筑材料电子商务中心和创业孵化中心，通过与当地相关专业高等院校建立校企合作，为园区的设计师、科研中心与创业者提供后备人才、高科技研发支持及创业孵化服务，打造以工业制造和建筑工程等设计为核心，打通工业和建筑行业整体产业链为纽带的超大型行业众创服务平台，预计投资1.25亿元。
          </div>
        </div>
        <div class="map-desc">
          根据全国网点分布图显示，中航长江建设工程有限公司（以下简称“中航长江”）旗下共有29家分公司。2015年，中航长江建立全国首个设计师产业园——中航长江设计师产业园。如图所示，产业园的复制推广工作正如火如荼展开，第一个对外复制推广的中航长江（武汉）设计师产业园也即将开园。而这只是开始，在未来，设计师产业园将向全国各地发展，打造“长江设计”品牌影响力，让“长江设计”走向世界！
          <router-link tag="span" :to="{path:'/entryForm'}">
            <span class="apply-entry">申请入驻&nbsp;>></span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import Popper from "popper.js";
export default {
  mounted() {
    // var dialog = document.querySelector(".info-dialog");
    // var reference = document.querySelector(".nanc img");
    // var popper = document.querySelector(".nanc .info-dialog");
    // var anotherPopper = new Popper(reference, popper, {
    //     placement:"top"
    // });
    // reference = document.querySelector(".wuh img");
    // popper = document.querySelector(".wuh .info-dialog");
    // new Popper(reference, popper, {
    //     placement:"top"
    // });
  }
};
</script>
<style lang="less" scoped>
@keyframes bounce-down {
  25% {
    transform: translateY(-10px);
  }

  50%,
  100% {
    transform: translateY(0);
  }

  75% {
    transform: translateY(10px);
  }
}

@keyframes bounce-up {
  25% {
    transform: translateY(7px);
  }

  50%,
  100% {
    transform: translateY(0);
  }

  75% {
    transform: translateY(7px);
  }
}
@keyframes icon-bounce {
  0% {
    // transform: rotate(0deg);
  }
  50% {
    // transform: rotate(0deg);
  }
  60% {
    transform: translate(0, 0px);
  }
  70% {
    transform: translate(0, -6px);
  }

  //   80% {
  //     transform: translate(0, 0px);
  //   }

  90% {
    transform: translate(0, 3px);
  }
  100% {
    transform: translate(0, 0px);
  }
}
.info-intro {
  position: relative;
  font-size: 14px;
  .top-hold {
    background-image: url(../../assets/pcindex/3.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    .map-hold {
      height: 800px;
      width: 1000px;
      margin: auto;
      background-image: url(../../assets/pcindex/map5.png);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      position: relative;
      // cursor: pointer;
      .location {
        font-size: 0px;
        width: 30px;
        display: inline-block;
        position: absolute;
        cursor: pointer;
        .company-name {
          font-size: 14px;
          white-space: nowrap;
          bottom: -20px;
          left: 50%;
          transform: translate(-50%, 0);
          position: absolute;
          color: #1339ce;
          font-size: 10px;
        }
        .info-dialog {
          min-height: 200px;
          padding: 15px;
          width: 500px;
          text-align: left;
          position: absolute;
          z-index: 10;
          //   background-color: rgba(255, 255, 255, 0.96);
          //   color: black;
          background-color: rgba(0, 0, 0, 0.56); //   top: 200px;
          color: white;
          font-size: 14px;
          line-height: 24px;
          letter-spacing: 1px;
          border-radius: 20px;
          text-indent: 24px;
          display: none;
        }
        img:nth-child(2) {
          margin: auto;
          width: 30px;
          //   transition: all 0.5s ease 0s;
          //   animation: icon-bounce 2s 0.5s infinite ease;
          animation: bounce-up 2s linear infinite;
        }
        img:nth-child(1) {
          margin: auto;
          width: 30px;
          transition: all 0.5s ease 0s;
          animation: bounce-up 2s linear infinite;
          //   animation: icon-bounce 2s 0s infinite ease;
          //   animation:icon-bounce 1s 0.5s infinite ;
        }
        &:hover {
          img {
            animation: none;
            transition: all 0.5s ease 0s;
            transform: scale(1.5);
          }
          .info-dialog {
            display: block;
          }
        }
      }
      .nanc {
        right: 231px;
        bottom: 234px;
        .info-dialog {
          top: -350px;
          left: -328px;
        }
      }
      .wuh {
        right: 278px;
        bottom: 267px;
        .info-dialog {
          top: -340px;
          left: -294px;
        }
      }
    }
  }
  .map-desc {
    width: 1000px;
    padding: 10px;
    border-radius: 20px;
    text-align: left;
    text-indent: 24px;
    margin: auto;
    width: 350px;
    position: absolute;
    color: white;
    // top: 200px;
    bottom: 110px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    line-height: 24px;
    letter-spacing: 1px;
    // display: none;
    .apply-entry {
      font-size: 24px;
      color: yellow;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>

