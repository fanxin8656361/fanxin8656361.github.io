(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e76b837"],{"6d85":function(e,t,o){},"6e0c":function(e,t,o){},7659:function(e,t,o){"use strict";var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"code-root"},[t("div",{staticClass:"button-view"},[t("div",{staticClass:"btn codecopy",on:{click:function(t){return t.stopPropagation(),e.codeCopy.apply(null,arguments)}}},[e._v("复制")])]),t("prism-editor",{staticClass:"my-editor",attrs:{id:"codeBox",value:e.value,highlight:e.highlighter,"line-numbers":"",readonly:"",language:"vue"},on:{input:e.codeChange}})],1)},l=[],a=o("e57a"),c=(o("cabf"),o("8c7a")),i=(o("cb55"),o("416b"),o("84bf"),{props:{value:{type:String,default:""}},components:{PrismEditor:a["a"]},data(){return{codeFold:!1}},methods:{highlighter(e){return Object(c["highlight"])(e,c["languages"].js)},codeChange(e){},codeCopy(e){let t=document.querySelector("#codeBox .prism-editor__editor");window.getSelection().selectAllChildren(t),document.execCommand("Copy"),this.$message.success("已复制")},codeCopy2(e){let t=document.querySelector("#codeBox2 .prism-editor__editor");window.getSelection().selectAllChildren(t),document.execCommand("Copy"),this.$message.success("已复制")},codeOpen(){this.previewDrawer=!0}}}),r=i,s=(o("d151"),o("d1e3"),o("2877")),d=Object(s["a"])(r,n,l,!1,null,"2439e98b",null);t["a"]=d.exports},a807:function(e,t,o){"use strict";o("6d85")},a883:function(e,t,o){},d151:function(e,t,o){"use strict";o("6e0c")},d1e3:function(e,t,o){"use strict";o("a883")},fdd9:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container",staticStyle:{background:"#f6f7f8"}},[t("div",{staticClass:"content-box"},[t("div",{staticClass:"header"}),t("div",{staticClass:"line"},[t("div",{staticClass:"label",staticStyle:{"margin-top":"40px"},attrs:{id:e.catalogue[0]}},[e._v("介绍")]),t("p",{staticClass:"content"},[e._v(" 白色，黑色和前进红:这些是奥迪品牌的颜色,秩序无关紧要,因为这里没有等级制度。重要的是颜色支持您想要传达的信息,并且整体布局不要太多彩。")])]),e._l(e.lineList,(function(o,n){return t("div",{key:n,staticClass:"line"},[t("div",{staticClass:"label",attrs:{id:e.catalogue[o.index]}},[e._v(e._s(o.title))]),t("p",{staticClass:"content"},[e._v(e._s(o.desc))]),t("div",{staticClass:"color-box"},e._l(o.list,(function(n,l){return t("div",{key:l,staticClass:"item",style:"width:"+o.itemWidth+";height:"+o.itemHeight+";font-size:"+o.fontSize},[t("div",{staticClass:"name"},[e._v(e._s(n.name))]),t("div",{staticClass:"color",style:"background:"+(n.colorBg||"#fafbfc")+";height:"+o.colorHeight},[t("el-tooltip",{attrs:{effect:"dark",offset:-70,content:"点击复制该色值",placement:"top-start"}},[t("div",{style:"background:"+n.color,on:{click:function(t){return t.stopPropagation(),e.copy(n.color)}}})])],1),t("div",{staticClass:"value"},[e._v(e._s(n.color))])])})),0)])})),t("div",{staticClass:"line"},[t("div",{staticClass:"label",attrs:{id:e.catalogue[6]}},[e._v("语义场景")]),t("p",{staticClass:"content"},[e._v("不同状态下使用颜色规范")]),t("div",{staticClass:"color-box2"},e._l(e.tableData,(function(o,n){return t("div",{key:n},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:o,border:!1,"cell-style":{padding:"0",backgroundColor:"#fafbfc"},"header-cell-style":{backgroundColor:"#FFFFFF",color:"#000000",fontSize:"16px",fontWeight:"500",padding:"14px 16px"}}},e._l(e.columnData[n],(function(o,n){return t("el-table-column",{key:n,attrs:{prop:o.prop,label:o.label,width:o.width},scopedSlots:e._u([{key:"default",fn:function(n){return["white"==o.prop?[t("div",{staticClass:"td-white"},[t("el-tooltip",{attrs:{effect:"dark",content:"点击复制该色值",placement:"right-start"}},[t("div",{style:"background-color:"+n.row[o.prop],on:{click:function(t){return t.stopPropagation(),e.copy(n.row[o.prop])}}})])],1)]:"black"==o.prop?[t("div",{staticClass:"td-black"},[t("el-tooltip",{attrs:{effect:"light",content:"点击复制该色值",placement:"right-start"}},[t("div",{style:"background-color:"+n.row[o.prop],on:{click:function(t){return t.stopPropagation(),e.copy(n.row[o.prop])}}})])],1)]:[t("div",{staticStyle:{"padding-left":"16px"}},[e._v(e._s(n.row[o.prop]))])]]}}],null,!0)})})),1)],1)})),0)]),t("div",{staticClass:"line",staticStyle:{margin:"30px 0"}},[t("codeView",{attrs:{value:e.activeCode}})],1),t("footerBar")],2),t("div",{staticClass:"catalogue"},[t("span",{staticClass:"cata-item title"},[e._v("本页重点")]),e._l(e.catalogue,(function(o,n){return t("span",{key:n,staticClass:"cata-item pointer",on:{click:function(t){return e.goAnchor("#"+o)}}},[e._v(e._s(o))])}))],2)])},l=[];const a=[{title:"品牌色",desc:"奥迪品牌的颜色是相同的地位,总是出现在全调,前进红不能变暗、变淡或透明地显示。",itemWidth:"184px",itemHeight:"270px",colorHeight:"190px",fontSize:"16px",list:[{name:"白色",color:"#FFFFFF"},{name:"黑色",color:"#000000"},{name:"前进红",color:"#F50537"}]},{title:"实用灰色调",desc:"对于功能应用,调色板可以扩展到包括从白色到黑色的灰色色调。",colorHeight:"127px",itemWidth:"127px",itemHeight:"185px",fontSize:"14px",list:[{name:"灰-5",color:"#F2F2F2"},{name:"灰-10",color:"#E5E5E5"},{name:"灰-15",color:"#D9D9D9"},{name:"灰-20",color:"#CCCCCC"},{name:"灰-30",color:"#B3B3B3"},{name:"灰-40",color:"#999999"},{name:"灰-50",color:"#808080"},{name:"灰-60",color:"#666666"},{name:"灰-70",color:"#4C4C4C"},{name:"灰-80",color:"#333333"},{name:"灰-90",color:"#1A1A1A"},{name:"辅助冷灰色1",color:"#F6F7F8"},{name:"辅助冷灰色2",color:"#F9FAFB"},{name:"辅助冷灰色3",color:"#EEF0F3"}]},{title:"表格/控件辅助色",desc:"大规模选择状态使用",colorHeight:"127px",itemWidth:"127px",itemHeight:"185px",fontSize:"14px",list:[{name:"霓虹蓝-5",color:"#F4F7FF"},{name:"霓虹蓝-10",color:"#E9EFFF"},{name:"霓虹蓝-15",color:"#DEE7FF"},{name:"霓虹蓝-20",color:"#D3E0FF"},{name:"霓虹蓝-30",color:"#BED0FF"},{name:"霓虹蓝-40",color:"#A8C0FF"},{name:"霓虹蓝-50",color:"#92B0FE"},{name:"霓虹蓝-60",color:"#7CA1FE"},{name:"霓虹蓝-70",color:"#6691FE"},{name:"霓虹蓝-80",color:"#5181FE"},{name:"霓虹蓝-90",color:"#3B72FE"}]},{title:"信号色",desc:"奥迪的信号颜色仅用于通知,警告,和状态信息,如果需要一个颜色区分,红色可用于块,而黄色和绿色可能只用于排版和图标。",itemWidth:"184px",itemHeight:"270px",colorHeight:"190px",fontSize:"16px",list:[{name:"信号红",color:"#EB0D3F"},{name:"信号绿",color:"#0DA20D"},{name:"信号黄",color:"#FFAA00"},{name:"信号红-暗",color:"#FD2C4E",colorBg:"#000000"},{name:"信号绿-暗",color:"#15DA15",colorBg:"#000000"},{name:"信号黄-暗",color:"#A8C0FF",colorBg:"#000000"}]},{title:"充电色",desc:"奥迪的充电颜色只用于电动汽车上下文—无论是作为用户界面的一部分,还是显示主动充电过程.充电的颜色只能有选择性和节制地使用。",itemWidth:"184px",itemHeight:"270px",colorHeight:"190px",fontSize:"16px",list:[{name:"霓虹蓝",color:"#2562FE"},{name:"荧光绿",color:"#0DA20D"},{name:"霓虹蓝-暗",color:"#556EFE",colorBg:"#000000"},{name:"荧光绿-暗",color:"#15DA15",colorBg:"#000000"}]}],c=[[{prop:"text",width:"210px",label:"用途"},{prop:"name",width:"210px",label:"名称"},{prop:"white",width:"210px",label:"正常"},{prop:"black",width:"210px",label:"暗黑"}],[{prop:"text",width:"210px",label:"文本"},{prop:"name",width:"210px",label:""},{prop:"white",width:"210px",label:""},{prop:"black",width:"210px",label:""}],[{prop:"text",width:"210px",label:"编辑文本"},{prop:"name",width:"210px",label:""},{prop:"white",width:"210px",label:""},{prop:"black",width:"210px",label:""}],[{prop:"text",width:"210px",label:"圆形按钮"},{prop:"name",width:"210px",label:""},{prop:"white",width:"210px",label:""},{prop:"black",width:"210px",label:""}],[{prop:"text",width:"210px",label:"长按按钮"},{prop:"name",width:"210px",label:""},{prop:"white",width:"210px",label:""},{prop:"black",width:"210px",label:""}],[{prop:"text",width:"210px",label:"进程"},{prop:"name",width:"210px",label:""},{prop:"white",width:"210px",label:""},{prop:"black",width:"210px",label:""}]],i=[[{id:1,text:"成功着色",name:"信号绿",white:"#0DA20D",black:"#15DA15"},{id:2,text:"注意色",name:"信号黄",white:"#FFAA00",black:"#FFAA00"},{id:3,text:"警示色",name:"信号红",white:"#EB0D3F",black:"#FD2C4E"},{id:4,text:"烙印色",name:"进取红",white:"#F50537",black:"#F50537"},{id:5,text:"电池色",name:"荧光绿",white:"#0DA20D",black:"#15DA15"},{id:6,text:"汽油色",name:"霓虹蓝",white:"#2562FE",black:"#556EFE"},{id:7,text:"背景色",name:"白色",white:"#FFFFFF",black:"#333333"}],[{id:1,text:"标题颜色",name:"黑色",white:"#000000",black:"#FFFFFF"},{id:2,text:"双色",name:"灰-30",white:"#B3B3B3",black:"#B3B3B3"},{id:3,text:"脚注文本颜色",name:"灰-30",white:"#B3B3B3",black:"#B3B3B3"},{id:4,text:"不强调文本色彩",name:"灰-30",white:"#B3B3B3",black:"#B3B3B3"},{id:5,text:"文本颜色",name:"灰-80",white:"#333333",black:"#E5E5E5"},{id:6,text:"文本颜色警告",name:"信号红",white:"#EB0D3F",black:"#FD2C4E"},{id:7,text:"二级信息色彩",name:"灰-50",white:"#808080",black:"#B3B3B3"},{id:8,text:"高亮文本颜色",name:"灰-30",white:"#B3B3B3",black:"#B3B3B3"},{id:9,text:"突出的脚色",name:"灰-80",white:"#333333",black:"#E5E5E5"}],[{id:1,text:"编辑文本选择和字体颜色",name:"灰-80",white:"#333333",black:"#E5E5E5"},{id:2,text:"编辑文本目录颜色",name:"灰-80",white:"#333333",black:"#E5E5E5"},{id:3,text:"编辑文本高亮颜色",name:"灰-30",white:"#B3B3B3",black:"#B3B3B3"}],[{id:1,text:"圆形按钮背景色",name:"黑色",white:"#000000",black:"#FFFFFF      "},{id:2,text:"圆形按钮禁用颜色",name:"灰-15 ",white:"#D9D9D9",black:"#333333"},{id:3,text:"圆形按钮高亮背景色",name:"信号红",white:"#EB0D3F",black:"#FD2C4E"},{id:4,text:"圆形按钮选定的背景色",name:"灰-5",white:"#F2F2F2",black:"#1A1A1A"}],[{id:1,text:"长按按钮触摸指示",name:"灰-15",white:"#D9D9D9",black:"#333333"},{id:2,text:"长按按钮触碰指示灯",name:"信号绿",white:"#B3B3B3",black:"#E5E5E5"}],[{id:1,text:"前进前景颜色",name:"信号红 ",white:"#EB0D3F",black:"#FD2C4E"},{id:2,text:"前进二级前景颜色",name:"灰-80",white:"#333333",black:"#E5E5E5"},{id:3,text:"前进背景颜色",name:"灰-5",white:"#F2F2F2",black:"#1A1A1A"}]];var r=o("7659"),s=" /* \n      全局使用主题色：\n\n      方式一\n\n      1. 项目public文件夹新建themes.css\n\n      2. Copy此文件内容到themes.css\n\n      3. 在index.html的头部引入此文件\n         <link rel=\"stylesheet\" type=\"text/css\" href=\"./themes.css\" rel=\"external nofollow\">\n\n      4. 页面样式中使用\n         color: var(--color-theme) \n      \n      5. 亦可通过其他方式使用\n      */\n\n:root {\n\n    /* 以下色调来自于设计规范 */\n  \n    /** 品牌色 \n      奥迪品牌的颜色是相同的地位,总是出现在全调,前进红不能变暗、变淡或透明地显示。\n  */\n  \n    --color-default: #000000; /*黑色*/\n    --color-white: #ffffff; /*白色*/\n    --color-theme: #f50537; /*前进红*/\n  \n    /*  实用灰色调 \n      对于功能应用,调色板可以扩展到包括从白色到黑色的灰色色调。\n  */\n    --color-grey-5: #f2f2f2; /*灰-5*/\n    --color-grey-10: #e5e5e5; /*灰-10*/\n    --color-grey-15: #d9d9d9; /*灰-15*/\n    --color-grey-20: #cccccc; /*灰-20*/\n    --color-grey-30: #b3b3b3; /*灰-30*/\n    --color-grey-40: #999999; /*灰-40*/\n    --color-grey-50: #808080; /*灰-50*/\n    --color-grey-60: #666666; /*灰-60*/\n    --color-grey-70: #4c4c4c; /*灰-70*/\n    --color-grey-80: #333333; /*灰-80*/\n    --color-grey-90: #1a1a1a; /*灰-90*/\n  \n    /*  表格/控件辅助色 \n      大规模选择状态使用\n  */\n    --color-neon-5: #f4f7ff; /*霓虹蓝-5*/\n    --color-neon-10: #e9efff; /*霓虹蓝-10*/\n    --color-neon-15: #dee7ff; /*霓虹蓝-15*/\n    --color-neon-20: #d3e0ff; /*霓虹蓝-20*/\n    --color-neon-30: #bed0ff; /*霓虹蓝-30*/\n    --color-neon-40: #a8c0ff; /*霓虹蓝-40*/\n    --color-neon-50: #92b0fe; /*霓虹蓝-50*/\n    --color-neon-60: #7ca1fe; /*霓虹蓝-60*/\n    --color-neon-70: #6691fe; /*霓虹蓝-70*/\n    --color-neon-80: #5181fe; /*霓虹蓝-80*/\n    --color-neon-90: #3b72fe; /*霓虹蓝-90*/\n  \n    /*  信号色 \n      奥迪的信号颜色仅用于通知,警告,和状态信息,如果需要一个颜色区分,红色可用于块,而黄色和绿色可能只用于排版和图标。\n  */\n    --color-info-red: #eb0d3f; /*信号红*/\n    --color-info-green: #0da20d; /*信号绿*/\n    --color-info-yellow: #ffaa00; /*信号黄*/\n    --color-info-red-d: #fd2c4e; /*信号红-暗*/\n    --color-info-green-d: #15da15; /*信号绿-暗*/\n    --color-info-yellow-d: #ffaa00; /*信号黄-暗*/\n  \n    /*  充电色 \n      奥迪的充电颜色只用于电动汽车上下文—无论是作为用户界面的一部分,还是显示主动充电过程.充电的颜色只能有选择性和节制地使用。\n  */\n    --color-energy-blue: #2562fe; /*霓虹蓝*/\n    --color-energy-green: #0da20d; /*荧光绿*/\n    --color-energy-blue-d: #556efe; /*霓虹蓝-暗*/\n    --color-energy-green-d: #15da15; /*荧光绿-暗*/\n  }\n  \n\n  /**      \n      全局使用主题色：\n\n      方式二\n\n      安装使用 style-resources-loader\n\n        1. npm i style-resources-loader\n\n        2. npm i vue-cli-plugin-style-resources-loader\n\n        3. vue.config.js 加入如下配置\n\n          const path = require('path');\n          module.exports = {\n            pluginOptions: {\n              'style-resources-loader': {\n                preProcessor: 'scss',                \n                patterns: [\n                  //注意scss文件内颜色key要以$开头 eg：$--color-default: #000000\n                  path.resolve(__dirname, 'src/style/color.scss')\n                ]\n              }\n            }\n          };\n\n        4. 页面使用\n          color: $--color-default;\n    */",d={components:{codeView:r["a"]},data(){return{catalogue:["介绍","品牌色","实用灰色调","表格控件辅助色","信号色","充电色","语义场景"],lineList:a,columnData:c,tableData:i,activeCode:s}},created(){let e=this.lineList;e.map((e,t)=>{e.index=t+1}),this.lineList=e,console.log(this.lineList)},methods:{copy(e){const t=document.createElement("input");document.body.appendChild(t),t.setAttribute("value",e),t.select(),document.execCommand("copy")&&(document.execCommand("copy"),this.$message.success(e+" 色值已复制")),document.body.removeChild(t)},goAnchor(e){console.log(e);const t=document.querySelector(e);console.log(t),t&&t.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}}},p=d,m=(o("a807"),o("2877")),h=Object(m["a"])(p,n,l,!1,null,"3144dfdc",null);t["default"]=h.exports}}]);