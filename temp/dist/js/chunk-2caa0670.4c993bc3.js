(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2caa0670"],{"4e63":function(t,e,a){},"5cae":function(t,e,a){"use strict";a("bdfd")},6222:function(t,e,a){},6529:function(t,e,a){},"6d88":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAOCAYAAADNGCeJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABqSURBVHgB5dOxFcAgCEXRD8ch1IpRXCWTZgU30NIyE2hgBmhyciuqV4hQrXUAEPhNPucgQlTnAyjn3Ji5wUnfrCcN3QhARE/ae18aFDhpZ+AfqJRiCxA46QJ6spAOAic7J7JB/5rAaa01X9EsHyQDXNvkAAAAAElFTkSuQmCC"},7009:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sales-one"},[e("sales-header"),e("div",{staticClass:"main-box"},[e("div",{staticClass:"left"},[e("order-box",{attrs:{firstNumber:2039,secondNumber:599}}),e("order-box",{attrs:{title:"昨日订单数",firstName:"意向金用户",secondName:"定金用户",firstNumber:188,secondNumber:588}}),e("board-box",{attrs:{list:t.todayBoardList}})],1),e("div",{staticClass:"middle"},[e("div",{staticClass:"annular"},[e("chart-annular",{ref:"annular1",attrs:{option:t.annular1Option,id:"annular1",chartTitle:"意向金订单占比"}}),e("chart-annular",{ref:"annular2",attrs:{option:t.annular2Option,id:"annular2",chartTitle:"定金订单占比"}})],1),e("chart-columnar",{ref:"columnar"})],1),e("div",{staticClass:"right"},[e("order-box",{attrs:{title:"交车数",firstName:"今日",secondName:"截至昨日",firstNumber:2039,secondNumber:1599}}),e("order-box",{attrs:{title:"退订（订）数",firstName:"今日退订",secondName:"截至昨日",firstNumber:39,secondNumber:599}}),e("board-box",{attrs:{list:t.totalBoardList}})],1)])],1)},i=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sales-header"},[e("div",{staticClass:"left"},[e("img",{staticClass:"logo pointer",attrs:{src:a("cf05"),alt:"logo"},on:{click:t.goHome}}),e("span",[t._v("销售数据实时看板")]),e("img",{staticClass:"menu pointer",attrs:{src:a("6d88"),alt:"icon"}})]),e("div",{staticClass:"control"},[e("div",{class:{select:!0,active:1==t.selectActive}},[e("el-select",{attrs:{clearable:"",placeholder:"车型选择","popper-append-to-body":!1},nativeOn:{click:function(e){return t.selectTap(1)}},model:{value:t.select1,callback:function(e){t.select1=e},expression:"select1"}},t._l(t.options1,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("div",{class:{select:!0,active:2==t.selectActive}},[e("el-select",{attrs:{clearable:"",placeholder:"区域选择","popper-append-to-body":!1},nativeOn:{click:function(e){return t.selectTap(2)}},model:{value:t.select2,callback:function(e){t.select2=e},expression:"select2"}},t._l(t.options2,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)]),e("div",{staticClass:"right"},[e("i",{staticClass:"Audi-Dash Audi-Dashexpand-text-input icon pointer",on:{click:t.fullscreenchange}}),e("el-dropdown",{staticStyle:{"margin-left":"24px"},on:{command:t.handleCommand}},[e("span",{staticClass:"el-dropdown-link"},[e("i",{staticClass:"Audi-Dash Audi-Dashsettings icon1 pointer"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{command:"a"}},[t._v("图表2")]),e("el-dropdown-item",{attrs:{command:"b"}},[t._v("返回首页")])],1)],1)],1)])},n=[],l={props:{},data(){return{selectActive:1,select1:null,select2:null,options1:[{value:1,label:"A7L"},{value:2,label:"Q5 Etron"},{value:3,label:"Q6"}],options2:[{value:1,label:"华北"},{value:2,label:"华中"},{value:3,label:"华东"},{value:4,label:"华北"}]}},methods:{selectTap(t){this.selectActive=t},handleCommand(t){switch(t){case"a":this.$router.push({path:"/salestwo"});break;case"b":this.goHome();break;default:break}},goHome(){this.$router.push({path:"/homepage"})},fullscreenchange(){const t=document.fullscreenElement;if(t)console.log("退出全屏"),document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen();else{var e=document.documentElement;console.log("进入全屏"),e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}}}},o=l,c=(a("eb3e"),a("2877")),d=Object(c["a"])(o,r,n,!1,null,"a47ee042",null),u=d.exports,h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"order-box"},[e("div",{staticClass:"title"},[t._v(t._s(t.title))]),e("div",{staticClass:"content"},[e("div",{staticClass:"box"},[e("div",{staticClass:"name"},[t._v(t._s(t.firstName))]),e("div",{staticClass:"number"},[t._v(t._s(t.firstNumber))])]),e("div",{staticClass:"box"},[e("div",{staticClass:"name"},[t._v(t._s(t.secondName))]),e("div",{staticClass:"number"},[t._v(t._s(t.secondNumber))])])])])},m=[],p={props:{title:{type:String,default:"今日订单数"},firstName:{type:String,default:"意向金用户"},firstNumber:{type:Number|String,default:0},secondName:{type:String,default:"定金用户"},secondNumber:{type:Number|String,default:0}}},f=p,C=(a("5cae"),Object(c["a"])(f,h,m,!1,null,"ba595eec",null)),v=C.exports,b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"sales-board"},t._l(t.list,(function(a,s){return e("div",{key:s,staticClass:"line"},[e("img",{staticClass:"left",attrs:{src:a.picture,alt:"picture"}}),e("div",{staticClass:"right"},[e("div",{staticClass:"cart-name"},[t._v(t._s(a.cartType))]),e("div",{staticClass:"content"},[e("div",{staticClass:"item"},[e("span",{staticClass:"name"},[t._v(t._s(a.firstName))]),e("span",[t._v(t._s(a.firstNumber))])]),e("div",{staticClass:"item"},[e("span",{staticClass:"name"},[t._v(t._s(a.secondName))]),e("span",[t._v(t._s(a.secondNumber))])])])])])})),0)},y=[],x={props:{list:{type:Array,default:()=>[]}}},A=x,g=(a("c51d"),Object(c["a"])(A,b,y,!1,null,"63f8dfc8",null)),F=g.exports,N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"annular-box"},[e("div",{staticClass:"annular-chart",attrs:{id:t.id}})])},S=[],w={name:"annularChart",props:{id:{type:String,default:"annular"},chartTitle:{type:String,default:"意向金订单占比"},chartName:{type:String,default:"截至昨日数据"},option:{type:Object,required:!0,default:()=>{}}},data(){return{myChart:null,timeSetInterval:null}},mounted(){this.drawLine()},beforeDestroy(){this.timeSetInterval&&clearInterval(this.timeSetInterval)},methods:{drawLine(){this.myChart=this.$echarts.init(document.getElementById(this.id)),this.myChart.setOption(this.option),this.chartLoop()},resetCharts(){this.myChart.resize()},chartItemLight(){const t=this;let e=t.option.series[0].data;this.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:0}),this.myChart.on("mouseover",(function(a){for(let s=0;s<e.length;s++)s!=a.dataIndex&&t.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:s})})),this.myChart.on("mouseout",(function(e){t.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:e.dataIndex})}))},chartLoop(){const t=this;let e=0;function a(){t.timeSetInterval&&clearInterval(t.timeSetInterval),t.timeSetInterval=setInterval((function(){let a=t.option.series[0].data.length;t.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:e}),e=(e+1)%a,t.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:e})}),3e3)}this.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:0}),a(),this.myChart.on("mouseover",(function(a){clearInterval(t.timeSetInterval),t.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:e}),t.myChart.dispatchAction({type:"highlight",seriesIndex:1,dataIndex:a.dataIndex}),e=a.dataIndex})),this.myChart.on("mouseout",(function(s){a(),t.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:s.dataIndex}),e=s.dataIndex}))}}},_=w,I=(a("74ce"),Object(c["a"])(_,N,S,!1,null,"7ff349a8",null)),k=I.exports,B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"columnar-box"},[e("div",{staticClass:"columnarChart",attrs:{id:"columnarChart"}}),e("div",{staticClass:"title-box"},[e("div",{staticClass:"control left"},t._l(["意向金","定金"],(function(a,s){return e("div",{key:s,class:{active:s==t.leftActive},on:{click:function(e){return t.leftControlTap(s)}}},[t._v(t._s(a))])})),0),e("div",{staticClass:"title"},[t._v(t._s(t.chartTitle))]),e("div",{staticClass:"control right"},t._l(["本周","本月"],(function(a,s){return e("div",{key:s,class:{active:s==t.rightActive},on:{click:function(e){return t.rightControlTap(s)}}},[t._v(t._s(a))])})),0)])])},E=[];const z={normal:{label:{show:!0,position:"top",textStyle:{color:"#FFFFFF",fontSize:10}}}},D={title:[{show:!1,text:"销售趋势",left:"center",borderWidth:2,borderColor:"#F50537",textStyle:{color:"#FFFFFF",fontSize:"16px"}}],legend:{bottom:"5%",itemWidth:8,itemHeight:8,itemGap:12,textStyle:{color:"#FFFFFF"}},tooltip:{},dataset:{source:[["product","A7L","Q5 etron","Q6"],["18/8",0,33,44],["19/8",0,34,55],["20/8",29,65,50],["21/8",72,53,50],["22/8",33,44,55],["23/8",66,35,22],["24/8",72,33,45],["25/8",72,53,50],["26/8",33,44,55],["27/8",66,35,22]]},xAxis:{type:"category",axisLine:{lineStyle:{color:"#D9D9D9"}}},yAxis:{type:"value",axisLine:{lineStyle:{color:"#D9D9D9"}},splitLine:{show:!0,lineStyle:{color:"#494949"}}},series:[{name:"A7L",type:"bar",color:"#4C4C4C",barMaxWidth:"20px",itemStyle:z},{name:"Q5 etron",type:"bar",color:"#F50537",barMaxWidth:"20px",itemStyle:z},{name:"Q6",type:"bar",color:"#808080",barMaxWidth:"20px",itemStyle:z}]};var L={props:{chartTitle:{type:String,default:"销售趋势"}},data(){return{myChart:null,leftActive:0,rightActive:0}},mounted(){this.drawLine()},methods:{drawLine(){this.myChart=this.$echarts.init(document.getElementById("columnarChart")),this.myChart.setOption(D)},resetCharts(){this.myChart.resize()},leftControlTap(t){t!=this.leftActive&&(this.leftActive=t,this.mockOption())},rightControlTap(t){t!=this.rightActive&&(this.rightActive=t,this.mockOption(t))},mockOption(t){const e=D.dataset.source.filter((t,e)=>0!=e);for(let s=0;s<e.length;s++){const t=Math.round(Math.random()*(e.length-1-s))+s;[e[s],e[t]]=[e[t],e[s]]}D.dataset.source=[D.dataset.source[0],...e];const a=[{show:!0,height:11,xAxisIndex:[0],bottom:"12%",showDetail:!1,showDataShadow:!1,textStyle:{fontSize:0},endValue:5,backgroundColor:"#111111",borderColor:"#111111",borderWidth:0,handleIcon:"path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",handleSize:"0%",handleStyle:{color:"#4C4C4C"},moveHandleSize:"0%",fillerColor:"#4C4C4C"}];1==t?(a[0].show=!0,a[0].endValue=5,D.dataZoom=a):(a[0].show=!1,a[0].endValue=D.dataset.source.length-2,D.dataZoom=a),this.myChart.setOption(D)}}},O=L,Q=(a("ab0a"),Object(c["a"])(O,B,E,!1,null,"cf60f650",null)),T=Q.exports,q={components:{salesHeader:u,orderBox:v,boardBox:F,chartAnnular:k,chartColumnar:T},props:{},data(){return{todayBoardList:[{id:1,picture:this.$staticData.staticUrl+"/imgs/a7l.png",cartType:"今日A7L",firstName:"意向金用户",secondName:"定金用户",firstNumber:599,secondNumber:688},{id:2,picture:this.$staticData.staticUrl+"/imgs/q5Etron.png",cartType:"今日Q5 Etron",firstName:"意向金用户",secondName:"定金用户",firstNumber:299,secondNumber:698},{id:3,picture:this.$staticData.staticUrl+"/imgs/q6.png",cartType:"今日Q6",firstName:"意向金用户",secondName:"定金用户",firstNumber:199,secondNumber:388}],totalBoardList:[{id:1,picture:this.$staticData.staticUrl+"/imgs/a7l.png",cartType:"截至昨日A7L",firstName:"意向金用户",secondName:"定金用户",firstNumber:1599,secondNumber:1688},{id:2,picture:this.$staticData.staticUrl+"/imgs/q5Etron.png",cartType:"截至昨日Q5 Etron",firstName:"意向金用户",secondName:"定金用户",firstNumber:1299,secondNumber:1698},{id:3,picture:this.$staticData.staticUrl+"/imgs/q6.png",cartType:"截至昨日Q6",firstName:"意向金用户",secondName:"定金用户",firstNumber:1199,secondNumber:1388}],annular1Option:{title:[{text:"意向金订单占比",left:"center",textStyle:{color:"#FFFFFF",fontSize:"16px"}},{text:"截至昨日数据",left:"center",top:"35px",textStyle:{color:"#CCCCCC",fontSize:"14px"}}],legend:{bottom:"5%",itemWidth:8,itemHeight:8,itemGap:20,textStyle:{color:"#FFFFFF"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},color:["#B3B3B3","#F50537","#808080","#4C4C4C","#E5E5E5","#B5B5B5","#ab334f"],series:[{name:"来源类型",type:"pie",radius:["50%","70%"],label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"16",color:"#FFFFFF",fontWeight:"500",formatter:"{d}% \n \n {b}"}},data:[{value:15,name:"A7L"},{value:35,name:"Q5 etron"},{value:11,name:"Q6"}]}]},annular2Option:{title:[{text:"定金订单占比",left:"center",textStyle:{color:"#FFFFFF",fontSize:"16px"}},{text:"截至昨日数据",left:"center",top:"35px",textStyle:{color:"#CCCCCC",fontSize:"14px"}}],legend:{bottom:"5%",itemWidth:8,itemHeight:8,itemGap:20,textStyle:{color:"#FFFFFF"}},tooltip:{trigger:"item"},color:["#B3B3B3","#F50537","#808080","#4C4C4C","#E5E5E5","#B5B5B5","#AB334F"],series:[{name:"Access From",type:"pie",radius:["50%","70%"],label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"16",color:"#FFFFFF",fontWeight:"500",rich:{a:{color:"#f50537",lineHeight:10},b:{height:40},x:{fontSize:18,fontFamily:"Microsoft YaHei",borderColor:"#449933",borderRadius:4}},formatter:"{d}% \n \n {b}"}},data:[{value:15,name:"A7L"},{value:35,name:"Q5 etron"},{value:11,name:"Q6"}]}]}}},mounted(){const t=this;window.addEventListener("resize",t.resizeChart)},beforeDestroy(){const t=this;window.removeEventListener("resize",t.resizeChart)},methods:{resizeChart(){this.$refs.annular1.resetCharts(),this.$refs.annular2.resetCharts(),this.$refs.columnar.resetCharts()}}},R=q,U=(a("9461"),Object(c["a"])(R,s,i,!1,null,"090b7daa",null));e["default"]=U.exports},"74ce":function(t,e,a){"use strict";a("4e63")},8588:function(t,e,a){},9461:function(t,e,a){"use strict";a("6529")},ab0a:function(t,e,a){"use strict";a("def0")},bdfd:function(t,e,a){},c51d:function(t,e,a){"use strict";a("8588")},def0:function(t,e,a){},eb3e:function(t,e,a){"use strict";a("6222")}}]);