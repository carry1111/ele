(function(e){function t(t){for(var n,r,o=t[0],c=t[1],u=t[2],f=0,d=[];f<o.length;f++)r=o[f],i[r]&&d.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},i={app:0},a=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"09cf":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"order"}},[s("div",{staticClass:"content"},[s("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[s("ul",e._l(e.goodsList,function(t,n){return s("li",{key:n,class:{li:!0,active:n==e.currentMenuIndex},on:{click:function(t){e.selectMenu(n,t)}}},[s("span",[e._v(e._s(t.name))]),s("count",{staticClass:"itemSelect",attrs:{num:e.itemSelectNumArray[n]}})],1)}),0)]),s("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[s("ul",e._l(e.goodsList,function(t,n){return s("li",{key:n,ref:"foodsList",refInFor:!0,staticClass:"li"},[s("div",{staticClass:"item-title"},[s("strong",{staticClass:"item-name"},[e._v(e._s(t.name))]),s("span",{directives:[{name:"show",rawName:"v-show",value:0==n,expression:"index1==0"}],staticClass:"item-desc"},[e._v("大家喜欢吃,才是真好吃")])]),s("ul",e._l(t.foods,function(t,i){return s("li",{key:i,staticClass:"parent"},[s("img",{staticClass:"left",attrs:{src:"//fuss10.elemecdn.com/8/78/193b76455b54bbd4e9dfdb0b88a2cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/"}}),s("div",{staticClass:"center"},[s("p",{staticClass:"food-name"},[s("strong",[e._v(e._s(t.name))])]),s("p",[s("span",{staticClass:"sell-count"},[e._v("月售"+e._s(t.sellCount))])]),s("span",{staticClass:"food-price"},[e._v("$"+e._s(t.price))])]),s("div",{staticClass:"right"},[s("i",{directives:[{name:"show",rawName:"v-show",value:e.selectNumArray[n][i],expression:"selectNumArray[index1][index2]"}],staticClass:"reduce",on:{click:function(s){e.remove_cart(t.price,n,i)}}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.selectNumArray[n][i],expression:"selectNumArray[index1][index2]"}],staticClass:"num",domProps:{textContent:e._s(e.selectNumArray[n][i])}}),s("i",{staticClass:"add",on:{click:function(s){e.add_cart(t.price,n,i)}}})])])}),0)])}),0)])]),s("order-footer",{attrs:{price:e.totalPrice,num:e.totalNum}})],1)},i=[],a=(s("ac6a"),s("cadf"),s("551c"),s("097d"),s("7f43")),r=a.create({baseURL:"",timeout:3e3,headers:{"X-Custom-Header":"foobar"}}),o=r,c={getGoodsList:function(){return o.get("/goods_list")}},u=s("8ecb"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",{staticClass:"footer"},[s("span",{class:{gouwuche:!0,bg1:0==e.num,bg2:e.num>0}},[s("count",{staticClass:"count",attrs:{num:e.num}})],1),s("div",{staticClass:"money"},[s("p",{directives:[{name:"show",rawName:"v-show",value:0!=e.price,expression:"price != 0"}],staticClass:"price"},[e._v(e._s(e.price))]),s("p",{directives:[{name:"show",rawName:"v-show",value:0==e.price,expression:"price == 0"}]},[e._v("未选购商品")]),s("p",[e._v("另需配送费1元")])]),s("span",{class:{qisong:!0,jiesuan:e.price>=100},domProps:{textContent:e._s(this.text1)}})])},f=[],d=(s("c5f6"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{directives:[{name:"show",rawName:"v-show",value:e.num>0,expression:"num > 0"}],staticClass:"count",domProps:{textContent:e._s(e.num)}})}),p=[],m={name:"count",props:{num:{type:Number,default:0}}},v=m,h=(s("bd29"),s("2877")),_=Object(h["a"])(v,d,p,!1,null,"32e57bb6",null);_.options.__file="count.vue";var b=_.exports,C={data:function(){return{selfPrice:0}},computed:{text1:function(){return 0==this.price?"￥100起送":this.price>100?"去结算":"还差￥"+(100-this.price)+"起送"}},props:{price:{type:Number,default:0},num:{type:Number,default:0}},components:{count:b}},x=C,g=(s("9206"),Object(h["a"])(x,l,f,!1,null,"0fb8f84a",null));g.options.__file="order_foot.vue";var w=g.exports,y=s("64d0"),N=0,j={name:"order",data:function(){return{goodsList:[],listHeight:[],scrollY:0,totalPrice:0,isShowReduce:!1,selectNumArray:[],itemSelectNumArray:[],totalNum:0}},computed:{currentMenuIndex:function(){for(var e=this.listHeight.length,t=0;t<e;t++){var s=this.listHeight[t],n=this.listHeight[t+1];if(!n||this.scrollY>=s&&this.scrollY<n)return t}return 0}},methods:{getGoodsList:function(){c.getGoodslist().then(function(e){}).catch(function(e){console.error(e)})},initSelectNum:function(){var e=this;this.goodsList.forEach(function(t){var s=t.foods.length,n=[];e.itemSelectNumArray.push(0);for(var i=0;i<s;i++)n.push(0);e.selectNumArray.push(n)})},_initScroll:function(){var e=this;this.menuScroll=new u["a"](this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new u["a"](this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(t){e.scrollY=Math.abs(Math.round(t.y))})},_calculateHeight:function(){var e=this.$refs.foodsList,t=0;this.listHeight.push(t);for(var s=0;s<e.length;s++){var n=e[s];t+=n.clientHeight,this.listHeight.push(t)}},selectMenu:function(e,t){var s=this.$refs.foodsList,n=s[e];this.foodsScroll.scrollToElement(n,300)},add_cart:function(e,t,s){this.totalPrice+=e,this.selectNumArray[t][s]+=1,this.itemSelectNumArray[t]+=1,this.totalNum+=1},remove_cart:function(e,t,s){this.totalPrice-=e,this.selectNumArray[t][s]-=1,this.itemSelectNumArray[t]-=1,this.totalNum-=1}},created:function(){var e=this;y.error===N&&(this.goodsList=y.goodsList,this.$nextTick(function(){setTimeout(function(){e._initScroll(),e._calculateHeight()},0)})),this.initSelectNum()},mounted:function(){},components:{orderFooter:w,count:b}},S=j,P=(s("6393"),Object(h["a"])(S,n,i,!1,null,"6dc511aa",null));P.options.__file="order.vue";t["default"]=P.exports},1028:function(e,t,s){},"1d0f":function(e,t,s){},"236b":function(e,t,s){"use strict";var n=s("af6e"),i=s.n(n);i.a},"245a":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var n=s("fddc"),i=n.Random,a=function(){for(var e=[],t=0;t<100;t++){var s={title:i.csentence(5,8),thumbnail_pic_s:i.dataImage("300x250","mock的图片"),author_name:i.cname(),date:i.date()+" "+i.time()};e.push(s)}return{articles:e}},r=function(){return{business_name:"肯德基宅急送(鹤龙店)",score:"4.3",monthly_sales_volume:401,delivery_time:30}};n.mock("/news/test","get",a),n.mock("/business_info","get",r)},"3eb8":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"business_tab"}},[s("ul",{staticClass:"nav clearfix"},[s("li",{staticClass:"li",on:{click:function(t){e.index=1}}},[s("p",{class:{item:!0,jiacu:1==e.index}},[e._v("\n                点餐"),s("span",{class:{tab:1==e.index}})])]),s("li",{staticClass:"li",on:{click:function(t){e.index=2}}},[s("p",{class:{item:!0,jiacu:2==e.index}},[e._v("\n                评价"),s("span",{class:{tab:2==e.index}})])]),s("li",{staticClass:"li",on:{click:function(t){e.index=3}}},[s("p",{class:{item:!0,jiacu:3==e.index}},[e._v("\n                商家"),s("span",{class:{tab:3==e.index}})])])]),s("order",{directives:[{name:"show",rawName:"v-show",value:1==e.index,expression:"index==1"}]}),s("evaluate",{directives:[{name:"show",rawName:"v-show",value:2==e.index,expression:"index==2"}]}),s("business",{directives:[{name:"show",rawName:"v-show",value:3==e.index,expression:"index==3"}]})],1)},i=[],a=(s("cadf"),s("551c"),s("097d"),s("d7a3")),r=s("c26e"),o=s("09cf"),c={name:"business_tab",data:function(){return{index:1}},components:{business:a["default"],evaluate:r["default"],order:o["default"]}},u=c,l=(s("9e9d"),s("2877")),f=Object(l["a"])(u,n,i,!1,null,"25a1d88d",null);f.options.__file="business_tab.vue";t["default"]=f.exports},"4dcb":function(e,t,s){},"4ee2":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var n=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},a=[],r=(s("7c55"),s("2877")),o={},c=Object(r["a"])(o,i,a,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,l=s("8c4f"),f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("businessJieshao"),s("business-tab")],1)},d=[],p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{staticClass:"jieshao"},[s("div",{staticClass:"info"},[s("div",{staticClass:"info-photo"},[s("div",{staticClass:"photo"},[s("img",{attrs:{src:"https://elm.cangdu.org/img/169223a3ea727542.jpg"}})])]),s("div",{staticClass:"info-text"},[s("h1",[e._v("肯德基")]),s("p",[e._v("商家配送/2分钟送达/配送费5元")]),s("p",[e._v("公告：欢迎光临，用餐高峰请提前下单，谢谢")])])]),s("div",{staticClass:"huodong"},[s("span",{staticClass:"left"},[e._v("满30减5，满60减8（APP专享）")]),s("span",{staticClass:"right"},[e._v("一个活动")])])])}],v={},h=v,_=(s("89b0"),Object(r["a"])(h,p,m,!1,null,"0288fe68",null));_.options.__file="business_jieshao.vue";var b=_.exports,C=s("3eb8"),x=(new n["a"],{name:"home",components:{businessJieshao:b,businessTab:C["default"]}}),g=x,w=(s("236b"),Object(r["a"])(g,f,d,!1,null,"5c4c9e67",null));w.options.__file="Home.vue";var y=w.exports;n["a"].use(l["a"]);var N=new l["a"]({routes:[{path:"/",name:"home",component:y},{path:"/business_tab",name:"business_tab",component:function(){return Promise.resolve().then(s.bind(null,"3eb8"))},children:[{path:"/order",name:"order",component:function(){return Promise.resolve().then(s.bind(null,"09cf"))}},{path:"/evaluate",name:"evaluate",component:function(){return Promise.resolve().then(s.bind(null,"c26e"))}},{path:"/business",name:"business",component:function(){return Promise.resolve().then(s.bind(null,"d7a3"))}}]}]}),j=s("2f62");n["a"].use(j["a"]);var S=new j["a"].Store({state:{},mutations:{},actions:{}});s("4ee2"),s("4dcb");n["a"].config.productionTip=!1,s("245a"),new n["a"]({router:N,store:S,render:function(e){return e(u)}}).$mount("#app")},5936:function(e,t,s){"use strict";var n=s("8510"),i=s.n(n);i.a},"5c48":function(e,t,s){},6393:function(e,t,s){"use strict";var n=s("e062"),i=s.n(n);i.a},"64d0":function(e){e.exports={error:0,goodsList:[{name:"优惠",foods:[{name:"皮蛋瘦肉粥",sellCount:8,price:23},{name:"奥堡单人",sellCount:5,price:43},{name:"皮蛋瘦肉粥",sellCount:8,price:73},{name:"奥堡单人",sellCount:5,price:88},{name:"皮蛋瘦肉粥",sellCount:8,price:11},{name:"皮蛋瘦肉粥",sellCount:8,price:23}]},{name:"炸鸡啤酒",foods:[{name:"百威啤酒",sellCount:8,price:23},{name:"86元炸鸡啤酒",sellCount:5,price:16},{name:"116元炸鸡啤酒",sellCount:5,price:99}]},{name:"夜宵套餐",foods:[{name:"冬菇滑稽粥",sellCount:8,price:12},{name:"葡式蛋挞",sellCount:5,price:11},{name:"八块香辣鸡翅",sellCount:8,price:23},{name:"超级翅桶多人餐",sellCount:5,price:76},{name:"十翅分享桶",sellCount:5,price:16}]},{name:"夜宵单品",foods:[{name:"九珍果汁饮料",sellCount:8,price:26},{name:"醇豆浆",sellCount:5,price:41},{name:"安心大油条",sellCount:8,price:23},{name:"芙蓉荟蔬汤",sellCount:5,price:46},{name:"新奥尔良烤翅",sellCount:8,price:23}]}]}},"7c55":function(e,t,s){"use strict";var n=s("5c48"),i=s.n(n);i.a},8510:function(e,t,s){},"89b0":function(e,t,s){"use strict";var n=s("b551"),i=s.n(n);i.a},9206:function(e,t,s){"use strict";var n=s("1028"),i=s.n(n);i.a},"9e9d":function(e,t,s){"use strict";var n=s("9ee1"),i=s.n(n);i.a},"9ee1":function(e,t,s){},aadb:function(e,t,s){},af6e:function(e,t,s){},b551:function(e,t,s){},bceb:function(e,t,s){"use strict";var n=s("1d0f"),i=s.n(n);i.a},bd29:function(e,t,s){"use strict";var n=s("aadb"),i=s.n(n);i.a},c26e:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"evaluate"}},[s("div",{staticClass:"score"},[s("div",{staticClass:"score-item score-num"},[e._v("4.6")]),s("div",{staticClass:"score-item score-start"},[s("span",{staticClass:"txt"},[e._v("商家评分")]),s("span",{staticClass:"num"},[e._v("4.6")])]),s("div",{staticClass:"score-item score-taste"},[s("span",{staticClass:"txt"},[e._v("味道")]),s("span",{staticClass:"num"},[e._v("4.2")])]),s("div",{staticClass:"score-item score-packing"},[s("span",{staticClass:"txt"},[e._v("包装")]),s("span",{staticClass:"num"},[e._v("4.6")])]),s("div",{staticClass:"score-item score-delivery"},[s("span",{staticClass:"txt"},[e._v("配送")]),s("span",{staticClass:"num"},[e._v("4.6")])])])])}],a=(s("cadf"),s("551c"),s("097d"),{name:"evaluate"}),r=a,o=(s("bceb"),s("2877")),c=Object(o["a"])(r,n,i,!1,null,"71b96309",null);c.options.__file="evaluate.vue";t["default"]=c.exports},d7a3:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"business"}},[e._v("\n    商家\n")])},i=[],a={name:"business"},r=a,o=(s("5936"),s("2877")),c=Object(o["a"])(r,n,i,!1,null,"2014e1a1",null);c.options.__file="business.vue";t["default"]=c.exports},e062:function(e,t,s){}});
//# sourceMappingURL=app.db92f6f5.js.map