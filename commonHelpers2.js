import{i as p,a as J,g as I,A as _,b as E,c as M}from"./assets/subscription-935feb41.js";import{l as H}from"./assets/vendor-611745ce.js";const o={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count"),PopularDiv:document.getElementById("popularContainer"),modalWindowId:document.getElementById("id-modal-card")};function f(){const t=JSON.parse(localStorage.getItem("cart"));t?o.countHeader.textContent=`(${t.length})`:o.countHeader.textContent="(0)"}f();function A(t){const s=t.map(({_id:e,category:a,img:r,name:i,size:c,popularity:n,price:l})=>{a.includes("_")&&(a=a.replace(/_/g," "));let d="",g="shop";const m=JSON.parse(localStorage.getItem("cart"));return m&&m.find(v=>v._id===e)&&(g="check",d="disabled"),`<div class="filt-div-card" data-idcarts="${e}">
      <div class="filt-div-img">
  <img class="filt-img" src="${r}" alt="${i}" width="140">
  </div>
  <h2 class="filt-h-name">${i}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${a}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${c}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${n}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${l}</h2>
    <button class="filt-btn-card" data-idcards="${e}" type="submit" ${d}>
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${p}#icon-${g}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");o.filtercard.innerHTML=s,o.filtercard.innerHTML===""&&(o.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}function C(t){const{_id:s,name:e,category:a,size:r,popularity:i,desc:c,price:n,img:l}=t,d=document.querySelector(".shop-btn-card"),g=document.querySelector(".shop-h-name"),m=document.querySelector(".shop-span-category"),y=document.querySelector(".shop-span-size"),v=document.querySelector(".shop-span-popularity"),O=document.querySelector(".shop-text-discription"),x=document.querySelector(".shop-h-price"),k=document.querySelector(".shop-img"),$=JSON.parse(localStorage.getItem("cart"));let w={};$&&(w=$.find(N=>N._id===s)??!1),w!==!1?(d.innerHTML=`Remove from<svg class="shop-card-icon" height="18" width="18">
          <use href="${p}#icon-shop"></use>
        </svg>`,d.setAttribute("data-check","true"),d.classList.add("shop-btn-card-active")):(d.innerHTML=`Add to<svg class="shop-card-icon" height="18" width="18">
          <use href="${p}#icon-shop"></use>
        </svg>`,d.setAttribute("data-check","false"),d.classList.remove("shop-btn-card-active")),d.dataset.idcards=s,g.textContent=e,m.textContent=a,y.textContent=r,v.textContent=i,O.textContent=c,x.textContent=`$${n}`,k.src=l,k.alt=e}function B(t){const s=t.map(({_id:e,category:a,img:r,name:i,size:c,popularity:n})=>{a.includes("_")&&(a=a.replace(/_/g," "));let l="shop",d="";const g=JSON.parse(localStorage.getItem("cart"));return g&&g.find(y=>y._id===e)&&(l="check",d="popular-icon-back"),`
      <div class="popular-card" data-idcarts="${e}">
      <div class="popular-background">
            <img src="${r}" alt="${i}" class="popular-img">
          </div>
        
        <div class="popular-descript">
          <div class="popular-descript-text">
            <p class="popular-name">${i}</p>
          <div class="pop-frame">
  
          <div class="category-cont">
            <p class="popular-text">Category:
              <span class="popular-word">${a}</span></p>
              
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
          <button data-idcarts="${e}" class="popular-icon-cont ${d}">
              <svg class="popular-icon" width="20" height="20">
                <use href="${p}#icon-${l}" class="filt-use"></use>
              </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
`}).join("");o.PopularDiv.innerHTML=s}b();async function b(){try{const s=(await J()).data;B(s)}catch{}}o.PopularDiv.addEventListener("click",T);async function T(t){t.preventDefault();const{target:s}=t,e=s.closest(".popular-card");if(!e||s.closest(".popular-icon-cont"))return;const r=e.dataset.idcarts;try{const i=await I(r);C(i),o.modalWindowId.classList.remove("is-hidden-card")}catch(i){console.log(i)}}function D(t){h();const{target:s}=t,e=s.closest(".popular-icon-cont");if(!e)return;e.querySelector(".filt-use").setAttribute("href",`${p}#icon-check`),e.setAttribute("disabled","true"),e.classList.add("popular-icon-back");const i=e.dataset.idcarts,c=localStorage.getItem("cart"),n=JSON.parse(c);if(n){const l=n.find(d=>d._id===i);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(n));return}n.push({_id:i,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),f();return}if(!n){const l=[];l.push({_id:i,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),f()}}o.PopularDiv.addEventListener("click",D);const S={keyword:null},u={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",H(h,2500));async function W(){try{const s=(await _()).map(a=>{let r;return a.includes("_")?r=a.replace(/_/g," "):r=a,`<option value="${a}">${r}</option>`}).join("");o.categor.innerHTML+=s;const e=document.createElement("option");e.value="Show all",e.textContent="Show all",o.categor.prepend(e)}catch(t){console.log(t)}}async function h(){const t=F();u.limit=t;const s=JSON.parse(localStorage.getItem("filters"));s&&(u.keyword=s.keyword,u.category=s.category,u.page=s.page,localStorage.setItem("filters",JSON.stringify(u)),P());try{const e=await E(u.keyword,u.category,"","","",u.page,t);localStorage.setItem("totalPage",JSON.stringify(e.totalPages));const a=e.results;A(a)}catch(e){console.log(e)}}W();h();o.form&&(o.form.addEventListener("input",V),o.form.addEventListener("submit",z));async function V(){const t=o.filtersInput.value;S.keyword=t,t===""&&(S.keyword=null),localStorage.setItem("keyword",JSON.stringify(S))}async function z(t){t.preventDefault();const s=o.filtersInput.value;u.keyword=s,s===""&&(u.keyword=null);const e=o.filtersCategories.value;u.category=e,e===""&&(u.category=null),e==="Show all"&&(u.category=null),localStorage.setItem("filters",JSON.stringify(u)),h(),t.target.reset()}function P(){try{const t=JSON.parse(localStorage.getItem("keyword"));o.filtersInput&&(o.filtersInput.value=t.keyword||"")}catch{return}}P();function F(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function R(t){b();const{target:s}=t,e=s.closest(".filt-btn-card");if(!e)return;e.querySelector(".filt-use").setAttribute("href",`${p}#icon-check`),e.setAttribute("disabled","true");const r=e.dataset.idcards,i=localStorage.getItem("cart"),c=JSON.parse(i);if(c){const n=c.find(l=>l._id===r);if(n){n.quantity+=1,localStorage.setItem("cart",JSON.stringify(c));return}c.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(c)),f();return}if(!c){const n=[];n.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),f()}}o.listCards.addEventListener("click",R);const L=document.querySelector(".pagination ul");let j=10,U=1;const G=document.querySelector(".pagination");L.innerHTML=K(j,U);function K(t,s){let e="",a,r=s-1,i=s+1;s>1&&(e+=`<li class="btn prev" onclick="createPagination(totalPages, ${s-1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`),s>2&&(e+='<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>',s>3&&(e+='<li class="dots"><span>...</span></li>')),s==t?r=r-2:s==t-1&&(r=r-1),s==1?i=i+2:s==2&&(i=i+1);for(var c=r;c<=i;c++)c>t||(c==0&&(c=c+1),s==c?a="active":a="",e+=`<li class="numb ${a}" onclick="createPagination(totalPages, ${c})"><span>${c}</span></li>`);return s<t-1&&(s<t-2&&(e+='<li class="dots"><span>...</span></li>'),e+=`<li class="last numb" onclick="createPagination(totalPages, ${t})"><span>${t}</span></li>`),s<t&&(e+=`<li class="btn next" onclick="createPagination(totalPages, ${s+1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`),t===1&&(G.style.display="none"),L.innerHTML=e,e}const Q=document.getElementById("id-modal-card");function X(t){const s=document.createElement("div");return s.classList.add("product-card"),s.dataset.idcarts=t._id,s.addEventListener("click",()=>{C(t),Q.classList.remove("is-hidden-card")}),s.innerHTML=`
  <div class="product-background">
        
  <div class="discount-label">
  <svg class="discount-label-icon" width="60" height="60">
    <use href="${p}#icon-discount"></use>
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
      <use href="${p}#icon-shop"></use>
    </svg>
  </div>
  </div>
  </div>
  `,s}function Y(t,s){return t.sort(()=>.5-Math.random()).slice(0,s)}M().then(t=>t.data).then(t=>{const s=Y(t,2),e=document.getElementById("discountContainer");s.forEach(a=>{e.appendChild(X(a))})}).catch(t=>{console.error(t.message)});const Z=document.querySelector(".shop-modal-close-btn");o.listCards.addEventListener("click",tt);async function tt(t){t.preventDefault();const{target:s}=t,e=s.closest(".filt-div-card");if(!e||s.closest(".filt-btn-card"))return;const r=e.dataset.idcarts;try{const i=await I(r);C(i),o.modalWindowId.classList.remove("is-hidden-card")}catch(i){console.log(i)}document.body.style.overflow="hidden"}Z.addEventListener("click",q);function q(){o.modalWindowId.classList.add("is-hidden-card"),document.body.style.overflow="scroll"}function et(t){const{target:s}=t,e=s.closest(".shop-btn-card");if(h(),b(),!e)return;const a=e.dataset.idcards,r=e.dataset.check;console.log(r),q();const i=localStorage.getItem("cart"),c=JSON.parse(i);if(r==="false"){if(c){const l=c.find(d=>d._id===a);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(c));return}c.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(c)),f();return}const n=[];n.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),f()}else if(c&&c.find(l=>l._id===a)){const l=c.filter(d=>d._id!==a);localStorage.setItem("cart",JSON.stringify(l)),f();return}}o.addCartBtn.addEventListener("click",et);
//# sourceMappingURL=commonHelpers2.js.map
