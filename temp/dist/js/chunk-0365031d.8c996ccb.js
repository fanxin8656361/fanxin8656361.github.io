(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0365031d"],{"238e":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOxSURBVHgBxVdNTBNBFH5vtltaGpJy1JhYD3KUYmLgRGuiF0n8i4ke/E08kaAYD8ZEFEK8aSyacMKIcNEToMGLJgInCBHBIxxcE6NHmvBXuuyu84a07LYz2+Uvfkm7sztv3vdm5v3MIATEIqTjmrZyXtdYynYg6ThOAhHj1MfbWd42eHOWgTOWM6tHamEsG0QvViZuSui6085ZbhQIA6I/b2JXLUwasBMDaMZV+toTB6AddgEEO7NuxrpUK4Jy8qZEWHe+8mYC9gYGX42TstVg5eQnkntMThATWtZPJEs70Eu+5zMvRdlK4BZ5Oh7W1777kWO8BrRrZ4A1Hwetvg4wcUB8t+cWwDb+gP1xAjYGRqGyEdGGgk8UDVjVG1/4OZx2NgXhvkfCCD84v/6C2d3nawg5ZrU5fW+zDcWl/6kaEH7eDqG2K7AdkBH0U4FvxRHaCuGEum53qgT1jtvbJi+M05+pI1jkFg5chCTf+6pFmZB2rQWqXnd4vjnZJdh49R6s8RmwJ2bENzx2FPQ7VyB0vaVMx/qlB2B9GJepz3JfOII8NG4isDcyiej8EBQcTZDz/c2dahVPGfDwAYh87vWO4Qbn6i6KZyks277FtwDTMmU0e7cigh950cDTrR6yzchpkcprjKXIB+plnaFzKc87ebUfudsI2iI3WHODSjrJUBH37LB39ubLdxAU5B9uaMk6hSQmcEVvdGRd1flJz/tquAm2g6DjGfxnMPJTWYdjePeb0m9gpfXeJbfn5lWiWcbX35D12D8WPO9aKrgBobbLXl2GynkdkQnnZF3W+LcypVjimDKQTGlCoiKlkJ5ltu2MybqswdGyeI586fU1opCI3BBhqShMDHCMWZY5LPMDJ7sM+dvdZQTRhSFeFTtE+i0q4v5BuT8yPQClycuvIOXMyIiohkuhxgxPCHdlQjuphG5yHwP6Y+bULRGGoRBmVFL5+xnfWahA2dBvHNOwi54a/T3d+J19yA7VIoI0W1DVI08Wp6BKBxLuN/mrj7kB6szJI68nlp8SAq4jmSjLvkcyYTEvLKGzzcASBwHrN/2AcgbFusUNtQY/SSufC0Z1LNqA2ZIjGWEt0pSwrf09lPKlPxnNbR1KPamYOhywL4AiOe2WnHS7yQnSi8k+rETZzAuQFiMSzJvrDfwS2gO7BDkc7bmMnFDxckqrYVl2JwLegICg2zIgvtU0zKiIAxtQVBpPx1dWcud5UKb5tOgU5bme84fB32f5OW+8piY2XPDySvgHGqea3FEguREAAAAASUVORK5CYII="},"316d":function(e,t,i){"use strict";var a=function(){var e=this,t=e._self._c;return e.uploaddialogshow?t("div",{staticClass:"dialog-root",on:{click:function(t){return t.target!==t.currentTarget?null:e.closeTap.apply(null,arguments)}}},[t("div",{staticClass:"dialog-box"},[e._m(0),t("i",{staticClass:"Audi-Dash Audi-Dashclose close",on:{click:e.closeTap}}),t("div",{staticClass:"control"},[t("button",{staticClass:"new-button",on:{click:function(t){return e.addTemp("image")}}},[e._v("添加图片")]),t("button",{staticClass:"new-button",on:{click:function(t){return e.addTemp("video")}}},[e._v("添加视频")])]),t("div",{staticClass:"dialog-content"},[e._l(e.uploadArr,(function(i,a){return["image"==i.type?t("div",{key:i.type+a,staticClass:"line-box"},[t("div",{staticClass:"line-label required"},[e._v("图片")]),t("div",{staticClass:"content"},[t("uploadFile",{key:a,attrs:{fileType:[".jpg",".png",".jpeg"],limit:1,isShowTip:!1,small:!0},model:{value:i.image,callback:function(t){e.$set(i,"image",t)},expression:"item.image"}})],1),t("div",{staticClass:"del"},[e.uploadArr&&e.uploadArr.length>1?t("i",{staticClass:"Audi-Dash Audi-Dashdelete icon",on:{click:function(t){return e.delClick(i,a)}}}):e._e()])]):"video"==i.type?t("div",{key:i.type+"-"+a,staticClass:"line-box"},[t("div",{staticClass:"line-label"},[e._v("视频")]),t("div",{staticClass:"content"},[t("uploadFile",{attrs:{fileType:[".png",".jpg",".jpeg"],limit:1,uploadText:"点击上传封面",isShowTip:!1,small:!0},model:{value:i.cover,callback:function(t){e.$set(i,"cover",t)},expression:"item.cover"}}),t("uploadFile",{attrs:{fileType:[".mp4",".avi",".flv"],limit:1,uploadText:"点击上传视频",isShowTip:!1,small:!0},model:{value:i.video,callback:function(t){e.$set(i,"video",t)},expression:"item.video"}})],1),t("div",{staticClass:"del"},[e.uploadArr&&e.uploadArr.length>1?t("i",{staticClass:"Audi-Dash Audi-Dashdelete icon",on:{click:function(t){return e.delClick(i,a)}}}):e._e()])]):e._e()]}))],2),t("div",{staticClass:"dialog-foot"},[t("button",{staticClass:"primary-button",on:{click:function(t){return t.stopPropagation(),e.submit.apply(null,arguments)}}},[t("span",[e._v("保存并提交")])])])])]):e._e()},l=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"title-box"},[t("div",{staticClass:"border"}),e._v("商品详情列表 ")])}],s=i("9420"),o={components:{uploadFile:s["a"]},props:{value:{type:Array,default:()=>[]},uploaddialogshow:{type:Boolean,default:!1}},data(){return{uploadArr:[{type:"image",image:[]}],imageTemplate:{type:"image",image:[]},videoTemplate:{type:"video",cover:[],video:[]}}},watch:{value:{handler(e){if(e){const t=Array.isArray(e)?e:[];t&&t.length&&(this.uploadArr=t)}else this.uploadArr=[{type:"image",image:[]}]},deep:!0,immediate:!0}},methods:{closeTap(){this.$emit("update:uploaddialogshow",!1)},addTemp(e){this.uploadArr.length>9?this.$message.info("达到上限"):"image"===e?this.uploadArr.push(this.imageTemplate):"video"===e&&this.uploadArr.push(this.videoTemplate)},delClick(...[,e]){this.uploadArr=this.uploadArr.filter((...[,t])=>e!=t)},submit(){const e=this.uploadArr.every(e=>!("image"==e.type&&e.image.length<=0));e?(this.$emit("input",JSON.stringify(this.uploadArr)),console.log("传出内容")):this.$message.error("有必填选项未填")}}},n=o,r=(i("bc46"),i("2877")),c=Object(r["a"])(n,a,l,!1,null,"bc6d3d48",null);t["a"]=c.exports},"4db4":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALmSURBVHgBxVddihpBEK6Z/RFFccQnBWGC4ptEXwSfkr1BcoI9QvYG2dxAb5CcINkTJHkSfHGDD6IgGRH0STL+oPif+ppumey6cXTV/WDs6p6x66erqqs0colyuWwsFot3mqa9Wa1WaV4y+THka5sfi9/d67r+g+m7TCZju9lX2/ZBsVg0Ly4ubpi8djDcvrGmfWZhPrEg1n+/e+oFNF4ulx9Z2xu15vf7KRQKidHj8dDZ2ZlYZ8vQaDSi8XhMtm3TYDBwCpKXgtiuBYDWl5eX35m5iXk4HKZoNEq8Rm4wnU6p3W5Tt9sVc97HOj8/v9pkjUcClEqlNGv2FczBMJFIkNfrpX0AQWq1mhghBD/vs9ns/ZMCODWH1rFYbG3mfYHjsSxLHM0mS6wFkGdeBnPDMCgej9MhASFwJFKIjPIJXX0gHU6Y3TRNOjRgTezNTmmCl1oXFpCh9ht0KpVy7Wy7ApFSrVYFzUf7Ckehy8ktRpz7sZgDPp9P8ADYN0R4azLD/cHkmNorICIqlQpIG1bQkV4xQ3I5NnMAPAKBAEiR2nV2iLdiZrjOss9GMBgUI+4VzpL6a0xwPqeCtABCMg0nNE8tAO4RCRMCCNs/N+PtAgcvQ6cXBgQQKRE5+1Rw8LIhgAUK8XkqICNKWAjDX6D6/T6dCkoAWcKJGo56vR6dCooXeOvskd+YtlFGTSYTOjbAw1Gy3enyXv6CWafToWND8UDRCt4iDGezWR4jCgaHgxwc0F7ViShUxYifXC5n8VAA3Wg0jhKS8/mc6vW6mhZUWbZORKgJ2CwWwrHVatGh0Ww218Wpqj/+EQDnwR9cQQiY6VCWgOZg/qAoXfcIW8vyZDLpvDx2AvwJirguyxU2NSaRSMS1IHA2ePtejYmCLNVumfyg1nCPo3BBo4KHNxXrMDO0HA6Hj1ozRgFnvlNr5gSsgQ04bK7JPURu4f/l925OH0K15yjhZBVl0ob2nM39E9nVbXv+F9VZoJdf36JjAAAAAElFTkSuQmCC"},"71cb":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[e._m(0),t("div",{staticClass:"content goods-box"},[e._m(1),t("el-form",{ref:"ruleForm",staticClass:"form-box",attrs:{"label-position":"right","label-width":e.labelWidth}},[t("el-form-item",{attrs:{label:"商品名称",required:""}},[t("el-input",{attrs:{maxlength:"18",placeholder:"请输入商品名称（18字以内）"},model:{value:e.goodsInfo.name,callback:function(t){e.$set(e.goodsInfo,"name",t)},expression:"goodsInfo.name"}})],1),t("el-form-item",{attrs:{label:"商品卖点",required:""}},[t("el-input",{attrs:{maxlength:"100",placeholder:"请输入商品卖点（100字以内）"},model:{value:e.goodsInfo.sellPoints,callback:function(t){e.$set(e.goodsInfo,"sellPoints",t)},expression:"goodsInfo.sellPoints"}})],1),t("el-form-item",{attrs:{label:"商品标签"}},[t("el-input",{attrs:{placeholder:"+ new Tag"},model:{value:e.goodsInfo.tag,callback:function(t){e.$set(e.goodsInfo,"tag",t)},expression:"goodsInfo.tag"}})],1),t("el-form-item",{attrs:{label:"是否同步Asmp",required:""}},[t("div",{staticClass:"radio-box"},e._l(e.goodsInfo.asmpArr,(function(a,l){return t("div",{key:l,staticClass:"item",on:{click:function(t){return e.asmpRadioTap(a)}}},[t("img",{staticClass:"radio",attrs:{src:a.checked?i("238e"):i("4db4"),alt:""}}),t("span",{class:["label",a.checked?"active":""]},[e._v(e._s(a.label))])])})),0)]),t("el-form-item",{attrs:{label:"现金收款渠道",required:""}},[t("div",{staticClass:"radio-box"},e._l(e.goodsInfo.cashChannelArr,(function(a,l){return t("div",{key:l,staticClass:"item",on:{click:function(t){return e.cashChannelTap(a)}}},[t("img",{staticClass:"radio",attrs:{src:a.checked?i("238e"):i("4db4"),alt:""}}),t("span",{class:["label",a.checked?"active":""]},[e._v(e._s(a.label))])])})),0)]),t("el-form-item",{attrs:{label:"商品图片",required:""}},[t("div",{staticClass:"goods-picture"},[t("div",{staticClass:"upload-tip"},[e._v(" （图片大小不超过5M，图片格式JPG/PNG，建议尺寸长宽为：缩略图建议1000*1000px，最多上传1张图片，商品主图建议1029*540px，最多上传5张主图） ")]),t("div",{staticClass:"upload-area"},[t("div",{staticClass:"picture1-box"},[t("uploadFile",{attrs:{limit:1,fileType:[".jpg",".png"],isShowTip:!1},model:{value:e.goodsInfo.thumbnailArr,callback:function(t){e.$set(e.goodsInfo,"thumbnailArr",t)},expression:"goodsInfo.thumbnailArr"}}),t("div",{staticClass:"label"},[t("span",{staticClass:"required"},[e._v("*")]),t("span",[e._v("缩略图")])])],1),t("div",{staticClass:"picture2-box"},[t("uploadFile",{attrs:{limit:5,fileType:[".jpg",".png"],isShowTip:!1},model:{value:e.goodsInfo.goodsMainArr,callback:function(t){e.$set(e.goodsInfo,"goodsMainArr",t)},expression:"goodsInfo.goodsMainArr"}}),t("div",{staticClass:"label"},[t("span",{staticClass:"required"},[e._v("*")]),t("span",[e._v("商品主图")])])],1)])])]),t("el-form-item",{attrs:{label:"头图视频"}},[t("div",{staticClass:"goods-video"},[t("div",{staticClass:"upload-tip"},[e._v(" （图片大小不超过5M，图片格式JPG/PNG，建议尺寸长宽为：缩略图建议1000*1000px，最多上传1张图片，商品主图建议1029*540px，最多上传5张主图） ")]),t("div",{staticClass:"upload-area"},[t("div",{staticClass:"cover-box"},[t("uploadFile",{attrs:{fileType:[".jpg",".png"],limit:1,isShowTip:!1},model:{value:e.goodsInfo.videoCoverArr,callback:function(t){e.$set(e.goodsInfo,"videoCoverArr",t)},expression:"goodsInfo.videoCoverArr"}}),t("div",{staticClass:"label"},[t("span",[e._v("视频封面")])])],1),t("div",{staticClass:"video-box"},[t("uploadFile",{attrs:{limit:1,fileType:[".mp4",".flv",".avi"],fileSize:50,uploadText:"点击上传视频",isShowTip:!1},model:{value:e.goodsInfo.videoArr,callback:function(t){e.$set(e.goodsInfo,"videoArr",t)},expression:"goodsInfo.videoArr"}}),t("div",{staticClass:"label"},[t("span",[e._v("商品视频")])])],1)])])]),t("el-form-item",{attrs:{label:"商品详情",required:""}},[t("div",{staticClass:"goods-detail"},[t("div",{staticClass:"upload-tip"},[e._v("（图片大小不超过5M，图片格式JPG/PNG，建议尺寸长宽为：详情长图建议长1372px高度不限，支持多张图片上传）")]),t("div",{staticClass:"detail-box"},[e.detailList.length?e._l(e.detailList,(function(i,a){return t("div",{key:a,staticClass:"detail-item",on:{click:function(t){e.uploaddialogshow=!0}}})})):[t("div",{staticClass:"detail-empty",on:{click:function(t){e.uploaddialogshow=!0}}},[t("img",{attrs:{src:i("cf55"),alt:""}}),t("p",{staticClass:"upload-text"},[e._v("上传图片/视频")])])]],2)])]),t("el-form-item",{attrs:{label:"积分支付"}},[t("div",{staticClass:"radio-box"},e._l(e.goodsInfo.pointPaymentArr,(function(a,l){return t("div",{key:l,staticClass:"item",on:{click:function(t){return e.pointPaymentTap(a)}}},[t("img",{staticClass:"radio",attrs:{src:a.checked?i("238e"):i("4db4"),alt:""}}),t("span",{class:["label",a.checked?"active":""]},[e._v(e._s(a.label))])])})),0)])],1)],1),t("div",{staticClass:"content invoice-box"},[e._m(2),t("el-form",{staticClass:"form-box",attrs:{"label-position":"right","label-width":e.labelWidth}},[t("el-form-item",{attrs:{label:"产品开票名称",required:""}},[t("el-input",{attrs:{placeholder:"请选择产品开票名称"},model:{value:e.invoiceInfo.productName,callback:function(t){e.$set(e.invoiceInfo,"productName",t)},expression:"invoiceInfo.productName"}})],1),t("el-form-item",{attrs:{label:"税收编码",required:""}},[t("el-input",{attrs:{placeholder:"请输入税收编码"},model:{value:e.invoiceInfo.taxCode,callback:function(t){e.$set(e.invoiceInfo,"taxCode",t)},expression:"invoiceInfo.taxCode"}})],1),t("el-form-item",{attrs:{label:"税率",required:""}},[t("el-input",{attrs:{placeholder:"请输入税率"},model:{value:e.invoiceInfo.taxRate,callback:function(t){e.$set(e.invoiceInfo,"taxRate",t)},expression:"invoiceInfo.taxRate"}}),t("span",{staticStyle:{color:"#1a1a1a","font-size":"14px"}},[e._v(" % ")])],1),t("el-form-item",{attrs:{label:"分类",required:""}},[t("el-input",{attrs:{placeholder:"请输入分类"},model:{value:e.invoiceInfo.taxType,callback:function(t){e.$set(e.invoiceInfo,"taxType",t)},expression:"invoiceInfo.taxType"}})],1)],1)],1),t("div",{staticClass:"content sales-box"},[e._m(3),t("el-form",{staticClass:"form-box",attrs:{"label-position":"right","label-width":e.labelWidth}},[t("el-form-item",{attrs:{label:"颜色",required:""}},[t("div",{staticClass:"radio-box"},e._l(e.salesAttr.colorArr,(function(a,l){return t("div",{key:l,staticClass:"item",on:{click:function(t){return e.colorItemTap(a)}}},[t("img",{staticClass:"radio",attrs:{src:a.checked?i("238e"):i("4db4"),alt:""}}),t("span",{class:["label",a.checked?"active":""]},[e._v(e._s(a.label))])])})),0)]),t("el-form-item",{attrs:{label:"限购",required:""}},[t("el-input",{attrs:{type:"number",step:1},model:{value:e.salesAttr.max,callback:function(t){e.$set(e.salesAttr,"max",t)},expression:"salesAttr.max"}}),t("span",{staticClass:"tip"},[e._v("  默认值为0，表示不限购")])],1)],1)],1),t("div",{staticClass:"content uptime-box"},[e._m(4),t("el-form",{staticClass:"form-box",attrs:{"label-position":"right","label-width":e.labelWidth}},[t("el-form-item",{attrs:{label:"上线时间",required:""}},[t("div",{staticClass:"radio-box"},e._l(e.uptimeInfo.uptimeArr,(function(a,l){return t("div",{key:l,staticClass:"item",on:{click:function(t){return e.uptimeTap(a)}}},[t("img",{staticClass:"radio",attrs:{src:a.checked?i("238e"):i("4db4"),alt:""}}),t("span",{class:["label",a.checked?"active":""]},[e._v(e._s(a.label))])])})),0)]),t("div",{staticClass:"footer-box"},[t("button",{staticClass:"plain-button",on:{click:function(t){return t.stopPropagation(),e.lastTap.apply(null,arguments)}}},[e._v(" 上一步 ")]),t("button",{staticClass:"primary-button",on:{click:function(t){return t.stopPropagation(),e.submitTap.apply(null,arguments)}}},[t("span",[e._v("保存")])])])],1)],1),t("uploadDialog",{attrs:{uploaddialogshow:e.uploaddialogshow},on:{"update:uploaddialogshow":function(t){e.uploaddialogshow=t}},model:{value:e.goodsInfo.videoArr,callback:function(t){e.$set(e.goodsInfo,"videoArr",t)},expression:"goodsInfo.videoArr"}})],1)},l=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"tabs"},[t("div",[e._v("发票")]),e._v(" / "),t("div",{staticClass:"active"},[e._v("基本信息")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"title-box"},[t("div",{staticClass:"border"}),e._v(" 基本信息 ")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"title-box"},[t("div",{staticClass:"border"}),e._v(" 发票属性 ")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"title-box"},[t("div",{staticClass:"border"}),e._v(" 销售属性 ")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"title-box"},[t("div",{staticClass:"border"}),e._v(" 上线时间 ")])}],s=i("9420"),o=i("316d"),n={components:{uploadFile:s["a"],uploadDialog:o["a"]},data(){return{labelWidth:"135px",uploaddialogshow:!1,goodsInfo:{name:"",sellPoints:"",tag:"",asmpArr:[{label:"是",checked:!1},{label:"否",checked:!0}],cashChannelArr:[{label:"运营方",checked:!1},{label:"上汽大众",checked:!0}],pointPaymentArr:[{label:"是",checked:!1},{label:"否",checked:!0}],thumbnailArr:[],goodsMainArr:[],goodsDetailArr:[],videoCoverArr:[],videoArr:[]},invoiceInfo:{productName:"",taxCode:"",taxRate:"",taxType:""},salesAttr:{colorArr:[{label:"黑色",checked:!1},{label:"蓝色",checked:!0},{label:"酒红色",checked:!1}],max:0},uptimeInfo:{uptimeArr:[{label:"暂不上线",checked:!1},{label:"立即上线",checked:!0},{label:"定时上线",checked:!1}]}}},computed:{detailList(){const e=[];return e}},methods:{asmpRadioTap(e){e.checked||(this.goodsInfo.asmpArr=this.goodsInfo.asmpArr.map(t=>(t.checked=e.label==t.label,t)))},cashChannelTap(e){e.checked||(this.goodsInfo.cashChannelArr=this.goodsInfo.cashChannelArr.map(t=>(t.checked=e.label==t.label,t)))},pointPaymentTap(e){e.checked||(this.goodsInfo.pointPaymentArr=this.goodsInfo.pointPaymentArr.map(t=>(t.checked=e.label==t.label,t)))},colorItemTap(e){e.checked||(this.salesAttr.colorArr=this.salesAttr.colorArr.map(t=>(t.checked=e.label==t.label,t)))},uptimeTap(e){e.checked||(this.uptimeInfo.uptimeArr=this.uptimeInfo.uptimeArr.map(t=>(t.checked=e.label==t.label,t)))},lastTap(){},submitTap(){const e=this.goodsInfo;this.invoiceInfo,this.salesAttr,this.uptimeInfo;return e.name?e.sellPoints?void e.sellPoints:(this.$message.info("商品卖点未填"),!1):(this.$message.info("商品名称未填"),!1)}}},r=n,c=(i("ff53"),i("2877")),d=Object(c["a"])(r,a,l,!1,null,"4da18e6a",null);t["default"]=d.exports},9420:function(e,t,i){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",{class:["component-upload-image",e.small?"small-upload":""]},[t("el-upload",{ref:"uploadImage",class:{hide:this.fileList.length>=this.limit},attrs:{action:e.uploadImgUrl,"list-type":"picture-card","on-success":e.handleUploadSuccess,"before-upload":e.handleBeforeUpload,"on-change":e.andleChangeFile,limit:e.limit,multiple:e.multiple,"on-error":e.handleUploadError,"on-exceed":e.handleExceed,name:"file","on-remove":e.handleRemove,"show-file-list":!0,headers:e.headers,"file-list":e.fileList,accept:e.fileType.join(","),"on-preview":e.handlePictureCardPreview}},[t("span",{staticClass:"icon-upload"},[t("img",{attrs:{src:i("cf55"),alt:""}}),t("p",{staticClass:"upload-text"},[e._v(e._s(e.uploadText))])])]),e.showTip?t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" 请上传 "),e.fileSize?[e._v(" 大小不超过 "),t("b",{staticStyle:{color:"#f56c6c"}},[e._v(e._s(e.fileSize)+"MB")])]:e._e(),e.fileType?[e._v(" 格式为 "),t("b",{staticStyle:{color:"#f56c6c"}},[e._v(e._s(e.fileType.join("/")))])]:e._e(),e._v(" 的文件 ")],2):e._e(),t("el-dialog",{attrs:{visible:e.dialogVisible,title:"预览",width:"800","append-to-body":""},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("img",{staticStyle:{display:"block","max-width":"100%",margin:"0 auto"},attrs:{src:e.dialogImageUrl}})])],1)},l=[],s={props:{value:[String,Object,Array],multiple:{type:Boolean,default:!1},limit:{type:Number,default:5},fileSize:{type:Number,default:5},fileType:{type:Array,default:()=>[".png",".jpg",".jpeg"]},isShowTip:{type:Boolean,default:!0},uploadText:{type:String,default:"点击上传图片"},small:{type:Boolean,default:!1}},data(){return{dialogImageUrl:"",dialogVisible:!1,hideUpload:!1,baseUrl:"http://192.168.3.8/dev-api",uploadImgUrl:"http://192.168.3.8/dev-api/common/upload",headers:{Authorization:"Bearer "},fileList:[]}},watch:{value:{handler(e){if(!e)return this.fileList=[],[];{const t=Array.isArray(e)?e:this.value.split(",");this.fileList=t.map(e=>("string"===typeof e&&(e=(e.indexOf(this.baseUrl),{name:e,url:e})),e))}},deep:!0,immediate:!0}},computed:{showTip(){return this.isShowTip&&(this.fileType||this.fileSize)}},methods:{handleRemove(e,t){const i=this.fileList.map(e=>e.name).indexOf(e.name);i>-1&&(this.fileList.splice(i,1),this.$emit("input",this.listToString(this.fileList)))},handleUploadSuccess(e,t,i){i.every(e=>"success"==e.status)&&(i.map(e=>{e.response&&this.fileList.push({name:e.response.fileName,url:e.response.url})}),this.$emit("input",this.listToString(this.fileList)),this.loading.close())},async andleChangeFile(e,t){console.log("fileList===>",t),console.log("file===>",e)},async handleBeforeUpload(e){let t=!1;if(this.fileType.length){let i="";e.name.lastIndexOf(".")>-1&&(i=e.name.slice(e.name.lastIndexOf("."))),console.log(i,6666),t=this.fileType.some(t=>e.type.indexOf(t)>-1||!!(i&&i.indexOf(t)>-1))}else t=e.type.indexOf("image")>-1;if(!t)return this.$message.error(`文件格式不正确, 请上传${this.fileType.join("/")}格式文件!`),!1;if(this.fileSize){const t=e.size/1024/1024<this.fileSize;if(!t)return this.$message.error(`上传文件大小不能超过 ${this.fileSize} MB!`),!1}this.loading=this.$loading({lock:!0,text:"上传中",background:"rgba(0, 0, 0, 0.7)"})},handleExceed(){this.$message.error(`上传文件数量不能超过 ${this.limit} 个!`)},async handleUploadError(e){this.$message({type:"error",message:"上传失败"}),this.loading.close()},handlePictureCardPreview(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},listToString(e,t){let i="";t=t||",",console.log(e);for(let a in e)i+=e[a].url.replace(this.baseUrl,"")+t;return""!=i?i.substr(0,i.length-1):""}}},o=s,n=(i("f466"),i("2877")),r=Object(n["a"])(o,a,l,!1,null,"06c47ac6",null);t["a"]=r.exports},b060:function(e,t,i){},b54d:function(e,t,i){},bc46:function(e,t,i){"use strict";i("b54d")},c21b:function(e,t,i){},cf55:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABECAYAAADDRGZtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJoSURBVHgB7dtRTtswGMDx7zPdWxkJ8L5wg+4E2xF2A+AEsBNQbgAnWDjCTjCOsBsse51Ukq68jeWb3dVSVYXWTj4nduW/VKklRvRH1FLbAUFWzhc3RHAt7ybQQ0gvZ2maFvrxrJzniOKcEHNR/7ldP2aaWCGm0BNiW0h0QfjmW1mWGVgmiPACvIqyFcbqFyvUN4J3KczICiPA3yY2GJ8hKmOM7xCVESYEiGonJhSIaol57WBIENVkNn/+0nQgNMjyj2YTJjiIqgkTJES1iQkWolrHjCDwlphy/jPoM6KTU4CrvYDIEnyqFgQ9tzmx4mioM8I+iRsEUoP4BMwNApEvzhv5TnMNjA3yGln78YWcDRbA0MAQvvbl7TdCvCtCfCtCLPq+ujnNKaQmvDxODt+rG1H9GRzmDKIQp+k4149P0qO7mugSHOUEsonQnaZvc1cYdojca7ltQugURo0B5lgh6gmepIfTXePUGG4MG8QUoePGsEBsETpOTGdIW4SOC9MJ0hWh48C0hnAhdF0xrSDcCF0XjDXEFULXFmMFcY3QtcEYLz4gYp4ejZ19VmpqVi7uEOHKZKzxGXmp6QF6joAeTccaQwTUH6HnDgS+Mx1rvD+ilu7l6mAlQTsnSXKB+nHbcbnNPIFd679i9GF1xZLZ8+NfoMPiOBmfbRvxVP3+IcdlwFics/tWhPhWhPhWhPhWhPiWAwhlv8rnyWtH/1+cjBkw52gzFIu/RF/lB8xq/atyfz05QDgHBxcMxF1d34oQ39orSAXBR4WQe3v3EHhE+IDqjlw/miKSXD/Cwf+rxy6qJOJeLej9AzdaIljvFDJWAAAAAElFTkSuQmCC"},f466:function(e,t,i){"use strict";i("b060")},ff53:function(e,t,i){"use strict";i("c21b")}}]);