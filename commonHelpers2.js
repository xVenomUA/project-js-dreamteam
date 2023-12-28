import{i as g,A as V,a as W,b as z,g as $,c as R}from"./assets/subscription-a4b139fa.js";import{l as j}from"./assets/vendor-611745ce.js";const n={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count"),PopularDiv:document.getElementById("popularContainer"),DiscountDiv:document.getElementById("discountContainer"),modalWindowId:document.getElementById("id-modal-card")};function f(){const t=JSON.parse(localStorage.getItem("cart"));t?n.countHeader.textContent=`(${t.length})`:n.countHeader.textContent="(0)"}f();function F(t){const s=t.map(({_id:e,category:o,img:r,name:a,size:c,popularity:i,price:l})=>{o.includes("_")&&(o=o.replace(/_/g," "));let u="",m="shop";const y=JSON.parse(localStorage.getItem("cart"));return y&&y.find(v=>v._id===e)&&(m="check",u="disabled"),`<div class="filt-div-card" data-idcarts="${e}">
      <div class="filt-div-img">
  <img class="filt-img" src="${r}" alt="${a}" width="140">
  </div>
  <h2 class="filt-h-name">${a}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${o}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${c}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${i}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${l}</h2>
    <button class="filt-btn-card" data-idcards="${e}" type="submit" ${u}>
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${g}#icon-${m}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");n.filtercard.innerHTML=s,n.filtercard.innerHTML===""&&(n.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}const I=document.querySelector(".pagination-list"),J=document.querySelector(".pagination"),h=document.querySelector(".last-total-page"),C=document.querySelector(".pag-first-page"),k=document.querySelector(".prew-button"),w=document.querySelector(".next-button");function U(t,s){let e="",o=t-2,r=s;if(h.textContent=t,t===1?J.style="display: none":J.style="display: flex",s==1?k.setAttribute("disabled",!0):k.removeAttribute("disabled"),s==t?w.setAttribute("disabled",!0):w.removeAttribute("disabled"),t>6){console.log(t),console.log(s),s>t-4&&(s=t-4),s===1&&(s=s+1);for(let a=s-1;a<=s+1;a++)a===r?e+=`<li class="pagination-item"><button class="pagination-number active" type="button">${a}</button></li>`:e+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`;e+='<li class="pagination-item dot-item"><span>...</span></li>';for(let a=o;a<=t;a++)a===r?e+=`<li class="pagination-item"><button class="pagination-number active" type="button">${a}</button></li>`:e+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`}if(I.innerHTML=e,t>1&&t<7){C.style="display: none",h.style="display: none";for(let a=1;a<=t;a++)e+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`}else C.style="display: block",h.style="display: block";I.innerHTML=e}async function G(t){if(t.target.classList.contains("pagination-arrow")||t.target.classList.contains("pagination-number")){const s=t.target.textContent,e=JSON.parse(localStorage.getItem("filters"));e.page=parseInt(s),localStorage.setItem("filters",JSON.stringify(e)),p()}else return}async function K(t){const s=JSON.parse(localStorage.getItem("filters"));s.totalPages,s.page=s.page-1,localStorage.setItem("filters",JSON.stringify(s)),p()}async function Q(t){const s=JSON.parse(localStorage.getItem("filters"));s.totalPages,s.page=Number(s.page)+1,localStorage.setItem("filters",JSON.stringify(s)),p()}async function X(t){const s=JSON.parse(localStorage.getItem("filters"));s.page=1,localStorage.setItem("filters",JSON.stringify(s)),p()}async function Y(t){const s=JSON.parse(localStorage.getItem("filters"));s.page=h.textContent,localStorage.setItem("filters",JSON.stringify(s)),p()}I.addEventListener("click",G);k.addEventListener("click",K);w.addEventListener("click",Q);C.addEventListener("click",X);h.addEventListener("click",Y);const b={keyword:null},d={keyword:null,category:null,page:1,limit:A()},Z=document.querySelector(".filter-categories");localStorage.getItem("filters")||localStorage.setItem("filters",JSON.stringify(d));window.addEventListener("resize",j(p,2500));let q=0;async function tt(){try{const s=(await V()).map(o=>{let r;return o.includes("_")?r=o.replace(/_/g," "):r=o,`<option value="${o}">${r}</option>`}).join("");n.categor.innerHTML+=s;const e=document.createElement("option");e.value="Show all",e.textContent="Show all",n.categor.prepend(e)}catch(t){console.log(t)}}async function p(){const t=A();d.limit=t;const s=JSON.parse(localStorage.getItem("filters"));s&&(d.keyword=s.keyword,d.category=s.category,d.page=s.page,localStorage.setItem("filters",JSON.stringify(d)),E());try{const e=await W(d.keyword,d.category,"","","",d.page,t);localStorage.setItem("totalPage",JSON.stringify(e.totalPages));const o=e.results;q=e.totalPages,U(q,d.page),F(o)}catch(e){console.log(e)}}tt();p();n.form&&(n.form.addEventListener("input",et),n.form.addEventListener("submit",st));async function et(){const t=n.filtersInput.value;b.keyword=t,t===""&&(b.keyword=null),localStorage.setItem("keyword",JSON.stringify(b))}async function st(t){t.preventDefault();const s=n.filtersInput.value;d.keyword=s,s===""&&(d.keyword=null);const e=n.filtersCategories.value;d.category=e,e===""&&(d.category=null),e==="Show all"&&(d.category=null),d.page=1,localStorage.setItem("filters",JSON.stringify(d)),p(),t.target.reset()}function E(){try{const t=JSON.parse(localStorage.getItem("keyword"));n.filtersInput&&(n.filtersInput.value=t.keyword||"")}catch{return}}E();function A(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function at(t){const{target:s}=t,e=s.closest(".filt-btn-card");if(!e)return;e.querySelector(".filt-use").setAttribute("href",`${g}#icon-check`),e.setAttribute("disabled","true");const r=e.dataset.idcards,a=localStorage.getItem("cart"),c=JSON.parse(a);if(c){const i=c.find(l=>l._id===r);if(i){i.quantity+=1,localStorage.setItem("cart",JSON.stringify(c));return}c.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(c)),f();return}if(!c){const i=[];i.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),f()}}n.listCards.addEventListener("click",at);Z.addEventListener("change",ot);function ot(){const t=n.filtersCategories.value;d.category=t,d.page=1,t===""&&(d.category=null),t==="Show all"&&(d.category=null),localStorage.setItem("filters",JSON.stringify(d)),p()}function O(t){const{_id:s,name:e,category:o,size:r,popularity:a,desc:c,price:i,img:l}=t,u=document.querySelector(".shop-btn-card"),m=document.querySelector(".shop-h-name"),y=document.querySelector(".shop-span-category"),S=document.querySelector(".shop-span-size"),v=document.querySelector(".shop-span-popularity"),T=document.querySelector(".shop-text-discription"),B=document.querySelector(".shop-h-price"),L=document.querySelector(".shop-img"),P=JSON.parse(localStorage.getItem("cart"));let N={};P&&(N=P.find(H=>H._id===s)??!1),N!==!1?(u.innerHTML=`Remove from<svg class="shop-card-icon" height="18" width="18">
          <use href="${g}#icon-shop"></use>
        </svg>`,u.setAttribute("data-check","true"),u.classList.add("shop-btn-card-active")):(u.innerHTML=`Add to<svg class="shop-card-icon" height="18" width="18">
          <use href="${g}#icon-shop"></use>
        </svg>`,u.setAttribute("data-check","false"),u.classList.remove("shop-btn-card-active")),u.dataset.idcards=s,m.textContent=e,y.textContent=o,S.textContent=r,v.textContent=a,T.textContent=c,B.textContent=`$${i}`,L.src=l,L.alt=e}function rt(t){const s=t.map(({_id:e,category:o,img:r,name:a,size:c,popularity:i})=>{o.includes("_")&&(o=o.replace(/_/g," "));let l="shop",u="";const m=JSON.parse(localStorage.getItem("cart"));return m&&m.find(S=>S._id===e)&&(l="check",u="popular-icon-back"),`
      <div class="popular-card" data-idcarts="${e}">
      <div class="popular-background">
            <img src="${r}" alt="${a}" class="popular-img">
          </div>
        
        <div class="popular-descript">
          <div class="popular-descript-text">
            <p class="popular-name">${a}</p>
          <div class="pop-frame">
  
          <div class="category-cont">
            <p class="popular-text">Category:
              <span class="popular-word">${o}</span></p>
              
              <ul class="pop-text-two-cat">
              <li class="pop-text-size-pop">

            <p class="popular-text">Size:
              <span class="popular-word">${c}</span></p></li>
              <li>
            <p class="popular-text">Popularity:
              <span class="popular-word">${i}</span></p></li></ul>
          </div>
  
            <div class="popularname-price">
          </div>
          <button data-idcarts="${e}" class="popular-icon-cont ${u}">
              <svg class="popular-icon" width="20" height="20">
                <use href="${g}#icon-${l}" class="filt-use"></use>
              </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
`}).join("");n.PopularDiv.innerHTML=s}D();async function D(){try{const s=(await z()).data;rt(s)}catch{}}n.PopularDiv.addEventListener("click",ct);async function ct(t){t.preventDefault();const{target:s}=t,e=s.closest(".popular-card");if(!e||s.closest(".popular-icon-cont"))return;const r=e.dataset.idcarts;try{const a=await $(r);O(a),n.modalWindowId.classList.remove("is-hidden-card")}catch(a){console.log(a)}}function nt(t){p();const{target:s}=t,e=s.closest(".popular-icon-cont");if(!e)return;e.querySelector(".filt-use").setAttribute("href",`${g}#icon-check`),e.setAttribute("disabled","true"),e.classList.add("popular-icon-back");const a=e.dataset.idcarts,c=localStorage.getItem("cart"),i=JSON.parse(c);if(i){const l=i.find(u=>u._id===a);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(i));return}i.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),f();return}if(!i){const l=[];l.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),f()}}n.PopularDiv.addEventListener("click",nt);function x(t){const s=t.map(({_id:e,img:o,name:r,price:a})=>{let c="shop";const i=JSON.parse(localStorage.getItem("cart"));return i&&i.find(u=>u._id===e)&&(c="check"),`
    <div class="product-card" data-idcarts="${e}">
  <div class="product-background">
    <div class="discount-label">
      <svg class="discount-label-icon" width="60" height="60">
        <use href="${g}#icon-discount"></use>
      </svg>
    </div>

    <img src="${o}" alt="${r}" class="product-image">
  </div>

  <div class="product-details">
    <div class="details-text">
      <h2 class="product-name">${r}</h2>

      <div class="price-icon">
        <p class="product-price">$${a}</p>

        <button data-idcarts="${e}" class="discount-icon-cont">
          <svg class="discount-icon" width="18" height="18">
            <use href="${g}#icon-${c}" class="filt-use"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

`}).join("");n.DiscountDiv.innerHTML=s}_();async function _(){try{const e=(await R()).data;x(e);const o=t(e,2);x(o)}catch{}function t(s,e){return s.sort(()=>.5-Math.random()).slice(0,e)}}n.DiscountDiv.addEventListener("click",it);async function it(t){t.preventDefault();const{target:s}=t,e=s.closest(".product-card");if(!e||s.closest(".discount-icon-cont"))return;const r=e.dataset.idcarts;try{const a=await $(r);O(a),n.modalWindowId.classList.remove("is-hidden-card")}catch(a){console.log(a)}}async function lt(t){try{await _();const{target:s}=t,e=s.closest(".product-icon-cont");if(!e)return;e.querySelector(".filt-use").setAttribute("href",`${g}#icon-check`),e.setAttribute("disabled","true");const r=e.dataset.idcarts,a=localStorage.getItem("cart"),c=JSON.parse(a)||[],i=c.find(l=>l._id===r);i?i.quantity+=1:(c.push({_id:r,quantity:1}),f()),localStorage.setItem("cart",JSON.stringify(c))}catch{}}n.DiscountDiv.addEventListener("click",lt);const dt=document.querySelector(".shop-modal-close-btn");n.listCards.addEventListener("click",ut);async function ut(t){t.preventDefault();const{target:s}=t,e=s.closest(".filt-div-card");if(!e||s.closest(".filt-btn-card"))return;const r=e.dataset.idcarts;try{const a=await $(r);O(a),n.modalWindowId.classList.remove("is-hidden-card")}catch(a){console.log(a)}document.body.style.overflow="hidden"}dt.addEventListener("click",M);function M(){n.modalWindowId.classList.add("is-hidden-card"),document.body.style.overflow="scroll"}function pt(t){const{target:s}=t,e=s.closest(".shop-btn-card");if(p(),D(),!e)return;const o=e.dataset.idcards,r=e.dataset.check;console.log(r),M();const a=localStorage.getItem("cart"),c=JSON.parse(a);if(r==="false"){if(c){const l=c.find(u=>u._id===o);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(c));return}c.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(c)),f();return}const i=[];i.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),f()}else if(c&&c.find(l=>l._id===o)){const l=c.filter(u=>u._id!==o);localStorage.setItem("cart",JSON.stringify(l)),f();return}}n.addCartBtn.addEventListener("click",pt);
//# sourceMappingURL=commonHelpers2.js.map
