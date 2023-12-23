import{a as g}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const i={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories")},p="https://food-boutique.b.goit.study/api";async function b(){try{return(await g.get(`${p}/products/categories`)).data}catch(e){console.log(e)}}async function k(e,t,o,s,r,n,a){try{const d=new URLSearchParams({keyword:e||"",category:t||"",byABC:o||!1,byPrice:s||!1,byPopularity:r||!1,page:n,limit:a});return(await g.get(`${p}/products?${d.toString()}`)).data}catch(d){console.log(d.message)}}async function L(){try{return await g.get(`${p}/products/discount`)}catch(e){console.log(e.message)}}const m="/project-js-dreamteam/assets/icon-de12504e.svg";function I(e){const t=e.map(({_id:o,category:s,img:r,name:n,size:a,popularity:d,price:S})=>`<div class="filt-div-card" data-idcarts="${o}">
      <div class="filt-div-img">
  <img class="filt-img" src="${r}" alt="${n}" width="140">
  </div>
  <h2 class="filt-h-name">${n}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${s}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${a}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${d}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${S}</h2>
    <button class="filt-btn-card" type="submit">
      <svg class="filt-card-icon" height="18" width="18" >
          <use href="${m}#icon-shop"></use>
        </svg>
    </button>
  </div>
</div>
`).join("");i.filtercard.innerHTML=t}const f={keyword:null},c={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",y);async function E(){try{const e=await b();e.push("Show all");const t=e.map(o=>`<option value="${o}">${o}</option>`).join("");i.categor.innerHTML+=t}catch(e){console.log(e)}}async function y(){const e=O();c.limit=e;const t=JSON.parse(localStorage.getItem("filters"));t&&(c.keyword=t.keyword,c.category=t.category,c.page=t.page,localStorage.setItem("filters",JSON.stringify(c)),$());try{const s=(await k(c.keyword,c.category,"","","",c.page,e)).results;I(s)}catch(o){console.log(o)}}E();y();i.form&&(i.form.addEventListener("input",P),i.form.addEventListener("submit",C));async function P(){const e=i.filtersInput.value;f.keyword=e,e===""&&(f.keyword=null),localStorage.setItem("keyword",JSON.stringify(f))}async function C(e){e.preventDefault();const t=i.filtersInput.value;c.keyword=t,t===""&&(c.keyword=null);const o=i.filtersCategories.value;c.category=o,o===""&&(c.category=null),o==="Show all"&&(c.category=null),localStorage.setItem("filters",JSON.stringify(c)),y()}function $(){try{const e=JSON.parse(localStorage.getItem("keyword"));i.filtersInput&&(i.filtersInput.value=e.keyword||"")}catch{return}}$();function O(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return e>=1440?9:e>=768?8:6}function M(e){try{console.log(e);let t=JSON.parse(localStorage.getItem("cart"))||[];const o={id:e,pieces:"1"};t.push(o),localStorage.setItem("cart",JSON.stringify(t))}catch(t){console.log(t)}}async function l(e,t){const o=document.querySelector(".modal-content");o.innerHTML="";const s=await getProductById(e);o.innerHTML=q(s,t)}function q(e,t){return`
    <div class="modal-product-img">
      <img src="${e.img}" alt="${e.name}" />
    </div>
    <div class="modal-product-info">
        <h4 class="modal-product-title">${e.name}</h4>
      <div class="modal-product-characteristics">
        <div>Category: <span>${e.category}</span></div>
        <div>Size: <span>${e.size}</span></div>
        <div>Popularity: <span>${e.popularity}</span></div>
      </div>
      <p class="modal-product-description">
      ${e.desc}
      </p>
    </div>
    <div class="modal-product-price">$${e.price.toFixed(2)}</div>
    <button class="modal-product-button" data-productlist-id="${e._id}"> ${t}<svg class="modal-product-button-icon">
    <use class="modal-product-button-icon" href="./icons.svg#icon-heroicons-solid_shopping-cart"></use>
  </svg></button>
    `}const h=document.querySelector(".modal"),A=document.querySelector(".close-button");function v(){h.classList.add("show-modal"),document.body.style.overflow="hidden"}function u(){h.classList.remove("show-modal"),document.body.style.overflow="auto"}function x(e){e.target===h&&u()}A.addEventListener("click",u);window.addEventListener("click",x);document.addEventListener("keydown",function(e){e.keyCode===27&&u()});document.addEventListener("click",function(e){if(!e.target.classList.contains("modal-product-button"))return;const t=e.target.dataset.productlistId;e.target.addEventListener("click",M(t)),e.target.addEventListener("click",u())});function w(e){return new Promise((t,o)=>{const s=document.querySelectorAll(e);if(s.length>0)t(s);else{const r=new MutationObserver(()=>{const n=document.querySelectorAll(e);n.length>0&&(r.disconnect(),t(n))});r.observe(document.documentElement,{childList:!0,subtree:!0})}})}w(".modalOn").then(e=>{e.forEach(t=>{t.addEventListener("click",o=>{const s=event.currentTarget.dataset.productlistId;localStorage.getItem(s)?l(s,"Remove from"):l(s,"Add to"),v()})})}).catch(e=>{console.error(e.message)});w(".modalOndisc").then(e=>{e.forEach(t=>{t.addEventListener("click",o=>{const s=o.currentTarget.dataset.productlistId;localStorage.getItem(s)?l(s,"Remove from"):l(s,"Add to"),v()})})}).catch(e=>{console.error(e.message)});w(".modalOpopul").then(e=>{e.forEach(t=>{t.addEventListener("click",o=>{const s=o.currentTarget.dataset.productlistId;localStorage.getItem(s)?l(s,"Remove from"):l(s,"Add to"),v()})})}).catch(e=>{console.error(e.message)});function N(e){return`
      <div class="product-card">
        <div class="product-background">
        
        <div class="discount-label">
        <svg class="discount-label-icon" width="60" height="60">
          <use href="${m}#icon-discount"></use>
        </svg>
        </div>
          <img src="${e.img}" alt="${e.name}" class="product-image">
        </div>
        <div class="product-details">
        <div class="details-text">

        <div class="name-price">
          <h2 class="product-name">${e.name}</h2>
          <p class="product-price">$${e.price.toFixed(2)}</p>
        </div>
          
        <div id="${e._id}" class="discount-icon-cont inBascet">
          <svg class="discount-icon" width="18" height="18">
            <use href="${m}#icon-shop"></use>
          </svg>
        </div>

        </div>
      </div>
    `}function T(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}L().then(e=>e.data).then(e=>{const t=T(e,2),o=document.getElementById("discountContainer");t.forEach(s=>{o.innerHTML+=N(s)})}).catch(e=>{console.error(e.message)});
//# sourceMappingURL=commonHelpers.js.map
