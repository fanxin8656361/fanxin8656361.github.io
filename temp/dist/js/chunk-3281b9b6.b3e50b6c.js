(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3281b9b6","chunk-2706c93f"],{1129:function(e,t,i){"use strict";i("8971")},1582:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"table-box"},[t("div",{staticClass:"table-head"},[t("div",{staticClass:"right"},[t("div",{staticClass:"head-pagination"},[t("el-pagination",{attrs:{background:"",layout:"total, slot, prev, pager, next",total:e.total,"current-page":e.currentPage},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"current-change":e.paginationChange,"prev-click":e.prevClick,"next-click":e.nextClick}},[e.showLimitIcon?t("el-tooltip",{key:"1",staticClass:"info-tooltip",staticStyle:{margin:"9px 12px 0 -6px"},attrs:{effect:"dark",content:"查询结果已超过上限，仅展示最近交车的3000条信息！",placement:"top"}},[t("img",{attrs:{width:"15px",height:"15px",src:i("4d0d"),alt:""}})]):e._e()],1)],1),e._m(0)])]),t("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:!1,stripe:"","header-cell-style":{backgroundColor:"#EEF0F3",color:"#666666"}},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._l(e.columnData,(function(i){return t("el-table-column",{key:i.id,attrs:{fixed:i.fixed,prop:i.prop,label:i.label,"show-overflow-tooltip":i.tooltip,"min-width":i.minWidth,width:i.width,align:i.align,"header-align":i.headerAlign},scopedSlots:e._u([{key:"default",fn:function(n){return["username"==i.prop?[e._v(e._s(n.row.show?n.row[i.prop]:n.row[i.prop].charAt(0)+"**")+" ")]:"buyType"==i.prop?[t("div",{class:["buy-type","公司"==n.row[i.prop]?"blue":"red"]},[e._v(" "+e._s(n.row[i.prop])+" ")])]:[e._v(e._s(n.row[i.prop])+" ")]]}}],null,!0)})})),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"136",align:"center"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("div",{staticClass:"edit-cell"},[t("div",{class:["item check",i.row.shortLink?"disabled":""],on:{click:function(t){return e.handleClick(i.row,2)}}},[t("span",[e._v(e._s(i.row.show?"查看":"上传"))])]),t("div",{staticClass:"item pick",on:{click:function(t){return e.handleClick(i.row,3)}}},[t("span",[e._v(e._s("是"==i.row.pick?"自提":"邮寄"))])])])]}}])})],2),t("div",{staticClass:"table-foot"},[t("el-pagination",{attrs:{background:"",layout:"total, slot, prev, pager, next",total:e.total,"current-page":e.currentPage},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"current-change":e.paginationChange,"prev-click":e.prevClick,"next-click":e.nextClick}},[e.showLimitIcon?t("el-tooltip",{key:"1",staticClass:"info-tooltip",staticStyle:{margin:"9px 12px 0 -6px"},attrs:{effect:"dark",content:"查询结果已超过上限，仅展示最近交车的3000条信息！",placement:"top"}},[t("img",{attrs:{width:"15px",height:"15px",src:i("4d0d"),alt:""}})]):e._e()],1)],1)],1)},a=[function(){var e=this,t=e._self._c;return t("button",{staticClass:"primary-button"},[t("i",{staticClass:"Audi-Dash Audi-Dashfile-pdf icon"}),t("span",[e._v("导出")])])}],o={data(){return{multipleSelection:[],currentPage:1,pageSize:10,total:3006,showLimitIcon:!0,columnData:[{prop:"orderNo",minWidth:"150px",tooltip:!0,label:"订单编号",align:"center",headerAlign:"center"},{prop:"VIN",minWidth:"150px",tooltip:!0,label:"VIN码",align:"center",headerAlign:"center"},{prop:"username",minWidth:"150px",tooltip:!0,label:"车主/享权人姓名",align:"center",headerAlign:"center"},{prop:"enterpriseName",tooltip:!0,minWidth:"150px",label:"企业名称",align:"center",headerAlign:"center"},{prop:"buyType",tooltip:!0,minWidth:"120px",label:"购买类型",align:"center",headerAlign:"center"},{prop:"agentName",minWidth:"180px",tooltip:!0,label:"代理商名称",align:"center",headerAlign:"center"},{prop:"invoiceNumber",minWidth:"180px",tooltip:!0,label:"发票号码",align:"center",headerAlign:"center"},{prop:"invoiceStatus",minWidth:"120px",tooltip:!0,label:"发票状态",align:"center",headerAlign:"center"},{prop:"pick",tooltip:!0,label:"自提",align:"center",headerAlign:"center"},{prop:"waybillNo",minWidth:"180px",tooltip:!0,label:"运单号",align:"center",headerAlign:"center"}],tableData:[{id:11,orderNo:"D76N99AN000113",VIN:"LSVD76N99AN000113",username:"冯新玲",enterpriseName:"北京在线创想有限公司",buyType:"个人",agentName:"上海大宁代理商商店",invoiceNumber:"837586923203025",invoiceStatus:"已上传",pick:"否",waybillNo:"SF183758692320302",show:!1},{id:12,orderNo:"D76N99AN000113",VIN:"LSVD76N99AN000113",username:"冯新玲",enterpriseName:"北京在线创想有限公司",buyType:"个人",agentName:"上海大宁代理商商店",invoiceNumber:"837586923203025",invoiceStatus:"已上传",pick:"是",waybillNo:"-",show:!1},{id:13,orderNo:"D76N99AN000113",VIN:"LSVD76N99AN000113",username:"吴xx",enterpriseName:"北京在线创想有限公司",buyType:"公司",agentName:"上海大宁代理商商店",invoiceNumber:"837586923203025",invoiceStatus:"已上传",pick:"否",waybillNo:"-",show:!1},{id:14,orderNo:"D76N99AN000113",VIN:"LSVD76N99AN000113",username:"吴新玲",enterpriseName:"北京在线创想有限公司",buyType:"个人",agentName:"上海大宁代理商商店",invoiceNumber:"837586923203025",invoiceStatus:"已上传",pick:"是",waybillNo:"SF183758692320302",show:!1},{id:15,orderNo:"D76N99AN000113",VIN:"LSVD76N99AN000113",username:"吴新玲",enterpriseName:"北京在线创想有限公司",buyType:"公司",agentName:"上海大宁代理商商店",invoiceNumber:"837586923203025",invoiceStatus:"已上传",pick:"是",waybillNo:"-",show:!1},{id:16,orderNo:"D76N99AN000113",VIN:"LSVD76N99AN000113",username:"吴新玲",enterpriseName:"北京在线创想有限公司",buyType:"个人",agentName:"上海大宁代理商商店",invoiceNumber:"837586923203025",invoiceStatus:"已上传",pick:"否",waybillNo:"-",show:!1},{id:17,orderNo:"D76N99AN000113",VIN:"LSVD76N99AN000113",username:"吴新玲",enterpriseName:"北京在线创想有限公司",buyType:"公司",agentName:"上海大宁代理商商店",invoiceNumber:"837586923203025",invoiceStatus:"已上传",pick:"否",waybillNo:"-",show:!1}]}},methods:{handleClick(e,t){1==t||2==t&&(e.show?console.log("查看"):console.log("上传")),console.log(e,t)},handleSelectionChange(e){this.multipleSelection=e},paginationChange(e){console.log("current改变",e)},prevClick(){console.log("上一页")},nextClick(){console.log("下一页")}}},l=o,r=(i("1129"),i("2877")),c=Object(r["a"])(l,n,a,!1,null,"239d643e",null);t["default"]=c.exports},"4d0d":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANGSURBVHgBxVddbtpAEJ5de0koSQU3ICcoSA3hreQESU+Q5AThBpgbJCdoOEHoCeAxpZWaniDcANqAnOCf6YyNf3BsYiKhfJKl9Xp3vpnZ2ZkxwDtBwIZ41JstTTifhJC1YM5B+CvBfXAQ/+zbv4Z55OQinkCzqhS2AfFMCFFetxYRp7Smv7BEtwJ34zcRT6BV3lFmBwHa8DbcZCkgskkPawUlb2lYDebYGgR5TcOhrsO4+OQLxHKrPJs91YTAUxJ4Et9DGBP5cZJcZJEqXQxibh27KC727bsh5MBMNc8FYCemACnsHu9ZP++DNfIlKZ1njJTcfP2hVKznJWXsWXfk4ue6i3C9nCoLkIOZOgwDUiRJCwoHoaYCu6XFyEgTzuevlOl9s6yiUYHhNG0d3QJDCs96Brm9WOe1KxYr5RoBKVuaRcrQddMgrS/5CRRIA3nKiFle3VFzTwkZt1aAOAs0K5WKmcI2hW0/GyyTxxScbebSg4++tb7nJQhDTNNdFxem1I439pRcs7oC99NHbF6Qywc+F7bDM56rxoSIOaDGJevHAWwBMQ7/jDkNLif4bL+/JoBdNVdHD/QgP6ZqnEEOuCjDKPeI6eKHYY7o9F8ToGkur6+GAkG0IB+GwUD6ZJEQ2967f233R2fUdxG7sCE4260Qk8Vh4s+6j0ns29lXLQtBig2J3wMviM3dZhW2hAnUygliEZ6rbdtV2BJ0fbe2QowYEUspW7A14OkKsV950A8qFJewJUjh1WpGVCSo3vaWw/Kj/rm1ToBZaHTMwtG32FSL3/9pjdOsPVQSzyG6+/0wZXJQuQ4+LF/D8pUUwMI1KW4z5E8p3VaSk1xCC8r8HRBLTRyEFvMdSytfSTjOYggQJYI4KN320ua5b4PI2hvmSjQCNdJsJ9JMoFFcjDbOUHHM9WaHGgpj+Toma49fEDO4PaG6PAiKhgD36tkqdfNmtMiI1Q6VG0VNl/Uge6U2e0lyT1Mg661RLw8pVzvyFgdfNSAlq1eavcz2dhlsUf+1VIDLJlcwLiaBF3itbUNVl+4Xx4V2oumnPe7XOOla4kCg47hGrCXaCF7fRt1JWjeT6xcmUIAkneT5haFy19M0cRWvRkn8BwjWfbDCAc7FAAAAAElFTkSuQmCC"},8971:function(e,t,i){}}]);