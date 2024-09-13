import"/assets/index-BXGh_3uy.js";import{j as e,u as m,P as v,C as b,i as k,B as y,a as _,b as L,c as N}from"./vendor-0Snx-3gQ.js";import x,{useState as d,useEffect as a}from"react";import{useNavigate as w,BrowserRouter as M,Routes as z,Route as c}from"react-router-dom";import"react-dom";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}})();const T=t=>{let n=null;if(document.cookie&&document.cookie!==""){let s=document.cookie.split(";");for(let r=0;r<s.length;r++){let o=s[r].trim();if(o.substring(0,t.length+1)===t+"="){n=decodeURIComponent(o.substring(t.length+1));break}}}return n},C=(t,n,s={})=>{if(/^(?:\s|%20)+$/.test(t))return;let r=`${encodeURIComponent(t)}=${encodeURIComponent(n)}`;s.expires instanceof Date&&(r+=`; expires=${s.expires.toUTCString()}`),s.path&&(r+=`; path=${s.path}`),s.domain&&(r+=`; domain=${s.domain}`),s.secure&&(r+="; secure"),s.samesite&&(r+=`; samesite=${s.samesite}`),document.cookie=r},R=()=>{const[t,n]=d(document.documentElement.classList.contains("dark")?"dark":"light");return a(()=>{let r=T("dark-theme");r&&n(r==="true"?"dark":"light")},[]),a(()=>{document.documentElement.classList.toggle("dark",t==="dark"),C("dark-theme",t==="dark"?"true":"false")},[t]),{theme:t,toggleTheme:()=>{n(r=>r==="light"?"dark":"light")}}},E=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})}),P=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"white",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}),F=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",id:"flag-icons-pl",viewBox:"0 0 512 512",children:e.jsxs("g",{fillRule:"evenodd",children:[e.jsx("path",{fill:"#fff",d:"M512 512H0V0h512z"}),e.jsx("path",{fill:"#dc143c",d:"M512 512H0V256h512z"})]})}),A=e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",id:"flag-icons-gb",viewBox:"0 0 512 512",children:[e.jsx("path",{fill:"#012169",d:"M0 0h512v512H0z"}),e.jsx("path",{fill:"#FFF",d:"M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"}),e.jsx("path",{fill:"#C8102E",d:"m184 324 11 34L42 512H0v-3zm124-12 54 8 150 147v45zM512 0 320 196l-4-44L466 0zM0 1l193 189-59-8L0 49z"}),e.jsx("path",{fill:"#FFF",d:"M176 0v512h160V0zM0 176v160h512V176z"}),e.jsx("path",{fill:"#C8102E",d:"M0 208v96h512v-96zM208 0v512h96V0z"})]});function S(){const{theme:t,toggleTheme:n}=R();return e.jsx("div",{className:"fixed left-4 top-5 z-50",children:e.jsx("button",{onClick:n,className:"w-14 h-8 p-1 bg-slate-100 dark:bg-gray-700 text-lg rounded-full flex items-center justify-between transition-all duration-300 ease-in-out transform",children:e.jsx("div",{className:`w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${t==="dark"?"translate-x-6 bg-blue-400":"translate-x-0 bg-yellow-400"} flex items-center justify-center`,children:t==="dark"?P:E})})})}function B(){const{i18n:t}=m(),n=s=>{t.changeLanguage(s)};return e.jsx("div",{className:"fixed right-4 top-5 z-50",children:e.jsx("button",{onClick:()=>n(t.language==="en"?"pl":"en"),className:"w-14 h-8 p-1 bg-slate-100 dark:bg-gray-700 text-lg rounded-full flex items-center justify-between transition-all duration-300 ease-in-out transform",children:e.jsx("div",{className:`w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out transition-all ${t.language==="pl"?"translate-x-6":"translate-x-0"} flex items-center justify-center`,children:t.language==="pl"?x.cloneElement(F,{className:"rounded-full h-6 w-6 outline outline-1 outline-slate-300 transition-all"}):x.cloneElement(A,{className:"rounded-full h-6 w-6 outline outline-1 outline-slate-300 transition-all"})})})})}const O=()=>{const{t}=m(),[n,s]=d(null),[r,o]=d(null),[l,i]=d(!1);return a(()=>{(async()=>{try{const h=await(await fetch("https://api.github.com/users/mldxo")).json(),j=new Date(h.created_at).getFullYear();s(j),o(h.avatar_url)}catch(g){console.error("Error fetching data:",g)}})()},[]),e.jsx("div",{className:"flex flex-col-reverse h-0 text-center w-full bg-transparent transition-all duration-300 opacity-50 dark:text-slate-200",children:e.jsxs("div",{className:"flex flex-row mx-auto pb-4 cursor-pointer select-none",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:()=>window.open("https://github.com/mldxo","_blank"),children:[e.jsx("div",{className:"flex flex-row justify-center items-center min-w-4 sm:min-w-5 ml-4 sm:ml-2 md:ml-0 -mr-3 sm:-mr-0",children:l&&r?e.jsx("img",{src:r,alt:"Avatar",className:"inline-block h-4 object-fit rounded-full"}):e.jsx(e.Fragment,{children:"©"})}),e.jsxs("div",{className:"ml-3 sm:ml-0",children:[n,"-",new Date().getFullYear(),"  Miłosz Maculewicz - ",t("footer.all_rights_reserved")]})]})})};u.propTypes={children:v.node.isRequired};function u({children:t}){const{t:n}=m(),[s,r]=d(window.innerWidth);return a(()=>{const o=()=>{r(window.innerWidth)};return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[s]),s>200?e.jsxs("div",{className:"flex flex-col min-h-screen font-inter transition-all duration-200 bg-modern-light/[.4]",children:[e.jsx(S,{}),e.jsx(B,{}),e.jsx("div",{className:"flex flex-col flex-grow w-full justify-center justify-items-center items-center bg-gradient-to-r from-[rgba(108,150,241,0.55)] to-[rgba(78,129,238,0.56)] dark:from-[rgba(80,86,143,0.86)] dark:to-[rgba(44,91,151,0.79)] dark:text-white -mt-2",children:t}),e.jsx(O,{}),e.jsx("div",{id:"cookie-consent",children:e.jsxs(b,{buttonText:n("footer.cookie_consent"),style:{background:"#121212",fontSize:"14px",color:"#fff",textAlign:"left"},buttonStyle:{background:"#333333",fontSize:"14px",color:"#fff",textAlign:"center",padding:"2px"},children:[n("footer.cookie_policy")," "]})})]}):e.jsx(e.Fragment,{children:e.jsx("div",{children:n("too_small_width")})})}const U=()=>{const{t}=m(),n=[{imgSrc:"/assets/undraw_code_review_l1q9.svg",imgAlt:"code_review",titleKey:"main_page.features.feature_1.title",descriptionKey:"main_page.features.feature_1.description"},{imgSrc:"/assets/undraw_programming_2svr.svg",imgAlt:"programming",titleKey:"main_page.features.feature_2.title",descriptionKey:"main_page.features.feature_2.description"},{imgSrc:"/assets/undraw_version_control_9bpv.svg",imgAlt:"version_control",titleKey:"main_page.features.feature_3.title",descriptionKey:"main_page.features.feature_3.description"}];return e.jsx(u,{children:e.jsxs("div",{className:"flex flex-col w-full justify-center elements-center mx-auto py-16 bg-gradient-to-r from-[rgba(224,227,238,0.42)] to-[rgba(207,214,229,0.37)] dark:from-[rgba(52,58,114,0.5)] dark:to-[rgba(29,58,97,0.61)] backdrop-blur-3xl transition-all duration-300 ease-in-out transform text-center",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row w-full max-w-5xl mx-auto items-center justify-center",children:[e.jsxs("div",{className:"flex flex-col w-full items-center justify-center select-none h-full mt-32 sm:mt-0 hover:scale-100 sm:hover:scale-105 hover:opacity-75 transition-all duration-200 ease-linear",children:[e.jsx("h1",{className:"text-5xl font-bold text-center",children:t("main_page.title")}),e.jsx("p",{className:"text-xl text-center mt-0 sm:mt-3",children:t("main_page.description")})]}),e.jsx("div",{className:"flex flex-col w-full items-center justify-center select-none mt-12 sm:mt-0 hover:scale-100 sm:hover:scale-105 transition-all duration-200 ease-linear",children:e.jsx("img",{src:"/assets/undraw_code_thinking_1jeh.svg",alt:"code_thinking",draggable:"false",className:"w-64 drop-shadow-md dark:drop-shadow-light object-cover"})})]}),e.jsxs("div",{className:"flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-32 mb-8 select-none",children:[e.jsx("h1",{className:"text-3xl font-bold text-center mb-6 transition-all duration-200 ease-linear",children:t("main_page.features.title")}),e.jsx("div",{className:"flex flex-col sm:flex-row w-full items-center justify-center select-none",children:n.map((s,r)=>e.jsxs("div",{className:"flex flex-col w-full sm:w-1/3 items-center justify-center select-none mt-8 sm:mt-0 hover:scale-100 sm:hover:scale-105 transition-all duration-200 ease-linear",children:[e.jsx("img",{src:s.imgSrc,alt:s.imgAlt,draggable:"false",className:"h-32 drop-shadow-md dark:drop-shadow-light object-cover"}),e.jsx("h1",{className:"text-lg font-bold text-center mt-3 h-8",children:t(s.titleKey)}),e.jsx("p",{className:"text-center mt-4",children:t(s.descriptionKey)})]},r))})]})]})})},D=()=>e.jsx(u,{children:"Hello World"}),f="/",H="/debug",K="/logout",V="/wyloguj",$=()=>{const t=document.cookie.split(";");for(let n=0;n<t.length;n++){const s=t[n],r=s.indexOf("="),o=r>-1?s.substr(0,r):s;(o!=="theme"||o!=="X-CSRFToken")&&(document.cookie=o+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT")}},W=()=>{const t=w();return()=>{$(),localStorage.clear(),t(f)}},p=()=>{const t=W();return a(()=>{t()},[t]),e.jsx(e.Fragment,{})},I=()=>{const t=w();return a(()=>{(()=>{t(f)})()},[t]),e.jsx("div",{className:"RedirectPage"})};function G(){const{t}=m();return a(()=>{const n=()=>{document.title=t("app_name_blur")},s=()=>{document.title=t("app_name")};return window.addEventListener("blur",n),window.addEventListener("focus",s),document.title=t("app_name"),()=>{window.removeEventListener("blur",n),window.removeEventListener("focus",s)}},[t]),e.jsx("div",{className:"App",children:e.jsx(M,{children:e.jsxs(z,{children:[e.jsx(c,{path:f,element:e.jsx(U,{})}),e.jsx(c,{path:H,element:e.jsx(D,{})}),e.jsx(c,{path:K,element:e.jsx(p,{})}),e.jsx(c,{path:V,element:e.jsx(p,{})}),e.jsx(c,{path:"*",element:e.jsx(I,{})})]})})})}k.use(y).use(_).use(L).init({fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1},backend:{loadPath:"/locales/{{lng}}/translation.json"}});N.createRoot(document.getElementById("root")).render(e.jsx(G,{}));
