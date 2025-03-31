"use strict";(self["webpackChunkmyshop"]=self["webpackChunkmyshop"]||[]).push([[5],{7005:function(t,e,a){a.r(e),a.d(e,{default:function(){return C}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"order"},[e("van-nav-bar",{attrs:{title:"我的订单","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("van-tabs",{on:{change:t.switchTab},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[e("van-tab",{attrs:{name:"all",title:"全部"}}),e("van-tab",{attrs:{name:"payment",title:"待支付"}}),e("van-tab",{attrs:{name:"delivery",title:"待发货"}}),e("van-tab",{attrs:{name:"received",title:"待收货"}}),e("van-tab",{attrs:{name:"comment",title:"待评价"}})],1),t.orderDataList.length<=0?e("van-empty",{attrs:{description:"空空如也~"}}):t._l(t.orderDataList,(function(a){return e("order-list-item",{key:a.order_id,attrs:{order:a},on:{updateOrderList:t.switchTab}})}))],2)},r=[],i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"order-list-item"},[e("div",{staticClass:"tit"},[e("div",{staticClass:"time"},[t._v(t._s(t.order.create_time))]),e("div",{staticClass:"status"},[e("span",[t._v(t._s("待取消"===t.order.state_text?"已取消":t.order.state_text))])])]),e("div",{staticClass:"list"},t._l(t.order.goods,(function(a){return e("div",{key:a.goods_id,staticClass:"list-item"},[e("div",{staticClass:"goods-img"},[e("img",{attrs:{src:a.goods_image,alt:""}})]),e("div",{staticClass:"goods-content"},[e("div",{staticClass:"text-ellipsis-2"},[t._v(" "+t._s(a.goods_name)+" ")]),e("van-tag",{staticStyle:{"margin-right":"5px"},attrs:{plain:"",type:"danger"}},[t._v("假一赔十")]),e("van-tag",{staticStyle:{"margin-right":"5px"},attrs:{plain:"",type:"danger"}},[t._v("运费险")])],1),e("div",{staticClass:"goods-trade"},[e("p",{staticStyle:{color:"#333"}},[t._v("¥ "+t._s(a.goods_price))]),e("p",[t._v("x "+t._s(a.total_num))])])])})),0),e("div",{staticClass:"total"},[t._v(" 共"+t._s(t.totalNum)+"件，实付款 ¥"+t._s(t.order.total_price)+" ")]),e("div",{staticClass:"actions"},["待付款"===t.order.state_text?e("span",[t._v("立刻付款")]):t._e(),t.showCancelBtn()?e("span",{on:{click:function(e){return t.handlerCancelOrder(t.order.order_id)}}},[t._v("申请取消")]):t._e(),"待收货"===t.order.state_text?e("span",{on:{click:function(e){return t.handlerConfirmOrder(t.order.order_id)}}},[t._v("确认收货")]):t._e(),"已完成"===t.order.state_text?e("span",{on:{click:t.handlerComment}},[t._v("评价")]):t._e(),e("span",{staticClass:"highlight",on:{click:function(e){return t.handlerAddOrderToCart()}}},[t._v("加入购物车")])])])},n=[],o=(a(9491),a(6450)),d=(a(7658),a(2047)),c=a(3086),l={props:{order:{type:Object,required:!0}},computed:{totalNum(){return this.order.goods.reduce(((t,e)=>t+e.total_num),0)}},methods:{showCancelBtn(){if("待取消"!==this.order.state_text&&"已完成"!==this.order.state_text)return!0},async handlerCancelOrder(t){const e=await(0,d.sl)(t);(0,o.Z)({type:"success",message:e.message}),this.$emit("updateOrderList")},async handlerConfirmOrder(t){const e=await(0,d.Nc)(t);(0,o.Z)({type:"success",message:e.message}),this.$emit("updateOrderList")},handlerAddOrderToCart(){this.order.goods.forEach((async t=>{await(0,c.II)(t.goods_id,t.total_num,t.goods_sku_id)}))},handlerComment(){this.$store.commit("comment/setCommentGoods",this.order),this.$router.push("/productcomment")}}},m=l,u=a(1001),_=(0,u.Z)(m,i,n,!1,null,"2ac6d8d1",null),v=_.exports,h={name:"OrderPage",components:{OrderListItem:v},data(){return{active:this.$route.query.dataType||"all",orderDataList:[]}},async created(){await this.initData()},methods:{async initData(){const t=await(0,d.Fw)(this.active,1);this.orderDataList=t.data.list.data},switchTab(t,e){this.initData()}}},p=h,g=(0,u.Z)(p,s,r,!1,null,"9f4971e2",null),C=g.exports}}]);
//# sourceMappingURL=5.2e9e0311.js.map