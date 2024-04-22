import{i as p,r as i,a as j,g as L,o as g,A as R,b as F,c as U}from"./assets/subscription-8d425622.js";import{l as G}from"./assets/vendor-611745ce.js";function O(t,s){document.querySelectorAll(`[data-idcarts="${t}"] .filt-use`).forEach(c=>{c.setAttribute("href",s)})}function K(t){const s=t.map(({_id:e,category:c,img:o,name:a,size:r,popularity:n,price:l})=>{c.includes("_")&&(c=c.replace(/_/g," "));let u="",m="shop";const y=JSON.parse(localStorage.getItem("cart"));return y&&y.find(S=>S._id===e)&&(m="check",u="disabled"),`<div class="filt-div-card" data-idcarts="${e}">
      <div class="filt-div-img">
  <img class="filt-img" src="${o}" alt="${a}" width="140">
  </div>
  <h2 class="filt-h-name">${a}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${c}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${r}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${n}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${l}</h2>
    <button class="filt-btn-card" data-idcards="${e}" type="submit" ${u}>
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${p}#icon-${m}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");i.filtercard.innerHTML=s,i.filtercard.innerHTML===""&&(i.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}const I=document.querySelector(".pagination-list"),A=document.querySelector(".pagination"),h=document.querySelector(".last-total-page"),k=document.querySelector(".pag-first-page"),C=document.querySelector(".prew-button"),$=document.querySelector(".next-button");function Q(t,s){let e="",c=t-2,o=s;if(h.dataset.total=t,t===1?A.style="display: none":A.style="display: flex",s==1?C.setAttribute("disabled",!0):C.removeAttribute("disabled"),s==t?$.setAttribute("disabled",!0):$.removeAttribute("disabled"),t>6){s>t-4&&(s=t-4),s===1&&(s=s+1);for(let a=s-1;a<=s+1;a++)a==o?e+=`<li class="pagination-item"><button class="pagination-number active" type="button">${a}</button></li>`:e+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`;e+='<li class="pagination-item dot-item"><span>...</span></li>';for(let a=c;a<=t;a++)a==o?e+=`<li class="pagination-item"><button class="pagination-number active" type="button">${a}</button></li>`:e+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`}if(I.innerHTML=e,t>1&&t<7){k.setAttribute("hidden",!0),h.setAttribute("hidden",!0);for(let a=1;a<=t;a++)a==o?e+=`<li class="pagination-item"><button class="pagination-number active" type="button">${a}</button></li>`:e+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`}else k.removeAttribute("hidden"),h.removeAttribute("hidden");I.innerHTML=e}async function X(t){if(t.target.classList.contains("pagination-arrow")||t.target.classList.contains("pagination-number")){const s=t.target.textContent,e=JSON.parse(localStorage.getItem("filters"));e.page=parseInt(s),localStorage.setItem("filters",JSON.stringify(e)),f()}else return}async function Y(t){const s=JSON.parse(localStorage.getItem("filters"));s.totalPages,s.page=s.page-1,localStorage.setItem("filters",JSON.stringify(s)),f()}async function Z(t){const s=JSON.parse(localStorage.getItem("filters"));s.totalPages,s.page=Number(s.page)+1,localStorage.setItem("filters",JSON.stringify(s)),f()}async function tt(t){const s=JSON.parse(localStorage.getItem("filters"));s.page=1,localStorage.setItem("filters",JSON.stringify(s)),f()}async function et(t){const s=JSON.parse(localStorage.getItem("filters"));s.page=h.dataset.total,localStorage.setItem("filters",JSON.stringify(s)),f()}I.addEventListener("click",X);C.addEventListener("click",Y);$.addEventListener("click",Z);k.addEventListener("click",tt);h.addEventListener("click",et);function P(t){const{_id:s,name:e,category:c,size:o,popularity:a,desc:r,price:n,img:l}=t,u=document.querySelector(".shop-btn-card"),m=document.querySelector(".shop-h-name"),y=document.querySelector(".shop-span-category"),v=document.querySelector(".shop-span-size"),S=document.querySelector(".shop-span-popularity"),B=document.querySelector(".shop-text-discription"),W=document.querySelector(".shop-h-price"),q=document.querySelector(".shop-img"),J=JSON.parse(localStorage.getItem("cart"));let x={};J&&(x=J.find(z=>z._id===s)??!1),x!==!1?(u.innerHTML=`Remove from<svg class="shop-card-icon" height="18" width="18">
          <use href="${p}#icon-shop"></use>
        </svg>`,u.setAttribute("data-check","true"),u.classList.add("shop-btn-card-active")):(u.innerHTML=`Add to<svg class="shop-card-icon" height="18" width="18">
          <use href="${p}#icon-shop"></use>
        </svg>`,u.setAttribute("data-check","false"),u.classList.remove("shop-btn-card-active")),u.dataset.idcards=s,m.textContent=e,y.textContent=c,v.textContent=o,S.textContent=a,B.textContent=r,W.textContent=`$${n}`,q.src=l,q.alt=e}function st(t){const s=t.map(({_id:e,category:c,img:o,name:a,size:r,popularity:n})=>{c.includes("_")&&(c=c.replace(/_/g," "));let l="shop",u="";const m=JSON.parse(localStorage.getItem("cart"));return m&&m.find(v=>v._id===e)&&(l="check",u="popular-icon-back"),`
      <div class="popular-card" data-idcarts="${e}">
      <div class="popular-background">
            <img src="${o}" alt="${a}" class="popular-img">
          </div>
        
        <div class="popular-descript">
          <div class="popular-descript-text">
            <p class="popular-name">${a}</p>
          <div class="pop-frame">
  
          <div class="category-cont">
            <p class="popular-text">Category:
              <span class="popular-word">${c}</span></p>
              
              <ul class="pop-text-two-cat">
              <li class="pop-text-size-pop">

            <p class="popular-text">Size:
              <span class="popular-word">${r}</span></p></li>
              <li>
            <p class="popular-text">Popularity:
              <span class="popular-word">${n}</span></p></li></ul>
          </div>
  
            <div class="popularname-price">
          </div>
          <button data-idcarts="${e}" class="popular-icon-cont ${u}">
              <svg class="popular-icon" width="20" height="20">
                <use href="${p}#icon-${l}" class="filt-use"></use>
              </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
`}).join("");i.PopularDiv.innerHTML=s}N();async function N(){try{const s=(await j()).data;st(s)}catch{}}i.PopularDiv.addEventListener("click",at);async function at(t){t.preventDefault(),document.body.style.overflow="hidden";const{target:s}=t,e=s.closest(".popular-card");if(!e||s.closest(".popular-icon-cont"))return;const o=e.dataset.idcarts;try{const a=await L(o);P(a),i.modalWindowId.classList.remove("is-hidden-card")}catch(a){console.log(a)}}function ct(t){f();const{target:s}=t,e=s.closest(".popular-icon-cont");if(!e)return;e.querySelector(".filt-use").setAttribute("href",`${p}#icon-check`),e.setAttribute("disabled","true"),e.classList.add("popular-icon-back");const a=e.dataset.idcarts,r=localStorage.getItem("cart"),n=JSON.parse(r);if(n){const l=n.find(u=>u._id===a);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(n));return}n.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),O(a,`${p}#icon-check`),g(),document.body.style.overflow="scroll";return}if(!n){const l=[];l.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),g()}}i.PopularDiv.addEventListener("click",ct);const b={keyword:null},d={keyword:null,category:null,page:1,limit:V()};document.querySelector(".filter-categories");localStorage.getItem("filters")||localStorage.setItem("filters",JSON.stringify(d));localStorage.getItem("cart")||localStorage.setItem("cart",JSON.stringify([]));window.addEventListener("resize",G(f,1e3));let E=0;async function ot(){try{const s=(await R()).map(c=>{let o;return c.includes("_")?o=c.replace(/_/g," "):o=c,`<li role="option">
        <label value="${c}">${o}</label>
      </li>`}).join("");i.categor.innerHTML+=s;const e='<li role="option"><label value="Show all">Show all</label></li>';i.categor.insertAdjacentHTML("afterbegin",e)}catch(t){console.log(t)}}const M=document.querySelector(".custom-select"),w=document.querySelector(".select-button"),_=document.querySelector(".selected-value"),rt=document.querySelector(".select-dropdown");w.addEventListener("click",t=>{M.classList.toggle("active"),w.setAttribute("aria-expanded",w.getAttribute("aria-expanded")==="true"?"false":"true");const e=t.target.closest(".select-button").querySelector(".selected-value").textContent;document.querySelectorAll(".select-dropdown li label").forEach(o=>{o.textContent==e||o.textContent=="Show all"&&e=="Categories"?o.classList.add("selectedCat"):o.classList.remove("selectedCat")})});rt.addEventListener("click",t=>{(t.target.tagName==="LABEL"||t.target.tagName==="INPUT")&&(_.textContent=t.target.textContent,_.value=t.target.getAttribute("value"),M.classList.remove("active"))});async function f(){const t=V();d.limit=t;const s=JSON.parse(localStorage.getItem("filters"));s&&(d.keyword=s.keyword,d.category=s.category,d.page=s.page,localStorage.setItem("filters",JSON.stringify(d)),T());try{const e=await F(d.keyword,d.category,"","","",d.page,t);localStorage.setItem("totalPage",JSON.stringify(e.totalPages));const c=e.results;E=e.totalPages,Q(E,d.page),K(c)}catch(e){console.log(e)}}ot();f();i.form&&(i.form.addEventListener("input",nt),i.form.addEventListener("submit",it));async function nt(){const t=i.filtersInput.value;b.keyword=t,t===""&&(b.keyword=null),localStorage.setItem("keyword",JSON.stringify(b))}async function it(t){t.preventDefault();const s=i.filtersInput.value;d.keyword=s,s===""&&(d.keyword=null);const e=document.querySelector(".selected-value").value;d.category=e,e===""&&(d.category=null),e==="Show all"&&(d.category=null),d.page=1,localStorage.setItem("filters",JSON.stringify(d)),f(),t.target.reset()}function T(){try{const t=document.querySelector(".selected-value"),s=JSON.parse(localStorage.getItem("filters"));if(s.category!==null){const c=s.category.replace(/_/g," ");t.textContent=c,t.value=s.category}const e=JSON.parse(localStorage.getItem("keyword"));i.filtersInput&&(i.filtersInput.value=e.keyword||"")}catch{return}}T();function V(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function lt(t){N();const{target:s}=t,e=s.closest(".filt-btn-card");if(!e)return;e.querySelector(".filt-use").setAttribute("href",`${p}#icon-check`),e.setAttribute("disabled","true");const o=e.dataset.idcards,a=localStorage.getItem("cart"),r=JSON.parse(a);if(r){const n=r.find(l=>l._id===o);if(n){n.quantity+=1,localStorage.setItem("cart",JSON.stringify(r));return}r.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),O(o,`${p}#icon-check`),g();return}if(!r){const n=[];n.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),g()}}i.listCards.addEventListener("click",lt);function dt(){const t=document.querySelector(".selected-value").value;d.category=t,d.page=1,t===""&&(d.category=null),t==="Show all"&&(d.category=null),localStorage.setItem("filters",JSON.stringify(d)),f()}const ut=document.querySelector(".select-dropdown");ut.addEventListener("click",dt);function D(t){const s=t.map(({_id:e,img:c,name:o,price:a})=>{let r="shop";const n=JSON.parse(localStorage.getItem("cart"));return n&&n.find(u=>u._id===e)&&(r="check"),`
    <div class="product-card" data-idcarts="${e}">
  <div class="product-background">
    <div class="discount-label">
      <svg class="discount-label-icon" width="60" height="60">
        <use href="${p}#icon-discount"></use>
      </svg>
    </div>

    <img src="${c}" alt="${o}" class="product-image">
  </div>

  <div class="product-details">
    <div class="details-text">
      <h2 class="product-name">${o}</h2>

      <div class="price-icon">
        <p class="product-price">$${a}</p>

        <button data-idcarts="${e}" class="discount-icon-cont">
          <svg class="discount-icon" width="18" height="18">
            <use href="${p}#icon-${r}" class="filt-use"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

`}).join("");i.DiscountDiv.innerHTML=s}pt();async function pt(){try{const e=(await U()).data;D(e);const c=t(e,2);D(c)}catch{}function t(s,e){return s.sort(()=>.5-Math.random()).slice(0,e)}}i.DiscountDiv.addEventListener("click",ft);async function ft(t){t.preventDefault(),document.body.style.overflow="hidden";const{target:s}=t,e=s.closest(".product-card");if(!e||s.closest(".discount-icon-cont"))return;const o=e.dataset.idcarts;try{const a=await L(o);P(a),i.modalWindowId.classList.remove("is-hidden-card")}catch(a){console.log(a)}}async function gt(t){try{const{target:s}=t,e=s.closest(".discount-icon-cont");if(!e)return;e.querySelector(".filt-use").setAttribute("href",`${p}#icon-check`),e.setAttribute("disabled","true");const o=e.dataset.idcarts,a=localStorage.getItem("cart"),r=JSON.parse(a)||[];g();const n=r.find(l=>l._id===o);n?n.quantity+=1:(r.push({_id:o,quantity:1}),O(o,`${p}#icon-check`),g()),localStorage.setItem("cart",JSON.stringify(r)),g()}catch{}document.body.style.overflow="scroll"}i.DiscountDiv.addEventListener("click",gt);const mt=document.querySelector(".shop-modal-close-btn");i.listCards.addEventListener("click",yt);async function yt(t){t.preventDefault();const{target:s}=t,e=s.closest(".filt-div-card");if(!e||s.closest(".filt-btn-card"))return;const o=e.dataset.idcarts;try{const a=await L(o);P(a),i.modalWindowId.classList.remove("is-hidden-card")}catch(a){console.log(a)}document.body.style.overflow="hidden"}mt.addEventListener("click",H);function H(){i.modalWindowId.classList.add("is-hidden-card"),document.body.style.overflow="scroll"}function ht(t){const{target:s}=t,e=s.closest(".shop-btn-card");if(f(),N(),!e)return;const c=e.dataset.idcards,o=e.dataset.check;H();const a=localStorage.getItem("cart"),r=JSON.parse(a);if(o==="false"){if(r){const l=r.find(u=>u._id===c);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(r));return}r.push({_id:c,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),g();return}const n=[];n.push({_id:c,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),g()}else if(r&&r.find(l=>l._id===c)){const l=r.filter(u=>u._id!==c);localStorage.setItem("cart",JSON.stringify(l)),g();return}}i.addCartBtn.addEventListener("click",ht);
//# sourceMappingURL=commonHelpers2.js.map
