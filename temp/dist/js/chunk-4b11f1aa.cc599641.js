(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b11f1aa"],{"1c71":function(t,n,e){},2310:function(t,n,e){"use strict";e("a164")},"27ac":function(t,n,e){t.exports=e.p+"img/button_img_1.482638cc.png"},3976:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t._self._c;return n("div",{staticClass:"container"},[n("div",{staticClass:"content-box"},[n("div",{staticClass:"page-type"},[t._v("分子")]),n("div",{staticClass:"title1",attrs:{id:t.catalogue[0]}},[t._v("按钮"),n("span",{staticStyle:{padding:"0 10px"}},[t._v("/")]),t._v("Button")]),n("p",{staticClass:"content1",domProps:{textContent:t._s(t.content1)}}),n("img",{staticClass:"img1",attrs:{src:e("27ac"),alt:""}}),n("div",{staticClass:"title",attrs:{id:t.catalogue[1]}},[t._v(t._s(t.catalogue[1]))]),n("p",{staticClass:"text text2",domProps:{textContent:t._s(t.content2)}}),n("div",{staticClass:"content2-box"},[t._l(t.componentList,(function(e,r){return[n("a",{key:r,class:1==r||4==r?"item2":"item",style:`background-color: ${e.background}; ${"#1A1A1A"==e.background?"color: #fff":""}`,attrs:{href:e.componentName?"#"+t.catalogue[5]:"#"},on:{click:function(n){return t.componentTap(e,r)}}},[n(e.componentName,t._b({tag:"component"},"component",e.componentProps,!1)),n("div",{staticClass:"desc"},[t._v(t._s(e.desc))])],1)]})),n("div",{staticClass:"hr"})],2),n("div",{staticClass:"title",attrs:{id:t.catalogue[2]}},[t._v(t._s(t.catalogue[2]))]),n("p",{staticClass:"text",domProps:{textContent:t._s(t.content3)}}),t._m(0),n("div",{staticClass:"title",attrs:{id:t.catalogue[3]}},[t._v(t._s(t.catalogue[3]))]),n("p",{staticClass:"text text6",domProps:{textContent:t._s(t.content6)}}),n("div",{staticClass:"content6-box"},[n("codeView",{attrs:{value:t.activeCode}})],1),n("div",{staticClass:"title",attrs:{id:t.catalogue[4]}},[t._v(t._s(t.catalogue[4]))]),n("p",{staticClass:"text",domProps:{textContent:t._s(t.content4)}}),t._m(1),n("div",{staticClass:"title",attrs:{id:t.catalogue[5]}},[t._v(t._s(t.catalogue[5]))]),n("p",{staticClass:"text",domProps:{textContent:t._s(t.content5)}}),t._m(2),n("div",{staticClass:"title",attrs:{id:t.catalogue[6]}},[t._v(t._s(t.catalogue[6]))]),n("p",{staticClass:"text"},[t._v("可参考")]),n("div",{staticClass:"content7-box"},[n("a-table",{attrs:{"data-source":t.dataSource,columns:t.columns,pagination:!1,rowKey:t=>t.params+Math.random()}})],1),n("footerBar")],1),n("div",{staticClass:"catalogue"},[n("span",{staticClass:"cata-item title"},[t._v("本页重点")]),t._l(t.catalogue,(function(e,r){return n("span",{key:r,staticClass:"cata-item pointer",on:{click:function(n){return t.goAnchor("#"+e)}}},[t._v(t._s(e))])}))],2)])},o=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"content3-box"},[n("div",{staticClass:"line"},[n("div",{staticClass:"item"},[n("span",[t._v("文本")])]),n("div",{staticClass:"item"},[n("span",[t._v("文本")]),n("i",{staticClass:"Audi-Dash Audi-Dashfile-pdf"})]),n("div",{staticClass:"item"},[n("i",{staticClass:"Audi-Dash Audi-Dashfile-pdf",staticStyle:{"margin-right":"0"}}),n("span",[t._v("文本")])])]),n("div",{staticClass:"desc"},[t._v("按钮可在左边或者右边加入图标，也可以纯文字显示")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"content4-box"},[n("img",{attrs:{width:"772px",src:e("8fb0"),alt:""}})])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"content5-box"},[n("div",{staticClass:"line"},[n("div",{staticClass:"item primary"},[n("i",{staticClass:"Audi-Dash Audi-Dashfile-pdf"}),n("span",[t._v("文本")])]),n("div",{staticClass:"item"},[n("i",{staticClass:"Audi-Dash Audi-Dashfile-pdf"}),n("span",[t._v("文本")])]),n("div",{staticClass:"item warn"},[n("i",{staticClass:"Audi-Dash Audi-Dashfile-pdf"}),n("span",[t._v("文本")])]),n("div",{staticClass:"item"},[n("i",{staticClass:"Audi-Dash Audi-Dashfile-pdf"}),n("span",[t._v("文本")])])])])}],a=e("7659"),i="<template>\r\n  <div style=\"margin: 15px\">\r\n    <button \r\n      :class=\"['primary-button', disabled?'disabled':'' ]\"\r\n      :style=\"btnStyle\"\r\n      @click.stop=\"tap\">\r\n      <i v-if=\"iconClass != 'none'\" :class=\"`${iconClass} icon`\"></i>\r\n      {{text}}</button>\r\n  </div>\r\n</template>\r\n<script>\r\nexport default {\r\n  props: {\r\n    iconClass: {\r\n      type: String,\r\n      default: 'Audi-Dash Audi-Dashfile-pdf',\r\n    },\r\n    text: {\r\n      type: String,\r\n      default: '文本',\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    btnStyle: {\r\n      type: Object,\r\n      default: () => {},\r\n    },\r\n   \r\n  },\r\n  created() {\r\n    console.log(666,this.btnStyle);\r\n  },\r\n  methods: {\r\n    tap() {\r\n      if(!this.disabled) this.$emit('buttonTap')\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n<style scoped>\r\n.primary-button {\r\n  border: none;\r\n  cursor: pointer;\r\n  background-color: #000000;\r\n  font-size: 18px;\r\n  color: #ffffff;\r\n  border-radius: 2px;\r\n  width: 154px;\r\n  height: 50px;\r\n}\r\n.primary-button:hover {\r\n  background-color: #808080;\r\n}\r\n.primary-button:active {\r\n  background-color: #4c4c4c;\r\n}\r\n.icon {\r\n  position: relative;\r\n  top: 1px;\r\n  margin-right: 9px;\r\n  font-size: 16px;\r\n}\r\n/* 禁用 */\r\n.primary-button.disabled {\r\n  cursor: not-allowed;\r\n  background-color: #d9d9d9;\r\n  color: #999999;\r\n}\r\n</style>\r\n",s="<template>\r\n  <div style=\"margin: 15px\">\r\n    <button :class=\"['warn-button', disabled?'disabled':'' ]\" @tap=\"tap\" :style=\"btnStyle\">\r\n      <i v-if=\"iconClass != 'none'\" :class=\"`${iconClass} icon`\"></i>{{text}}</button>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  props: {\r\n    iconClass: {\r\n      type: String,\r\n      default: 'Audi-Dash Audi-Dashfile-pdf',\r\n    },\r\n    text: {\r\n      type: String,\r\n      default: '文本',\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    btnStyle: {\r\n      type: Object,\r\n      default: () => {},\r\n    },\r\n  },\r\n  methods: {\r\n    tap() {\r\n      if(!this.disabled) this.$emit('buttonTap')\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.warn-button {\r\n  cursor: pointer;\r\n  border: none;\r\n  background-color: #f50537;\r\n  font-size: 18px;\r\n  color: #ffffff;\r\n  border-radius: 2px;\r\n  width: 154px;\r\n  height: 50px;\r\n}\r\n.warn-button:hover {\r\n  background-color: #eb0d3f;\r\n}\r\n\r\n.warn-button:active {\r\n  background-color: #fd2c4e;\r\n}\r\n\r\n.icon {\r\n  position: relative;\r\n  top: 1px;\r\n  margin-right: 9px;\r\n  font-size: 16px;\r\n}\r\n\r\n/* 禁用 */\r\n.warn-button.disabled {\r\n  cursor: not-allowed;\r\n  background-color: #d9d9d9;\r\n  color: #999999;\r\n}\r\n</style>\r\n",l="<template>\r\n  <div style=\"margin: 15px\">\r\n    <button :class=\"['plain-button', disabled ? 'disabled' : '' ]\" @click.stop=\"tap\" :style=\"btnStyle\"> \r\n      <i v-if=\"iconClass != 'none'\" :class=\"`${iconClass} icon`\"></i>{{text}} </button>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  props: {\r\n    iconClass: {\r\n      type: String,\r\n      default: 'Audi-Dash Audi-Dashfile-pdf',\r\n    },\r\n    text: {\r\n      type: String,\r\n      default: '文本',\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    btnStyle: {\r\n      type: Object,\r\n      default: () => {},\r\n    },\r\n  },\r\n  methods: {\r\n    tap() {\r\n      if(!this.disabled) this.$emit('buttonTap')\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.plain-button {\r\n  cursor: pointer;\r\n  background-color: #ffffff;\r\n  font-size: 18px;\r\n  color: #000000;\r\n  border-radius: 2px;\r\n  width: 154px;\r\n  height: 50px;\r\n  border: none;\r\n  border: 1px solid #d9d9d9;\r\n}\r\n.plain-button:hover {\r\n  color: #1A1A1A;\r\n}\r\n.plain-button:active {\r\n  color: #333333;\r\n}\r\n\r\n.icon {\r\n  position: relative;\r\n  top: 1px;\r\n  margin-right: 9px;\r\n  font-size: 16px;\r\n}\r\n\r\n/* 禁用 */\r\n.plain-button.disabled {\r\n  cursor: not-allowed;\r\n  border-color: #e5e5e5;\r\n  color: #808080;\r\n}\r\n</style>\r\n",c="<template>\r\n\r\n  <div style=\"margin: 15px\">\r\n    <button :class=\"['plain-button', disabled ? 'disabled' : '' ]\" @click.stop=\"tap\" :style=\"btnStyle\"> \r\n      <i v-if=\"iconClass != 'none'\" :class=\"`${iconClass} icon`\"></i>{{text}} </button>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  props: {\r\n    iconClass: {\r\n      type: String,\r\n      default: 'Audi-Dash Audi-Dashfile-pdf',\r\n    },\r\n    text: {\r\n      type: String,\r\n      default: '文本',\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    btnStyle: {\r\n      type: Object,\r\n      default: () => {},\r\n    },\r\n  },\r\n  methods: {\r\n    tap() {\r\n      if(!this.disabled) this.$emit('buttonTap')\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.plain-button {\r\n  cursor: pointer;\r\n  border: none;\r\n  background-color: #ffffff;\r\n  font-size: 14px;\r\n  color: #000000;\r\n  border-radius: 2px;\r\n  width: 154px;\r\n  height: 50px;\r\n}\r\n.plain-button:active {\r\n  color: #999999;\r\n}\r\n\r\n.plain-button:hover {\r\n  color: #666666;\r\n}\r\n\r\n.icon {\r\n  position: relative;\r\n  top: 1px;\r\n  margin-right: 9px;\r\n  font-size: 14px;\r\n}\r\n\r\n/* 禁用 */\r\n.plain-button.disabled {\r\n  cursor: not-allowed;\r\n  border-color: #e5e5e5;\r\n  color: #808080;\r\n}\r\n</style>\r\n",d={components:{codeView:a["a"],defaultButton:()=>e.e("chunk-ecc9f282").then(e.bind(null,"4e0f")),warnButton:()=>e.e("chunk-2b67dd8a").then(e.bind(null,"c5e7")),whiteButton:()=>e.e("chunk-349a61e6").then(e.bind(null,"98d3")),noborderButton:()=>e.e("chunk-e9d58954").then(e.bind(null,"5d41")),defaultIconButton:()=>e.e("chunk-2614f3ab").then(e.bind(null,"560b")),warnIconButton:()=>e.e("chunk-4bffee1f").then(e.bind(null,"338c")),whiteIconButton:()=>e.e("chunk-14ffa7d0").then(e.bind(null,"c92b"))},data(){return{catalogue:["介绍","分类","按钮中的图标","代码还原参考","按钮的状态","组合按钮","元件参数"],content1:"按钮是用户界面（UI）设计中常见的交互元素。它是一种可点击的图形元素，用于在用户单击时触发特定的操作或功能。按钮可以出现在软件应用程序、网站或其他电子产品的用户界面中。它通常是一个文本标签或图标，告诉用户它可以用来干什么。按钮的样式和交互应该与界面的整体风格保持一致。按钮规范指关于按钮的规则和指南。\n\n            规则包括：一，按钮的形状和大小、按钮的颜色和文本颜色。二，按钮的文本样式，如字体大小、阴影、颜色等。三，按钮的点击效果，如阴影、颜色变化等。四，按钮的对齐方式。五，按钮的文本内容和语义。按钮规范应该保证按钮明确表示其功能，并且易于理解和使用。按钮的样式和交互应该与界面的整体风格保持一致。",content2:"按钮分为5种样式：\n                        主要按钮 - 承担页面的主要功能；\n                        次要按钮 - 高亮显示页面的核心功能；\n                        白幽灵按钮 - 显示次要的功能；\n                        黑幽灵按钮 - 在深色背景上显示；\n                        文字按钮 - 以文字的形式承担按钮的样式。",content3:"按钮中的图标可以在左、右显示，也可以不显示图标。",content4:"按钮分为5种状态:正常、悬停、按下、不可点击、加载中。",content5:"可用在同级多项操作,以按钮组合方式出现。但需要区分主次操作。",content6:"还原参考指的是使用代码来重现设计图或原型中的 UI 元素和布局。这种还原过程通常是在网页或应用程序开发过程中使用的。参考设计图，开发人员会使用不同的技术来重现 UI 的样式、布局和交互。这个过程对于保证设计与代码之间的一致性和可维护性是非常重要的。",activeIndex:0,componentList:[{desc:"主要按钮",componentName:"defaultButton",componentProps:{},componentCode:i,background:"#F6F7F8"},{desc:"次要按钮",componentName:"warnButton",componentProps:{},componentCode:s,background:"#F6F7F8"},{desc:"白幽灵按钮",componentName:"whiteButton",componentProps:{},componentCode:l,background:"#F6F7F8"},{desc:"黑幽灵按钮",componentName:"defaultButton",componentProps:{btnStyle:{border:"1px solid #f2f2f2"}},componentCode:i,background:"#1A1A1A"},{desc:"文字按钮",componentName:"noborderButton",componentProps:{},componentCode:c,background:"#F6F7F8"},{desc:""}],dataSource:[{params:"text",desc:"显示的文字",type:"string",value:"-",defaultVal:"按钮"},{params:"disabled",desc:"是否禁用",type:"boolean",value:"true / false",defaultVal:"false"},{params:"iconClass",desc:"针对支持组件传入的iconClass(Audi)",type:"string",value:"参照iconfont",defaultVal:"Audi-Dash Audi-Dashright"},{params:"loading",desc:"针对loading按钮的状态",type:"boolean",value:"true / false",defaultVal:"false"},{params:"timeout",desc:"针对loading按钮的超时时间(ms)",type:"number",value:"-",defaultVal:"6000"}],columns:[{title:"属性",dataIndex:"params",prop:"params",width:100,align:"center"},{title:"说明",dataIndex:"desc",prop:"desc",align:"center"},{title:"类型",dataIndex:"type",prop:"type",minWidth:100,align:"center"},{title:"可选的值",dataIndex:"value",prop:"value",minWidth:120,align:"center"},{title:"默认值",dataIndex:"defaultVal",prop:"defaultVal",align:"center"}]}},computed:{activeCode(){return this.componentList[this.activeIndex].componentCode}},methods:{componentTap(t,n){t.componentName&&(this.activeIndex=n)},goAnchor(t){const n=document.querySelector(t);n&&n.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}}},p=d,u=(e("b115"),e("2877")),b=Object(u["a"])(p,r,o,!1,null,"57d53bcd",null);n["default"]=b.exports},7659:function(t,n,e){"use strict";var r=function(){var t=this,n=t._self._c;return n("div",{staticClass:"code-root"},[n("div",{staticClass:"button-view"},[n("div",{staticClass:"btn codecopy",on:{click:function(n){return n.stopPropagation(),t.codeCopy.apply(null,arguments)}}},[t._v("一键复制")])]),n("el-drawer",{attrs:{"with-header":!0,visible:t.previewDrawer,direction:"rtl",size:"60%"},on:{"update:visible":function(n){t.previewDrawer=n}}},[n("template",{slot:"title"},[n("div",{staticStyle:{width:"100%",height:"100%",position:"relative"}},[n("div",{staticStyle:{"font-size":"16px","font-weight":"600"}},[t._v("code")]),n("el-button",{staticClass:"btn codecopy",on:{click:function(n){return n.stopPropagation(),t.codeCopy2.apply(null,arguments)}}},[t._v("一键复制")])],1)]),n("prism-editor",{staticClass:"my-editor",attrs:{id:"codeBox2",value:t.value,highlight:t.highlighter,"line-numbers":"",readonly:"",language:"vue"},on:{input:t.codeChange}})],2),n("prism-editor",{staticClass:"my-editor",attrs:{id:"codeBox",value:t.value,highlight:t.highlighter,"line-numbers":"",readonly:"",language:"vue"},on:{input:t.codeChange}})],1)},o=[],a=e("e57a"),i=(e("cabf"),e("8c7a")),s=(e("cb55"),e("416b"),e("84bf"),{props:{value:{type:String,default:""}},components:{PrismEditor:a["a"]},data(){return{previewDrawer:!1,codeFold:!1}},methods:{highlighter(t){return Object(i["highlight"])(t,i["languages"].js)},codeChange(t){},codeCopy(t){let n=document.querySelector("#codeBox .prism-editor__editor");window.getSelection().selectAllChildren(n),document.execCommand("Copy"),this.$message.success("已复制")},codeCopy2(t){let n=document.querySelector("#codeBox2 .prism-editor__editor");window.getSelection().selectAllChildren(n),document.execCommand("Copy"),this.$message.success("已复制")},codeOpen(){this.previewDrawer=!0}}}),l=s,c=(e("2310"),e("be7e"),e("2877")),d=Object(c["a"])(l,r,o,!1,null,"1cb74004",null);n["a"]=d.exports},"80db":function(t,n,e){},"8fb0":function(t,n,e){t.exports=e.p+"img/button_img_2.dda0069a.png"},a164:function(t,n,e){},b115:function(t,n,e){"use strict";e("80db")},be7e:function(t,n,e){"use strict";e("1c71")}}]);