/* empty css                      */import{a as l,S as L}from"./assets/vendor-dbddb547.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const c={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories")},d="https://food-boutique.b.goit.study/api";async function P(){try{return(await l.get(`${d}/products/categories`)).data}catch(e){console.log(e)}}async function k(e,t,s,o,r,a,i){try{const u=new URLSearchParams({keyword:e||"",category:t||"",byABC:s||!1,byPrice:o||!1,byPopularity:r||!1,page:a,limit:i});return(await l.get(`${d}/products?${u.toString()}`)).data}catch(u){console.log(u.message)}}async function I(e){try{return(await l.get(`${d}/products/${e}`)).data}catch(t){console.log(t.message)}}async function x(){try{return await l.get(`${d}/products/popular?limit=5`)}catch(e){console.log(e.message)}}async function C(){try{return await l.get(`${d}/products/discount`)}catch(e){console.log(e.message)}}async function q(e){return(await l.post(`${d}/subscription`,e)).data}const p="/project-js-dreamteam/assets/icon-c285a3d7.svg";function w(e){const t=e.map(({_id:s,category:o,img:r,name:a,size:i,popularity:u,price:y})=>`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${r}" alt="${a}" width="140">
  </div>
  <h2 class="filt-h-name">${a}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${o}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${i}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${u}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${y}</h2>
    <button class="filt-btn-card" data-idcards="#${s}" type="submit">
      <svg class="filt-card-icon" height="18" width="18" >
          <use href="${p}#icon-shop"></use>
        </svg>
    </button>
  </div>
</div>
`).join("");c.filtercard.innerHTML=t}const f={keyword:null},n={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",h);async function E(){try{const e=await P();e.push("Show all");const t=e.map(s=>`<option value="${s}">${s}</option>`).join("");c.categor.innerHTML+=t}catch(e){console.log(e)}}async function h(){const e=N();n.limit=e;const t=JSON.parse(localStorage.getItem("filters"));t&&(n.keyword=t.keyword,n.category=t.category,n.page=t.page,localStorage.setItem("filters",JSON.stringify(n)),S());try{const o=(await k(n.keyword,n.category,"","","",n.page,e)).results;w(o)}catch(s){console.log(s)}}E();h();c.form&&(c.form.addEventListener("input",M),c.form.addEventListener("submit",O));async function M(){const e=c.filtersInput.value;f.keyword=e,e===""&&(f.keyword=null),localStorage.setItem("keyword",JSON.stringify(f))}async function O(e){e.preventDefault();const t=c.filtersInput.value;n.keyword=t,t===""&&(n.keyword=null);const s=c.filtersCategories.value;n.category=s,s===""&&(n.category=null),s==="Show all"&&(n.category=null),localStorage.setItem("filters",JSON.stringify(n)),h()}function S(){try{const e=JSON.parse(localStorage.getItem("keyword"));c.filtersInput&&(c.filtersInput.value=e.keyword||"")}catch{return}}S();function N(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return e>=1440?9:e>=768?8:6}document.querySelector(".modal");const $=document.querySelector(".filt-btn-card");$.addEventListener("click",D);const A=new L(".gallery a",{captionsData:"alt",captionDelay:250});async function D(e){e.preventDefault();try{if(e.target.className!=="filt-btn-card")return;const t=await I(e.target.dataset.id),s=$.getAttribute("id");t.push(s);const o=w(t),r=A.create(o);localStorage.setItem("productId",s),r.show()}catch(t){console.log(t.message)}}function T(e){return`
        <div class="popular-card" data-productlist-id="${e._id}">
          <div class="popular-background">
            <img src="${e.img}" alt="${e.name}" class="popular-img">
          </div>
        
        <div class="popular-descript">
          <div class="popular-descript-text">
            <p class="popular-name">${e.name}</p>
          <div class="pop-frame">
  
          <div class="category-cont">
            <p class="popular-text">Category:
              <span class="popular-word">${e.category}</span></p>
              
              <ul class="pop-text-two-cat">
              <li class="pop-text-size-pop">

            <p class="popular-text">Size:
              <span class="popular-word">${e.size}</span></p></li>
              <li>
            <p class="popular-text">Popularity:
              <span class="popular-word">${e.popularity}</span></p></li></ul>
          </div>
  
            <div class="popularname-price">
          </div>
            <div id="${e._id}" class="popular-icon-cont">
              <svg class="popular-icon" width="20" height="20">
                <use href="${p}#icon-shop"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
    `}function B(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}x().then(e=>e.data).then(e=>{const t=B(e,5),s=document.getElementById("popularContainer");t.forEach(o=>{s.innerHTML+=T(o)})}).catch(e=>{console.error(e.message)});function F(e){return`
      <div class="product-card">
        <div class="product-background">
        
        <div class="discount-label">
        <svg class="discount-label-icon" width="60" height="60">
          <use href="${p}#icon-discount"></use>
        </svg>
        </div>
          <img src="${e.img}" alt="${e.name}" class="product-image">
        </div>
        <div class="product-details">
        <div class="details-text">

          <h2 class="product-name">${e.name}</h2>
          
          <div class="price-icon">
          <p class="product-price">$${e.price.toFixed(2)}</p>
        <div id="${e._id}" class="discount-icon-cont">
          <svg class="discount-icon" width="18" height="18">
            <use href="${p}#icon-shop"></use>
          </svg>
        </div>
        </div>

        </div>
      </div>
    `}function j(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}C().then(e=>e.data).then(e=>{const t=j(e,2),s=document.getElementById("discountContainer");t.forEach(o=>{s.innerHTML+=F(o)})}).catch(e=>{console.error(e.message)});const z=document.querySelector(".footer-form"),m=document.querySelector(".modal-backdrop"),v=document.querySelector(".modal-subscribe-container"),b=document.querySelector(".modal-unsubscription-container"),J=document.querySelectorAll(".modal-close-btn"),R=document.querySelector(".modal-container"),g=document.querySelector(".footer-btn-to-top"),U=document.querySelector(".footer-container");R.classList.add("is-hidden");const V=e=>{e.forEach(t=>{t.isIntersecting?g.style.display="block":g.style.display="none"})};g.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const H=new IntersectionObserver(V,{root:null,threshold:.5});H.observe(U);z.addEventListener("submit",W);J.forEach(e=>{e.addEventListener("click",_)});function W(e){e.preventDefault();const s={email:document.querySelector(".footer-form-email").value};q(s).then(o=>(m.classList.remove("is-hidden"),b.classList.add("is-hidden"),v.classList.remove("is-hidden"),console.log(o.data),o.json())).catch(o=>(o.response&&o.response.status===409?(m.classList.remove("is-hidden"),b.classList.remove("is-hidden"),v.classList.add("is-hidden")):console.log(o),o.message)),e.targer.reset()}function _(e){e.preventDefault(),m.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
