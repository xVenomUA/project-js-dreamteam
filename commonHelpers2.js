/* empty css                      */import{a as d}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}})();const i={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories")},u="https://food-boutique.b.goit.study/api";async function S(){try{return(await d.get(`${u}/products/categories`)).data}catch(e){console.log(e)}}async function k(e,t,s,r,o,c,n){try{const l=new URLSearchParams({keyword:e||"",category:t||"",byABC:s||!1,byPrice:r||!1,byPopularity:o||!1,page:c,limit:n});return(await d.get(`${u}/products?${l.toString()}`)).data}catch(l){console.log(l.message)}}async function P(e){try{return(await d.get(`${u}/products/${e}`)).data}catch(t){console.log(t.message)}}async function L(){try{return await d.get(`${u}/products/popular?limit=5`)}catch(e){console.log(e.message)}}async function x(){try{return await d.get(`${u}/products/discount`)}catch(e){console.log(e.message)}}async function I(e){return(await d.post(`${u}/subscription`,e)).data}const p="/project-js-dreamteam/assets/icon-c285a3d7.svg";function C(e){const t=e.map(({_id:s,category:r,img:o,name:c,size:n,popularity:l,price:f})=>`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${o}" alt="${c}" width="140">
  </div>
  <h2 class="filt-h-name">${c}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${r}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${n}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${l}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${f}</h2>
    <button class="filt-btn-card" data-idcards="${s}" type="submit">
      <svg class="filt-card-icon" height="18" width="18" >
          <use href="${p}#icon-shop"></use>
        </svg>
    </button>
  </div>
</div>
`).join("");i.filtercard.innerHTML=t}const m={keyword:null},a={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",v);async function q(){try{const e=await S();e.push("Show all");const t=e.map(s=>`<option value="${s}">${s}</option>`).join("");i.categor.innerHTML+=t}catch(e){console.log(e)}}async function v(){const e=O();a.limit=e;const t=JSON.parse(localStorage.getItem("filters"));t&&(a.keyword=t.keyword,a.category=t.category,a.page=t.page,localStorage.setItem("filters",JSON.stringify(a)),b());try{const r=(await k(a.keyword,a.category,"","","",a.page,e)).results;C(r)}catch(s){console.log(s)}}q();v();i.form&&(i.form.addEventListener("input",E),i.form.addEventListener("submit",M));async function E(){const e=i.filtersInput.value;m.keyword=e,e===""&&(m.keyword=null),localStorage.setItem("keyword",JSON.stringify(m))}async function M(e){e.preventDefault();const t=i.filtersInput.value;a.keyword=t,t===""&&(a.keyword=null);const s=i.filtersCategories.value;a.category=s,s===""&&(a.category=null),s==="Show all"&&(a.category=null),localStorage.setItem("filters",JSON.stringify(a)),v()}function b(){try{const e=JSON.parse(localStorage.getItem("keyword"));i.filtersInput&&(i.filtersInput.value=e.keyword||"")}catch{return}}b();function O(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return e>=1440?9:e>=768?8:6}const N=document.querySelector(".backdrop-div-card");function T(e){const{_id:t,name:s,category:r,size:o,popularity:c,desc:n,price:l,img:f}=e,w=`<div class="shop-modal-backdrop">
<div class="shop-div-card" data-idcarts="${t}">
             <button class="shop-modal-close-btn">
                <svg class="svg-close" width="20" height="20">
                    <use href="./img/icon.svg#icon-close"></use>
                </svg>
            </button>
      <div class="shop-div-img">
  <img class="shop-img" src="${f}" alt="${s}" width="140">
  </div>
  <h2 class="shop-h-name">${s}</h2>
  <div class="shop-div-text">
  <div class="shop-div-text-new">
    <p class="shop-text">Category: <span class="shop-span">${r}</span></p>
    <p class="shop-text">Size: <span class="shop-span">${o}</span></p>
    </div>  
    <div class="shop-div-text-second">
    <p class="shop-text">Popularity: <span class="shop-span">${c}</span></p>
    </div>
    
  </div>
  <p class ="shop-text-discription">${n}</p>
  <div class="shop-div-price"> 
    <h2 class="shop-h-price">$${l}</h2>
    <button class="shop-btn-card" data-idcards="#${t}" type="submit"> Add to 
      <svg class="shop-card-icon" height="18" width="18" >
          <use href="${p}#icon-shop"></use>
        </svg>
    </button>
  </div>
</div>
</div>
`;N.innerHTML=w}const z=document.querySelector(".filter-cards");z.addEventListener("click",A);async function A(e){e.preventDefault();const{target:t}=e,s=t.closest(".filt-btn-card");if(!s)return;const r=s.dataset.idcards;try{const o=await P(r);console.log(o),T(o)}catch(o){console.log(o)}}function B(e){return`
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
                <use href="${p}#icon-shop"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
    `}function D(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}L().then(e=>e.data).then(e=>{const t=D(e,5),s=document.getElementById("popularContainer");t.forEach(r=>{s.innerHTML+=B(r)})}).catch(e=>{console.error(e.message)});function F(e){return`
      <div class="product-card">
        <div class="product-background">
        
        <div class="discount-label">
        <svg class="discount-label-icon" width="60" height="60">
          <use href="${p}#icon-discount"></use>
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
            <use href="${p}#icon-shop"></use>
          </svg>
        </div>
        </div>

        </div>
      </div>
    `}function U(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}x().then(e=>e.data).then(e=>{const t=U(e,2),s=document.getElementById("discountContainer");t.forEach(r=>{s.innerHTML+=F(r)})}).catch(e=>{console.error(e.message)});const j=document.querySelector(".footer-form"),h=document.querySelector(".modal-backdrop"),y=document.querySelector(".modal-subscribe-container"),$=document.querySelector(".modal-unsubscription-container"),H=document.querySelectorAll(".modal-close-btn"),J=document.querySelector(".modal-container"),g=document.querySelector(".footer-btn-to-top"),R=document.querySelector(".footer-container");J.classList.add("is-hidden");const V=e=>{e.forEach(t=>{t.isIntersecting?g.style.display="block":g.style.display="none"})};g.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const W=new IntersectionObserver(V,{root:null,threshold:.5});W.observe(R);j.addEventListener("submit",_);H.forEach(e=>{e.addEventListener("click",G)});function _(e){e.preventDefault();const s={email:document.querySelector(".footer-form-email").value};I(s).then(r=>(h.classList.remove("is-hidden"),$.classList.add("is-hidden"),y.classList.remove("is-hidden"),console.log(r.data),r.json())).catch(r=>(r.response&&r.response.status===409?(h.classList.remove("is-hidden"),$.classList.remove("is-hidden"),y.classList.add("is-hidden")):console.log(r),r.message)),e.target.reset()}function G(e){e.preventDefault(),h.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
