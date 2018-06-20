<template>
  <div>
    <footer>
      <ul>
        <li><a href="http://www.zhcjjs.com/" target="_blank">关于我们</a></li>
        <li><a href="http://www.zhcjjs.com/content.php?id=8" target="_blank">联系我们</a></li>
        <li><a href="http://www.zhcjjs.com/news.php" target="_blank">媒体报道</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">意见反馈</a></li>
        <li><a href="http://www.zhcjjs.com/content.php?id=27" target="_blank">高薪聘请</a></li>
        <li><a href="#">法律申明</a></li>
      </ul>
      <section>
        <div>
          <p>赣ICP备14007784号-1 © 2017 zhcjjs.com</p>
          <p>©中航长江建设工程有限公司版权所有&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信部设计开发</p>
        </div>
        <!-- <p class="company">中航长江建设工程有限公司</p> -->
      </section>
    </footer>
  </div>
</template>

<script>
  export default {
    //   name: 'Footer',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped lang="less">
  // @media (max-width:992px) {
  //   .company {
  //     display: none;
  //   }
  // }
  // @media (min-width:992px) {
  //   .company{
  //     display: block;
  //   }
  // }
    @transition:.15s ease-out;
  a {
    list-style: none;
    text-decoration: none;
    color: #a9a9a9;
    transition: @transition;
    &:hover{
      color:black;
    }
  }
  footer {
    border-top: 1px solid rgb(221, 221, 221);
    margin-top:50px;
    padding-top:10px;
    position: relative;
    font-size: 12px;
    color: #a9a9a9;
    ul {
      padding: 10px 0px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      li {
        padding: 0 5px;
      }
    }
  }
</style>

