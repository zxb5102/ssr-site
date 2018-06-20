var certs = [
  {
    id: "1",
    img: "http://192.168.44.204:59088/Photos/Company/DesignHouse1/Cert/IMG_6625.jpg",
    name: "年度金磊石材设计之星"
  },
  {
    id: "2",
    img: "http://192.168.44.204:59088/Photos/Company/DesignHouse1/Cert/IMG_6625.jpg",
    name: "年度金磊石材设计之星"
  },
  {
    id: "3",
    img: "http://192.168.44.204:59088/Photos/Company/DesignHouse1/Cert/IMG_6625.jpg",
    name: "年度金磊石材设计之星"
  },
  {
    id: "4",
    img: "http://192.168.44.204:59088/Photos/Company/DesignHouse1/Cert/IMG_6625.jpg",
    name: "年度金磊石材设计之星"
  },
];
var honors = [
  {
    id: "1",
    value: "李明杰荣获2007江西省“东方花城杯”室内设计大赛优秀奖1"
  },
  {
    id: "2",
    value: "李明杰荣获2007江西省“东方花城杯”室内设计大赛优秀奖2"
  },
  {
    id: "3",
    value: "李明杰荣获2007江西省“东方花城杯”室内设计大赛优秀奖3"
  },
  {
    id: "4",
    value: "李明杰荣获2007江西省“东方花城杯”室内设计大赛优秀奖4"
  }
];
var userInfo = {
    "code": 0,
    "msg": "",
    "data": {
        "user": {
            "name": "周贵",
            "state": -1,
            "institutionId": 1,
            "institution": "合橙设计所",
            "institutionType": 2,
            "park": "南昌",
            "account": "zhougui",
            "mail": "68498695@qq.com"
        },
        "menus": [
            {
                "type": 0,
                "name": "首页",
                "url": "/Home/Index",
                "subMenus": null
            },
            {
                "type": 0,
                "name": "专业领域",
                "url": "/Home/ShowProfessionType",
                "subMenus": null
            },
            {
                "type": 0,
                "name": "设计所",
                "url": "/Home/ShowDesignHouse",
                "subMenus": null
            },
            {
                "type": 0,
                "name": "活动沙龙",
                "url": "/Home/ShowActivitiesSalon?parameter=2&parameter=3",
                "subMenus": null
            },
            {
                "type": 0,
                "name": "公司新闻",
                "url": "/Home/ShowNewInZHCJ?parameter=1",
                "subMenus": null
            },
            {
                "type": 0,
                "name": "公司官网",
                "url": "http://www.zhcjjs.com/",
                "subMenus": null
            },
            {
                "type": 0,
                "name": "园区服务",
                "url": null,
                "subMenus": [
                    {
                        "type": 0,
                        "name": "合同审批",
                        "url": "/Contract/Index",
                        "subMenus": null
                    }
                ]
            }
        ]
    }
};
  var prodMsg = [
    {
        id: "1",
        name: '测试作品名称1',
        originName: '测试作品名称1',
        desc: "作品的描述",
        originDesc: "作品的描述",
        edit: false,
        img:"http://cyy.zhcjjs.com/Photos/Company/Designer/Designer61.jpg",
        originImg:"http://cyy.zhcjjs.com/Photos/Company/Designer/Designer61.jpg",

    },
    {
        id: "2",
        name: '测测试作品名称2试作品名称2',
        originName: '测试作品名称2',
        desc: "作品的描述",
        originDesc: "作品的描述",
        edit: false,
        img:"http://cyy.zhcjjs.com/Photos/Company/Designer/Designer61.jpg",
        originImg:"http://cyy.zhcjjs.com/Photos/Company/Designer/Designer61.jpg",
    },
]  
var subImg = [
    {
        id: "1",
        name: "测试图片1",
        src: "http://cyy.zhcjjs.com/Photos/Company/Designer/DesignerWang.jpg"
    },
    {
        id: "2",
        name: "测试图片2",
        src: "http://cyy.zhcjjs.com/Photos/ZHCJNews/StudentSubsidies/IMG_5245.jpg"
    },
    {
        id: "3",
        name: "测试图片1",
        src: "http://cyy.zhcjjs.com/static/news/New.jpg"
    },
    {
        id: "4",
        name: "测试图片1",
        src: "http://cyy.zhcjjs.com/static/news/New.jpg"
    },
    {
        id: "5",
        name: "测试图片1",
        src: "http://cyy.zhcjjs.com/Photos/Company/Designer/DesignerWang.jpg"
    },
]
var designerList = [
    {
        id: "1",
        name: "周贵1",
        originName: "周贵1",
        img: "http://cyy.zhcjjs.com/Photos/Company/DesignHouse1/Designer/designer1.jpg",
        edit:false
    },
    {
        edit:false,
        id: "2",
        name: "周贵",
        originName: "周贵",
        img: "http://cyy.zhcjjs.com/Photos/Company/DesignHouse1/Designer/designer1.jpg"
    },
    {
        edit:false,
        id: "3",
        name: "周贵3",
        originName: "周贵3",
        img: "http://cyy.zhcjjs.com/Photos/Company/DesignHouse1/Designer/designer1.jpg"
    },
    {
        id: "4",
        name: "周贵",
        originName: "周贵",
        img: "http://cyy.zhcjjs.com/Photos/Company/DesignHouse1/Designer/designer1.jpg",
        edit:false

    },
]
var baseInfo =
    [
        {
            id: "1",
            logo: "http://cyy.zhcjjs.com/Photos/Company/Logo/%E8%AE%BE%E8%AE%A1%E5%8D%81%E4%B8%80%E6%89%80.jpg",
            name:"合橙设计",
            desc: "合橙是一家专注于品牌形象设计的专业研究机构。多年来，一直致力于打造集战略高度、设计深度、执行速度三度一体的设计模式。合橙擅长以精准的策略切中本质，以创意的设计提升附加值；专注于品牌塑造，为企业提供品牌策划、终端SI系统设计、平面视觉设计等服务；塑造品牌的过程就是在塑造品牌气质的过程。严谨的逻辑为骨架、支撑起品牌呈现的核心是体验、而最终呈现的结果则由用户感知；在此过程中、空间、平面、音乐、味道、交互、产品、服务等所有能刺激到受众知觉的元素均在可利用的元素之中；设计则是如何针对体验目标合理选择这些元素、并打散重组这些信息塑造品牌气质的过程、这就是现代品牌设计的逻辑",
            originDesc:"合橙是一家专注于品牌形象设计的专业研究机构。多年来，一直致力于打造集战略高度、设计深度、执行速度三度一体的设计模式。合橙擅长以精准的策略切中本质，以创意的设计提升附加值；专注于品牌塑造，为企业提供品牌策划、终端SI系统设计、平面视觉设计等服务；塑造品牌的过程就是在塑造品牌气质的过程。严谨的逻辑为骨架、支撑起品牌呈现的核心是体验、而最终呈现的结果则由用户感知；在此过程中、空间、平面、音乐、味道、交互、产品、服务等所有能刺激到受众知觉的元素均在可利用的元素之中；设计则是如何针对体验目标合理选择这些元素、并打散重组这些信息塑造品牌气质的过程、这就是现代品牌设计的逻辑",
            phone: "136808080",
            originPhone:"136808080",
            address: "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园",
            originAddress: "江西省南昌市青云谱区洪都南大道311号，中航长江设计师产业园"
        }
    ];
export {
  honors,
  certs,
  userInfo,
  prodMsg,
  subImg,
  designerList,
  baseInfo
};     
export default{
  honors,
  certs,
  userInfo,
  prodMsg,
  subImg,
  designerList,
  baseInfo
};     