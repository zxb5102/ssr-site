'use strict'

// const path = require('path')
// const fs = require('fs')
// const demoPath = path.resolve(__dirname, '../src/demo_list.json')

// const argv = require('yargs').argv
// argv.simulate = argv.simulate || false


function getElement(flag) {
    var reqs = [];
    if (flag == "index") {
        reqs = ['button', 'form-item', 'form', 'input', 'switch', 'cascader', 'tab-pane',
            'card', 'carousel', 'carousel-item', 'row', 'col', 'tabs',
            'pagination','radio'];
    } else {
        reqs = ['input', 'button', 'collapse', 'collapse-item', 'table', 'table-column', 'dialog'];
    }
    var result = "";
    var reg = /-[a-z]/
    for (var item of reqs) {
        var itemOrigin = item;

        if (reg.test(item)) {
            var match = reg.exec(item)[0];
            var res = match.replace('-').toUpperCase();
            item = item.replace(reg, res);
        }
        if (item == 'switch') {
            item = 'eswitch';
        }
        // if (item == 'form-item') {
        //     item = 'formItem';
        // }else if(item == 'table-column'){
        //     item = 'tableColumn'
        // }
        result += "import 'element-ui/lib/theme-chalk/" + itemOrigin + ".css'/n/r;import " + item + " from 'element-ui/lib/" + itemOrigin + "';Vue.component(" + item + ".name," + item + ");";
    }
    console.log(result);
    return result;
}

module.exports = {
    //   options: {
    //     vuxDev: !argv.simulate, // true
    //     vuxSetBabel: argv.simulate, // false
    //     vuxWriteFile: false,
    //     env: 'dev'
    //   },
    plugins: [
        // 'vux-ui', 'inline-manifest',
        // {
        //   name: 'duplicate-style'
        // },
        // {
        //   name: 'progress-bar',
        //   envs: ['development']
        // },
        {
            name: 'js-parser',
            test: /main\.js/,
            fn: function (source) {
                // var replaceStr = process.env.NODE_ENV === 'production'
                //     ? "" 
                //     : "import './mock/mock'"
                // var result = source.replace("'@mock'", replaceStr);
                var result = source.replace("'@ElementUI'", getElement('index'));
                var c = getElement('backstagePda');
                // console.log(c);
                // console.log('-------------------------------------------------------');
                result = result.replace("'@EACG'", c);
                return result;
            }
        },
        // {
        //     name: 'js-parser',
        //     test: /main\.js/,
        //     fn: function (source) {
        //         // var replaceStr = process.env.NODE_ENV === 'production'
        //         //     ? "" 
        //         //     : "import './mock/mock'"
        //         // var result = source.replace("'@mock'", replaceStr);
        //         var result = source.replace("'@ElementUI2'", getElement('backstagePda'));
        //         // result = result.replace("'@ElementUI2'", getElement('backstagePda'));
        //         return result;
        //     }
        // },
        // {
        //   name: 'i18n',
        //   vuxStaticReplace: false,
        //   staticReplace: false,
        //   extractToFiles: 'src/locales/components.yml',
        //   localeList: ['en', 'zh-CN']
        // },
        // {
        //   name: 'less-theme',
        //   path: 'src/theme.less'
        // }
    ]
}

// function toDash(str) {
//   return str.replace(/([A-Z])/g, function (m, w) {
//     return '-' + w.toLowerCase();
//   }).replace('-', '')
// }
