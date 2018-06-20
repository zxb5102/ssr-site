<template>
  <div>
    <pda-design-detail v-if="isPda" :msg="msg"></pda-design-detail>
    <pc-design-detail v-else :msg="msg" :isReady="isReady"></pc-design-detail>
  </div>
</template>
<script>
import PcDesignDetail from "./PcDesignDetail";
import PdaDesignDetail from "./PdaDesignDetail";
import testData from "../../testData";
import testData2 from "../../testData";//官网的测试数据这里 需要 请求 设计所的数据
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");
export default {
  data() {
    return {
      companyId: 1,
      isPda: false,
      msg: {},
      isReady: false
    };
  },
  mounted() {
    var clientWidth = document.documentElement.clientWidth;
    if (clientWidth < 992) {
      this.isPda = true;
    } else {
      this.isPda = false;
    }

    this.companyId = this.$route.query.companyId;
    // var mock = new MockAdapter(axios);
    // mock.onPost("/Home/GetDesignPro").reply(200, testData.designDetail);

    axios({
      method: "post",
      url: "/Home/GetDesignPro",
      data: {
        parameter: this.companyId
      }
    })
      .then(resp => {
        this.msg = dealData(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  components: {
    PcDesignDetail,
    PdaDesignDetail
  }
};
function dealData(remoteData) {
  var msg = {
    desc: remoteData.Introduce,
    logo: remoteData.LogoPath.replace("../..", "http://cyy.zhcjjs.com"),
    bgImg: remoteData.BackgroundPath.replace("../..", "http://cyy.zhcjjs.com"),
    address: remoteData.Address,
    phone: remoteData.Phone,
    designers: [
      // {
      //   id: "",
      //   name: "",
      //   img: ""
      // }
    ],
    certs: [
      // {
      //   img: "",
      //   name: "",
      //   id: ""
      // }
    ],
    honors: [
      // {
      //   id: "",
      //   name: ""
      // }
    ],
    competitionProd: [
      // {
      //   id: "",
      //   name: "",
      //   img: ""
      // }
    ],
    enjoyProd: [
      // {
      //   id: "",
      //   name: "",
      //   img: ""
      // }
    ]
  };
  for (var item of remoteData.Designer) {
    msg.designers.push({
      id: item.Id,
      name: item.DesigerName,
      img: item.Photo.replace("../..", "http://cyy.zhcjjs.com"),
      position: item.Position
    });
  }
  for (var item of remoteData.DesignerCert) {
    msg.certs.push({
      id: item.Id,
      name: item.Name,
      img: item.PhotoPath.replace("../..", "http://cyy.zhcjjs.com")
    });
  }
  for (var item of remoteData.DesignerHonor) {
    msg.honors.push({
      id: item.Id,
      name: item.HonorName
    });
  }
  for (var item of remoteData.CompetitiveProduct) {
    msg.competitionProd.push({
      id: item.id,
      name: item.ProductName,
      img: item.ProductPhoto.replace("../..", "http://cyy.zhcjjs.com")
    });
  }
  for (var item of remoteData.DesignerProducts) {
    msg.enjoyProd.push({
      id: item.id,
      name: item.ProductName,
      img: item.ProductPath.replace("../..", "http://cyy.zhcjjs.com")
    });
  }
  return msg;
}
</script>
<style>

</style>


