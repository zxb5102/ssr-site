var fs = require("fs");
var pro = require("./pro.js");
var txt = JSON.stringify(pro.msg);
var map = new Map();

for( var item of pro.msg.ProType){
    map.set(item.Id,{
        name:item.TypeName,
        content:[]
    });
}
for(var item of pro.msg.Profession){
    var site = "http://cyy.zhcjjs.com";
    var id = item.TypeId;
    // var flag = 0;
    // if( id== 12){
    //     // if( flag >= 1){
    //     //     continue;
    //     // }
    //     // flag ++;
    //     id = 2;
    // }else if(id== 13){
    //     id=3;
    // }else if(id == 6){
    //     id = 7;
    // }else if(id == 15){
    //     id  = 5;
    // }
    var mapItem = map.get(id);
    if(mapItem){
    var ary = mapItem.content;

    var paths = item.ProductPaths;
    var pary = paths.split(";");
    var src = pary[0].replace("../..",site);
    var tobj = {};
    tobj["src"] = src;
    tobj["logo"] = item.CompanyLogo.replace("../..",site);
    tobj["title"] = item.CompanyName;
    tobj["desc"] = item.CompanyDescription;
    tobj["phone"] = item.CompanyPhone;
    tobj["address"] = item.CompanyAddress;
    tobj["link"] = "http://cyy.zhcjjs.com/Home/DesignerPage?parameter=" + item.CompanyId;

    ary.push(tobj);
    }
}

var result = [];
var all = Array.from(map.values());

for( var value of all){
    result.push(value);
}
var text = JSON.stringify(result);
fs.writeFile("do.txt", text, function(){
    console.log("ok");
})