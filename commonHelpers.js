import{a}from"./assets/vendor-a61d8330.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const l="https://food-boutique.b.goit.study/api";async function f(){try{return(await a.get(`${l}/products/categories`)).data}catch(t){console.log(t)}}async function d(t,r,o,c,e,s){const i=new URLSearchParams({q:t||!1,category:r||"",byABC:o||!1,byPrice:c||!1,byPopularity:e||!1,page:s,limit:6});return(await a.get(`${l}/products?${i.toString()}`)).data}function p(t){const r=t.map(({category:o,img:c,name:e,size:s,popularity:i,price:n})=>`<div class="filt-div-card">
      <div class="filt-div-img">
  <img class="filt-img" src="${c}" alt="${e}" width="140">
  </div>
  <h2 class="filt-h-name">${e}</h2>
  <div class="filt-div-text">
    <p class="filt-text">Category: <span class="filt-span">${o}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${s}</span></p>
    <p class="filt-text">Popularity: <span class="filt-span">${i}</span></p>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">${n}</h2>
    <button class="filt-btn-card" type="submit">
      <svg class="filt-card-icon" height="18" width="18">
        <use href="./img/icon.svg#icon-shop"></use>
      </svg>
    </button>
  </div>
</div>
`).join("");u.filtercard.innerHTML=r}g();y();async function g(){try{const t=await f();t.push("Show all");const r=t.map(o=>`<option value="${o}">${o}</option>`).join("");u.categor.innerHTML+=r}catch(t){console.log(t)}}async function y(){try{const r=(await d("","","","","",1)).results;console.log(r),p(r)}catch(t){console.log(t)}}const u={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards")};
//# sourceMappingURL=commonHelpers.js.map
