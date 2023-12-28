import{i as f,r as c,a as V,g as C,o as g,A as B,b as W,c as z}from"./assets/headerFunctionCount-0b5f0e8d.js";import{l as R}from"./assets/vendor-611745ce.js";function j(s){const e=s.map(({_id:t,category:o,img:i,name:a,size:n,popularity:r,price:l})=>{o.includes("_")&&(o=o.replace(/_/g," "));let u="",y="shop";const m=JSON.parse(localStorage.getItem("cart"));return m&&m.find(S=>S._id===t)&&(y="check",u="disabled"),`<div class="filt-div-card" data-idcarts="${t}">
      <div class="filt-div-img">
  <img class="filt-img" src="${i}" alt="${a}" width="140">
  </div>
  <h2 class="filt-h-name">${a}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${o}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${n}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${r}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${l}</h2>
    <button class="filt-btn-card" data-idcards="${t}" type="submit" ${u}>
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${f}#icon-${y}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");c.filtercard.innerHTML=e,c.filtercard.innerHTML===""&&(c.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}const k=document.querySelector(".pagination-list"),J=document.querySelector(".pagination"),v=document.querySelector(".last-total-page"),A=document.querySelector(".pag-first-page"),w=document.querySelector(".prew-button"),I=document.querySelector(".next-button");function F(s,e){let t="",o=s-2,i=e;if(v.dataset.total=s,s===1?J.style="display: none":J.style="display: flex",e==1?w.setAttribute("disabled",!0):w.removeAttribute("disabled"),e==s?I.setAttribute("disabled",!0):I.removeAttribute("disabled"),s>6){e>s-4&&(e=s-4),e===1&&(e=e+1);for(let a=e-1;a<=e+1;a++)a==i?t+=`<li class="pagination-item"><button class="pagination-number active" type="button">${a}</button></li>`:t+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`;t+='<li class="pagination-item dot-item"><span>...</span></li>';for(let a=o;a<=s;a++)a==i?t+=`<li class="pagination-item"><button class="pagination-number active" type="button">${a}</button></li>`:t+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`}if(k.innerHTML=t,s>1&&s<7){A.style="display: none",v.style="display: none";for(let a=1;a<=s;a++)t+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`}k.innerHTML=t}async function U(s){if(s.target.classList.contains("pagination-arrow")||s.target.classList.contains("pagination-number")){const e=s.target.textContent,t=JSON.parse(localStorage.getItem("filters"));t.page=parseInt(e),localStorage.setItem("filters",JSON.stringify(t)),p()}else return}async function G(s){const e=JSON.parse(localStorage.getItem("filters"));e.totalPages,e.page=e.page-1,localStorage.setItem("filters",JSON.stringify(e)),p()}async function K(s){const e=JSON.parse(localStorage.getItem("filters"));e.totalPages,e.page=Number(e.page)+1,localStorage.setItem("filters",JSON.stringify(e)),p()}async function Q(s){const e=JSON.parse(localStorage.getItem("filters"));e.page=1,localStorage.setItem("filters",JSON.stringify(e)),p()}async function X(s){const e=JSON.parse(localStorage.getItem("filters"));e.page=v.dataset.total,localStorage.setItem("filters",JSON.stringify(e)),p()}k.addEventListener("click",U);w.addEventListener("click",G);I.addEventListener("click",K);A.addEventListener("click",Q);v.addEventListener("click",X);function $(s){const{_id:e,name:t,category:o,size:i,popularity:a,desc:n,price:r,img:l}=s,u=document.querySelector(".shop-btn-card"),y=document.querySelector(".shop-h-name"),m=document.querySelector(".shop-span-category"),h=document.querySelector(".shop-span-size"),S=document.querySelector(".shop-span-popularity"),M=document.querySelector(".shop-text-discription"),T=document.querySelector(".shop-h-price"),L=document.querySelector(".shop-img"),P=JSON.parse(localStorage.getItem("cart"));let N={};P&&(N=P.find(H=>H._id===e)??!1),N!==!1?(u.innerHTML=`Remove from<svg class="shop-card-icon" height="18" width="18">
          <use href="${f}#icon-shop"></use>
        </svg>`,u.setAttribute("data-check","true"),u.classList.add("shop-btn-card-active")):(u.innerHTML=`Add to<svg class="shop-card-icon" height="18" width="18">
          <use href="${f}#icon-shop"></use>
        </svg>`,u.setAttribute("data-check","false"),u.classList.remove("shop-btn-card-active")),u.dataset.idcards=e,y.textContent=t,m.textContent=o,h.textContent=i,S.textContent=a,M.textContent=n,T.textContent=`$${r}`,L.src=l,L.alt=t}function Y(s){const e=s.map(({_id:t,category:o,img:i,name:a,size:n,popularity:r})=>{o.includes("_")&&(o=o.replace(/_/g," "));let l="shop",u="";const y=JSON.parse(localStorage.getItem("cart"));return y&&y.find(h=>h._id===t)&&(l="check",u="popular-icon-back"),`
      <div class="popular-card" data-idcarts="${t}">
      <div class="popular-background">
            <img src="${i}" alt="${a}" class="popular-img">
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
              <span class="popular-word">${n}</span></p></li>
              <li>
            <p class="popular-text">Popularity:
              <span class="popular-word">${r}</span></p></li></ul>
          </div>
  
            <div class="popularname-price">
          </div>
          <button data-idcarts="${t}" class="popular-icon-cont ${u}">
              <svg class="popular-icon" width="20" height="20">
                <use href="${f}#icon-${l}" class="filt-use"></use>
              </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
`}).join("");c.PopularDiv.innerHTML=e}O();async function O(){try{const e=(await V()).data;Y(e)}catch{}}c.PopularDiv.addEventListener("click",Z);async function Z(s){s.preventDefault(),document.body.style.overflow="hidden";const{target:e}=s,t=e.closest(".popular-card");if(!t||e.closest(".popular-icon-cont"))return;const i=t.dataset.idcarts;try{const a=await C(i);$(a),c.modalWindowId.classList.remove("is-hidden-card")}catch(a){console.log(a)}}function tt(s){p();const{target:e}=s,t=e.closest(".popular-icon-cont");if(!t)return;t.querySelector(".filt-use").setAttribute("href",`${f}#icon-check`),t.setAttribute("disabled","true"),t.classList.add("popular-icon-back");const a=t.dataset.idcarts,n=localStorage.getItem("cart"),r=JSON.parse(n);if(r){const l=r.find(u=>u._id===a);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(r));return}r.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),g(),document.body.style.overflow="scroll";return}if(!r){const l=[];l.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),g()}}c.PopularDiv.addEventListener("click",tt);const b={keyword:null},d={keyword:null,category:null,page:1,limit:_()},et=document.querySelector(".filter-categories");localStorage.getItem("filters")||localStorage.setItem("filters",JSON.stringify(d));window.addEventListener("resize",R(p,1e3));let q=0;async function st(){try{const e=(await B()).map(o=>{let i;return o.includes("_")?i=o.replace(/_/g," "):i=o,`<option value="${o}">${i}</option>`}).join("");c.categor.innerHTML+=e;const t=document.createElement("option");t.value="Show all",t.textContent="Show all",c.categor.prepend(t)}catch(s){console.log(s)}}async function p(){const s=_();d.limit=s;const e=JSON.parse(localStorage.getItem("filters"));e&&(d.keyword=e.keyword,d.category=e.category,d.page=e.page,localStorage.setItem("filters",JSON.stringify(d)),E());try{const t=await W(d.keyword,d.category,"","","",d.page,s);localStorage.setItem("totalPage",JSON.stringify(t.totalPages));const o=t.results;q=t.totalPages,F(q,d.page),j(o)}catch(t){console.log(t)}}st();p();c.form&&(c.form.addEventListener("input",at),c.form.addEventListener("submit",ot));async function at(){const s=c.filtersInput.value;b.keyword=s,s===""&&(b.keyword=null),localStorage.setItem("keyword",JSON.stringify(b))}async function ot(s){s.preventDefault();const e=c.filtersInput.value;d.keyword=e,e===""&&(d.keyword=null);const t=c.filtersCategories.value;d.category=t,t===""&&(d.category=null),t==="Show all"&&(d.category=null),d.page=1,localStorage.setItem("filters",JSON.stringify(d)),p(),s.target.reset()}function E(){try{const s=JSON.parse(localStorage.getItem("keyword"));c.filtersInput&&(c.filtersInput.value=s.keyword||"")}catch{return}}E();function _(){const s=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return s>=1440?9:s>=768?8:6}function it(s){O();const{target:e}=s,t=e.closest(".filt-btn-card");if(!t)return;t.querySelector(".filt-use").setAttribute("href",`${f}#icon-check`),t.setAttribute("disabled","true");const i=t.dataset.idcards,a=localStorage.getItem("cart"),n=JSON.parse(a);if(n){const r=n.find(l=>l._id===i);if(r){r.quantity+=1,localStorage.setItem("cart",JSON.stringify(n));return}n.push({_id:i,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),g();return}if(!n){const r=[];r.push({_id:i,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),g()}}c.listCards.addEventListener("click",it);et.addEventListener("change",nt);function nt(){const s=c.filtersCategories.value;d.category=s,d.page=1,s===""&&(d.category=null),s==="Show all"&&(d.category=null),localStorage.setItem("filters",JSON.stringify(d)),p()}function x(s){const e=s.map(({_id:t,img:o,name:i,price:a})=>{let n="shop";const r=JSON.parse(localStorage.getItem("cart"));return r&&r.find(u=>u._id===t)&&(n="check"),`
    <div class="product-card" data-idcarts="${t}">
  <div class="product-background">
    <div class="discount-label">
      <svg class="discount-label-icon" width="60" height="60">
        <use href="${f}#icon-discount"></use>
      </svg>
    </div>

    <img src="${o}" alt="${i}" class="product-image">
  </div>

  <div class="product-details">
    <div class="details-text">
      <h2 class="product-name">${i}</h2>

      <div class="price-icon">
        <p class="product-price">$${a}</p>

        <button data-idcarts="${t}" class="discount-icon-cont">
          <svg class="discount-icon" width="18" height="18">
            <use href="${f}#icon-${n}" class="filt-use"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

`}).join("");c.DiscountDiv.innerHTML=e}rt();async function rt(){try{const t=(await z()).data;x(t);const o=s(t,2);x(o)}catch{}function s(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}}c.DiscountDiv.addEventListener("click",ct);async function ct(s){s.preventDefault(),document.body.style.overflow="hidden";const{target:e}=s,t=e.closest(".product-card");if(!t||e.closest(".discount-icon-cont"))return;const i=t.dataset.idcarts;try{const a=await C(i);$(a),c.modalWindowId.classList.remove("is-hidden-card")}catch(a){console.log(a)}}async function lt(s){try{const{target:e}=s,t=e.closest(".discount-icon-cont");if(!t)return;t.querySelector(".filt-use").setAttribute("href",`${f}#icon-check`),t.setAttribute("disabled","true");const i=t.dataset.idcarts,a=localStorage.getItem("cart"),n=JSON.parse(a)||[],r=n.find(l=>l._id===i);r?r.quantity+=1:(n.push({_id:i,quantity:1}),g()),localStorage.setItem("cart",JSON.stringify(n))}catch{}document.body.style.overflow="scroll"}c.DiscountDiv.addEventListener("click",lt);const dt=document.querySelector(".shop-modal-close-btn");c.listCards.addEventListener("click",ut);async function ut(s){s.preventDefault();const{target:e}=s,t=e.closest(".filt-div-card");if(!t||e.closest(".filt-btn-card"))return;const i=t.dataset.idcarts;try{const a=await C(i);$(a),c.modalWindowId.classList.remove("is-hidden-card")}catch(a){console.log(a)}document.body.style.overflow="hidden"}dt.addEventListener("click",D);function D(){c.modalWindowId.classList.add("is-hidden-card"),document.body.style.overflow="scroll"}function pt(s){const{target:e}=s,t=e.closest(".shop-btn-card");if(p(),O(),!t)return;const o=t.dataset.idcards,i=t.dataset.check;console.log(i),D();const a=localStorage.getItem("cart"),n=JSON.parse(a);if(i==="false"){if(n){const l=n.find(u=>u._id===o);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(n));return}n.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),g();return}const r=[];r.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),g()}else if(n&&n.find(l=>l._id===o)){const l=n.filter(u=>u._id!==o);localStorage.setItem("cart",JSON.stringify(l)),g();return}}c.addCartBtn.addEventListener("click",pt);
//# sourceMappingURL=commonHelpers2.js.map
