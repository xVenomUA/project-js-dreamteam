import{i as g,A as H,a as D,b as V,g as q,c as W}from"./assets/subscription-ac0e924b.js";import{l as z}from"./assets/vendor-611745ce.js";const o={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count"),PopularDiv:document.getElementById("popularContainer"),modalWindowId:document.getElementById("id-modal-card")};function f(){const t=JSON.parse(localStorage.getItem("cart"));t?o.countHeader.textContent=`(${t.length})`:o.countHeader.textContent="(0)"}f();function F(t){const e=t.map(({_id:s,category:i,img:n,name:r,size:a,popularity:c,price:l})=>{i.includes("_")&&(i=i.replace(/_/g," "));let u="",m="shop";const y=JSON.parse(localStorage.getItem("cart"));return y&&y.find(v=>v._id===s)&&(m="check",u="disabled"),`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${n}" alt="${r}" width="140">
  </div>
  <h2 class="filt-h-name">${r}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${i}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${a}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${c}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${l}</h2>
    <button class="filt-btn-card" data-idcards="${s}" type="submit" ${u}>
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${g}#icon-${m}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");o.filtercard.innerHTML=e,o.filtercard.innerHTML===""&&(o.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}const I=document.querySelector(".pagination-list"),N=document.querySelector(".pagination"),h=document.querySelector(".last-total-page"),C=document.querySelector(".pag-first-page"),k=document.querySelector(".prew-button"),w=document.querySelector(".next-button");function R(t,e){let s="",i=t-2,n=e-2,r=e;if(h.textContent=t,t===1?N.style="display: none":N.style="display: flex",e===1?k.setAttribute("disabled",!0):k.removeAttribute("disabled"),e==t?w.setAttribute("disabled",!0):w.removeAttribute("disabled"),t>6){e<3&&(n=1,e=3),e>t-3&&(e=t-3,n=e-2);for(let a=n;a<=e;a++)a===r?s+=`<li class="pagination-item"><button class="pagination-number active" type="button">${a}</button></li>`:s+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`;s+='<li class="pagination-item dot-item"><span>...</span></li>';for(let a=i;a<=t;a++)a===r?s+=`<li class="pagination-item"><button class="pagination-number active" type="button">${a}</button></li>`:s+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`}if(I.innerHTML=s,t>1&&t<7){C.style="display: none",h.style="display: none";for(let a=1;a<=t;a++)s+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`}else C.style="display: block",h.style="display: block";I.innerHTML=s}async function j(t){if(t.target.classList.contains("pagination-arrow")||t.target.classList.contains("pagination-number")){const e=t.target.textContent,s=JSON.parse(localStorage.getItem("filters"));s.page=e,localStorage.setItem("filters",JSON.stringify(s)),p()}else return}async function U(t){const e=JSON.parse(localStorage.getItem("filters"));e.totalPages,e.page=e.page-1,localStorage.setItem("filters",JSON.stringify(e)),p()}async function G(t){const e=JSON.parse(localStorage.getItem("filters"));e.totalPages,e.page=Number(e.page)+1,localStorage.setItem("filters",JSON.stringify(e)),p()}async function K(t){const e=JSON.parse(localStorage.getItem("filters"));e.page=1,localStorage.setItem("filters",JSON.stringify(e)),p()}async function Q(t){const e=JSON.parse(localStorage.getItem("filters"));e.page=h.textContent,localStorage.setItem("filters",JSON.stringify(e)),p()}I.addEventListener("click",j);k.addEventListener("click",U);w.addEventListener("click",G);C.addEventListener("click",K);h.addEventListener("click",Q);const b={keyword:null},d={keyword:null,category:null,page:1,limit:E()},X=document.querySelector(".filter-categories");localStorage.getItem("filters")||localStorage.setItem("filters",JSON.stringify(d));window.addEventListener("resize",z(p,2500));let J=0;async function Y(){try{const e=(await H()).map(i=>{let n;return i.includes("_")?n=i.replace(/_/g," "):n=i,`<option value="${i}">${n}</option>`}).join("");o.categor.innerHTML+=e;const s=document.createElement("option");s.value="Show all",s.textContent="Show all",o.categor.prepend(s)}catch(t){console.log(t)}}async function p(){const t=E();d.limit=t;const e=JSON.parse(localStorage.getItem("filters"));e&&(d.keyword=e.keyword,d.category=e.category,d.page=e.page,localStorage.setItem("filters",JSON.stringify(d)),x());try{const s=await D(d.keyword,d.category,"","","",d.page,t);localStorage.setItem("totalPage",JSON.stringify(s.totalPages));const i=s.results;J=s.totalPages,R(J,d.page),F(i)}catch(s){console.log(s)}}Y();p();o.form&&(o.form.addEventListener("input",Z),o.form.addEventListener("submit",tt));async function Z(){const t=o.filtersInput.value;b.keyword=t,t===""&&(b.keyword=null),localStorage.setItem("keyword",JSON.stringify(b))}async function tt(t){t.preventDefault();const e=o.filtersInput.value;d.keyword=e,e===""&&(d.keyword=null);const s=o.filtersCategories.value;d.category=s,s===""&&(d.category=null),s==="Show all"&&(d.category=null),d.page=1,localStorage.setItem("filters",JSON.stringify(d)),p(),t.target.reset()}function x(){try{const t=JSON.parse(localStorage.getItem("keyword"));o.filtersInput&&(o.filtersInput.value=t.keyword||"")}catch{return}}x();function E(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function et(t){const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${g}#icon-check`),s.setAttribute("disabled","true");const n=s.dataset.idcards,r=localStorage.getItem("cart"),a=JSON.parse(r);if(a){const c=a.find(l=>l._id===n);if(c){c.quantity+=1,localStorage.setItem("cart",JSON.stringify(a));return}a.push({_id:n,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),f();return}if(!a){const c=[];c.push({_id:n,quantity:1}),localStorage.setItem("cart",JSON.stringify(c)),f()}}o.listCards.addEventListener("click",et);X.addEventListener("change",st);function st(){const t=o.filtersCategories.value;d.category=t,t===""&&(d.category=null),t==="Show all"&&(d.category=null),localStorage.setItem("filters",JSON.stringify(d)),p()}function $(t){const{_id:e,name:s,category:i,size:n,popularity:r,desc:a,price:c,img:l}=t,u=document.querySelector(".shop-btn-card"),m=document.querySelector(".shop-h-name"),y=document.querySelector(".shop-span-category"),S=document.querySelector(".shop-span-size"),v=document.querySelector(".shop-span-popularity"),M=document.querySelector(".shop-text-discription"),B=document.querySelector(".shop-h-price"),L=document.querySelector(".shop-img"),O=JSON.parse(localStorage.getItem("cart"));let P={};O&&(P=O.find(T=>T._id===e)??!1),P!==!1?(u.innerHTML=`Remove from<svg class="shop-card-icon" height="18" width="18">
          <use href="${g}#icon-shop"></use>
        </svg>`,u.setAttribute("data-check","true"),u.classList.add("shop-btn-card-active")):(u.innerHTML=`Add to<svg class="shop-card-icon" height="18" width="18">
          <use href="${g}#icon-shop"></use>
        </svg>`,u.setAttribute("data-check","false"),u.classList.remove("shop-btn-card-active")),u.dataset.idcards=e,m.textContent=s,y.textContent=i,S.textContent=n,v.textContent=r,M.textContent=a,B.textContent=`$${c}`,L.src=l,L.alt=s}function at(t){const e=t.map(({_id:s,category:i,img:n,name:r,size:a,popularity:c})=>{i.includes("_")&&(i=i.replace(/_/g," "));let l="shop",u="";const m=JSON.parse(localStorage.getItem("cart"));return m&&m.find(S=>S._id===s)&&(l="check",u="popular-icon-back"),`
      <div class="popular-card" data-idcarts="${s}">
      <div class="popular-background">
            <img src="${n}" alt="${r}" class="popular-img">
          </div>
        
        <div class="popular-descript">
          <div class="popular-descript-text">
            <p class="popular-name">${r}</p>
          <div class="pop-frame">
  
          <div class="category-cont">
            <p class="popular-text">Category:
              <span class="popular-word">${i}</span></p>
              
              <ul class="pop-text-two-cat">
              <li class="pop-text-size-pop">

            <p class="popular-text">Size:
              <span class="popular-word">${a}</span></p></li>
              <li>
            <p class="popular-text">Popularity:
              <span class="popular-word">${c}</span></p></li></ul>
          </div>
  
            <div class="popularname-price">
          </div>
          <button data-idcarts="${s}" class="popular-icon-cont ${u}">
              <svg class="popular-icon" width="20" height="20">
                <use href="${g}#icon-${l}" class="filt-use"></use>
              </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
`}).join("");o.PopularDiv.innerHTML=e}_();async function _(){try{const e=(await V()).data;at(e)}catch{}}o.PopularDiv.addEventListener("click",it);async function it(t){t.preventDefault();const{target:e}=t,s=e.closest(".popular-card");if(!s||e.closest(".popular-icon-cont"))return;const n=s.dataset.idcarts;try{const r=await q(n);$(r),o.modalWindowId.classList.remove("is-hidden-card")}catch(r){console.log(r)}}function rt(t){p();const{target:e}=t,s=e.closest(".popular-icon-cont");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${g}#icon-check`),s.setAttribute("disabled","true"),s.classList.add("popular-icon-back");const r=s.dataset.idcarts,a=localStorage.getItem("cart"),c=JSON.parse(a);if(c){const l=c.find(u=>u._id===r);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(c));return}c.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(c)),f();return}if(!c){const l=[];l.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),f()}}o.PopularDiv.addEventListener("click",rt);const nt=document.getElementById("id-modal-card");function ot(t){const e=document.createElement("div");return e.classList.add("product-card"),e.dataset.idcarts=t._id,e.addEventListener("click",()=>{$(t),nt.classList.remove("is-hidden-card")}),e.innerHTML=`
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
  `,e}function ct(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}W().then(t=>t.data).then(t=>{const e=ct(t,2),s=document.getElementById("discountContainer");e.forEach(i=>{s.appendChild(ot(i))})}).catch(t=>{console.error(t.message)});const lt=document.querySelector(".shop-modal-close-btn");o.listCards.addEventListener("click",dt);async function dt(t){t.preventDefault();const{target:e}=t,s=e.closest(".filt-div-card");if(!s||e.closest(".filt-btn-card"))return;const n=s.dataset.idcarts;try{const r=await q(n);$(r),o.modalWindowId.classList.remove("is-hidden-card")}catch(r){console.log(r)}document.body.style.overflow="hidden"}lt.addEventListener("click",A);function A(){o.modalWindowId.classList.add("is-hidden-card"),document.body.style.overflow="scroll"}function ut(t){const{target:e}=t,s=e.closest(".shop-btn-card");if(p(),_(),!s)return;const i=s.dataset.idcards,n=s.dataset.check;console.log(n),A();const r=localStorage.getItem("cart"),a=JSON.parse(r);if(n==="false"){if(a){const l=a.find(u=>u._id===i);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(a));return}a.push({_id:i,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),f();return}const c=[];c.push({_id:i,quantity:1}),localStorage.setItem("cart",JSON.stringify(c)),f()}else if(a&&a.find(l=>l._id===i)){const l=a.filter(u=>u._id!==i);localStorage.setItem("cart",JSON.stringify(l)),f();return}}o.addCartBtn.addEventListener("click",ut);
//# sourceMappingURL=commonHelpers2.js.map
