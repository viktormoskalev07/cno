function closenav(){nav.classList.remove("nav-open"),btnMenu.style.marginRight="0",showscroll()}function togglenav(){nav.classList.toggle("nav-open"),nav.classList.contains("nav-open")?(btnMenu.style.marginRight=window.innerWidth-html.offsetWidth+"px",hidescroll()):(showscroll(),btnMenu.style.marginRight="0")}function hidescroll(){body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden"}function showscroll(){body.style.paddingRight=0,body.style.overflow="visible"}body=document.querySelector("body"),html=document.querySelector("html"),header=document.querySelector("header"),btnMenu=document.querySelector(".btn-menu"),nav=document.querySelector(".nav"),document.querySelector(".btn-menu").addEventListener("click",togglenav),document.querySelector(".nav-menu").onclick=closenav,document.querySelector(".nav-background").onclick=closenav;let scrolid=0;function togglescroll(){0==scrolid?(body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden",scrolid=1):(body.style.paddingRight=0,body.style.overflow="visible",scrolid=0)}function pagescroll(){let e=0;window.addEventListener("scroll",(function(){e<pageYOffset&pageYOffset>header.offsetHeight?header.style="transform:translateY(-100%)":header.style="transform:none ;",e=pageYOffset}))}window.onload=function(){pagescroll()};const cards=document.querySelectorAll(".card-dark");if(cards.length>-1)for(let e=0;e<cards.length;e++)cards[e].addEventListener("click",(function(){cards[e].classList.toggle("card-dark-active")}));window.addEventListener("load",(function(){new Swiper(".cards1",{pagination:{el:".swiper-pagination"}})}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY2xvc2VuYXYiLCJuYXYiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJidG5NZW51Iiwic3R5bGUiLCJtYXJnaW5SaWdodCIsInNob3dzY3JvbGwiLCJ0b2dnbGVuYXYiLCJ0b2dnbGUiLCJjb250YWlucyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJodG1sIiwib2Zmc2V0V2lkdGgiLCJoaWRlc2Nyb2xsIiwiYm9keSIsInBhZGRpbmdSaWdodCIsIm92ZXJmbG93IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uY2xpY2siLCJzY3JvbGlkIiwidG9nZ2xlc2Nyb2xsIiwicGFnZXNjcm9sbCIsInBzY3JvbGwiLCJwYWdlWU9mZnNldCIsIm9mZnNldEhlaWdodCIsIm9ubG9hZCIsImNhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImkiLCJTd2lwZXIiLCJwYWdpbmF0aW9uIiwiZWwiXSwibWFwcGluZ3MiOiJBQVlBLFNBQVNBLFdBQ1BDLElBQUlDLFVBQVVDLE9BQU8sWUFDckJDLFFBQVFDLE1BQU1DLFlBQVksSUFDMUJDLGFBR0YsU0FBU0MsWUFDUFAsSUFBSUMsVUFBVU8sT0FBTyxZQUNwQlIsSUFBSUMsVUFBVVEsU0FBUyxhQUN4Qk4sUUFBUUMsTUFBTUMsWUFBWUssT0FBT0MsV0FBV0MsS0FBS0MsWUFBYSxLQUM5REMsZUFHQVIsYUFDQUgsUUFBUUMsTUFBTUMsWUFBWSxLQU81QixTQUFTUyxhQUNQQyxLQUFLWCxNQUFNWSxhQUFhTixPQUFPQyxXQUFXQyxLQUFLQyxZQUFhLEtBQzVERSxLQUFLWCxNQUFNYSxTQUFTLFNBR3RCLFNBQVNYLGFBQ1BTLEtBQUtYLE1BQU1ZLGFBQWEsRUFDeEJELEtBQUtYLE1BQU1hLFNBQVMsVUF4Q3RCRixLQUFLRyxTQUFTQyxjQUFjLFFBQzVCUCxLQUFLTSxTQUFTQyxjQUFjLFFBQzVCQyxPQUFPRixTQUFTQyxjQUFjLFVBQzlCaEIsUUFBUWUsU0FBU0MsY0FBYyxhQUkvQm5CLElBQU1rQixTQUFTQyxjQUFjLFFBQzdCRCxTQUFTQyxjQUFjLGFBQWFFLGlCQUFpQixRQUFVZCxXQUMvRFcsU0FBU0MsY0FBYyxhQUFhRyxRQUFVdkIsU0FFOUNtQixTQUFTQyxjQUFjLG1CQUFtQkcsUUFBVXZCLFNBZ0NwRCxJQUFJd0IsUUFBVSxFQUNkLFNBQVNDLGVBQ00sR0FBVEQsU0FDRlIsS0FBS1gsTUFBTVksYUFBYU4sT0FBT0MsV0FBV0MsS0FBS0MsWUFBYSxLQUM1REUsS0FBS1gsTUFBTWEsU0FBUyxTQUNwQk0sUUFBUSxJQUVSUixLQUFLWCxNQUFNWSxhQUFhLEVBQ3hCRCxLQUFLWCxNQUFNYSxTQUFTLFVBQ3BCTSxRQUFRLEdBZ0JaLFNBQVNFLGFBQ1AsSUFBSUMsRUFBVSxFQUVkaEIsT0FBT1csaUJBQWlCLFVBQVUsV0FDMUJLLEVBQVFDLFlBQVlBLFlBQVlQLE9BQU9RLGFBQ2xDUixPQUFPaEIsTUFBTSw4QkFFaEJnQixPQUFPaEIsTUFBTSxtQkFFdEJzQixFQUFRQyxlQWJWakIsT0FBT21CLE9BQVEsV0FDZEosY0FrQkEsTUFBTUssTUFBTVosU0FBU2EsaUJBQWlCLGNBQ3RDLEdBQUdELE1BQU1FLFFBQVEsRUFDZixJQUFJLElBQUlDLEVBQUUsRUFBR0EsRUFBRUgsTUFBTUUsT0FBU0MsSUFDNUJILE1BQU1HLEdBQUdaLGlCQUFpQixTQUFRLFdBQ2hDUyxNQUFNRyxHQUFHaEMsVUFBVU8sT0FBTyx1QkFRaENFLE9BQU9XLGlCQUFpQixRQUFRLFdBQ2QsSUFBSWEsT0FBTyxVQUFXLENBQ3BDQyxXQUFZLENBQ1ZDLEdBQUkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbmh0bWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XHJcbmhlYWRlcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xyXG5idG5NZW51PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLW1lbnVcIik7XHJcblxyXG5cclxuLy8g0LzQvtCx0LjQu9GM0L3QvtC1INC80LXQvdGOXHJcbm5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwgdG9nZ2xlbmF2KTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtbWVudVwiKS5vbmNsaWNrID0gY2xvc2VuYXY7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1iYWNrZ3JvdW5kXCIpLm9uY2xpY2sgPSBjbG9zZW5hdjtcclxuZnVuY3Rpb24gY2xvc2VuYXYoKXtcclxuICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1vcGVuXCIpO1xyXG4gIGJ0bk1lbnUuc3R5bGUubWFyZ2luUmlnaHQ9XCIwXCI7XHJcbiAgc2hvd3Njcm9sbCgpO1xyXG4gIFxyXG59XHJcbmZ1bmN0aW9uIHRvZ2dsZW5hdigpIHtcclxuICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1vcGVuXCIpO1xyXG5pZihuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LW9wZW5cIikpe1xyXG4gIGJ0bk1lbnUuc3R5bGUubWFyZ2luUmlnaHQ9d2luZG93LmlubmVyV2lkdGgtaHRtbC5vZmZzZXRXaWR0aCArXCJweFwiO1xyXG4gIGhpZGVzY3JvbGwoKTtcclxuICBcclxufSBlbHNlIHtcclxuICBzaG93c2Nyb2xsKCk7XHJcbiAgYnRuTWVudS5zdHlsZS5tYXJnaW5SaWdodD1cIjBcIjtcclxufVxyXG59XHJcbi8vINC80L7QsdC40LvRjNC90L7QtSDQvNC10L3RjlxyXG5cclxuXHJcbi8vINC+0YLQutC70Y7Rh9C40YLRjCDQv9GA0L7QutGA0YPRgtC60YNcclxuZnVuY3Rpb24gaGlkZXNjcm9sbCgpe1xyXG4gIGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0PXdpbmRvdy5pbm5lcldpZHRoLWh0bWwub2Zmc2V0V2lkdGggK1wicHhcIjtcclxuICBib2R5LnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dzY3JvbGwoKXtcclxuICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodD0wO1xyXG4gIGJvZHkuc3R5bGUub3ZlcmZsb3c9XCJ2aXNpYmxlXCJcclxufVxyXG5cclxubGV0IHNjcm9saWQgPSAwIDtcclxuZnVuY3Rpb24gdG9nZ2xlc2Nyb2xsKCl7XHJcbiAgaWYgKHNjcm9saWQ9PTApe1xyXG4gICAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9d2luZG93LmlubmVyV2lkdGgtaHRtbC5vZmZzZXRXaWR0aCArXCJweFwiO1xyXG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiO1xyXG4gICAgc2Nyb2xpZD0xO1xyXG4gIH0gZWxzZXtcclxuICAgIGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0PTA7XHJcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93PVwidmlzaWJsZVwiXHJcbiAgICBzY3JvbGlkPTA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDQvtGC0LrQu9GO0YfQuNGC0Ywg0L/RgNC+0LrRgNGD0YLQutGDXHJcblxyXG4gXHJcblxyXG5cclxuXHJcblxyXG4gLy8g0J/QvtGP0LLQu9C10L3QuNC1INC80LXQvdGOINC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUgXHJcbiB3aW5kb3cub25sb2FkPSBmdW5jdGlvbigpe1xyXG4gIHBhZ2VzY3JvbGwoKTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhZ2VzY3JvbGwoKXsgXHJcbiAgbGV0IHBzY3JvbGwgPSAwO1xyXG4gIFxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHsgIFxyXG4gICAgICBpZiAocHNjcm9sbDxwYWdlWU9mZnNldCZwYWdlWU9mZnNldD5oZWFkZXIub2Zmc2V0SGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlPVwidHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMCUpXCI7IC8v0L/RgNGP0YfQtdC8INGF0LXQtNC10YAg0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQstC90LjQtyAgICAgICAgICAgIFxyXG4gICAgICAgfWVsc2UgeyBcclxuICAgICAgICAgICAgaGVhZGVyLnN0eWxlPVwidHJhbnNmb3JtOm5vbmUgO1wiOyAvL9C/0L7QutCw0LfRi9Cy0LDQtdC8INGF0LXQtNC10YAg0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQstCy0LXRgNGFICAgICAgICAgICBcclxuICAgICAgIH0gIFxyXG4gICBwc2Nyb2xsPXBhZ2VZT2Zmc2V0O1xyXG4gfSk7XHJcbn1cclxuXHJcbiAvL9Cf0L7Rj9Cy0LvQtdC90LjQtSDQvNC10L3RjiDQv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1XHJcbiAvL2NhcmRcclxuICBjb25zdCBjYXJkcz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1kYXJrJyk7XHJcbiAgaWYoY2FyZHMubGVuZ3RoPi0xKXtcclxuICAgIGZvcihsZXQgaT0wIDtpPGNhcmRzLmxlbmd0aCA7IGkrKyl7XHJcbiAgICAgIGNhcmRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgIGNhcmRzW2ldLmNsYXNzTGlzdC50b2dnbGUoJ2NhcmQtZGFyay1hY3RpdmUnKTsgXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIC8vY2FyZFxyXG5cclxuLy9zd2lwZXJcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5jYXJkczFcIiwge1xyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXHJcbiAgICAgIH0sIFxyXG4gICAgfSk7ICBcclxuICB9KSAgXHJcbiAgIFxyXG5cclxuLy9zd2lwZXJcclxuXHJcblxyXG5cclxuXHJcbi8v0L7RgtC/0YDQsNCy0LrQsCDRhNC+0YDQvNGLICBcclxuLy8gbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3JkZXItZm9ybScpO1xyXG5cclxuLy8gY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xyXG5cclxuLy8gZnVuY3Rpb24gYWpheGZvcm0oZXZ0KSB7XHJcbi8vICAgZ3RhZygnZXZlbnQnLCAnc3VibWl0Jywge1xyXG4vLyAgICAgJ2V2ZW50X2NhdGVnb3J5JzogJ0Zvcm0nXHJcbi8vICAgfSk7XHJcbi8vICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgbGV0IGZvcm1zdGF0dXMgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5mb3Jtc3RhdHVzJyk7XHJcbi8vICAgZm9ybXN0YXR1cy5pbm5lckhUTUwgPSAnPGNsYXNzPVwibG9hZC1mb3JtXCI+0KHQvtC10LTQuNC10L3QtdC40LUgLi4uJztcclxuXHJcbi8vICAgbGV0IGZvcm1EYXRhID0ge1xyXG4vLyAgICAgZGVzYzogdGhpcy5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWx1ZSxcclxuLy8gICAgIG5hbWU6IHRoaXMucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hbWVcIl0nKS52YWx1ZSxcclxuXHJcbi8vICAgICBwaG9uZTogdGhpcy5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicGhvbmVcIl0nKS52YWx1ZVxyXG5cclxuLy8gICB9O1xyXG4vLyAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuLy8gICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuLy8gICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4vLyAgICAgZm9ybXN0YXR1cy5pbm5lckhUTUwgPSAn0JLQsNGI0LAg0LfQsNGP0LLQutCwINGD0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvdCwLCDQvtC20LjQtNCw0LnRgtC1INC30LLQvtC90LrQsCc7XHJcblxyXG4vLyAgIH0pO1xyXG5cclxuLy8gICByZXF1ZXN0Lm9wZW4oJ1BPU1QnLCAnL21haWwucGhwJywgdHJ1ZSk7XHJcbi8vICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04Jyk7XHJcbi8vICAgcmVxdWVzdC5zZW5kKCduYW1lPScgKyBlbmNvZGVVUklDb21wb25lbnQoZm9ybURhdGEubmFtZSkgKyAnJnBob25lPScgKyBlbmNvZGVVUklDb21wb25lbnQoZm9ybURhdGEucGhvbmUpICsgJyZkZXNjPScgKyBlbmNvZGVVUklDb21wb25lbnQoZm9ybURhdGEuZGVzYykpO1xyXG5cclxuXHJcbi8vIH07XHJcblxyXG5cclxuXHJcbi8vIGZvciAoaSA9IDA7IGkgPCBmb3JtLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgZm9ybVtpXS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhamF4Zm9ybSk7XHJcbi8vIH0gXHJcbi8v0L7RgtC/0YDQsNCy0LrQsCDRhNC+0YDQvNGLXHJcblxyXG4vLyBhY2NvcmRpb25cclxuXHJcbi8vIGZ1bmN0aW9uIGFjY29yZGlvbkluaXQgKCkge1xyXG4vLyBcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbi8vIFx0XHRjb25zdCBhY2NvcmRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY29yZGlvblwiKTtcclxuLy8gXHRcdGNvbnN0IGl0ZW1zID0gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uX19pdGVtXCIpO1xyXG5cdFxyXG4vLyBcdFx0aXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4vLyBcdFx0XHRjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5hY2NvcmRpb25fX3RpdGxlXCIpO1xyXG5cdFxyXG4vLyBcdFx0XHR0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuLy8gXHRcdFx0XHRjb25zdCBvcGVuZWRfaXRlbSA9IGFjY29yZGlvbi5xdWVyeVNlbGVjdG9yKFwiLmlzLW9wZW5cIik7XHJcblx0XHJcbi8vIFx0XHRcdFx0dG9nZ2xlX2l0ZW0oaXRlbSk7XHJcblx0XHJcbi8vIFx0XHRcdFx0aWYgKG9wZW5lZF9pdGVtICYmIG9wZW5lZF9pdGVtICE9PSBpdGVtKSB7XHJcbi8vIFx0XHRcdFx0XHR0b2dnbGVfaXRlbShvcGVuZWRfaXRlbSk7XHJcbi8vIFx0XHRcdFx0fVxyXG4vLyBcdFx0XHR9KTtcclxuLy8gXHRcdH0pO1xyXG5cdFxyXG4vLyBcdFx0Y29uc3QgdG9nZ2xlX2l0ZW0gPSAoaXRlbSkgPT4ge1xyXG4vLyBcdFx0XHRjb25zdCBib2R5ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmFjY29yZGlvbl9fYm9keVwiKTtcclxuLy8gXHRcdFx0Y29uc3QgY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5hY2NvcmRpb25fX2NvbnRlbnRcIik7XHJcblx0XHJcbi8vIFx0XHRcdGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcImlzLW9wZW5cIikpIHtcclxuLy8gXHRcdFx0XHRib2R5LnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xyXG4vLyBcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImlzLW9wZW5cIik7XHJcbi8vIFx0XHRcdH0gZWxzZSB7XHJcbi8vIFx0XHRcdFx0Ym9keS5zdHlsZS5oZWlnaHQgPSBib2R5LnNjcm9sbEhlaWdodCArIFwicHhcIjtcclxuLy8gXHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoXCJpcy1vcGVuXCIpO1xyXG4vLyBcdFx0XHR9XHJcbi8vIFx0XHR9O1xyXG4vLyBcdH0pO1xyXG4vLyB9XHJcblxyXG4vLyBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbicpKSB7XHJcbi8vIFx0YWNjb3JkaW9uSW5pdCgpXHJcbi8vIH1cclxuLy8gLy8gYWNjb3JkaW9uXHJcblxyXG4vLyAgLy9kcm9wZG93blxyXG5cclxuLy8gZnVuY3Rpb24gZHJvcGRvd24oKSB7XHJcbi8vICAgY29uc3QgZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25fX2FjdGl2YXRvclwiKTtcclxuLy8gICBkcm9wLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICBkcm9wLmNsYXNzTGlzdC50b2dnbGUoXCJkcm9wZG93bl9vcGVuXCIpO1xyXG4vLyAgIH0pO1xyXG4vLyB9XHJcblxyXG4vLyB0cnkge1xyXG4vLyAgIGRyb3Bkb3duKCk7XHJcbi8vIH0gY2F0Y2ggKGUpIHtcclxuLy8gICBjb25zb2xlLmxvZyhlKTtcclxuLy8gfVxyXG4vL2Ryb3Bkb3duIl19
