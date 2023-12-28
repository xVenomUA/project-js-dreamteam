import{i as g,A as V,a as W,b as z,g as $,c as R}from"./assets/subscription-a4b139fa.js";import{l as j}from"./assets/vendor-611745ce.js";const n={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count"),PopularDiv:document.getElementById("popularContainer"),DiscountDiv:document.getElementById("discountContainer"),modalWindowId:document.getElementById("id-modal-card")};function f(){const e=JSON.parse(localStorage.getItem("cart"));e?n.countHeader.textContent=`(${e.length})`:n.countHeader.textContent="(0)"}f();function F(e){const s=e.map(({_id:t,category:r,img:c,name:o,size:a,popularity:i,price:l})=>{r.includes("_")&&(r=r.replace(/_/g," "));let u="",m="shop";const y=JSON.parse(localStorage.getItem("cart"));return y&&y.find(v=>v._id===t)&&(m="check",u="disabled"),`<div class="filt-div-card" data-idcarts="${t}">
      <div class="filt-div-img">
  <img class="filt-img" src="${c}" alt="${o}" width="140">
  </div>
  <h2 class="filt-h-name">${o}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${r}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${a}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${i}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${l}</h2>
    <button class="filt-btn-card" data-idcards="${t}" type="submit" ${u}>
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${g}#icon-${m}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");n.filtercard.innerHTML=s,n.filtercard.innerHTML===""&&(n.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}const I=document.querySelector(".pagination-list"),J=document.querySelector(".pagination"),h=document.querySelector(".last-total-page"),C=document.querySelector(".pag-first-page"),k=document.querySelector(".prew-button"),w=document.querySelector(".next-button");function U(e,s){let t="",r=e-2,c=s-2,o=s;if(h.textContent=e,e===1?J.style="display: none":J.style="display: flex",s===1?k.setAttribute("disabled",!0):k.removeAttribute("disabled"),s==e?w.setAttribute("disabled",!0):w.removeAttribute("disabled"),e>6){s<3&&(c=1,s=3),s>e-3&&(s=e-3,c=s-2);for(let a=c;a<=s;a++)a===o?t+=`<li class="pagination-item"><button class="pagination-number active" type="button">${a}</button></li>`:t+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`;t+='<li class="pagination-item dot-item"><span>...</span></li>';for(let a=r;a<=e;a++)a===o?t+=`<li class="pagination-item"><button class="pagination-number active" type="button">${a}</button></li>`:t+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`}if(I.innerHTML=t,e>1&&e<7){C.style="display: none",h.style="display: none";for(let a=1;a<=e;a++)t+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`}else C.style="display: block",h.style="display: block";I.innerHTML=t}async function G(e){if(e.target.classList.contains("pagination-arrow")||e.target.classList.contains("pagination-number")){const s=e.target.textContent,t=JSON.parse(localStorage.getItem("filters"));t.page=s,localStorage.setItem("filters",JSON.stringify(t)),p()}else return}async function K(e){const s=JSON.parse(localStorage.getItem("filters"));s.totalPages,s.page=s.page-1,localStorage.setItem("filters",JSON.stringify(s)),p()}async function Q(e){const s=JSON.parse(localStorage.getItem("filters"));s.totalPages,s.page=Number(s.page)+1,localStorage.setItem("filters",JSON.stringify(s)),p()}async function X(e){const s=JSON.parse(localStorage.getItem("filters"));s.page=1,localStorage.setItem("filters",JSON.stringify(s)),p()}async function Y(e){const s=JSON.parse(localStorage.getItem("filters"));s.page=h.textContent,localStorage.setItem("filters",JSON.stringify(s)),p()}I.addEventListener("click",G);k.addEventListener("click",K);w.addEventListener("click",Q);C.addEventListener("click",X);h.addEventListener("click",Y);const b={keyword:null},d={keyword:null,category:null,page:1,limit:A()},Z=document.querySelector(".filter-categories");localStorage.getItem("filters")||localStorage.setItem("filters",JSON.stringify(d));window.addEventListener("resize",j(p,2500));let q=0;async function tt(){try{const s=(await V()).map(r=>{let c;return r.includes("_")?c=r.replace(/_/g," "):c=r,`<option value="${r}">${c}</option>`}).join("");n.categor.innerHTML+=s;const t=document.createElement("option");t.value="Show all",t.textContent="Show all",n.categor.prepend(t)}catch(e){console.log(e)}}async function p(){const e=A();d.limit=e;const s=JSON.parse(localStorage.getItem("filters"));s&&(d.keyword=s.keyword,d.category=s.category,d.page=s.page,localStorage.setItem("filters",JSON.stringify(d)),E());try{const t=await W(d.keyword,d.category,"","","",d.page,e);localStorage.setItem("totalPage",JSON.stringify(t.totalPages));const r=t.results;q=t.totalPages,U(q,d.page),F(r)}catch(t){console.log(t)}}tt();p();n.form&&(n.form.addEventListener("input",et),n.form.addEventListener("submit",st));async function et(){const e=n.filtersInput.value;b.keyword=e,e===""&&(b.keyword=null),localStorage.setItem("keyword",JSON.stringify(b))}async function st(e){e.preventDefault();const s=n.filtersInput.value;d.keyword=s,s===""&&(d.keyword=null);const t=n.filtersCategories.value;d.category=t,t===""&&(d.category=null),t==="Show all"&&(d.category=null),d.page=1,localStorage.setItem("filters",JSON.stringify(d)),p(),e.target.reset()}function E(){try{const e=JSON.parse(localStorage.getItem("keyword"));n.filtersInput&&(n.filtersInput.value=e.keyword||"")}catch{return}}E();function A(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return e>=1440?9:e>=768?8:6}function at(e){const{target:s}=e,t=s.closest(".filt-btn-card");if(!t)return;t.querySelector(".filt-use").setAttribute("href",`${g}#icon-check`),t.setAttribute("disabled","true");const c=t.dataset.idcards,o=localStorage.getItem("cart"),a=JSON.parse(o);if(a){const i=a.find(l=>l._id===c);if(i){i.quantity+=1,localStorage.setItem("cart",JSON.stringify(a));return}a.push({_id:c,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),f();return}if(!a){const i=[];i.push({_id:c,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),f()}}n.listCards.addEventListener("click",at);Z.addEventListener("change",rt);function rt(){const e=n.filtersCategories.value;d.category=e,d.page=1,e===""&&(d.category=null),e==="Show all"&&(d.category=null),localStorage.setItem("filters",JSON.stringify(d)),p()}function O(e){const{_id:s,name:t,category:r,size:c,popularity:o,desc:a,price:i,img:l}=e,u=document.querySelector(".shop-btn-card"),m=document.querySelector(".shop-h-name"),y=document.querySelector(".shop-span-category"),S=document.querySelector(".shop-span-size"),v=document.querySelector(".shop-span-popularity"),T=document.querySelector(".shop-text-discription"),B=document.querySelector(".shop-h-price"),P=document.querySelector(".shop-img"),L=JSON.parse(localStorage.getItem("cart"));let N={};L&&(N=L.find(H=>H._id===s)??!1),N!==!1?(u.innerHTML=`Remove from<svg class="shop-card-icon" height="18" width="18">
          <use href="${g}#icon-shop"></use>
        </svg>`,u.setAttribute("data-check","true"),u.classList.add("shop-btn-card-active")):(u.innerHTML=`Add to<svg class="shop-card-icon" height="18" width="18">
          <use href="${g}#icon-shop"></use>
        </svg>`,u.setAttribute("data-check","false"),u.classList.remove("shop-btn-card-active")),u.dataset.idcards=s,m.textContent=t,y.textContent=r,S.textContent=c,v.textContent=o,T.textContent=a,B.textContent=`$${i}`,P.src=l,P.alt=t}function ot(e){const s=e.map(({_id:t,category:r,img:c,name:o,size:a,popularity:i})=>{r.includes("_")&&(r=r.replace(/_/g," "));let l="shop",u="";const m=JSON.parse(localStorage.getItem("cart"));return m&&m.find(S=>S._id===t)&&(l="check",u="popular-icon-back"),`
      <div class="popular-card" data-idcarts="${t}">
      <div class="popular-background">
            <img src="${c}" alt="${o}" class="popular-img">
          </div>
        
        <div class="popular-descript">
          <div class="popular-descript-text">
            <p class="popular-name">${o}</p>
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
              <span class="popular-word">${i}</span></p></li></ul>
          </div>
  
            <div class="popularname-price">
          </div>
          <button data-idcarts="${t}" class="popular-icon-cont ${u}">
              <svg class="popular-icon" width="20" height="20">
                <use href="${g}#icon-${l}" class="filt-use"></use>
              </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
`}).join("");n.PopularDiv.innerHTML=s}D();async function D(){try{const s=(await z()).data;ot(s)}catch{}}n.PopularDiv.addEventListener("click",ct);async function ct(e){e.preventDefault();const{target:s}=e,t=s.closest(".popular-card");if(!t||s.closest(".popular-icon-cont"))return;const c=t.dataset.idcarts;try{const o=await $(c);O(o),n.modalWindowId.classList.remove("is-hidden-card")}catch(o){console.log(o)}}function nt(e){p();const{target:s}=e,t=s.closest(".popular-icon-cont");if(!t)return;t.querySelector(".filt-use").setAttribute("href",`${g}#icon-check`),t.setAttribute("disabled","true"),t.classList.add("popular-icon-back");const o=t.dataset.idcarts,a=localStorage.getItem("cart"),i=JSON.parse(a);if(i){const l=i.find(u=>u._id===o);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(i));return}i.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),f();return}if(!i){const l=[];l.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),f()}}n.PopularDiv.addEventListener("click",nt);function x(e){const s=e.map(({_id:t,img:r,name:c,price:o})=>{let a="shop";const i=JSON.parse(localStorage.getItem("cart"));return i&&i.find(u=>u._id===t)&&(a="check"),`
    <div class="product-card" data-idcarts="${t}">
  <div class="product-background">
    <div class="discount-label">
      <svg class="discount-label-icon" width="60" height="60">
        <use href="${g}#icon-discount"></use>
      </svg>
    </div>

    <img src="${r}" alt="${c}" class="product-image">
  </div>

  <div class="product-details">
    <div class="details-text">
      <h2 class="product-name">${c}</h2>

      <div class="price-icon">
        <p class="product-price">$${o}</p>

        <button data-idcarts="${t}" class="discount-icon-cont">
          <svg class="discount-icon" width="18" height="18">
            <use href="${g}#icon-${a}" class="filt-use"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

`}).join("");n.DiscountDiv.innerHTML=s}_();async function _(){try{const t=(await R()).data;x(t);const r=e(t,2);x(r)}catch{}function e(s,t){return s.sort(()=>.5-Math.random()).slice(0,t)}}n.DiscountDiv.addEventListener("click",it);async function it(e){e.preventDefault();const{target:s}=e,t=s.closest(".product-card");if(!t||s.closest(".discount-icon-cont"))return;const c=t.dataset.idcarts;try{const o=await $(c);O(o),n.modalWindowId.classList.remove("is-hidden-card")}catch(o){console.log(o)}}async function lt(e){try{await _();const{target:s}=e,t=s.closest(".product-icon-cont");if(!t)return;t.querySelector(".filt-use").setAttribute("href",`${g}#icon-check`),t.setAttribute("disabled","true");const c=t.dataset.idcarts,o=localStorage.getItem("cart"),a=JSON.parse(o)||[],i=a.find(l=>l._id===c);i?i.quantity+=1:(a.push({_id:c,quantity:1}),f()),localStorage.setItem("cart",JSON.stringify(a))}catch{}}n.DiscountDiv.addEventListener("click",lt);const dt=document.querySelector(".shop-modal-close-btn");n.listCards.addEventListener("click",ut);async function ut(e){e.preventDefault();const{target:s}=e,t=s.closest(".filt-div-card");if(!t||s.closest(".filt-btn-card"))return;const c=t.dataset.idcarts;try{const o=await $(c);O(o),n.modalWindowId.classList.remove("is-hidden-card")}catch(o){console.log(o)}document.body.style.overflow="hidden"}dt.addEventListener("click",M);function M(){n.modalWindowId.classList.add("is-hidden-card"),document.body.style.overflow="scroll"}function pt(e){const{target:s}=e,t=s.closest(".shop-btn-card");if(p(),D(),!t)return;const r=t.dataset.idcards,c=t.dataset.check;console.log(c),M();const o=localStorage.getItem("cart"),a=JSON.parse(o);if(c==="false"){if(a){const l=a.find(u=>u._id===r);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(a));return}a.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),f();return}const i=[];i.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),f()}else if(a&&a.find(l=>l._id===r)){const l=a.filter(u=>u._id!==r);localStorage.setItem("cart",JSON.stringify(l)),f();return}}n.addCartBtn.addEventListener("click",pt);
//# sourceMappingURL=commonHelpers2.js.map
