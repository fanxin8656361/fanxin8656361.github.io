(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e1574ba"],{3734:function(e,t,o){},bc6a:function(e,t,o){"use strict";o("3734")},c98a:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[e._m(0),t("div",{staticClass:"content choose-box"},[e._m(1),t("el-form",{ref:"chooseForm",staticClass:"form-box",attrs:{"label-position":"top"}},[t("el-row",{attrs:{type:"flex"}},[t("el-col",{attrs:{span:5}},[t("el-form-item",{attrs:{label:"车系"}},[t("el-select",{attrs:{"popper-append-to-body":!1,placeholder:"请选择"},model:{value:e.chooseInfo.series,callback:function(t){e.$set(e.chooseInfo,"series",t)},expression:"chooseInfo.series"}},e._l(e.chooseInfo.seriesList,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),t("el-col",{attrs:{span:5,offset:1}},[t("el-form-item",{attrs:{label:"车型"}},[t("el-select",{attrs:{"popper-append-to-body":!1,placeholder:"请选择"},model:{value:e.chooseInfo.model,callback:function(t){e.$set(e.chooseInfo,"model",t)},expression:"chooseInfo.model"}},e._l(e.chooseInfo.modelList,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),t("el-col",{attrs:{span:5,offset:1}},[t("el-form-item",{staticClass:"search-box",attrs:{label:"OneApp订单编号"}},[t("el-input",{attrs:{placeholder:"请输入订单编号",clearable:""},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.importTap.apply(null,arguments)}},model:{value:e.chooseInfo.oneAppOrderNo,callback:function(t){e.$set(e.chooseInfo,"oneAppOrderNo",t)},expression:"chooseInfo.oneAppOrderNo"}},[t("template",{slot:"append"},[t("div",{staticClass:"search-suffix",on:{click:function(t){return t.stopPropagation(),e.importTap.apply(null,arguments)}}},[e._v("导入")])])],2)],1)],1),t("el-col",{attrs:{span:5,offset:1}},[t("el-form-item",{attrs:{label:"里程(Km)"}},[t("el-input",{attrs:{placeholder:"请输入"},model:{value:e.chooseInfo.VIN,callback:function(t){e.$set(e.chooseInfo,"VIN",t)},expression:"chooseInfo.VIN"}})],1)],1)],1),t("el-row",{attrs:{type:"flex"}},[t("el-col",{attrs:{span:5}},[t("el-form-item",{attrs:{label:"服务类型"}},[t("el-select",{attrs:{"popper-append-to-body":!1,placeholder:"请选择"},model:{value:e.chooseInfo.serviceType,callback:function(t){e.$set(e.chooseInfo,"serviceType",t)},expression:"chooseInfo.serviceType"}},e._l(e.chooseInfo.serviceList,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),t("el-col",{attrs:{span:5,offset:13}},[t("el-form-item",{attrs:{label:"."}},[t("div",{staticClass:"control-box"},[t("button",{staticClass:"primary-button",on:{click:function(t){return t.stopPropagation(),e.onSearch.apply(null,arguments)}}},[t("span",[e._v("查询")])]),t("button",{staticClass:"plain-button",on:{click:function(t){return t.stopPropagation(),e.onReset.apply(null,arguments)}}},[e._v("重置")])])])],1)],1)],1)],1),e._m(2)])},l=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"tabs"},[t("div",[e._v("用户")]),e._v(" / "),t("div",{staticClass:"active"},[e._v("服务预约")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"title-box"},[t("div",{staticClass:"border"}),e._v(" 选择服务 ")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"content project-box"},[t("div",{staticClass:"title-box"},[t("div",{staticClass:"border"}),e._v(" 服务项目 ")]),t("div",{staticClass:"price"},[e._v("预估价格：￥2195起")])])}],a={data(){return{chooseInfo:{series:"",model:"",oneAppOrderNo:"",mileage:"",serviceType:"",seriesList:["系列1","系列2","系列3"],modelList:["Q5","Q6","Q7"],serviceList:["服务类型1","服务类型2","服务类型3","服务类型4"]}}},beforeCreate(){document.title="服务预约"},methods:{onSearch(){this.$message.info("onSearch")},onReset(){this.$message.info("onReset")},importTap(e){this.$message.info("导入")}}},n=a,r=(o("bc6a"),o("2877")),c=Object(r["a"])(n,s,l,!1,null,"e4bd2e48",null);t["default"]=c.exports}}]);