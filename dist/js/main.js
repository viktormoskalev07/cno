function closenav(){nav.classList.remove("nav-open"),btnMenu.style.marginRight="0",showscroll()}function togglenav(){nav.classList.toggle("nav-open"),nav.classList.contains("nav-open")?(btnMenu.style.marginRight=window.innerWidth-html.offsetWidth+"px",hidescroll(),document.querySelector(".sidebar")&&document.querySelector(".sidebar").classList.remove("active")):(showscroll(),btnMenu.style.marginRight="0")}function hidescroll(){body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden"}function showscroll(){body.style.paddingRight=0,body.style.overflow="visible"}body=document.querySelector("body"),html=document.querySelector("html"),header=document.querySelector("header"),headerContent=document.querySelector(".header-content"),btnMenu=document.querySelector(".btn-menu"),nav=document.querySelector(".nav"),document.querySelector(".btn-menu").addEventListener("click",togglenav),document.querySelector(".nav-menu").onclick=closenav,document.querySelector(".nav-background").onclick=closenav;let scrolid=0;function togglescroll(){0==scrolid?(body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden",scrolid=1):(body.style.paddingRight=0,body.style.overflow="visible",scrolid=0)}function pagescroll(){let e=0;pageYOffset>2&&header.classList.add("header-bg-js"),window.addEventListener("scroll",(function(){if(pageYOffset>50)header.classList.add("header-bg-js");else try{header.classList.remove("header-bg-js")}catch(e){console.log(e)}e<pageYOffset&pageYOffset>header.offsetHeight?header.style="transform:translateY(-100%); box-shadow: none":header.style="transform:none; box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);",pageYOffset<50&&(header.style="box-shadow: none"),e=pageYOffset}))}window.onload=function(){pagescroll()};const cards=document.querySelectorAll(".card-dark");function cardsToggler(){if(cards.length>-1)for(let e=0;e<cards.length;e++)cards[e].addEventListener("click",(function(){this.classList.toggle("card-dark-active")})),cards[e].addEventListener("keypress",(function(e){"Enter"==e.key&&this.classList.toggle("card-dark-active")}))}window.addEventListener("load",cardsToggler),window.addEventListener("load",(function(){if(this.document.querySelector(".cards1"))try{new Swiper(".cards1",{pagination:{el:".swiper-pagination"}})}catch(e){console.log(e)}const e=document.getElementById("swiper-tabs-wrap"),t=document.getElementById("tabs-box");function n(){let n=window.matchMedia("(min-width: 0px) and (max-width:692px)"),o=window.matchMedia("(min-width: 693px)");n.matches?e&&t&&(t.style.display="none",e.style.display="block"):o.matches&&e&&t&&(e.style.display="none",t.style.display="block")}n(),document.querySelector(".swiper-tabs")&&new Swiper(".swiper-tabs",{pagination:{el:".swiper-pagination-tabs"},breakpoints:{320:{slidesPerView:1,spaceBetween:20}}}),document.querySelector(".swiper-tabs")&&(window.addEventListener("load",(function(){n()})),window.addEventListener("resize",(function(){n()})))}));const cardBlueItems=document.querySelectorAll(".card-blue");function blueCardToggler(){cardBlueItems.forEach(e=>{e.addEventListener("click",(function(){e.querySelector(".card-blue__container").classList.toggle("active")}))})}if(cardBlueItems&&blueCardToggler(),document.querySelector(".documentation")){const e=document.querySelector(".header");function toggleSidebar(){const e=document.querySelector(".sidebar"),t=document.querySelector(".sidebar__toggler"),n=document.querySelector(".sidebar__close");window.innerWidth<1200?(t.addEventListener("click",(function(){e.classList.add("active")})),n.addEventListener("click",(function(){e.classList.remove("active")}))):window.innerWidth>=1200&&e.classList.remove("active")}document.querySelector(".main").style.paddingTop=e.clientHeight+50+"px";const t=document.querySelector(".toc"),n=t.querySelectorAll("ul li a");function removeActiveClass(e){for(let t=0;t<e.length;t++)e[t].classList.remove("active")}function switchActiveOnListItem(){let e=null;for(let t=0;t<n.length;t++){document.getElementById(n[t].getAttribute("href").substring(1)).getBoundingClientRect().top<=50&&(e=n[t],removeActiveClass(n),n[t].classList.add("active"))}}t.style.top=e.clientHeight+70+"px",window.addEventListener("scroll",switchActiveOnListItem),toggleSidebar(),window.addEventListener("resize",toggleSidebar)}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY2xvc2VuYXYiLCJuYXYiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJidG5NZW51Iiwic3R5bGUiLCJtYXJnaW5SaWdodCIsInNob3dzY3JvbGwiLCJ0b2dnbGVuYXYiLCJ0b2dnbGUiLCJjb250YWlucyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJodG1sIiwib2Zmc2V0V2lkdGgiLCJoaWRlc2Nyb2xsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYm9keSIsInBhZGRpbmdSaWdodCIsIm92ZXJmbG93IiwiaGVhZGVyIiwiaGVhZGVyQ29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmNsaWNrIiwic2Nyb2xpZCIsInRvZ2dsZXNjcm9sbCIsInBhZ2VzY3JvbGwiLCJwc2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJhZGQiLCJlIiwiY29uc29sZSIsImxvZyIsIm9mZnNldEhlaWdodCIsIm9ubG9hZCIsImNhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNhcmRzVG9nZ2xlciIsImxlbmd0aCIsImkiLCJ0aGlzIiwia2V5IiwiU3dpcGVyIiwicGFnaW5hdGlvbiIsImVsIiwic3dpcGVyQ29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0YWJzIiwic3dpcGVyTW9kZSIsIm1vYmlsZSIsIm1hdGNoTWVkaWEiLCJkZXNrdG9wIiwibWF0Y2hlcyIsImRpc3BsYXkiLCJicmVha3BvaW50cyIsIjMyMCIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJjYXJkQmx1ZUl0ZW1zIiwiYmx1ZUNhcmRUb2dnbGVyIiwiZm9yRWFjaCIsIml0ZW0iLCJ0b2dnbGVTaWRlYmFyIiwic2lkZWJhck5hdiIsInNpZGViYXJUb2dnbGVyIiwic2lkZWJhckNsb3NlIiwicGFkZGluZ1RvcCIsImNsaWVudEhlaWdodCIsInRvY0xpc3RDb250YWluZXIiLCJ0b2NMaXN0SXRlbSIsInJlbW92ZUFjdGl2ZUNsYXNzIiwiZWxlbWVudHMiLCJzd2l0Y2hBY3RpdmVPbkxpc3RJdGVtIiwicHJldmlvdXNSZWZFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwic3Vic3RyaW5nIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIl0sIm1hcHBpbmdzIjoiQUFhQSxTQUFTQSxXQUNQQyxJQUFJQyxVQUFVQyxPQUFPLFlBQ3JCQyxRQUFRQyxNQUFNQyxZQUFjLElBQzVCQyxhQUdGLFNBQVNDLFlBQ1BQLElBQUlDLFVBQVVPLE9BQU8sWUFDakJSLElBQUlDLFVBQVVRLFNBQVMsYUFDekJOLFFBQVFDLE1BQU1DLFlBQWNLLE9BQU9DLFdBQWFDLEtBQUtDLFlBQWMsS0FDbkVDLGFBQ0lDLFNBQVNDLGNBQWMsYUFDekJELFNBQVNDLGNBQWMsWUFBWWYsVUFBVUMsT0FBTyxZQUd0REksYUFDQUgsUUFBUUMsTUFBTUMsWUFBYyxLQU9oQyxTQUFTUyxhQUNQRyxLQUFLYixNQUFNYyxhQUFlUixPQUFPQyxXQUFhQyxLQUFLQyxZQUFjLEtBQ2pFSSxLQUFLYixNQUFNZSxTQUFXLFNBR3hCLFNBQVNiLGFBQ1BXLEtBQUtiLE1BQU1jLGFBQWUsRUFDMUJELEtBQUtiLE1BQU1lLFNBQVcsVUEzQ3hCRixLQUFPRixTQUFTQyxjQUFjLFFBQzlCSixLQUFPRyxTQUFTQyxjQUFjLFFBQzlCSSxPQUFTTCxTQUFTQyxjQUFjLFVBQ2hDSyxjQUFnQk4sU0FBU0MsY0FBYyxtQkFDdkNiLFFBQVVZLFNBQVNDLGNBQWMsYUFHakNoQixJQUFNZSxTQUFTQyxjQUFjLFFBQzdCRCxTQUFTQyxjQUFjLGFBQWFNLGlCQUFpQixRQUFTZixXQUM5RFEsU0FBU0MsY0FBYyxhQUFhTyxRQUFVeEIsU0FFOUNnQixTQUFTQyxjQUFjLG1CQUFtQk8sUUFBVXhCLFNBbUNwRCxJQUFJeUIsUUFBVSxFQUVkLFNBQVNDLGVBQ1EsR0FBWEQsU0FDRlAsS0FBS2IsTUFBTWMsYUFBZVIsT0FBT0MsV0FBYUMsS0FBS0MsWUFBYyxLQUNqRUksS0FBS2IsTUFBTWUsU0FBVyxTQUN0QkssUUFBVSxJQUVWUCxLQUFL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OEQsV0FBZ0I5QyxFQUFPK0MsYUFBZSxHQUF6QixLQXFCeEIsTUFBTUMsRUFBbUJyRCxTQUFTQyxjQUFjLFFBQzFDcUQsRUFBY0QsRUFBaUJoQyxpQkFBaUIsV0FLdEQsU0FBU2tDLGtCQUFrQkMsR0FDekIsSUFBSyxJQUFJaEMsRUFBSSxFQUFHQSxFQUFJZ0MsRUFBU2pDLE9BQVFDLElBQ25DZ0MsRUFBU2hDLEdBQUd0QyxVQUFVQyxPQUFPLFVBSWpDLFNBQVNzRSx5QkFDUCxJQUFJQyxFQUFxQixLQUN6QixJQUFLLElBQUlsQyxFQUFJLEVBQUdBLEVBQUk4QixFQUFZL0IsT0FBUUMsSUFBSyxDQUNqQnhCLFNBQVMrQixlQUNqQ3VCLEVBQVk5QixHQUFHbUMsYUFBYSxRQUFRQyxVQUFVLElBSTVCQyx3QkFBd0JDLEtBQ2hCLEtBQzFCSixFQUFxQkosRUFBWTlCLEdBQ2pDK0Isa0JBQWtCRCxHQUNsQkEsRUFBWTlCLEdBQUd0QyxVQUFVNEIsSUFBSSxZQXBCbkN1QyxFQUFpQmhFLE1BQU15RSxJQUFTekQsRUFBTytDLGFBQWUsR0FBekIsS0F5QjdCekQsT0FBT1ksaUJBQWlCLFNBQVVrRCx3QkFDbENWLGdCQUNBcEQsT0FBT1ksaUJBQWlCLFNBQVV3QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbmhlYWRlckNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1jb250ZW50XCIpO1xuYnRuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLW1lbnVcIik7XG5cbi8vINC80L7QsdC40LvRjNC90L7QtSDQvNC10L3RjlxubmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVuYXYpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtbWVudVwiKS5vbmNsaWNrID0gY2xvc2VuYXY7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJhY2tncm91bmRcIikub25jbGljayA9IGNsb3NlbmF2O1xuXG5mdW5jdGlvbiBjbG9zZW5hdigpIHtcbiAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtb3BlblwiKTtcbiAgYnRuTWVudS5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMFwiO1xuICBzaG93c2Nyb2xsKCk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZW5hdigpIHtcbiAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtb3BlblwiKTtcbiAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXYtb3BlblwiKSkge1xuICAgIGJ0bk1lbnUuc3R5bGUubWFyZ2luUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGh0bWwub2Zmc2V0V2lkdGggKyBcInB4XCI7XG4gICAgaGlkZXNjcm9sbCgpO1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIikpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzaG93c2Nyb2xsKCk7XG4gICAgYnRuTWVudS5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMFwiO1xuICB9XG59XG5cbi8vINC80L7QsdC40LvRjNC90L7QtSDQvNC10L3RjlxuXG4vLyDQvtGC0LrQu9GO0YfQuNGC0Ywg0L/RgNC+0LrRgNGD0YLQutGDXG5mdW5jdGlvbiBoaWRlc2Nyb2xsKCkge1xuICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gaHRtbC5vZmZzZXRXaWR0aCArIFwicHhcIjtcbiAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG59XG5cbmZ1bmN0aW9uIHNob3dzY3JvbGwoKSB7XG4gIGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gMDtcbiAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xufVxuXG5sZXQgc2Nyb2xpZCA9IDA7XG5cbmZ1bmN0aW9uIHRvZ2dsZXNjcm9sbCgpIHtcbiAgaWYgKHNjcm9saWQgPT0gMCkge1xuICAgIGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggLSBodG1sLm9mZnNldFdpZHRoICsgXCJweFwiO1xuICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgIHNjcm9saWQgPSAxO1xuICB9IGVsc2Uge1xuICAgIGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gMDtcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XG4gICAgc2Nyb2xpZCA9IDA7XG4gIH1cbn1cblxuLy8g0L7RgtC60LvRjtGH0LjRgtGMINC/0YDQvtC60YDRg9GC0LrRg1xuXG4vLyDQn9C+0Y/QstC70LXQvdC40LUg0LzQtdC90Y4g0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtVxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgcGFnZXNjcm9sbCgpO1xufTtcblxuZnVuY3Rpb24gcGFnZXNjcm9sbCgpIHtcbiAgbGV0IHBzY3JvbGwgPSAwO1xuICBpZiAocGFnZVlPZmZzZXQgPiAyKSB7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItYmctanNcIik7XG4gIH1cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChwYWdlWU9mZnNldCA+IDUwKSB7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlci1iZy1qc1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXItYmctanNcIik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoKHBzY3JvbGwgPCBwYWdlWU9mZnNldCkgJiAocGFnZVlPZmZzZXQgPiBoZWFkZXIub2Zmc2V0SGVpZ2h0KSkge1xuICAgICAgaGVhZGVyLnN0eWxlID0gXCJ0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSk7IGJveC1zaGFkb3c6IG5vbmVcIjsgIC8v0L/RgNGP0YfQtdC8INGF0LXQtNC10YAg0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQstC90LjQt1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIuc3R5bGUgPVxuICAgICAgICBcInRyYW5zZm9ybTpub25lOyBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYxKTtcIjsgLy/Qv9C+0LrQsNC30YvQstCw0LXQvCDRhdC10LTQtdGAINC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0LLQstC10YDRhVxuICAgIH1cblx0XHRpZiAocGFnZVlPZmZzZXQgPCA1MCkge1xuXHRcdFx0aGVhZGVyLnN0eWxlID0gXCJib3gtc2hhZG93OiBub25lXCI7XG5cdFx0fVxuICAgIHBzY3JvbGwgPSBwYWdlWU9mZnNldDtcbiAgfSk7XG59XG5cbi8v0J/QvtGP0LLQu9C10L3QuNC1INC80LXQvdGOINC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LVcbi8vY2FyZFxuY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmQtZGFya1wiKTtcblxuZnVuY3Rpb24gY2FyZHNUb2dnbGVyKCkge1xuICBpZiAoY2FyZHMubGVuZ3RoID4gLTEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYXJkc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkLWRhcmstYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgICBjYXJkc1tpXS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImNhcmQtZGFyay1hY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2FyZHNUb2dnbGVyKTtcblxuLy9jYXJkXG5cbihmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkczFcIikpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIuY2FyZHMxXCIsIHtcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3dpcGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2lwZXItdGFicy13cmFwXCIpO1xuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYnMtYm94XCIpO1xuXG4gICAgc3dpcGVyTW9kZSgpO1xuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3dpcGVyLXRhYnNcIikpIHtcbiAgICAgIGxldCBzd2lwZXJUYWJzID0gbmV3IFN3aXBlcihcIi5zd2lwZXItdGFic1wiLCB7XG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb24tdGFic1wiLFxuICAgICAgICB9LFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgIDMyMDoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN3aXBlck1vZGUoKSB7XG4gICAgICBsZXQgbW9iaWxlID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOjY5MnB4KVwiKTtcbiAgICAgIGxldCBkZXNrdG9wID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA2OTNweClcIik7XG5cbiAgICAgIGlmIChtb2JpbGUubWF0Y2hlcykge1xuICAgICAgICBpZiAoc3dpcGVyQ29udGFpbmVyICYmIHRhYnMpIHtcbiAgICAgICAgICB0YWJzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBzd2lwZXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkZXNrdG9wLm1hdGNoZXMpIHtcbiAgICAgICAgaWYgKHN3aXBlckNvbnRhaW5lciAmJiB0YWJzKSB7XG4gICAgICAgICAgc3dpcGVyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICB0YWJzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zd2lwZXItdGFic1wiKSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dpcGVyTW9kZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dpcGVyTW9kZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn0pKCk7XG5cbi8vIGJsdWUgY2FyZFxuY29uc3QgY2FyZEJsdWVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWJsdWUnKVxuXG5mdW5jdGlvbiBibHVlQ2FyZFRvZ2dsZXIgKCkge1xuICBjYXJkQmx1ZUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGNhcmRCbHVlQ29udGFpbmVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FyZC1ibHVlX19jb250YWluZXInKVxuICAgICAgY2FyZEJsdWVDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICB9KVxuICB9KVxufVxuaWYgKGNhcmRCbHVlSXRlbXMpIHtcbiAgYmx1ZUNhcmRUb2dnbGVyKClcbn1cblxuQEBpbmNsdWRlKCcuL2RvY3VtZW50YXRpb24uanMnKTsiXX0=
