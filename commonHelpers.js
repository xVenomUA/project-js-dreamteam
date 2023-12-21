import{a as n}from"./assets/vendor-a61d8330.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const a="https://food-boutique.b.goit.study/api";async function f(r,s,c,o,e,t){const i=new URLSearchParams({q:r||!1,category:s||"",byABC:c||!1,byPrice:o||!1,byPopularity:e||!1,page:t,limit:6});return(await n.get(`${a}/products?${i.toString()}`)).data}function u(r){const s=r.map(({category:c,img:o,name:e,size:t,popularity:i,price:l})=>`<div class="filt-div-card">
      <div class="filt-div-img">
  <img class="filt-img" src="${o}" alt="${e}" width="140">
  </div>
  <h2 class="filt-h-name">${e}</h2>
  <div class="filt-div-text">
    <p class="filt-text">Category: <span class="filt-span">${c}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${t}</span></p>
    <p class="filt-text">Popularity: <span class="filt-span">${i}</span></p>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">${l}</h2>
    <button class="filt-btn-card" type="submit">
      <svg class="filt-card-icon" height="18" width="18">
        <use href="./img/icon.svg#icon-shop"></use>
      </svg>
    </button>
  </div>
</div>
`).join("");p.filtercard.innerHTML=s}async function d(){try{const s=(await f("","","","","",1)).results;console.log(s),u(s)}catch(r){console.log(r)}}d();const p={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards")};
//# sourceMappingURL=commonHelpers.js.map
