import{g as f,i as b}from"./assets/icon-c42978c0.js";import"./assets/vendor-611745ce.js";const S="/project-js-dreamteam/assets/yellowBasket-88cc64a6.png",k={FILTERS_KEY:"filters",CART_KEY:"cart"},w=document.querySelector("span#cart-counter"),x=document.querySelector(".js-cart-block"),m=document.querySelector(".cart-list-block"),E=document.querySelector(".cart-delete-btn");E.addEventListener("click",L);function L(){localStorage.removeItem("cart"),d()}function u(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}async function d(){let t=await u(k.CART_KEY);if(w.textContent=t.length,t.length===0){x.innerHTML=I();return}$()}d();async function $(){const e=u("cart").map(c=>c._id);m.innerHTML="";try{let c=0,o=[],r=[],a=[];for(let s=0;s<e.length;s+=1){const l=await f(e[s]),g=_(l,e[s]);m.innerHTML+=g;const p=JSON.parse(localStorage.getItem("cart"));c+=l.price,o.push(l.price),console.log(c),q.textContent=`${Number(c.toFixed(2))}`,C(".cart-close").then(i=>{a.push(p[s]._id),localStorage.setItem("cart1",JSON.stringify(r)),i.forEach(y=>{y.addEventListener("click",v=>{const h=v.currentTarget.id;a=a.filter(n=>n!==h),r=[];for(let n=0;n<a.length;n+=1)r.push({_id:a[n],quantity:1});localStorage.setItem("cart",JSON.stringify(r)),d()})})}).catch(i=>{console.error(i.message)})}}catch(c){console.log(c)}}function C(t){return new Promise((e,c)=>{const o=document.querySelectorAll(t);if(o.length>0)e(o);else{const r=new MutationObserver(()=>{const a=document.querySelectorAll(t);a.length>0&&(r.disconnect(),e(a))});r.observe(document.documentElement,{childList:!0,subtree:!0})}})}document.addEventListener("DOMContentLoaded",function(){var t=document.getElementById("cart");window.addEventListener("scroll",function(){var e=window.scrollY;e>100?t.style.maxHeight="0":t.style.maxHeight="200px"})});function _(t){return t.category.includes("_")&&(t.category=t.category.replace(/_/g," ")),`
        <li class="cart-card-container" data-productlist-id="${t._id}">
          <div class="cart-image-container">
            <img src="${t.img}" alt="${t.name}" class="">
          </div>
        
        <div class="cart-info">
          <div class="cart-descript-text">
          <div class="cart-div-new">
            <p class="cart-prod-name">${t.name}</p>
            <button type="button" id="${t._id}" class="cart-close">
              <svg class="cart-close-icon" width="10.125" height="10.125">
                <use href="${b}#icon-close"></use>
              </svg>
            </button>
            </div>
          <div class="cart-frame">
  
          <div class="category-cont">
              <ul class="cart-text-cat">
              <li>
              <p class="cart-category-text">Category:
              <span class=" cart-category-black">${t.category}</span></p>
              </li>
              <li class="cart-text-size">

            <p class="cart-size-text">Size:
              <span class="cart-size-black">${t.size}</span></p></li>
              
          </div>
  
            <div class="cart-price">
            <p class="cart-card-price">$${t.price}</p>
          </div>
          </div>
        </div>
      </div>
      </li>
      <hr class="cart-line">
    `}function I(){return` 
  <div class="js-cart-block">
  <div class="cart-empty-basket">
  <img class="cart-basket-img"
                src="${S}"
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
  `}const q=document.querySelector("span#your-order-total-price");
//# sourceMappingURL=commonHelpers.js.map
