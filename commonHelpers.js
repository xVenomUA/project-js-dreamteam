import{a as f}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const i={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories")},g="https://food-boutique.b.goit.study/api";async function m(){try{return(await f.get(`${g}/products/categories`)).data}catch(e){console.log(e)}}async function h(e,t,o,n,s,r,c){try{const l=new URLSearchParams({word:e||!1,category:t||"",byABC:o||!1,byPrice:n||!1,byPopularity:s||!1,page:r,limit:c});return(await f.get(`${g}/products?${l.toString()}`)).data}catch(l){console.log(l.message)}}async function y(){try{return await f.get(`${g}/products/discount`)}catch(e){console.log(e.message)}}const u="/project-js-dreamteam/assets/icon-de12504e.svg";function v(e){const t=e.map(({category:o,img:n,name:s,size:r,popularity:c,price:l})=>`<div class="filt-div-card">
      <div class="filt-div-img">
  <img class="filt-img" src="${n}" alt="${s}" width="140">
  </div>
  <h2 class="filt-h-name">${s}</h2>
  <div class="filt-div-text">
    <p class="filt-text">Category: <span class="filt-span">${o}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${r}</span></p>
    <p class="filt-text">Popularity: <span class="filt-span">${c}</span></p>
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
`).join("");i.filtercard.innerHTML=t}window.addEventListener("resize",p);async function w(){try{const e=await m();e.push("Show all");const t=e.map(o=>`<option value="${o}">${o}</option>`).join("");i.categor.innerHTML+=t}catch(e){console.log(e)}}async function p(){const e=P();try{console.log("LIMIT",e);const o=(await h("","","","","",1,e)).results;v(o)}catch(t){console.log(t)}}w();p();i.form&&(i.form.addEventListener("input",$),i.form.addEventListener("submit",b));const d={keyword:null},a={keyword:null,category:null,page:1,limit:6};async function $(){const e=i.filtersInput.value;d.keyword=e,e===""&&(d.keyword=null),localStorage.setItem("keyword",JSON.stringify(d))}async function b(){const e=i.filtersInput.value;a.keyword=e,e===""&&(a.keyword=null);const t=i.filtersCategories.value;a.category=t,t===""&&(a.category=null),t==="Show all"&&(a.category=null),localStorage.setItem("filters",JSON.stringify(a))}function S(){try{const e=JSON.parse(localStorage.getItem("keyword"));i.filtersInput&&(i.filtersInput.value=e.keyword||"")}catch{return}}S();function P(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return e>=1440?9:e>=768?8:6}function I(e){return`
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
    `}function k(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}y().then(e=>e.data).then(e=>{const t=k(e,2),o=document.getElementById("discountContainer");t.forEach(n=>{o.innerHTML+=I(n)})}).catch(e=>{console.error(e.message)});
//# sourceMappingURL=commonHelpers.js.map
