(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-619b26c0"],{"04fb":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.pageSize,"current-page":e.page},on:{"update:currentPage":function(t){e.page=t},"update:current-page":function(t){e.page=t},"current-change":e.paginationChange,"prev-click":e.prevClick,"next-click":e.nextClick}}),t("div",{staticClass:"pagination-sup"},[e._v(e._s(e.pageSize)+"/"+e._s(e.total))])],1)},i=[],p={props:{total:{type:Number,default:1},pageSize:{type:Number,default:1},current:{type:Number,default:1}},watch:{current:{handler(e){this.newVal!=this.page&&(this.page=e)},immediate:!0}},data(){return{page:1}},methods:{paginationChange(e){this.$emit("paginationChange",this.page)},prevClick(){console.log("上一页"),this.$emit("paginationChange",this.page)},nextClick(){console.log("下一页"),this.$emit("paginationChange",this.page)}}},c=p,g=(a("156a"),a("2877")),o=Object(g["a"])(c,n,i,!1,null,"528ebd70",null);t["default"]=o.exports},"156a":function(e,t,a){"use strict";a("e3a9")},e3a9:function(e,t,a){}}]);