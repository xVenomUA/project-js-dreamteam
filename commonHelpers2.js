import{i as f,A as J,a as _,g as M,b as T,c as A,p as B}from"./assets/icon-6c2a3a51.js";import"./assets/vendor-2b35cb0d.js";const r={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count")};function m(){const t=JSON.parse(localStorage.getItem("cart"));t?(r.countHeader.textContent=`(${t.length})`,console.log(t)):r.countHeader.textContent="(0)"}m();function H(t){const o=t.map(({_id:e,category:s,img:c,name:a,size:i,popularity:l,price:d})=>{s.includes("_")&&(s=s.replace(/_/g," "));let u="",g="shop";const h=JSON.parse(localStorage.getItem("cart"));return h&&h.find(v=>v._id===e)&&(g="check",u="disabled"),`<div class="filt-div-card" data-idcarts="${e}">
      <div class="filt-div-img">
  <img class="filt-img" src="${c}" alt="${a}" width="140">
  </div>
  <h2 class="filt-h-name">${a}</h2>
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
    <button class="filt-btn-card" data-idcards="${e}" type="submit" ${u}>
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${f}#icon-${g}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");r.filtercard.innerHTML=o,r.filtercard.innerHTML===""&&(r.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}const S={keyword:null},n={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",y);async function z(){try{const o=(await _()).map(s=>{let c;return s.includes("_")?c=s.replace(/_/g," "):c=s,`<option value="${s}">${c}</option>`}).join("");r.categor.innerHTML+=o;const e=document.createElement("option");e.value="Show all",e.textContent="Show all",r.categor.prepend(e)}catch(t){console.log(t)}}async function y(){const t=F();n.limit=t;const o=JSON.parse(localStorage.getItem("filters"));o&&(n.keyword=o.keyword,n.category=o.category,n.page=o.page,localStorage.setItem("filters",JSON.stringify(n)),I());try{const s=(await J(n.keyword,n.category,"","","",n.page,t)).results;H(s)}catch(e){console.log(e)}}z();y();r.form&&(r.form.addEventListener("input",V),r.form.addEventListener("submit",D));async function V(){const t=r.filtersInput.value;S.keyword=t,t===""&&(S.keyword=null),localStorage.setItem("keyword",JSON.stringify(S))}async function D(t){t.preventDefault();const o=r.filtersInput.value;n.keyword=o,o===""&&(n.keyword=null);const e=r.filtersCategories.value;n.category=e,e===""&&(n.category=null),e==="Show all"&&(n.category=null),localStorage.setItem("filters",JSON.stringify(n)),y(),t.target.reset()}function I(){try{const t=JSON.parse(localStorage.getItem("keyword"));r.filtersInput&&(r.filtersInput.value=t.keyword||"")}catch{return}}I();function F(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function W(t){const{target:o}=t,e=o.closest(".filt-btn-card");if(!e)return;e.querySelector(".filt-use").setAttribute("href",`${f}#icon-check`),e.setAttribute("disabled","true");const c=e.dataset.idcards,a=localStorage.getItem("cart"),i=JSON.parse(a);if(i){const l=i.find(d=>d._id===c);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(i));return}i.push({_id:c,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),m();return}if(!i){const l=[];l.push({_id:c,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),m()}}r.listCards.addEventListener("click",W);function j(t){const{_id:o,name:e,category:s,size:c,popularity:a,desc:i,price:l,img:d}=t,u=document.querySelector(".shop-btn-card"),g=document.querySelector(".shop-h-name"),h=document.querySelector(".shop-span-category"),w=document.querySelector(".shop-span-size"),v=document.querySelector(".shop-span-popularity"),O=document.querySelector(".shop-text-discription"),E=document.querySelector(".shop-h-price"),$=document.querySelector(".shop-img"),L=JSON.parse(localStorage.getItem("cart"));L&&L.find(N=>N._id===o)&&u.setAttribute("disabled","true"),u.dataset.idcards=o,g.textContent=e,h.textContent=s,w.textContent=c,v.textContent=a,O.textContent=i,E.textContent=`$${l}`,$.src=d,$.alt=e}const P=document.getElementById("id-modal-card"),R=document.querySelector(".shop-modal-close-btn");r.listCards.addEventListener("click",U);async function U(t){t.preventDefault();const{target:o}=t,e=o.closest(".filt-div-card");if(!e||o.closest(".filt-btn-card"))return;const c=e.dataset.idcarts;try{const a=await M(c);j(a),P.classList.remove("is-hidden-card")}catch(a){console.log(a)}}R.addEventListener("click",x);function x(){P.classList.add("is-hidden-card")}function G(t){const{target:o}=t,e=o.closest(".shop-btn-card");if(y(),!e)return;const s=e.dataset.idcards;x();const c=localStorage.getItem("cart"),a=JSON.parse(c);if(a){const l=a.find(d=>d._id===s);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(a));return}a.push({_id:s,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),m();return}const i=[];i.push({_id:s,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),m()}r.addCartBtn.addEventListener("click",G);function K(t){return t.category.includes("_")&&(t.category=t.category.replace(/_/g," ")),`
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
                <use href="${f}#icon-shop"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
    `}function Q(t,o){return t.sort(()=>.5-Math.random()).slice(0,o)}T().then(t=>t.data).then(t=>{const o=Q(t,5),e=document.getElementById("popularContainer");o.forEach(s=>{e.innerHTML+=K(s)})}).catch(t=>{console.error(t.message)});function X(t){return`
      <div class="product-card">
        <div class="product-background">
        
        <div class="discount-label">
        <svg class="discount-label-icon" width="60" height="60">
          <use href="${f}#icon-discount"></use>
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
            <use href="${f}#icon-shop"></use>
          </svg>
        </div>
        </div>

        </div>
      </div>
    `}function Y(t,o){return t.sort(()=>.5-Math.random()).slice(0,o)}A().then(t=>t.data).then(t=>{const o=Y(t,2),e=document.getElementById("discountContainer");o.forEach(s=>{e.innerHTML+=X(s)})}).catch(t=>{console.error(t.message)});const Z=document.querySelector(".footer-form"),p=document.querySelector(".modal-backdrop"),k=document.querySelector(".modal-subscribe-container"),q=document.querySelector(".modal-unsubscription-container"),tt=document.querySelectorAll(".modal-close-btn"),et=document.querySelector(".modal-container"),C=document.querySelector(".footer-btn-to-top"),st=document.querySelector(".footer-container"),b=document.querySelector(".loader");et.classList.add("is-hidden");const ot=t=>{t.forEach(o=>{o.isIntersecting?C.style.display="block":C.style.display="none"})};C.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const rt=new IntersectionObserver(ot,{root:null,threshold:.5});rt.observe(st);Z.addEventListener("submit",at);tt.forEach(t=>{t.addEventListener("click",ct)});function at(t){t.preventDefault();const e={email:document.querySelector(".footer-form-email").value};b.classList.remove("is-hidden"),window.addEventListener("click",s=>{s.target===p&&p.classList.add("is-hidden")}),B(e).then(s=>(b.classList.add("is-hidden"),p.classList.remove("is-hidden"),q.classList.add("is-hidden"),k.classList.remove("is-hidden"),console.log(s.data),s.json())).catch(s=>(b.classList.add("is-hidden"),s.response&&s.response.status===409?(p.classList.remove("is-hidden"),q.classList.remove("is-hidden"),k.classList.add("is-hidden")):console.log(s),s.message)),t.target.reset()}function ct(t){t.preventDefault(),p.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
