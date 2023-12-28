import{i as f,r,a as V,g as $,o as g,A as B,b as W,c as z}from"./assets/headerFunctionCount-5e27f103.js";import{l as R}from"./assets/vendor-611745ce.js";function j(s){const e=s.map(({_id:t,category:o,img:i,name:a,size:c,popularity:n,price:l})=>{o.includes("_")&&(o=o.replace(/_/g," "));let u="",y="shop";const m=JSON.parse(localStorage.getItem("cart"));return m&&m.find(S=>S._id===t)&&(y="check",u="disabled"),`<div class="filt-div-card" data-idcarts="${t}">
      <div class="filt-div-img">
  <img class="filt-img" src="${i}" alt="${a}" width="140">
  </div>
  <h2 class="filt-h-name">${a}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${o}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${c}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${n}</span></p>
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
`}).join("");r.filtercard.innerHTML=e,r.filtercard.innerHTML===""&&(r.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}const k=document.querySelector(".pagination-list"),q=document.querySelector(".pagination"),h=document.querySelector(".last-total-page"),w=document.querySelector(".pag-first-page"),I=document.querySelector(".prew-button"),C=document.querySelector(".next-button");function F(s,e){let t="",o=s-2,i=e;if(h.dataset.total=s,s===1?q.style="display: none":q.style="display: flex",e==1?I.setAttribute("disabled",!0):I.removeAttribute("disabled"),e==s?C.setAttribute("disabled",!0):C.removeAttribute("disabled"),s>6){e>s-4&&(e=s-4),e===1&&(e=e+1);for(let a=e-1;a<=e+1;a++)a==i?t+=`<li class="pagination-item"><button class="pagination-number active" type="button">${a}</button></li>`:t+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`;t+='<li class="pagination-item dot-item"><span>...</span></li>';for(let a=o;a<=s;a++)a==i?t+=`<li class="pagination-item"><button class="pagination-number active" type="button">${a}</button></li>`:t+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`}if(k.innerHTML=t,s>1&&s<7){w.style="display: none",h.style="display: none";for(let a=1;a<=s;a++)t+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`}else w.style="display: block",h.style="display: block";k.innerHTML=t}async function U(s){if(s.target.classList.contains("pagination-arrow")||s.target.classList.contains("pagination-number")){const e=s.target.textContent,t=JSON.parse(localStorage.getItem("filters"));t.page=parseInt(e),localStorage.setItem("filters",JSON.stringify(t)),p()}else return}async function G(s){const e=JSON.parse(localStorage.getItem("filters"));e.totalPages,e.page=e.page-1,localStorage.setItem("filters",JSON.stringify(e)),p()}async function K(s){const e=JSON.parse(localStorage.getItem("filters"));e.totalPages,e.page=Number(e.page)+1,localStorage.setItem("filters",JSON.stringify(e)),p()}async function Q(s){const e=JSON.parse(localStorage.getItem("filters"));e.page=1,localStorage.setItem("filters",JSON.stringify(e)),p()}async function X(s){const e=JSON.parse(localStorage.getItem("filters"));e.page=h.dataset.total,localStorage.setItem("filters",JSON.stringify(e)),p()}k.addEventListener("click",U);I.addEventListener("click",G);C.addEventListener("click",K);w.addEventListener("click",Q);h.addEventListener("click",X);function O(s){const{_id:e,name:t,category:o,size:i,popularity:a,desc:c,price:n,img:l}=s,u=document.querySelector(".shop-btn-card"),y=document.querySelector(".shop-h-name"),m=document.querySelector(".shop-span-category"),v=document.querySelector(".shop-span-size"),S=document.querySelector(".shop-span-popularity"),M=document.querySelector(".shop-text-discription"),T=document.querySelector(".shop-h-price"),P=document.querySelector(".shop-img"),N=JSON.parse(localStorage.getItem("cart"));let J={};N&&(J=N.find(H=>H._id===e)??!1),J!==!1?(u.innerHTML=`Remove from<svg class="shop-card-icon" height="18" width="18">
          <use href="${f}#icon-shop"></use>
        </svg>`,u.setAttribute("data-check","true"),u.classList.add("shop-btn-card-active")):(u.innerHTML=`Add to<svg class="shop-card-icon" height="18" width="18">
          <use href="${f}#icon-shop"></use>
        </svg>`,u.setAttribute("data-check","false"),u.classList.remove("shop-btn-card-active")),u.dataset.idcards=e,y.textContent=t,m.textContent=o,v.textContent=i,S.textContent=a,M.textContent=c,T.textContent=`$${n}`,P.src=l,P.alt=t}function Y(s){const e=s.map(({_id:t,category:o,img:i,name:a,size:c,popularity:n})=>{o.includes("_")&&(o=o.replace(/_/g," "));let l="shop",u="";const y=JSON.parse(localStorage.getItem("cart"));return y&&y.find(v=>v._id===t)&&(l="check",u="popular-icon-back"),`
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
              <span class="popular-word">${c}</span></p></li>
              <li>
            <p class="popular-text">Popularity:
              <span class="popular-word">${n}</span></p></li></ul>
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
`}).join("");r.PopularDiv.innerHTML=e}L();async function L(){try{const e=(await V()).data;Y(e)}catch{}}r.PopularDiv.addEventListener("click",Z);async function Z(s){s.preventDefault(),document.body.style.overflow="hidden";const{target:e}=s,t=e.closest(".popular-card");if(!t||e.closest(".popular-icon-cont"))return;const i=t.dataset.idcarts;try{const a=await $(i);O(a),r.modalWindowId.classList.remove("is-hidden-card")}catch(a){console.log(a)}}function tt(s){p();const{target:e}=s,t=e.closest(".popular-icon-cont");if(!t)return;t.querySelector(".filt-use").setAttribute("href",`${f}#icon-check`),t.setAttribute("disabled","true"),t.classList.add("popular-icon-back");const a=t.dataset.idcarts,c=localStorage.getItem("cart"),n=JSON.parse(c);if(n){const l=n.find(u=>u._id===a);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(n));return}n.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),g(),document.body.style.overflow="scroll";return}if(!n){const l=[];l.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),g()}}r.PopularDiv.addEventListener("click",tt);const b={keyword:null},d={keyword:null,category:null,page:1,limit:_()},et=document.querySelector(".filter-categories");localStorage.getItem("filters")||localStorage.setItem("filters",JSON.stringify(d));window.addEventListener("resize",R(p,1e3));let x=0;async function st(){try{const e=(await B()).map(o=>{let i;return o.includes("_")?i=o.replace(/_/g," "):i=o,`<option value="${o}">${i}</option>`}).join("");r.categor.innerHTML+=e;const t=document.createElement("option");t.value="Show all",t.textContent="Show all",r.categor.prepend(t)}catch(s){console.log(s)}}async function p(){const s=_();d.limit=s;const e=JSON.parse(localStorage.getItem("filters"));e&&(d.keyword=e.keyword,d.category=e.category,d.page=e.page,localStorage.setItem("filters",JSON.stringify(d)),E());try{const t=await W(d.keyword,d.category,"","","",d.page,s);localStorage.setItem("totalPage",JSON.stringify(t.totalPages));const o=t.results;x=t.totalPages,F(x,d.page),j(o)}catch(t){console.log(t)}}st();p();r.form&&(r.form.addEventListener("input",at),r.form.addEventListener("submit",ot));async function at(){const s=r.filtersInput.value;b.keyword=s,s===""&&(b.keyword=null),localStorage.setItem("keyword",JSON.stringify(b))}async function ot(s){s.preventDefault();const e=r.filtersInput.value;d.keyword=e,e===""&&(d.keyword=null);const t=r.filtersCategories.value;d.category=t,t===""&&(d.category=null),t==="Show all"&&(d.category=null),d.page=1,localStorage.setItem("filters",JSON.stringify(d)),p(),s.target.reset()}function E(){try{const s=JSON.parse(localStorage.getItem("keyword"));r.filtersInput&&(r.filtersInput.value=s.keyword||"")}catch{return}}E();function _(){const s=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return s>=1440?9:s>=768?8:6}function it(s){L();const{target:e}=s,t=e.closest(".filt-btn-card");if(!t)return;t.querySelector(".filt-use").setAttribute("href",`${f}#icon-check`),t.setAttribute("disabled","true");const i=t.dataset.idcards,a=localStorage.getItem("cart"),c=JSON.parse(a);if(c){const n=c.find(l=>l._id===i);if(n){n.quantity+=1,localStorage.setItem("cart",JSON.stringify(c));return}c.push({_id:i,quantity:1}),localStorage.setItem("cart",JSON.stringify(c)),g();return}if(!c){const n=[];n.push({_id:i,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),g()}}r.listCards.addEventListener("click",it);et.addEventListener("change",ct);function ct(){const s=r.filtersCategories.value;d.category=s,d.page=1,s===""&&(d.category=null),s==="Show all"&&(d.category=null),localStorage.setItem("filters",JSON.stringify(d)),p()}function A(s){const e=s.map(({_id:t,img:o,name:i,price:a})=>{let c="shop";const n=JSON.parse(localStorage.getItem("cart"));return n&&n.find(u=>u._id===t)&&(c="check"),`
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
            <use href="${f}#icon-${c}" class="filt-use"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

`}).join("");r.DiscountDiv.innerHTML=e}nt();async function nt(){try{const t=(await z()).data;A(t);const o=s(t,2);A(o)}catch{}function s(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}}r.DiscountDiv.addEventListener("click",rt);async function rt(s){s.preventDefault(),document.body.style.overflow="hidden";const{target:e}=s,t=e.closest(".product-card");if(!t||e.closest(".discount-icon-cont"))return;const i=t.dataset.idcarts;try{const a=await $(i);O(a),r.modalWindowId.classList.remove("is-hidden-card")}catch(a){console.log(a)}}async function lt(s){try{const{target:e}=s,t=e.closest(".discount-icon-cont");if(!t)return;t.querySelector(".filt-use").setAttribute("href",`${f}#icon-check`),t.setAttribute("disabled","true");const i=t.dataset.idcarts,a=localStorage.getItem("cart"),c=JSON.parse(a)||[],n=c.find(l=>l._id===i);n?n.quantity+=1:(c.push({_id:i,quantity:1}),g()),localStorage.setItem("cart",JSON.stringify(c))}catch{}document.body.style.overflow="scroll"}r.DiscountDiv.addEventListener("click",lt);const dt=document.querySelector(".shop-modal-close-btn");r.listCards.addEventListener("click",ut);async function ut(s){s.preventDefault();const{target:e}=s,t=e.closest(".filt-div-card");if(!t||e.closest(".filt-btn-card"))return;const i=t.dataset.idcarts;try{const a=await $(i);O(a),r.modalWindowId.classList.remove("is-hidden-card")}catch(a){console.log(a)}document.body.style.overflow="hidden"}dt.addEventListener("click",D);function D(){r.modalWindowId.classList.add("is-hidden-card"),document.body.style.overflow="scroll"}function pt(s){const{target:e}=s,t=e.closest(".shop-btn-card");if(p(),L(),!t)return;const o=t.dataset.idcards,i=t.dataset.check;console.log(i),D();const a=localStorage.getItem("cart"),c=JSON.parse(a);if(i==="false"){if(c){const l=c.find(u=>u._id===o);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(c));return}c.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(c)),g();return}const n=[];n.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),g()}else if(c&&c.find(l=>l._id===o)){const l=c.filter(u=>u._id!==o);localStorage.setItem("cart",JSON.stringify(l)),g();return}}r.addCartBtn.addEventListener("click",pt);
//# sourceMappingURL=commonHelpers2.js.map
