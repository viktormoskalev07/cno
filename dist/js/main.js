function closenav(){nav.classList.remove("nav-open"),btnMenu.style.marginRight="0",showscroll()}function togglenav(){nav.classList.toggle("nav-open"),nav.classList.contains("nav-open")?(btnMenu.style.marginRight=window.innerWidth-html.offsetWidth+"px",hidescroll()):(showscroll(),btnMenu.style.marginRight="0")}function hidescroll(){body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden"}function showscroll(){body.style.paddingRight=0,body.style.overflow="visible"}body=document.querySelector("body"),html=document.querySelector("html"),header=document.querySelector("header"),btnMenu=document.querySelector(".btn-menu"),nav=document.querySelector(".nav"),document.querySelector(".btn-menu").addEventListener("click",togglenav),document.querySelector(".nav-menu").onclick=closenav,document.querySelector(".nav-background").onclick=closenav;let scrolid=0;function togglescroll(){0==scrolid?(body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden",scrolid=1):(body.style.paddingRight=0,body.style.overflow="visible",scrolid=0)}function pagescroll(){let e=0;window.addEventListener("scroll",(function(){e<pageYOffset&pageYOffset>header.offsetHeight?header.style.transform="translateY(-100%)":header.style.transform="none",e=pageYOffset}))}window.onload=function(){pagescroll()},window.addEventListener("load",(function(){new Swiper(".cards1",{pagination:{el:".swiper-pagination"},breakpoints:{680:{slidesPerView:2,spaceBetween:20}}})}))(void window.addEventListener("load",(function(){const e=document.getElementById("swiper-tabs-wrap"),n=document.getElementById("tabs-box");function t(){let t=window.matchMedia("(min-width: 0px) and (max-width:692px)"),o=window.matchMedia("(min-width: 693px)");t.matches?e&&n&&(n.style.display="none",e.style.display="block"):o.matches&&e&&n&&(e.style.display="none",n.style.display="block")}t(),new Swiper(".swiper-tabs",{pagination:{el:".swiper-pagination-tabs"},breakpoints:{320:{slidesPerView:1,spaceBetween:20}}}),document.querySelector(".swiper-tabs")&&(window.addEventListener("load",(function(){t()})),window.addEventListener("resize",(function(){t()})))})));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY2xvc2VuYXYiLCJuYXYiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJidG5NZW51Iiwic3R5bGUiLCJtYXJnaW5SaWdodCIsInNob3dzY3JvbGwiLCJ0b2dnbGVuYXYiLCJ0b2dnbGUiLCJjb250YWlucyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJodG1sIiwib2Zmc2V0V2lkdGgiLCJoaWRlc2Nyb2xsIiwiYm9keSIsInBhZGRpbmdSaWdodCIsIm92ZXJmbG93IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uY2xpY2siLCJzY3JvbGlkIiwidG9nZ2xlc2Nyb2xsIiwicGFnZXNjcm9sbCIsInBzY3JvbGwiLCJwYWdlWU9mZnNldCIsIm9mZnNldEhlaWdodCIsInRyYW5zZm9ybSIsIm9ubG9hZCIsIlN3aXBlciIsInBhZ2luYXRpb24iLCJlbCIsImJyZWFrcG9pbnRzIiwiNjgwIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInN3aXBlckNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwidGFicyIsInN3aXBlck1vZGUiLCJtb2JpbGUiLCJtYXRjaE1lZGlhIiwiZGVza3RvcCIsIm1hdGNoZXMiLCJkaXNwbGF5IiwiMzIwIl0sIm1hcHBpbmdzIjoiQUFjQSxTQUFTQSxXQUNMQyxJQUFJQyxVQUFVQyxPQUFPLFlBQ3JCQyxRQUFRQyxNQUFNQyxZQUFjLElBQzVCQyxhQUlKLFNBQVNDLFlBQ0xQLElBQUlDLFVBQVVPLE9BQU8sWUFDakJSLElBQUlDLFVBQVVRLFNBQVMsYUFDdkJOLFFBQVFDLE1BQU1DLFlBQWNLLE9BQU9DLFdBQWFDLEtBQUtDLFlBQWMsS0FDbkVDLGVBR0FSLGFBQ0FILFFBQVFDLE1BQU1DLFlBQWMsS0FRcEMsU0FBU1MsYUFDTEMsS0FBS1gsTUFBTVksYUFBZU4sT0FBT0MsV0FBYUMsS0FBS0MsWUFBYyxLQUNqRUUsS0FBS1gsTUFBTWEsU0FBVyxTQUcxQixTQUFTWCxhQUNMUyxLQUFLWCxNQUFNWSxhQUFlLEVBQzFCRCxLQUFLWCxNQUFNYSxTQUFXLFVBNUMxQkYsS0FBT0csU0FBU0MsY0FBYyxRQUM5QlAsS0FBT00sU0FBU0MsY0FBYyxRQUM5QkMsT0FBU0YsU0FBU0MsY0FBYyxVQUNoQ2hCLFFBQVVlLFNBQVNDLGNBQWMsYUFLakNuQixJQUFNa0IsU0FBU0MsY0FBYyxRQUM3QkQsU0FBU0MsY0FBYyxhQUFhRSxpQkFBaUIsUUFBU2QsV0FDOURXLFNBQVNDLGNBQWMsYUFBYUcsUUFBVXZCLFNBRTlDbUIsU0FBU0MsY0FBYyxtQkFBbUJHLFFBQVV2QixTQW1DcEQsSUFBSXdCLFFBQVUsRUFFZCxTQUFTQyxlQUNVLEdBQVhELFNBQ0FSLEtBQUtYLE1BQU1ZLGFBQWVOLE9BQU9DLFdBQWFDLEtBQUtDLFlBQWMsS0FDakVFLEtBQUtYLE1BQU1hLFNBQVcsU0FDdEJNLFFBQVUsSUFFVlIsS0FBS1gsTUFBTVksYUFBZSxFQUMxQkQsS0FBS1gsTUFBTWEsU0FBVyxVQUN0Qk0sUUFBVSxHQVlsQixTQUFTRSxhQUNMLElBQUlDLEVBQVUsRUFDZGhCLE9BQU9XLGlCQUFpQixVQUFVLFdBQzFCSyxFQUFVQyxZQUFjQSxZQUFjUCxPQUFPUSxhQUM3Q1IsT0FBT2hCLE1BQU15QixVQUFZLG9CQUV6QlQsT0FBT2hCLE1BQU15QixVQUFZLE9BRTdCSCxFQUFVQyxlQVpsQmpCLE9BQU9vQixPQUFTLFdBQ1pMLGNBa0JKZixPQUFPVyxpQkFBaUIsUUFBUSxXQUNmLElBQUlVLE9BQU8sVUFBVyxDQUMvQkMsV0FBWSxDQUNSQyxHQUFJLHNCQUVSQyxZQUFhLENBQ1RDLElBQUssQ0FDREMsY0FBZSxFQUNmQyxhQUFjLFNBUjlCM0IsTUFlSUEsT0FBT1csaUJBQWlCLFFBQVEsV0FDNUIsTUFBTWlCLEVBQWdCcEIsU0FBU3FCLGVBQWUsb0JBQ3hDQyxFQUFLdEIsU0FBU3FCLGVBQWUsWUFpQm5DLFNBQVNFLElBRUwsSUFBSUMsRUFBU2hDLE9BQU9pQyxXQUFXLDBDQUMzQkMsRUFBVWxDLE9BQU9pQyxXQUFXLHNCQUU1QkQsRUFBT0csUUFDSFAsR0FBaUJFLElBQ2pCQSxFQUFLcEMsTUFBTTBDLFFBQVEsT0FDbkJSLEVBQWdCbEMsTUFBTTBDLFFBQVEsU0FHM0JGLEVBQVFDLFNBQ1hQLEdBQWlCRSxJQUNqQkYsRUFBZ0JsQyxNQUFNMEMsUUFBUSxPQUM5Qk4sRUFBS3BDLE1BQU0wQyxRQUFRLFNBN0IvQkwsSUFFaUIsSUFBSVYsT0FBTyxlQUFnQixDQUN4Q0MsV0FBWSxDQUNSQyxHQUFJLDJCQUVSQyxZQUFhLENBQ1RhLElBQUssQ0FDRFgsY0FBZSxFQUNmQyxhQUFjLE9BMEJ0Qm5CLFNBQVNDLGNBQWMsa0JBQ3ZCVCxPQUFPVyxpQkFBaUIsUUFBUSxXQUM1Qm9CLE9BR0ovQixPQUFPVyxpQkFBaUIsVUFBVSxXQUM5Qm9CIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5odG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XG5oZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuYnRuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLW1lbnVcIik7XG5cblxuXG4vLyDQvNC+0LHQuNC70YzQvdC+0LUg0LzQtdC90Y5cbm5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tbWVudVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlbmF2KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LW1lbnVcIikub25jbGljayA9IGNsb3NlbmF2O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1iYWNrZ3JvdW5kXCIpLm9uY2xpY2sgPSBjbG9zZW5hdjtcblxuZnVuY3Rpb24gY2xvc2VuYXYoKSB7XG4gICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtb3BlblwiKTtcbiAgICBidG5NZW51LnN0eWxlLm1hcmdpblJpZ2h0ID0gXCIwXCI7XG4gICAgc2hvd3Njcm9sbCgpO1xuXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZW5hdigpIHtcbiAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1vcGVuXCIpO1xuICAgIGlmIChuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LW9wZW5cIikpIHtcbiAgICAgICAgYnRuTWVudS5zdHlsZS5tYXJnaW5SaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gaHRtbC5vZmZzZXRXaWR0aCArIFwicHhcIjtcbiAgICAgICAgaGlkZXNjcm9sbCgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd3Njcm9sbCgpO1xuICAgICAgICBidG5NZW51LnN0eWxlLm1hcmdpblJpZ2h0ID0gXCIwXCI7XG4gICAgfVxufVxuXG4vLyDQvNC+0LHQuNC70YzQvdC+0LUg0LzQtdC90Y5cblxuXG4vLyDQvtGC0LrQu9GO0YfQuNGC0Ywg0L/RgNC+0LrRgNGD0YLQutGDXG5mdW5jdGlvbiBoaWRlc2Nyb2xsKCkge1xuICAgIGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggLSBodG1sLm9mZnNldFdpZHRoICsgXCJweFwiO1xuICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xufVxuXG5mdW5jdGlvbiBzaG93c2Nyb2xsKCkge1xuICAgIGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gMDtcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCJcbn1cblxubGV0IHNjcm9saWQgPSAwO1xuXG5mdW5jdGlvbiB0b2dnbGVzY3JvbGwoKSB7XG4gICAgaWYgKHNjcm9saWQgPT0gMCkge1xuICAgICAgICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gaHRtbC5vZmZzZXRXaWR0aCArIFwicHhcIjtcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIHNjcm9saWQgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gMDtcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiXG4gICAgICAgIHNjcm9saWQgPSAwO1xuICAgIH1cbn1cblxuLy8g0L7RgtC60LvRjtGH0LjRgtGMINC/0YDQvtC60YDRg9GC0LrRg1xuXG5cbi8vINCf0L7Rj9Cy0LvQtdC90LjQtSDQvNC10L3RjiDQv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHBhZ2VzY3JvbGwoKTtcbn1cblxuZnVuY3Rpb24gcGFnZXNjcm9sbCgpIHtcbiAgICBsZXQgcHNjcm9sbCA9IDA7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHBzY3JvbGwgPCBwYWdlWU9mZnNldCAmIHBhZ2VZT2Zmc2V0ID4gaGVhZGVyLm9mZnNldEhlaWdodCkge1xuICAgICAgICAgICAgaGVhZGVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgtMTAwJSlcIjsgLy/Qv9GA0Y/Rh9C10Lwg0YXQtdC00LXRgCDQv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1INCy0L3QuNC3XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoZWFkZXIuc3R5bGUudHJhbnNmb3JtID0gXCJub25lXCI7IC8v0L/QvtC60LDQt9GL0LLQsNC10Lwg0YXQtdC00LXRgCDQv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1INCy0LLQtdGA0YVcbiAgICAgICAgfVxuICAgICAgICBwc2Nyb2xsID0gcGFnZVlPZmZzZXQ7XG4gICAgfSk7XG59XG5cbi8v0J/QvtGP0LLQu9C10L3QuNC1INC80LXQvdGOINC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LVcblxuLy9zd2lwZXJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmNhcmRzMVwiLCB7XG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgICAgICB9LFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgNjgwOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0pXG5cbihmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHN3aXBlckNvbnRhaW5lcj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpcGVyLXRhYnMtd3JhcCcpO1xuICAgICAgICBjb25zdCB0YWJzPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJzLWJveCcpO1xuXG4gICAgICAgIHN3aXBlck1vZGUoKTtcblxuICAgICAgICBsZXQgc3dpcGVyVGFicyA9IG5ldyBTd2lwZXIoXCIuc3dpcGVyLXRhYnNcIiwge1xuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvbi10YWJzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgICAgICAzMjA6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBmdW5jdGlvbiBzd2lwZXJNb2RlKCkge1xuXG4gICAgICAgICAgICBsZXQgbW9iaWxlID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LXdpZHRoOjY5MnB4KVwiKTtcbiAgICAgICAgICAgIGxldCBkZXNrdG9wID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA2OTNweClcIik7XG5cbiAgICAgICAgICAgIGlmIChtb2JpbGUubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIGlmIChzd2lwZXJDb250YWluZXImJnRhYnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFicy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXJDb250YWluZXIuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRlc2t0b3AubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIGlmIChzd2lwZXJDb250YWluZXImJnRhYnMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIHRhYnMuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zd2lwZXItdGFic1wiKSkge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzd2lwZXJNb2RlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHN3aXBlck1vZGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSlcbn0oKSk7XG4vL3N3aXBlclxuXG5cbi8v0L7RgtC/0YDQsNCy0LrQsCDRhNC+0YDQvNGLXG4vLyBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcmRlci1mb3JtJyk7XG5cbi8vIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFwiKTtcblxuLy8gZnVuY3Rpb24gYWpheGZvcm0oZXZ0KSB7XG4vLyAgIGd0YWcoJ2V2ZW50JywgJ3N1Ym1pdCcsIHtcbi8vICAgICAnZXZlbnRfY2F0ZWdvcnknOiAnRm9ybSdcbi8vICAgfSk7XG4vLyAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICBsZXQgZm9ybXN0YXR1cyA9IHRoaXMucXVlcnlTZWxlY3RvcignLmZvcm1zdGF0dXMnKTtcbi8vICAgZm9ybXN0YXR1cy5pbm5lckhUTUwgPSAnPGNsYXNzPVwibG9hZC1mb3JtXCI+0KHQvtC10LTQuNC10L3QtdC40LUgLi4uJztcblxuLy8gICBsZXQgZm9ybURhdGEgPSB7XG4vLyAgICAgZGVzYzogdGhpcy5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWx1ZSxcbi8vICAgICBuYW1lOiB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYW1lXCJdJykudmFsdWUsXG5cbi8vICAgICBwaG9uZTogdGhpcy5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicGhvbmVcIl0nKS52YWx1ZVxuXG4vLyAgIH07XG4vLyAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcbi8vICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuLy8gICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG5cbi8vICAgICBmb3Jtc3RhdHVzLmlubmVySFRNTCA9ICfQktCw0YjQsCDQt9Cw0Y/QstC60LAg0YPRgdC/0LXRiNC90L4g0L7RgtC/0YDQsNCy0LvQtdC90LAsINC+0LbQuNC00LDQudGC0LUg0LfQstC+0L3QutCwJztcblxuLy8gICB9KTtcblxuLy8gICByZXF1ZXN0Lm9wZW4oJ1BPU1QnLCAnL21haWwucGhwJywgdHJ1ZSk7XG4vLyAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcpO1xuLy8gICByZXF1ZXN0LnNlbmQoJ25hbWU9JyArIGVuY29kZVVSSUNvbXBvbmVudChmb3JtRGF0YS5uYW1lKSArICcmcGhvbmU9JyArIGVuY29kZVVSSUNvbXBvbmVudChmb3JtRGF0YS5waG9uZSkgKyAnJmRlc2M9JyArIGVuY29kZVVSSUNvbXBvbmVudChmb3JtRGF0YS5kZXNjKSk7XG5cblxuLy8gfTtcblxuXG4vLyBmb3IgKGkgPSAwOyBpIDwgZm9ybS5sZW5ndGg7IGkrKykge1xuLy8gICBmb3JtW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFqYXhmb3JtKTtcbi8vIH0gXG4vL9C+0YLQv9GA0LDQstC60LAg0YTQvtGA0LzRi1xuXG4vLyBhY2NvcmRpb25cblxuLy8gZnVuY3Rpb24gYWNjb3JkaW9uSW5pdCAoKSB7XG4vLyBcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4vLyBcdFx0Y29uc3QgYWNjb3JkaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvcmRpb25cIik7XG4vLyBcdFx0Y29uc3QgaXRlbXMgPSBhY2NvcmRpb24ucXVlcnlTZWxlY3RvckFsbChcIi5hY2NvcmRpb25fX2l0ZW1cIik7XG5cbi8vIFx0XHRpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4vLyBcdFx0XHRjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5hY2NvcmRpb25fX3RpdGxlXCIpO1xuXG4vLyBcdFx0XHR0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbi8vIFx0XHRcdFx0Y29uc3Qgb3BlbmVkX2l0ZW0gPSBhY2NvcmRpb24ucXVlcnlTZWxlY3RvcihcIi5pcy1vcGVuXCIpO1xuXG4vLyBcdFx0XHRcdHRvZ2dsZV9pdGVtKGl0ZW0pO1xuXG4vLyBcdFx0XHRcdGlmIChvcGVuZWRfaXRlbSAmJiBvcGVuZWRfaXRlbSAhPT0gaXRlbSkge1xuLy8gXHRcdFx0XHRcdHRvZ2dsZV9pdGVtKG9wZW5lZF9pdGVtKTtcbi8vIFx0XHRcdFx0fVxuLy8gXHRcdFx0fSk7XG4vLyBcdFx0fSk7XG5cbi8vIFx0XHRjb25zdCB0b2dnbGVfaXRlbSA9IChpdGVtKSA9PiB7XG4vLyBcdFx0XHRjb25zdCBib2R5ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmFjY29yZGlvbl9fYm9keVwiKTtcbi8vIFx0XHRcdGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3JkaW9uX19jb250ZW50XCIpO1xuXG4vLyBcdFx0XHRpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1vcGVuXCIpKSB7XG4vLyBcdFx0XHRcdGJvZHkucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4vLyBcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImlzLW9wZW5cIik7XG4vLyBcdFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0XHRib2R5LnN0eWxlLmhlaWdodCA9IGJvZHkuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuLy8gXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoXCJpcy1vcGVuXCIpO1xuLy8gXHRcdFx0fVxuLy8gXHRcdH07XG4vLyBcdH0pO1xuLy8gfVxuXG4vLyBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbicpKSB7XG4vLyBcdGFjY29yZGlvbkluaXQoKVxuLy8gfVxuLy8gLy8gYWNjb3JkaW9uXG5cbi8vICAvL2Ryb3Bkb3duXG5cbi8vIGZ1bmN0aW9uIGRyb3Bkb3duKCkge1xuLy8gICBjb25zdCBkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bl9fYWN0aXZhdG9yXCIpO1xuLy8gICBkcm9wLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgZHJvcC5jbGFzc0xpc3QudG9nZ2xlKFwiZHJvcGRvd25fb3BlblwiKTtcbi8vICAgfSk7XG4vLyB9XG5cbi8vIHRyeSB7XG4vLyAgIGRyb3Bkb3duKCk7XG4vLyB9IGNhdGNoIChlKSB7XG4vLyAgIGNvbnNvbGUubG9nKGUpO1xuLy8gfVxuLy9kcm9wZG93biJdfQ==
