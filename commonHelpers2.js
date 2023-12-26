import"./assets/styles-8bb4f042.js";import{a as u}from"./assets/vendor-a61d8330.js";const p="https://food-boutique.b.goit.study/api";async function J(){try{return(await u.get(`${p}/products/categories`)).data}catch(t){console.log(t)}}async function M(t,e,s,o,c,r,i){try{const a=new URLSearchParams({keyword:t||"",category:e||"",byABC:s||!1,byPrice:o||!1,byPopularity:c||!1,page:r,limit:i});return(await u.get(`${p}/products?${a.toString()}`)).data}catch(a){console.log(a.message)}}async function B(t){try{return(await u.get(`${p}/products/${t}`)).data}catch(e){console.log(e.message)}}async function A(){try{return await u.get(`${p}/products/popular?limit=5`)}catch(t){console.log(t.message)}}async function T(){try{return await u.get(`${p}/products/discount`)}catch(t){console.log(t.message)}}async function z(t){return(await u.post(`${p}/subscription`,t)).data}const n={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards")},m="/project-js-dreamteam/assets/icon-dcb8169d.svg";function V(t){const e=t.map(({_id:s,category:o,img:c,name:r,size:i,popularity:a,price:d})=>{o.includes("_")&&(o=o.replace(/_/g," "));let f="",h="shop";const y=JSON.parse(localStorage.getItem("cart"));return y&&y.find(S=>S._id===s)&&(h="check",f="disabled"),`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${c}" alt="${r}" width="140">
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
          <use class="filt-use" href="${m}#icon-${h}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");n.filtercard.innerHTML=e,n.filtercard.innerHTML===""&&(n.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}function j(t){const{_id:e,name:s,category:o,size:c,popularity:r,desc:i,price:a,img:d}=t,f=document.querySelector(".shop-btn-card"),h=document.querySelector(".shop-h-name"),y=document.querySelector(".shop-span-category"),$=document.querySelector(".shop-span-size"),S=document.querySelector(".shop-span-popularity"),O=document.querySelector(".shop-text-discription"),_=document.querySelector(".shop-h-price"),k=document.querySelector(".shop-img"),L=JSON.parse(localStorage.getItem("cart"));L&&L.find(N=>N._id===e)&&f.setAttribute("disabled","true"),f.dataset.idcards=e,h.textContent=s,y.textContent=o,$.textContent=c,S.textContent=r,O.textContent=i,_.textContent=`$${a}`,k.src=d,k.alt=s}const I=document.getElementById("id-modal-card"),D=document.querySelector(".shop-modal-close-btn");n.listCards.addEventListener("click",F);async function F(t){t.preventDefault();const{target:e}=t,s=e.closest(".filt-div-card");if(!s||e.closest(".filt-btn-card"))return;const c=s.dataset.idcarts;try{const r=await B(c);j(r),I.classList.remove("is-hidden-card")}catch(r){console.log(r)}}D.addEventListener("click",x);function x(){I.classList.add("is-hidden-card")}function H(t){const{target:e}=t,s=e.closest(".shop-btn-card");if(v(),!s)return;const o=s.dataset.idcards;x();const c=localStorage.getItem("cart"),r=JSON.parse(c);if(r){const a=r.find(d=>d._id===o);if(a){a.quantity+=1,localStorage.setItem("cart",JSON.stringify(r));return}r.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(r));return}const i=[];i.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(i))}n.addCartBtn.addEventListener("click",H);const b={keyword:null},l={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",v);async function R(){try{const e=(await J()).map(o=>{let c;return o.includes("_")?c=o.replace(/_/g," "):c=o,`<option value="${o}">${c}</option>`}).join("");n.categor.innerHTML+=e;const s=document.createElement("option");s.value="Show all",s.textContent="Show all",n.categor.prepend(s)}catch(t){console.log(t)}}async function v(){const t=G();l.limit=t;const e=JSON.parse(localStorage.getItem("filters"));e&&(l.keyword=e.keyword,l.category=e.category,l.page=e.page,localStorage.setItem("filters",JSON.stringify(l)),E());try{const o=(await M(l.keyword,l.category,"","","",l.page,t)).results;V(o)}catch(s){console.log(s)}}R();v();n.form&&(n.form.addEventListener("input",U),n.form.addEventListener("submit",W));async function U(){const t=n.filtersInput.value;b.keyword=t,t===""&&(b.keyword=null),localStorage.setItem("keyword",JSON.stringify(b))}async function W(t){t.preventDefault();const e=n.filtersInput.value;l.keyword=e,e===""&&(l.keyword=null);const s=n.filtersCategories.value;l.category=s,s===""&&(l.category=null),s==="Show all"&&(l.category=null),localStorage.setItem("filters",JSON.stringify(l)),v(),t.target.reset()}function E(){try{const t=JSON.parse(localStorage.getItem("keyword"));n.filtersInput&&(n.filtersInput.value=t.keyword||"")}catch{return}}E();function G(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function K(t){const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${m}#icon-check`),s.setAttribute("disabled","true");const c=s.dataset.idcards,r=localStorage.getItem("cart"),i=JSON.parse(r);if(i){const a=i.find(d=>d._id===c);if(a){a.quantity+=1,localStorage.setItem("cart",JSON.stringify(i));return}i.push({_id:c,quantity:1}),localStorage.setItem("cart",JSON.stringify(i));return}if(!i){const a=[];a.push({_id:c,quantity:1}),localStorage.setItem("cart",JSON.stringify(a))}}n.listCards.addEventListener("click",K);function Q(t){return t.category.includes("_")&&(t.category=t.category.replace(/_/g," ")),`
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
    `}function X(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}A().then(t=>t.data).then(t=>{const e=X(t,5),s=document.getElementById("popularContainer");e.forEach(o=>{s.innerHTML+=Q(o)})}).catch(t=>{console.error(t.message)});function Y(t){return`
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
    `}function Z(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}T().then(t=>t.data).then(t=>{const e=Z(t,2),s=document.getElementById("discountContainer");e.forEach(o=>{s.innerHTML+=Y(o)})}).catch(t=>{console.error(t.message)});const tt=document.querySelector(".footer-form"),g=document.querySelector(".modal-backdrop"),P=document.querySelector(".modal-subscribe-container"),q=document.querySelector(".modal-unsubscription-container"),et=document.querySelectorAll(".modal-close-btn"),st=document.querySelector(".modal-container"),C=document.querySelector(".footer-btn-to-top"),ot=document.querySelector(".footer-container"),w=document.querySelector(".loader");st.classList.add("is-hidden");const rt=t=>{t.forEach(e=>{e.isIntersecting?C.style.display="block":C.style.display="none"})};C.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const ct=new IntersectionObserver(rt,{root:null,threshold:.5});ct.observe(ot);tt.addEventListener("submit",at);et.forEach(t=>{t.addEventListener("click",nt)});function at(t){t.preventDefault();const s={email:document.querySelector(".footer-form-email").value};w.classList.remove("is-hidden"),window.addEventListener("click",o=>{o.target===g&&g.classList.add("is-hidden")}),z(s).then(o=>(w.classList.add("is-hidden"),g.classList.remove("is-hidden"),q.classList.add("is-hidden"),P.classList.remove("is-hidden"),console.log(o.data),o.json())).catch(o=>(w.classList.add("is-hidden"),o.response&&o.response.status===409?(g.classList.remove("is-hidden"),q.classList.remove("is-hidden"),P.classList.add("is-hidden")):console.log(o),o.message)),t.target.reset()}function nt(t){t.preventDefault(),g.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
