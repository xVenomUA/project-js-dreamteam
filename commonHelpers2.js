import"./assets/styles-8bb4f042.js";import{a as u}from"./assets/vendor-a61d8330.js";const p="https://food-boutique.b.goit.study/api";async function M(){try{return(await u.get(`${p}/products/categories`)).data}catch(t){console.log(t)}}async function B(t,e,s,o,n,r,i){try{const a=new URLSearchParams({keyword:t||"",category:e||"",byABC:s||!1,byPrice:o||!1,byPopularity:n||!1,page:r,limit:i});return(await u.get(`${p}/products?${a.toString()}`)).data}catch(a){console.log(a.message)}}async function A(t){try{return(await u.get(`${p}/products/${t}`)).data}catch(e){console.log(e.message)}}async function T(){try{return await u.get(`${p}/products/popular?limit=5`)}catch(t){console.log(t.message)}}async function H(){try{return await u.get(`${p}/products/discount`)}catch(t){console.log(t.message)}}async function z(t){return(await u.post(`${p}/subscription`,t)).data}const c={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count")};function m(){const t=JSON.parse(localStorage.getItem("cart"));t?(c.countHeader.textContent=`(${t.length})`,console.log(t)):c.countHeader.textContent="(0)"}m();const h="/project-js-dreamteam/assets/icon-dcb8169d.svg";function V(t){const e=t.map(({_id:s,category:o,img:n,name:r,size:i,popularity:a,price:d})=>{o.includes("_")&&(o=o.replace(/_/g," "));let f="",y="shop";const v=JSON.parse(localStorage.getItem("cart"));return v&&v.find(b=>b._id===s)&&(y="check",f="disabled"),`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${n}" alt="${r}" width="140">
  </div>
  <h2 class="filt-h-name">${r}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${o}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${i}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${a}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${d}</h2>
    <button class="filt-btn-card" data-idcards="${s}" type="submit" ${f}>
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${h}#icon-${y}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");c.filtercard.innerHTML=e,c.filtercard.innerHTML===""&&(c.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}const w={keyword:null},l={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",S);async function j(){try{const e=(await M()).map(o=>{let n;return o.includes("_")?n=o.replace(/_/g," "):n=o,`<option value="${o}">${n}</option>`}).join("");c.categor.innerHTML+=e;const s=document.createElement("option");s.value="Show all",s.textContent="Show all",c.categor.prepend(s)}catch(t){console.log(t)}}async function S(){const t=R();l.limit=t;const e=JSON.parse(localStorage.getItem("filters"));e&&(l.keyword=e.keyword,l.category=e.category,l.page=e.page,localStorage.setItem("filters",JSON.stringify(l)),x());try{const o=(await B(l.keyword,l.category,"","","",l.page,t)).results;V(o)}catch(s){console.log(s)}}j();S();c.form&&(c.form.addEventListener("input",D),c.form.addEventListener("submit",F));async function D(){const t=c.filtersInput.value;w.keyword=t,t===""&&(w.keyword=null),localStorage.setItem("keyword",JSON.stringify(w))}async function F(t){t.preventDefault();const e=c.filtersInput.value;l.keyword=e,e===""&&(l.keyword=null);const s=c.filtersCategories.value;l.category=s,s===""&&(l.category=null),s==="Show all"&&(l.category=null),localStorage.setItem("filters",JSON.stringify(l)),S(),t.target.reset()}function x(){try{const t=JSON.parse(localStorage.getItem("keyword"));c.filtersInput&&(c.filtersInput.value=t.keyword||"")}catch{return}}x();function R(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function U(t){const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${h}#icon-check`),s.setAttribute("disabled","true");const n=s.dataset.idcards,r=localStorage.getItem("cart"),i=JSON.parse(r);if(i){const a=i.find(d=>d._id===n);if(a){a.quantity+=1,localStorage.setItem("cart",JSON.stringify(i));return}i.push({_id:n,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),m();return}if(!i){const a=[];a.push({_id:n,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),m()}}c.listCards.addEventListener("click",U);function W(t){const{_id:e,name:s,category:o,size:n,popularity:r,desc:i,price:a,img:d}=t,f=document.querySelector(".shop-btn-card"),y=document.querySelector(".shop-h-name"),v=document.querySelector(".shop-span-category"),k=document.querySelector(".shop-span-size"),b=document.querySelector(".shop-span-popularity"),N=document.querySelector(".shop-text-discription"),_=document.querySelector(".shop-h-price"),L=document.querySelector(".shop-img"),q=JSON.parse(localStorage.getItem("cart"));q&&q.find(J=>J._id===e)&&f.setAttribute("disabled","true"),f.dataset.idcards=e,y.textContent=s,v.textContent=o,k.textContent=n,b.textContent=r,N.textContent=i,_.textContent=`$${a}`,L.src=d,L.alt=s}const E=document.getElementById("id-modal-card"),G=document.querySelector(".shop-modal-close-btn");c.listCards.addEventListener("click",K);async function K(t){t.preventDefault();const{target:e}=t,s=e.closest(".filt-div-card");if(!s||e.closest(".filt-btn-card"))return;const n=s.dataset.idcarts;try{const r=await A(n);W(r),E.classList.remove("is-hidden-card")}catch(r){console.log(r)}}G.addEventListener("click",O);function O(){E.classList.add("is-hidden-card")}function Q(t){const{target:e}=t,s=e.closest(".shop-btn-card");if(S(),!s)return;const o=s.dataset.idcards;O();const n=localStorage.getItem("cart"),r=JSON.parse(n);if(r){const a=r.find(d=>d._id===o);if(a){a.quantity+=1,localStorage.setItem("cart",JSON.stringify(r));return}r.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),m();return}const i=[];i.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),m()}c.addCartBtn.addEventListener("click",Q);function X(t){return t.category.includes("_")&&(t.category=t.category.replace(/_/g," ")),`
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
                <use href="${h}#icon-shop"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
    `}function Y(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}T().then(t=>t.data).then(t=>{const e=Y(t,5),s=document.getElementById("popularContainer");e.forEach(o=>{s.innerHTML+=X(o)})}).catch(t=>{console.error(t.message)});function Z(t){return`
      <div class="product-card">
        <div class="product-background">
        
        <div class="discount-label">
        <svg class="discount-label-icon" width="60" height="60">
          <use href="${h}#icon-discount"></use>
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
            <use href="${h}#icon-shop"></use>
          </svg>
        </div>
        </div>

        </div>
      </div>
    `}function tt(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}H().then(t=>t.data).then(t=>{const e=tt(t,2),s=document.getElementById("discountContainer");e.forEach(o=>{s.innerHTML+=Z(o)})}).catch(t=>{console.error(t.message)});const et=document.querySelector(".footer-form"),g=document.querySelector(".modal-backdrop"),P=document.querySelector(".modal-subscribe-container"),I=document.querySelector(".modal-unsubscription-container"),st=document.querySelectorAll(".modal-close-btn"),ot=document.querySelector(".modal-container"),$=document.querySelector(".footer-btn-to-top"),rt=document.querySelector(".footer-container"),C=document.querySelector(".loader");ot.classList.add("is-hidden");const ct=t=>{t.forEach(e=>{e.isIntersecting?$.style.display="block":$.style.display="none"})};$.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const nt=new IntersectionObserver(ct,{root:null,threshold:.5});nt.observe(rt);et.addEventListener("submit",at);st.forEach(t=>{t.addEventListener("click",it)});function at(t){t.preventDefault();const s={email:document.querySelector(".footer-form-email").value};C.classList.remove("is-hidden"),window.addEventListener("click",o=>{o.target===g&&g.classList.add("is-hidden")}),z(s).then(o=>(C.classList.add("is-hidden"),g.classList.remove("is-hidden"),I.classList.add("is-hidden"),P.classList.remove("is-hidden"),console.log(o.data),o.json())).catch(o=>(C.classList.add("is-hidden"),o.response&&o.response.status===409?(g.classList.remove("is-hidden"),I.classList.remove("is-hidden"),P.classList.add("is-hidden")):console.log(o),o.message)),t.target.reset()}function it(t){t.preventDefault(),g.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
