(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-100e8fe6"],{"0c8b":function(e,t,a){"use strict";a("e9cb")},"334b":function(e,t,a){"use strict";a("3a3e")},"3a3e":function(e,t,a){},"6f08":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"default-switch"},[t("div",{staticClass:"item"},[t("audiSwitch",{attrs:{value:e.value1,openLoading:!0,isLoading:e.isLoading,showText:!0,id:"value1"},on:{changeSwitch:e.changeSwitch}}),t("p",[e._v("文字:开 开关:开 加载:开 可点击")])],1),t("div",{staticClass:"item"},[t("audiSwitch",{attrs:{value:e.value2,openLoading:!0,isLoading:!0,showText:!0,disabled:!0,id:"value2"},on:{changeSwitch:e.changeSwitch}}),t("p",[e._v("文字:开 开关:开 加载:开 不可点击")])],1),t("div",{staticClass:"item"},[t("audiSwitch",{attrs:{value:e.value3,openLoading:!0,isLoading:!0,showText:!0,disabled:!0,id:"value3"},on:{changeSwitch:e.changeSwitch}}),t("p",[e._v("文字:开 开关:关 加载:开 不可点击")])],1),t("div",{staticClass:"item"},[t("audiSwitch",{attrs:{value:e.value4,openLoading:!0,isLoading:!0,showText:!0,disabled:!0,id:"value4",closeBackground:"#E5E5E5"},on:{changeSwitch:e.changeSwitch}}),t("p",[e._v("文字:关 开关:关 加载:开 不可点击")])],1)])},s=[],n=a("a03a"),c={components:{audiSwitch:n["a"]},data(){return{value1:!0,value2:!0,value3:!1,value4:!1,isLoading:!1}},methods:{changeSwitch(e,t,a){this.isLoading=!this.isLoading;let i=setTimeout(()=>{this[t]=e,this.isLoading=!this.isLoading,clearTimeout(i)},2e3)}}},o=c,d=(a("0c8b"),a("2877")),l=Object(d["a"])(o,i,s,!1,null,"715eb15d",null);t["default"]=l.exports},a03a:function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"audi-switch",on:{click:function(t){return t.stopPropagation(),e.toggle.apply(null,arguments)}}},[t("div",{class:{slider:!0,"slider-on":e.me_checked,disabled:e.disabled,loading:e.openLoading&&e.isLoading},style:e.cssVars,attrs:{value:e.value}}),e.showText&&e.value?t("div",{staticClass:"before"},[e._v("开")]):e._e(),e.showText&&!e.value?t("div",{staticClass:"after"},[e._v("关")]):e._e()])},s=[],n={props:{value:{type:Boolean,default:!0,required:!0},id:{type:String|Number,default:""},index:{type:String|Number,default:1},openLoading:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},showText:{type:Boolean,default:!1},activeBackground:{type:String,default:"#F50537"},closeBackground:{type:String,default:"#CCCCCC"}},data(){return{me_checked:this.value}},watch:{value(){this.me_checked=this.value}},computed:{cssVars(){return{"--active-color":this.activeBackground,"--close-color":this.closeBackground}}},methods:{toggle(){if(this.disabled)return;const e=!this.me_checked;this.$emit("changeSwitch",e,this.id,this.index),this.openLoading||(this.me_checked=e)}}},c=n,o=(a("334b"),a("2877")),d=Object(o["a"])(c,i,s,!1,null,"4d3399a2",null);t["a"]=d.exports},e9cb:function(e,t,a){}}]);