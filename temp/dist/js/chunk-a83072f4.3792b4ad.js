(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a83072f4"],{"87d6":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t._self._c;return t.show?s("div",{staticClass:"dialog-root"},[s("div",{staticClass:"dialog-view"},[s("div",{staticClass:"dialog-title"},[t._v("出错了")]),s("div",{staticClass:"dialog-content"},[t._v(t._s(t.content))]),s("div",{staticClass:"dialog-foot"},[s("div",{staticClass:"dialog-confirm",on:{click:t.confirm}},[t._v(" 我知道了"+t._s(t.number?`(${t.number}s)`:"")+" ")])])])]):t._e()},e=[],n={props:{dialogShow:{value:Boolean,default:()=>!1}},data(){return{show:!1,Interval:null,number:60,content:"弹窗内容弹窗内容弹窗内容弹窗内"}},watch:{dialogShow:{handler(t){this.show=t,t&&this.countDown()},immediate:!0}},beforeDestroy(){this.Interval&&clearInterval(this.Interval)},methods:{countDown(){this.Interval&&clearInterval(this.Interval),this.number=60,this.Interval=setInterval(()=>{this.number=this.number-1,this.number<=0&&(this.show=!1,clearInterval(this.Interval))},1e3)},close(){this.show=!1,this.$emit("close")},confirm(){this.show=!1,this.$emit("confirm")}}},o=n,l=(i("9786"),i("2877")),r=Object(l["a"])(o,a,e,!1,null,"9dd93e0a",null);s["default"]=r.exports},9786:function(t,s,i){"use strict";i("afaf")},afaf:function(t,s,i){}}]);