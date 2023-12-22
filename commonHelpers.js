import{a as f}from"./assets/vendor-a61d8330.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const i={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories")},d="https://food-boutique.b.goit.study/api";async function g(){try{return(await f.get(`${d}/products/categories`)).data}catch(e){console.log(e)}}async function y(e,r,s,l,t,o,n){try{const a=new URLSearchParams({word:e||!1,category:r||"",byABC:s||!1,byPrice:l||!1,byPopularity:t||!1,page:o,limit:n});return(await f.get(`${d}/products?${a.toString()}`)).data}catch(a){console.log(a.message)}}const m="/project-js-dreamteam/assets/icon-de12504e.svg";function h(e){const r=e.map(({category:s,img:l,name:t,size:o,popularity:n,price:a})=>`<div class="filt-div-card">
      <div class="filt-div-img">
  <img class="filt-img" src="${l}" alt="${t}" width="140">
  </div>
  <h2 class="filt-h-name">${t}</h2>
  <div class="filt-div-text">
    <p class="filt-text">Category: <span class="filt-span">${s}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${o}</span></p>
    <p class="filt-text">Popularity: <span class="filt-span">${n}</span></p>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">${a}</h2>
    <button class="filt-btn-card" type="submit">
      <svg class="filt-card-icon" height="18" width="18" >
          <use href="${m}#icon-shop"></use>
        </svg>
    </button>
  </div>
</div>
`).join("");i.filtercard.innerHTML=r}window.addEventListener("resize",p);async function v(){try{const e=await g();e.push("Show all");const r=e.map(s=>`<option value="${s}">${s}</option>`).join("");i.categor.innerHTML+=r}catch(e){console.log(e)}}async function p(){const e=I();try{console.log("LIMIT",e);const s=(await y("","","","","",1,e)).results;h(s)}catch(r){console.log(r)}}v();p();i.form&&(i.form.addEventListener("input",w),i.form.addEventListener("submit",S));const u={keyword:null},c={keyword:null,category:null,page:1,limit:6};async function w(){const e=i.filtersInput.value;u.keyword=e,e===""&&(u.keyword=null),localStorage.setItem("keyword",JSON.stringify(u))}async function S(){const e=i.filtersInput.value;c.keyword=e,e===""&&(c.keyword=null);const r=i.filtersCategories.value;c.category=r,r===""&&(c.category=null),r==="Show all"&&(c.category=null),localStorage.setItem("filters",JSON.stringify(c))}function b(){try{const e=JSON.parse(localStorage.getItem("keyword"));i.filtersInput&&(i.filtersInput.value=e.keyword||"")}catch{return}}b();function I(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return e>=1440?9:e>=768?8:6}
//# sourceMappingURL=commonHelpers.js.map
