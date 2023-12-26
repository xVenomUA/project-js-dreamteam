import{i as p,A as J,a as M,g as A,b as B,c as T,p as H}from"./assets/icon-253637f9.js";import{l as z}from"./assets/vendor-e21ff9e3.js";const c={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count")};function u(){const t=JSON.parse(localStorage.getItem("cart"));t?(c.countHeader.textContent=`(${t.length})`,console.log(t)):c.countHeader.textContent="(0)"}u();function V(t){const e=t.map(({_id:s,category:o,img:a,name:n,size:r,popularity:i,price:d})=>{o.includes("_")&&(o=o.replace(/_/g," "));let f="",g="shop";const h=JSON.parse(localStorage.getItem("cart"));return h&&h.find(v=>v._id===s)&&(g="check",f="disabled"),`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${a}" alt="${n}" width="140">
  </div>
  <h2 class="filt-h-name">${n}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${o}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${r}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${i}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${d}</h2>
    <button class="filt-btn-card" data-idcards="${s}" type="submit" ${f}>
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${p}#icon-${g}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");c.filtercard.innerHTML=e,c.filtercard.innerHTML===""&&(c.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}const S={keyword:null},l={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",z(y,2500));async function W(){try{const e=(await J()).map(o=>{let a;return o.includes("_")?a=o.replace(/_/g," "):a=o,`<option value="${o}">${a}</option>`}).join("");c.categor.innerHTML+=e;const s=document.createElement("option");s.value="Show all",s.textContent="Show all",c.categor.prepend(s)}catch(t){console.log(t)}}async function y(){const t=j();l.limit=t;const e=JSON.parse(localStorage.getItem("filters"));e&&(l.keyword=e.keyword,l.category=e.category,l.page=e.page,localStorage.setItem("filters",JSON.stringify(l)),E());try{const o=(await M(l.keyword,l.category,"","","",l.page,t)).results;V(o)}catch(s){console.log(s)}}W();y();c.form&&(c.form.addEventListener("input",D),c.form.addEventListener("submit",F));async function D(){const t=c.filtersInput.value;S.keyword=t,t===""&&(S.keyword=null),localStorage.setItem("keyword",JSON.stringify(S))}async function F(t){t.preventDefault();const e=c.filtersInput.value;l.keyword=e,e===""&&(l.keyword=null);const s=c.filtersCategories.value;l.category=s,s===""&&(l.category=null),s==="Show all"&&(l.category=null),localStorage.setItem("filters",JSON.stringify(l)),y(),t.target.reset()}function E(){try{const t=JSON.parse(localStorage.getItem("keyword"));c.filtersInput&&(c.filtersInput.value=t.keyword||"")}catch{return}}E();function j(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function R(t){const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${p}#icon-check`),s.setAttribute("disabled","true");const a=s.dataset.idcards,n=localStorage.getItem("cart"),r=JSON.parse(n);if(r){const i=r.find(d=>d._id===a);if(i){i.quantity+=1,localStorage.setItem("cart",JSON.stringify(r));return}r.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),u();return}if(!r){const i=[];i.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),u()}}c.listCards.addEventListener("click",R);function w(t){const{_id:e,name:s,category:o,size:a,popularity:n,desc:r,price:i,img:d}=t,f=document.querySelector(".shop-btn-card"),g=document.querySelector(".shop-h-name"),h=document.querySelector(".shop-span-category"),L=document.querySelector(".shop-span-size"),v=document.querySelector(".shop-span-popularity"),x=document.querySelector(".shop-text-discription"),N=document.querySelector(".shop-h-price"),I=document.querySelector(".shop-img"),$=JSON.parse(localStorage.getItem("cart"));$&&$.find(_=>_._id===e)&&f.setAttribute("disabled","true"),f.dataset.idcards=e,g.textContent=s,h.textContent=o,L.textContent=a,v.textContent=n,x.textContent=r,N.textContent=`$${i}`,I.src=d,I.alt=s}const P=document.getElementById("id-modal-card"),U=document.querySelector(".shop-modal-close-btn");c.listCards.addEventListener("click",G);async function G(t){t.preventDefault();const{target:e}=t,s=e.closest(".filt-div-card");if(!s||e.closest(".filt-btn-card"))return;const a=s.dataset.idcarts;try{const n=await A(a);w(n),P.classList.remove("is-hidden-card")}catch(n){console.log(n)}}U.addEventListener("click",O);function O(){P.classList.add("is-hidden-card")}function K(t){const{target:e}=t,s=e.closest(".shop-btn-card");if(y(),!s)return;const o=s.dataset.idcards;O();const a=localStorage.getItem("cart"),n=JSON.parse(a);if(n){const i=n.find(d=>d._id===o);if(i){i.quantity+=1,localStorage.setItem("cart",JSON.stringify(n));return}n.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),u();return}const r=[];r.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),u()}c.addCartBtn.addEventListener("click",K);const Q=document.getElementById("id-modal-card");function X(t){t.category.includes("_")&&(t.category=t.category.replace(/_/g," "));const e=document.createElement("div");return e.classList.add("popular-card"),e.setAttribute("data-productlist-id",t._id),e.addEventListener("click",()=>{w(t),Q.classList.remove("is-hidden-card")}),e.innerHTML=`
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
                <use href="${p}#icon-shop"></use>
              </svg>
          </div>
          </div>
        </div>
      </div>
  `,e}function Y(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}B().then(t=>t.data).then(t=>{const e=Y(t,5),s=document.getElementById("popularContainer");e.forEach(o=>{s.append(X(o))})}).catch(t=>{console.error(t.message)});function Z(t){const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${p}#icon-check`),s.setAttribute("disabled","true");const a=s.dataset.idcards,n=localStorage.getItem("cart"),r=JSON.parse(n);if(r){const i=r.find(d=>d._id===a);if(i){i.quantity+=1,localStorage.setItem("cart",JSON.stringify(r));return}r.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),u();return}if(!r){const i=[];i.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),u()}}c.listCards.addEventListener("click",Z);const tt=document.getElementById("id-modal-card");function et(t){const e=document.createElement("div");return e.classList.add("product-card"),e.dataset.idcarts=t._id,e.addEventListener("click",()=>{w(t),tt.classList.remove("is-hidden-card")}),e.innerHTML=`
  <div class="product-background">
        
  <div class="discount-label">
  <svg class="discount-label-icon" width="60" height="60">
    <use href="${p}#icon-discount"></use>
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
      <use href="${p}#icon-shop"></use>
    </svg>
  </div>
  </div>
  </div>
  `,e}function st(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}T().then(t=>t.data).then(t=>{const e=st(t,2),s=document.getElementById("discountContainer");e.forEach(o=>{s.appendChild(et(o))})}).catch(t=>{console.error(t.message)});const ot=document.querySelector(".footer-form"),m=document.querySelector(".modal-backdrop"),k=document.querySelector(".modal-subscribe-container"),q=document.querySelector(".modal-unsubscription-container"),rt=document.querySelectorAll(".modal-close-btn"),at=document.querySelector(".modal-container"),C=document.querySelector(".footer-btn-to-top"),ct=document.querySelector(".footer-container"),b=document.querySelector(".loader");at.classList.add("is-hidden");const nt=t=>{t.forEach(e=>{e.isIntersecting?C.style.display="block":C.style.display="none"})};C.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const it=new IntersectionObserver(nt,{root:null,threshold:.5});it.observe(ct);ot.addEventListener("submit",lt);rt.forEach(t=>{t.addEventListener("click",dt)});function lt(t){t.preventDefault();const s={email:document.querySelector(".footer-form-email").value};b.classList.remove("is-hidden"),window.addEventListener("click",o=>{o.target===m&&m.classList.add("is-hidden")}),H(s).then(o=>(b.classList.add("is-hidden"),m.classList.remove("is-hidden"),q.classList.add("is-hidden"),k.classList.remove("is-hidden"),console.log(o.data),o.json())).catch(o=>(b.classList.add("is-hidden"),o.response&&o.response.status===409?(m.classList.remove("is-hidden"),q.classList.remove("is-hidden"),k.classList.add("is-hidden")):console.log(o),o.message)),t.target.reset()}function dt(t){t.preventDefault(),m.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
