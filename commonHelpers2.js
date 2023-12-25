/* empty css                      */import{a as u}from"./assets/vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const l={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories")},p="https://food-boutique.b.goit.study/api";async function M(){try{return(await u.get(`${p}/products/categories`)).data}catch(t){console.log(t)}}async function N(t,e,s,o,r,n,a){try{const i=new URLSearchParams({keyword:t||"",category:e||"",byABC:s||!1,byPrice:o||!1,byPopularity:r||!1,page:n,limit:a});return(await u.get(`${p}/products?${i.toString()}`)).data}catch(i){console.log(i.message)}}async function B(t){try{return(await u.get(`${p}/products/${t}`)).data}catch(e){console.log(e.message)}}async function J(){try{return await u.get(`${p}/products/popular?limit=5`)}catch(t){console.log(t.message)}}async function z(){try{return await u.get(`${p}/products/discount`)}catch(t){console.log(t.message)}}async function A(t){return(await u.post(`${p}/subscription`,t)).data}const m="/project-js-dreamteam/assets/icon-c285a3d7.svg";function F(t){const e=t.map(({_id:s,category:o,img:r,name:n,size:a,popularity:i,price:d})=>`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${r}" alt="${n}" width="140">
  </div>
  <h2 class="filt-h-name">${n}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${o}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${a}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${i}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${d}</h2>
    <button class="filt-btn-card" data-idcards="${s}" type="submit">
      <svg class="filt-card-icon" height="18" width="18" >
          <use href="${m}#icon-shop"></use>
        </svg>
    </button>
  </div>
</div>
`).join("");l.filtercard.innerHTML=e}const g={keyword:null},c={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",v);async function T(){try{const e=(await M()).map(s=>`<option value="${s}">${s}</option>`).join("");l.categor.innerHTML+=e}catch(t){console.log(t)}}async function v(){const t=R();c.limit=t;const e=JSON.parse(localStorage.getItem("filters"));e&&(c.keyword=e.keyword,c.category=e.category,c.page=e.page,localStorage.setItem("filters",JSON.stringify(c)),$());try{const o=(await N(c.keyword,c.category,"","","",c.page,t)).results;F(o)}catch(s){console.log(s)}}T();v();l.form&&(l.form.addEventListener("input",_),l.form.addEventListener("submit",D));async function _(){const t=l.filtersInput.value;g.keyword=t,t===""&&(g.keyword=null),localStorage.setItem("keyword",JSON.stringify(g))}async function D(t){t.preventDefault();const e=l.filtersInput.value;c.keyword=e,e===""&&(c.keyword=null);const s=l.filtersCategories.value;c.category=s,s===""&&(c.category=null),s==="Show all"&&(c.category=null),localStorage.setItem("filters",JSON.stringify(c)),v()}function $(){try{const t=JSON.parse(localStorage.getItem("keyword"));l.filtersInput&&(l.filtersInput.value=t.keyword||"")}catch{return}}$();function R(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function U(t){const{_id:e,name:s,category:o,size:r,popularity:n,desc:a,price:i,img:d}=t,k=document.querySelector(".shop-btn-card"),P=document.querySelector(".shop-h-name"),q=document.querySelector(".shop-span-category"),I=document.querySelector(".shop-span-size"),x=document.querySelector(".shop-span-popularity"),E=document.querySelector(".shop-text-discription"),O=document.querySelector(".shop-h-price"),S=document.querySelector(".shop-img");k.dataset.idcards=e,P.textContent=s,q.textContent=o,I.textContent=r,x.textContent=n,E.textContent=a,O.textContent=`$${i}`,S.src=d,S.alt=s}const j=document.querySelector(".filter-cards"),L=document.getElementById("id-modal-card"),V=document.querySelector(".shop-modal-close-btn"),W=document.querySelector(".shop-btn-card");j.addEventListener("click",H);async function H(t){t.preventDefault();const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;const o=s.dataset.idcards;try{const r=await B(o);U(r),L.classList.remove("is-hidden-card")}catch(r){console.log(r)}}V.addEventListener("click",C);function C(){L.classList.add("is-hidden-card")}function G(t){const{target:e}=t,s=e.closest(".shop-btn-card");if(!s)return;const o=s.dataset.idcards;C();const r=localStorage.getItem("cart"),n=JSON.parse(r);if(n){const i=n.find(d=>d._id===o);if(i){i.quantity+=1,localStorage.setItem("cart",JSON.stringify(n));return}n.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(n));return}const a=[];a.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(a))}W.addEventListener("click",G);function K(t){return`
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
                <use href="${m}#icon-shop"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
    `}function Q(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}J().then(t=>t.data).then(t=>{const e=Q(t,5),s=document.getElementById("popularContainer");e.forEach(o=>{s.innerHTML+=K(o)})}).catch(t=>{console.error(t.message)});function X(t){return`
      <div class="product-card">
        <div class="product-background">
        
        <div class="discount-label">
        <svg class="discount-label-icon" width="60" height="60">
          <use href="${m}#icon-discount"></use>
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
            <use href="${m}#icon-shop"></use>
          </svg>
        </div>
        </div>

        </div>
      </div>
    `}function Y(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}z().then(t=>t.data).then(t=>{const e=Y(t,2),s=document.getElementById("discountContainer");e.forEach(o=>{s.innerHTML+=X(o)})}).catch(t=>{console.error(t.message)});const Z=document.querySelector(".footer-form"),f=document.querySelector(".modal-backdrop"),w=document.querySelector(".modal-subscribe-container"),b=document.querySelector(".modal-unsubscription-container"),tt=document.querySelectorAll(".modal-close-btn"),et=document.querySelector(".modal-container"),h=document.querySelector(".footer-btn-to-top"),st=document.querySelector(".footer-container"),y=document.querySelector(".loader");et.classList.add("is-hidden");const ot=t=>{t.forEach(e=>{e.isIntersecting?h.style.display="block":h.style.display="none"})};h.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const rt=new IntersectionObserver(ot,{root:null,threshold:.5});rt.observe(st);Z.addEventListener("submit",nt);tt.forEach(t=>{t.addEventListener("click",ct)});function nt(t){t.preventDefault();const s={email:document.querySelector(".footer-form-email").value};y.classList.remove("is-hidden"),window.addEventListener("click",o=>{o.target===f&&f.classList.add("is-hidden")}),A(s).then(o=>(y.classList.add("is-hidden"),f.classList.remove("is-hidden"),b.classList.add("is-hidden"),w.classList.remove("is-hidden"),console.log(o.data),o.json())).catch(o=>(y.classList.add("is-hidden"),o.response&&o.response.status===409?(f.classList.remove("is-hidden"),b.classList.remove("is-hidden"),w.classList.add("is-hidden")):console.log(o),o.message)),t.target.reset()}function ct(t){t.preventDefault(),f.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
