/* empty css                      */import{a as u}from"./assets/vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const i={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards")},p="https://food-boutique.b.goit.study/api";async function M(){try{return(await u.get(`${p}/products/categories`)).data}catch(t){console.log(t)}}async function J(t,e,s,o,r,n,c){try{const a=new URLSearchParams({keyword:t||"",category:e||"",byABC:s||!1,byPrice:o||!1,byPopularity:r||!1,page:n,limit:c});return(await u.get(`${p}/products?${a.toString()}`)).data}catch(a){console.log(a.message)}}async function A(t){try{return(await u.get(`${p}/products/${t}`)).data}catch(e){console.log(e.message)}}async function B(){try{return await u.get(`${p}/products/popular?limit=5`)}catch(t){console.log(t.message)}}async function T(){try{return await u.get(`${p}/products/discount`)}catch(t){console.log(t.message)}}async function z(t){return(await u.post(`${p}/subscription`,t)).data}const g="/project-js-dreamteam/assets/icon-dcb8169d.svg";function F(t){const e=t.map(({_id:s,category:o,img:r,name:n,size:c,popularity:a,price:d})=>{o.includes("_")&&(o=o.replace(/_/g," "));let f="",y="shop";const h=JSON.parse(localStorage.getItem("cart"));return h&&h.find(S=>S._id===s)&&(y="check",f="disabled"),`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${r}" alt="${n}" width="140">
  </div>
  <h2 class="filt-h-name">${n}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${o}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${c}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${a}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${d}</h2>
    <button class="filt-btn-card" data-idcards="${s}" type="submit" ${f}>
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${g}#icon-${y}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");i.filtercard.innerHTML=e,i.filtercard.innerHTML===""&&(i.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}function V(t){const{_id:e,name:s,category:o,size:r,popularity:n,desc:c,price:a,img:d}=t,f=document.querySelector(".shop-btn-card"),y=document.querySelector(".shop-h-name"),h=document.querySelector(".shop-span-category"),$=document.querySelector(".shop-span-size"),S=document.querySelector(".shop-span-popularity"),E=document.querySelector(".shop-text-discription"),N=document.querySelector(".shop-h-price"),L=document.querySelector(".shop-img"),k=JSON.parse(localStorage.getItem("cart"));k&&k.find(_=>_._id===e)&&f.setAttribute("disabled","true"),f.dataset.idcards=e,y.textContent=s,h.textContent=o,$.textContent=r,S.textContent=n,E.textContent=c,N.textContent=`$${a}`,L.src=d,L.alt=s}const I=document.getElementById("id-modal-card"),j=document.querySelector(".shop-modal-close-btn");i.listCards.addEventListener("click",D);async function D(t){t.preventDefault();const{target:e}=t,s=e.closest(".filt-div-card");if(!s||e.closest(".filt-btn-card"))return;const r=s.dataset.idcarts;try{const n=await A(r);V(n),I.classList.remove("is-hidden-card")}catch(n){console.log(n)}}j.addEventListener("click",O);function O(){I.classList.add("is-hidden-card")}function H(t){const{target:e}=t,s=e.closest(".shop-btn-card");if(v(),!s)return;const o=s.dataset.idcards;O();const r=localStorage.getItem("cart"),n=JSON.parse(r);if(n){const a=n.find(d=>d._id===o);if(a){a.quantity+=1,localStorage.setItem("cart",JSON.stringify(n));return}n.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(n));return}const c=[];c.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(c))}i.addCartBtn.addEventListener("click",H);const b={keyword:null},l={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",v);async function R(){try{const e=(await M()).map(o=>{let r;return o.includes("_")?r=o.replace(/_/g," "):r=o,`<option value="${o}">${r}</option>`}).join("");i.categor.innerHTML+=e;const s=document.createElement("option");s.value="Show all",s.textContent="Show all",i.categor.prepend(s)}catch(t){console.log(t)}}async function v(){const t=G();l.limit=t;const e=JSON.parse(localStorage.getItem("filters"));e&&(l.keyword=e.keyword,l.category=e.category,l.page=e.page,localStorage.setItem("filters",JSON.stringify(l)),x());try{const o=(await J(l.keyword,l.category,"","","",l.page,t)).results;F(o)}catch(s){console.log(s)}}R();v();i.form&&(i.form.addEventListener("input",U),i.form.addEventListener("submit",W));async function U(){const t=i.filtersInput.value;b.keyword=t,t===""&&(b.keyword=null),localStorage.setItem("keyword",JSON.stringify(b))}async function W(t){t.preventDefault();const e=i.filtersInput.value;l.keyword=e,e===""&&(l.keyword=null);const s=i.filtersCategories.value;l.category=s,s===""&&(l.category=null),s==="Show all"&&(l.category=null),localStorage.setItem("filters",JSON.stringify(l)),v(),t.target.reset()}function x(){try{const t=JSON.parse(localStorage.getItem("keyword"));i.filtersInput&&(i.filtersInput.value=t.keyword||"")}catch{return}}x();function G(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function K(t){const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${g}#icon-check`),s.setAttribute("disabled","true");const r=s.dataset.idcards,n=localStorage.getItem("cart"),c=JSON.parse(n);if(c){const a=c.find(d=>d._id===r);if(a){a.quantity+=1,localStorage.setItem("cart",JSON.stringify(c));return}c.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(c));return}if(!c){const a=[];a.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(a))}}i.listCards.addEventListener("click",K);function Q(t){return t.category.includes("_")&&(t.category=t.category.replace(/_/g," ")),`
        <div class="popular-card" data-productlist-id="${t._id}">
          <div class="popular-background">
            <img src="${t.img}" alt="${t.name}" class="popular-img">
          </div>
        
        <div class="popular-descript">
          <div class="popular-descript-text">
            <p class="popular-name">${t.name}</p>
          <div class="pop-frame">
  
          <div class="category-cont">
            <p class="popular-text">Category:
              <span class="popular-word">${t.category}</span></p>
              
              <ul class="pop-text-two-cat">
              <li class="pop-text-size-pop">

            <p class="popular-text">Size:
              <span class="popular-word">${t.size}</span></p></li>
              <li>
            <p class="popular-text">Popularity:
              <span class="popular-word">${t.popularity}</span></p></li></ul>
          </div>
  
            <div class="popularname-price">
          </div>
            <div id="${t._id}" class="popular-icon-cont">
              <svg class="popular-icon" width="20" height="20">
                <use href="${g}#icon-shop"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
    `}function X(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}B().then(t=>t.data).then(t=>{const e=X(t,5),s=document.getElementById("popularContainer");e.forEach(o=>{s.innerHTML+=Q(o)})}).catch(t=>{console.error(t.message)});function Y(t){return`
      <div class="product-card">
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
      </div>
    `}function Z(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}T().then(t=>t.data).then(t=>{const e=Z(t,2),s=document.getElementById("discountContainer");e.forEach(o=>{s.innerHTML+=Y(o)})}).catch(t=>{console.error(t.message)});const tt=document.querySelector(".footer-form"),m=document.querySelector(".modal-backdrop"),P=document.querySelector(".modal-subscribe-container"),q=document.querySelector(".modal-unsubscription-container"),et=document.querySelectorAll(".modal-close-btn"),st=document.querySelector(".modal-container"),C=document.querySelector(".footer-btn-to-top"),ot=document.querySelector(".footer-container"),w=document.querySelector(".loader");st.classList.add("is-hidden");const rt=t=>{t.forEach(e=>{e.isIntersecting?C.style.display="block":C.style.display="none"})};C.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const nt=new IntersectionObserver(rt,{root:null,threshold:.5});nt.observe(ot);tt.addEventListener("submit",ct);et.forEach(t=>{t.addEventListener("click",at)});function ct(t){t.preventDefault();const s={email:document.querySelector(".footer-form-email").value};w.classList.remove("is-hidden"),window.addEventListener("click",o=>{o.target===m&&m.classList.add("is-hidden")}),z(s).then(o=>(w.classList.add("is-hidden"),m.classList.remove("is-hidden"),q.classList.add("is-hidden"),P.classList.remove("is-hidden"),console.log(o.data),o.json())).catch(o=>(w.classList.add("is-hidden"),o.response&&o.response.status===409?(m.classList.remove("is-hidden"),q.classList.remove("is-hidden"),P.classList.add("is-hidden")):console.log(o),o.message)),t.target.reset()}function at(t){t.preventDefault(),m.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
