<template>
    <div class="pdaDesignDetail">
        <el-tabs v-model="currentTab" tab-position="top">
            <el-tab-pane label="简介" name="intro">
                <div class="intro">
                    <div class="top-img">
                        <img :src="msg.bgImg" alt="" onload="autoFitWrapImg(this)">
                    </div>
                    <div class="wrap-base-msg">
                        <div class="wrap-logo">
                            <img :src="msg.logo" alt="">
                        </div>
                        <div class="wrap-desc">
                            <span>{{msg.desc}}</span>
                        </div>
                    </div>
                    <div class="wrap-a-p">
                        <div class="address">
                            <span class="wrap-icon">
                                    <img src="../../assets/designDetail/location.png" alt="">
                                </span>
                            <span class="text">{{msg.address}}</span>
                        </div>
                    </div>
                    <div class="wrap-a-p">
                        <div class="phone">
                            <span class="wrap-icon">
                                    <img src="../../assets/designDetail/phone.png" alt="">
                                </span>
                            <span class="text">{{msg.phone}}</span>
                        </div>
                    </div>
                    <h3>
                        荣誉
                    </h3>
                    <ul class="honor-list">
                        <li v-for="(item,dex) in msg.honors" :key="dex">
                            <span>{{item.name}}</span>
                        </li>
                    </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane label="设计师" name="designers">
                <ul class="designers">
                    <li v-for="(item,dex) in msg.designers" :key="dex">
                        <div class="wrap-designer-img">
                            <img :src="item.img" alt="" onload="autoFitWrapImg(this)">
                        </div>
                        <div class="designer-desc">
                            {{item.position}}:{{item.name}}
                        </div>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="证书" name="certificate">
                <ul class="certificate">
                    <li v-for="(item,dex) in msg.certs" :key="dex">
                        <div class="each">
                            <div class="wrap-designer-img">
                                <img :src="item.img" alt="" onload="autoFitWrapImg(this)">
                            </div>
                            <div class="designer-desc">
                                {{item.name}}
                            </div>
                        </div>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="作品" name="production" class="production">
                <div class="production-main">
                    <h3>精品工程</h3>
                    <ul class="enjoy-prod">
                        <li v-for="(item,dex) in msg.competitionProd" :key="dex">
                            <div class="each">
                                <div class="wrap-designer-img">
                                    <img :src="item.img" alt="" onload="autoFitWrapImg(this)">
                                </div>
                                <div class="designer-desc">
                                    {{item.name}}
                                </div>
                            </div>
                        </li>
                    </ul>
                    <h3>作品赏析</h3>
                    <ul class="competitive-prod">
                        <li v-for="(item,dex) in msg.enjoyProd" :key="dex" v-if="dex <=6">
                            <div class="each">
                                <div class="wrap-designer-img">
                                    <img :src="item.img" alt="" onload="autoFitWrapImg(this)">
                                </div>
                                <div class="designer-desc">
                                    {{item.name}}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import Viewer from "viewerjs";
    export default {
        props: ["msg"],
        data() {
            return {
                currentTab: "intro"
            };
        },
        watch: {
            msg: function() {
                setTimeout(() => {
                    new Viewer(document.querySelector(".certificate"));
                    new Viewer(document.querySelector(".competitive-prod"));
                    new Viewer(document.querySelector(".enjoy-prod"));
                }, 1000);
            }
        },
        mounted() {}
    };
</script>
<style>
    @import "viewerjs/dist/viewer.min.css";
</style>

<style scoped lang="less">
    @descFontSize: 12px;
    @descPaddingLeft: 10px;
    @certWidth: 350px*0.3;
    @certHeight: 205px*0.3;
    .pdaDesignDetail {
        padding-top: 20px;
        font-size: 14px;
        text-align: left;
        background-color: white;
        .intro {
            padding-bottom: 50px;
            h3 {
                margin-top: 30px;
                font-weight: 300; // padding-left:30px;
                text-align: center; // margin-left: 30px;
                background-color: #f1f1f1;
            }
            .top-img {
                width: 100%;
                height: 120px;
                position: relative;
                overflow: hidden;
            }
            .wrap-base-msg {
                min-height: 80px;
                background-color: white;
                position: relative;
                .wrap-logo {
                    position: absolute;
                    height: 80px;
                    width: 80px;
                    left: 20px;
                    top: -40px;
                    overflow: hidden;
                    background-color: white;
                    border-radius: 50%;
                    display: flex;
                    border: 1px solid #c5c5c5;
                    img {
                        margin: auto;
                        max-width: 100%;
                        max-height: 100%;
                    }
                }
                .wrap-desc {
                    font-size: @descFontSize;
                    text-align: left;
                    text-indent: @descFontSize * 2;
                    line-height: 18px;
                    letter-spacing: 1px;
                    padding: 50px @descPaddingLeft 0px @descPaddingLeft; // padding-top: 50px;
                }
            }
            .wrap-a-p {
                margin-top: 20px;
                display: flex;
                padding-left: @descPaddingLeft;
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
                .address {
                    .text {
                        max-width: 80%;
                    }
                }
            }
        }
    }
    .designers {
        // display: flex;
        // flex-wrap: wrap;
        // justify-content: space-around;
        // li{
        //     padding: 5px;
        // }
        li:nth-child(1) {
            margin-top: 20px;
        }
        li {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            margin-left: 20px;
            margin-right: 20px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            .designer-desc {
                margin-top: 10px;
                margin-left: 20px;
            }
        }
        .wrap-designer-img {
            width: 253px * 0.3;
            height: 323px * 0.3;
            background: gray;
            position: relative;
            overflow: hidden;
            img {
                // width: 100%;
                // height: 100%;
            }
        }
    }
    .certificate {
        padding-top: 20px;
        text-align: center;
        .designer-desc {
            display: inline-block;
        }
        li {
            // display: ;
            // flex-direction: column;
            // align-items: center;
            // justify-content: center;
            width: 50%;
            display: inline-block;
            overflow: hidden;
            margin-bottom: 20px;
            .each {
                display: flex;
                flex-direction: column;
                align-items: center;
                .designer-desc {
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    width: 100%;
                    margin-top: 10px;
                }
            }
        }
        .wrap-designer-img {
            width: @certWidth;
            height: @certHeight;
            background: gray;
            overflow: hidden;
            display: flex;
            img {
                max-width: 100%;
                max-width: 100%;
                margin: auto;
            }
        }
    }
    .production {
        .production-main {
            padding-top: 10px;
            .enjoy-prod {
                .certificate;
            }
            .competitive-prod {
                .certificate;
                text-align: left;
                li{
                    text-align: center;
                }
            }
            h3 {
                font-weight: 300; // padding-left:30px;
                text-align: center; // margin-left: 30px;
                background-color: #f1f1f1;
            }
        }
    }
    .honor-list {
        padding-top: 30px;
        padding-left: 10px;
        width: 95%;
        li {
            background-image: url(../../assets/disc.png);
            background-position-y: center;
            background-position-x: 0px;
            background-repeat: no-repeat;
            background-size: 15px;
            padding-left: 25px;
            list-style-type: disc;
            margin-bottom: 5px; // white-space: nowrap;
            // text-overflow: ellipsis;
            // overflow: hidden;
        }
    }
</style>
<style>
    .pdaDesignDetail div[class*="el-tabs__header"] {
        /* width: 95%; */
        max-width: 280px;
        margin: auto;
    }
</style>

