(function(n){function t(t){for(var o,r,c=t[0],u=t[1],s=t[2],f=0,d=[];f<c.length;f++)r=c[f],i[r]&&d.push(i[r][0]),i[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(n[o]=u[o]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),e()}function e(){for(var n,t=0;t<a.length;t++){for(var e=a[t],o=!0,r=1;r<e.length;r++){var u=e[r];0!==i[u]&&(o=!1)}o&&(a.splice(t--,1),n=c(c.s=e[0]))}return n}var o={},i={app:0},a=[];function r(n){return c.p+"js/"+({}[n]||n)+"."+{"chunk-02b6fb59":"24a915ad","chunk-3abbb3f4":"d36c21d5","chunk-5c40e249":"e1ea1e2d","chunk-c4a30542":"f05d3904","chunk-0dab05b0":"d1a47fc6","chunk-1ff2d500":"4284aa7e","chunk-405a528a":"502f4998","chunk-45e192f5":"9cacdccc","chunk-e6cecb16":"1f11cbb5"}[n]+".js"}function c(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(n){var t=[],e=i[n];if(0!==e)if(e)t.push(e[2]);else{var o=new Promise(function(t,o){e=i[n]=[t,o]});t.push(e[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(n),a=function(t){u.onerror=u.onload=null,clearTimeout(s);var e=i[n];if(0!==e){if(e){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,r=new Error("Loading chunk "+n+" failed.\n("+o+": "+a+")");r.type=o,r.request=a,e[1](r)}i[n]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},c.m=n,c.c=o,c.d=function(n,t,e){c.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},c.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,t){if(1&t&&(n=c(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)c.d(e,o,function(t){return n[t]}.bind(null,o));return e},c.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return c.d(t,"a",t),t},c.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},c.p="",c.oe=function(n){throw console.error(n),n};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var l=s;a.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"097e":function(n,t){(function(n,t){var e=n.documentElement,o="orientationchange"in window?"orientationchange":"resize",i=function(){var n=e.clientWidth;n&&(e.style.fontSize=window.screen.width/10+"px")};n.addEventListener&&(t.addEventListener(o,i,!1),n.addEventListener("DOMContentLoaded",i,!1))})(document,window)},2022:function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,'\n#app {\n  font-family: "Avenir", Helvetica, Arial, sans-serif;\n  font-size: 0.3rem;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n',""])},"245a":function(n,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("097d");var o=e("96eb"),i=o.Random,a=0,r=100,c=function(){for(var n=[],t=0;t<100;t++){var e={title:i.csentence(5,8),thumbnail_pic_s:i.dataImage("300x250","mock的图片"),author_name:i.cname(),date:i.date()+" "+i.time()};n.push(e)}return{articles:n}},u=function(){return{business_name:"肯德基宅急送(鹤龙店)",score:"4.3",monthly_sales_volume:401,delivery_time:30}},s=function(){var n=[];if(a+=10,a<=r){for(var t=0;t<10;t++){var e={title:i.cword(3,5),score:i.float(3,4,0,1),img:i.image()};n.push(e)}return n}return 0};o.mock("/news/test","get",c),o.mock("/business_info","get",u),o.mock("/getShoplist","get",s)},"4dcb":function(n,t,e){},"4ee2":function(n,t,e){},"56d7":function(n,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("097d");var o=e("2b0e"),i=e("cc85"),a=(i["a"],{components:{footOne:i["a"]}}),r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{include:"home"}},[e("router-view")],1),n._v(" "),e("foot-one")],1)},c=[],u=e("2455");function s(n){e("ffa3")}var f=!1,l=s,d=null,h=null,p=Object(u["a"])(a,r,c,f,l,d,h),v=p.exports,b=e("8c4f");o["default"].use(b["a"]);var m=new b["a"]({routes:[{path:"/home",name:"home",component:function(){return Promise.all([e.e("chunk-02b6fb59"),e.e("chunk-c4a30542")]).then(e.bind(null,"bb51"))}},{path:"/checkout",name:"checkout",component:function(){return e.e("chunk-45e192f5").then(e.bind(null,"7cb4"))}},{path:"/",name:"page",component:function(){return Promise.all([e.e("chunk-02b6fb59"),e.e("chunk-3abbb3f4")]).then(e.bind(null,"2048"))}},{path:"/profile",name:"profile",component:function(){return e.e("chunk-1ff2d500").then(e.bind(null,"c66d"))}},{path:"/login",name:"login",component:function(){return Promise.all([e.e("chunk-02b6fb59"),e.e("chunk-5c40e249")]).then(e.bind(null,"a55b"))}},{path:"/about",name:"about",component:function(){return e.e("chunk-e6cecb16").then(e.bind(null,"f820"))}},{path:"/search",name:"search",component:function(){return e.e("chunk-0dab05b0").then(e.bind(null,"2d3b"))}},{path:"/discover",name:"discover",component:function(){return e.e("chunk-405a528a").then(e.bind(null,"6723"))}}]}),g=e("2f62"),_={cartList:[]},k={},w={ADD_CART_MU:function(n,t){for(var e=n.cartList,o=0;o<e.length;o++)if(e[o].id===t.id)return void(e[o]["num"]+=1);n.cartList.push(t)},REMOVE_CART_MU:function(n,t){for(var e=n.cartList,o=0;o<e.length;o++)if(e[o].id===t.id)return void(e[o].num>1?e[o]["num"]-=1:e.splice(o,1))},CLEAR_CART_MU:function(n){var t=n.cartList.length;n.cartList.splice(0,t)}},x={ADD_CART:function(n,t){var e=n.commit;e("ADD_CART_MU",t)},REMOVE_CART:function(n,t){var e=n.commit;e("REMOVE_CART_MU",t)},CLEAR_CART:function(n){var t=n.commit;t("CLEAR_CART_MU")}},y={state:_,getters:k,mutations:w,actions:x};o["default"].use(g["a"]);var C=new g["a"].Store({modules:{shop_cart:y}}),O=C;e("097e"),e("4ee2"),e("4dcb"),e("aa35");o["default"].config.productionTip=!1,e("245a"),new o["default"]({router:m,store:O,render:function(n){return n(v)}}).$mount("#app")},"5cf3":function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,"\n.foot[data-v-4405d750] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 1.3rem;\n  background-color: #fff;\n  -webkit-box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);\n          box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);\n}\n.foot .li[data-v-4405d750] {\n    float: left;\n    width: 25%;\n    text-align: center;\n    padding-top: .24rem;\n    color: #8e8e93;\n}\n.foot i[data-v-4405d750] {\n    font-size: 0.48rem;\n}\n.foot span[data-v-4405d750] {\n    display: block;\n}\n.foot .bianse[data-v-4405d750] {\n    color: #0af;\n}\n.gejue[data-v-4405d750] {\n  height: 1.3rem;\n}\n",""])},"70e3":function(n,t,e){var o=e("5cf3");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var i=e("499e").default;i("341a86c2",o,!0,{})},cc85:function(n,t,e){"use strict";var o={data:function(){return{index:0}},methods:{bian0:function(){this.index=0},bian1:function(){this.index=1},bian2:function(){this.index=2},bian3:function(){this.index=3}}},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("ul",{staticClass:"foot clearfix"},[e("router-link",{class:{li:!0,bianse:0==this.index},attrs:{to:"/"},nativeOn:{click:function(t){return n.bian0(t)}}},[e("i",{staticClass:"iconfont icon-SSS"}),n._v(" "),e("span",[n._v("首页")])]),n._v(" "),e("router-link",{class:{li:!0,bianse:1==this.index},attrs:{to:"/discover"},nativeOn:{click:function(t){return n.bian1(t)}}},[e("i",{staticClass:"iconfont icon-faxian1"}),n._v(" "),e("span",[n._v("发现")])]),n._v(" "),e("router-link",{class:{li:!0,bianse:2==this.index},attrs:{to:"/aaa"},nativeOn:{click:function(t){return n.bian2(t)}}},[e("i",{staticClass:"iconfont icon-dingdan"}),n._v(" "),e("span",[n._v("订单")])]),n._v(" "),e("router-link",{class:{li:!0,bianse:3==this.index},attrs:{to:"/profile"},nativeOn:{click:function(t){return n.bian3(t)}}},[e("i",{staticClass:"iconfont icon-wode"}),n._v(" "),e("span",[n._v("我的")])])],1),n._v(" "),e("div",{staticClass:"gejue"})])},a=[],r=e("2455");function c(n){e("70e3")}var u=!1,s=c,f="data-v-4405d750",l=null,d=Object(r["a"])(o,i,a,u,s,f,l);t["a"]=d.exports},ffa3:function(n,t,e){var o=e("2022");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var i=e("499e").default;i("673ab8f8",o,!0,{})}});