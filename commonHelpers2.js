import{i as p,r as i,a as B,g as $,o as g,A as W,b as z,c as R}from"./assets/headerFunctionCount-0b5f0e8d.js";import{l as j}from"./assets/vendor-611745ce.js";function C(s,e){document.querySelectorAll(`[data-idcarts="${s}"] .filt-use`).forEach(o=>{o.setAttribute("href",e)})}function F(s){const e=s.map(({_id:t,category:o,img:c,name:a,size:n,popularity:r,price:l})=>{o.includes("_")&&(o=o.replace(/_/g," "));let u="",y="shop";const m=JSON.parse(localStorage.getItem("cart"));return m&&m.find(S=>S._id===t)&&(y="check",u="disabled"),`<div class="filt-div-card" data-idcarts="${t}">
      <div class="filt-div-img">
  <img class="filt-img" src="${c}" alt="${a}" width="140">
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
          <use class="filt-use" href="${p}#icon-${y}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");i.filtercard.innerHTML=e,i.filtercard.innerHTML===""&&(i.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}const k=document.querySelector(".pagination-list"),q=document.querySelector(".pagination"),v=document.querySelector(".last-total-page"),E=document.querySelector(".pag-first-page"),I=document.querySelector(".prew-button"),w=document.querySelector(".next-button");function U(s,e){let t="",o=s-2,c=e;if(v.dataset.total=s,s===1?q.style="display: none":q.style="display: flex",e==1?I.setAttribute("disabled",!0):I.removeAttribute("disabled"),e==s?w.setAttribute("disabled",!0):w.removeAttribute("disabled"),s>6){e>s-4&&(e=s-4),e===1&&(e=e+1);for(let a=e-1;a<=e+1;a++)a==c?t+=`<li class="pagination-item"><button class="pagination-number active" type="button">${a}</button></li>`:t+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`;t+='<li class="pagination-item dot-item"><span>...</span></li>';for(let a=o;a<=s;a++)a==c?t+=`<li class="pagination-item"><button class="pagination-number active" type="button">${a}</button></li>`:t+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`}if(k.innerHTML=t,s>1&&s<7){E.style="display: none",v.style="display: none";for(let a=1;a<=s;a++)t+=`<li class="pagination-item"><button class="pagination-number" type="button">${a}</button></li>`}k.innerHTML=t}async function G(s){if(s.target.classList.contains("pagination-arrow")||s.target.classList.contains("pagination-number")){const e=s.target.textContent,t=JSON.parse(localStorage.getItem("filters"));t.page=parseInt(e),localStorage.setItem("filters",JSON.stringify(t)),f()}else return}async function K(s){const e=JSON.parse(localStorage.getItem("filters"));e.totalPages,e.page=e.page-1,localStorage.setItem("filters",JSON.stringify(e)),f()}async function Q(s){const e=JSON.parse(localStorage.getItem("filters"));e.totalPages,e.page=Number(e.page)+1,localStorage.setItem("filters",JSON.stringify(e)),f()}async function X(s){const e=JSON.parse(localStorage.getItem("filters"));e.page=1,localStorage.setItem("filters",JSON.stringify(e)),f()}async function Y(s){const e=JSON.parse(localStorage.getItem("filters"));e.page=v.dataset.total,localStorage.setItem("filters",JSON.stringify(e)),f()}k.addEventListener("click",G);I.addEventListener("click",K);w.addEventListener("click",Q);E.addEventListener("click",X);v.addEventListener("click",Y);function O(s){const{_id:e,name:t,category:o,size:c,popularity:a,desc:n,price:r,img:l}=s,u=document.querySelector(".shop-btn-card"),y=document.querySelector(".shop-h-name"),m=document.querySelector(".shop-span-category"),h=document.querySelector(".shop-span-size"),S=document.querySelector(".shop-span-popularity"),T=document.querySelector(".shop-text-discription"),H=document.querySelector(".shop-h-price"),L=document.querySelector(".shop-img"),N=JSON.parse(localStorage.getItem("cart"));let J={};N&&(J=N.find(V=>V._id===e)??!1),J!==!1?(u.innerHTML=`Remove from<svg class="shop-card-icon" height="18" width="18">
          <use href="${p}#icon-shop"></use>
        </svg>`,u.setAttribute("data-check","true"),u.classList.add("shop-btn-card-active")):(u.innerHTML=`Add to<svg class="shop-card-icon" height="18" width="18">
          <use href="${p}#icon-shop"></use>
        </svg>`,u.setAttribute("data-check","false"),u.classList.remove("shop-btn-card-active")),u.dataset.idcards=e,y.textContent=t,m.textContent=o,h.textContent=c,S.textContent=a,T.textContent=n,H.textContent=`$${r}`,L.src=l,L.alt=t}function Z(s){const e=s.map(({_id:t,category:o,img:c,name:a,size:n,popularity:r})=>{o.includes("_")&&(o=o.replace(/_/g," "));let l="shop",u="";const y=JSON.parse(localStorage.getItem("cart"));return y&&y.find(h=>h._id===t)&&(l="check",u="popular-icon-back"),`
      <div class="popular-card" data-idcarts="${t}">
      <div class="popular-background">
            <img src="${c}" alt="${a}" class="popular-img">
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
                <use href="${p}#icon-${l}" class="filt-use"></use>
              </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
`}).join("");i.PopularDiv.innerHTML=e}P();async function P(){try{const e=(await B()).data;Z(e)}catch{}}i.PopularDiv.addEventListener("click",tt);async function tt(s){s.preventDefault(),document.body.style.overflow="hidden";const{target:e}=s,t=e.closest(".popular-card");if(!t||e.closest(".popular-icon-cont"))return;const c=t.dataset.idcarts;try{const a=await $(c);O(a),i.modalWindowId.classList.remove("is-hidden-card")}catch(a){console.log(a)}}function et(s){f();const{target:e}=s,t=e.closest(".popular-icon-cont");if(!t)return;t.querySelector(".filt-use").setAttribute("href",`${p}#icon-check`),t.setAttribute("disabled","true"),t.classList.add("popular-icon-back");const a=t.dataset.idcarts,n=localStorage.getItem("cart"),r=JSON.parse(n);if(r){const l=r.find(u=>u._id===a);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(r));return}r.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),C(a,`${p}#icon-check`),g(),document.body.style.overflow="scroll";return}if(!r){const l=[];l.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),g()}}i.PopularDiv.addEventListener("click",et);const b={keyword:null},d={keyword:null,category:null,page:1,limit:D()},st=document.querySelector(".filter-categories");localStorage.getItem("filters")||localStorage.setItem("filters",JSON.stringify(d));window.addEventListener("resize",j(f,1e3));let x=0;async function at(){try{const e=(await W()).map(o=>{let c;return o.includes("_")?c=o.replace(/_/g," "):c=o,`<option value="${o}">${c}</option>`}).join("");i.categor.innerHTML+=e;const t=document.createElement("option");t.value="Show all",t.textContent="Show all",i.categor.prepend(t)}catch(s){console.log(s)}}async function f(){const s=D();d.limit=s;const e=JSON.parse(localStorage.getItem("filters"));e&&(d.keyword=e.keyword,d.category=e.category,d.page=e.page,localStorage.setItem("filters",JSON.stringify(d)),_());try{const t=await z(d.keyword,d.category,"","","",d.page,s);localStorage.setItem("totalPage",JSON.stringify(t.totalPages));const o=t.results;x=t.totalPages,U(x,d.page),F(o)}catch(t){console.log(t)}}at();f();i.form&&(i.form.addEventListener("input",ot),i.form.addEventListener("submit",ct));async function ot(){const s=i.filtersInput.value;b.keyword=s,s===""&&(b.keyword=null),localStorage.setItem("keyword",JSON.stringify(b))}async function ct(s){s.preventDefault();const e=i.filtersInput.value;d.keyword=e,e===""&&(d.keyword=null);const t=i.filtersCategories.value;d.category=t,t===""&&(d.category=null),t==="Show all"&&(d.category=null),d.page=1,localStorage.setItem("filters",JSON.stringify(d)),f(),s.target.reset()}function _(){try{const s=JSON.parse(localStorage.getItem("keyword"));i.filtersInput&&(i.filtersInput.value=s.keyword||"")}catch{return}}_();function D(){const s=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return s>=1440?9:s>=768?8:6}function nt(s){P();const{target:e}=s,t=e.closest(".filt-btn-card");if(!t)return;t.querySelector(".filt-use").setAttribute("href",`${p}#icon-check`),t.setAttribute("disabled","true");const c=t.dataset.idcards,a=localStorage.getItem("cart"),n=JSON.parse(a);if(n){const r=n.find(l=>l._id===c);if(r){r.quantity+=1,localStorage.setItem("cart",JSON.stringify(n));return}n.push({_id:c,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),C(c,`${p}#icon-check`),g();return}if(!n){const r=[];r.push({_id:c,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),g()}}i.listCards.addEventListener("click",nt);st.addEventListener("change",rt);function rt(){const s=i.filtersCategories.value;d.category=s,d.page=1,s===""&&(d.category=null),s==="Show all"&&(d.category=null),localStorage.setItem("filters",JSON.stringify(d)),f()}function A(s){const e=s.map(({_id:t,img:o,name:c,price:a})=>{let n="shop";const r=JSON.parse(localStorage.getItem("cart"));return r&&r.find(u=>u._id===t)&&(n="check"),`
    <div class="product-card" data-idcarts="${t}">
  <div class="product-background">
    <div class="discount-label">
      <svg class="discount-label-icon" width="60" height="60">
        <use href="${p}#icon-discount"></use>
      </svg>
    </div>

    <img src="${o}" alt="${c}" class="product-image">
  </div>

  <div class="product-details">
    <div class="details-text">
      <h2 class="product-name">${c}</h2>

      <div class="price-icon">
        <p class="product-price">$${a}</p>

        <button data-idcarts="${t}" class="discount-icon-cont">
          <svg class="discount-icon" width="18" height="18">
            <use href="${p}#icon-${n}" class="filt-use"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

`}).join("");i.DiscountDiv.innerHTML=e}it();async function it(){try{const t=(await R()).data;A(t);const o=s(t,2);A(o)}catch{}function s(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}}i.DiscountDiv.addEventListener("click",lt);async function lt(s){s.preventDefault(),document.body.style.overflow="hidden";const{target:e}=s,t=e.closest(".product-card");if(!t||e.closest(".discount-icon-cont"))return;const c=t.dataset.idcarts;try{const a=await $(c);O(a),i.modalWindowId.classList.remove("is-hidden-card")}catch(a){console.log(a)}}async function dt(s){try{const{target:e}=s,t=e.closest(".discount-icon-cont");if(!t)return;t.querySelector(".filt-use").setAttribute("href",`${p}#icon-check`),t.setAttribute("disabled","true");const c=t.dataset.idcarts,a=localStorage.getItem("cart"),n=JSON.parse(a)||[],r=n.find(l=>l._id===c);r?r.quantity+=1:(n.push({_id:c,quantity:1}),C(c,`${p}#icon-check`),g()),localStorage.setItem("cart",JSON.stringify(n))}catch{}document.body.style.overflow="scroll"}i.DiscountDiv.addEventListener("click",dt);const ut=document.querySelector(".shop-modal-close-btn");i.listCards.addEventListener("click",pt);async function pt(s){s.preventDefault();const{target:e}=s,t=e.closest(".filt-div-card");if(!t||e.closest(".filt-btn-card"))return;const c=t.dataset.idcarts;try{const a=await $(c);O(a),i.modalWindowId.classList.remove("is-hidden-card")}catch(a){console.log(a)}document.body.style.overflow="hidden"}ut.addEventListener("click",M);function M(){i.modalWindowId.classList.add("is-hidden-card"),document.body.style.overflow="scroll"}function ft(s){const{target:e}=s,t=e.closest(".shop-btn-card");if(f(),P(),!t)return;const o=t.dataset.idcards,c=t.dataset.check;console.log(c),M();const a=localStorage.getItem("cart"),n=JSON.parse(a);if(c==="false"){if(n){const l=n.find(u=>u._id===o);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(n));return}n.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),g();return}const r=[];r.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),g()}else if(n&&n.find(l=>l._id===o)){const l=n.filter(u=>u._id!==o);localStorage.setItem("cart",JSON.stringify(l)),g();return}}i.addCartBtn.addEventListener("click",ft);
//# sourceMappingURL=commonHelpers2.js.map
