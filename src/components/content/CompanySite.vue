<template>
  <div class="company-site">
    <div class="hidden-md-and-down">
      <iframe src="http://www.zhcjjs.com/" frameborder="0" height="1187px" width="100%"></iframe>
    </div>
    <div :class="[show ? '' : 'hidden','entry']">
      <a href="http://www.zhcjjs.com/" target="_blank">点击进入</a>
    </div>
  </div>
</template>

<script>
  import $ from "jquery";
  export default {
    data() {
      return {
        show: false
      };
    },
    mounted() {
      // window.open("http://www.zhcjjs.com/");
      var self = this;
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
      this.show = false;
    } else {
      this.show = true;
    }
  }
</script>

<style scoped lang="less">
  .company-site {
    background-color: white;
    font-size: 14px; 
    margin-top: 0px;
    .show {
      display: block;
    }
    .hidden {
      display: none;
    }
    .entry{
      padding: 10px 0px;
      a{
        font-size: 15px;
        color: #14191e;
      }
    }
    @media (min-width: 992px) {
      margin-top: -90px;
    }
  }
</style>

