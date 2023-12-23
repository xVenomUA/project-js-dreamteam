import{a as f}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const c={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories")},g="https://food-boutique.b.goit.study/api";async function h(){try{return(await f.get(`${g}/products/categories`)).data}catch(e){console.log(e)}}async function v(e,t,r,n,s,o,a){try{const l=new URLSearchParams({keyword:e||"",category:t||"",byABC:r||!1,byPrice:n||!1,byPopularity:s||!1,page:o,limit:a});return(await f.get(`${g}/products?${l.toString()}`)).data}catch(l){console.log(l.message)}}async function w(){try{return await f.get(`${g}/products/discount`)}catch(e){console.log(e.message)}}const u="/project-js-dreamteam/assets/icon-de12504e.svg";function S(e){console.log(e);const t=e.map(({_id:r,category:n,img:s,name:o,size:a,popularity:l,price:m})=>`<div class="filt-div-card" data-idcarts="${r}">
      <div class="filt-div-img">
  <img class="filt-img" src="${s}" alt="${o}" width="140">
  </div>
  <h2 class="filt-h-name">${o}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${n}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${a}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${l}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">${m}</h2>
    <button class="filt-btn-card" type="submit">
      <svg class="filt-card-icon" height="18" width="18" >
          <use href="${u}#icon-shop"></use>
        </svg>
    </button>
  </div>
</div>
`).join("");c.filtercard.innerHTML=t}const d={keyword:null},i={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",p);async function $(){try{const e=await h();e.push("Show all");const t=e.map(r=>`<option value="${r}">${r}</option>`).join("");c.categor.innerHTML+=t}catch(e){console.log(e)}}async function p(){const e=P();i.limit=e;const t=JSON.parse(localStorage.getItem("filters"));t&&(i.keyword=t.keyword,i.category=t.category,i.page=t.page,localStorage.setItem("filters",JSON.stringify(i)),y());try{const n=(await v(i.keyword,i.category,"","","",i.page,e)).results;S(n)}catch(r){console.log(r)}}$();p();c.form&&(c.form.addEventListener("input",k),c.form.addEventListener("submit",b));async function k(){const e=c.filtersInput.value;d.keyword=e,e===""&&(d.keyword=null),localStorage.setItem("keyword",JSON.stringify(d))}async function b(e){e.preventDefault();const t=c.filtersInput.value;i.keyword=t,t===""&&(i.keyword=null);const r=c.filtersCategories.value;i.category=r,r===""&&(i.category=null),r==="Show all"&&(i.category=null),localStorage.setItem("filters",JSON.stringify(i)),p()}function y(){try{const e=JSON.parse(localStorage.getItem("keyword"));c.filtersInput&&(c.filtersInput.value=e.keyword||"")}catch{return}}y();function P(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return e>=1440?9:e>=768?8:6}function I(e){return`
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
    `}function L(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}w().then(e=>e.data).then(e=>{const t=L(e,2),r=document.getElementById("discountContainer");t.forEach(n=>{r.innerHTML+=I(n)})}).catch(e=>{console.error(e.message)});
//# sourceMappingURL=commonHelpers.js.map
