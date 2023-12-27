import{i as m,a as T,g as x,A,b as H,c as D,p as W}from"./assets/icon-ede4d169.js";import{l as V}from"./assets/vendor-611745ce.js";const i={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count"),PopularDiv:document.getElementById("popularContainer"),modalWindowId:document.getElementById("id-modal-card")};function f(){const t=JSON.parse(localStorage.getItem("cart"));t?i.countHeader.textContent=`(${t.length})`:i.countHeader.textContent="(0)"}f();function z(t){const e=t.map(({_id:s,category:o,img:c,name:a,size:n,popularity:r,price:l})=>{o.includes("_")&&(o=o.replace(/_/g," "));let u="",p="shop";const g=JSON.parse(localStorage.getItem("cart"));return g&&g.find(S=>S._id===s)&&(p="check",u="disabled"),`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${c}" alt="${a}" width="140">
  </div>
  <h2 class="filt-h-name">${a}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${o}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${n}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${r}</span></p>
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
    </div>`)}function w(t){const{_id:e,name:s,category:o,size:c,popularity:a,desc:n,price:r,img:l}=t,u=document.querySelector(".shop-btn-card"),p=document.querySelector(".shop-h-name"),g=document.querySelector(".shop-span-category"),v=document.querySelector(".shop-span-size"),S=document.querySelector(".shop-span-popularity"),_=document.querySelector(".shop-text-discription"),M=document.querySelector(".shop-h-price"),L=document.querySelector(".shop-img"),q=JSON.parse(localStorage.getItem("cart"));let b={};q&&(b=q.find(B=>B._id===e)??!1,console.log(b)),b&&u.setAttribute("disabled","true"),u.dataset.idcards=e,p.textContent=s,g.textContent=o,v.textContent=c,S.textContent=a,_.textContent=n,M.textContent=`$${r}`,L.src=l,L.alt=s}function F(t){const e=t.map(({_id:s,category:o,img:c,name:a,size:n,popularity:r})=>{o.includes("_")&&(o=o.replace(/_/g," "));let l="shop",u="";const p=JSON.parse(localStorage.getItem("cart"));return p&&p.find(v=>v._id===s)&&(l="check",u="popular-icon-back"),`
      <div class="popular-card" data-idcarts="${s}">
      <div class="popular-background">
            <img src="${c}" alt="${a}" class="popular-img">
          </div>
        
        <div class="popular-descript">
          <div class="popular-descript-text">
            <p class="popular-name">${a}</p>
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
              <span class="popular-word">${r}</span></p></li></ul>
          </div>
  
            <div class="popularname-price">
          </div>
          <button data-idcarts="${s}" class="popular-icon-cont ${u}">
              <svg class="popular-icon" width="20" height="20">
                <use href="${m}#icon-${l}" class="filt-use"></use>
              </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
`}).join("");i.PopularDiv.innerHTML=e}I();async function I(){try{const e=(await T()).data;F(e)}catch{}}i.PopularDiv.addEventListener("click",j);async function j(t){t.preventDefault();const{target:e}=t,s=e.closest(".popular-card");if(!s||e.closest(".popular-icon-cont"))return;const c=s.dataset.idcarts;try{const a=await x(c);w(a),i.modalWindowId.classList.remove("is-hidden-card")}catch(a){console.log(a)}}function R(t){y();const{target:e}=t,s=e.closest(".popular-icon-cont");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${m}#icon-check`),s.setAttribute("disabled","true"),s.classList.add("popular-icon-back");const a=s.dataset.idcarts,n=localStorage.getItem("cart"),r=JSON.parse(n);if(r){const l=r.find(u=>u._id===a);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(r));return}r.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),f();return}if(!r){const l=[];l.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),f()}}i.PopularDiv.addEventListener("click",R);const C={keyword:null},d={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",V(y,2500));async function U(){try{const e=(await A()).map(o=>{let c;return o.includes("_")?c=o.replace(/_/g," "):c=o,`<option value="${o}">${c}</option>`}).join("");i.categor.innerHTML+=e;const s=document.createElement("option");s.value="Show all",s.textContent="Show all",i.categor.prepend(s)}catch(t){console.log(t)}}async function y(){const t=Q();d.limit=t;const e=JSON.parse(localStorage.getItem("filters"));e&&(d.keyword=e.keyword,d.category=e.category,d.page=e.page,localStorage.setItem("filters",JSON.stringify(d)),E());try{const o=(await H(d.keyword,d.category,"","","",d.page,t)).results;z(o)}catch(s){console.log(s)}}U();y();i.form&&(i.form.addEventListener("input",G),i.form.addEventListener("submit",K));async function G(){const t=i.filtersInput.value;C.keyword=t,t===""&&(C.keyword=null),localStorage.setItem("keyword",JSON.stringify(C))}async function K(t){t.preventDefault();const e=i.filtersInput.value;d.keyword=e,e===""&&(d.keyword=null);const s=i.filtersCategories.value;d.category=s,s===""&&(d.category=null),s==="Show all"&&(d.category=null),localStorage.setItem("filters",JSON.stringify(d)),y(),t.target.reset()}function E(){try{const t=JSON.parse(localStorage.getItem("keyword"));i.filtersInput&&(i.filtersInput.value=t.keyword||"")}catch{return}}E();function Q(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function X(t){I();const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${m}#icon-check`),s.setAttribute("disabled","true");const c=s.dataset.idcards,a=localStorage.getItem("cart"),n=JSON.parse(a);if(n){const r=n.find(l=>l._id===c);if(r){r.quantity+=1,localStorage.setItem("cart",JSON.stringify(n));return}n.push({_id:c,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),f();return}if(!n){const r=[];r.push({_id:c,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),f()}}i.listCards.addEventListener("click",X);const N=document.querySelector(".pagination ul");let Y=10,Z=1;const tt=document.querySelector(".pagination");N.innerHTML=et(Y,Z);function et(t,e){let s="",o,c=e-1,a=e+1;e>1&&(s+=`<li class="btn prev" onclick="createPagination(totalPages, ${e-1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`),e>2&&(s+='<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>',e>3&&(s+='<li class="dots"><span>...</span></li>')),e==t?c=c-2:e==t-1&&(c=c-1),e==1?a=a+2:e==2&&(a=a+1);for(var n=c;n<=a;n++)n>t||(n==0&&(n=n+1),e==n?o="active":o="",s+=`<li class="numb ${o}" onclick="createPagination(totalPages, ${n})"><span>${n}</span></li>`);return e<t-1&&(e<t-2&&(s+='<li class="dots"><span>...</span></li>'),s+=`<li class="last numb" onclick="createPagination(totalPages, ${t})"><span>${t}</span></li>`),e<t&&(s+=`<li class="btn next" onclick="createPagination(totalPages, ${e+1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`),t===1&&(tt.style.display="none"),N.innerHTML=s,s}const st=document.getElementById("id-modal-card");function ot(t){const e=document.createElement("div");return e.classList.add("product-card"),e.dataset.idcarts=t._id,e.addEventListener("click",()=>{w(t),st.classList.remove("is-hidden-card")}),e.innerHTML=`
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
  `,e}function at(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}D().then(t=>t.data).then(t=>{const e=at(t,2),s=document.getElementById("discountContainer");e.forEach(o=>{s.appendChild(ot(o))})}).catch(t=>{console.error(t.message)});const nt=document.querySelector(".shop-modal-close-btn");i.listCards.addEventListener("click",ct);async function ct(t){t.preventDefault();const{target:e}=t,s=e.closest(".filt-div-card");if(!s||e.closest(".filt-btn-card"))return;const c=s.dataset.idcarts;try{const a=await x(c);w(a),i.modalWindowId.classList.remove("is-hidden-card")}catch(a){console.log(a)}}nt.addEventListener("click",J);function J(){i.modalWindowId.classList.add("is-hidden-card")}function it(t){const{target:e}=t,s=e.closest(".shop-btn-card");if(y(),I(),!s)return;const o=s.dataset.idcards;J();const c=localStorage.getItem("cart"),a=JSON.parse(c);if(a){const r=a.find(l=>l._id===o);if(r){r.quantity+=1,localStorage.setItem("cart",JSON.stringify(a));return}a.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),f();return}const n=[];n.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),f()}i.addCartBtn.addEventListener("click",it);const rt=document.querySelector(".footer-form"),h=document.querySelector(".modal-backdrop"),P=document.querySelector(".modal-subscribe-container"),O=document.querySelector(".modal-unsubscription-container"),lt=document.querySelectorAll(".modal-close-btn"),dt=document.querySelector(".modal-container"),$=document.querySelector(".footer-btn-to-top"),ut=document.querySelector(".footer-container"),k=document.querySelector(".loader");dt.classList.add("is-hidden");const pt=t=>{t.forEach(e=>{e.isIntersecting?$.style.display="block":$.style.display="none"})};$.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const ft=new IntersectionObserver(pt,{root:null,threshold:.5});ft.observe(ut);rt.addEventListener("submit",mt);lt.forEach(t=>{t.addEventListener("click",gt)});function mt(t){t.preventDefault();const s={email:document.querySelector(".footer-form-email").value};k.classList.remove("is-hidden"),window.addEventListener("click",o=>{o.target===h&&h.classList.add("is-hidden")}),W(s).then(o=>(k.classList.add("is-hidden"),h.classList.remove("is-hidden"),O.classList.add("is-hidden"),P.classList.remove("is-hidden"),console.log(o.data),o.json())).catch(o=>(k.classList.add("is-hidden"),o.response&&o.response.status===409?(h.classList.remove("is-hidden"),O.classList.remove("is-hidden"),P.classList.add("is-hidden")):console.log(o),o.message)),t.target.reset()}function gt(t){t.preventDefault(),h.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
