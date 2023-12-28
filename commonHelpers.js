import{g as k,i as S,o as E,p as L}from"./assets/subscription-d9763ab2.js";import"./assets/vendor-611745ce.js";const w="/project-js-dreamteam/assets/yellowBasket-88cc64a6.png",C={FILTERS_KEY:"filters",CART_KEY:"cart"},q=document.querySelector("span#cart-counter"),I=document.querySelector(".js-cart-block"),g=document.querySelector(".cart-list-block"),$=document.querySelector(".cart-delete-btn"),x=document.querySelector(".cart-form"),u=document.querySelector(".modal-backdrop-two");$.addEventListener("click",_);function _(){localStorage.removeItem("cart"),l()}function p(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):[]}catch(e){console.log(e.message)}}async function l(){let t=await p(C.CART_KEY);if(q.textContent=t.length,t.length===0){I.innerHTML=A();return}M()}l();async function M(){const e=p("cart").map(c=>c._id);g.innerHTML="";try{let c=0,s=[],a=[],r=[];for(let o=0;o<e.length;o+=1){const i=await k(e[o]),y=B(i,e[o]);g.innerHTML+=y;const v=JSON.parse(localStorage.getItem("cart"));c+=i.price,s.push(i.price),T.textContent=`${Number(c.toFixed(2))}`,O(".cart-close").then(d=>{r.push(v[o]._id),localStorage.setItem("cart1",JSON.stringify(a)),d.forEach(f=>{f.addEventListener("click",h=>{const b=h.currentTarget.id;r=r.filter(n=>n!==b),a=[];for(let n=0;n<r.length;n+=1)a.push({_id:r[n],quantity:1});localStorage.setItem("cart",JSON.stringify(a)),l()})})}).catch(d=>{console.error(d.message)})}}catch(c){console.log(c)}}function O(t){return new Promise((e,c)=>{const s=document.querySelectorAll(t);if(s.length>0)e(s);else{const a=new MutationObserver(()=>{const r=document.querySelectorAll(t);r.length>0&&(a.disconnect(),e(r))});a.observe(document.documentElement,{childList:!0,subtree:!0})}})}document.addEventListener("DOMContentLoaded",function(){document.getElementById("cart"),window.addEventListener("scroll",function(){})});function B(t){return t.category.includes("_")&&(t.category=t.category.replace(/_/g," ")),`
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
                <use href="${S}#icon-close"></use>
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
    `}function A(){return` 
  <div class="js-cart-block">
  <div class="cart-empty-new">
  <div class="cart-empty-basket">
  <img class="cart-basket-img"
                src="${w}"
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
  `}const T=document.querySelector("span#your-order-total-price");x.addEventListener("submit",j);async function j(t){t.preventDefault();const e=document.querySelector(".error-message"),c=document.querySelector(".cart-email-input").value;E();const s=p("cart"),a=z(c,s);try{const r=await L(a);m(!0),document.body.style.overflow="hidden",localStorage.removeItem("cart"),l()}catch{e.style.display="block",setTimeout(()=>e.style.display="none",2e3)}}function z(t,e){return{email:t,products:e.map(c=>({productId:c._id,amount:c.quantity}))}}function m(t=!0){u.classList.toggle("is-hidden-basket",!t),t&&D(),document.body.style.overflow="scroll"}function D(){document.querySelector(".modal-close-btn-basket").addEventListener("click",()=>m(!1)),u.addEventListener("click",e=>{e.target===u&&m(!1)})}
//# sourceMappingURL=commonHelpers.js.map
