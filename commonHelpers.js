import{a as h}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const c={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories")},w="https://food-boutique.b.goit.study/api";async function b(){try{return(await h.get(`${w}/products/categories`)).data}catch(e){console.log(e)}}async function L(e,t,o,r,s,n,a){try{const d=new URLSearchParams({keyword:e||"",category:t||"",byABC:o||!1,byPrice:r||!1,byPopularity:s||!1,page:n,limit:a});return(await h.get(`${w}/products?${d.toString()}`)).data}catch(d){console.log(d.message)}}const k="/project-js-dreamteam/assets/icon-de12504e.svg";function $(e){const t=e.map(({_id:o,category:r,img:s,name:n,size:a,popularity:d,price:v})=>`<div class="filt-div-card" data-idcarts="${o}">
      <div class="filt-div-img">
  <img class="filt-img" src="${s}" alt="${n}" width="140">
  </div>
  <h2 class="filt-h-name">${n}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${r}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${a}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${d}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${v}</h2>
    <button class="filt-btn-card" type="submit">
      <svg class="filt-card-icon" height="18" width="18" >
          <use href="${k}#icon-shop"></use>
        </svg>
    </button>
  </div>
</div>
`).join("");c.filtercard.innerHTML=t}const f={keyword:null},i={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",m);async function I(){try{const e=await b();e.push("Show all");const t=e.map(o=>`<option value="${o}">${o}</option>`).join("");c.categor.innerHTML+=t}catch(e){console.log(e)}}async function m(){const e=O();i.limit=e;const t=JSON.parse(localStorage.getItem("filters"));t&&(i.keyword=t.keyword,i.category=t.category,i.page=t.page,localStorage.setItem("filters",JSON.stringify(i)),S());try{const r=(await L(i.keyword,i.category,"","","",i.page,e)).results;$(r)}catch(o){console.log(o)}}I();m();c.form&&(c.form.addEventListener("input",E),c.form.addEventListener("submit",C));async function E(){const e=c.filtersInput.value;f.keyword=e,e===""&&(f.keyword=null),localStorage.setItem("keyword",JSON.stringify(f))}async function C(e){e.preventDefault();const t=c.filtersInput.value;i.keyword=t,t===""&&(i.keyword=null);const o=c.filtersCategories.value;i.category=o,o===""&&(i.category=null),o==="Show all"&&(i.category=null),localStorage.setItem("filters",JSON.stringify(i)),m()}function S(){try{const e=JSON.parse(localStorage.getItem("keyword"));c.filtersInput&&(c.filtersInput.value=e.keyword||"")}catch{return}}S();function O(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return e>=1440?9:e>=768?8:6}function P(e){try{console.log(e);let t=JSON.parse(localStorage.getItem("cart"))||[];const o={id:e,pieces:"1"};t.push(o),localStorage.setItem("cart",JSON.stringify(t))}catch(t){console.log(t)}}async function l(e,t){const o=document.querySelector(".modal-content");o.innerHTML="";const r=await getProductById(e);o.innerHTML=q(r,t)}function q(e,t){return`
    <div class="modal-product-img">
      <img src="${e.img}" alt="${e.name}" />
    </div>
    <div class="modal-product-info">
        <h4 class="modal-product-title">${e.name}</h4>
      <div class="modal-product-characteristics">
        <div>Category: <span>${e.category}</span></div>
        <div>Size: <span>${e.size}</span></div>
        <div>Popularity: <span>${e.popularity}</span></div>
      </div>
      <p class="modal-product-description">
      ${e.desc}
      </p>
    </div>
    <div class="modal-product-price">$${e.price.toFixed(2)}</div>
    <button class="modal-product-button" data-productlist-id="${e._id}"> ${t}<svg class="modal-product-button-icon">
    <use class="modal-product-button-icon" href="./icons.svg#icon-heroicons-solid_shopping-cart"></use>
  </svg></button>
    `}const g=document.querySelector(".modal"),A=document.querySelector(".close-button");function p(){g.classList.add("show-modal"),document.body.style.overflow="hidden"}function u(){g.classList.remove("show-modal"),document.body.style.overflow="auto"}function M(e){e.target===g&&u()}A.addEventListener("click",u);window.addEventListener("click",M);document.addEventListener("keydown",function(e){e.keyCode===27&&u()});document.addEventListener("click",function(e){if(!e.target.classList.contains("modal-product-button"))return;const t=e.target.dataset.productlistId;e.target.addEventListener("click",P(t)),e.target.addEventListener("click",u())});function y(e){return new Promise((t,o)=>{const r=document.querySelectorAll(e);if(r.length>0)t(r);else{const s=new MutationObserver(()=>{const n=document.querySelectorAll(e);n.length>0&&(s.disconnect(),t(n))});s.observe(document.documentElement,{childList:!0,subtree:!0})}})}y(".modalOn").then(e=>{e.forEach(t=>{t.addEventListener("click",o=>{const r=event.currentTarget.dataset.productlistId;localStorage.getItem(r)?l(r,"Remove from"):l(r,"Add to"),p()})})}).catch(e=>{console.error(e.message)});y(".modalOndisc").then(e=>{e.forEach(t=>{t.addEventListener("click",o=>{const r=o.currentTarget.dataset.productlistId;localStorage.getItem(r)?l(r,"Remove from"):l(r,"Add to"),p()})})}).catch(e=>{console.error(e.message)});y(".modalOpopul").then(e=>{e.forEach(t=>{t.addEventListener("click",o=>{const r=o.currentTarget.dataset.productlistId;localStorage.getItem(r)?l(r,"Remove from"):l(r,"Add to"),p()})})}).catch(e=>{console.error(e.message)});
//# sourceMappingURL=commonHelpers.js.map
