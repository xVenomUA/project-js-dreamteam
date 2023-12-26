import"./assets/styles-8bb4f042.js";document.querySelector("span#cart-counter");document.querySelector(".js-cart-block");document.querySelector(".cart-list-block");function o(e){try{const t=localStorage.getItem(e);return t?JSON.parse(t):[]}catch(t){console.log(t.message)}}const c=o("cart"),r=c.map(e=>e._id);console.log(r);
//# sourceMappingURL=commonHelpers.js.map
