(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-580d6a8a"],{"1c92":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"control-box"},[t._m(1),e("div",{staticClass:"control"},[e("el-form",{staticClass:"form-box",attrs:{model:t.searchData,"label-position":"top"}},[e("el-row",{attrs:{type:"flex"}},[e("el-col",{attrs:{span:5}},[e("el-form-item",{attrs:{label:"名称"}},[e("el-input",{attrs:{placeholder:"请输入"},model:{value:t.searchData.name,callback:function(e){t.$set(t.searchData,"name",e)},expression:"searchData.name"}})],1)],1),e("el-col",{attrs:{span:5,offset:1}},[e("el-form-item",{attrs:{label:"线索渠道"}},[e("el-select",{attrs:{"popper-append-to-body":!1,placeholder:"请选择"},model:{value:t.searchData.channel,callback:function(e){t.$set(t.searchData,"channel",e)},expression:"searchData.channel"}},t._l(t.searchData.channelList,(function(t){return e("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)],1),e("el-col",{attrs:{span:5,offset:1}},[e("el-form-item",{attrs:{label:"活动来源"}},[e("el-select",{attrs:{"popper-append-to-body":!1,placeholder:"请选择"},model:{value:t.searchData.source,callback:function(e){t.$set(t.searchData,"source",e)},expression:"searchData.source"}},t._l(t.searchData.sourceList,(function(t){return e("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)],1),e("el-col",{attrs:{span:5,offset:1}},[e("el-form-item",{attrs:{label:"落地页类型"}},[e("el-select",{attrs:{"popper-append-to-body":!1,placeholder:"请选择"},model:{value:t.searchData.type,callback:function(e){t.$set(t.searchData,"type",e)},expression:"searchData.type"}},t._l(t.searchData.typeList,(function(t){return e("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)],1)],1),e("el-row",{staticStyle:{"margin-top":"30px"},attrs:{type:"flex"}},[e("el-col",{attrs:{span:17}},[e("div")]),e("el-col",{attrs:{span:5,offset:1}},[e("div",{staticClass:"btn-box"},[e("button",{staticClass:"primary-button",on:{click:function(e){return e.stopPropagation(),t.onSearch.apply(null,arguments)}}},[e("i",{staticClass:"Audi-Dash Audi-Dashsearch icon"}),e("span",[t._v("查询")])]),e("button",{staticClass:"plain-button",on:{click:function(e){return e.stopPropagation(),t.onReset.apply(null,arguments)}}},[t._v(" 重置 ")])])])],1)],1)],1)]),e("div",{staticClass:"table-box"},[e("div",{staticClass:"table-head"},[t._m(2),e("div",{staticClass:"right"},[e("div",{staticClass:"head-pagination"},[e("el-pagination",{attrs:{background:"",layout:"total, slot, prev, pager, next",total:t.total,"current-page":t.currentPage},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"current-change":t.paginationChange,"prev-click":t.prevClick,"next-click":t.nextClick}},[t.showLimitIcon?e("el-tooltip",{key:"1",staticClass:"info-tooltip",staticStyle:{margin:"7px 12px 0 -6px"},attrs:{effect:"dark",content:"查询结果已超过上限，仅展示最近交车的3000条信息！",placement:"top"}},[e("img",{attrs:{width:"15px",height:"15px",src:a("4d0d"),alt:""}})]):t._e()],1)],1),e("button",{class:["plain-button",t.multipleSelection.length>1?"":"disabled"],attrs:{disabled:t.multipleSelection.length<=1},on:{click:function(e){return t.handleClick(null,4)}}},[e("span",[t._v("批量删除")])]),e("button",{class:["plain-button",t.multipleSelection.length>1?"":"disabled"],attrs:{disabled:t.multipleSelection.length<=1},on:{click:function(e){return t.handleClick(null,5)}}},[e("span",[t._v("批量失效")])]),t._m(3)])]),e("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:!1,stripe:"","header-cell-style":{backgroundColor:"#EEF0F3",color:"#666666"}},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),t._l(t.columnData,(function(a){return e("el-table-column",{key:a.id,attrs:{fixed:a.fixed,prop:a.prop,label:a.label,"show-overflow-tooltip":a.tooltip,"min-width":a.minWidth,width:a.width,align:a.align,"header-align":a.headerAlign},scopedSlots:t._u([{key:"default",fn:function(e){return[[t._v(t._s(e.row[a.prop]))]]}}],null,!0)})})),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"edit-cell"},[e("div",{class:["item copy",a.row.shortLink?"":"disabled"],on:{click:function(e){return t.handleClick(a.row,1)}}},[e("i",{staticClass:"Audi-Dash Audi-Dashsplit icon"})]),e("div",{class:["item expire",a.row.shortLink?"disabled":""],on:{click:function(e){return t.handleClick(a.row,2)}}},[e("span",[t._v("失效")])]),e("div",{staticClass:"item del",on:{click:function(e){return t.handleClick(a.row,3)}}},[e("span",[t._v("删除")])])])]}}])})],2),e("div",{staticClass:"table-foot"},[e("el-pagination",{attrs:{background:"",layout:"total, slot, prev, pager, next",total:t.total,"current-page":t.currentPage},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"current-change":t.paginationChange,"prev-click":t.prevClick,"next-click":t.nextClick}},[t.showLimitIcon?e("el-tooltip",{key:"1",staticClass:"info-tooltip",staticStyle:{margin:"7px 12px 0 -6px"},attrs:{effect:"dark",content:"查询结果已超过上限，仅展示最近交车的3000条信息！",placement:"top"}},[e("img",{attrs:{width:"15px",height:"15px",src:a("4d0d"),alt:""}})]):t._e()],1)],1)],1)])},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"tabs"},[e("div",[t._v("落地页管理")]),t._v(" / "),e("div",{staticClass:"active"},[t._v("总部落地页查询")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"control-title"},[e("div",{staticClass:"border"}),t._v("搜索 ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"left"},[e("div",{staticClass:"border"}),t._v(" 卡券列表 ")])},function(){var t=this,e=t._self._c;return e("button",{staticClass:"primary-button"},[e("i",{staticClass:"Audi-Dash Audi-Dashfile-pdf icon"}),e("span",[t._v("导出")])])}],i={data(){return{searchData:{name:"",channel:"",channelList:["渠道1","渠道2","渠道3"],source:"",sourceList:["来源1","来源2","来源3"],type:"",typeList:["类型1","类型2","类型3"]},multipleSelection:[],currentPage:1,pageSize:10,total:3006,showLimitIcon:!0,columnData:[{prop:"username",minWidth:"150px",tooltip:!0,label:"名称",align:"center",headerAlign:"center"},{prop:"channel",minWidth:"150px",tooltip:!0,label:"渠道",align:"center",headerAlign:"center"},{prop:"activity",minWidth:"150px",tooltip:!0,label:"活动",align:"center",headerAlign:"center"},{prop:"type",tooltip:!0,minWidth:"120px",label:"落地页类型",align:"center",headerAlign:"center"},{prop:"downloadPath",tooltip:!0,minWidth:"180px",label:"下载URL",align:"center",headerAlign:"center"},{prop:"shortLink",minWidth:"180px",tooltip:!0,label:"短链",align:"center",headerAlign:"center"},{prop:"other",tooltip:!0,label:"其他内容",align:"center",headerAlign:"center"}],tableData:[{id:11,channel:"渠道131564891561",activity:"140561***15616",type:"保养券",username:"车主/享权人姓名",downloadPath:"https://www.downloadfile",shortLink:"C05146JKSKDkasf15616",other:"xxxxxxxxxxxxxxxxxxxxx"},{id:12,channel:"渠道131564891561",activity:"140561***15616",type:"保养券",username:"车主/享权人姓名",downloadPath:"https://www.downloadfile",shortLink:"C05146JKSKDkasf15616",other:"xxxxxxxxxxxxxxxxxxxxx"},{id:13,channel:"渠道131564891561",activity:"140561***15616",type:"保养券",username:"车主/享权人姓名",downloadPath:"https://www.downloadfile",shortLink:"",other:"xxxxxxxxxxxxxxxxxxxxx"},{id:14,channel:"渠道131564891561",activity:"140561***15616",type:"保养券",username:"车主/享权人姓名",downloadPath:"https://www.downloadfile",shortLink:"C05146JKSKDkasf15616",other:"xxxxxxxxxxxxxxxxxxxxx"},{id:15,channel:"渠道131564891561",activity:"140561***15616",type:"保养券",username:"车主/享权人姓名",downloadPath:"https://www.downloadfile",shortLink:"C05146JKSKDkasf15616",other:"xxxxxxxxxxxxxxxxxxxxx"},{id:16,channel:"渠道131564891561",activity:"140561***15616",type:"保养券",username:"车主/享权人姓名",downloadPath:"https://www.downloadfile",shortLink:"C05146JKSKDkasf15616",other:"xxxxxxxxxxxxxxxxxxxxx"},{id:17,channel:"渠道131564891561",activity:"140561***15616",type:"保养券",username:"车主/享权人姓名",downloadPath:"https://www.downloadfile",shortLink:"C05146JKSKDkasf15616",other:"xxxxxxxxxxxxxxxxxxxxx"},{id:18,channel:"渠道131564891561",activity:"140561***15616",type:"保养券",username:"车主/享权人姓名",downloadPath:"https://www.downloadfile",shortLink:"C05146JKSKDkasf15616",other:"xxxxxxxxxxxxxxxxxxxxx"}]}},beforeCreate(){document.title="落地页"},methods:{onSearch(){this.$message.info("搜索")},onReset(){const t={};Object.keys(this.searchData).map(e=>{t[e]=""}),this.searchData=t,this.$message.info("重置")},handleClick(t,e){if(1==e){const e=t.shortLink;if(!e)return;const a=document.createElement("textarea");a.readOnly="readonly",a.style.position="absolute",a.style.left="-9999px",a.value=e,document.body.appendChild(a),a.select(),a.setSelectionRange(0,a.value.length),document.execCommand("Copy"),document.body.removeChild(a),this.$message.success("短链已复制")}else if(2==e){const e=t.shortLink;if(e)return}else 3==e?this.$confirm("确定删除该数据?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$message({type:"success",message:"删除成功!"})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})}):4==e&&this.$confirm("确定删除选中的全部数据?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$message({type:"success",message:"删除成功!"})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})});console.log(t,e)},handleSelectionChange(t){this.multipleSelection=t},paginationChange(t){console.log("current改变",t)},prevClick(){console.log("上一页")},nextClick(){console.log("下一页")}}},o=i,s=(a("3d51"),a("2877")),c=Object(s["a"])(o,n,l,!1,null,"e2cd721c",null);e["default"]=c.exports},"3d51":function(t,e,a){"use strict";a("9f1a")},"4d0d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANGSURBVHgBxVddbtpAEJ5de0koSQU3ICcoSA3hreQESU+Q5AThBpgbJCdoOEHoCeAxpZWaniDcANqAnOCf6YyNf3BsYiKhfJKl9Xp3vpnZ2ZkxwDtBwIZ41JstTTifhJC1YM5B+CvBfXAQ/+zbv4Z55OQinkCzqhS2AfFMCFFetxYRp7Smv7BEtwJ34zcRT6BV3lFmBwHa8DbcZCkgskkPawUlb2lYDebYGgR5TcOhrsO4+OQLxHKrPJs91YTAUxJ4Et9DGBP5cZJcZJEqXQxibh27KC727bsh5MBMNc8FYCemACnsHu9ZP++DNfIlKZ1njJTcfP2hVKznJWXsWXfk4ue6i3C9nCoLkIOZOgwDUiRJCwoHoaYCu6XFyEgTzuevlOl9s6yiUYHhNG0d3QJDCs96Brm9WOe1KxYr5RoBKVuaRcrQddMgrS/5CRRIA3nKiFle3VFzTwkZt1aAOAs0K5WKmcI2hW0/GyyTxxScbebSg4++tb7nJQhDTNNdFxem1I439pRcs7oC99NHbF6Qywc+F7bDM56rxoSIOaDGJevHAWwBMQ7/jDkNLif4bL+/JoBdNVdHD/QgP6ZqnEEOuCjDKPeI6eKHYY7o9F8ToGkur6+GAkG0IB+GwUD6ZJEQ2967f233R2fUdxG7sCE4260Qk8Vh4s+6j0ns29lXLQtBig2J3wMviM3dZhW2hAnUygliEZ6rbdtV2BJ0fbe2QowYEUspW7A14OkKsV950A8qFJewJUjh1WpGVCSo3vaWw/Kj/rm1ToBZaHTMwtG32FSL3/9pjdOsPVQSzyG6+/0wZXJQuQ4+LF/D8pUUwMI1KW4z5E8p3VaSk1xCC8r8HRBLTRyEFvMdSytfSTjOYggQJYI4KN320ua5b4PI2hvmSjQCNdJsJ9JMoFFcjDbOUHHM9WaHGgpj+Toma49fEDO4PaG6PAiKhgD36tkqdfNmtMiI1Q6VG0VNl/Uge6U2e0lyT1Mg661RLw8pVzvyFgdfNSAlq1eavcz2dhlsUf+1VIDLJlcwLiaBF3itbUNVl+4Xx4V2oumnPe7XOOla4kCg47hGrCXaCF7fRt1JWjeT6xcmUIAkneT5haFy19M0cRWvRkn8BwjWfbDCAc7FAAAAAElFTkSuQmCC"},"9f1a":function(t,e,a){}}]);