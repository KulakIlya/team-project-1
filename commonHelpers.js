import{A as f}from"./assets/vendor-dd53951f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const o=document.querySelector(".overlay"),i=document.querySelector(".burger-btn"),s=document.querySelector(".mm-close-btn");o==null||o.addEventListener("click",l=>{l.target.closest(".mm-item")&&c()});i==null||i.addEventListener("click",c);s==null||s.addEventListener("click",c);function c(){o==null||o.classList.toggle("is-hidden"),document.body.classList.toggle("menu-is-opened")}f.init({offset:0,delay:50,duration:1e3,easing:"ease-in-out",once:"true"});
//# sourceMappingURL=commonHelpers.js.map
