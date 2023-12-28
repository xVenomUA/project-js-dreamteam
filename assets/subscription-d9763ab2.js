import{a as c}from"./vendor-611745ce.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const a="https://food-boutique.b.goit.study/api";async function I(){try{return(await c.get(`${a}/products/categories`)).data}catch(e){console.log(e)}}async function k(e,o,s,r,t,n,i){try{const d=new URLSearchParams({keyword:e||"",category:o||"",byABC:s||!1,byPrice:r||!1,byPopularity:t||!1,page:n,limit:i});return(await c.get(`${a}/products?${d.toString()}`)).data}catch(d){console.log(d.message)}}async function B(e){try{return(await c.get(`${a}/products/${e}`)).data}catch(o){console.log(o.message)}}async function O(){try{return await c.get(`${a}/products/popular?limit=5`)}catch(e){console.log(e.message)}}async function $(){try{return await c.get(`${a}/products/discount`)}catch(e){console.log(e.message)}}async function g(e){return(await c.post(`${a}/subscription`,e)).data}async function A(e){return(await c.post(`${a}/orders`,e)).data}const f={categor:document.querySelector(".filter-categories"),filtercard:document.querySelector(".filter-cards"),form:document.querySelector(".filter-div-label"),filtersInput:document.getElementById("filter-search"),filtersCategories:document.querySelector(".filter-categories"),addCartBtn:document.querySelector(".shop-btn-card"),listCards:document.querySelector(".filter-cards"),countHeader:document.querySelector(".header-cart-count"),PopularDiv:document.getElementById("popularContainer"),DiscountDiv:document.getElementById("discountContainer"),modalWindowId:document.getElementById("id-modal-card")};function h(){const e=JSON.parse(localStorage.getItem("cart"));e?f.countHeader.textContent=`(${e.length})`:f.countHeader.textContent="(0)"}h();const D="/project-js-dreamteam/assets/icon-ed92c614.svg",u=document.querySelector(".footer-form"),m=document.querySelector(".modal-backdrop"),b=document.querySelector(".modal-subscribe-container"),S=document.querySelector(".modal-unsubscription-container"),v=document.querySelectorAll(".modal-close-btn"),p=document.querySelector(".loader"),y=document.querySelector(".footer-btn-to-top"),q=document.querySelector(".footer-container");document.querySelector(".modal-container");function l(e,o=!0){m.classList.toggle("is-hidden",!e),b.classList.toggle("is-hidden",!o),S.classList.toggle("is-hidden",o),document.body.style.overflow="hidden"}function w(){const e=document.querySelector(".error-message");e.style.display="block",setTimeout(()=>e.style.display="none",2e3)}async function L(e){e.preventDefault();const o=u.querySelector(".footer-form-email").value;p.classList.remove("is-hidden");function s(r){r.target===m&&l(!1),document.body.style.overflow="scroll"}m.addEventListener("click",s);try{const r=await g({email:o});console.log(r.data),l(!0)}catch(r){r.response&&(r.response.status===409?l(!0,!1):w())}finally{p.classList.add("is-hidden"),u.reset()}}function P(){const e=s=>{s.forEach(r=>{y.style.display=r.isIntersecting?"block":"none"})};new IntersectionObserver(e,{root:null,threshold:.5}).observe(q),y.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}))}document.addEventListener("DOMContentLoaded",()=>{const e=window.location.pathname;(e.endsWith("index.html")||e==="/")&&P()});u.addEventListener("submit",L);v.forEach(e=>e.addEventListener("click",()=>l(!1)));export{I as A,O as a,k as b,$ as c,B as g,D as i,h as o,A as p,f as r};
//# sourceMappingURL=subscription-d9763ab2.js.map
