import"./assets/styles-8bb4f042.js";import{a as u}from"./assets/vendor-2b35cb0d.js";const p="https://food-boutique.b.goit.study/api";async function B(){try{return(await u.get(`${p}/products/categories`)).data}catch(t){console.log(t)}}async function A(t,e,s,o,n,r,i){try{const a=new URLSearchParams({keyword:t||"",category:e||"",byABC:s||!1,byPrice:o||!1,byPopularity:n||!1,page:r,limit:i});return(await u.get(`${p}/products?${a.toString()}`)).data}catch(a){console.log(a.message)}}async function T(t){try{return(await u.get(`${p}/products/${t}`)).data}catch(e){console.log(e.message)}}async function H(){try{return await u.get(`${p}/products/popular?limit=5`)}catch(t){console.log(t.message)}}async function z(){try{return await u.get(`${p}/products/discount`)}catch(t){console.log(t.message)}}async function V(t){return(await u.post(`${p}/subscription`,t)).data}const c={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count")};function h(){const t=JSON.parse(localStorage.getItem("cart"));t?(c.countHeader.textContent=`(${t.length})`,console.log(t)):c.countHeader.textContent="(0)"}h();const y="/project-js-dreamteam/assets/icon-dcb8169d.svg";function j(t){const e=t.map(({_id:s,category:o,img:n,name:r,size:i,popularity:a,price:d})=>{o.includes("_")&&(o=o.replace(/_/g," "));let g="",v="shop";const S=JSON.parse(localStorage.getItem("cart"));return S&&S.find(w=>w._id===s)&&(v="check",g="disabled"),`<div class="filt-div-card" data-idcarts="${s}">
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
    <button class="filt-btn-card" data-idcards="${s}" type="submit" ${g}>
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${y}#icon-${v}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");c.filtercard.innerHTML=e,c.filtercard.innerHTML===""&&(c.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}const C={keyword:null},l={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",b);async function D(){try{const e=(await B()).map(o=>{let n;return o.includes("_")?n=o.replace(/_/g," "):n=o,`<option value="${o}">${n}</option>`}).join("");c.categor.innerHTML+=e;const s=document.createElement("option");s.value="Show all",s.textContent="Show all",c.categor.prepend(s)}catch(t){console.log(t)}}async function b(){const t=U();l.limit=t;const e=JSON.parse(localStorage.getItem("filters"));e&&(l.keyword=e.keyword,l.category=e.category,l.page=e.page,localStorage.setItem("filters",JSON.stringify(l)),E());try{const o=(await A(l.keyword,l.category,"","","",l.page,t)).results;j(o)}catch(s){console.log(s)}}D();b();c.form&&(c.form.addEventListener("input",F),c.form.addEventListener("submit",R));async function F(){const t=c.filtersInput.value;C.keyword=t,t===""&&(C.keyword=null),localStorage.setItem("keyword",JSON.stringify(C))}async function R(t){t.preventDefault();const e=c.filtersInput.value;l.keyword=e,e===""&&(l.keyword=null);const s=c.filtersCategories.value;l.category=s,s===""&&(l.category=null),s==="Show all"&&(l.category=null),localStorage.setItem("filters",JSON.stringify(l)),b(),t.target.reset()}function E(){try{const t=JSON.parse(localStorage.getItem("keyword"));c.filtersInput&&(c.filtersInput.value=t.keyword||"")}catch{return}}E();function U(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function W(t){const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${y}#icon-check`),s.setAttribute("disabled","true");const n=s.dataset.idcards,r=localStorage.getItem("cart"),i=JSON.parse(r);if(i){const a=i.find(d=>d._id===n);if(a){a.quantity+=1,localStorage.setItem("cart",JSON.stringify(i));return}i.push({_id:n,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),h();return}if(!i){const a=[];a.push({_id:n,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),h()}}c.listCards.addEventListener("click",W);function G(t){const{_id:e,name:s,category:o,size:n,popularity:r,desc:i,price:a,img:d}=t,g=document.querySelector(".shop-btn-card"),v=document.querySelector(".shop-h-name"),S=document.querySelector(".shop-span-category"),L=document.querySelector(".shop-span-size"),w=document.querySelector(".shop-span-popularity"),_=document.querySelector(".shop-text-discription"),J=document.querySelector(".shop-h-price"),q=document.querySelector(".shop-img"),P=JSON.parse(localStorage.getItem("cart"));P&&P.find(M=>M._id===e)&&g.setAttribute("disabled","true"),g.dataset.idcards=e,v.textContent=s,S.textContent=o,L.textContent=n,w.textContent=r,_.textContent=i,J.textContent=`$${a}`,q.src=d,q.alt=s}const O=document.getElementById("id-modal-card"),K=document.querySelector(".shop-modal-close-btn");c.listCards.addEventListener("click",Q);async function Q(t){t.preventDefault();const{target:e}=t,s=e.closest(".filt-div-card");if(!s||e.closest(".filt-btn-card"))return;const n=s.dataset.idcarts;try{const r=await T(n);G(r),O.classList.remove("is-hidden-card")}catch(r){console.log(r)}}K.addEventListener("click",N);function N(){O.classList.add("is-hidden-card")}function X(t){const{target:e}=t,s=e.closest(".shop-btn-card");if(b(),!s)return;const o=s.dataset.idcards;N();const n=localStorage.getItem("cart"),r=JSON.parse(n);if(r){const a=r.find(d=>d._id===o);if(a){a.quantity+=1,localStorage.setItem("cart",JSON.stringify(r));return}r.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),h();return}const i=[];i.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),h()}c.addCartBtn.addEventListener("click",X);function Y(t){return t.category.includes("_")&&(t.category=t.category.replace(/_/g," ")),`
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
                <use href="${y}#icon-shop"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
    `}function Z(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}H().then(t=>t.data).then(t=>{const e=Z(t,5),s=document.getElementById("popularContainer");e.forEach(o=>{s.innerHTML+=Y(o)})}).catch(t=>{console.error(t.message)});function tt(t){return`
      <div class="product-card">
        <div class="product-background">
        
        <div class="discount-label">
        <svg class="discount-label-icon" width="60" height="60">
          <use href="${y}#icon-discount"></use>
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
            <use href="${y}#icon-shop"></use>
          </svg>
        </div>
        </div>

        </div>
      </div>
    `}function et(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}z().then(t=>t.data).then(t=>{const e=et(t,2),s=document.getElementById("discountContainer");e.forEach(o=>{s.innerHTML+=tt(o)})}).catch(t=>{console.error(t.message)});const st=document.querySelector(".footer-form"),m=document.querySelector(".modal-backdrop"),I=document.querySelector(".modal-subscribe-container"),x=document.querySelector(".modal-unsubscription-container"),ot=document.querySelectorAll(".modal-close-btn"),rt=document.querySelector(".modal-container"),k=document.querySelector(".footer-btn-to-top"),ct=document.querySelector(".footer-container"),$=document.querySelector(".loader");rt.classList.add("is-hidden");const nt=t=>{t.forEach(e=>{e.isIntersecting?k.style.display="block":k.style.display="none"})};k.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const at=new IntersectionObserver(nt,{root:null,threshold:.5});at.observe(ct);st.addEventListener("submit",it);ot.forEach(t=>{t.addEventListener("click",lt)});function it(t){t.preventDefault();const s={email:document.querySelector(".footer-form-email").value};$.classList.remove("is-hidden"),window.addEventListener("click",o=>{o.target===m&&m.classList.add("is-hidden")}),V(s).then(o=>($.classList.add("is-hidden"),m.classList.remove("is-hidden"),x.classList.add("is-hidden"),I.classList.remove("is-hidden"),console.log(o.data),o.json())).catch(o=>($.classList.add("is-hidden"),o.response&&o.response.status===409?(m.classList.remove("is-hidden"),x.classList.remove("is-hidden"),I.classList.add("is-hidden")):console.log(o),o.message)),t.target.reset()}function lt(t){t.preventDefault(),m.classList.add("is-hidden")}f;
//# sourceMappingURL=commonHelpers2.js.map
