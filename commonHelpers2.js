import{i as p,a as B,g as x,A,b as H,c as D,p as W}from"./assets/icon-1835ad44.js";import{l as V}from"./assets/vendor-611745ce.js";const r={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count"),PopularDiv:document.getElementById("popularContainer"),modalWindowId:document.getElementById("id-modal-card")};function f(){const t=JSON.parse(localStorage.getItem("cart"));t?r.countHeader.textContent=`(${t.length})`:r.countHeader.textContent="(0)"}f();function z(t){const e=t.map(({_id:s,category:o,img:c,name:n,size:a,popularity:i,price:l})=>{o.includes("_")&&(o=o.replace(/_/g," "));let d="",m="shop";const g=JSON.parse(localStorage.getItem("cart"));return g&&g.find(S=>S._id===s)&&(m="check",d="disabled"),`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${c}" alt="${n}" width="140">
  </div>
  <h2 class="filt-h-name">${n}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${o}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${a}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${i}</span></p>
    </div>
  </div>
  <div class="filt-div-price"> 
    <h2 class="filt-h-price">$${l}</h2>
    <button class="filt-btn-card" data-idcards="${s}" type="submit" ${d}>
      <svg class="filt-card-icon" height="18" width="18" >
          <use class="filt-use" href="${p}#icon-${m}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");r.filtercard.innerHTML=e,r.filtercard.innerHTML===""&&(r.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}function w(t){const{_id:e,name:s,category:o,size:c,popularity:n,desc:a,price:i,img:l}=t,d=document.querySelector(".shop-btn-card"),m=document.querySelector(".shop-h-name"),g=document.querySelector(".shop-span-category"),y=document.querySelector(".shop-span-size"),S=document.querySelector(".shop-span-popularity"),M=document.querySelector(".shop-text-discription"),_=document.querySelector(".shop-h-price"),I=document.querySelector(".shop-img"),L=JSON.parse(localStorage.getItem("cart"));let P={};L&&(P=L.find(T=>T._id===e)??!1),P!==!1?(d.innerHTML=`Remove from<svg class="shop-card-icon" height="18" width="18">
          <use href="${p}#icon-shop"></use>
        </svg>`,d.setAttribute("data-check","true"),d.classList.add("shop-btn-card-active")):(d.innerHTML=`Add to<svg class="shop-card-icon" height="18" width="18">
          <use href="${p}#icon-shop"></use>
        </svg>`,d.setAttribute("data-check","false"),d.classList.remove("shop-btn-card-active")),d.dataset.idcards=e,m.textContent=s,g.textContent=o,y.textContent=c,S.textContent=n,M.textContent=a,_.textContent=`$${i}`,I.src=l,I.alt=s}function F(t){const e=t.map(({_id:s,category:o,img:c,name:n,size:a,popularity:i})=>{o.includes("_")&&(o=o.replace(/_/g," "));let l="shop",d="";const m=JSON.parse(localStorage.getItem("cart"));return m&&m.find(y=>y._id===s)&&(l="check",d="popular-icon-back"),`
      <div class="popular-card" data-idcarts="${s}">
      <div class="popular-background">
            <img src="${c}" alt="${n}" class="popular-img">
          </div>
        
        <div class="popular-descript">
          <div class="popular-descript-text">
            <p class="popular-name">${n}</p>
          <div class="pop-frame">
  
          <div class="category-cont">
            <p class="popular-text">Category:
              <span class="popular-word">${o}</span></p>
              
              <ul class="pop-text-two-cat">
              <li class="pop-text-size-pop">

            <p class="popular-text">Size:
              <span class="popular-word">${a}</span></p></li>
              <li>
            <p class="popular-text">Popularity:
              <span class="popular-word">${i}</span></p></li></ul>
          </div>
  
            <div class="popularname-price">
          </div>
          <button data-idcarts="${s}" class="popular-icon-cont ${d}">
              <svg class="popular-icon" width="20" height="20">
                <use href="${p}#icon-${l}" class="filt-use"></use>
              </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
`}).join("");r.PopularDiv.innerHTML=e}$();async function $(){try{const e=(await B()).data;F(e)}catch{}}r.PopularDiv.addEventListener("click",R);async function R(t){t.preventDefault();const{target:e}=t,s=e.closest(".popular-card");if(!s||e.closest(".popular-icon-cont"))return;const c=s.dataset.idcarts;try{const n=await x(c);w(n),r.modalWindowId.classList.remove("is-hidden-card")}catch(n){console.log(n)}}function j(t){h();const{target:e}=t,s=e.closest(".popular-icon-cont");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${p}#icon-check`),s.setAttribute("disabled","true"),s.classList.add("popular-icon-back");const n=s.dataset.idcarts,a=localStorage.getItem("cart"),i=JSON.parse(a);if(i){const l=i.find(d=>d._id===n);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(i));return}i.push({_id:n,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),f();return}if(!i){const l=[];l.push({_id:n,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),f()}}r.PopularDiv.addEventListener("click",j);const b={keyword:null},u={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",V(h,2500));async function U(){try{const e=(await A()).map(o=>{let c;return o.includes("_")?c=o.replace(/_/g," "):c=o,`<option value="${o}">${c}</option>`}).join("");r.categor.innerHTML+=e;const s=document.createElement("option");s.value="Show all",s.textContent="Show all",r.categor.prepend(s)}catch(t){console.log(t)}}async function h(){const t=Q();u.limit=t;const e=JSON.parse(localStorage.getItem("filters"));e&&(u.keyword=e.keyword,u.category=e.category,u.page=e.page,localStorage.setItem("filters",JSON.stringify(u)),E());try{const s=await H(u.keyword,u.category,"","","",u.page,t);localStorage.setItem("totalPage",JSON.stringify(s.totalPages));const o=s.results;z(o)}catch(s){console.log(s)}}U();h();r.form&&(r.form.addEventListener("input",G),r.form.addEventListener("submit",K));async function G(){const t=r.filtersInput.value;b.keyword=t,t===""&&(b.keyword=null),localStorage.setItem("keyword",JSON.stringify(b))}async function K(t){t.preventDefault();const e=r.filtersInput.value;u.keyword=e,e===""&&(u.keyword=null);const s=r.filtersCategories.value;u.category=s,s===""&&(u.category=null),s==="Show all"&&(u.category=null),localStorage.setItem("filters",JSON.stringify(u)),h(),t.target.reset()}function E(){try{const t=JSON.parse(localStorage.getItem("keyword"));r.filtersInput&&(r.filtersInput.value=t.keyword||"")}catch{return}}E();function Q(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function X(t){$();const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${p}#icon-check`),s.setAttribute("disabled","true");const c=s.dataset.idcards,n=localStorage.getItem("cart"),a=JSON.parse(n);if(a){const i=a.find(l=>l._id===c);if(i){i.quantity+=1,localStorage.setItem("cart",JSON.stringify(a));return}a.push({_id:c,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),f();return}if(!a){const i=[];i.push({_id:c,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),f()}}r.listCards.addEventListener("click",X);const N=document.querySelector(".pagination ul");let Y=10,Z=1;const tt=document.querySelector(".pagination");N.innerHTML=et(Y,Z);function et(t,e){let s="",o,c=e-1,n=e+1;e>1&&(s+=`<li class="btn prev" onclick="createPagination(totalPages, ${e-1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`),e>2&&(s+='<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>',e>3&&(s+='<li class="dots"><span>...</span></li>')),e==t?c=c-2:e==t-1&&(c=c-1),e==1?n=n+2:e==2&&(n=n+1);for(var a=c;a<=n;a++)a>t||(a==0&&(a=a+1),e==a?o="active":o="",s+=`<li class="numb ${o}" onclick="createPagination(totalPages, ${a})"><span>${a}</span></li>`);return e<t-1&&(e<t-2&&(s+='<li class="dots"><span>...</span></li>'),s+=`<li class="last numb" onclick="createPagination(totalPages, ${t})"><span>${t}</span></li>`),e<t&&(s+=`<li class="btn next" onclick="createPagination(totalPages, ${e+1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`),t===1&&(tt.style.display="none"),N.innerHTML=s,s}const st=document.getElementById("id-modal-card");function ot(t){const e=document.createElement("div");return e.classList.add("product-card"),e.dataset.idcarts=t._id,e.addEventListener("click",()=>{w(t),st.classList.remove("is-hidden-card")}),e.innerHTML=`
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
  `,e}function at(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}D().then(t=>t.data).then(t=>{const e=at(t,2),s=document.getElementById("discountContainer");e.forEach(o=>{s.appendChild(ot(o))})}).catch(t=>{console.error(t.message)});const nt=document.querySelector(".shop-modal-close-btn");r.listCards.addEventListener("click",ct);async function ct(t){t.preventDefault();const{target:e}=t,s=e.closest(".filt-div-card");if(!s||e.closest(".filt-btn-card"))return;const c=s.dataset.idcarts;try{const n=await x(c);w(n),r.modalWindowId.classList.remove("is-hidden-card")}catch(n){console.log(n)}document.body.style.overflow="hidden"}nt.addEventListener("click",J);function J(){r.modalWindowId.classList.add("is-hidden-card"),document.body.style.overflow="scroll"}function rt(t){const{target:e}=t,s=e.closest(".shop-btn-card");if(h(),$(),!s)return;const o=s.dataset.idcards,c=s.dataset.check;console.log(c),J();const n=localStorage.getItem("cart"),a=JSON.parse(n);if(c==="false"){if(a){const l=a.find(d=>d._id===o);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(a));return}a.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),f();return}const i=[];i.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),f()}else if(a&&a.find(l=>l._id===o)){const l=a.filter(d=>d._id!==o);localStorage.setItem("cart",JSON.stringify(l)),f();return}}r.addCartBtn.addEventListener("click",rt);const k=document.querySelector(".footer-form"),C=document.querySelector(".modal-backdrop"),it=document.querySelector(".modal-subscribe-container"),lt=document.querySelector(".modal-unsubscription-container"),dt=document.querySelectorAll(".modal-close-btn"),q=document.querySelector(".loader"),O=document.querySelector(".footer-btn-to-top"),ut=document.querySelector(".footer-container"),ft=document.querySelector(".modal-container");ft.classList.add("is-hidden");function v(t,e=!0){C.classList.toggle("is-hidden",!t),it.classList.toggle("is-hidden",!e),lt.classList.toggle("is-hidden",e)}function pt(){const t=document.querySelector(".error-message");t.style.display="block",setTimeout(()=>t.style.display="none",2e3)}async function mt(t){t.preventDefault();const e=k.querySelector(".footer-form-email").value;q.classList.remove("is-hidden");function s(o){o.target===C&&v(!1)}C.addEventListener("click",s);try{const o=await W({email:e});console.log(o.data),v(!0)}catch(o){o.response&&(o.response.status===409?v(!0,!1):pt())}finally{q.classList.add("is-hidden"),k.reset()}}function gt(){const t=s=>{s.forEach(o=>{O.style.display=o.isIntersecting?"block":"none"})};new IntersectionObserver(t,{root:null,threshold:.5}).observe(ut),O.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}))}document.addEventListener("DOMContentLoaded",()=>{const t=window.location.pathname;(t.endsWith("index.html")||t==="/")&&gt()});k.addEventListener("submit",mt);dt.forEach(t=>t.addEventListener("click",()=>v(!1)));
//# sourceMappingURL=commonHelpers2.js.map
