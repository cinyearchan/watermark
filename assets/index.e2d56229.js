import{r as m,a as N,o as G,E as H,b as K,c as X,d as J,e as Q,f as Y,g as L,h as M,i as s,j as k,w as T,u as P,p as Z,k as ee,W as te,F as D,l as $,m as z,n as oe,q as W,s as ne}from"./vendor.6731f183.js";const le=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function _(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=_(o);fetch(o.href,a)}};le();var q="/watermark/assets/default.d1e79ed3.png";function j(v,c,_){var r=window,o="application/octet-stream",a=_||o,n=v,g=!c&&!_&&n,d=document.createElement("a"),C=function(l){return String(l)},w=r.Blob||r.MozBlob||r.WebKitBlob||C,U=c||"download",h,A;if(w=w.call?w.bind(r):Blob,String(this)==="true"&&(n=[n,a],a=n[0],n=n[1]),g&&g.length<2048&&(U=g.split("/").pop().split("?")[0],d.href=g,d.href.indexOf(g)!==-1)){var x=new XMLHttpRequest;return x.open("GET",g,!0),x.responseType="blob",x.onload=function(l){j(l.target.response,U,o)},setTimeout(function(){x.send()},0),x}if(/^data\:[\w+\-]+\/[\w+\-]+[,;]/.test(n))if(n.length>1024*1024*1.999&&w!==C)n=O(n),a=n.type||o;else return navigator.msSaveBlob?navigator.msSaveBlob(O(n),U):S(n);h=n instanceof w?n:new w([n],{type:a});function O(l){var b=l.split(/[:;,]/),B=b[1],R=b[2]=="base64"?atob:decodeURIComponent,F=R(b.pop()),i=F.length,e=0,u=new Uint8Array(i);for(e;e<i;++e)u[e]=F.charCodeAt(e);return new w([u],{type:B})}function S(l,b){if("download"in d)return d.href=l,d.setAttribute("download",U),d.className="download-js-link",d.innerHTML="downloading...",d.style.display="none",document.body.appendChild(d),setTimeout(function(){d.click(),document.body.removeChild(d),b===!0&&setTimeout(function(){r.URL.revokeObjectURL(d.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return l=l.replace(/^data:([\w\/\-\+]+)/,o),window.open(l)||confirm(`Displaying New Document

Use Save As... to download, then click back to return to this page.`)&&(location.href=l),!0;var B=document.createElement("iframe");document.body.appendChild(B),b||(l="data:"+l.replace(/^data:([\w\/\-\+]+)/,o)),B.src=l,setTimeout(function(){document.body.removeChild(B)},333)}if(navigator.msSaveBlob)return navigator.msSaveBlob(h,U);if(r.URL)S(r.URL.createObjectURL(h),!0);else{if(typeof h=="string"||h.constructor===C)try{return S("data:"+a+";base64,"+r.btoa(h))}catch{return S("data:"+a+","+encodeURIComponent(h))}A=new FileReader,A.onload=function(l){S(this.result)},A.readAsDataURL(h)}return!0}var ae=(v,c)=>{const _=v.__vccOpts||v;for(const[r,o]of c)_[r]=o;return _};const I=v=>(Z("data-v-7fc02c65"),v=v(),ee(),v),se={class:"home"},re={class:"imgcontent"},de=["src"],ie=z("\u9009\u62E9\u56FE\u7247"),ce={class:"text"},ue={class:"fontstyle"},pe=I(()=>s("span",null,"\u5B57\u4F53 / \u989C\u8272\uFF1A",-1)),fe={class:"other"},me={class:"block"},ve=I(()=>s("span",{class:"demonstration"},"\u900F\u660E\u5EA6",-1)),_e={class:"block"},ge=I(()=>s("span",{class:"demonstration"},"\u5B57\u4F53\u5927\u5C0F",-1)),he={class:"block"},be=I(()=>s("span",{class:"demonstration"},"\u89D2\u5EA6",-1)),ye={class:"block"},ke=I(()=>s("span",{class:"demonstration"},"\u95F4\u9694",-1)),we={class:"block"},Ve=I(()=>s("span",{class:"demonstration"},"\u4FDD\u5B58\u7C7B\u578B",-1)),xe={class:"el-slider",style:{"text-align":"left"}},Ce={class:"save"},Ue=z("\u4FDD\u5B58\u56FE\u7247"),Ae={setup(v){const c=m(q),_=m(q),r=m(50),o=m("#ffffff"),a=m(24),n=m("\u4EC5\u7528\u4E8Exxxxx\u4F7F\u7528"),g=m(45),d=m(32),C=m("png"),w=N(["png","jpg"]),U=N(["#000000","#ffffff","#ff4500","#ff8c00","#ffd700","#1e90ff","#c71585"]),h=N([{markedFont:"Arial",label:"\u9ED8\u8BA4"},{markedFont:"\u4EFF\u5B8B",label:"\u4EFF\u5B8B"},{markedFont:"\u6977\u4F53",label:"\u6977\u4F53"},{markedFont:"\u5B8B\u4F53",label:"\u5B8B\u4F53"},{markedFont:"\u9ED1\u4F53",label:"\u9ED1\u4F53"}]),A=m("Arial"),x=m();function O(){x.value.click()}function S(i){const e=i.target.files[0],u=new FileReader;u.readAsDataURL(e),u.onload=p=>{c.value=p.target.result,_.value=p.target.result,b()}}function l(){b()}async function b(){try{const i=await te([_.value]).image(B).render();c.value=i[0].src}catch(i){throw new Error(i)}}function B(i){let e=i.getContext("2d"),u=a.value,p=n.value,f=g.value,V=A.value;p=`${p}   `,p=p.repeat(50);let E=0,y=i.height;e.globalAlpha=r.value/100,e.fillStyle=o.value,e.font=`${u}px ${V}`,e.rotate(f*Math.PI/180);for(let t=0;t<200;t++)y=y-d.value*3,e.fillText(p,E,y);return i}const R=()=>{oe("\u957F\u6309\u56FE\u7247\u4FDD\u5B58\u5230\u624B\u673A\u76F8\u518C\uFF01")};function F(){const i=c.value,e=navigator.userAgent,u=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),p=e.indexOf("Android")>-1||e.indexOf("Adr")>-1;if(u||p)return R(),!1;if(window.navigator.msSaveOrOpenBlob){let f=atob(i.split(",")[1]),V=f.length,E=new Uint8Array(V);for(;V--;)E[V]=f.charCodeAt(V);let y=new Blob([E]);const t="download.jpg";window.navigator.msSaveOrOpenBlob(y,t)}else try{const f=C.value;j(i,`download.${f}`,`image/${f}`)}catch(f){throw new Error(f)}}return G(()=>{b()}),(i,e)=>{const u=H,p=K,f=X,V=J,E=Q,y=Y;return L(),M("div",se,[s("div",re,[s("img",{src:c.value},null,8,de),k(u,{onClick:O},{default:T(()=>[ie]),_:1}),s("input",{type:"file",ref_key:"fileInput",ref:x,accept:"image/*",onChange:S,style:{display:"none"}},null,544)]),s("div",ce,[k(p,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=t=>n.value=t),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",onInput:l},null,8,["modelValue"])]),s("div",ue,[pe,k(V,{modelValue:A.value,"onUpdate:modelValue":e[1]||(e[1]=t=>A.value=t),onChange:l,placeholder:"\u8BF7\u9009\u62E9"},{default:T(()=>[(L(!0),M(D,null,$(P(h),t=>(L(),W(f,{key:t.markedFont,label:t.label,value:t.markedFont},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),k(E,{modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=t=>o.value=t),predefine:P(U),onChange:l},null,8,["modelValue","predefine"])]),s("div",fe,[s("div",me,[ve,k(y,{modelValue:r.value,"onUpdate:modelValue":e[3]||(e[3]=t=>r.value=t),onChange:l},null,8,["modelValue"])]),s("div",_e,[ge,k(y,{modelValue:a.value,"onUpdate:modelValue":e[4]||(e[4]=t=>a.value=t),onChange:l},null,8,["modelValue"])]),s("div",he,[be,k(y,{modelValue:g.value,"onUpdate:modelValue":e[5]||(e[5]=t=>g.value=t),min:0,max:90,onChange:l},null,8,["modelValue"])]),s("div",ye,[ke,k(y,{modelValue:d.value,"onUpdate:modelValue":e[6]||(e[6]=t=>d.value=t),min:32,max:100,onChange:l},null,8,["modelValue"])]),s("div",we,[Ve,s("div",xe,[k(V,{modelValue:C.value,"onUpdate:modelValue":e[7]||(e[7]=t=>C.value=t),placeholder:"\u8BF7\u9009\u62E9"},{default:T(()=>[(L(!0),M(D,null,$(P(w),t=>(L(),W(f,{key:t,label:t,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])])]),s("div",Ce,[k(u,{onClick:F},{default:T(()=>[Ue]),_:1})])])}}};var Se=ae(Ae,[["__scopeId","data-v-7fc02c65"]]);ne(Se).mount("#app");
