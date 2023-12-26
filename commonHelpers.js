import{g as d,i as g}from"./assets/icon-253637f9.js";import"./assets/vendor-e21ff9e3.js";const m={FILTERS_KEY:"filters",CART_KEY:"cart"},u=document.querySelector("span#cart-counter"),p=document.querySelector(".js-cart-block"),l=document.querySelector(".cart-list-block"),y=document.querySelector(".cart-delete-btn");y.addEventListener("click",v);function v(){localStorage.removeItem("cart"),i()}function o(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}const h=o("cart"),s=h.map(t=>t._id);async function i(){let t=await o(m.CART_KEY);if(u.textContent=t.length,t.length===0){p.innerHTML=S();return}f()}i();async function f(){l.innerHTML="";try{for(let t=0;t<s.length;t+=1){const e=await d(s[t]),n=k(e,s[t]);l.innerHTML+=n,b(".cart-close").then(c=>{c.forEach(a=>{a.addEventListener("click",r=>{console.log(r.currentTarget.id)})})}).catch(c=>{console.error(c.message)})}}catch(t){console.log(t)}}function b(t){return new Promise((e,n)=>{const c=document.querySelectorAll(t);if(c.length>0)e(c);else{const a=new MutationObserver(()=>{const r=document.querySelectorAll(t);r.length>0&&(a.disconnect(),e(r))});a.observe(document.documentElement,{childList:!0,subtree:!0})}})}function k(t){return t.category.includes("_")&&(t.category=t.category.replace(/_/g," ")),`
        <div class="cart-card-container" data-productlist-id="${t._id}">
          <div class="cart-image-container">
            <img src="${t.img}" alt="${t.name}" class="">
          </div>
        
        <div class="cart-info">
          <div class="cart-descript-text">
            <p class="cart-prod-name">${t.name}</p>
          <div class="cart-frame">
  
          <div class="category-cont">
            <p class="cart-category-text">Category:
              <span class="cart-category-black">${t.category}</span></p>
              
              <ul class="cart-text-cat">
              <li class="cart-text-size">

            <p class="cart-size-text">Size:
              <span class="cart-size-black">${t.size}</span></p></li>
              
          </div>
  
            <div class="cart-price">
            <p class="cart-card-price">${t.price}</p>
          </div>
            <hr class="cart-line">

           <button type="button" id="${t._id}" class="cart-close">
              <svg class="cart-close-icon" width="18" height="18">
                <use href="${g}#icon-close"></use>
              </svg>
            </button>

          </div>
        </div>
      </div>
    `}function S(){return` 
  <div class="js-cart-block">
  <div class="cart-empty-basket">
  <img class="cart-basket-img"
                src="../img/yellowBasket.png"
                alt="yellow basket"
                loading="lazy"
                width="132"
                height="114"
              />
  </div>
  <div class="cart-empty-desc">
              <ul class="cart-desc-ul">
                <li>
                  <p class="cart-empty-text">
                    Your basket is <span class="cart-text-span">
                    empty...</span>
                  </p>
                </li>
                <li>
                  <p class="cart-gray-text">
                    Go to the main page to select your favorite <br /> products and add
                    them to the cart.
                  </p>
                </li>
              </ul>
            </div>
  `}
//# sourceMappingURL=commonHelpers.js.map
