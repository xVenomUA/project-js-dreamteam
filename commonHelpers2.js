import{i as g,A as H,a as V,b as D,g as q,c as W}from"./assets/subscription-ac0e924b.js";import{l as z}from"./assets/vendor-611745ce.js";const n={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count"),PopularDiv:document.getElementById("popularContainer"),modalWindowId:document.getElementById("id-modal-card")};function f(){const t=JSON.parse(localStorage.getItem("cart"));t?n.countHeader.textContent=`(${t.length})`:n.countHeader.textContent="(0)"}f();function F(t){const e=t.map(({_id:s,category:r,img:o,name:i,size:a,popularity:l,price:d})=>{r.includes("_")&&(r=r.replace(/_/g," "));let u="",m="shop";const y=JSON.parse(localStorage.getItem("cart"));return y&&y.find(v=>v._id===s)&&(m="check",u="disabled"),`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${o}" alt="${i}" width="140">
  </div>
  <h2 class="filt-h-name">${i}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${r}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${a}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${l}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${d}</h2>
    <button class="filt-btn-card" data-idcards="${s}" type="submit" ${u}>
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${g}#icon-${m}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");n.filtercard.innerHTML=e,n.filtercard.innerHTML===""&&(n.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}const C=document.querySelector(".pagination-list"),J=document.querySelector(".pagination"),h=document.querySelector(".last-total-page"),k=document.querySelector(".pag-first-page"),w=document.querySelector(".prew-button"),$=document.querySelector(".next-button");function R(t,e){let s="",r=t-2,o=e-2,i=e;if(h.textContent=t,t===1?J.style="display: none":J.style="display: flex",e===1?w.setAttribute("disabled",!0):w.removeAttribute("disabled"),e==t?$.setAttribute("disabled",!0):$.removeAttribute("disabled"),t>6){e<3&&(o=1,e=3),e>t-3&&(e=t-3,o=e-2);for(let a=o;a<=e;a++)a===i?s+=`<li class="pagination-item"><button class="pagination-number active" type="button">${a}</button></li>`:s+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`;s+='<li class="pagination-item dot-item"><span>...</span></li>';for(let a=r;a<=t;a++)a===i?s+=`<li class="pagination-item"><button class="pagination-number active" type="button">${a}</button></li>`:s+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`}if(C.innerHTML=s,t>1&&t<7){k.style="display: none",h.style="display: none";for(let a=1;a<=t;a++)s+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`}else k.style="display: block",h.style="display: block";C.innerHTML=s}async function j(t){if(t.target.classList.contains("pagination-arrow")||t.target.classList.contains("pagination-number")){const e=t.target.textContent,s=JSON.parse(localStorage.getItem("filters"));s.page=e,localStorage.setItem("filters",JSON.stringify(s)),p()}else return}async function U(t){const e=JSON.parse(localStorage.getItem("filters"));e.totalPages,e.page=e.page-1,localStorage.setItem("filters",JSON.stringify(e)),p()}async function G(t){const e=JSON.parse(localStorage.getItem("filters"));e.totalPages,e.page=Number(e.page)+1,localStorage.setItem("filters",JSON.stringify(e)),p()}async function K(t){const e=JSON.parse(localStorage.getItem("filters"));e.page=1,localStorage.setItem("filters",JSON.stringify(e)),p()}async function Q(t){const e=JSON.parse(localStorage.getItem("filters"));e.page=h.textContent,localStorage.setItem("filters",JSON.stringify(e)),p()}C.addEventListener("click",j);w.addEventListener("click",U);$.addEventListener("click",G);k.addEventListener("click",K);h.addEventListener("click",Q);const b={keyword:null},c={keyword:null,category:null,page:1,limit:E()},X=document.querySelector(".filter-categories");localStorage.getItem("filters")||localStorage.setItem("filters",JSON.stringify(c));window.addEventListener("resize",z(p,2500));let I=0;async function Y(){try{const e=(await H()).map(r=>{let o;return r.includes("_")?o=r.replace(/_/g," "):o=r,`<option value="${r}">${o}</option>`}).join("");n.categor.innerHTML+=e;const s=document.createElement("option");s.value="Show all",s.textContent="Show all",n.categor.prepend(s)}catch(t){console.log(t)}}async function p(){const t=E();c.limit=t;const e=JSON.parse(localStorage.getItem("filters"));e&&(c.keyword=e.keyword,c.category=e.category,c.page=e.page,localStorage.setItem("filters",JSON.stringify(c)),x());try{const s=await V(c.keyword,c.category,"","","",c.page,t);localStorage.setItem("totalPage",JSON.stringify(s.totalPages));const r=s.results;I=s.totalPages,console.log(I),console.log(c.page),R(I,c.page),F(r)}catch(s){console.log(s)}}Y();p();n.form&&(n.form.addEventListener("input",Z),n.form.addEventListener("submit",tt));async function Z(){const t=n.filtersInput.value;b.keyword=t,t===""&&(b.keyword=null),localStorage.setItem("keyword",JSON.stringify(b))}async function tt(t){t.preventDefault();const e=n.filtersInput.value;c.keyword=e,e===""&&(c.keyword=null);const s=n.filtersCategories.value;c.category=s,s===""&&(c.category=null),s==="Show all"&&(c.category=null),c.page=1,localStorage.setItem("filters",JSON.stringify(c)),p(),t.target.reset()}function x(){try{const t=JSON.parse(localStorage.getItem("keyword"));n.filtersInput&&(n.filtersInput.value=t.keyword||"")}catch{return}}x();function E(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function et(t){const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${g}#icon-check`),s.setAttribute("disabled","true");const o=s.dataset.idcards,i=localStorage.getItem("cart"),a=JSON.parse(i);if(a){const l=a.find(d=>d._id===o);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(a));return}a.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),f();return}if(!a){const l=[];l.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),f()}}n.listCards.addEventListener("click",et);X.addEventListener("change",st);function st(){const t=n.filtersInput.value;c.keyword=t,t===""&&(c.keyword=null);const e=n.filtersCategories.value;c.category=e,e===""&&(c.category=null),e==="Show all"&&(c.category=null),localStorage.setItem("filters",JSON.stringify(c)),p()}function L(t){const{_id:e,name:s,category:r,size:o,popularity:i,desc:a,price:l,img:d}=t,u=document.querySelector(".shop-btn-card"),m=document.querySelector(".shop-h-name"),y=document.querySelector(".shop-span-category"),S=document.querySelector(".shop-span-size"),v=document.querySelector(".shop-span-popularity"),M=document.querySelector(".shop-text-discription"),B=document.querySelector(".shop-h-price"),O=document.querySelector(".shop-img"),P=JSON.parse(localStorage.getItem("cart"));let N={};P&&(N=P.find(T=>T._id===e)??!1),N!==!1?(u.innerHTML=`Remove from<svg class="shop-card-icon" height="18" width="18">
          <use href="${g}#icon-shop"></use>
        </svg>`,u.setAttribute("data-check","true"),u.classList.add("shop-btn-card-active")):(u.innerHTML=`Add to<svg class="shop-card-icon" height="18" width="18">
          <use href="${g}#icon-shop"></use>
        </svg>`,u.setAttribute("data-check","false"),u.classList.remove("shop-btn-card-active")),u.dataset.idcards=e,m.textContent=s,y.textContent=r,S.textContent=o,v.textContent=i,M.textContent=a,B.textContent=`$${l}`,O.src=d,O.alt=s}function at(t){const e=t.map(({_id:s,category:r,img:o,name:i,size:a,popularity:l})=>{r.includes("_")&&(r=r.replace(/_/g," "));let d="shop",u="";const m=JSON.parse(localStorage.getItem("cart"));return m&&m.find(S=>S._id===s)&&(d="check",u="popular-icon-back"),`
      <div class="popular-card" data-idcarts="${s}">
      <div class="popular-background">
            <img src="${o}" alt="${i}" class="popular-img">
          </div>
        
        <div class="popular-descript">
          <div class="popular-descript-text">
            <p class="popular-name">${i}</p>
          <div class="pop-frame">
  
          <div class="category-cont">
            <p class="popular-text">Category:
              <span class="popular-word">${r}</span></p>
              
              <ul class="pop-text-two-cat">
              <li class="pop-text-size-pop">

            <p class="popular-text">Size:
              <span class="popular-word">${a}</span></p></li>
              <li>
            <p class="popular-text">Popularity:
              <span class="popular-word">${l}</span></p></li></ul>
          </div>
  
            <div class="popularname-price">
          </div>
          <button data-idcarts="${s}" class="popular-icon-cont ${u}">
              <svg class="popular-icon" width="20" height="20">
                <use href="${g}#icon-${d}" class="filt-use"></use>
              </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
`}).join("");n.PopularDiv.innerHTML=e}_();async function _(){try{const e=(await D()).data;at(e)}catch{}}n.PopularDiv.addEventListener("click",rt);async function rt(t){t.preventDefault();const{target:e}=t,s=e.closest(".popular-card");if(!s||e.closest(".popular-icon-cont"))return;const o=s.dataset.idcarts;try{const i=await q(o);L(i),n.modalWindowId.classList.remove("is-hidden-card")}catch(i){console.log(i)}}function it(t){p();const{target:e}=t,s=e.closest(".popular-icon-cont");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${g}#icon-check`),s.setAttribute("disabled","true"),s.classList.add("popular-icon-back");const i=s.dataset.idcarts,a=localStorage.getItem("cart"),l=JSON.parse(a);if(l){const d=l.find(u=>u._id===i);if(d){d.quantity+=1,localStorage.setItem("cart",JSON.stringify(l));return}l.push({_id:i,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),f();return}if(!l){const d=[];d.push({_id:i,quantity:1}),localStorage.setItem("cart",JSON.stringify(d)),f()}}n.PopularDiv.addEventListener("click",it);const nt=document.getElementById("id-modal-card");function ot(t){const e=document.createElement("div");return e.classList.add("product-card"),e.dataset.idcarts=t._id,e.addEventListener("click",()=>{L(t),nt.classList.remove("is-hidden-card")}),e.innerHTML=`
  <div class="product-background">
        
  <div class="discount-label">
  <svg class="discount-label-icon" width="60" height="60">
    <use href="${g}#icon-discount"></use>
  </svg>
  </div>
    <img src="${t.img}" alt="${t.name}" class="product-image">
  </div>
  <div class="product-details">
  <div class="details-text">

    <h2 class="product-name">${t.name}</h2>
    
    <div class="price-icon">
    <p class="product-price">$${t.price.toFixed(2)}</p>
  <div id="${t._id}" class="discount-icon-cont">
    <svg class="discount-icon" width="18" height="18">
      <use href="${g}#icon-shop"></use>
    </svg>
  </div>
  </div>
  </div>
  `,e}function ct(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}W().then(t=>t.data).then(t=>{const e=ct(t,2),s=document.getElementById("discountContainer");e.forEach(r=>{s.appendChild(ot(r))})}).catch(t=>{console.error(t.message)});const lt=document.querySelector(".shop-modal-close-btn");n.listCards.addEventListener("click",dt);async function dt(t){t.preventDefault();const{target:e}=t,s=e.closest(".filt-div-card");if(!s||e.closest(".filt-btn-card"))return;const o=s.dataset.idcarts;try{const i=await q(o);L(i),n.modalWindowId.classList.remove("is-hidden-card")}catch(i){console.log(i)}document.body.style.overflow="hidden"}lt.addEventListener("click",A);function A(){n.modalWindowId.classList.add("is-hidden-card"),document.body.style.overflow="scroll"}function ut(t){const{target:e}=t,s=e.closest(".shop-btn-card");if(p(),_(),!s)return;const r=s.dataset.idcards,o=s.dataset.check;console.log(o),A();const i=localStorage.getItem("cart"),a=JSON.parse(i);if(o==="false"){if(a){const d=a.find(u=>u._id===r);if(d){d.quantity+=1,localStorage.setItem("cart",JSON.stringify(a));return}a.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),f();return}const l=[];l.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),f()}else if(a&&a.find(d=>d._id===r)){const d=a.filter(u=>u._id!==r);localStorage.setItem("cart",JSON.stringify(d)),f();return}}n.addCartBtn.addEventListener("click",ut);
//# sourceMappingURL=commonHelpers2.js.map
