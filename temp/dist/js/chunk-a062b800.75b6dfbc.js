(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a062b800"],{"0029":function(s,t,i){"use strict";i("4664")},4664:function(s,t,i){},"638f":function(s,t,i){"use strict";var a=function(){var s=this,t=s._self._c;return s.dialogshow?t("div",{staticClass:"dialog-root"},[t("div",{staticClass:"dialog-view"},[t("div",{staticClass:"dialog-content"},[s._v(s._s(s.content))]),t("div",{staticClass:"dialog-foot"},[t("div",{staticClass:"dialog-confirm",on:{click:function(t){return t.stopPropagation(),s.confirm.apply(null,arguments)}}},[s._v("确定")]),t("div",{staticClass:"dialog-cancel",on:{click:function(t){return t.stopPropagation(),s.cancel.apply(null,arguments)}}},[s._v("取消")])])])]):s._e()},e=[],l={props:{dialogshow:{value:Boolean,default:()=>!1},content:{value:String,default:"是否确定取消订单？"}},methods:{cancel(){this.$emit("update:dialogshow",!1),this.$emit("cancel")},confirm(){this.$emit("update:dialogshow",!1),this.$emit("confirm")}}},c=l,o=(i("8ae1"),i("2877")),v=Object(o["a"])(c,a,e,!1,null,"b9281260",null);t["a"]=v.exports},"6d4a":function(s,t,i){},"7ab5":function(s,t,i){"use strict";i.r(t);var a=function(){var s=this,t=s._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"content order-box"},[s._m(0),t("div",{staticClass:"item-box"},[t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v("订单类型")]),t("div",{staticClass:"value"},[s._v(s._s(s.orderInfo.orderType))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v("订单号")]),t("div",{staticClass:"value"},[s._v(s._s(s.orderInfo.orderNo))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v("下单时间")]),t("div",{staticClass:"value"},[s._v(s._s(s.orderInfo.orderTime))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v("订单状态")]),t("div",{staticClass:"value"},[s._v(s._s(0==s.orderInfo.orderStatus?"未创建":"已创建"))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v("订单来源")]),t("div",{staticClass:"value"},[s._v(s._s(s.orderInfo.source))])])])]),t("div",{staticClass:"content customer-box"},[s._m(1),t("div",{staticClass:"item-box"},[t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v("IDPID")]),t("div",{staticClass:"value"},[s._v(s._s(s.customerInfo.IDPID))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v("姓名")]),t("div",{staticClass:"value"},[s._v(s._s(s.customerInfo.name))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v("联系方式")]),t("div",{staticClass:"value"},[s._v(s._s(s.customerInfo.phone))])])])]),t("div",{staticClass:"content car-box"},[s._m(2),t("div",{staticClass:"item-box"},[t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v("VIN码")]),t("div",{staticClass:"value"},[s._v(s._s(s.carInfo.VIN))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v("车牌")]),t("div",{staticClass:"value"},[s._v(s._s(s.carInfo.licensePlate))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v("车型")]),t("div",{staticClass:"value"},[s._v(s._s(s.carInfo.model))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v("车系")]),t("div",{staticClass:"value"},[s._v(s._s(s.carInfo.series))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v("里程")]),t("div",{staticClass:"value"},[s._v(s._s(s.carInfo.mileage))])])])]),t("div",{staticClass:"content delivery-box"},[s._m(3),t("div",{staticClass:"item-box"},[t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v("送车地址")]),t("div",{staticClass:"value"},[s._v(s._s(s.deliveryInfo.deliveryAddress))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v("送车时间")]),t("div",{staticClass:"value"},[s._v(s._s(s.deliveryInfo.deliveryTime))])])])]),t("div",{staticClass:"content service-box"},[s._m(4),t("div",{staticClass:"line-box"},[t("div",{staticClass:"pic-box"},[t("img",{attrs:{src:s.serviceInfo.pic,alt:""}})]),t("div",{staticClass:"item-box"},[t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v("服务商名称")]),t("div",{staticClass:"value"},[s._v(s._s(s.serviceInfo.serviceName))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v("地址")]),t("div",{staticClass:"value"},[s._v(s._s(s.serviceInfo.address))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v("联系电话")]),t("div",{staticClass:"value"},[s._v(s._s(s.serviceInfo.tel))])])])]),t("div",{staticClass:"control"},[t("button",{staticClass:"plain-button cancel-btn",on:{click:function(t){s.dialogshow=!0}}},[t("span",[s._v("取消订单")])]),t("button",{staticClass:"plain-button",on:{click:s.backTap}},[t("i",{staticClass:"Audi-Dashboard icon-left icon"}),t("span",[s._v("返回")])])])]),t("Dialog",{attrs:{dialogshow:s.dialogshow},on:{"update:dialogshow":function(t){s.dialogshow=t},confirm:s.confrimTap,cancel:s.cancelTap}})],1)},e=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"title-box"},[t("div",{staticClass:"border"}),s._v(" 订单信息 ")])},function(){var s=this,t=s._self._c;return t("div",{staticClass:"title-box"},[t("div",{staticClass:"border"}),s._v(" 客户信息 ")])},function(){var s=this,t=s._self._c;return t("div",{staticClass:"title-box"},[t("div",{staticClass:"border"}),s._v(" 车辆信息 ")])},function(){var s=this,t=s._self._c;return t("div",{staticClass:"title-box"},[t("div",{staticClass:"border"}),s._v(" 送车信息 ")])},function(){var s=this,t=s._self._c;return t("div",{staticClass:"title-box"},[t("div",{staticClass:"border"}),s._v(" 服务商信息 ")])}],l=i("638f"),c={components:{Dialog:l["a"]},data(){return{dialogshow:!1,orderInfo:{title:"订单信息",orderType:"送车服务",orderNo:"203920390900",orderTime:"2022-07-09 00:00:00",orderStatus:0,source:"VIPCALL"},customerInfo:{title:"客户信息",IDPID:"156165061056451531053",name:"张三",phone:"13566559988"},carInfo:{title:"车辆信息",VIN:"156165061056451531053",licensePlate:"沪A230093",series:"Q6",model:"A7L",phone:"13566559988",mileage:"1000"},deliveryInfo:{title:"送车信息",deliveryAddress:"上海市闵行区吴中路190号",deliveryTime:"2022-07-09 00:00:00"},serviceInfo:{pic:this.$staticData.staticUrl+"/imgs/otherpages3/building.png",serviceName:"上海凯隆",address:"上海市闵行区吴中路190号",tel:"400-7768398977",expiration:"2022-07-09 00:00:00"},columnData:[{prop:"service1",minWidth:"150px",label:"原厂既有机油保养服务",align:"center",headerAlign:"center"},{prop:"service2",minWidth:"150px",label:"空调滤芯保养服务",align:"center",headerAlign:"center"}],tableData:[{id:11,service1:"¥392,203",service2:"¥392,203"},{id:12,service1:"详情",service2:"详情"}]}},methods:{backTap(){},onSearch(){},onReset(){},handleClick(s,t){console.log(s,t),this.$message.info(s.label)},confrimTap(){this.dialogshow=!1,console.log("confrimTap")},cancelTap(){this.dialogshow=!1,console.log("cancelTap")}}},o=c,v=(i("0029"),i("2877")),n=Object(v["a"])(o,a,e,!1,null,"b5c58028",null);t["default"]=n.exports},"8ae1":function(s,t,i){"use strict";i("6d4a")}}]);