import{a as g,l as T}from"./vendor-611745ce.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const y="https://food-boutique.b.goit.study/api";async function H(){try{return(await g.get(`${y}/products/categories`)).data}catch(t){console.log(t)}}async function D(t,e,s,o,n,r,c){try{const a=new URLSearchParams({keyword:t||"",category:e||"",byABC:s||!1,byPrice:o||!1,byPopularity:n||!1,page:r,limit:c});return(await g.get(`${y}/products?${a.toString()}`)).data}catch(a){console.log(a.message)}}async function E(t){try{return(await g.get(`${y}/products/${t}`)).data}catch(e){console.log(e.message)}}async function W(){try{return await g.get(`${y}/products/popular?limit=5`)}catch(t){console.log(t.message)}}async function F(){try{return await g.get(`${y}/products/discount`)}catch(t){console.log(t.message)}}async function V(t){return(await g.post(`${y}/subscription`,t)).data}const m="/project-js-dreamteam/assets/icon-ed92c614.svg",i={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count"),PopularDiv:document.getElementById("popularContainer"),modalWindowId:document.getElementById("id-modal-card")};function f(){const t=JSON.parse(localStorage.getItem("cart"));t?i.countHeader.textContent=`(${t.length})`:i.countHeader.textContent="(0)"}f();function j(t){const e=t.map(({_id:s,category:o,img:n,name:r,size:c,popularity:a,price:l})=>{o.includes("_")&&(o=o.replace(/_/g," "));let u="",p="shop";const h=JSON.parse(localStorage.getItem("cart"));return h&&h.find(w=>w._id===s)&&(p="check",u="disabled"),`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${n}" alt="${r}" width="140">
  </div>
  <h2 class="filt-h-name">${r}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${o}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${c}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${a}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${l}</h2>
    <button class="filt-btn-card" data-idcards="${s}" type="submit" ${u}>
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${m}#icon-${p}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");i.filtercard.innerHTML=e,i.filtercard.innerHTML===""&&(i.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}function L(t){const{_id:e,name:s,category:o,size:n,popularity:r,desc:c,price:a,img:l}=t,u=document.querySelector(".shop-btn-card"),p=document.querySelector(".shop-h-name"),h=document.querySelector(".shop-span-category"),b=document.querySelector(".shop-span-size"),w=document.querySelector(".shop-span-popularity"),M=document.querySelector(".shop-text-discription"),A=document.querySelector(".shop-h-price"),I=document.querySelector(".shop-img"),q=JSON.parse(localStorage.getItem("cart"));q&&q.find(B=>B._id===e)&&u.setAttribute("disabled","true"),u.dataset.idcards=e,p.textContent=s,h.textContent=o,b.textContent=n,w.textContent=r,M.textContent=c,A.textContent=`$${a}`,I.src=l,I.alt=s}function z(t){const e=t.map(({_id:s,category:o,img:n,name:r,size:c,popularity:a})=>{o.includes("_")&&(o=o.replace(/_/g," "));let l="shop",u="";const p=JSON.parse(localStorage.getItem("cart"));return p&&p.find(b=>b._id===s)&&(l="check",u="popular-icon-back"),`
      <div class="popular-card" data-idcarts="${s}">
      <div class="popular-background">
            <img src="${n}" alt="${r}" class="popular-img">
          </div>
        
        <div class="popular-descript">
          <div class="popular-descript-text">
            <p class="popular-name">${r}</p>
          <div class="pop-frame">
  
          <div class="category-cont">
            <p class="popular-text">Category:
              <span class="popular-word">${o}</span></p>
              
              <ul class="pop-text-two-cat">
              <li class="pop-text-size-pop">

            <p class="popular-text">Size:
              <span class="popular-word">${c}</span></p></li>
              <li>
            <p class="popular-text">Popularity:
              <span class="popular-word">${a}</span></p></li></ul>
          </div>
  
            <div class="popularname-price">
          </div>
          <button  class="popular-buton" data-idcarts="${s}" class="popular-icon-cont">
              <svg class="popular-icon ${u}" width="20" height="20">
                <use href="${m}#icon-${l}" class="filt-use"></use>
              </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
`}).join("");i.PopularDiv.innerHTML=e}P();async function P(){try{const e=(await W()).data;z(e)}catch{}}i.PopularDiv.addEventListener("click",R);async function R(t){t.preventDefault();const{target:e}=t,s=e.closest(".popular-card");if(!s||e.closest(".popular-icon-cont"))return;const n=s.dataset.idcarts;try{const r=await E(n);L(r),i.modalWindowId.classList.remove("is-hidden-card")}catch(r){console.log(r)}}function U(t){S();const{target:e}=t,s=e.closest(".popular-icon-cont");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${m}#icon-check`),s.setAttribute("disabled","true"),s.querySelector(".popular-icon ").classList.add("popular-icon-back");const r=s.dataset.idcarts,c=localStorage.getItem("cart"),a=JSON.parse(c);if(a){const l=a.find(u=>u._id===r);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(a));return}a.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),f();return}if(!a){const l=[];l.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),f()}}i.PopularDiv.addEventListener("click",U);const $={keyword:null},d={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",T(S,2500));async function G(){try{const e=(await H()).map(o=>{let n;return o.includes("_")?n=o.replace(/_/g," "):n=o,`<option value="${o}">${n}</option>`}).join("");i.categor.innerHTML+=e;const s=document.createElement("option");s.value="Show all",s.textContent="Show all",i.categor.prepend(s)}catch(t){console.log(t)}}async function S(){const t=X();d.limit=t;const e=JSON.parse(localStorage.getItem("filters"));e&&(d.keyword=e.keyword,d.category=e.category,d.page=e.page,localStorage.setItem("filters",JSON.stringify(d)),N());try{const o=(await D(d.keyword,d.category,"","","",d.page,t)).results;j(o)}catch(s){console.log(s)}}G();S();i.form&&(i.form.addEventListener("input",K),i.form.addEventListener("submit",Q));async function K(){const t=i.filtersInput.value;$.keyword=t,t===""&&($.keyword=null),localStorage.setItem("keyword",JSON.stringify($))}async function Q(t){t.preventDefault();const e=i.filtersInput.value;d.keyword=e,e===""&&(d.keyword=null);const s=i.filtersCategories.value;d.category=s,s===""&&(d.category=null),s==="Show all"&&(d.category=null),localStorage.setItem("filters",JSON.stringify(d)),S(),t.target.reset()}function N(){try{const t=JSON.parse(localStorage.getItem("keyword"));i.filtersInput&&(i.filtersInput.value=t.keyword||"")}catch{return}}N();function X(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function Y(t){P();const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${m}#icon-check`),s.setAttribute("disabled","true");const n=s.dataset.idcards,r=localStorage.getItem("cart"),c=JSON.parse(r);if(c){const a=c.find(l=>l._id===n);if(a){a.quantity+=1,localStorage.setItem("cart",JSON.stringify(c));return}c.push({_id:n,quantity:1}),localStorage.setItem("cart",JSON.stringify(c)),f();return}if(!c){const a=[];a.push({_id:n,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),f()}}i.listCards.addEventListener("click",Y);const J=document.querySelector(".pagination ul");let Z=10,tt=1;const et=document.querySelector(".pagination");J.innerHTML=st(Z,tt);function st(t,e){let s="",o,n=e-1,r=e+1;e>1&&(s+=`<li class="btn prev" onclick="createPagination(totalPages, ${e-1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`),e>2&&(s+='<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>',e>3&&(s+='<li class="dots"><span>...</span></li>')),e==t?n=n-2:e==t-1&&(n=n-1),e==1?r=r+2:e==2&&(r=r+1);for(var c=n;c<=r;c++)c>t||(c==0&&(c=c+1),e==c?o="active":o="",s+=`<li class="numb ${o}" onclick="createPagination(totalPages, ${c})"><span>${c}</span></li>`);return e<t-1&&(e<t-2&&(s+='<li class="dots"><span>...</span></li>'),s+=`<li class="last numb" onclick="createPagination(totalPages, ${t})"><span>${t}</span></li>`),e<t&&(s+=`<li class="btn next" onclick="createPagination(totalPages, ${e+1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`),t===1&&(et.style.display="none"),J.innerHTML=s,s}const ot=document.getElementById("id-modal-card");function rt(t){const e=document.createElement("div");return e.classList.add("product-card"),e.dataset.idcarts=t._id,e.addEventListener("click",()=>{L(t),ot.classList.remove("is-hidden-card")}),e.innerHTML=`
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
  `,e}function nt(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}F().then(t=>t.data).then(t=>{const e=nt(t,2),s=document.getElementById("discountContainer");e.forEach(o=>{s.appendChild(rt(o))})}).catch(t=>{console.error(t.message)});const ct=document.querySelector(".shop-modal-close-btn");i.listCards.addEventListener("click",at);async function at(t){t.preventDefault();const{target:e}=t,s=e.closest(".filt-div-card");if(!s||e.closest(".filt-btn-card"))return;const n=s.dataset.idcarts;try{const r=await E(n);L(r),i.modalWindowId.classList.remove("is-hidden-card")}catch(r){console.log(r)}}ct.addEventListener("click",_);function _(){i.modalWindowId.classList.add("is-hidden-card")}function it(t){const{target:e}=t,s=e.closest(".shop-btn-card");if(S(),P(),!s)return;const o=s.dataset.idcards;_();const n=localStorage.getItem("cart"),r=JSON.parse(n);if(r){const a=r.find(l=>l._id===o);if(a){a.quantity+=1,localStorage.setItem("cart",JSON.stringify(r));return}r.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),f();return}const c=[];c.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(c)),f()}i.addCartBtn.addEventListener("click",it);const lt=document.querySelector(".footer-form"),v=document.querySelector(".modal-backdrop"),O=document.querySelector(".modal-subscribe-container"),x=document.querySelector(".modal-unsubscription-container"),dt=document.querySelectorAll(".modal-close-btn"),ut=document.querySelector(".modal-container"),C=document.querySelector(".footer-btn-to-top"),pt=document.querySelector(".footer-container"),k=document.querySelector(".loader");ut.classList.add("is-hidden");const ft=t=>{t.forEach(e=>{e.isIntersecting?C.style.display="block":C.style.display="none"})};C.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const mt=new IntersectionObserver(ft,{root:null,threshold:.5});mt.observe(pt);lt.addEventListener("submit",gt);dt.forEach(t=>{t.addEventListener("click",yt)});function gt(t){t.preventDefault();const s={email:document.querySelector(".footer-form-email").value};k.classList.remove("is-hidden"),window.addEventListener("click",o=>{o.target===v&&v.classList.add("is-hidden")}),V(s).then(o=>(k.classList.add("is-hidden"),v.classList.remove("is-hidden"),x.classList.add("is-hidden"),O.classList.remove("is-hidden"),console.log(o.data),o.json())).catch(o=>(k.classList.add("is-hidden"),o.response&&o.response.status===409?(v.classList.remove("is-hidden"),x.classList.remove("is-hidden"),O.classList.add("is-hidden")):console.log(o),o.message)),t.target.reset()}function yt(t){t.preventDefault(),v.classList.add("is-hidden")}export{E as g,m as i};
//# sourceMappingURL=subscription-b3112153.js.map
