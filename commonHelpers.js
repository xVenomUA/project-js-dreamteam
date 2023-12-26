import{g as y,i as v}from"./assets/icon-253637f9.js";import"./assets/vendor-e21ff9e3.js";const h={FILTERS_KEY:"filters",CART_KEY:"cart"},f=document.querySelector("span#cart-counter"),b=document.querySelector(".js-cart-block"),g=document.querySelector(".cart-list-block"),S=document.querySelector(".cart-delete-btn");S.addEventListener("click",k);function k(){localStorage.removeItem("cart"),i()}function m(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}const E=m("cart"),l=E.map(t=>t._id);async function i(){let t=await m(h.CART_KEY);if(f.textContent=t.length,t.length===0){b.innerHTML=x();return}L()}i();async function L(){g.innerHTML="";try{let t=[],e=[];for(let c=0;c<l.length;c+=1){const r=await y(l[c]),s=w(r,l[c]);g.innerHTML+=s;const n=JSON.parse(localStorage.getItem("cart"));_(".cart-close").then(o=>{e.push(n[c]._id),console.log(e),localStorage.setItem("cart1",JSON.stringify(t)),o.forEach(u=>{u.addEventListener("click",p=>{const d=p.currentTarget.id;console.log("removed id",d),e=e.filter(a=>a!==d),console.log(e),t=[];for(let a=0;a<e.length;a+=1)t.push({_id:e[a],quantity:1});console.log(t),localStorage.setItem("cart",JSON.stringify(t)),i()})})}).catch(o=>{console.error(o.message)})}}catch(t){console.log(t)}}function _(t){return new Promise((e,c)=>{const r=document.querySelectorAll(t);if(r.length>0)e(r);else{const s=new MutationObserver(()=>{const n=document.querySelectorAll(t);n.length>0&&(s.disconnect(),e(n))});s.observe(document.documentElement,{childList:!0,subtree:!0})}})}function w(t){return t.category.includes("_")&&(t.category=t.category.replace(/_/g," ")),`
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
                <use href="${v}#icon-close"></use>
              </svg>
            </button>

          </div>
        </div>
      </div>
    `}function x(){return` 
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
