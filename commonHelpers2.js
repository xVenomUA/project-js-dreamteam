import{i as g,A as H,a as D,b as W,g as q,c as V}from"./assets/subscription-ac0e924b.js";import{l as z}from"./assets/vendor-611745ce.js";const r={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count"),PopularDiv:document.getElementById("popularContainer"),modalWindowId:document.getElementById("id-modal-card")};function f(){const t=JSON.parse(localStorage.getItem("cart"));t?r.countHeader.textContent=`(${t.length})`:r.countHeader.textContent="(0)"}f();function F(t){const e=t.map(({_id:s,category:i,img:o,name:n,size:a,popularity:c,price:l})=>{i.includes("_")&&(i=i.replace(/_/g," "));let d="",m="shop";const y=JSON.parse(localStorage.getItem("cart"));return y&&y.find(v=>v._id===s)&&(m="check",d="disabled"),`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${o}" alt="${n}" width="140">
  </div>
  <h2 class="filt-h-name">${n}</h2>
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
    <button class="filt-btn-card" data-idcards="${s}" type="submit" ${d}>
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${g}#icon-${m}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");r.filtercard.innerHTML=e,r.filtercard.innerHTML===""&&(r.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}const C=document.querySelector(".pagination-list"),J=document.querySelector(".pagination"),h=document.querySelector(".last-total-page"),k=document.querySelector(".pag-first-page"),w=document.querySelector(".prew-button"),$=document.querySelector(".next-button");function R(t,e){let s="",i=t-2,o=e-2,n=e;if(h.textContent=t,t===1?J.style="display: none":J.style="display: flex",e===1?w.setAttribute("disabled",!0):w.removeAttribute("disabled"),e==t?$.setAttribute("disabled",!0):$.removeAttribute("disabled"),t>6){e<3&&(o=1,e=3),e>t-3&&(e=t-3,o=e-2);for(let a=o;a<=e;a++)a===n?s+=`<li class="pagination-item"><button class="pagination-number active" type="button">${a}</button></li>`:s+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`;s+='<li class="pagination-item dot-item"><span>...</span></li>';for(let a=i;a<=t;a++)a===n?s+=`<li class="pagination-item"><button class="pagination-number active" type="button">${a}</button></li>`:s+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`}if(C.innerHTML=s,t>1&&t<7){k.style="display: none",h.style="display: none";for(let a=1;a<=t;a++)s+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`}else k.style="display: block",h.style="display: block";C.innerHTML=s}async function j(t){if(t.target.classList.contains("pagination-arrow")||t.target.classList.contains("pagination-number")){const e=t.target.textContent,s=JSON.parse(localStorage.getItem("filters"));s.page=e,localStorage.setItem("filters",JSON.stringify(s)),p()}else return}async function U(t){const e=JSON.parse(localStorage.getItem("filters"));e.totalPages,e.page=e.page-1,localStorage.setItem("filters",JSON.stringify(e)),p()}async function G(t){const e=JSON.parse(localStorage.getItem("filters"));e.totalPages,e.page=Number(e.page)+1,localStorage.setItem("filters",JSON.stringify(e)),p()}async function K(t){const e=JSON.parse(localStorage.getItem("filters"));e.page=1,localStorage.setItem("filters",JSON.stringify(e)),p()}async function Q(t){const e=JSON.parse(localStorage.getItem("filters"));e.page=h.textContent,localStorage.setItem("filters",JSON.stringify(e)),p()}C.addEventListener("click",j);w.addEventListener("click",U);$.addEventListener("click",G);k.addEventListener("click",K);h.addEventListener("click",Q);const b={keyword:null},u={keyword:null,category:null,page:1,limit:E()};localStorage.getItem("filters")||localStorage.setItem("filters",JSON.stringify(u));window.addEventListener("resize",z(p,2500));let I=0;async function X(){try{const e=(await H()).map(i=>{let o;return i.includes("_")?o=i.replace(/_/g," "):o=i,`<option value="${i}">${o}</option>`}).join("");r.categor.innerHTML+=e;const s=document.createElement("option");s.value="Show all",s.textContent="Show all",r.categor.prepend(s)}catch(t){console.log(t)}}async function p(){const t=E();u.limit=t;const e=JSON.parse(localStorage.getItem("filters"));e&&(u.keyword=e.keyword,u.category=e.category,u.page=e.page,localStorage.setItem("filters",JSON.stringify(u)),x());try{const s=await D(u.keyword,u.category,"","","",u.page,t);localStorage.setItem("totalPage",JSON.stringify(s.totalPages));const i=s.results;I=s.totalPages,console.log(I),console.log(u.page),R(I,u.page),F(i)}catch(s){console.log(s)}}X();p();r.form&&(r.form.addEventListener("input",Y),r.form.addEventListener("submit",Z));async function Y(){const t=r.filtersInput.value;b.keyword=t,t===""&&(b.keyword=null),localStorage.setItem("keyword",JSON.stringify(b))}async function Z(t){t.preventDefault();const e=r.filtersInput.value;u.keyword=e,e===""&&(u.keyword=null);const s=r.filtersCategories.value;u.category=s,s===""&&(u.category=null),s==="Show all"&&(u.category=null),u.page=1,localStorage.setItem("filters",JSON.stringify(u)),p(),t.target.reset()}function x(){try{const t=JSON.parse(localStorage.getItem("keyword"));r.filtersInput&&(r.filtersInput.value=t.keyword||"")}catch{return}}x();function E(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function tt(t){const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${g}#icon-check`),s.setAttribute("disabled","true");const o=s.dataset.idcards,n=localStorage.getItem("cart"),a=JSON.parse(n);if(a){const c=a.find(l=>l._id===o);if(c){c.quantity+=1,localStorage.setItem("cart",JSON.stringify(a));return}a.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),f();return}if(!a){const c=[];c.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(c)),f()}}r.listCards.addEventListener("click",tt);function L(t){const{_id:e,name:s,category:i,size:o,popularity:n,desc:a,price:c,img:l}=t,d=document.querySelector(".shop-btn-card"),m=document.querySelector(".shop-h-name"),y=document.querySelector(".shop-span-category"),S=document.querySelector(".shop-span-size"),v=document.querySelector(".shop-span-popularity"),M=document.querySelector(".shop-text-discription"),B=document.querySelector(".shop-h-price"),O=document.querySelector(".shop-img"),P=JSON.parse(localStorage.getItem("cart"));let N={};P&&(N=P.find(T=>T._id===e)??!1),N!==!1?(d.innerHTML=`Remove from<svg class="shop-card-icon" height="18" width="18">
          <use href="${g}#icon-shop"></use>
        </svg>`,d.setAttribute("data-check","true"),d.classList.add("shop-btn-card-active")):(d.innerHTML=`Add to<svg class="shop-card-icon" height="18" width="18">
          <use href="${g}#icon-shop"></use>
        </svg>`,d.setAttribute("data-check","false"),d.classList.remove("shop-btn-card-active")),d.dataset.idcards=e,m.textContent=s,y.textContent=i,S.textContent=o,v.textContent=n,M.textContent=a,B.textContent=`$${c}`,O.src=l,O.alt=s}function et(t){const e=t.map(({_id:s,category:i,img:o,name:n,size:a,popularity:c})=>{i.includes("_")&&(i=i.replace(/_/g," "));let l="shop",d="";const m=JSON.parse(localStorage.getItem("cart"));return m&&m.find(S=>S._id===s)&&(l="check",d="popular-icon-back"),`
      <div class="popular-card" data-idcarts="${s}">
      <div class="popular-background">
            <img src="${o}" alt="${n}" class="popular-img">
          </div>
        
        <div class="popular-descript">
          <div class="popular-descript-text">
            <p class="popular-name">${n}</p>
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
          <button data-idcarts="${s}" class="popular-icon-cont ${d}">
              <svg class="popular-icon" width="20" height="20">
                <use href="${g}#icon-${l}" class="filt-use"></use>
              </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
`}).join("");r.PopularDiv.innerHTML=e}_();async function _(){try{const e=(await W()).data;et(e)}catch{}}r.PopularDiv.addEventListener("click",st);async function st(t){t.preventDefault();const{target:e}=t,s=e.closest(".popular-card");if(!s||e.closest(".popular-icon-cont"))return;const o=s.dataset.idcarts;try{const n=await q(o);L(n),r.modalWindowId.classList.remove("is-hidden-card")}catch(n){console.log(n)}}function at(t){p();const{target:e}=t,s=e.closest(".popular-icon-cont");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${g}#icon-check`),s.setAttribute("disabled","true"),s.classList.add("popular-icon-back");const n=s.dataset.idcarts,a=localStorage.getItem("cart"),c=JSON.parse(a);if(c){const l=c.find(d=>d._id===n);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(c));return}c.push({_id:n,quantity:1}),localStorage.setItem("cart",JSON.stringify(c)),f();return}if(!c){const l=[];l.push({_id:n,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),f()}}r.PopularDiv.addEventListener("click",at);const it=document.getElementById("id-modal-card");function nt(t){const e=document.createElement("div");return e.classList.add("product-card"),e.dataset.idcarts=t._id,e.addEventListener("click",()=>{L(t),it.classList.remove("is-hidden-card")}),e.innerHTML=`
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
  `,e}function ot(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}V().then(t=>t.data).then(t=>{const e=ot(t,2),s=document.getElementById("discountContainer");e.forEach(i=>{s.appendChild(nt(i))})}).catch(t=>{console.error(t.message)});const rt=document.querySelector(".shop-modal-close-btn");r.listCards.addEventListener("click",ct);async function ct(t){t.preventDefault();const{target:e}=t,s=e.closest(".filt-div-card");if(!s||e.closest(".filt-btn-card"))return;const o=s.dataset.idcarts;try{const n=await q(o);L(n),r.modalWindowId.classList.remove("is-hidden-card")}catch(n){console.log(n)}document.body.style.overflow="hidden"}rt.addEventListener("click",A);function A(){r.modalWindowId.classList.add("is-hidden-card"),document.body.style.overflow="scroll"}function lt(t){const{target:e}=t,s=e.closest(".shop-btn-card");if(p(),_(),!s)return;const i=s.dataset.idcards,o=s.dataset.check;console.log(o),A();const n=localStorage.getItem("cart"),a=JSON.parse(n);if(o==="false"){if(a){const l=a.find(d=>d._id===i);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(a));return}a.push({_id:i,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),f();return}const c=[];c.push({_id:i,quantity:1}),localStorage.setItem("cart",JSON.stringify(c)),f()}else if(a&&a.find(l=>l._id===i)){const l=a.filter(d=>d._id!==i);localStorage.setItem("cart",JSON.stringify(l)),f();return}}r.addCartBtn.addEventListener("click",lt);
//# sourceMappingURL=commonHelpers2.js.map
