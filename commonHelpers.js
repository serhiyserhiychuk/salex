(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const l=[{username:"Johnny Appleseed",password:"password",userdata:{balance:1e3,homeroom:119}},{username:"Mario Mario",password:"mushroom",userdata:{balance:5e10,homeroom:222}}];console.log(l);const c=document.querySelector(".login-form");function i(t,n){try{for(const r of l)if(r.username===t&&r.password===n){console.log("Login success");const s=document.getElementById("balance");s.innerHTML="Balance: "+r.userdata.balance}else alert("User not found")}catch(r){console.error(r)}}c.addEventListener("submit",u);function u(t){t.preventDefault();const n=document.getElementById("name").value,r=document.getElementById("password").value;i(n,r)}
//# sourceMappingURL=commonHelpers.js.map
