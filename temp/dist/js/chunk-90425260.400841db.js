(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90425260"],{"663e":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;return t("audiSwitch",{attrs:{value:e.value2,openLoading:!0,isLoading:!0,showText:!0,disabled:!0,id:"value2"},on:{changeSwitch:e.changeSwitch}})},s=[],n=i("fd8f"),o={components:{audiSwitch:n["a"]},data(){return{value2:!0,isLoading:!1}},methods:{changeSwitch(e,t,i){this.isLoading=!this.isLoading;let a=setTimeout(()=>{this[t]=e,this.isLoading=!this.isLoading,clearTimeout(a)},2e3)}}},d=o,l=i("2877"),c=Object(l["a"])(d,a,s,!1,null,null,null);t["default"]=c.exports},"8d17":function(e,t,i){},bed3:function(e,t,i){"use strict";i("8d17")},fd8f:function(e,t,i){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"audi-switch",on:{click:function(t){return t.stopPropagation(),e.toggle.apply(null,arguments)}}},[t("div",{class:{slider:!0,"slider-on":e.me_checked,disabled:e.disabled,loading:e.openLoading&&e.isLoading},style:e.cssVars,attrs:{value:e.value}}),e.showText&&e.value?t("div",{staticClass:"before"},[e._v("开")]):e._e(),e.showText&&!e.value?t("div",{staticClass:"after"},[e._v("关")]):e._e()])},s=[],n={props:{value:{type:Boolean,default:!0,required:!0},id:{type:String|Number,default:""},index:{type:String|Number,default:1},openLoading:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},showText:{type:Boolean,default:!1},activeBackground:{type:String,default:"#F50537"},closeBackground:{type:String,default:"#CCCCCC"}},data(){return{me_checked:this.value}},watch:{value(){this.me_checked=this.value}},computed:{cssVars(){return{"--active-color":this.activeBackground,"--close-color":this.closeBackground}}},methods:{toggle(){if(this.disabled)return;const e=!this.me_checked;this.$emit("changeSwitch",e,this.id,this.index),this.openLoading||(this.me_checked=e)}}},o=n,d=(i("bed3"),i("2877")),l=Object(d["a"])(o,a,s,!1,null,"6a04ddcb",null);t["a"]=l.exports}}]);