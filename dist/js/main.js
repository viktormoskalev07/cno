function closenav(){nav.classList.remove("nav-open"),btnMenu.style.marginRight="0",showscroll()}function togglenav(){nav.classList.toggle("nav-open"),nav.classList.contains("nav-open")?(btnMenu.style.marginRight=window.innerWidth-html.offsetWidth+"px",hidescroll()):(showscroll(),btnMenu.style.marginRight="0")}function hidescroll(){body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden"}function showscroll(){body.style.paddingRight=0,body.style.overflow="visible"}body=document.querySelector("body"),html=document.querySelector("html"),header=document.querySelector("header"),btnMenu=document.querySelector(".btn-menu"),nav=document.querySelector(".nav"),document.querySelector(".btn-menu").addEventListener("click",togglenav),document.querySelector(".nav-menu").onclick=closenav,document.querySelector(".nav-background").onclick=closenav;let scrolid=0;function togglescroll(){0==scrolid?(body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden",scrolid=1):(body.style.paddingRight=0,body.style.overflow="visible",scrolid=0)}function pagescroll(){let e=0;window.addEventListener("scroll",(function(){if(e>2)header.classList.add("header-bg-js");else try{header.classList.remove("header-bg-js")}catch(e){console.log(e)}e<pageYOffset&pageYOffset>header.offsetHeight?header.style="transform:translateY(-100%)":header.style="transform:none ;",e=pageYOffset}))}window.onload=function(){pagescroll()};const cards=document.querySelectorAll(".card-dark");if(cards.length>-1)for(let e=0;e<cards.length;e++)cards[e].addEventListener("click",(function(){cards[e].classList.toggle("card-dark-active")}));window.addEventListener("load",(function(){new Swiper(".cards1",{pagination:{el:".swiper-pagination"}});const e=document.getElementById("swiper-tabs-wrap"),t=document.getElementById("tabs-box");function n(){let n=window.matchMedia("(min-width: 0px) and (max-width:692px)"),o=window.matchMedia("(min-width: 693px) and (max-width: 40000px)");n.matches?(t.style.display="none",e.style.display="block"):o.matches&&(e.style.display="none",t.style.display="block")}n(),new Swiper(".swiper-tabs",{pagination:{el:".swiper-pagination-tabs"},breakpoints:{320:{slidesPerView:1,spaceBetween:20}}}),document.querySelector(".swiper-tabs")&&(window.addEventListener("load",(function(){n()})),window.addEventListener("resize",(function(){n()})))}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY2xvc2VuYXYiLCJuYXYiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJidG5NZW51Iiwic3R5bGUiLCJtYXJnaW5SaWdodCIsInNob3dzY3JvbGwiLCJ0b2dnbGVuYXYiLCJ0b2dnbGUiLCJjb250YWlucyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJodG1sIiwib2Zmc2V0V2lkdGgiLCJoaWRlc2Nyb2xsIiwiYm9keSIsInBhZGRpbmdSaWdodCIsIm92ZXJmbG93IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uY2xpY2siLCJzY3JvbGlkIiwidG9nZ2xlc2Nyb2xsIiwicGFnZXNjcm9sbCIsInBzY3JvbGwiLCJhZGQiLCJlIiwiY29uc29sZSIsImxvZyIsInBhZ2VZT2Zmc2V0Iiwib2Zmc2V0SGVpZ2h0Iiwib25sb2FkIiwiY2FyZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaSIsIlN3aXBlciIsInBhZ2luYXRpb24iLCJlbCIsInN3aXBlckNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwidGFicyIsInN3aXBlck1vZGUiLCJtb2JpbGUiLCJtYXRjaE1lZGlhIiwiZGVza3RvcCIsIm1hdGNoZXMiLCJkaXNwbGF5IiwiYnJlYWtwb2ludHMiLCIzMjAiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIl0sIm1hcHBpbmdzIjoiQUFhQSxTQUFTQSxXQUNMQyxJQUFJQyxVQUFVQyxPQUFPLFlBQ3JCQyxRQUFRQyxNQUFNQyxZQUFjLElBQzVCQyxhQUlKLFNBQVNDLFlBQ0xQLElBQUlDLFVBQVVPLE9BQU8sWUFDakJSLElBQUlDLFVBQVVRLFNBQVMsYUFDdkJOLFFBQVFDLE1BQU1DLFlBQWNLLE9BQU9DLFdBQWFDLEtBQUtDLFlBQWMsS0FDbkVDLGVBR0FSLGFBQ0FILFFBQVFDLE1BQU1DLFlBQWMsS0FRcEMsU0FBU1MsYUFDTEMsS0FBS1gsTUFBTVksYUFBZU4sT0FBT0MsV0FBYUMsS0FBS0MsWUFBYyxLQUNqRUUsS0FBS1gsTUFBTWEsU0FBVyxTQUcxQixTQUFTWCxhQUNMUyxLQUFLWCxNQUFNWSxhQUFlLEVBQzFCRCxLQUFLWCxNQUFNYSxTQUFXLFVBM0MxQkYsS0FBT0csU0FBU0MsY0FBYyxRQUM5QlAsS0FBT00sU0FBU0MsY0FBYyxRQUM5QkMsT0FBU0YsU0FBU0MsY0FBYyxVQUNoQ2hCLFFBQVVlLFNBQVNDLGNBQWMsYUFJakNuQixJQUFNa0IsU0FBU0MsY0FBYyxRQUM3QkQsU0FBU0MsY0FBYyxhQUFhRSxpQkFBaUIsUUFBU2QsV0FDOURXLFNBQVNDLGNBQWMsYUFBYUcsUUFBVXZCLFNBRTlDbUIsU0FBU0MsY0FBYyxtQkFBbUJHLFFBQVV2QixTQW1DcEQsSUFBSXdCLFFBQVUsRUFFZCxTQUFTQyxlQUNVLEdBQVhELFNBQ0FSLEtBQUtYLE1BQU1ZLGFBQWVOLE9BQU9DLFdBQWFDLEtBQUtDLFlBQWMsS0FDakVFLEtBQUtYLE1BQU1hLFNBQVcsU0FDdEJNLFFBQVUsSUFFVlIsS0FBS1gsTUFBTVksYUFBZSxFQUMxQkQsS0FBS1gsTUFBTWEsU0FBVyxVQUN0Qk0sUUFBVSxHQVlsQixTQUFTRSxhQUNQLElBQUlDLEVBQVUsRUFFZGhCLE9BQU9XLGlCQUFpQixVQUFVLFdBRWhDLEdBQUdLLEVBQVEsRUFDVE4sT0FBT25CLFVBQVUwQixJQUFJLHFCQUVyQixJQUNFUCxPQUFPbkIsVUFBVUMsT0FBTyxnQkFFMUIsTUFBTTBCLEdBQUlDLFFBQVFDLElBQUlGLEdBRWxCRixFQUFRSyxZQUFZQSxZQUFZWCxPQUFPWSxhQUNsQ1osT0FBT2hCLE1BQU0sOEJBRWhCZ0IsT0FBT2hCLE1BQU0sbUJBRXRCc0IsRUFBUUssZUF0QlhyQixPQUFPdUIsT0FBUyxXQUNaUixjQTJCRixNQUFNUyxNQUFNaEIsU0FBU2lCLGlCQUFpQixjQUN0QyxHQUFHRCxNQUFNRSxRQUFRLEVBQ2YsSUFBSSxJQUFJQyxFQUFFLEVBQUdBLEVBQUVILE1BQU1FLE9BQVNDLElBQzVCSCxNQUFNRyxHQUFHaEIsaUJBQWlCLFNBQVEsV0FDaENhLE1BQU1HLEdBQUdwQyxVQUFVTyxPQUFPLHVCQWdCOUJFLE9BQU9XLGlCQUFpQixRQUFRLFdBQ2YsSUFBSWlCLE9BQU8sVUFBVyxDQUNuQ0MsV0FBWSxDQUNWQyxHQUFJLHdCQUZSLE1BT1FDLEVBQWdCdkIsU0FBU3dCLGVBQWUsb0JBQ3hDQyxFQUFLekIsU0FBU3dCLGVBQWUsWUFnQm5DLFNBQVNFLElBRUwsSUFBSUMsRUFBU25DLE9BQU9vQyxXQUFXLDBDQUMzQkMsRUFBVXJDLE9BQU9vQyxXQUFXLCtDQUU1QkQsRUFBT0csU0FDUEwsRUFBS3ZDLE1BQU02QyxRQUFRLE9BQ25CUixFQUFnQnJDLE1BQU02QyxRQUFRLFNBRXZCRixFQUFRQyxVQUNmUCxFQUFnQnJDLE1BQU02QyxRQUFRLE9BQzlCTixFQUFLdkMsTUFBTTZDLFFBQVEsU0ExQjNCTCxJQUVpQixJQUFJTixPQUFPLGVBQWdCLENBQ3hDQyxXQUFZLENBQ1JDLEdBQUksMkJBRVJVLFlBQWEsQ0FDVEMsSUFBSyxDQUNEQyxjQUFlLEVBQ2ZDLGFBQWMsT0FxQnRCbkMsU0FBU0MsY0FBYyxrQkFDdkJULE9BQU9XLGlCQUFpQixRQUFRLFdBQzVCdUIsT0FHSmxDLE9BQU9XLGlCQUFpQixVQUFVLFdBQzlCdUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xyXG5oZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xyXG5idG5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tbWVudVwiKTtcclxuXHJcblxyXG4vLyDQvNC+0LHQuNC70YzQvdC+0LUg0LzQtdC90Y5cclxubmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLW1lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZW5hdik7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LW1lbnVcIikub25jbGljayA9IGNsb3NlbmF2O1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYmFja2dyb3VuZFwiKS5vbmNsaWNrID0gY2xvc2VuYXY7XHJcblxyXG5mdW5jdGlvbiBjbG9zZW5hdigpIHtcclxuICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LW9wZW5cIik7XHJcbiAgICBidG5NZW51LnN0eWxlLm1hcmdpblJpZ2h0ID0gXCIwXCI7XHJcbiAgICBzaG93c2Nyb2xsKCk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVuYXYoKSB7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1vcGVuXCIpO1xyXG4gICAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXYtb3BlblwiKSkge1xyXG4gICAgICAgIGJ0bk1lbnUuc3R5bGUubWFyZ2luUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGh0bWwub2Zmc2V0V2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgaGlkZXNjcm9sbCgpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd3Njcm9sbCgpO1xyXG4gICAgICAgIGJ0bk1lbnUuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjBcIjtcclxuICAgIH1cclxufVxyXG5cclxuLy8g0LzQvtCx0LjQu9GM0L3QvtC1INC80LXQvdGOXHJcblxyXG5cclxuLy8g0L7RgtC60LvRjtGH0LjRgtGMINC/0YDQvtC60YDRg9GC0LrRg1xyXG5mdW5jdGlvbiBoaWRlc2Nyb2xsKCkge1xyXG4gICAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGh0bWwub2Zmc2V0V2lkdGggKyBcInB4XCI7XHJcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd3Njcm9sbCgpIHtcclxuICAgIGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gMDtcclxuICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIlxyXG59XHJcblxyXG5sZXQgc2Nyb2xpZCA9IDA7XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVzY3JvbGwoKSB7XHJcbiAgICBpZiAoc2Nyb2xpZCA9PSAwKSB7XHJcbiAgICAgICAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGh0bWwub2Zmc2V0V2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgc2Nyb2xpZCA9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gMDtcclxuICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCJcclxuICAgICAgICBzY3JvbGlkID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuLy8g0L7RgtC60LvRjtGH0LjRgtGMINC/0YDQvtC60YDRg9GC0LrRg1xyXG5cclxuXHJcbi8vINCf0L7Rj9Cy0LvQtdC90LjQtSDQvNC10L3RjiDQv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1XHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBwYWdlc2Nyb2xsKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhZ2VzY3JvbGwoKXsgXHJcbiAgbGV0IHBzY3JvbGwgPSAwO1xyXG4gIFxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHsgXHJcbiAgXHJcbiAgICBpZihwc2Nyb2xsPjIpeyBcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1iZy1qcycpOyBcclxuICAgIH0gZWxzZXtcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItYmctanMnKTsgXHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2goZSl7IGNvbnNvbGUubG9nKGUpO31cclxuICAgIH1cclxuICAgICAgaWYgKHBzY3JvbGw8cGFnZVlPZmZzZXQmcGFnZVlPZmZzZXQ+aGVhZGVyLm9mZnNldEhlaWdodCl7XHJcbiAgICAgICAgICAgICAgIGhlYWRlci5zdHlsZT1cInRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMDAlKVwiOyAvL9C/0YDRj9GH0LXQvCDRhdC10LTQtdGAINC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0LLQvdC40LcgICAgICAgICAgICBcclxuICAgICAgIH1lbHNlIHsgXHJcbiAgICAgICAgICAgIGhlYWRlci5zdHlsZT1cInRyYW5zZm9ybTpub25lIDtcIjsgLy/Qv9C+0LrQsNC30YvQstCw0LXQvCDRhdC10LTQtdGAINC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0LLQstC10YDRhSAgICAgICAgICAgXHJcbiAgICAgICB9ICBcclxuICAgcHNjcm9sbD1wYWdlWU9mZnNldDtcclxuIH0pO1xyXG59XHJcblxyXG4gLy/Qn9C+0Y/QstC70LXQvdC40LUg0LzQtdC90Y4g0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtVxyXG4gLy9jYXJkXHJcbiAgY29uc3QgY2FyZHM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtZGFyaycpO1xyXG4gIGlmKGNhcmRzLmxlbmd0aD4tMSl7XHJcbiAgICBmb3IobGV0IGk9MCA7aTxjYXJkcy5sZW5ndGggOyBpKyspe1xyXG4gICAgICBjYXJkc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICBjYXJkc1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdjYXJkLWRhcmstYWN0aXZlJyk7IFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAvL2NhcmRcclxuXHJcbi8vc3dpcGVyXHJcbiBcclxuICAgXHJcblxyXG4vL3N3aXBlclxyXG4gXHJcbiBcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5jYXJkczFcIiwge1xyXG4gICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxyXG4gICAgICAgIH0sIFxyXG4gICAgICB9KTsgIFxyXG5cclxuXHJcbiAgICAgICAgY29uc3Qgc3dpcGVyQ29udGFpbmVyPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2lwZXItdGFicy13cmFwJyk7XHJcbiAgICAgICAgY29uc3QgdGFicz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFicy1ib3gnKTtcclxuICAgICAgICBzd2lwZXJNb2RlKCk7XHJcblxyXG4gICAgICAgIGxldCBzd2lwZXJUYWJzID0gbmV3IFN3aXBlcihcIi5zd2lwZXItdGFic1wiLCB7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvbi10YWJzXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3dpcGVyTW9kZSgpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBtb2JpbGUgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6NjkycHgpXCIpO1xyXG4gICAgICAgICAgICBsZXQgZGVza3RvcCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNjkzcHgpIGFuZCAobWF4LXdpZHRoOiA0MDAwMHB4KVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtb2JpbGUubWF0Y2hlcykge1xyXG4gICAgICAgICAgICAgICAgdGFicy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgc3dpcGVyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkZXNrdG9wLm1hdGNoZXMpIHtcclxuICAgICAgICAgICAgICAgIHN3aXBlckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdGFicy5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3dpcGVyLXRhYnNcIikpIHtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHN3aXBlck1vZGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzd2lwZXJNb2RlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0oKSk7XHJcbi8vc3dpcGVyXHJcblxyXG5cclxuLy/QvtGC0L/RgNCw0LLQutCwINGE0L7RgNC80YtcclxuLy8gbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3JkZXItZm9ybScpO1xyXG5cclxuLy8gY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xyXG5cclxuLy8gZnVuY3Rpb24gYWpheGZvcm0oZXZ0KSB7XHJcbi8vICAgZ3RhZygnZXZlbnQnLCAnc3VibWl0Jywge1xyXG4vLyAgICAgJ2V2ZW50X2NhdGVnb3J5JzogJ0Zvcm0nXHJcbi8vICAgfSk7XHJcbi8vICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgbGV0IGZvcm1zdGF0dXMgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5mb3Jtc3RhdHVzJyk7XHJcbi8vICAgZm9ybXN0YXR1cy5pbm5lckhUTUwgPSAnPGNsYXNzPVwibG9hZC1mb3JtXCI+0KHQvtC10LTQuNC10L3QtdC40LUgLi4uJztcclxuXHJcbi8vICAgbGV0IGZvcm1EYXRhID0ge1xyXG4vLyAgICAgZGVzYzogdGhpcy5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWx1ZSxcclxuLy8gICAgIG5hbWU6IHRoaXMucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hbWVcIl0nKS52YWx1ZSxcclxuXHJcbi8vICAgICBwaG9uZTogdGhpcy5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicGhvbmVcIl0nKS52YWx1ZVxyXG5cclxuLy8gICB9O1xyXG4vLyAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuLy8gICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuLy8gICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4vLyAgICAgZm9ybXN0YXR1cy5pbm5lckhUTUwgPSAn0JLQsNGI0LAg0LfQsNGP0LLQutCwINGD0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvdCwLCDQvtC20LjQtNCw0LnRgtC1INC30LLQvtC90LrQsCc7XHJcblxyXG4vLyAgIH0pO1xyXG5cclxuLy8gICByZXF1ZXN0Lm9wZW4oJ1BPU1QnLCAnL21haWwucGhwJywgdHJ1ZSk7XHJcbi8vICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04Jyk7XHJcbi8vICAgcmVxdWVzdC5zZW5kKCduYW1lPScgKyBlbmNvZGVVUklDb21wb25lbnQoZm9ybURhdGEubmFtZSkgKyAnJnBob25lPScgKyBlbmNvZGVVUklDb21wb25lbnQoZm9ybURhdGEucGhvbmUpICsgJyZkZXNjPScgKyBlbmNvZGVVUklDb21wb25lbnQoZm9ybURhdGEuZGVzYykpO1xyXG5cclxuXHJcbi8vIH07XHJcblxyXG5cclxuLy8gZm9yIChpID0gMDsgaSA8IGZvcm0ubGVuZ3RoOyBpKyspIHtcclxuLy8gICBmb3JtW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFqYXhmb3JtKTtcclxuLy8gfSBcclxuLy/QvtGC0L/RgNCw0LLQutCwINGE0L7RgNC80YtcclxuXHJcbi8vIGFjY29yZGlvblxyXG5cclxuLy8gZnVuY3Rpb24gYWNjb3JkaW9uSW5pdCAoKSB7XHJcbi8vIFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gXHRcdGNvbnN0IGFjY29yZGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3JkaW9uXCIpO1xyXG4vLyBcdFx0Y29uc3QgaXRlbXMgPSBhY2NvcmRpb24ucXVlcnlTZWxlY3RvckFsbChcIi5hY2NvcmRpb25fX2l0ZW1cIik7XHJcblxyXG4vLyBcdFx0aXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4vLyBcdFx0XHRjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5hY2NvcmRpb25fX3RpdGxlXCIpO1xyXG5cclxuLy8gXHRcdFx0dGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbi8vIFx0XHRcdFx0Y29uc3Qgb3BlbmVkX2l0ZW0gPSBhY2NvcmRpb24ucXVlcnlTZWxlY3RvcihcIi5pcy1vcGVuXCIpO1xyXG5cclxuLy8gXHRcdFx0XHR0b2dnbGVfaXRlbShpdGVtKTtcclxuXHJcbi8vIFx0XHRcdFx0aWYgKG9wZW5lZF9pdGVtICYmIG9wZW5lZF9pdGVtICE9PSBpdGVtKSB7XHJcbi8vIFx0XHRcdFx0XHR0b2dnbGVfaXRlbShvcGVuZWRfaXRlbSk7XHJcbi8vIFx0XHRcdFx0fVxyXG4vLyBcdFx0XHR9KTtcclxuLy8gXHRcdH0pO1xyXG5cclxuLy8gXHRcdGNvbnN0IHRvZ2dsZV9pdGVtID0gKGl0ZW0pID0+IHtcclxuLy8gXHRcdFx0Y29uc3QgYm9keSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5hY2NvcmRpb25fX2JvZHlcIik7XHJcbi8vIFx0XHRcdGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3JkaW9uX19jb250ZW50XCIpO1xyXG5cclxuLy8gXHRcdFx0aWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtb3BlblwiKSkge1xyXG4vLyBcdFx0XHRcdGJvZHkucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XHJcbi8vIFx0XHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlblwiKTtcclxuLy8gXHRcdFx0fSBlbHNlIHtcclxuLy8gXHRcdFx0XHRib2R5LnN0eWxlLmhlaWdodCA9IGJvZHkuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4vLyBcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZChcImlzLW9wZW5cIik7XHJcbi8vIFx0XHRcdH1cclxuLy8gXHRcdH07XHJcbi8vIFx0fSk7XHJcbi8vIH1cclxuXHJcbi8vIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uJykpIHtcclxuLy8gXHRhY2NvcmRpb25Jbml0KClcclxuLy8gfVxyXG4vLyAvLyBhY2NvcmRpb25cclxuXHJcbi8vICAvL2Ryb3Bkb3duXHJcblxyXG4vLyBmdW5jdGlvbiBkcm9wZG93bigpIHtcclxuLy8gICBjb25zdCBkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bl9fYWN0aXZhdG9yXCIpO1xyXG4vLyAgIGRyb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIGRyb3AuY2xhc3NMaXN0LnRvZ2dsZShcImRyb3Bkb3duX29wZW5cIik7XHJcbi8vICAgfSk7XHJcbi8vIH1cclxuXHJcbi8vIHRyeSB7XHJcbi8vICAgZHJvcGRvd24oKTtcclxuLy8gfSBjYXRjaCAoZSkge1xyXG4vLyAgIGNvbnNvbGUubG9nKGUpO1xyXG4vLyB9XHJcbi8vZHJvcGRvd24iXX0=
