<template>
    <div class="entry">
        <el-row :gutter="gutter">
            <el-col :span="leftCol" class="hidden-md-and-down">
                <div class="wrap-img">
                    <img src="../../assets/login/showWorks1.jpg" alt="">
                </div>
            </el-col>
            <el-col :span="rightCol" :offset="offset">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import $ from "jquery";
    export default {
        data() {
            return {
                leftCol: 14,
                rightCol: 8,
                offset: 2,
                gutter: 30,
            }
        },
        mounted() {
            var self = this;
            $(document).ready(function() {
                windowSizeChange.bind(self)();
                $(window).resize(() => {
                    windowSizeChange.bind(self)();
                });
            })
        },
        methods: {}
    }
    function windowSizeChange() {
        var width = document.documentElement.clientWidth;
        if (width > 992) {
            this.rightCol = 8;
            this.offset = 2;
            this.gutter = 30;
        } else {
            this.rightCol = 24;
            this.offset = 0;
            this.gutter = 0;
        }
    }
</script>

<style scoped lang="less">
    .entry {
        min-height: 400px;
        font-size: 14px;
        margin: auto;
        margin-top: 50px;
        background-color: white;
        .wrap-img {
            img {
                width: 100%;
            }
        }
        width: 1200px;
        @media (max-width: 992px) {
            width: 95%;
            margin: auto;
            margin-top: 40px;
            margin-bottom: 40px;
            min-height: 0px;
        }
    }
</style>

