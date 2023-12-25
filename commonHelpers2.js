/* empty css                      */import{a as u}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const l={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories")},p="https://food-boutique.b.goit.study/api";async function M(){try{return(await u.get(`${p}/products/categories`)).data}catch(e){console.log(e)}}async function _(e,t,o,s,r,n,a){try{const i=new URLSearchParams({keyword:e||"",category:t||"",byABC:o||!1,byPrice:s||!1,byPopularity:r||!1,page:n,limit:a});return(await u.get(`${p}/products?${i.toString()}`)).data}catch(i){console.log(i.message)}}async function N(e){try{return(await u.get(`${p}/products/${e}`)).data}catch(t){console.log(t.message)}}async function B(){try{return await u.get(`${p}/products/popular?limit=5`)}catch(e){console.log(e.message)}}async function J(){try{return await u.get(`${p}/products/discount`)}catch(e){console.log(e.message)}}async function z(e){return(await u.post(`${p}/subscription`,e)).data}const m="/project-js-dreamteam/assets/icon-c285a3d7.svg";function A(e){const t=e.map(({_id:o,category:s,img:r,name:n,size:a,popularity:i,price:d})=>(s.includes("_")&&(s=s.replace(/_/g," ")),`<div class="filt-div-card" data-idcarts="${o}">
      <div class="filt-div-img">
  <img class="filt-img" src="${r}" alt="${n}" width="140">
  </div>
  <h2 class="filt-h-name">${n}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${s}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${a}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${i}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${d}</h2>
    <button class="filt-btn-card" data-idcards="${o}" type="submit">
      <svg class="filt-card-icon" height="18" width="18" >
          <use href="${m}#icon-shop"></use>
        </svg>
    </button>
  </div>
</div>
`)).join("");l.filtercard.innerHTML=t}const g={keyword:null},c={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",v);async function F(){try{const t=(await M()).map(o=>{let s;return o.includes("_")?s=o.replace(/_/g," "):s=o,`<option value="${o}">${s}</option>`}).join("");l.categor.innerHTML+=t}catch(e){console.log(e)}}async function v(){const e=R();c.limit=e;const t=JSON.parse(localStorage.getItem("filters"));t&&(c.keyword=t.keyword,c.category=t.category,c.page=t.page,localStorage.setItem("filters",JSON.stringify(c)),$());try{const s=(await _(c.keyword,c.category,"","","",c.page,e)).results;A(s)}catch(o){console.log(o)}}F();v();l.form&&(l.form.addEventListener("input",T),l.form.addEventListener("submit",D));async function T(){const e=l.filtersInput.value;g.keyword=e,e===""&&(g.keyword=null),localStorage.setItem("keyword",JSON.stringify(g))}async function D(e){e.preventDefault();const t=l.filtersInput.value;c.keyword=t,t===""&&(c.keyword=null);const o=l.filtersCategories.value;c.category=o,o===""&&(c.category=null),o==="Show all"&&(c.category=null),localStorage.setItem("filters",JSON.stringify(c)),v()}function $(){try{const e=JSON.parse(localStorage.getItem("keyword"));l.filtersInput&&(l.filtersInput.value=e.keyword||"")}catch{return}}$();function R(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return e>=1440?9:e>=768?8:6}function U(e){const{_id:t,name:o,category:s,size:r,popularity:n,desc:a,price:i,img:d}=e,k=document.querySelector(".shop-btn-card"),P=document.querySelector(".shop-h-name"),q=document.querySelector(".shop-span-category"),I=document.querySelector(".shop-span-size"),x=document.querySelector(".shop-span-popularity"),E=document.querySelector(".shop-text-discription"),O=document.querySelector(".shop-h-price"),S=document.querySelector(".shop-img");k.dataset.idcards=t,P.textContent=o,q.textContent=s,I.textContent=r,x.textContent=n,E.textContent=a,O.textContent=`$${i}`,S.src=d,S.alt=o}const j=document.querySelector(".filter-cards"),L=document.getElementById("id-modal-card"),V=document.querySelector(".shop-modal-close-btn"),W=document.querySelector(".shop-btn-card");j.addEventListener("click",H);async function H(e){e.preventDefault();const{target:t}=e,o=t.closest(".filt-btn-card");if(!o)return;const s=o.dataset.idcards;try{const r=await N(s);U(r),L.classList.remove("is-hidden-card")}catch(r){console.log(r)}}V.addEventListener("click",C);function C(){L.classList.add("is-hidden-card")}function G(e){const{target:t}=e,o=t.closest(".shop-btn-card");if(!o)return;const s=o.dataset.idcards;C();const r=localStorage.getItem("cart"),n=JSON.parse(r);if(n){const i=n.find(d=>d._id===s);if(i){i.quantity+=1,localStorage.setItem("cart",JSON.stringify(n));return}n.push({_id:s,quantity:1}),localStorage.setItem("cart",JSON.stringify(n));return}const a=[];a.push({_id:s,quantity:1}),localStorage.setItem("cart",JSON.stringify(a))}W.addEventListener("click",G);function K(e){return e.category.includes("_")&&(e.category=e.category.replace(/_/g," ")),`
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
                <use href="${m}#icon-shop"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
    `}function Q(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}B().then(e=>e.data).then(e=>{const t=Q(e,5),o=document.getElementById("popularContainer");t.forEach(s=>{o.innerHTML+=K(s)})}).catch(e=>{console.error(e.message)});function X(e){return`
      <div class="product-card">
        <div class="product-background">
        
        <div class="discount-label">
        <svg class="discount-label-icon" width="60" height="60">
          <use href="${m}#icon-discount"></use>
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
            <use href="${m}#icon-shop"></use>
          </svg>
        </div>
        </div>

        </div>
      </div>
    `}function Y(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}J().then(e=>e.data).then(e=>{const t=Y(e,2),o=document.getElementById("discountContainer");t.forEach(s=>{o.innerHTML+=X(s)})}).catch(e=>{console.error(e.message)});const Z=document.querySelector(".footer-form"),f=document.querySelector(".modal-backdrop"),w=document.querySelector(".modal-subscribe-container"),b=document.querySelector(".modal-unsubscription-container"),ee=document.querySelectorAll(".modal-close-btn"),te=document.querySelector(".modal-container"),h=document.querySelector(".footer-btn-to-top"),se=document.querySelector(".footer-container"),y=document.querySelector(".loader");te.classList.add("is-hidden");const oe=e=>{e.forEach(t=>{t.isIntersecting?h.style.display="block":h.style.display="none"})};h.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const re=new IntersectionObserver(oe,{root:null,threshold:.5});re.observe(se);Z.addEventListener("submit",ne);ee.forEach(e=>{e.addEventListener("click",ce)});function ne(e){e.preventDefault();const o={email:document.querySelector(".footer-form-email").value};y.classList.remove("is-hidden"),window.addEventListener("click",s=>{s.target===f&&f.classList.add("is-hidden")}),z(o).then(s=>(y.classList.add("is-hidden"),f.classList.remove("is-hidden"),b.classList.add("is-hidden"),w.classList.remove("is-hidden"),console.log(s.data),s.json())).catch(s=>(y.classList.add("is-hidden"),s.response&&s.response.status===409?(f.classList.remove("is-hidden"),b.classList.remove("is-hidden"),w.classList.add("is-hidden")):console.log(s),s.message)),e.target.reset()}function ce(e){e.preventDefault(),f.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
