webpackJsonp([4],{"34+y":function(t,e){},AeEs:function(t,e){},AnIW:function(t,e){},"Do/K":function(t,e){},EAqx:function(t,e){},HFfA:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("34+y"),i=(s.n(n),s("X+yh")),a=s.n(i),o=s("JWK+"),r=(s.n(o),s("pI1A")),c=(s.n(r),s("AeEs")),u=(s.n(c),s("AnIW")),d=(s.n(u),s("d7BR")),l=(s.n(d),s("Do/K")),h=(s.n(l),s("LjF4")),m=(s.n(h),s("7+uW")),p=s("mtWM"),f=s.n(p),g=s("gN+L"),b=s("TFhR"),y=s("mw3O"),k=s.n(y).a.parse(location.search.substring(1)).id;new m.default({el:"#app",components:{Swipe:g.a},data:{data:null,dealLists:[],tabber:0,bannerLists:[],skuType:1,popSeen:!1,skuNumber:1,cart:[],cartAdded:!1},watch:{popSeen:function(t,e){document.body.style.overflow=t?"hidden":"auto",document.querySelector("html").style.overflow=t?"hidden":"auto",document.body.style.height=t?"100%":"auto",document.querySelector("html").style.height=t?"100%":"auto",document.querySelector(".body-fixed-bottom").style.paddingBottom=t?0:"50px"}},created:function(){this.getGoodsDetail()},methods:{getGoodsDetail:function(){var t=this;f.a.get(b.a.goodsDetail,{params:{id:k}}).then(function(e){var s=e.data;t.data=s,s.imgs.forEach(function(e){t.bannerLists.push({link:"javascript:;",img:e})})}).catch(function(t){return document.write(t)})},getGoodsDeal:function(){var t=this;f.a.get(b.a.goodsDeal,{params:{id:k}}).then(function(e){var s=e.data;return t.dealLists=s.lists}).catch(function(t){return document.write(t)})},chooseSku:function(t){this.skuType=t,this.popSeen=!0},changeSkuNumber:function(t){1==this.skuNumber&&-1==t||this.skuNumber==this.data.remain&&1==t||(this.skuNumber+=t)},addCart:function(){this.cart.push({id:k,img:this.data.imgs[0],storeName:this.data.storeName,title:this.data.title,price:this.data.price,skuNumber:this.skuNumber,sku:this.data.sku}),this.popSeen=!1,this.cartAdded=!0,a()("已成功添加到购物车")}}})},"JWK+":function(t,e){},LjF4:function(t,e){},TFhR:function(t,e,s){"use strict";var n={hotLists:"/index/hotLists",bannerLists:"/index/bannerLists",kinds:"/category/kinds",items:"/category/items",searchHotItems:"/search/hotItems",goodsDetail:"/goods/details",goodsDeal:"/goods/deal",cartLists:"/cart/lists",mylists:"/address/mylists"};for(var i in n)n[i]="https://easy-mock.com/mock/5b0f9157b6b9de5a525896c6/youzan"+n[i];e.a=n},d7BR:function(t,e){},"gN+L":function(t,e,s){"use strict";var n=s("DNVT"),i=(s("mgS3"),{name:"swipe",props:["bannerLists"],mounted:function(){new n.a(".swiper-container",{pagination:{el:".swiper-pagination",clickable:!0},loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1}})}}),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},this._l(this.bannerLists,function(t){return e("div",{staticClass:"swiper-slide"},[e("a",{staticClass:"js-no-follow",attrs:{href:t.link}},[e("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])})),this._v(" "),e("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]};var o=s("VU/8")(i,a,!1,function(t){s("EAqx")},null,null);e.a=o.exports},mgS3:function(t,e){},pI1A:function(t,e){}},["HFfA"]);