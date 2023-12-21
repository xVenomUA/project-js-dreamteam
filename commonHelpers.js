import{a as n}from"./assets/vendor-a61d8330.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const l="https://food-boutique.b.goit.study/api";async function f(){try{return(await n.get(`${l}/products/categories`)).data}catch(t){console.log(t)}}async function d(t,r,i,c,e,s){try{const o=new URLSearchParams({word:t||!1,category:r||"",byABC:i||!1,byPrice:c||!1,byPopularity:e||!1,page:s,limit:6});return(await n.get(`${l}/products?${o.toString()}`)).data}catch(o){console.log(o.message)}}const p="/project-js-dreamteam/assets/icon-2165bba5.svg";function g(t){const r=t.map(({category:i,img:c,name:e,size:s,popularity:o,price:a})=>`<div class="filt-div-card">
      <div class="filt-div-img">
  <img class="filt-img" src="${c}" alt="${e}" width="140">
  </div>
  <h2 class="filt-h-name">${e}</h2>
  <div class="filt-div-text">
    <p class="filt-text">Category: <span class="filt-span">${i}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${s}</span></p>
    <p class="filt-text">Popularity: <span class="filt-span">${o}</span></p>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">${a}</h2>
    <button class="filt-btn-card" type="submit">
      <svg class="filt-card-icon" height="18" width="18" >
          <use href="${p}#icon-shop"></use>
        </svg>
    </button>
  </div>
</div>
`).join("");u.filtercard.innerHTML=r}async function y(){try{const t=await f();t.push("Show all");const r=t.map(i=>`<option value="${i}">${i}</option>`).join("");u.categor.innerHTML+=r}catch(t){console.log(t)}}async function h(){try{const r=(await d("","","","","",1)).results;console.log(r),g(r)}catch(t){console.log(t)}}y();h();const u={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards")};
//# sourceMappingURL=commonHelpers.js.map
