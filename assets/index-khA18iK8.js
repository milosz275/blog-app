import{r as o,j as e,u as x,R as S,d as h,P as T,a as R,B as z,b as I,c as g,i as F,e as B,f as O,g as $,h as U}from"./vendor-BViA_qfX.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const P=t=>{let r=null;if(document.cookie&&document.cookie!==""){let s=document.cookie.split(";");for(let n=0;n<s.length;n++){let a=s[n].trim();if(a.substring(0,t.length+1)===t+"="){r=decodeURIComponent(a.substring(t.length+1));break}}}return r},C=(t,r,s={})=>{if(!t||/^(?:\s|%20)+$/.test(t))return;let n=`${encodeURIComponent(t)}=${encodeURIComponent(r)}`;s.expires instanceof Date&&(n+=`; expires=${s.expires.toUTCString()}`),s.path&&(n+=`; path=${s.path}`),s.domain&&(n+=`; domain=${s.domain}`),s.secure&&(n+="; secure"),s.samesite&&(n+=`; samesite=${s.samesite}`),document.cookie=n},K=()=>{const[t,r]=o.useState(document.documentElement.classList.contains("dark")?"dark":"light");return o.useEffect(()=>{let n=P("dark-theme");n&&r(n==="true"?"dark":"light")},[]),o.useEffect(()=>{document.documentElement.classList.toggle("dark",t==="dark"),C("dark-theme",t==="dark"?"true":"false")},[t]),{theme:t,toggleTheme:()=>{r(n=>n==="light"?"dark":"light")}}},V=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})}),H=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"white",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}),J=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",id:"flag-icons-pl",viewBox:"0 0 512 512",children:e.jsxs("g",{fillRule:"evenodd",children:[e.jsx("path",{fill:"#fff",d:"M512 512H0V0h512z"}),e.jsx("path",{fill:"#dc143c",d:"M512 512H0V256h512z"})]})}),G=e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",id:"flag-icons-gb",viewBox:"0 0 512 512",children:[e.jsx("path",{fill:"#012169",d:"M0 0h512v512H0z"}),e.jsx("path",{fill:"#FFF",d:"M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"}),e.jsx("path",{fill:"#C8102E",d:"m184 324 11 34L42 512H0v-3zm124-12 54 8 150 147v45zM512 0 320 196l-4-44L466 0zM0 1l193 189-59-8L0 49z"}),e.jsx("path",{fill:"#FFF",d:"M176 0v512h160V0zM0 176v160h512V176z"}),e.jsx("path",{fill:"#C8102E",d:"M0 208v96h512v-96zM208 0v512h96V0z"})]}),W=e.jsx("svg",{className:"w-6 h-6 text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{fillRule:"evenodd",d:"M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z",clipRule:"evenodd"})});function Y(){const{theme:t,toggleTheme:r}=K(),[s,n]=o.useState(!0);return o.useEffect(()=>{const a=()=>{window.scrollY>50?n(!1):n(!0)};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[]),e.jsx("div",{className:`fixed left-5 top-5 z-50 transition-opacity duration-300 ${s?"opacity-100":"opacity-0"}`,children:e.jsx("button",{onClick:r,className:"w-14 h-8 p-1 bg-slate-100 dark:bg-gray-700 hover:bg-slate-200 dark:hover:bg-gray-800 text-lg rounded-full flex items-center justify-between transition-all duration-300 ease-in-out transform",children:e.jsx("div",{className:`w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${t==="dark"?"translate-x-6 bg-blue-400":"translate-x-0 bg-yellow-400"} flex items-center justify-center`,children:t==="dark"?H:V})})})}function q(){const{i18n:t}=x(),[r,s]=o.useState(!0),n=a=>{t.changeLanguage(a),h.Store.removeAllNotifications()};return o.useEffect(()=>{const a=()=>{window.scrollY>50?s(!1):s(!0)};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[]),e.jsx("div",{className:`fixed right-5 top-5 z-50 transition-opacity duration-300 ${r?"opacity-100":"opacity-0"}`,children:e.jsx("button",{onClick:()=>n(t.language==="en"?"pl":"en"),className:"w-14 h-8 p-1 bg-slate-100 dark:bg-gray-700 hover:bg-slate-200 dark:hover:bg-gray-800 text-lg rounded-full flex items-center justify-between transition-all duration-300 ease-in-out transform",children:e.jsx("div",{className:`w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out transition-all ${t.language==="pl"?"translate-x-6":"translate-x-0"} flex items-center justify-center`,children:t.language==="pl"?S.cloneElement(J,{className:"rounded-full h-6 w-6 outline outline-1 outline-slate-300 transition-all"}):S.cloneElement(G,{className:"rounded-full h-6 w-6 outline outline-1 outline-slate-300 transition-all"})})})})}const X=()=>{const{i18n:t,t:r}=x(),[s,n]=o.useState(null),[a,i]=o.useState(null),[d,f]=o.useState(!1),[l,c]=o.useState(!1),[k,M]=o.useState(null),[N,m]=o.useState(null);return o.useEffect(()=>{(async()=>{try{const u=await fetch("https://api.github.com/users/mldxo");if(!u.ok){(await u.json()).message.includes("API rate limit exceeded")?m("API rate limit exceeded. Please try again later."):m("Error fetching user data.");return}const b=await u.json(),A=new Date(b.created_at).getFullYear();n(A);const _=new Image;_.src=b.avatar_url,_.onload=()=>{i(b.avatar_url),c(!0)};const v=await fetch("https://api.github.com/repos/mldxo/blog-app/deployments");if(!v.ok){(await v.json()).message.includes("API rate limit exceeded")?m("API rate limit exceeded. Please try again later."):m("Error fetching deployment data.");return}const L=await v.json();if(L.length>0){const j=t.language==="en"?"en-GB":"pl-PL",D=new Date(L[0].created_at).toLocaleDateString(j,{day:"2-digit",month:"long",year:"numeric"});M(D)}}catch(u){console.error("Error fetching data:",u),m("An unexpected error occurred.")}})()},[r,t.language]),e.jsxs("div",{className:"flex flex-col-reverse h-0 text-center w-full bg-transparent transition-all opacity-50 dark:text-slate-200",children:[e.jsxs("div",{className:"flex flex-row mx-auto pb-4 cursor-pointer select-none",children:[e.jsx("div",{className:"hover:opacity-70 transition-all duration-300 hidden sm:block",onClick:()=>window.location.href="https://mldxo.github.io",children:W}),e.jsxs("div",{className:"flex flex-row mx-auto pb-4 cursor-pointer select-none hover:opacity-70 transition-all duration-300",onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),onClick:()=>window.open("https://github.com/mldxo","_blank"),children:[e.jsx("div",{className:"flex-row justify-center items-center min-w-5 sm:min-w-6 ml-4 sm:ml-2 md:ml-0 -mr-3 sm:-mr-0 hidden sm:flex",children:e.jsxs("div",{className:"relative",children:[e.jsx("span",{className:`transition-opacity duration-300 ${d&&l?"opacity-0":"opacity-100"}`,children:"©"}),a&&e.jsx("img",{src:a,alt:"Avatar",className:`inline-block object-fit h-4 w-4 rounded-full absolute top-1 left-0 transition-opacity duration-300 ${d&&l?"opacity-100":"opacity-0"}`})]})}),e.jsxs("div",{className:"flex ml-3 sm:ml-0",children:[e.jsx("p",{className:"flex-col sm:hidden mr-1 sm:mr-0",children:"©"}),e.jsxs("p",{children:[s?`${s}-${new Date().getFullYear()}`:new Date().getFullYear()," Miłosz Maculewicz - ",r("footer.all_rights_reserved")]})]})]})]}),e.jsx("div",{className:"flex flex-col-reverse h-0 text-center w-full bg-transparent transition-all opacity-50 dark:text-slate-200",children:e.jsx("div",{className:"flex flex-row mx-auto pb-4 cursor-normal select-none",children:e.jsx("div",{className:"hover:opacity-70 transition-all duration-300",children:k?e.jsxs("p",{children:[r("footer.last_deploy")," ",k]}):N?e.jsx("p",{children:N}):e.jsx("p",{children:r("footer.error_message")})})})})]})};w.propTypes={children:T.node.isRequired};function w({children:t}){const{t:r}=x(),[s,n]=o.useState(window.innerWidth);return o.useEffect(()=>{const a=()=>{n(window.innerWidth)};return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[s]),o.useEffect(()=>{P("cookie-consent")||(h.Store.addNotification({title:"Cookies",message:"This website uses cookies to enhance the user experience.",type:"info",container:"bottom-right",insert:"bottom",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3,onScreen:!0}}),C("cookie-consent","true"))},[]),s>200?e.jsxs("div",{className:"flex flex-col min-h-screen font-inter transition-all duration-200 bg-modern-light/[.4]",children:[e.jsx(Y,{}),e.jsx(q,{}),e.jsx("div",{className:"flex flex-col flex-grow w-full justify-center justify-items-center items-center bg-gradient-to-r from-[rgba(108,150,241,0.55)] to-[rgba(78,129,238,0.56)] dark:from-[rgba(80,86,143,0.86)] dark:to-[rgba(44,91,151,0.79)] dark:text-white -mt-2  pb-40",children:t}),e.jsx(X,{})]}):e.jsx(e.Fragment,{children:e.jsx("div",{children:r("too_small_width")})})}const Z=()=>{const{t}=x(),r=[{imgSrc:"/blog-app/assets/undraw_code_review_l1q9.svg",imgAlt:"code_review",titleKey:"main_page.features.feature_1.title",descriptionKey:"main_page.features.feature_1.description"},{imgSrc:"/blog-app/assets/undraw_programming_2svr.svg",imgAlt:"programming",titleKey:"main_page.features.feature_2.title",descriptionKey:"main_page.features.feature_2.description"},{imgSrc:"/blog-app/assets/undraw_version_control_9bpv.svg",imgAlt:"version_control",titleKey:"main_page.features.feature_3.title",descriptionKey:"main_page.features.feature_3.description"},{imgSrc:"/blog-app/assets/undraw_source_code_re_wd9m.svg",imgAlt:"code_snippets",titleKey:"main_page.features.feature_4.title",descriptionKey:"main_page.features.feature_4.description"},{imgSrc:"/blog-app/assets/undraw_server_push_re_303w.svg",imgAlt:"github_integration",titleKey:"main_page.features.feature_5.title",descriptionKey:"main_page.features.feature_5.description"}],s=[{title:"Understanding React Hooks",excerpt:"A guide to mastering React Hooks in modern development.",slug:"react-hooks"},{title:"Advanced JavaScript Techniques",excerpt:"Learn advanced JavaScript patterns and best practices.",slug:"javascript-techniques"},{title:"CSS Grid vs Flexbox",excerpt:"A comprehensive comparison between CSS Grid and Flexbox.",slug:"css-grid-vs-flexbox"}],n=[{user:"Jane Doe",feedback:"This platform has revolutionized how I learn and share coding knowledge."},{user:"John Smith",feedback:"The community here is so helpful, I’ve grown immensely as a developer."},{user:"Mary Johnson",feedback:"Amazing blog posts, always insightful and up-to-date!"}],a=[{name:"Alice Johnson",avatar:"/blog-app/assets/developer1.jpg",description:"Full-stack developer specializing in React and Node.js."},{name:"Bob Martin",avatar:"/blog-app/assets/developer2.jpg",description:"Python and Django expert with a passion for AI."},{name:"Catherine Lee",avatar:"/blog-app/assets/developer3.jpg",description:"Front-end developer with a knack for beautiful UI designs."}],i=[{name:"JavaScript",slug:"javascript"},{name:"React",slug:"react"},{name:"CSS",slug:"css"},{name:"Node.js",slug:"nodejs"},{name:"Python",slug:"python"}],d=[{name:"JavaScript"},{name:"Python"},{name:"Ruby"},{name:"Java"},{name:"C++"}],f=[{name:"David Green",avatar:"/blog-app/assets/contributor1.jpg",posts:42},{name:"Laura Baker",avatar:"/blog-app/assets/contributor2.jpg",posts:37},{name:"Michael Scott",avatar:"/blog-app/assets/contributor3.jpg",posts:29}];return o.useEffect(()=>{h.Store.addNotification({title:t("main_page.notification.title"),message:t("main_page.notification.message"),type:"success",insert:"bottom",container:"bottom-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3,onScreen:!0}})},[t]),e.jsxs(w,{children:[e.jsxs("div",{className:"flex flex-col w-full justify-center elements-center mx-auto pt-24 pb-16 bg-gradient-to-r from-[rgba(224,227,238,0.42)] to-[rgba(207,214,229,0.37)] dark:from-[rgba(52,58,114,0.5)] dark:to-[rgba(29,58,97,0.61)] backdrop-blur-3xl transition-all duration-300 ease-in-out transform text-center",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row w-full max-w-5xl mx-auto items-center justify-center mt-20",children:[e.jsxs("div",{className:"flex flex-col w-full items-center justify-center select-none h-full mt-32 sm:mt-0 hover:scale-100 sm:hover:scale-105 hover:opacity-75 transition-all duration-200 ease-linear",children:[e.jsx("h1",{className:"text-5xl font-bold text-center",children:t("main_page.title")}),e.jsx("p",{className:"text-xl text-center mt-2 sm:mt-3",children:t("main_page.description")})]}),e.jsx("div",{className:"flex flex-col w-full items-center justify-center select-none mt-12 sm:mt-0 hover:scale-100 sm:hover:scale-105 transition-all duration-200 ease-linear",children:e.jsx("img",{src:"/blog-app/assets/undraw_code_thinking_1jeh.svg",alt:"code_thinking",draggable:"false",className:"w-72 drop-shadow-md dark:drop-shadow-light object-cover"})})]}),e.jsxs("div",{className:"flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-36 mb-8 select-none",children:[e.jsx("h1",{className:"text-3xl font-bold text-center hover:scale-105 mb-12 transition-all duration-200 ease-linear",children:t("main_page.features.title")}),e.jsx("div",{className:"grid w-full items-center justify-center select-none gap-4 mx-2 px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",children:r.map((l,c)=>e.jsxs("div",{className:"flex flex-col items-center select-none mt-8 sm:mt-0 hover:scale-100 sm:hover:scale-105 transition-all duration-200 ease-linear gap-4 mx-2 px-2 h-96",children:[e.jsx("div",{className:"w-36 h-36 rounded-full bg-gradient-to-r from-[#4a90e2] to-[#8e44ad] dark:from-[#8e44ad] dark:to-[#4a90e2] flex items-center justify-center",children:e.jsx("img",{src:l.imgSrc,alt:l.imgAlt,draggable:"false",className:"drop-shadow-md dark:drop-shadow-light object-cover scale-75"})}),e.jsx("h1",{className:"text-lg font-bold text-center mt-3 h-12",children:t(l.titleKey)}),e.jsx("p",{className:"text-center mt-4 h-15",children:t(l.descriptionKey)})]},c))})]})]}),e.jsxs("div",{className:"flex flex-col w-full justify-center elements-center mx-auto pt-24 pb-16 bg-transparent backdrop-blur-3xl transition-all duration-300 ease-in-out transform text-center",children:[e.jsxs("div",{className:"flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-24 mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-center mb-8 select-none",children:"Recent Posts"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:s.map((l,c)=>e.jsxs("div",{className:"bg-gradient-to-bl from-slate-100/[.8] to-slate-200/[.8] dark:from-gray-800/[.8] dark:to-gray-900/[.8] transition-all duration-200 opacity-90 hover:opacity-100 p-4 rounded-lg shadow-md",children:[e.jsx("h2",{className:"text-xl font-bold",children:l.title}),e.jsx("p",{className:"mt-2 text-gray-600 dark:text-gray-400",children:l.excerpt}),e.jsx("a",{href:`/posts/${l.slug}`,className:"text-blue-500 dark:text-blue-400 mt-4 inline-block",children:"Read More"})]},c))})]}),e.jsxs("div",{className:"flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-24 mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-center mb-8 select-none",children:"Community Feedback"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:n.map((l,c)=>e.jsxs("div",{className:"bg-gradient-to-bl from-slate-100/[.8] to-slate-200/[.8] dark:from-gray-800/[.8] dark:to-gray-900/[.8] transition-all duration-200 opacity-90 hover:opacity-100 p-4 rounded-lg shadow-md",children:[e.jsx("p",{className:"text-lg font-semibold",children:l.user}),e.jsx("p",{className:"mt-2 text-gray-600 dark:text-gray-400",children:l.feedback})]},c))})]}),e.jsxs("div",{className:"flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-24 mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-center mb-8 select-none",children:"Featured Developers"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:a.map((l,c)=>e.jsxs("div",{className:"bg-gradient-to-bl from-slate-100/[.8] to-slate-200/[.8] dark:from-gray-800/[.8] dark:to-gray-900/[.8] transition-all duration-200 opacity-90 hover:opacity-100 p-4 rounded-lg shadow-md text-center",children:[e.jsx("img",{src:l.avatar,alt:l.name,className:"rounded-full w-24 h-24 mx-auto"}),e.jsx("h2",{className:"mt-4 text-xl font-bold",children:l.name}),e.jsx("p",{className:"mt-2 text-gray-600 dark:text-gray-400",children:l.description})]},c))})]}),e.jsxs("div",{className:"flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-24 mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-center mb-8 select-none",children:"Top Contributors"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:f.map((l,c)=>e.jsxs("div",{className:"bg-gradient-to-bl from-slate-100/[.8] to-slate-200/[.8] dark:from-gray-800/[.8] dark:to-gray-900/[.8] transition-all duration-200 opacity-90 hover:opacity-100 p-4 rounded-lg shadow-md text-center",children:[e.jsx("img",{src:l.avatar,alt:l.name,className:"rounded-full w-24 h-24 mx-auto"}),e.jsx("h2",{className:"mt-4 text-xl font-bold",children:l.name}),e.jsxs("p",{className:"mt-2 text-gray-600 dark:text-gray-400",children:["Contributed ",l.posts," blog posts"]})]},c))})]}),e.jsxs("div",{className:"flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-24 mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-center mb-8 select-none",children:"Browse by Tags"}),e.jsx("div",{className:"flex flex-wrap gap-2 justify-center",children:i.map((l,c)=>e.jsx("a",{href:`/tags/${l.slug}`,className:"bg-gradient-to-bl from-slate-100/[.8] to-slate-200/[.8] dark:from-gray-800/[.8] dark:to-gray-900/[.8] transition-all duration-200 opacity-90 hover:opacity-100 px-4 py-2 rounded-lg",children:l.name},c))})]}),e.jsxs("div",{className:"flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-24 mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-center mb-8 select-none",children:"Developer Poll"}),e.jsxs("div",{className:"bg-gradient-to-bl from-slate-100/[.8] to-slate-200/[.8] dark:from-gray-800/[.8] dark:to-gray-900/[.8] transition-all duration-200 opacity-90 hover:opacity-100 p-4 rounded-lg shadow-md text-center",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Which programming language do you use the most?"}),e.jsx("div",{className:"mt-4",children:d.map((l,c)=>e.jsx("button",{className:"bg-blue-500 hover:bg-blue-600 transition-all duration-200 text-white px-4 py-2 rounded-lg mr-2",children:l.name},c))})]})]}),e.jsxs("div",{className:"flex flex-col w-full max-w-4xl items-center justify-center mx-auto mt-24 mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-center mb-8 select-none",children:"Subscribe to our Newsletter"}),e.jsxs("form",{className:"w-full max-w-lg mx-auto",children:[e.jsx("input",{type:"email",placeholder:"Enter your email",className:"w-full p-2 mb-4 border border-gray-300 rounded-lg outline-none hover:outline-none cursor-text text-black",readOnly:!1}),e.jsx("button",{type:"submit",className:"bg-blue-600/[.8] hover:bg-blue-600 transition-all duration-200 text-white p-2 w-full rounded-lg",children:"Subscribe"})]})]})]})]})},Q=()=>e.jsx(w,{children:"Hello World"});let p="/blog-app";const y=p+"/",ee=p+"/debug",te=p+"/logout",ae=p+"/wyloguj",se=()=>{const t=document.cookie.split(";");for(let r=0;r<t.length;r++){const s=t[r],n=s.indexOf("="),a=n>-1?s.substr(0,n):s;(a!=="theme"||a!=="X-CSRFToken")&&(document.cookie=a+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT")}},re=()=>{const t=R();return()=>{se(),localStorage.clear(),t(y)}},E=()=>{const t=re();return o.useEffect(()=>{t()},[t]),e.jsx(e.Fragment,{})},ne=()=>{const t=R();return o.useEffect(()=>{(()=>{t(y)})()},[t]),e.jsx("div",{className:"RedirectPage"})};function le(){const{t}=x();return o.useEffect(()=>{const r=()=>{document.title=t("app_name_blur")},s=()=>{document.title=t("app_name")};return window.addEventListener("blur",r),window.addEventListener("focus",s),document.title=t("app_name"),()=>{window.removeEventListener("blur",r),window.removeEventListener("focus",s)}},[t]),e.jsx("div",{className:"App",children:e.jsx(z,{children:e.jsxs(I,{children:[e.jsx(g,{path:y,element:e.jsx(Z,{})}),e.jsx(g,{path:ee,element:e.jsx(Q,{})}),e.jsx(g,{path:te,element:e.jsx(E,{})}),e.jsx(g,{path:ae,element:e.jsx(E,{})}),e.jsx(g,{path:"*",element:e.jsx(ne,{})})]})})})}F.use(B).use(O).use($).init({fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1},backend:{loadPath:"/blog-app/locales/{{lng}}/translation.json"}});U.createRoot(document.getElementById("root")).render(e.jsxs(e.Fragment,{children:[e.jsx(h.ReactNotifications,{}),e.jsx(le,{})]}));
