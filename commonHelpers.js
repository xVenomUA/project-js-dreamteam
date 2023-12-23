import{a as f}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const c={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories")},g="https://food-boutique.b.goit.study/api";async function y(){try{return(await f.get(`${g}/products/categories`)).data}catch(e){console.log(e)}}async function h(e,t,o,n,s,r,a){try{const l=new URLSearchParams({keyword:e||"",category:t||"",byABC:o||!1,byPrice:n||!1,byPopularity:s||!1,page:r,limit:a});return(await f.get(`${g}/products?${l.toString()}`)).data}catch(l){console.log(l.message)}}async function v(){try{return await f.get(`${g}/products/discount`)}catch(e){console.log(e.message)}}const u="/project-js-dreamteam/assets/icon-de12504e.svg";function w(e){const t=e.map(({category:o,img:n,name:s,size:r,popularity:a,price:l})=>`<div class="filt-div-card">
      <div class="filt-div-img">
  <img class="filt-img" src="${n}" alt="${s}" width="140">
  </div>
  <h2 class="filt-h-name">${s}</h2>
  <div class="filt-div-text">
    <p class="filt-text">Category: <span class="filt-span">${o}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${r}</span></p>
    <p class="filt-text">Popularity: <span class="filt-span">${a}</span></p>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">${l}</h2>
    <button class="filt-btn-card" type="submit">
      <svg class="filt-card-icon" height="18" width="18" >
          <use href="${u}#icon-shop"></use>
        </svg>
    </button>
  </div>
</div>
`).join("");c.filtercard.innerHTML=t}const d={keyword:null},i={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",p);async function S(){try{const e=await y();e.push("Show all");const t=e.map(o=>`<option value="${o}">${o}</option>`).join("");c.categor.innerHTML+=t}catch(e){console.log(e)}}async function p(){const e=b();i.limit=e;const t=JSON.parse(localStorage.getItem("filters"));t&&(i.keyword=t.keyword,i.category=t.category,i.page=t.page,localStorage.setItem("filters",JSON.stringify(i)),m());try{const n=(await h(i.keyword,i.category,"","","",i.page,e)).results;w(n)}catch(o){console.log(o)}}S();p();c.form&&(c.form.addEventListener("input",$),c.form.addEventListener("submit",k));async function $(){const e=c.filtersInput.value;d.keyword=e,e===""&&(d.keyword=null),localStorage.setItem("keyword",JSON.stringify(d))}async function k(){const e=c.filtersInput.value;i.keyword=e,e===""&&(i.keyword=null);const t=c.filtersCategories.value;i.category=t,t===""&&(i.category=null),t==="Show all"&&(i.category=null),localStorage.setItem("filters",JSON.stringify(i))}function m(){try{const e=JSON.parse(localStorage.getItem("keyword"));c.filtersInput&&(c.filtersInput.value=e.keyword||"")}catch{return}}m();function b(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return e>=1440?9:e>=768?8:6}function P(e){return`
      <div class="product-card">
        <div class="product-background">
        
        <div class="discount-label">
        <svg class="discount-label-icon" width="60" height="60">
          <use href="${u}#icon-discount"></use>
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
            <use href="${u}#icon-shop"></use>
          </svg>
        </div>

        </div>
      </div>
    `}function I(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}v().then(e=>e.data).then(e=>{const t=I(e,2),o=document.getElementById("discountContainer");t.forEach(n=>{o.innerHTML+=P(n)})}).catch(e=>{console.error(e.message)});
//# sourceMappingURL=commonHelpers.js.map
