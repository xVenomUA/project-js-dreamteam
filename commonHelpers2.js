import{i as m,a as M,g as O,A,b as B,c as D,p as H}from"./assets/icon-675d021e.js";import{l as T}from"./assets/vendor-e21ff9e3.js";const c={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count"),PopularDiv:document.getElementById("popularContainer"),modalWindowId:document.getElementById("id-modal-card")};function f(){const t=JSON.parse(localStorage.getItem("cart"));t?c.countHeader.textContent=`(${t.length})`:c.countHeader.textContent="(0)"}f();function W(t){const s=t.map(({_id:e,category:o,img:n,name:r,size:i,popularity:a,price:l})=>{o.includes("_")&&(o=o.replace(/_/g," "));let u="",p="shop";const g=JSON.parse(localStorage.getItem("cart"));return g&&g.find(S=>S._id===e)&&(p="check",u="disabled"),`<div class="filt-div-card" data-idcarts="${e}">
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
    <h2 class="filt-h-price">$${l}</h2>
    <button class="filt-btn-card" data-idcards="${e}" type="submit" ${u}>
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${m}#icon-${p}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");c.filtercard.innerHTML=s,c.filtercard.innerHTML===""&&(c.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}function k(t){const{_id:s,name:e,category:o,size:n,popularity:r,desc:i,price:a,img:l}=t,u=document.querySelector(".shop-btn-card"),p=document.querySelector(".shop-h-name"),g=document.querySelector(".shop-span-category"),v=document.querySelector(".shop-span-size"),S=document.querySelector(".shop-span-popularity"),N=document.querySelector(".shop-text-discription"),J=document.querySelector(".shop-h-price"),L=document.querySelector(".shop-img"),$=JSON.parse(localStorage.getItem("cart"));$&&$.find(_=>_._id===s)&&u.setAttribute("disabled","true"),u.dataset.idcards=s,p.textContent=e,g.textContent=o,v.textContent=n,S.textContent=r,N.textContent=i,J.textContent=`$${a}`,L.src=l,L.alt=e}function V(t){const s=t.map(({_id:e,category:o,img:n,name:r,size:i,popularity:a})=>{o.includes("_")&&(o=o.replace(/_/g," "));let l="shop",u="";const p=JSON.parse(localStorage.getItem("cart"));return p&&p.find(v=>v._id===e)&&(l="check",u="popular-icon-back"),`
      <div class="popular-card" data-idcarts="${e}">
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
              <span class="popular-word">${i}</span></p></li>
              <li>
            <p class="popular-text">Popularity:
              <span class="popular-word">${a}</span></p></li></ul>
          </div>
  
            <div class="popularname-price">
          </div>
          <button data-idcarts="${e}" class="popular-icon-cont">
              <svg class="popular-icon ${u}" width="20" height="20">
                <use href="${m}#icon-${l}" class="filt-use"></use>
              </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
`}).join("");c.PopularDiv.innerHTML=s}I();async function I(){try{const s=(await M()).data;V(s)}catch{}}c.PopularDiv.addEventListener("click",z);async function z(t){t.preventDefault();const{target:s}=t,e=s.closest(".popular-card");if(!e||s.closest(".popular-icon-cont"))return;const n=e.dataset.idcarts;try{const r=await O(n);k(r),c.modalWindowId.classList.remove("is-hidden-card")}catch(r){console.log(r)}}function F(t){y();const{target:s}=t,e=s.closest(".popular-icon-cont");if(!e)return;e.querySelector(".filt-use").setAttribute("href",`${m}#icon-check`),e.setAttribute("disabled","true"),e.querySelector(".popular-icon ").classList.add("popular-icon-back");const r=e.dataset.idcarts,i=localStorage.getItem("cart"),a=JSON.parse(i);if(a){const l=a.find(u=>u._id===r);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(a));return}a.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),f();return}if(!a){const l=[];l.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),f()}}c.PopularDiv.addEventListener("click",F);const b={keyword:null},d={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",T(y,2500));async function j(){try{const s=(await A()).map(o=>{let n;return o.includes("_")?n=o.replace(/_/g," "):n=o,`<option value="${o}">${n}</option>`}).join("");c.categor.innerHTML+=s;const e=document.createElement("option");e.value="Show all",e.textContent="Show all",c.categor.prepend(e)}catch(t){console.log(t)}}async function y(){const t=G();d.limit=t;const s=JSON.parse(localStorage.getItem("filters"));s&&(d.keyword=s.keyword,d.category=s.category,d.page=s.page,localStorage.setItem("filters",JSON.stringify(d)),x());try{const o=(await B(d.keyword,d.category,"","","",d.page,t)).results;W(o)}catch(e){console.log(e)}}j();y();c.form&&(c.form.addEventListener("input",R),c.form.addEventListener("submit",U));async function R(){const t=c.filtersInput.value;b.keyword=t,t===""&&(b.keyword=null),localStorage.setItem("keyword",JSON.stringify(b))}async function U(t){t.preventDefault();const s=c.filtersInput.value;d.keyword=s,s===""&&(d.keyword=null);const e=c.filtersCategories.value;d.category=e,e===""&&(d.category=null),e==="Show all"&&(d.category=null),localStorage.setItem("filters",JSON.stringify(d)),y(),t.target.reset()}function x(){try{const t=JSON.parse(localStorage.getItem("keyword"));c.filtersInput&&(c.filtersInput.value=t.keyword||"")}catch{return}}x();function G(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function K(t){I();const{target:s}=t,e=s.closest(".filt-btn-card");if(!e)return;e.querySelector(".filt-use").setAttribute("href",`${m}#icon-check`),e.setAttribute("disabled","true");const n=e.dataset.idcards,r=localStorage.getItem("cart"),i=JSON.parse(r);if(i){const a=i.find(l=>l._id===n);if(a){a.quantity+=1,localStorage.setItem("cart",JSON.stringify(i));return}i.push({_id:n,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),f();return}if(!i){const a=[];a.push({_id:n,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),f()}}c.listCards.addEventListener("click",K);const Q=document.querySelector(".shop-modal-close-btn");c.listCards.addEventListener("click",X);async function X(t){t.preventDefault();const{target:s}=t,e=s.closest(".filt-div-card");if(!e||s.closest(".filt-btn-card"))return;const n=e.dataset.idcarts;try{const r=await O(n);k(r),c.modalWindowId.classList.remove("is-hidden-card")}catch(r){console.log(r)}}Q.addEventListener("click",E);function E(){c.modalWindowId.classList.add("is-hidden-card")}function Y(t){const{target:s}=t,e=s.closest(".shop-btn-card");if(y(),I(),!e)return;const o=e.dataset.idcards;E();const n=localStorage.getItem("cart"),r=JSON.parse(n);if(r){const a=r.find(l=>l._id===o);if(a){a.quantity+=1,localStorage.setItem("cart",JSON.stringify(r));return}r.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),f();return}const i=[];i.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),f()}c.addCartBtn.addEventListener("click",Y);const Z=document.getElementById("id-modal-card");function tt(t){const s=document.createElement("div");return s.classList.add("product-card"),s.dataset.idcarts=t._id,s.addEventListener("click",()=>{k(t),Z.classList.remove("is-hidden-card")}),s.innerHTML=`
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
  `,s}function et(t,s){return t.sort(()=>.5-Math.random()).slice(0,s)}D().then(t=>t.data).then(t=>{const s=et(t,2),e=document.getElementById("discountContainer");s.forEach(o=>{e.appendChild(tt(o))})}).catch(t=>{console.error(t.message)});const st=document.querySelector(".footer-form"),h=document.querySelector(".modal-backdrop"),q=document.querySelector(".modal-subscribe-container"),P=document.querySelector(".modal-unsubscription-container"),ot=document.querySelectorAll(".modal-close-btn"),rt=document.querySelector(".modal-container"),w=document.querySelector(".footer-btn-to-top"),ct=document.querySelector(".footer-container"),C=document.querySelector(".loader");rt.classList.add("is-hidden");const at=t=>{t.forEach(s=>{s.isIntersecting?w.style.display="block":w.style.display="none"})};w.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const nt=new IntersectionObserver(at,{root:null,threshold:.5});nt.observe(ct);st.addEventListener("submit",it);ot.forEach(t=>{t.addEventListener("click",lt)});function it(t){t.preventDefault();const e={email:document.querySelector(".footer-form-email").value};C.classList.remove("is-hidden"),window.addEventListener("click",o=>{o.target===h&&h.classList.add("is-hidden")}),H(e).then(o=>(C.classList.add("is-hidden"),h.classList.remove("is-hidden"),P.classList.add("is-hidden"),q.classList.remove("is-hidden"),console.log(o.data),o.json())).catch(o=>(C.classList.add("is-hidden"),o.response&&o.response.status===409?(h.classList.remove("is-hidden"),P.classList.remove("is-hidden"),q.classList.add("is-hidden")):console.log(o),o.message)),t.target.reset()}function lt(t){t.preventDefault(),h.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
