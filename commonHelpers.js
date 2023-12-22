import{a as f}from"./assets/vendor-a61d8330.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const o={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories")},d="https://food-boutique.b.goit.study/api";async function p(){try{return(await f.get(`${d}/products/categories`)).data}catch(e){console.log(e)}}async function g(e,r,l,n,t,s){try{const i=new URLSearchParams({word:e||!1,category:r||"",byABC:l||!1,byPrice:n||!1,byPopularity:t||!1,page:s,limit:6});return(await f.get(`${d}/products?${i.toString()}`)).data}catch(i){console.log(i.message)}}const y="/project-js-dreamteam/assets/icon-de12504e.svg";function m(e){const r=e.map(({category:l,img:n,name:t,size:s,popularity:i,price:u})=>`<div class="filt-div-card">
      <div class="filt-div-img">
  <img class="filt-img" src="${n}" alt="${t}" width="140">
  </div>
  <h2 class="filt-h-name">${t}</h2>
  <div class="filt-div-text">
    <p class="filt-text">Category: <span class="filt-span">${l}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${s}</span></p>
    <p class="filt-text">Popularity: <span class="filt-span">${i}</span></p>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">${u}</h2>
    <button class="filt-btn-card" type="submit">
      <svg class="filt-card-icon" height="18" width="18" >
          <use href="${y}#icon-shop"></use>
        </svg>
    </button>
  </div>
</div>
`).join("");o.filtercard.innerHTML=r}async function h(){try{const e=await p();e.push("Show all");const r=e.map(l=>`<option value="${l}">${l}</option>`).join("");o.categor.innerHTML+=r}catch(e){console.log(e)}}async function v(){try{const r=(await g("","","","","",1)).results;m(r)}catch(e){console.log(e)}}h();v();o.form&&(o.form.addEventListener("input",w),o.form.addEventListener("submit",S));const c={keyword:null},a={keyword:null,category:null,page:1,limit:6};async function w(){const e=o.filtersInput.value;c.keyword=e,e===""&&(c.keyword=null),localStorage.setItem("keyword",JSON.stringify(c))}async function S(){const e=o.filtersInput.value;a.keyword=e,e===""&&(a.keyword=null);const r=o.filtersCategories.value;a.category=r,r===""&&(a.category=null),r==="Show all"&&(a.category=null),localStorage.setItem("filters",JSON.stringify(a))}function b(){const e=JSON.parse(localStorage.getItem("keyword"));o.filtersInput&&(o.filtersInput.value=e.keyword||"")}b();
//# sourceMappingURL=commonHelpers.js.map
