(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5419dae2"],{"2d93":function(t,n,o){"use strict";o.r(n);var a=function(){var t=this,n=t._self._c;return n("loading-button",{attrs:{text:"按钮",loading:t.loading},on:{buttonTap:t.buttonTap}})},e=[],i=function(){var t=this,n=t._self._c;return n("button",{class:["primary-button",t.loading?"loading":""],attrs:{ad_mark:"color backgroundColor"},on:{click:t.tap}},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"icon",attrs:{src:o("c15c"),alt:""}}),n("span",{attrs:{ad_mark:"innerText"}},[t._v(t._s(t.text))])])},s=[],r={props:{loading:{type:Boolean,default:()=>!1},text:{type:String,default:"按 钮"},timeout:{type:Number,default:6e4}},data(){return{adOptions:{color:"",innerText:"",backgroundColor:""}}},methods:{tap(){this.loading||this.$emit("buttonTap")}}},l=r,u=(o("9dd6"),o("2877")),d=Object(u["a"])(l,i,s,!1,null,"38914e8f",null),c=d.exports,p={components:{loadingButton:c},data(){return{loading:!1,adOptions:{color:"",innerText:"",backgroundColor:""}}},methods:{buttonTap(){this.$message.info("buttonTap"),this.loading=!0;let t=setTimeout(()=>{this.loading=!1,this.$message.success("加载完成"),clearTimeout(t)},3e3)}}},g=p,f=Object(u["a"])(g,a,e,!1,null,null,null);n["default"]=f.exports},"2f64":function(t,n,o){},"9dd6":function(t,n,o){"use strict";o("2f64")},c15c:function(t,n,o){t.exports=o.p+"img/loading-white.fb12333a.gif"}}]);