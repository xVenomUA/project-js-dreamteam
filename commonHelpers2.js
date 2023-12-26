import{i as p,A as B,a as H,g as z,b as V,c as W,p as D}from"./assets/icon-1d80e7c0.js";import{l as F}from"./assets/vendor-e21ff9e3.js";const i={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count")};function u(){const t=JSON.parse(localStorage.getItem("cart"));t?(i.countHeader.textContent=`(${t.length})`,console.log(t)):i.countHeader.textContent="(0)"}u();function j(t){const e=t.map(({_id:s,category:a,img:r,name:n,size:o,popularity:c,price:d})=>{a.includes("_")&&(a=a.replace(/_/g," "));let f="",h="shop";const y=JSON.parse(localStorage.getItem("cart"));return y&&y.find(v=>v._id===s)&&(h="check",f="disabled"),`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${r}" alt="${n}" width="140">
  </div>
  <h2 class="filt-h-name">${n}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${a}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${o}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${c}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${d}</h2>
    <button class="filt-btn-card" data-idcards="${s}" type="submit" ${f}>
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${p}#icon-${h}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");i.filtercard.innerHTML=e,i.filtercard.innerHTML===""&&(i.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}const E=document.querySelector(".pagination-list"),I=JSON.parse(localStorage.getItem("totalPage")),N=JSON.parse(localStorage.getItem("filters")).page;console.log(I);function L(t,e){let s="",a=t-2,r=e-2,n=e;if(t<5)for(let o=1;o<=t;o++)s+=`<li class="pagination-item"><button class="pagination-number ${o===n?"active":""}">${o}</button></li>`;else if(e>3)for(let o=r;o<=a;o++)s+=`<li class="pagination-item"><button class="pagination-number ${o===n?"active":""}">${o}</button></li>`;else for(let o=1;o<=5;o++)s+=`<li class="pagination-item"><button class="pagination-number ${o===n?"active":""}">${o}</button></li>`;E.innerHTML=s}async function R(t){if(t.target.classList.contains("pagination-arrow")||t.target.classList.contains("pagination-number")){const e=t.target.textContent,s=JSON.parse(localStorage.getItem("filters"));s.page=e,localStorage.setItem("filters",JSON.stringify(s)),m(),L(I,e)}else return}E.addEventListener("click",R);const S={keyword:null},l={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",F(m,2500));async function U(){try{const e=(await B()).map(a=>{let r;return a.includes("_")?r=a.replace(/_/g," "):r=a,`<option value="${a}">${r}</option>`}).join("");i.categor.innerHTML+=e;const s=document.createElement("option");s.value="Show all",s.textContent="Show all",i.categor.prepend(s)}catch(t){console.log(t)}}async function m(){const t=Q();l.limit=t;const e=JSON.parse(localStorage.getItem("filters"));e&&(l.keyword=e.keyword,l.category=e.category,l.page=e.page,localStorage.setItem("filters",JSON.stringify(l)),x());try{const s=await H(l.keyword,l.category,"","","",l.page,t);console.log(s.totalPages),localStorage.setItem("totalPage",JSON.stringify(s.totalPages));const a=s.results;j(a)}catch(s){console.log(s)}}U();m();L(I,N);i.form&&(i.form.addEventListener("input",G),i.form.addEventListener("submit",K));async function G(){const t=i.filtersInput.value;S.keyword=t,t===""&&(S.keyword=null),localStorage.setItem("keyword",JSON.stringify(S))}async function K(t){t.preventDefault();const e=i.filtersInput.value;l.keyword=e,e===""&&(l.keyword=null);const s=i.filtersCategories.value;l.category=s,s===""&&(l.category=null),s==="Show all"&&(l.category=null),l.page=1,localStorage.setItem("filters",JSON.stringify(l)),m();const a=JSON.parse(localStorage.getItem("totalPage"));L(a,N),t.target.reset()}function x(){try{const t=JSON.parse(localStorage.getItem("keyword"));i.filtersInput&&(i.filtersInput.value=t.keyword||"")}catch{return}}x();function Q(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function X(t){const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${p}#icon-check`),s.setAttribute("disabled","true");const r=s.dataset.idcards,n=localStorage.getItem("cart"),o=JSON.parse(n);if(o){const c=o.find(d=>d._id===r);if(c){c.quantity+=1,localStorage.setItem("cart",JSON.stringify(o));return}o.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(o)),u();return}if(!o){const c=[];c.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(c)),u()}}i.listCards.addEventListener("click",X);function $(t){const{_id:e,name:s,category:a,size:r,popularity:n,desc:o,price:c,img:d}=t,f=document.querySelector(".shop-btn-card"),h=document.querySelector(".shop-h-name"),y=document.querySelector(".shop-span-category"),w=document.querySelector(".shop-span-size"),v=document.querySelector(".shop-span-popularity"),M=document.querySelector(".shop-text-discription"),A=document.querySelector(".shop-h-price"),k=document.querySelector(".shop-img"),q=JSON.parse(localStorage.getItem("cart"));q&&q.find(T=>T._id===e)&&f.setAttribute("disabled","true"),f.dataset.idcards=e,h.textContent=s,y.textContent=a,w.textContent=r,v.textContent=n,M.textContent=o,A.textContent=`$${c}`,k.src=d,k.alt=s}const J=document.getElementById("id-modal-card"),Y=document.querySelector(".shop-modal-close-btn");i.listCards.addEventListener("click",Z);async function Z(t){t.preventDefault();const{target:e}=t,s=e.closest(".filt-div-card");if(!s||e.closest(".filt-btn-card"))return;const r=s.dataset.idcarts;try{const n=await z(r);$(n),J.classList.remove("is-hidden-card")}catch(n){console.log(n)}}Y.addEventListener("click",_);function _(){J.classList.add("is-hidden-card")}function tt(t){const{target:e}=t,s=e.closest(".shop-btn-card");if(m(),!s)return;const a=s.dataset.idcards;_();const r=localStorage.getItem("cart"),n=JSON.parse(r);if(n){const c=n.find(d=>d._id===a);if(c){c.quantity+=1,localStorage.setItem("cart",JSON.stringify(n));return}n.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),u();return}const o=[];o.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(o)),u()}i.addCartBtn.addEventListener("click",tt);const et=document.getElementById("id-modal-card");function st(t){t.category.includes("_")&&(t.category=t.category.replace(/_/g," "));const e=document.createElement("div");return e.classList.add("popular-card"),e.setAttribute("data-productlist-id",t._id),e.addEventListener("click",()=>{$(t),et.classList.remove("is-hidden-card")}),e.innerHTML=`
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
  `,e}function at(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}V().then(t=>t.data).then(t=>{const e=at(t,5),s=document.getElementById("popularContainer");e.forEach(a=>{s.append(st(a))})}).catch(t=>{console.error(t.message)});function ot(t){const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${p}#icon-check`),s.setAttribute("disabled","true");const r=s.dataset.idcards,n=localStorage.getItem("cart"),o=JSON.parse(n);if(o){const c=o.find(d=>d._id===r);if(c){c.quantity+=1,localStorage.setItem("cart",JSON.stringify(o));return}o.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(o)),u();return}if(!o){const c=[];c.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(c)),u()}}i.listCards.addEventListener("click",ot);const nt=document.getElementById("id-modal-card");function rt(t){const e=document.createElement("div");return e.classList.add("product-card"),e.dataset.idcarts=t._id,e.addEventListener("click",()=>{$(t),nt.classList.remove("is-hidden-card")}),e.innerHTML=`
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
  `,e}function it(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}W().then(t=>t.data).then(t=>{const e=it(t,2),s=document.getElementById("discountContainer");e.forEach(a=>{s.appendChild(rt(a))})}).catch(t=>{console.error(t.message)});const ct=document.querySelector(".footer-form"),g=document.querySelector(".modal-backdrop"),P=document.querySelector(".modal-subscribe-container"),O=document.querySelector(".modal-unsubscription-container"),lt=document.querySelectorAll(".modal-close-btn"),dt=document.querySelector(".modal-container"),C=document.querySelector(".footer-btn-to-top"),ut=document.querySelector(".footer-container"),b=document.querySelector(".loader");dt.classList.add("is-hidden");const pt=t=>{t.forEach(e=>{e.isIntersecting?C.style.display="block":C.style.display="none"})};C.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const ft=new IntersectionObserver(pt,{root:null,threshold:.5});ft.observe(ut);ct.addEventListener("submit",gt);lt.forEach(t=>{t.addEventListener("click",mt)});function gt(t){t.preventDefault();const s={email:document.querySelector(".footer-form-email").value};b.classList.remove("is-hidden"),window.addEventListener("click",a=>{a.target===g&&g.classList.add("is-hidden")}),D(s).then(a=>(b.classList.add("is-hidden"),g.classList.remove("is-hidden"),O.classList.add("is-hidden"),P.classList.remove("is-hidden"),console.log(a.data),a.json())).catch(a=>(b.classList.add("is-hidden"),a.response&&a.response.status===409?(g.classList.remove("is-hidden"),O.classList.remove("is-hidden"),P.classList.add("is-hidden")):console.log(a),a.message)),t.target.reset()}function mt(t){t.preventDefault(),g.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
