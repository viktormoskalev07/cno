function closenav(){nav.classList.remove("nav-open"),btnMenu.style.marginRight="0",showscroll()}function togglenav(){nav.classList.toggle("nav-open"),nav.classList.contains("nav-open")?(btnMenu.style.marginRight=window.innerWidth-html.offsetWidth+"px",hidescroll(),document.querySelector(".sidebar")&&document.querySelector(".sidebar").classList.remove("active")):(showscroll(),btnMenu.style.marginRight="0")}function hidescroll(){body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden"}function showscroll(){body.style.paddingRight=0,body.style.overflow="visible"}body=document.querySelector("body"),html=document.querySelector("html"),header=document.querySelector("header"),headerContent=document.querySelector(".header-content"),btnMenu=document.querySelector(".btn-menu"),nav=document.querySelector(".nav"),document.querySelector(".btn-menu").addEventListener("click",togglenav),document.querySelector(".nav-menu").onclick=closenav,document.querySelector(".nav-background").onclick=closenav;let scrolid=0;function togglescroll(){0==scrolid?(body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden",scrolid=1):(body.style.paddingRight=0,body.style.overflow="visible",scrolid=0)}function pagescroll(){let e=0;pageYOffset>2&&header.classList.add("header-bg-js"),window.addEventListener("scroll",(function(){if(pageYOffset>50)header.classList.add("header-bg-js");else try{header.classList.remove("header-bg-js")}catch(e){console.log(e)}e<pageYOffset&pageYOffset>header.offsetHeight?header.style="transform:translateY(-100%); box-shadow: none":header.style="transform:none; box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);",pageYOffset<50&&(header.style="box-shadow: none"),e=pageYOffset}))}window.onload=function(){pagescroll()};const cards=document.querySelectorAll(".card-dark");function cardsToggler(){if(cards.length>-1)for(let e=0;e<cards.length;e++)cards[e].addEventListener("click",(function(){this.classList.toggle("card-dark-active")})),cards[e].addEventListener("keypress",(function(e){"Enter"==e.key&&this.classList.toggle("card-dark-active")}))}window.addEventListener("load",cardsToggler),window.addEventListener("load",(function(){if(this.document.querySelector(".cards1"))try{new Swiper(".cards1",{pagination:{el:".swiper-pagination"}})}catch(e){console.log(e)}const e=document.getElementById("swiper-tabs-wrap"),t=document.getElementById("tabs-box");function n(){let n=window.matchMedia("(min-width: 0px) and (max-width:692px)"),o=window.matchMedia("(min-width: 693px)");n.matches?e&&t&&(t.style.display="none",e.style.display="block"):o.matches&&e&&t&&(e.style.display="none",t.style.display="block")}n(),document.querySelector(".swiper-tabs")&&new Swiper(".swiper-tabs",{pagination:{el:".swiper-pagination-tabs"},breakpoints:{320:{slidesPerView:1,spaceBetween:20}}}),document.querySelector(".swiper-tabs")&&(window.addEventListener("load",(function(){n()})),window.addEventListener("resize",(function(){n()})))}));const cardBlueItems=document.querySelectorAll(".card-blue");function blueCardToggler(){cardBlueItems.forEach(e=>{e.addEventListener("click",(function(){e.querySelector(".card-blue__container").classList.toggle("active")}))})}if(cardBlueItems&&blueCardToggler(),document.querySelector(".documentation")){const e=document.querySelector(".header");function toggleSidebar(){const e=document.querySelector(".sidebar"),t=document.querySelector(".sidebar__toggler"),n=document.querySelector(".sidebar__close");window.innerWidth<1200?(t.addEventListener("click",(function(){e.classList.add("active")})),n.addEventListener("click",(function(){e.classList.remove("active")})),window.innerWidth<768&&(t.addEventListener("click",hidescroll),n.addEventListener("click",showscroll))):window.innerWidth>=1200&&e.classList.remove("active")}if(document.querySelector(".main").style.paddingTop=e.clientHeight+50+"px",document.querySelector(".toc")){function removeActiveClass(e){for(let t=0;t<e.length;t++)e[t].classList.remove("active")}function switchActiveOnListItem(){let e=null;const t=document.querySelectorAll(".toc ul li a");for(let n=0;n<t.length;n++){document.getElementById(t[n].getAttribute("href").substring(1)).getBoundingClientRect().top<=50&&(e=t[n],removeActiveClass(t),t[n].classList.add("active"))}}document.querySelector(".toc").style.top=e.clientHeight+70+"px"}function copyToClipboard(){const e=document.querySelectorAll(".token");let t=document.createRange();e.forEach(e=>{e.querySelector(".token__copy").addEventListener("click",(function(){t.selectNode(e.querySelector(".token__comand")),window.getSelection().removeAllRanges(),window.getSelection().addRange(t),document.execCommand("copy"),window.getSelection().removeAllRanges(),e.querySelector(".token__tooltip").innerText="Copied",setTimeout(()=>{e.querySelector(".token__tooltip").innerText="Copy To Clipboard"},1250)}))})}toggleSidebar(),window.addEventListener("DOMContentLoaded",copyToClipboard),window.addEventListener("scroll",switchActiveOnListItem),window.addEventListener("resize",toggleSidebar)}