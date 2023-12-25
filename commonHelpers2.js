/* empty css                      */import{a as u}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const a={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories")},p="https://food-boutique.b.goit.study/api";async function M(){try{return(await u.get(`${p}/products/categories`)).data}catch(e){console.log(e)}}async function N(e,t,o,s,r,n,i){try{const l=new URLSearchParams({keyword:e||"",category:t||"",byABC:o||!1,byPrice:s||!1,byPopularity:r||!1,page:n,limit:i});return(await u.get(`${p}/products?${l.toString()}`)).data}catch(l){console.log(l.message)}}async function _(e){try{return(await u.get(`${p}/products/${e}`)).data}catch(t){console.log(t.message)}}async function B(){try{return await u.get(`${p}/products/popular?limit=5`)}catch(e){console.log(e.message)}}async function T(){try{return await u.get(`${p}/products/discount`)}catch(e){console.log(e.message)}}async function J(e){return(await u.post(`${p}/subscription`,e)).data}const m="/project-js-dreamteam/assets/icon-c285a3d7.svg";function z(e){const t=e.map(({_id:o,category:s,img:r,name:n,size:i,popularity:l,price:d})=>(s.includes("_")&&(s=s.replace(/_/g," ")),`<div class="filt-div-card" data-idcarts="${o}">
      <div class="filt-div-img">
  <img class="filt-img" src="${r}" alt="${n}" width="140">
  </div>
  <h2 class="filt-h-name">${n}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${s}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${i}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${l}</span></p>
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
`)).join("");a.filtercard.innerHTML=t,a.filtercard.innerHTML===""&&(a.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}const g={keyword:null},c={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",v);async function A(){try{const t=(await M()).map(s=>{let r;return s.includes("_")?r=s.replace(/_/g," "):r=s,`<option value="${s}">${r}</option>`}).join("");a.categor.innerHTML+=t;const o=document.createElement("option");o.value="Show all",o.textContent="Show all",a.categor.prepend(o)}catch(e){console.log(e)}}async function v(){const e=D();c.limit=e;const t=JSON.parse(localStorage.getItem("filters"));t&&(c.keyword=t.keyword,c.category=t.category,c.page=t.page,localStorage.setItem("filters",JSON.stringify(c)),$());try{const s=(await N(c.keyword,c.category,"","","",c.page,e)).results;z(s)}catch(o){console.log(o)}}A();v();a.form&&(a.form.addEventListener("input",F),a.form.addEventListener("submit",j));async function F(){const e=a.filtersInput.value;g.keyword=e,e===""&&(g.keyword=null),localStorage.setItem("keyword",JSON.stringify(g))}async function j(e){e.preventDefault();const t=a.filtersInput.value;c.keyword=t,t===""&&(c.keyword=null);const o=a.filtersCategories.value;c.category=o,o===""&&(c.category=null),o==="Show all"&&(c.category=null),localStorage.setItem("filters",JSON.stringify(c)),v(),e.target.reset()}function $(){try{const e=JSON.parse(localStorage.getItem("keyword"));a.filtersInput&&(a.filtersInput.value=e.keyword||"")}catch{return}}$();function D(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return e>=1440?9:e>=768?8:6}function H(e){const{_id:t,name:o,category:s,size:r,popularity:n,desc:i,price:l,img:d}=e,k=document.querySelector(".shop-btn-card"),P=document.querySelector(".shop-h-name"),q=document.querySelector(".shop-span-category"),I=document.querySelector(".shop-span-size"),x=document.querySelector(".shop-span-popularity"),E=document.querySelector(".shop-text-discription"),O=document.querySelector(".shop-h-price"),S=document.querySelector(".shop-img");k.dataset.idcards=t,P.textContent=o,q.textContent=s,I.textContent=r,x.textContent=n,E.textContent=i,O.textContent=`$${l}`,S.src=d,S.alt=o}const R=document.querySelector(".filter-cards"),L=document.getElementById("id-modal-card"),U=document.querySelector(".shop-modal-close-btn"),V=document.querySelector(".shop-btn-card");R.addEventListener("click",W);async function W(e){e.preventDefault();const{target:t}=e,o=t.closest(".filt-div-card");if(!o||t.closest(".filt-btn-card"))return;const r=o.dataset.idcarts;try{const n=await _(r);H(n),L.classList.remove("is-hidden-card")}catch(n){console.log(n)}}U.addEventListener("click",C);function C(){L.classList.add("is-hidden-card")}function G(e){const{target:t}=e,o=t.closest(".shop-btn-card");if(!o)return;const s=o.dataset.idcards;C();const r=localStorage.getItem("cart"),n=JSON.parse(r);if(n){const l=n.find(d=>d._id===s);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(n));return}n.push({_id:s,quantity:1}),localStorage.setItem("cart",JSON.stringify(n));return}const i=[];i.push({_id:s,quantity:1}),localStorage.setItem("cart",JSON.stringify(i))}V.addEventListener("click",G);function K(e){return e.category.includes("_")&&(e.category=e.category.replace(/_/g," ")),`
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
    `}function Y(e,t){return e.sort(()=>.5-Math.random()).slice(0,t)}T().then(e=>e.data).then(e=>{const t=Y(e,2),o=document.getElementById("discountContainer");t.forEach(s=>{o.innerHTML+=X(s)})}).catch(e=>{console.error(e.message)});const Z=document.querySelector(".footer-form"),f=document.querySelector(".modal-backdrop"),w=document.querySelector(".modal-subscribe-container"),b=document.querySelector(".modal-unsubscription-container"),ee=document.querySelectorAll(".modal-close-btn"),te=document.querySelector(".modal-container"),h=document.querySelector(".footer-btn-to-top"),se=document.querySelector(".footer-container"),y=document.querySelector(".loader");te.classList.add("is-hidden");const oe=e=>{e.forEach(t=>{t.isIntersecting?h.style.display="block":h.style.display="none"})};h.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const re=new IntersectionObserver(oe,{root:null,threshold:.5});re.observe(se);Z.addEventListener("submit",ne);ee.forEach(e=>{e.addEventListener("click",ce)});function ne(e){e.preventDefault();const o={email:document.querySelector(".footer-form-email").value};y.classList.remove("is-hidden"),window.addEventListener("click",s=>{s.target===f&&f.classList.add("is-hidden")}),J(o).then(s=>(y.classList.add("is-hidden"),f.classList.remove("is-hidden"),b.classList.add("is-hidden"),w.classList.remove("is-hidden"),console.log(s.data),s.json())).catch(s=>(y.classList.add("is-hidden"),s.response&&s.response.status===409?(f.classList.remove("is-hidden"),b.classList.remove("is-hidden"),w.classList.add("is-hidden")):console.log(s),s.message)),e.target.reset()}function ce(e){e.preventDefault(),f.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
