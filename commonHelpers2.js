import{i as g,a as M,g as x,A as B,b as D,c as H,p as T}from"./assets/icon-3775eae5.js";import{l as A}from"./assets/vendor-e21ff9e3.js";const c={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count"),PopularDiv:document.getElementById("popularContainer"),modalWindowId:document.getElementById("id-modal-card")};function h(){const t=JSON.parse(localStorage.getItem("cart"));t?c.countHeader.textContent=`(${t.length})`:c.countHeader.textContent="(0)"}h();function W(t){const e=t.map(({_id:s,category:o,img:a,name:r,size:n,popularity:i,price:d})=>{o.includes("_")&&(o=o.replace(/_/g," "));let u="",p="shop";const f=JSON.parse(localStorage.getItem("cart"));return f&&f.find(S=>S._id===s)&&(p="check",u="disabled"),`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${a}" alt="${r}" width="140">
  </div>
  <h2 class="filt-h-name">${r}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${o}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${n}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${i}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${d}</h2>
    <button class="filt-btn-card" data-idcards="${s}" type="submit" ${u}>
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${g}#icon-${p}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");c.filtercard.innerHTML=e,c.filtercard.innerHTML===""&&(c.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}function k(t){const{_id:e,name:s,category:o,size:a,popularity:r,desc:n,price:i,img:d}=t,u=document.querySelector(".shop-btn-card"),p=document.querySelector(".shop-h-name"),f=document.querySelector(".shop-span-category"),y=document.querySelector(".shop-span-size"),S=document.querySelector(".shop-span-popularity"),N=document.querySelector(".shop-text-discription"),J=document.querySelector(".shop-h-price"),L=document.querySelector(".shop-img"),$=JSON.parse(localStorage.getItem("cart"));$&&$.find(_=>_._id===e)&&u.setAttribute("disabled","true"),u.dataset.idcards=e,p.textContent=s,f.textContent=o,y.textContent=a,S.textContent=r,N.textContent=n,J.textContent=`$${i}`,L.src=d,L.alt=s}function V(t){const e=t.map(({_id:s,category:o,img:a,name:r,size:n,popularity:i})=>{o.includes("_")&&(o=o.replace(/_/g," "));let d="shop",u="";const p=JSON.parse(localStorage.getItem("cart"));return p&&p.find(y=>y._id===s)&&(d="check",u="popular-icon-back"),`
      <div class="popular-card" data-idcarts="${s}">
      <div class="popular-background">
            <img src="${a}" alt="${r}" class="popular-img">
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
              <span class="popular-word">${n}</span></p></li>
              <li>
            <p class="popular-text">Popularity:
              <span class="popular-word">${i}</span></p></li></ul>
          </div>
  
            <div class="popularname-price">
          </div>
          <button id="${s}" class="popular-icon-cont">
              <svg class="popular-icon ${u}" width="20" height="20">
                <use href="${g}#icon-${d}"></use>
              </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
`}).join("");c.PopularDiv.innerHTML=e}I();async function I(){try{const e=(await M()).data;V(e)}catch{}}c.PopularDiv.addEventListener("click",z);async function z(t){t.preventDefault();const{target:e}=t,s=e.closest(".popular-card");if(!s||e.closest(".popular-icon-cont"))return;const a=s.dataset.idcarts;try{const r=await x(a);k(r),c.modalWindowId.classList.remove("is-hidden-card")}catch(r){console.log(r)}}const b={keyword:null},l={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",A(v,2500));async function F(){try{const e=(await B()).map(o=>{let a;return o.includes("_")?a=o.replace(/_/g," "):a=o,`<option value="${o}">${a}</option>`}).join("");c.categor.innerHTML+=e;const s=document.createElement("option");s.value="Show all",s.textContent="Show all",c.categor.prepend(s)}catch(t){console.log(t)}}async function v(){const t=U();l.limit=t;const e=JSON.parse(localStorage.getItem("filters"));e&&(l.keyword=e.keyword,l.category=e.category,l.page=e.page,localStorage.setItem("filters",JSON.stringify(l)),E());try{const o=(await D(l.keyword,l.category,"","","",l.page,t)).results;W(o)}catch(s){console.log(s)}}F();v();c.form&&(c.form.addEventListener("input",j),c.form.addEventListener("submit",R));async function j(){const t=c.filtersInput.value;b.keyword=t,t===""&&(b.keyword=null),localStorage.setItem("keyword",JSON.stringify(b))}async function R(t){t.preventDefault();const e=c.filtersInput.value;l.keyword=e,e===""&&(l.keyword=null);const s=c.filtersCategories.value;l.category=s,s===""&&(l.category=null),s==="Show all"&&(l.category=null),localStorage.setItem("filters",JSON.stringify(l)),v(),t.target.reset()}function E(){try{const t=JSON.parse(localStorage.getItem("keyword"));c.filtersInput&&(c.filtersInput.value=t.keyword||"")}catch{return}}E();function U(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function G(t){I();const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${g}#icon-check`),s.setAttribute("disabled","true");const a=s.dataset.idcards,r=localStorage.getItem("cart"),n=JSON.parse(r);if(n){const i=n.find(d=>d._id===a);if(i){i.quantity+=1,localStorage.setItem("cart",JSON.stringify(n));return}n.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),h();return}if(!n){const i=[];i.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),h()}}c.listCards.addEventListener("click",G);const K=document.querySelector(".shop-modal-close-btn");c.listCards.addEventListener("click",Q);async function Q(t){t.preventDefault();const{target:e}=t,s=e.closest(".filt-div-card");if(!s||e.closest(".filt-btn-card"))return;const a=s.dataset.idcarts;try{const r=await x(a);k(r),c.modalWindowId.classList.remove("is-hidden-card")}catch(r){console.log(r)}}K.addEventListener("click",O);function O(){c.modalWindowId.classList.add("is-hidden-card")}function X(t){const{target:e}=t,s=e.closest(".shop-btn-card");if(v(),I(),!s)return;const o=s.dataset.idcards;O();const a=localStorage.getItem("cart"),r=JSON.parse(a);if(r){const i=r.find(d=>d._id===o);if(i){i.quantity+=1,localStorage.setItem("cart",JSON.stringify(r));return}r.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),h();return}const n=[];n.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),h()}c.addCartBtn.addEventListener("click",X);const Y=document.getElementById("id-modal-card");function Z(t){const e=document.createElement("div");return e.classList.add("product-card"),e.dataset.idcarts=t._id,e.addEventListener("click",()=>{k(t),Y.classList.remove("is-hidden-card")}),e.innerHTML=`
  <div class="product-background">
        
  <div class="discount-label">
  <svg class="discount-label-icon" width="60" height="60">
    <use href="${g}#icon-discount"></use>
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
      <use href="${g}#icon-shop"></use>
    </svg>
  </div>
  </div>
  </div>
  `,e}function tt(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}H().then(t=>t.data).then(t=>{const e=tt(t,2),s=document.getElementById("discountContainer");e.forEach(o=>{s.appendChild(Z(o))})}).catch(t=>{console.error(t.message)});const et=document.querySelector(".footer-form"),m=document.querySelector(".modal-backdrop"),q=document.querySelector(".modal-subscribe-container"),P=document.querySelector(".modal-unsubscription-container"),st=document.querySelectorAll(".modal-close-btn"),ot=document.querySelector(".modal-container"),w=document.querySelector(".footer-btn-to-top"),rt=document.querySelector(".footer-container"),C=document.querySelector(".loader");ot.classList.add("is-hidden");const ct=t=>{t.forEach(e=>{e.isIntersecting?w.style.display="block":w.style.display="none"})};w.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const at=new IntersectionObserver(ct,{root:null,threshold:.5});at.observe(rt);et.addEventListener("submit",nt);st.forEach(t=>{t.addEventListener("click",it)});function nt(t){t.preventDefault();const s={email:document.querySelector(".footer-form-email").value};C.classList.remove("is-hidden"),window.addEventListener("click",o=>{o.target===m&&m.classList.add("is-hidden")}),T(s).then(o=>(C.classList.add("is-hidden"),m.classList.remove("is-hidden"),P.classList.add("is-hidden"),q.classList.remove("is-hidden"),console.log(o.data),o.json())).catch(o=>(C.classList.add("is-hidden"),o.response&&o.response.status===409?(m.classList.remove("is-hidden"),P.classList.remove("is-hidden"),q.classList.add("is-hidden")):console.log(o),o.message)),t.target.reset()}function it(t){t.preventDefault(),m.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
