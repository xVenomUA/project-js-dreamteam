import{i as m,a as T,g as O,A,b as B,c as H,p as D}from"./assets/icon-256207dd.js";import{l as W}from"./assets/vendor-611745ce.js";const i={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count"),PopularDiv:document.getElementById("popularContainer"),modalWindowId:document.getElementById("id-modal-card")};function f(){const t=JSON.parse(localStorage.getItem("cart"));t?i.countHeader.textContent=`(${t.length})`:i.countHeader.textContent="(0)"}f();function V(t){const e=t.map(({_id:s,category:o,img:n,name:a,size:c,popularity:r,price:l})=>{o.includes("_")&&(o=o.replace(/_/g," "));let u="",p="shop";const g=JSON.parse(localStorage.getItem("cart"));return g&&g.find(S=>S._id===s)&&(p="check",u="disabled"),`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${n}" alt="${a}" width="140">
  </div>
  <h2 class="filt-h-name">${a}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${o}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${c}</span></p>
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
    </div>`)}function $(t){const{_id:e,name:s,category:o,size:n,popularity:a,desc:c,price:r,img:l}=t,u=document.querySelector(".shop-btn-card"),p=document.querySelector(".shop-h-name"),g=document.querySelector(".shop-span-category"),v=document.querySelector(".shop-span-size"),S=document.querySelector(".shop-span-popularity"),J=document.querySelector(".shop-text-discription"),_=document.querySelector(".shop-h-price"),I=document.querySelector(".shop-img"),L=JSON.parse(localStorage.getItem("cart"));L&&L.find(M=>M._id===e)&&u.setAttribute("disabled","true"),u.dataset.idcards=e,p.textContent=s,g.textContent=o,v.textContent=n,S.textContent=a,J.textContent=c,_.textContent=`$${r}`,I.src=l,I.alt=s}function z(t){const e=t.map(({_id:s,category:o,img:n,name:a,size:c,popularity:r})=>{o.includes("_")&&(o=o.replace(/_/g," "));let l="shop",u="";const p=JSON.parse(localStorage.getItem("cart"));return p&&p.find(v=>v._id===s)&&(l="check",u="popular-icon-back"),`
      <div class="popular-card" data-idcarts="${s}">
      <div class="popular-background">
            <img src="${n}" alt="${a}" class="popular-img">
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
              <span class="popular-word">${c}</span></p></li>
              <li>
            <p class="popular-text">Popularity:
              <span class="popular-word">${r}</span></p></li></ul>
          </div>
  
            <div class="popularname-price">
          </div>
          <button  class="popular-buton" data-idcarts="${s}" class="popular-icon-cont">
              <svg class="popular-icon ${u}" width="20" height="20">
                <use href="${m}#icon-${l}" class="filt-use"></use>
              </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
`}).join("");i.PopularDiv.innerHTML=e}w();async function w(){try{const e=(await T()).data;z(e)}catch{}}i.PopularDiv.addEventListener("click",F);async function F(t){t.preventDefault();const{target:e}=t,s=e.closest(".popular-card");if(!s||e.closest(".popular-icon-cont"))return;const n=s.dataset.idcarts;try{const a=await O(n);$(a),i.modalWindowId.classList.remove("is-hidden-card")}catch(a){console.log(a)}}function j(t){y();const{target:e}=t,s=e.closest(".popular-icon-cont");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${m}#icon-check`),s.setAttribute("disabled","true"),s.querySelector(".popular-icon ").classList.add("popular-icon-back");const a=s.dataset.idcarts,c=localStorage.getItem("cart"),r=JSON.parse(c);if(r){const l=r.find(u=>u._id===a);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(r));return}r.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),f();return}if(!r){const l=[];l.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),f()}}i.PopularDiv.addEventListener("click",j);const b={keyword:null},d={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",W(y,2500));async function R(){try{const e=(await A()).map(o=>{let n;return o.includes("_")?n=o.replace(/_/g," "):n=o,`<option value="${o}">${n}</option>`}).join("");i.categor.innerHTML+=e;const s=document.createElement("option");s.value="Show all",s.textContent="Show all",i.categor.prepend(s)}catch(t){console.log(t)}}async function y(){const t=K();d.limit=t;const e=JSON.parse(localStorage.getItem("filters"));e&&(d.keyword=e.keyword,d.category=e.category,d.page=e.page,localStorage.setItem("filters",JSON.stringify(d)),x());try{const o=(await B(d.keyword,d.category,"","","",d.page,t)).results;V(o)}catch(s){console.log(s)}}R();y();i.form&&(i.form.addEventListener("input",U),i.form.addEventListener("submit",G));async function U(){const t=i.filtersInput.value;b.keyword=t,t===""&&(b.keyword=null),localStorage.setItem("keyword",JSON.stringify(b))}async function G(t){t.preventDefault();const e=i.filtersInput.value;d.keyword=e,e===""&&(d.keyword=null);const s=i.filtersCategories.value;d.category=s,s===""&&(d.category=null),s==="Show all"&&(d.category=null),localStorage.setItem("filters",JSON.stringify(d)),y(),t.target.reset()}function x(){try{const t=JSON.parse(localStorage.getItem("keyword"));i.filtersInput&&(i.filtersInput.value=t.keyword||"")}catch{return}}x();function K(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function Q(t){w();const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${m}#icon-check`),s.setAttribute("disabled","true");const n=s.dataset.idcards,a=localStorage.getItem("cart"),c=JSON.parse(a);if(c){const r=c.find(l=>l._id===n);if(r){r.quantity+=1,localStorage.setItem("cart",JSON.stringify(c));return}c.push({_id:n,quantity:1}),localStorage.setItem("cart",JSON.stringify(c)),f();return}if(!c){const r=[];r.push({_id:n,quantity:1}),localStorage.setItem("cart",JSON.stringify(r)),f()}}i.listCards.addEventListener("click",Q);const E=document.querySelector(".pagination ul");let X=10,Y=1;const Z=document.querySelector(".pagination");E.innerHTML=tt(X,Y);function tt(t,e){let s="",o,n=e-1,a=e+1;e>1&&(s+=`<li class="btn prev" onclick="createPagination(totalPages, ${e-1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`),e>2&&(s+='<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>',e>3&&(s+='<li class="dots"><span>...</span></li>')),e==t?n=n-2:e==t-1&&(n=n-1),e==1?a=a+2:e==2&&(a=a+1);for(var c=n;c<=a;c++)c>t||(c==0&&(c=c+1),e==c?o="active":o="",s+=`<li class="numb ${o}" onclick="createPagination(totalPages, ${c})"><span>${c}</span></li>`);return e<t-1&&(e<t-2&&(s+='<li class="dots"><span>...</span></li>'),s+=`<li class="last numb" onclick="createPagination(totalPages, ${t})"><span>${t}</span></li>`),e<t&&(s+=`<li class="btn next" onclick="createPagination(totalPages, ${e+1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`),t===1&&(Z.style.display="none"),E.innerHTML=s,s}const et=document.getElementById("id-modal-card");function st(t){const e=document.createElement("div");return e.classList.add("product-card"),e.dataset.idcarts=t._id,e.addEventListener("click",()=>{$(t),et.classList.remove("is-hidden-card")}),e.innerHTML=`
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
  `,e}function ot(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}H().then(t=>t.data).then(t=>{const e=ot(t,2),s=document.getElementById("discountContainer");e.forEach(o=>{s.appendChild(st(o))})}).catch(t=>{console.error(t.message)});const at=document.querySelector(".shop-modal-close-btn");i.listCards.addEventListener("click",ct);async function ct(t){t.preventDefault();const{target:e}=t,s=e.closest(".filt-div-card");if(!s||e.closest(".filt-btn-card"))return;const n=s.dataset.idcarts;try{const a=await O(n);$(a),i.modalWindowId.classList.remove("is-hidden-card")}catch(a){console.log(a)}}at.addEventListener("click",N);function N(){i.modalWindowId.classList.add("is-hidden-card")}function nt(t){const{target:e}=t,s=e.closest(".shop-btn-card");if(y(),w(),!s)return;const o=s.dataset.idcards;N();const n=localStorage.getItem("cart"),a=JSON.parse(n);if(a){const r=a.find(l=>l._id===o);if(r){r.quantity+=1,localStorage.setItem("cart",JSON.stringify(a));return}a.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),f();return}const c=[];c.push({_id:o,quantity:1}),localStorage.setItem("cart",JSON.stringify(c)),f()}i.addCartBtn.addEventListener("click",nt);const it=document.querySelector(".footer-form"),h=document.querySelector(".modal-backdrop"),q=document.querySelector(".modal-subscribe-container"),P=document.querySelector(".modal-unsubscription-container"),rt=document.querySelectorAll(".modal-close-btn"),lt=document.querySelector(".modal-container"),k=document.querySelector(".footer-btn-to-top"),dt=document.querySelector(".footer-container"),C=document.querySelector(".loader");lt.classList.add("is-hidden");const ut=t=>{t.forEach(e=>{e.isIntersecting?k.style.display="block":k.style.display="none"})};k.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const pt=new IntersectionObserver(ut,{root:null,threshold:.5});pt.observe(dt);it.addEventListener("submit",ft);rt.forEach(t=>{t.addEventListener("click",mt)});function ft(t){t.preventDefault();const s={email:document.querySelector(".footer-form-email").value};C.classList.remove("is-hidden"),window.addEventListener("click",o=>{o.target===h&&h.classList.add("is-hidden")}),D(s).then(o=>(C.classList.add("is-hidden"),h.classList.remove("is-hidden"),P.classList.add("is-hidden"),q.classList.remove("is-hidden"),console.log(o.data),o.json())).catch(o=>(C.classList.add("is-hidden"),o.response&&o.response.status===409?(h.classList.remove("is-hidden"),P.classList.remove("is-hidden"),q.classList.add("is-hidden")):console.log(o),o.message)),t.target.reset()}function mt(t){t.preventDefault(),h.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
