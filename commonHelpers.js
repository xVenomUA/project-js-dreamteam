import{a as u}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const c={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories")},p="https://food-boutique.b.goit.study/api";async function y(){try{return(await u.get(`${p}/products/categories`)).data}catch(e){console.log(e)}}async function v(e,t,s,a,r,o,n){try{const l=new URLSearchParams({keyword:e||"",category:t||"",byABC:s||!1,byPrice:a||!1,byPopularity:r||!1,page:o,limit:n});return(await u.get(`${p}/products?${l.toString()}`)).data}catch(l){console.log(l.message)}}async function w(){try{const e=await u.get(`${p}/products/popular?limit=5`);return console.log(e),e}catch(e){console.log(e.message)}}async function $(){try{return await u.get(`${p}/products/discount`)}catch(e){console.log(e.message)}}const d="/project-js-dreamteam/assets/icon-de12504e.svg";function P(e){const t=e.map(({_id:s,category:a,img:r,name:o,size:n,popularity:l,price:m})=>`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${r}" alt="${o}" width="140">
  </div>
  <h2 class="filt-h-name">${o}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${a}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${n}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${l}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${m}</h2>
    <button class="filt-btn-card" type="submit">
      <svg class="filt-card-icon" height="18" width="18" >
          <use href="${d}#icon-shop"></use>
        </svg>
    </button>
  </div>
</div>
`).join("");c.filtercard.innerHTML=t}const f={keyword:null},i={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",g);async function S(){try{const e=await y();e.push("Show all");const t=e.map(s=>`<option value="${s}">${s}</option>`).join("");c.categor.innerHTML+=t}catch(e){console.log(e)}}async function g(){const e=C();i.limit=e;const t=JSON.parse(localStorage.getItem("filters"));t&&(i.keyword=t.keyword,i.category=t.category,i.page=t.page,localStorage.setItem("filters",JSON.stringify(i)),h());try{const a=(await v(i.keyword,i.category,"","","",i.page,e)).results;P(a)}catch(s){console.log(s)}}S();g();c.form&&(c.form.addEventListener("input",k),c.form.addEventListener("submit",b));async function k(){const e=c.filtersInput.value;f.keyword=e,e===""&&(f.keyword=null),localStorage.setItem("keyword",JSON.stringify(f))}async function b(e){e.preventDefault();const t=c.filtersInput.value;i.keyword=t,t===""&&(i.keyword=null);const s=c.filtersCategories.value;i.category=s,s===""&&(i.category=null),s==="Show all"&&(i.category=null),localStorage.setItem("filters",JSON.stringify(i)),g()}function h(){try{const e=JSON.parse(localStorage.getItem("keyword"));c.filtersInput&&(c.filtersInput.value=e.keyword||"")}catch{return}}h();function C(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return e>=1440?9:e>=768?8:6}function I(e){return`
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
                <use href="${d}#icon-shop"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
    `}function x(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}w().then(e=>e.data).then(e=>{const t=x(e,5),s=document.getElementById("popularContainer");t.forEach(a=>{s.innerHTML+=I(a)})}).catch(e=>{console.error(e.message)});function L(e){return`
      <div class="product-card">
        <div class="product-background">
        
        <div class="discount-label">
        <svg class="discount-label-icon" width="60" height="60">
          <use href="${d}#icon-discount"></use>
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
            <use href="${d}#icon-shop"></use>
          </svg>
        </div>
        </div>

        </div>
      </div>
    `}function E(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}$().then(e=>e.data).then(e=>{const t=E(e,2),s=document.getElementById("discountContainer");t.forEach(a=>{s.innerHTML+=L(a)})}).catch(e=>{console.error(e.message)});
//# sourceMappingURL=commonHelpers.js.map
