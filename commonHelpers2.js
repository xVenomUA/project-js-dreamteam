import{i as f,a as A,g as x,A as B,b as H,c as D,p as W}from"./assets/icon-94afa2ac.js";import{l as V}from"./assets/vendor-611745ce.js";const n={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count"),PopularDiv:document.getElementById("popularContainer"),modalWindowId:document.getElementById("id-modal-card")};function p(){const t=JSON.parse(localStorage.getItem("cart"));t?n.countHeader.textContent=`(${t.length})`:n.countHeader.textContent="(0)"}p();function z(t){const e=t.map(({_id:s,category:o,img:r,name:c,size:a,popularity:i,price:l})=>{o.includes("_")&&(o=o.replace(/_/g," "));let d="",m="shop";const g=JSON.parse(localStorage.getItem("cart"));return g&&g.find(v=>v._id===s)&&(m="check",d="disabled"),`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${r}" alt="${c}" width="140">
  </div>
  <h2 class="filt-h-name">${c}</h2>
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
          <use class="filt-use" href="${f}#icon-${m}"></use>
        </svg>
    </button>
  </div>
</div>
`}).join("");n.filtercard.innerHTML=e,n.filtercard.innerHTML===""&&(n.filtercard.innerHTML=`<div class="filt"><p class="filt-text-no">Nothing was found for the selected <a href="#" class="filt-span-no"> filters...</a></p>
    <p class="filt-p-no">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p>
    </div>`)}function $(t){const{_id:e,name:s,category:o,size:r,popularity:c,desc:a,price:i,img:l}=t,d=document.querySelector(".shop-btn-card"),m=document.querySelector(".shop-h-name"),g=document.querySelector(".shop-span-category"),y=document.querySelector(".shop-span-size"),v=document.querySelector(".shop-span-popularity"),_=document.querySelector(".shop-text-discription"),M=document.querySelector(".shop-h-price"),I=document.querySelector(".shop-img"),L=JSON.parse(localStorage.getItem("cart"));let P={};L&&(P=L.find(T=>T._id===e)??!1),P!==!1?(d.innerHTML=`Remove from<svg class="shop-card-icon" height="18" width="18">
          <use href="${f}#icon-shop"></use>
        </svg>`,d.setAttribute("data-check","true"),d.classList.add("shop-btn-card-active")):(d.innerHTML=`Add to<svg class="shop-card-icon" height="18" width="18">
          <use href="${f}#icon-shop"></use>
        </svg>`,d.setAttribute("data-check","false"),d.classList.remove("shop-btn-card-active")),d.dataset.idcards=e,m.textContent=s,g.textContent=o,y.textContent=r,v.textContent=c,_.textContent=a,M.textContent=`$${i}`,I.src=l,I.alt=s}function F(t){const e=t.map(({_id:s,category:o,img:r,name:c,size:a,popularity:i})=>{o.includes("_")&&(o=o.replace(/_/g," "));let l="shop",d="";const m=JSON.parse(localStorage.getItem("cart"));return m&&m.find(y=>y._id===s)&&(l="check",d="popular-icon-back"),`
      <div class="popular-card" data-idcarts="${s}">
      <div class="popular-background">
            <img src="${r}" alt="${c}" class="popular-img">
          </div>
        
        <div class="popular-descript">
          <div class="popular-descript-text">
            <p class="popular-name">${c}</p>
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
                <use href="${f}#icon-${l}" class="filt-use"></use>
              </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
`}).join("");n.PopularDiv.innerHTML=e}w();async function w(){try{const e=(await A()).data;F(e)}catch{}}n.PopularDiv.addEventListener("click",R);async function R(t){t.preventDefault();const{target:e}=t,s=e.closest(".popular-card");if(!s||e.closest(".popular-icon-cont"))return;const r=s.dataset.idcarts;try{const c=await x(r);$(c),n.modalWindowId.classList.remove("is-hidden-card")}catch(c){console.log(c)}}function j(t){h();const{target:e}=t,s=e.closest(".popular-icon-cont");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${f}#icon-check`),s.setAttribute("disabled","true"),s.classList.add("popular-icon-back");const c=s.dataset.idcarts,a=localStorage.getItem("cart"),i=JSON.parse(a);if(i){const l=i.find(d=>d._id===c);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(i));return}i.push({_id:c,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),p();return}if(!i){const l=[];l.push({_id:c,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),p()}}n.PopularDiv.addEventListener("click",j);const S={keyword:null},u={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",V(h,2500));async function U(){try{const e=(await B()).map(o=>{let r;return o.includes("_")?r=o.replace(/_/g," "):r=o,`<option value="${o}">${r}</option>`}).join("");n.categor.innerHTML+=e;const s=document.createElement("option");s.value="Show all",s.textContent="Show all",n.categor.prepend(s)}catch(t){console.log(t)}}async function h(){const t=Q();u.limit=t;const e=JSON.parse(localStorage.getItem("filters"));e&&(u.keyword=e.keyword,u.category=e.category,u.page=e.page,localStorage.setItem("filters",JSON.stringify(u)),E());try{const s=await H(u.keyword,u.category,"","","",u.page,t);localStorage.setItem("totalPage",JSON.stringify(s.totalPages));const o=s.results;z(o)}catch(s){console.log(s)}}U();h();n.form&&(n.form.addEventListener("input",G),n.form.addEventListener("submit",K));async function G(){const t=n.filtersInput.value;S.keyword=t,t===""&&(S.keyword=null),localStorage.setItem("keyword",JSON.stringify(S))}async function K(t){t.preventDefault();const e=n.filtersInput.value;u.keyword=e,e===""&&(u.keyword=null);const s=n.filtersCategories.value;u.category=s,s===""&&(u.category=null),s==="Show all"&&(u.category=null),localStorage.setItem("filters",JSON.stringify(u)),h(),t.target.reset()}function E(){try{const t=JSON.parse(localStorage.getItem("keyword"));n.filtersInput&&(n.filtersInput.value=t.keyword||"")}catch{return}}E();function Q(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function X(t){w();const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${f}#icon-check`),s.setAttribute("disabled","true");const r=s.dataset.idcards,c=localStorage.getItem("cart"),a=JSON.parse(c);if(a){const i=a.find(l=>l._id===r);if(i){i.quantity+=1,localStorage.setItem("cart",JSON.stringify(a));return}a.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),p();return}if(!a){const i=[];i.push({_id:r,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),p()}}n.listCards.addEventListener("click",X);const N=document.querySelector(".pagination ul");let Y=10,Z=1;const tt=document.querySelector(".pagination");N.innerHTML=et(Y,Z);function et(t,e){let s="",o,r=e-1,c=e+1;e>1&&(s+=`<li class="btn prev" onclick="createPagination(totalPages, ${e-1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`),e>2&&(s+='<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>',e>3&&(s+='<li class="dots"><span>...</span></li>')),e==t?r=r-2:e==t-1&&(r=r-1),e==1?c=c+2:e==2&&(c=c+1);for(var a=r;a<=c;a++)a>t||(a==0&&(a=a+1),e==a?o="active":o="",s+=`<li class="numb ${o}" onclick="createPagination(totalPages, ${a})"><span>${a}</span></li>`);return e<t-1&&(e<t-2&&(s+='<li class="dots"><span>...</span></li>'),s+=`<li class="last numb" onclick="createPagination(totalPages, ${t})"><span>${t}</span></li>`),e<t&&(s+=`<li class="btn next" onclick="createPagination(totalPages, ${e+1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`),t===1&&(tt.style.display="none"),N.innerHTML=s,s}const st=document.getElementById("id-modal-card");function ot(t){const e=document.createElement("div");return e.classList.add("product-card"),e.dataset.idcarts=t._id,e.addEventListener("click",()=>{$(t),st.classList.remove("is-hidden-card")}),e.innerHTML=`
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
  `,e}function at(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}D().then(t=>t.data).then(t=>{const e=at(t,2),s=document.getElementById("discountContainer");e.forEach(o=>{s.appendChild(ot(o))})}).catch(t=>{console.error(t.message)});const ct=document.querySelector(".shop-modal-close-btn");n.listCards.addEventListener("click",rt);async function rt(t){t.preventDefault();const{target:e}=t,s=e.closest(".filt-div-card");if(!s||e.closest(".filt-btn-card"))return;const r=s.dataset.idcarts;try{const c=await x(r);$(c),n.modalWindowId.classList.remove("is-hidden-card")}catch(c){console.log(c)}}ct.addEventListener("click",J);function J(){n.modalWindowId.classList.add("is-hidden-card")}function nt(t){const{target:e}=t,s=e.closest(".shop-btn-card");if(h(),w(),!s)return;const o=s.dataset.idcards,r=s.dataset.check;console.log(r),J();const c=localStorage.getItem("cart"),a=JSON.parse(c);if(r==="false"){if(a){const l=a.find(d=>d._id===o);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(a));return}a.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),p();return}const i=[];i.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(i)),p()}else if(a&&a.find(l=>l._id===o)){const l=a.filter(d=>d._id!==o);localStorage.setItem("cart",JSON.stringify(l)),p();return}}n.addCartBtn.addEventListener("click",nt);const it=document.querySelector(".footer-form"),k=document.querySelector(".modal-backdrop"),q=document.querySelector(".modal-subscribe-container"),O=document.querySelector(".modal-unsubscription-container"),lt=document.querySelectorAll(".modal-close-btn"),dt=document.querySelector(".modal-container"),C=document.querySelector(".footer-btn-to-top"),ut=document.querySelector(".footer-container"),b=document.querySelector(".loader");dt.classList.add("is-hidden");const pt=t=>{t.forEach(e=>{e.isIntersecting?C.style.display="block":C.style.display="none"})};C.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const ft=new IntersectionObserver(pt,{root:null,threshold:.5});ft.observe(ut);it.addEventListener("submit",mt);lt.forEach(t=>{t.addEventListener("click",gt)});async function mt(t){t.preventDefault();const s={email:document.querySelector(".footer-form-email").value};b.classList.remove("is-hidden");try{const o=await W(s);b.classList.add("is-hidden"),k.classList.remove("is-hidden"),O.classList.add("is-hidden"),q.classList.remove("is-hidden"),console.log(o.data)}catch(o){b.classList.add("is-hidden"),o.response&&o.response.status===409?(k.classList.remove("is-hidden"),O.classList.remove("is-hidden"),q.classList.add("is-hidden")):o.response&&o.response.status===400&&ht()}t.target.reset()}function gt(t){t.preventDefault(),k.classList.add("is-hidden")}function ht(){const t=document.querySelector(".error-message");t.style.display="block",setTimeout(()=>{t.style.display="none"},2e3)}
//# sourceMappingURL=commonHelpers2.js.map
