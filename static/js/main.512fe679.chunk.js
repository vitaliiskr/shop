(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(t,e,c){},27:function(t,e,c){},28:function(t,e,c){},29:function(t,e,c){},30:function(t,e,c){},32:function(t,e,c){},33:function(t,e,c){},39:function(t,e,c){"use strict";c.r(e);var n=c(0),i=c.n(n),a=c(19),o=c.n(a),r=c(10),u=(c(26),c(12)),s=c(17),d=c(21),l=(c(27),c(28),c(2)),m=(c(29),c(30),c(1)),b=function(t){var e=t.onClick;return Object(m.jsx)("button",{type:"button",className:"button product__button",onClick:e,children:"Add to Bag"})},p=function(t){var e=t.products,c=t.addGoods;return Object(m.jsx)("ul",{className:"product-list",children:e.map((function(t){return Object(m.jsx)("li",{children:Object(m.jsxs)("div",{className:"product",children:[Object(m.jsx)("div",{className:"product__name",children:t.name}),Object(m.jsx)("img",{src:t.img,alt:"Product",className:"product__img"}),Object(m.jsx)("div",{className:"product__description",children:t.label}),Object(m.jsx)("div",{className:"product__price",children:"Price: ".concat(t.price," $")}),Object(m.jsx)(b,{onClick:function(){return c(t)}})]})},t.id)}))})},j=(c(32),c(33),function(t){var e=t.goodsInBag,c=t.removeProduct,n=t.reduceQuantity,i=t.increaseQuantity;return Object(m.jsx)(m.Fragment,{children:e.map((function(t){return Object(m.jsxs)("div",{className:"bag-product",children:[Object(m.jsx)("div",{className:"bag-product__name",children:t.name}),Object(m.jsx)("div",{className:"bag-product__quantity",children:"Quantity: ".concat(t.quantity)}),Object(m.jsx)("div",{className:"bag-product__price",children:"Price: ".concat(t.price," $")}),Object(m.jsx)("div",{className:"bag-product__total-price",children:"Total: ".concat(t.price*t.quantity," $")}),Object(m.jsxs)("div",{className:"bag-product__control",children:[Object(m.jsx)("button",{type:"button",className:"bag-product__change-quantity",onClick:function(){return n(t)},children:"-"}),Object(m.jsx)("img",{alt:t.name,src:t.img,className:"bag-product__img"}),Object(m.jsx)("button",{type:"button",className:"bag-product__change-quantity",onClick:function(){return i(t)},children:"+"})]}),Object(m.jsx)("button",{type:"button",onClick:function(){return c(t)},children:"X"})]},t.id)}))})}),g=function(t){var e=t.goodsInBag,c=t.removeProduct,n=t.reduceQuantity,i=t.increaseQuantity,a=t.clearBag;return Object(m.jsx)(m.Fragment,{children:e.length<1?Object(m.jsx)("h3",{children:"Bag is empty"}):Object(m.jsxs)("div",{className:"bag",children:[Object(m.jsx)(j,{goodsInBag:e,removeProduct:c,reduceQuantity:n,increaseQuantity:i,clearBag:a}),Object(m.jsx)("button",{className:"bag__button",type:"button",onClick:a,children:"Clear Bag"})]})})},h=[{id:1,name:"article 1",label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt utlabore et dolore magna aliqua.",price:25,img:"https://m2k.com.ua/image/cache/catalog/m2kphoto/atmosphere/krossovki_nike_m2k_tekno_atmosphere_grey_bv0074_001_1-700x700-product_popup.jpg"},{id:2,name:"article 2",label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",price:35,img:"https://m2k.com.ua/image/cache/catalog/m2kphoto/atmosphere/krossovki_nike_m2k_tekno_atmosphere_grey_bv0074_001_1-700x700-product_popup.jpg"},{id:3,name:"article 3",label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",price:45,img:"https://m2k.com.ua/image/cache/catalog/m2kphoto/atmosphere/krossovki_nike_m2k_tekno_atmosphere_grey_bv0074_001_1-700x700-product_popup.jpg"}];var _=function(){var t=Object(n.useState)([]),e=Object(d.a)(t,2),c=e[0],i=e[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(r.b,{className:"nav-link",to:"/home",children:"Products"}),Object(m.jsx)(r.b,{className:"nav-link nav-link-bag",to:"/bag",children:"Bag"}),Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/bag",children:Object(m.jsx)(g,{reduceQuantity:function(t){t.quantity>1?(c.find((function(e){return t.id===e.id})).quantity-=1,i((function(t){return Object(u.a)(t)}))):i((function(e){return e.filter((function(e){return e.id!==t.id}))}))},goodsInBag:c,removeProduct:function(t){i((function(e){return e.filter((function(e){return e.id!==t.id}))}))},increaseQuantity:function(t){c.find((function(e){return t.id===e.id})).quantity+=1,i((function(t){return Object(u.a)(t)}))},clearBag:function(){i([])}})}),Object(m.jsx)(l.a,{path:"/",children:Object(m.jsx)(p,{products:h,addGoods:function(t){if(c.some((function(e){return e.id===t.id}))){c.find((function(e){return e.id===t.id})).quantity+=1}else{var e=Object(s.a)(Object(s.a)({},t),{},{quantity:1});i((function(t){return[].concat(Object(u.a)(t),[e])}))}}})})]})]})},f=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;c(t),n(t),i(t),a(t),o(t)}))};o.a.render(Object(m.jsx)(r.a,{children:Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(_,{})})}),document.getElementById("root")),f()}},[[39,1,2]]]);
//# sourceMappingURL=main.512fe679.chunk.js.map