/* empty css                      */import{a as u}from"./assets/vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const a={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards")},p="https://food-boutique.b.goit.study/api";async function N(){try{return(await u.get(`${p}/products/categories`)).data}catch(t){console.log(t)}}async function M(t,e,s,o,r,n,c){try{const l=new URLSearchParams({keyword:t||"",category:e||"",byABC:s||!1,byPrice:o||!1,byPopularity:r||!1,page:n,limit:c});return(await u.get(`${p}/products?${l.toString()}`)).data}catch(l){console.log(l.message)}}async function _(t){try{return(await u.get(`${p}/products/${t}`)).data}catch(e){console.log(e.message)}}async function J(){try{return await u.get(`${p}/products/popular?limit=5`)}catch(t){console.log(t.message)}}async function B(){try{return await u.get(`${p}/products/discount`)}catch(t){console.log(t.message)}}async function A(t){return(await u.post(`${p}/subscription`,t)).data}const m="/project-js-dreamteam/assets/icon-dcb8169d.svg";function T(t){const e=t.map(({_id:s,category:o,img:r,name:n,size:c,popularity:l,price:d})=>{o.includes("_")&&(o=o.replace(/_/g," "));let g="shop";const y=JSON.parse(localStorage.getItem("cart"));return y&&y.find(h=>h._id===s)&&(g="check"),`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${r}" alt="${n}" width="140">
  </div>
  <h2 class="filt-h-name">${n}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${o}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${c}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${l}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${d}</h2>
    <button class="filt-btn-card" data-idcards="${s}" type="submit" >
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${m}#icon-${g}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");a.filtercard.innerHTML=e,a.filtercard.innerHTML===""&&(a.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}function z(t){const{_id:e,name:s,category:o,size:r,popularity:n,desc:c,price:l,img:d}=t,g=document.querySelector(".shop-btn-card"),y=document.querySelector(".shop-h-name"),C=document.querySelector(".shop-span-category"),h=document.querySelector(".shop-span-size"),x=document.querySelector(".shop-span-popularity"),E=document.querySelector(".shop-text-discription"),O=document.querySelector(".shop-h-price"),$=document.querySelector(".shop-img");g.dataset.idcards=e,y.textContent=s,C.textContent=o,h.textContent=r,x.textContent=n,E.textContent=c,O.textContent=`$${l}`,$.src=d,$.alt=s}const P=document.getElementById("id-modal-card"),F=document.querySelector(".shop-modal-close-btn");a.listCards.addEventListener("click",j);async function j(t){t.preventDefault();const{target:e}=t,s=e.closest(".filt-div-card");if(!s||e.closest(".filt-btn-card"))return;const r=s.dataset.idcarts;try{const n=await _(r);z(n),P.classList.remove("is-hidden-card")}catch(n){console.log(n)}}F.addEventListener("click",q);function q(){P.classList.add("is-hidden-card")}function D(t){const{target:e}=t,s=e.closest(".shop-btn-card");if(console.log(s),!s)return;const o=s.dataset.idcards;q();const r=localStorage.getItem("cart"),n=JSON.parse(r);if(n){const l=n.find(d=>d._id===o);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(n));return}n.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(n));return}const c=[];c.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(c))}a.addCartBtn.addEventListener("click",D);const v={keyword:null},i={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",w);async function H(){try{const e=(await N()).map(o=>{let r;return o.includes("_")?r=o.replace(/_/g," "):r=o,`<option value="${o}">${r}</option>`}).join("");a.categor.innerHTML+=e;const s=document.createElement("option");s.value="Show all",s.textContent="Show all",a.categor.prepend(s)}catch(t){console.log(t)}}async function w(){const t=V();i.limit=t;const e=JSON.parse(localStorage.getItem("filters"));e&&(i.keyword=e.keyword,i.category=e.category,i.page=e.page,localStorage.setItem("filters",JSON.stringify(i)),I());try{const o=(await M(i.keyword,i.category,"","","",i.page,t)).results;T(o)}catch(s){console.log(s)}}H();w();a.form&&(a.form.addEventListener("input",R),a.form.addEventListener("submit",U));async function R(){const t=a.filtersInput.value;v.keyword=t,t===""&&(v.keyword=null),localStorage.setItem("keyword",JSON.stringify(v))}async function U(t){t.preventDefault();const e=a.filtersInput.value;i.keyword=e,e===""&&(i.keyword=null);const s=a.filtersCategories.value;i.category=s,s===""&&(i.category=null),s==="Show all"&&(i.category=null),localStorage.setItem("filters",JSON.stringify(i)),w(),t.target.reset()}function I(){try{const t=JSON.parse(localStorage.getItem("keyword"));a.filtersInput&&(a.filtersInput.value=t.keyword||"")}catch{return}}I();function V(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function W(t){const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${m}#icon-check`),s.setAttribute("disabled","true");const r=s.dataset.idcards,n=localStorage.getItem("cart"),c=JSON.parse(n);if(c){const l=c.find(d=>d._id===r);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(c));return}c.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(c));return}}a.listCards.addEventListener("click",W);function G(t){return t.category.includes("_")&&(t.category=t.category.replace(/_/g," ")),`
        <div class="popular-card" data-productlist-id="${t._id}">
          <div class="popular-background">
            <img src="${t.img}" alt="${t.name}" class="popular-img">
          </div>
        
        <div class="popular-descript">
          <div class="popular-descript-text">
            <p class="popular-name">${t.name}</p>
          <div class="pop-frame">
  
          <div class="category-cont">
            <p class="popular-text">Category:
              <span class="popular-word">${t.category}</span></p>
              
              <ul class="pop-text-two-cat">
              <li class="pop-text-size-pop">

            <p class="popular-text">Size:
              <span class="popular-word">${t.size}</span></p></li>
              <li>
            <p class="popular-text">Popularity:
              <span class="popular-word">${t.popularity}</span></p></li></ul>
          </div>
  
            <div class="popularname-price">
          </div>
            <div id="${t._id}" class="popular-icon-cont">
              <svg class="popular-icon" width="20" height="20">
                <use href="${m}#icon-shop"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
    `}function K(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}J().then(t=>t.data).then(t=>{const e=K(t,5),s=document.getElementById("popularContainer");e.forEach(o=>{s.innerHTML+=G(o)})}).catch(t=>{console.error(t.message)});function Q(t){return`
      <div class="product-card">
        <div class="product-background">
        
        <div class="discount-label">
        <svg class="discount-label-icon" width="60" height="60">
          <use href="${m}#icon-discount"></use>
        </svg>
        </div>
          <img src="${t.img}" alt="${t.name}" class="product-image">
        </div>
        <div class="product-details">
        <div class="details-text">

          <h2 class="product-name">${t.name}</h2>
          
          <div class="price-icon">
          <p class="product-price">$${t.price.toFixed(2)}</p>
        <div id="${t._id}" class="discount-icon-cont">
          <svg class="discount-icon" width="18" height="18">
            <use href="${m}#icon-shop"></use>
          </svg>
        </div>
        </div>

        </div>
      </div>
    `}function X(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}B().then(t=>t.data).then(t=>{const e=X(t,2),s=document.getElementById("discountContainer");e.forEach(o=>{s.innerHTML+=Q(o)})}).catch(t=>{console.error(t.message)});const Y=document.querySelector(".footer-form"),f=document.querySelector(".modal-backdrop"),L=document.querySelector(".modal-subscribe-container"),k=document.querySelector(".modal-unsubscription-container"),Z=document.querySelectorAll(".modal-close-btn"),tt=document.querySelector(".modal-container"),b=document.querySelector(".footer-btn-to-top"),et=document.querySelector(".footer-container"),S=document.querySelector(".loader");tt.classList.add("is-hidden");const st=t=>{t.forEach(e=>{e.isIntersecting?b.style.display="block":b.style.display="none"})};b.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const ot=new IntersectionObserver(st,{root:null,threshold:.5});ot.observe(et);Y.addEventListener("submit",rt);Z.forEach(t=>{t.addEventListener("click",nt)});function rt(t){t.preventDefault();const s={email:document.querySelector(".footer-form-email").value};S.classList.remove("is-hidden"),window.addEventListener("click",o=>{o.target===f&&f.classList.add("is-hidden")}),A(s).then(o=>(S.classList.add("is-hidden"),f.classList.remove("is-hidden"),k.classList.add("is-hidden"),L.classList.remove("is-hidden"),console.log(o.data),o.json())).catch(o=>(S.classList.add("is-hidden"),o.response&&o.response.status===409?(f.classList.remove("is-hidden"),k.classList.remove("is-hidden"),L.classList.add("is-hidden")):console.log(o),o.message)),t.target.reset()}function nt(t){t.preventDefault(),f.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
