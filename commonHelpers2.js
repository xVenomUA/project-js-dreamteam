/* empty css                      */import{a as d}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const c={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories")},p="https://food-boutique.b.goit.study/api";async function $(){try{return(await d.get(`${p}/products/categories`)).data}catch(e){console.log(e)}}async function b(e,t,s,o,r,i,n){try{const l=new URLSearchParams({keyword:e||"",category:t||"",byABC:s||!1,byPrice:o||!1,byPopularity:r||!1,page:i,limit:n});return(await d.get(`${p}/products?${l.toString()}`)).data}catch(l){console.log(l.message)}}async function S(){try{return await d.get(`${p}/products/popular?limit=5`)}catch(e){console.log(e.message)}}async function P(){try{return await d.get(`${p}/products/discount`)}catch(e){console.log(e.message)}}const u="/project-js-dreamteam/assets/icon-de12504e.svg";function L(e){const t=e.map(({_id:s,category:o,img:r,name:i,size:n,popularity:l,price:h})=>`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${r}" alt="${i}" width="140">
  </div>
  <h2 class="filt-h-name">${i}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${o}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${n}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${l}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${h}</h2>
    <button class="filt-btn-card" type="submit">
      <svg class="filt-card-icon" height="18" width="18" >
          <use href="${u}#icon-shop"></use>
        </svg>
    </button>
  </div>
</div>
`).join("");c.filtercard.innerHTML=t}const f={keyword:null},a={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",g);async function k(){try{const e=await $();e.push("Show all");const t=e.map(s=>`<option value="${s}">${s}</option>`).join("");c.categor.innerHTML+=t}catch(e){console.log(e)}}async function g(){const e=x();a.limit=e;const t=JSON.parse(localStorage.getItem("filters"));t&&(a.keyword=t.keyword,a.category=t.category,a.page=t.page,localStorage.setItem("filters",JSON.stringify(a)),w());try{const o=(await b(a.keyword,a.category,"","","",a.page,e)).results;L(o)}catch(s){console.log(s)}}k();g();c.form&&(c.form.addEventListener("input",C),c.form.addEventListener("submit",I));async function C(){const e=c.filtersInput.value;f.keyword=e,e===""&&(f.keyword=null),localStorage.setItem("keyword",JSON.stringify(f))}async function I(e){e.preventDefault();const t=c.filtersInput.value;a.keyword=t,t===""&&(a.keyword=null);const s=c.filtersCategories.value;a.category=s,s===""&&(a.category=null),s==="Show all"&&(a.category=null),localStorage.setItem("filters",JSON.stringify(a)),g()}function w(){try{const e=JSON.parse(localStorage.getItem("keyword"));c.filtersInput&&(c.filtersInput.value=e.keyword||"")}catch{return}}w();function x(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return e>=1440?9:e>=768?8:6}function E(e){return`
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
                <use href="${u}#icon-shop"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
    `}function q(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}S().then(e=>e.data).then(e=>{const t=q(e,5),s=document.getElementById("popularContainer");t.forEach(o=>{s.innerHTML+=E(o)})}).catch(e=>{console.error(e.message)});function M(e){return`
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

          <h2 class="product-name">${e.name}</h2>
          
          <div class="price-icon">
          <p class="product-price">$${e.price.toFixed(2)}</p>
        <div id="${e._id}" class="discount-icon-cont">
          <svg class="discount-icon" width="18" height="18">
            <use href="${u}#icon-shop"></use>
          </svg>
        </div>
        </div>

        </div>
      </div>
    `}function O(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}P().then(e=>e.data).then(e=>{const t=O(e,2),s=document.getElementById("discountContainer");t.forEach(o=>{s.innerHTML+=M(o)})}).catch(e=>{console.error(e.message)});const N=document.querySelector(".footer-form"),m=document.querySelector(".modal-backdrop"),y=document.querySelector(".modal-subscribe-container"),v=document.querySelector(".modal-unsubscription-container"),A=document.querySelectorAll(".modal-close-btn");N.addEventListener("submit",B);A.forEach(e=>{e.addEventListener("click",F)});function B(e){e.preventDefault();const s={email:document.querySelector(".footer-form-email").value};d.post("https://food-boutique.b.goit.study/api/subscription",s).then(o=>(m.classList.remove("is-hidden"),v.classList.add("is-hidden"),y.classList.remove("is-hidden"),console.log(o.data),o.json())).catch(o=>(o.response&&o.response.status===409?(m.classList.remove("is-hidden"),v.classList.remove("is-hidden"),y.classList.add("is-hidden")):console.log(o),o.message)),e.targer.reset()}function F(e){e.preventDefault(),m.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
