import{g as f,i as b}from"./assets/subscription-0e71b84b.js";import"./assets/vendor-611745ce.js";const S="/project-js-dreamteam/assets/yellowBasket-88cc64a6.png",k={FILTERS_KEY:"filters",CART_KEY:"cart"},E=document.querySelector("span#cart-counter"),w=document.querySelector(".js-cart-block"),u=document.querySelector(".cart-list-block"),L=document.querySelector(".cart-delete-btn");L.addEventListener("click",$);function $(){localStorage.removeItem("cart"),d()}function m(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}async function d(){let t=await m(k.CART_KEY);if(E.textContent=t.length,t.length===0){w.innerHTML=I();return}x()}d();async function x(){const e=m("cart").map(a=>a._id);u.innerHTML="";try{let a=0,i=[],r=[],c=[];for(let s=0;s<e.length;s+=1){const o=await f(e[s]),g=_(o,e[s]);u.innerHTML+=g;const p=JSON.parse(localStorage.getItem("cart"));a+=o.price,i.push(o.price),q.textContent=`${Number(a.toFixed(2))}`,C(".cart-close").then(l=>{c.push(p[s]._id),localStorage.setItem("cart1",JSON.stringify(r)),l.forEach(y=>{y.addEventListener("click",v=>{const h=v.currentTarget.id;c=c.filter(n=>n!==h),r=[];for(let n=0;n<c.length;n+=1)r.push({_id:c[n],quantity:1});localStorage.setItem("cart",JSON.stringify(r)),d()})})}).catch(l=>{console.error(l.message)})}}catch(a){console.log(a)}}function C(t){return new Promise((e,a)=>{const i=document.querySelectorAll(t);if(i.length>0)e(i);else{const r=new MutationObserver(()=>{const c=document.querySelectorAll(t);c.length>0&&(r.disconnect(),e(c))});r.observe(document.documentElement,{childList:!0,subtree:!0})}})}document.addEventListener("DOMContentLoaded",function(){document.getElementById("cart"),window.addEventListener("scroll",function(){})});function _(t){return t.category.includes("_")&&(t.category=t.category.replace(/_/g," ")),`
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
  <div class="cart-empty-new">
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
            </div>
  `}const q=document.querySelector("span#your-order-total-price");
//# sourceMappingURL=commonHelpers.js.map
