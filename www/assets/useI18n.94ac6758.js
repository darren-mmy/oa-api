var r=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;"undefined"!=typeof require&&require;import{i as f}from"./index.2c6e8c15.js";function l(r,e){return r?e.startsWith(r)?e:`${r}.${e}`:e}function c(r){if(!f)return{t:e=>l(r,e)};const c=f.global,{t:u}=c,p=((r,e)=>{var t={};for(var a in r)o.call(r,a)&&e.indexOf(a)<0&&(t[a]=r[a]);if(null!=r&&n)for(var a of n(r))e.indexOf(a)<0&&i.call(r,a)&&(t[a]=r[a]);return t})(c,["t"]);return s=((r,e)=>{for(var t in e||(e={}))o.call(e,t)&&a(r,t,e[t]);if(n)for(var t of n(e))i.call(e,t)&&a(r,t,e[t]);return r})({},p),e(s,t({t:(e,...t)=>e?e.includes(".")||r?u(l(r,e),...t):e:""}));var s}export{c as u};