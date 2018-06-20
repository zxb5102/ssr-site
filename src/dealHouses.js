var fs = require("fs");
var houses = require("./houses.js");

var ary = [];
for(var item of houses.houses.Design){
    ary.push({
        logo:item.LogoPath.replace("../..","http://cyy.zhcjjs.com"),
        title:item.CompanyName,
        desc:item.Description,
        phone:item.Contact,
        address:item.Address,
        link:"/designDetail?companyId="+item.CompanyId
    });
}
var txt = JSON.stringify(ary);
fs.writeFile("do.txt", txt, function(){
    console.log("ok");
})