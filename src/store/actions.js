// Action  文档地址 https://vuex.vuejs.org/zh/guide/actions.html
var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");
import testData from "../testData.js";
export default {
  SET_INFO: ({ commit }, payload) => {
    commit("SET_INFO", payload);
  },
  GET_DATA: ({ commit }) => {
    commit("GET_DATA");
  },
  GET_PROFESSION_FIELD_DATA: ({ commit }) => {
    // if (true) {
      var mock = new MockAdapter(axios);
      mock.onPost("/Home/GetProfessionFieldData").reply(200, testData.protest);
    // }
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

        // console.log('result');
        commit("SET_PROFESSION_FIELD_DATA", result);
        // this.pro = ;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
