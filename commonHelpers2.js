/* empty css                      */import{a as d}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const a={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories")},u="https://food-boutique.b.goit.study/api";async function L(){try{return(await d.get(`${u}/products/categories`)).data}catch(e){console.log(e)}}async function k(e,t,s,o,i,r,n){try{const l=new URLSearchParams({keyword:e||"",category:t||"",byABC:s||!1,byPrice:o||!1,byPopularity:i||!1,page:r,limit:n});return(await d.get(`${u}/products?${l.toString()}`)).data}catch(l){console.log(l.message)}}async function P(e){try{return(await d.get(`${u}/products/${e}`)).data}catch(t){console.log(t.message)}}async function x(){try{return await d.get(`${u}/products/popular?limit=5`)}catch(e){console.log(e.message)}}async function I(){try{return await d.get(`${u}/products/discount`)}catch(e){console.log(e.message)}}async function C(e){return(await d.post(`${u}/subscription`,e)).data}const f="/project-js-dreamteam/assets/icon-c285a3d7.svg";function q(e){const t=e.map(({_id:s,category:o,img:i,name:r,size:n,popularity:l,price:h})=>`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${i}" alt="${r}" width="140">
  </div>
  <h2 class="filt-h-name">${r}</h2>
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
    <button class="filt-btn-card" data-idcards="${s}" type="submit">
      <svg class="filt-card-icon" height="18" width="18" >
          <use href="${f}#icon-shop"></use>
        </svg>
    </button>
  </div>
</div>
`).join("");a.filtercard.innerHTML=t}const m={keyword:null},c={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",y);async function E(){try{const t=(await L()).map(s=>`<option value="${s}">${s}</option>`).join("");a.categor.innerHTML+=t}catch(e){console.log(e)}}async function y(){const e=N();c.limit=e;const t=JSON.parse(localStorage.getItem("filters"));t&&(c.keyword=t.keyword,c.category=t.category,c.page=t.page,localStorage.setItem("filters",JSON.stringify(c)),w());try{const o=(await k(c.keyword,c.category,"","","",c.page,e)).results;q(o)}catch(s){console.log(s)}}E();y();a.form&&(a.form.addEventListener("input",M),a.form.addEventListener("submit",O));async function M(){const e=a.filtersInput.value;m.keyword=e,e===""&&(m.keyword=null),localStorage.setItem("keyword",JSON.stringify(m))}async function O(e){e.preventDefault();const t=a.filtersInput.value;c.keyword=t,t===""&&(c.keyword=null);const s=a.filtersCategories.value;c.category=s,s===""&&(c.category=null),s==="Show all"&&(c.category=null),localStorage.setItem("filters",JSON.stringify(c)),y()}function w(){try{const e=JSON.parse(localStorage.getItem("keyword"));a.filtersInput&&(a.filtersInput.value=e.keyword||"")}catch{return}}w();function N(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return e>=1440?9:e>=768?8:6}const T=document.querySelector(".backdrop-div-card");function z(e){const{_id:t,name:s,category:o,size:i,popularity:r,desc:n,price:l,img:h}=e,S=`<div class="shop-modal-backdrop">
    <div class="shop-div-card" data-idcarts="${t}">
        <button class="shop-modal-close-btn">
            <svg class="svg-close" width="20" height="20">
                <use href="./img/icon.svg#icon-close"></use>
            </svg>
        </button>
        <div class="shop-div-info">
        
    <div class="shop-div-img">
        <img class="shop-img" src="${h}" alt="${s}" width="140">
    </div>
    <div class="shop-div-info-text">
        <h2 class="shop-h-name">${s}</h2>
        <div class="shop-div-text-discription">
            <div class="shop-div-text-new">
                <p class="shop-text">Category: <span class="shop-span">${o}</span></p>
                <p class="shop-text">Size: <span class="shop-span">${i}</span></p>
            </div>
            <div class="shop-div-text-second">
                <p class="shop-text">Popularity: <span class="shop-span">${r}</span></p>
            </div>
        </div>
        <p class="shop-text-discription">${n}</p>
    </div>
</div>

        <div class="shop-div-price">
            <h2 class="shop-h-price">$${l}</h2>
            <button class="shop-btn-card" data-idcards="#${t}" type="submit"> Add to
                <svg class="shop-card-icon" height="18" width="18">
                    <use href="${f}#icon-shop"></use>
                </svg>
            </button>
        </div>
    </div>
</div>
`;T.innerHTML=S}const A=document.querySelector(".filter-cards");A.addEventListener("click",B);async function B(e){e.preventDefault();const{target:t}=e,s=t.closest(".filt-btn-card");if(!s)return;const o=s.dataset.idcards;try{const i=await P(o);console.log(i),z(i)}catch(i){console.log(i),np}}function D(e){return`
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
                <use href="${f}#icon-shop"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
    `}function F(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}x().then(e=>e.data).then(e=>{const t=F(e,5),s=document.getElementById("popularContainer");t.forEach(o=>{s.innerHTML+=D(o)})}).catch(e=>{console.error(e.message)});function R(e){return`
      <div class="product-card">
        <div class="product-background">
        
        <div class="discount-label">
        <svg class="discount-label-icon" width="60" height="60">
          <use href="${f}#icon-discount"></use>
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
            <use href="${f}#icon-shop"></use>
          </svg>
        </div>
        </div>

        </div>
      </div>
    `}function U(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}I().then(e=>e.data).then(e=>{const t=U(e,2),s=document.getElementById("discountContainer");t.forEach(o=>{s.innerHTML+=R(o)})}).catch(e=>{console.error(e.message)});const j=document.querySelector(".footer-form"),p=document.querySelector(".modal-backdrop"),$=document.querySelector(".modal-subscribe-container"),b=document.querySelector(".modal-unsubscription-container"),H=document.querySelectorAll(".modal-close-btn"),J=document.querySelector(".modal-container"),v=document.querySelector(".footer-btn-to-top"),V=document.querySelector(".footer-container"),g=document.querySelector(".loader");J.classList.add("is-hidden");const W=e=>{e.forEach(t=>{t.isIntersecting?v.style.display="block":v.style.display="none"})};v.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const _=new IntersectionObserver(W,{root:null,threshold:.5});_.observe(V);j.addEventListener("submit",G);H.forEach(e=>{e.addEventListener("click",K)});function G(e){e.preventDefault();const s={email:document.querySelector(".footer-form-email").value};g.classList.remove("is-hidden"),window.addEventListener("click",o=>{o.target===p&&p.classList.add("is-hidden")}),C(s).then(o=>(g.classList.add("is-hidden"),p.classList.remove("is-hidden"),b.classList.add("is-hidden"),$.classList.remove("is-hidden"),console.log(o.data),o.json())).catch(o=>(g.classList.add("is-hidden"),o.response&&o.response.status===409?(p.classList.remove("is-hidden"),b.classList.remove("is-hidden"),$.classList.add("is-hidden")):console.log(o),o.message)),e.target.reset()}function K(e){e.preventDefault(),p.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
