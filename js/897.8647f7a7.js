"use strict";(self["webpackChunkmyshop"]=self["webpackChunkmyshop"]||[]).push([[897],{6897:function(s,t,a){a.r(t),a.d(t,{default:function(){return v}});a(7658);var e=function(){var s=this,t=s._self._c;return t("div",{staticClass:"pay"},[t("van-nav-bar",{attrs:{fixed:"",title:"订单结算台","left-arrow":""},on:{"click-left":function(t){return s.$router.go(-1)}}}),t("div",{staticClass:"address",on:{click:function(t){return s.$router.push("/useraddress")}}},[t("div",{staticClass:"left-icon"},[t("van-icon",{attrs:{name:"logistics"}})],1),s.defaultAddress?t("div",{staticClass:"info"},[t("div",{staticClass:"info-content"},[t("span",{staticClass:"name"},[s._v(s._s(s.defaultAddress.name))]),t("span",{staticClass:"mobile"},[s._v(s._s(s.defaultAddress.phone))])]),t("div",{staticClass:"info-address"},[s._v(" "+s._s(s.detailAddress)+" ")])]):t("div",{staticClass:"info"},[s._v(" 请选择配送地址 ")]),t("div",{staticClass:"right-icon"},[t("van-icon",{attrs:{name:"arrow"}})],1)]),t("div",{staticClass:"pay-list"},[t("div",{staticClass:"list"},s._l(s.order.goodsList,(function(a){return t("div",{key:a.goods_id,staticClass:"goods-item"},[t("div",{staticClass:"left"},[t("img",{attrs:{src:a.goods_image,alt:""}})]),t("div",{staticClass:"right"},[t("p",{staticClass:"tit text-ellipsis-2"},[s._v(" "+s._s(a.goods_name)+" ")]),t("p",{staticClass:"info"},[t("span",{staticClass:"count"},[s._v("x"+s._s(a.total_num))]),t("span",{staticClass:"price"},[s._v("¥"+s._s(a.goods_price))])])])])})),0),t("div",{staticClass:"flow-num-box"},[t("span",[s._v("共 "+s._s(s.order.orderTotalNum)+" 件商品，合计：")]),t("span",{staticClass:"money"},[s._v("￥"+s._s(s.order.orderPayPrice))])]),t("div",{staticClass:"pay-detail"},[t("div",{staticClass:"pay-cell"},[t("span",[s._v("订单总金额：")]),t("span",{staticClass:"red"},[s._v("￥"+s._s(s.order.orderPayPrice))])]),t("van-coupon-cell",{attrs:{coupons:s.coupons,"chosen-coupon":s.chosenCoupon},on:{click:function(t){s.showList=!0}}}),t("div",{staticClass:"pay-cell"},[t("span",[s._v("配送费用：")]),s.defaultAddress?t("span",{staticClass:"red"},[s._v("+￥0.00")]):t("span",[s._v("请先选择配送地址")])])],1),t("div",{staticClass:"pay-way"},[t("span",{staticClass:"tit"},[s._v("支付方式：")]),t("van-radio-group",{model:{value:s.radio,callback:function(t){s.radio=t},expression:"radio"}},[t("van-cell-group",{attrs:{border:!1}},[t("van-cell",{attrs:{icon:"balance-o",title:`余额支付（可用 ¥ ${s.personal.balance} 元）`,clickable:""},on:{click:function(t){s.radio="1"}},scopedSlots:s._u([{key:"right-icon",fn:function(){return[t("van-radio",{attrs:{name:"1"}})]},proxy:!0}])}),t("van-cell",{attrs:{icon:"alipay",title:"支付宝",clickable:""},on:{click:function(t){s.radio="2"}},scopedSlots:s._u([{key:"right-icon",fn:function(){return[t("van-radio",{attrs:{name:"2"}})]},proxy:!0}])}),t("van-cell",{attrs:{icon:"wechat",title:"微信",clickable:""},on:{click:function(t){s.radio="3"}},scopedSlots:s._u([{key:"right-icon",fn:function(){return[t("van-radio",{attrs:{name:"3"}})]},proxy:!0}])})],1)],1)],1),t("div",{staticClass:"buytips"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:s.remark,expression:"remark"}],attrs:{placeholder:"选填：买家留言（50字内）",name:"",id:"",cols:"30",rows:"10"},domProps:{value:s.remark},on:{input:function(t){t.target.composing||(s.remark=t.target.value)}}})])]),t("div",{staticClass:"footer-fixed"},[t("div",{staticClass:"left"},[s._v("实付款："),t("span",[s._v("￥"+s._s(s.order.orderPayPrice))])]),t("div",{staticClass:"tipsbtn",on:{click:s.handlerSubmitOrder}},[s._v("提交订单")])]),t("van-popup",{staticStyle:{height:"90%","padding-top":"4px"},attrs:{round:"",position:"bottom"},model:{value:s.showList,callback:function(t){s.showList=t},expression:"showList"}},[t("van-coupon-list",{attrs:{coupons:s.coupons,"chosen-coupon":s.chosenCoupon,"disabled-coupons":s.disabledCoupons},on:{change:s.onChange,exchange:s.onExchange}})],1)],1)},o=[],i=(a(9491),a(6450)),n=a(3822),r=a(2047);const c={available:1,condition:"无使用门槛\n最多优惠12元",reason:"",value:150,name:"优惠券名称",startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"元"};var l={name:"PayIndex",data(){return{order:"",personal:"",radio:"1",remark:"",chosenCoupon:-1,coupons:[c],disabledCoupons:[c],showList:!1}},computed:{...(0,n.Se)("address",["defaultAddress"]),detailAddress(){const s=Object.values(this.defaultAddress.region);return s.push(this.defaultAddress.detail),s.join(",")},backUrl(){return this.$route.query.backUrl}},methods:{...(0,n.nv)("address",["getUserAddressListAndDefaultID"]),async handlerSubmitOrder(){const s=await(0,r.pm)(this.$route.query);(0,i.Z)({type:"success",message:"订单提交成功"}),s.data&&"success"===s.message&&(this.backUrl?this.$router.replace(this.backUrl):this.$router.replace("/order"))},onChange(s){this.showList=!1,this.chosenCoupon=s},onExchange(s){this.coupons.push(c)}},async created(){await this.getUserAddressListAndDefaultID();const{data:{order:s,personal:t}}=await(0,r.B9)(this.$route.query);this.order=s,this.personal=t}},d=l,u=a(1001),p=(0,u.Z)(d,e,o,!1,null,"037f22bc",null),v=p.exports}}]);
//# sourceMappingURL=897.8647f7a7.js.map