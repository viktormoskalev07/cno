if(document.querySelector(".documentation")){const e=document.querySelector(".header");function toggleSidebar(){const e=document.querySelector(".sidebar"),t=document.querySelector(".sidebar__toggler"),o=document.querySelector(".sidebar__close");window.innerWidth<1200?(t.addEventListener("click",(function(){e.classList.add("active")})),o.addEventListener("click",(function(){e.classList.remove("active")})),window.innerWidth<768&&(t.addEventListener("click",hidescroll),o.addEventListener("click",showscroll))):window.innerWidth>=1200&&e.classList.remove("active")}if(document.querySelector(".main").style.paddingTop=e.clientHeight+50+"px",document.querySelector(".toc")){function removeActiveClass(e){for(let t=0;t<e.length;t++)e[t].classList.remove("active")}function switchActiveOnListItem(){let e=null;const t=document.querySelectorAll(".toc ul li a");for(let o=0;o<t.length;o++){document.getElementById(t[o].getAttribute("href").substring(1)).getBoundingClientRect().top<=50&&(e=t[o],removeActiveClass(t),t[o].classList.add("active"))}}document.querySelector(".toc").style.top=e.clientHeight+70+"px"}function copyToClipboard(){const e=document.querySelectorAll(".token");let t=document.createRange();e.forEach(e=>{e.querySelector(".token__copy").addEventListener("click",(function(){t.selectNode(e.querySelector(".token__comand")),window.getSelection().removeAllRanges(),window.getSelection().addRange(t),document.execCommand("copy"),window.getSelection().removeAllRanges(),e.querySelector(".token__tooltip").innerText="Copied",setTimeout(()=>{e.querySelector(".token__tooltip").innerText="Copy To Clipboard"},1250)}))})}toggleSidebar(),window.addEventListener("DOMContentLoaded",copyToClipboard),window.addEventListener("scroll",switchActiveOnListItem),window.addEventListener("resize",toggleSidebar)}