import{i as p,a as A,g as x,A as B,b as H,c as D,p as W}from"./assets/icon-6c302487.js";import{l as V}from"./assets/vendor-611745ce.js";const r={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count"),PopularDiv:document.getElementById("popularContainer"),modalWindowId:document.getElementById("id-modal-card")};function f(){const t=JSON.parse(localStorage.getItem("cart"));t?r.countHeader.textContent=`(${t.length})`:r.countHeader.textContent="(0)"}f();function z(t){const e=t.map(({_id:s,category:a,img:i,name:c,size:o,popularity:n,price:l})=>{a.includes("_")&&(a=a.replace(/_/g," "));let d="",m="shop";const g=JSON.parse(localStorage.getItem("cart"));return g&&g.find(S=>S._id===s)&&(m="check",d="disabled"),`<div class="filt-div-card" data-idcarts="${s}">
      <div class="filt-div-img">
  <img class="filt-img" src="${i}" alt="${c}" width="140">
  </div>
  <h2 class="filt-h-name">${c}</h2>
  <div class="filt-div-text">
  <div class="filt-div-text-new">
    <p class="filt-text">Category: <span class="filt-span">${a}</span></p>
    <p class="filt-text">Size: <span class="filt-span">${o}</span></p>
    </div>
    <div class="filt-div-text-second">
    <p class="filt-text">Popularity: <span class="filt-span">${n}</span></p>
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
    </div>`)}function $(t){const{_id:e,name:s,category:a,size:i,popularity:c,desc:o,price:n,img:l}=t,d=document.querySelector(".shop-btn-card"),m=document.querySelector(".shop-h-name"),g=document.querySelector(".shop-span-category"),y=document.querySelector(".shop-span-size"),S=document.querySelector(".shop-span-popularity"),_=document.querySelector(".shop-text-discription"),M=document.querySelector(".shop-h-price"),L=document.querySelector(".shop-img"),I=JSON.parse(localStorage.getItem("cart"));let q={};I&&(q=I.find(T=>T._id===e)??!1),q!==!1?(d.innerHTML=`Remove from<svg class="shop-card-icon" height="18" width="18">
          <use href="${p}#icon-shop"></use>
        </svg>`,d.setAttribute("data-check","true"),d.classList.add("shop-btn-card-active")):(d.innerHTML=`Add to<svg class="shop-card-icon" height="18" width="18">
          <use href="${p}#icon-shop"></use>
        </svg>`,d.setAttribute("data-check","false"),d.classList.remove("shop-btn-card-active")),d.dataset.idcards=e,m.textContent=s,g.textContent=a,y.textContent=i,S.textContent=c,_.textContent=o,M.textContent=`$${n}`,L.src=l,L.alt=s}function F(t){const e=t.map(({_id:s,category:a,img:i,name:c,size:o,popularity:n})=>{a.includes("_")&&(a=a.replace(/_/g," "));let l="shop",d="";const m=JSON.parse(localStorage.getItem("cart"));return m&&m.find(y=>y._id===s)&&(l="check",d="popular-icon-back"),`
      <div class="popular-card" data-idcarts="${s}">
      <div class="popular-background">
            <img src="${i}" alt="${c}" class="popular-img">
          </div>
        
        <div class="popular-descript">
          <div class="popular-descript-text">
            <p class="popular-name">${c}</p>
          <div class="pop-frame">
  
          <div class="category-cont">
            <p class="popular-text">Category:
              <span class="popular-word">${a}</span></p>
              
              <ul class="pop-text-two-cat">
              <li class="pop-text-size-pop">

            <p class="popular-text">Size:
              <span class="popular-word">${o}</span></p></li>
              <li>
            <p class="popular-text">Popularity:
              <span class="popular-word">${n}</span></p></li></ul>
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
`}).join("");r.PopularDiv.innerHTML=e}w();async function w(){try{const e=(await A()).data;F(e)}catch{}}r.PopularDiv.addEventListener("click",j);async function j(t){t.preventDefault();const{target:e}=t,s=e.closest(".popular-card");if(!s||e.closest(".popular-icon-cont"))return;const i=s.dataset.idcarts;try{const c=await x(i);$(c),r.modalWindowId.classList.remove("is-hidden-card")}catch(c){console.log(c)}}function R(t){v();const{target:e}=t,s=e.closest(".popular-icon-cont");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${p}#icon-check`),s.setAttribute("disabled","true"),s.classList.add("popular-icon-back");const c=s.dataset.idcarts,o=localStorage.getItem("cart"),n=JSON.parse(o);if(n){const l=n.find(d=>d._id===c);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(n));return}n.push({_id:c,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),f();return}if(!n){const l=[];l.push({_id:c,quantity:1}),localStorage.setItem("cart",JSON.stringify(l)),f()}}r.PopularDiv.addEventListener("click",R);const b={keyword:null},u={keyword:null,category:null,page:1,limit:6};window.addEventListener("resize",V(v,2500));async function U(){try{const e=(await B()).map(a=>{let i;return a.includes("_")?i=a.replace(/_/g," "):i=a,`<option value="${a}">${i}</option>`}).join("");r.categor.innerHTML+=e;const s=document.createElement("option");s.value="Show all",s.textContent="Show all",r.categor.prepend(s)}catch(t){console.log(t)}}async function v(){const t=Q();u.limit=t;const e=JSON.parse(localStorage.getItem("filters"));e&&(u.keyword=e.keyword,u.category=e.category,u.page=e.page,localStorage.setItem("filters",JSON.stringify(u)),E());try{const a=(await H(u.keyword,u.category,"","","",u.page,t)).results;z(a)}catch(s){console.log(s)}}U();v();r.form&&(r.form.addEventListener("input",G),r.form.addEventListener("submit",K));async function G(){const t=r.filtersInput.value;b.keyword=t,t===""&&(b.keyword=null),localStorage.setItem("keyword",JSON.stringify(b))}async function K(t){t.preventDefault();const e=r.filtersInput.value;u.keyword=e,e===""&&(u.keyword=null);const s=r.filtersCategories.value;u.category=s,s===""&&(u.category=null),s==="Show all"&&(u.category=null),localStorage.setItem("filters",JSON.stringify(u)),v(),t.target.reset()}function E(){try{const t=JSON.parse(localStorage.getItem("keyword"));r.filtersInput&&(r.filtersInput.value=t.keyword||"")}catch{return}}E();function Q(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return t>=1440?9:t>=768?8:6}function X(t){w();const{target:e}=t,s=e.closest(".filt-btn-card");if(!s)return;s.querySelector(".filt-use").setAttribute("href",`${p}#icon-check`),s.setAttribute("disabled","true");const i=s.dataset.idcards,c=localStorage.getItem("cart"),o=JSON.parse(c);if(o){const n=o.find(l=>l._id===i);if(n){n.quantity+=1,localStorage.setItem("cart",JSON.stringify(o));return}o.push({_id:i,quantity:1}),localStorage.setItem("cart",JSON.stringify(o)),f();return}if(!o){const n=[];n.push({_id:i,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),f()}}r.listCards.addEventListener("click",X);const N=document.querySelector(".pagination ul");let Y=10,Z=1;const tt=document.querySelector(".pagination");N.innerHTML=et(Y,Z);function et(t,e){let s="",a,i=e-1,c=e+1;e>1&&(s+=`<li class="btn prev" onclick="createPagination(totalPages, ${e-1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`),e>2&&(s+='<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>',e>3&&(s+='<li class="dots"><span>...</span></li>')),e==t?i=i-2:e==t-1&&(i=i-1),e==1?c=c+2:e==2&&(c=c+1);for(var o=i;o<=c;o++)o>t||(o==0&&(o=o+1),e==o?a="active":a="",s+=`<li class="numb ${a}" onclick="createPagination(totalPages, ${o})"><span>${o}</span></li>`);return e<t-1&&(e<t-2&&(s+='<li class="dots"><span>...</span></li>'),s+=`<li class="last numb" onclick="createPagination(totalPages, ${t})"><span>${t}</span></li>`),e<t&&(s+=`<li class="btn next" onclick="createPagination(totalPages, ${e+1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`),t===1&&(tt.style.display="none"),N.innerHTML=s,s}const st=document.getElementById("id-modal-card");function at(t){const e=document.createElement("div");return e.classList.add("product-card"),e.dataset.idcarts=t._id,e.addEventListener("click",()=>{$(t),st.classList.remove("is-hidden-card")}),e.innerHTML=`
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
  `,e}function ot(t,e){return t.sort(()=>.5-Math.random()).slice(0,e)}D().then(t=>t.data).then(t=>{const e=ot(t,2),s=document.getElementById("discountContainer");e.forEach(a=>{s.appendChild(at(a))})}).catch(t=>{console.error(t.message)});const ct=document.querySelector(".shop-modal-close-btn");r.listCards.addEventListener("click",it);async function it(t){t.preventDefault();const{target:e}=t,s=e.closest(".filt-div-card");if(!s||e.closest(".filt-btn-card"))return;const i=s.dataset.idcarts;try{const c=await x(i);$(c),r.modalWindowId.classList.remove("is-hidden-card")}catch(c){console.log(c)}}ct.addEventListener("click",J);function J(){r.modalWindowId.classList.add("is-hidden-card")}function nt(t){const{target:e}=t,s=e.closest(".shop-btn-card");if(v(),w(),!s)return;const a=s.dataset.idcards,i=s.dataset.check;console.log(i),J();const c=localStorage.getItem("cart"),o=JSON.parse(c);if(i==="false"){if(o){const l=o.find(d=>d._id===a);if(l){l.quantity+=1,localStorage.setItem("cart",JSON.stringify(o));return}o.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(o)),f();return}const n=[];n.push({_id:a,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),f()}else if(o){const n=o.find(l=>l._id===a);if(n){if(n.quantity-=1,n.quantity===0){const l=o.filter(d=>d._id!==a);localStorage.setItem("cart",JSON.stringify(l)),f();return}localStorage.setItem("cart",JSON.stringify(o)),f();return}}}r.addCartBtn.addEventListener("click",nt);const rt=document.querySelector(".footer-form"),h=document.querySelector(".modal-backdrop"),P=document.querySelector(".modal-subscribe-container"),O=document.querySelector(".modal-unsubscription-container"),lt=document.querySelectorAll(".modal-close-btn"),dt=document.querySelector(".modal-container"),C=document.querySelector(".footer-btn-to-top"),ut=document.querySelector(".footer-container"),k=document.querySelector(".loader");dt.classList.add("is-hidden");const ft=t=>{t.forEach(e=>{e.isIntersecting?C.style.display="block":C.style.display="none"})};C.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const pt=new IntersectionObserver(ft,{root:null,threshold:.5});pt.observe(ut);rt.addEventListener("submit",mt);lt.forEach(t=>{t.addEventListener("click",gt)});function mt(t){t.preventDefault();const s={email:document.querySelector(".footer-form-email").value};k.classList.remove("is-hidden"),window.addEventListener("click",a=>{a.target===h&&h.classList.add("is-hidden")}),W(s).then(a=>(k.classList.add("is-hidden"),h.classList.remove("is-hidden"),O.classList.add("is-hidden"),P.classList.remove("is-hidden"),console.log(a.data),a.json())).catch(a=>(k.classList.add("is-hidden"),a.response&&a.response.status===409?(h.classList.remove("is-hidden"),O.classList.remove("is-hidden"),P.classList.add("is-hidden")):console.log(a),a.message)),t.target.reset()}function gt(t){t.preventDefault(),h.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
