(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-375fea37"],{4368:function(e,t,a){},"4d0d":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANGSURBVHgBxVddbtpAEJ5de0koSQU3ICcoSA3hreQESU+Q5AThBpgbJCdoOEHoCeAxpZWaniDcANqAnOCf6YyNf3BsYiKhfJKl9Xp3vpnZ2ZkxwDtBwIZ41JstTTifhJC1YM5B+CvBfXAQ/+zbv4Z55OQinkCzqhS2AfFMCFFetxYRp7Smv7BEtwJ34zcRT6BV3lFmBwHa8DbcZCkgskkPawUlb2lYDebYGgR5TcOhrsO4+OQLxHKrPJs91YTAUxJ4Et9DGBP5cZJcZJEqXQxibh27KC727bsh5MBMNc8FYCemACnsHu9ZP++DNfIlKZ1njJTcfP2hVKznJWXsWXfk4ue6i3C9nCoLkIOZOgwDUiRJCwoHoaYCu6XFyEgTzuevlOl9s6yiUYHhNG0d3QJDCs96Brm9WOe1KxYr5RoBKVuaRcrQddMgrS/5CRRIA3nKiFle3VFzTwkZt1aAOAs0K5WKmcI2hW0/GyyTxxScbebSg4++tb7nJQhDTNNdFxem1I439pRcs7oC99NHbF6Qywc+F7bDM56rxoSIOaDGJevHAWwBMQ7/jDkNLif4bL+/JoBdNVdHD/QgP6ZqnEEOuCjDKPeI6eKHYY7o9F8ToGkur6+GAkG0IB+GwUD6ZJEQ2967f233R2fUdxG7sCE4260Qk8Vh4s+6j0ns29lXLQtBig2J3wMviM3dZhW2hAnUygliEZ6rbdtV2BJ0fbe2QowYEUspW7A14OkKsV950A8qFJewJUjh1WpGVCSo3vaWw/Kj/rm1ToBZaHTMwtG32FSL3/9pjdOsPVQSzyG6+/0wZXJQuQ4+LF/D8pUUwMI1KW4z5E8p3VaSk1xCC8r8HRBLTRyEFvMdSytfSTjOYggQJYI4KN320ua5b4PI2hvmSjQCNdJsJ9JMoFFcjDbOUHHM9WaHGgpj+Toma49fEDO4PaG6PAiKhgD36tkqdfNmtMiI1Q6VG0VNl/Uge6U2e0lyT1Mg661RLw8pVzvyFgdfNSAlq1eavcz2dhlsUf+1VIDLJlcwLiaBF3itbUNVl+4Xx4V2oumnPe7XOOla4kCg47hGrCXaCF7fRt1JWjeT6xcmUIAkneT5haFy19M0cRWvRkn8BwjWfbDCAc7FAAAAAElFTkSuQmCC"},baa6:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[e._m(0),t("div",{staticClass:"content search-box"},[t("div",{staticClass:"title-box"},[t("div",{staticClass:"border"}),e._v(" 搜索 "),t("i",{class:`Audi-Dash Audi-Dash${e.sideOpen?"upside":"downside"} arrow`,on:{click:function(t){e.sideOpen=!e.sideOpen}}})]),t("el-form",{staticClass:"form-box",style:e.sideOpen?"display: block":"display: none",attrs:{"label-position":"top"}},[t("el-row",{attrs:{type:"flex"}},[t("el-col",{attrs:{span:5}},[t("el-form-item",{attrs:{label:"订单号"}},[t("el-input",{attrs:{placeholder:"请输入"},model:{value:e.searchInfo.orderId,callback:function(t){e.$set(e.searchInfo,"orderId",t)},expression:"searchInfo.orderId"}})],1)],1),t("el-col",{attrs:{span:5,offset:1}},[t("el-form-item",{attrs:{label:"IDPID"}},[t("el-input",{attrs:{placeholder:"请输入"},model:{value:e.searchInfo.IDPID,callback:function(t){e.$set(e.searchInfo,"IDPID",t)},expression:"searchInfo.IDPID"}})],1)],1),t("el-col",{attrs:{span:5,offset:1}},[t("el-form-item",{attrs:{label:"姓名"}},[t("el-input",{attrs:{placeholder:"请输入"},model:{value:e.searchInfo.name,callback:function(t){e.$set(e.searchInfo,"name",t)},expression:"searchInfo.name"}})],1)],1),t("el-col",{attrs:{span:5,offset:1}},[t("el-form-item",{attrs:{label:"联系方式"}},[t("el-input",{attrs:{placeholder:"请输入"},model:{value:e.searchInfo.phone,callback:function(t){e.$set(e.searchInfo,"phone",t)},expression:"searchInfo.phone"}})],1)],1)],1),t("el-row",{attrs:{type:"flex"}},[t("el-col",{attrs:{span:5}},[t("el-form-item",{attrs:{label:"服务商"}},[t("el-select",{attrs:{"popper-append-to-body":!1,placeholder:"请选择"},model:{value:e.searchInfo.service,callback:function(t){e.$set(e.searchInfo,"service",t)},expression:"searchInfo.service"}},e._l(e.searchInfo.serviceList,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),t("el-col",{attrs:{span:5,offset:1}},[t("el-form-item",{attrs:{label:"状态"}},[t("el-select",{attrs:{"popper-append-to-body":!1,placeholder:"请选择"},model:{value:e.searchInfo.status,callback:function(t){e.$set(e.searchInfo,"status",t)},expression:"searchInfo.status"}},e._l(e.searchInfo.statusList,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),t("el-col",{attrs:{span:5,offset:1}},[t("el-form-item",{attrs:{label:"下单时间"}},[t("el-select",{attrs:{"popper-append-to-body":!1,placeholder:"请选择"},model:{value:e.searchInfo.orderTime,callback:function(t){e.$set(e.searchInfo,"orderTime",t)},expression:"searchInfo.orderTime"}},e._l(e.searchInfo.orderTimeList,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),t("el-col",{attrs:{span:5,offset:1}},[t("el-form-item",{staticClass:"date-picker",attrs:{label:"预约时间"}},[t("el-date-picker",{attrs:{type:"daterange","range-separator":"─","start-placeholder":"开始日期","append-to-body":!1,disabled:!1,"prefix-icon":"el-icon-date","clear-icon":"el-icon-close","end-placeholder":"结束日期"},model:{value:e.searchInfo.appointment,callback:function(t){e.$set(e.searchInfo,"appointment",t)},expression:"searchInfo.appointment"}})],1)],1)],1),t("el-row",{attrs:{type:"flex"}},[t("el-col",{attrs:{span:5}},[t("el-form-item",{attrs:{label:"VIN码"}},[t("el-input",{attrs:{placeholder:"请输入"},model:{value:e.searchInfo.VIN,callback:function(t){e.$set(e.searchInfo,"VIN",t)},expression:"searchInfo.VIN"}})],1)],1),t("el-col",{attrs:{span:5,offset:13}},[t("el-form-item",{attrs:{label:"."}},[t("div",{staticClass:"control-box"},[t("button",{staticClass:"primary-button",on:{click:function(t){return t.stopPropagation(),e.onSearch.apply(null,arguments)}}},[t("i",{staticClass:"Audi-Dash Audi-Dashsearch icon"}),t("span",[e._v("搜索")])]),t("button",{staticClass:"plain-button",on:{click:function(t){return t.stopPropagation(),e.onReset.apply(null,arguments)}}},[e._v(" 重置 ")])])])],1)],1)],1)],1),t("div",{staticClass:"content order-box"},[e._m(1),t("div",{staticClass:"table-box"},[t("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:!1,stripe:"","header-cell-style":{backgroundColor:"#EEF0F3",color:"#666666"}}},[e._l(e.columnData,(function(a){return t("el-table-column",{key:a.id,attrs:{fixed:a.fixed,prop:a.prop,label:a.label,"show-overflow-tooltip":a.tooltip,"min-width":a.minWidth,width:a.width,align:a.align,"header-align":a.headerAlign},scopedSlots:e._u([{key:"default",fn:function(t){return[[e._v(e._s(t.row[a.prop]))]]}}],null,!0)})})),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",{staticClass:"clickable",on:{click:function(t){return e.handleClick(a.row)}}},[t("span",[e._v("下单")])])]}}])})],2),t("div",{staticClass:"table-foot"},[t("el-pagination",{attrs:{background:"",layout:"total, slot, prev, pager, next",total:e.total,"current-page":e.currentPage},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"current-change":e.paginationChange,"prev-click":e.prevClick,"next-click":e.nextClick}},[e.showLimitIcon?t("el-tooltip",{key:"1",staticClass:"info-tooltip",staticStyle:{margin:"9px 12px 0 -6px"},attrs:{effect:"dark",content:"查询结果已超过上限，仅展示最近交车的3000条信息！",placement:"top"}},[t("img",{attrs:{width:"15px",height:"15px",src:a("4d0d"),alt:""}})]):e._e()],1)],1)],1)])])},l=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"tabs"},[t("div",[e._v("用户")]),e._v(" / "),t("div",{staticClass:"active"},[e._v("用户列表")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"title-box"},[t("div",{staticClass:"border"}),e._v(" 订单 ")])}],o={data(){return{sideOpen:!0,total:1003,currentPage:0,showLimitIcon:!0,searchInfo:{orderId:"",IDPID:"",name:"",phone:"",service:"",status:"",orderTime:"",appointment:"",VIN:"",serviceList:["服务商1","服务商2","服务商3","服务商4","服务商5"],statusList:["状态1","状态2"],orderTimeList:["2023-1-5","2023-1-6","2023-1-7"]},columnData:[{prop:"orderId",minWidth:"100px",tooltip:!0,label:"订单号",align:"center",headerAlign:"center"},{prop:"IDPID",minWidth:"100px",tooltip:!0,label:"IDPID",align:"center",headerAlign:"center"},{prop:"name",minWidth:"70px",label:"姓名",align:"center",headerAlign:"center"},{prop:"phone",minWidth:"100px",label:"联系方式",align:"center",headerAlign:"center"},{prop:"service",minWidth:"80px",tooltip:!0,label:"服务商",align:"center",headerAlign:"center"},{prop:"appointment",minWidth:"160px",label:"预约时间",align:"center",headerAlign:"center"},{prop:"VIN",minWidth:"100px",label:"VIN码",align:"center",headerAlign:"center"},{prop:"serviceType",minWidth:"80px",label:"服务类型",align:"center",headerAlign:"center"},{prop:"orderTime",minWidth:"150px",label:"下单时间",align:"center",headerAlign:"center"},{prop:"status",minWidth:"60px",label:"状态",align:"center",headerAlign:"center"}],tableData:[{id:11,orderId:"145615616156161",IDPID:"18916510610610",name:"黎明",phone:"13555669988",service:"服务商1",appointment:"2023-03-40 02:30:30 - 2023-03-40 02:30:30",VIN:"4816153153",serviceType:"服务类型1",orderTime:"2023-03-40 02:30:30",status:"状态1"},{id:12,orderId:"145615616156161",IDPID:"18916510610610",name:"张学友",phone:"13555669988",service:"服务商1",appointment:"2023-03-40 02:30:30 - 2023-03-40 02:30:30",VIN:"4816153153",serviceType:"服务类型1",orderTime:"2023-03-40 02:30:30",status:"状态1"}]}},methods:{onSearch(){this.$message.info("搜索")},onReset(){const e={};Object.keys(this.searchInfo).map(t=>{e[t]=""}),this.searchInfo=e,this.$message.info("重置")},paginationChange(e){console.log("current改变",e)},prevClick(){console.log("上一页")},nextClick(){console.log("下一页")}}},r=o,s=(a("e506"),a("2877")),i=Object(s["a"])(r,n,l,!1,null,"a1dd7184",null);t["default"]=i.exports},e506:function(e,t,a){"use strict";a("4368")}}]);