if(document.querySelector(".documentation")){const e=document.querySelector(".header");function toggleSidebar(){const e=document.querySelector(".sidebar"),t=document.querySelector(".sidebar__toggler"),o=document.querySelector(".sidebar__close");window.innerWidth<1200?(t.addEventListener("click",(function(){e.classList.add("active")})),o.addEventListener("click",(function(){e.classList.remove("active")}))):window.innerWidth>=1200&&e.classList.remove("active")}document.querySelector(".main").style.paddingTop=e.clientHeight+50+"px";const t=document.querySelector(".toc");if(t){const o=t.querySelectorAll("ul li a");function removeActiveClass(e){for(let t=0;t<e.length;t++)e[t].classList.remove("active")}function switchActiveOnListItem(){let e=null;for(let t=0;t<o.length;t++){document.getElementById(o[t].getAttribute("href").substring(1)).getBoundingClientRect().top<=50&&(e=o[t],removeActiveClass(o),o[t].classList.add("active"))}}t.style.top=e.clientHeight+70+"px"}function copyToClipboard(){const e=document.querySelectorAll(".token");let t=document.createRange();e.forEach(e=>{e.querySelector(".token__copy").addEventListener("click",(function(){t.selectNode(e.querySelector(".token__comand")),window.getSelection().removeAllRanges(),window.getSelection().addRange(t),document.execCommand("copy"),window.getSelection().removeAllRanges(),e.querySelector(".token__tooltip").innerText="Copied",setTimeout(()=>{e.querySelector(".token__tooltip").innerText="Copy To Clipboard"},1250)}))})}toggleSidebar(),window.addEventListener("DOMContentLoaded",copyToClipboard),window.addEventListener("scroll",switchActiveOnListItem),window.addEventListener("resize",toggleSidebar)}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50YXRpb24uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyIiwidG9nZ2xlU2lkZWJhciIsInNpZGViYXJOYXYiLCJzaWRlYmFyVG9nZ2xlciIsInNpZGViYXJDbG9zZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3R5bGUiLCJwYWRkaW5nVG9wIiwiY2xpZW50SGVpZ2h0IiwidG9jTGlzdENvbnRhaW5lciIsInRvY0xpc3RJdGVtIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZUFjdGl2ZUNsYXNzIiwiZWxlbWVudHMiLCJpIiwibGVuZ3RoIiwic3dpdGNoQWN0aXZlT25MaXN0SXRlbSIsInByZXZpb3VzUmVmRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0QXR0cmlidXRlIiwic3Vic3RyaW5nIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiY29weVRvQ2xpcGJvYXJkIiwiY29weUJ0bnMiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwiZm9yRWFjaCIsInRva2VuIiwic2VsZWN0Tm9kZSIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZXhlY0NvbW1hbmQiLCJpbm5lclRleHQiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiQUFDRSxHQUFJQSxTQUFTQyxjQUFjLGtCQUFtQixDQUM1QyxNQUFNQyxFQUFTRixTQUFTQyxjQUFjLFdBTXRDLFNBQVNFLGdCQUNQLE1BQU1DLEVBQWFKLFNBQVNDLGNBQWMsWUFDcENJLEVBQWlCTCxTQUFTQyxjQUFjLHFCQUN4Q0ssRUFBZU4sU0FBU0MsY0FBYyxtQkFFeENNLE9BQU9DLFdBQWEsTUFDdEJILEVBQWVJLGlCQUFpQixTQUFTLFdBQ3ZDTCxFQUFXTSxVQUFVQyxJQUFJLGFBRTNCTCxFQUFhRyxpQkFBaUIsU0FBUyxXQUNyQ0wsRUFBV00sVUFBVUUsT0FBTyxjQUVyQkwsT0FBT0MsWUFBYyxNQUM5QkosRUFBV00sVUFBVUUsT0FBTyxVQWxCbkJaLFNBQVNDLGNBQWMsU0FFL0JZLE1BQU1DLFdBQWdCWixFQUFPYSxhQUFlLEdBQXpCLEtBcUJ4QixNQUFNQyxFQUFtQmhCLFNBQVNDLGNBQWMsUUFFaEQsR0FBSWUsRUFBa0IsQ0FFcEIsTUFBTUMsRUFBY0QsRUFBaUJFLGlCQUFpQixXQUd0RCxTQUFTQyxrQkFBa0JDLEdBQ3pCLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQUFJRCxFQUFTRSxPQUFRRCxJQUNuQ0QsRUFBU0MsR0FBR1gsVUFBVUUsT0FBTyxVQUlqQyxTQUFTVyx5QkFDUCxJQUFJQyxFQUFxQixLQUN6QixJQUFLLElBQUlILEVBQUksRUFBR0EsRUFBSUosRUFBWUssT0FBUUQsSUFBSyxDQUNqQnJCLFNBQVN5QixlQUNqQ1IsRUFBWUksR0FBR0ssYUFBYSxRQUFRQyxVQUFVLElBSTVCQyx3QkFBd0JDLEtBQ2hCLEtBQzFCTCxFQUFxQlAsRUFBWUksR0FDakNGLGtCQUFrQkYsR0FDbEJBLEVBQVlJLEdBQUdYLFVBQVVDLElBQUksWUFwQm5DSyxFQUFpQkgsTUFBTWdCLElBQVMzQixFQUFPYSxhQUFlLEdBQXpCLEtBMEIvQixTQUFTZSxrQkFDUCxNQUFNQyxFQUFXL0IsU0FBU2tCLGlCQUFpQixVQUMzQyxJQUFJYyxFQUFRaEMsU0FBU2lDLGNBRXJCRixFQUFTRyxRQUFTQyxJQUNoQkEsRUFBTWxDLGNBQWMsZ0JBQWdCUSxpQkFBaUIsU0FBUyxXQUU1RHVCLEVBQU1JLFdBQVdELEVBQU1sQyxjQUFjLG1CQUNyQ00sT0FBTzhCLGVBQWVDLGtCQUN0Qi9CLE9BQU84QixlQUFlRSxTQUFTUCxHQUMvQmhDLFNBQVN3QyxZQUFZLFFBQ3JCakMsT0FBTzhCLGVBQWVDLGtCQUd0QkgsRUFBTWxDLGNBQWMsbUJBQW1Cd0MsVUFBWSxTQUNuREMsV0FBVyxLQUNUUCxFQUFNbEMsY0FBYyxtQkFBbUJ3QyxVQUFZLHFCQUNsRCxXQUtUdEMsZ0JBQ0FJLE9BQU9FLGlCQUFpQixtQkFBb0JxQixpQkFDNUN2QixPQUFPRSxpQkFBaUIsU0FBVWMsd0JBQ2xDaEIsT0FBT0UsaUJBQWlCLFNBQVVOIiwiZmlsZSI6ImRvY3VtZW50YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRvY3VtZW50YXRpb25cIikpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuXG4gICAgbWFpbi5zdHlsZS5wYWRkaW5nVG9wID0gYCR7aGVhZGVyLmNsaWVudEhlaWdodCArIDUwfXB4YDtcblxuICAgIC8vIHNpZGViYXIgdG9nZ2xlclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoKSB7XG4gICAgICBjb25zdCBzaWRlYmFyTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuICAgICAgY29uc3Qgc2lkZWJhclRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJfX3RvZ2dsZXJcIik7XG4gICAgICBjb25zdCBzaWRlYmFyQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJfX2Nsb3NlXCIpO1xuXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCAxMjAwKSB7XG4gICAgICAgIHNpZGViYXJUb2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2lkZWJhck5hdi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2lkZWJhckNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2lkZWJhck5hdi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTIwMCkge1xuICAgICAgICBzaWRlYmFyTmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdG9jIGxpc3QgYW5jaG9ycyBvbnNjcm9sbFxuICAgIGNvbnN0IHRvY0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvY1wiKTtcblxuICAgIGlmICh0b2NMaXN0Q29udGFpbmVyKSB7XG4gICAgICAvLyBmaXggdG9jIGNvbnRhaW5lciBpbiBzdGlreSBwb3NcbiAgICAgIGNvbnN0IHRvY0xpc3RJdGVtID0gdG9jTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwidWwgbGkgYVwiKTtcbiAgICAgIHRvY0xpc3RDb250YWluZXIuc3R5bGUudG9wID0gYCR7aGVhZGVyLmNsaWVudEhlaWdodCArIDcwfXB4YDtcblxuICAgICAgZnVuY3Rpb24gcmVtb3ZlQWN0aXZlQ2xhc3MoZWxlbWVudHMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGVsZW1lbnRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc3dpdGNoQWN0aXZlT25MaXN0SXRlbSgpIHtcbiAgICAgICAgbGV0IHByZXZpb3VzUmVmRWxlbWVudCA9IG51bGw7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9jTGlzdEl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50UmVmRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgdG9jTGlzdEl0ZW1baV0uZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zdWJzdHJpbmcoMSlcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY29uc3QgY3VycmVudFJlZkVsZW1lbnRUb3AgPVxuICAgICAgICAgICAgY3VycmVudFJlZkVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICAgIGlmIChjdXJyZW50UmVmRWxlbWVudFRvcCA8PSA1MCkge1xuICAgICAgICAgICAgcHJldmlvdXNSZWZFbGVtZW50ID0gdG9jTGlzdEl0ZW1baV07XG4gICAgICAgICAgICByZW1vdmVBY3RpdmVDbGFzcyh0b2NMaXN0SXRlbSk7XG4gICAgICAgICAgICB0b2NMaXN0SXRlbVtpXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZCgpIHtcbiAgICAgIGNvbnN0IGNvcHlCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2tlblwiKTtcbiAgICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG5cbiAgICAgIGNvcHlCdG5zLmZvckVhY2goKHRva2VuKSA9PiB7XG4gICAgICAgIHRva2VuLnF1ZXJ5U2VsZWN0b3IoJy50b2tlbl9fY29weScpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBjb3B5IHRvIGNsaXBib2FyZFxuICAgICAgICAgIHJhbmdlLnNlbGVjdE5vZGUodG9rZW4ucXVlcnlTZWxlY3RvcihcIi50b2tlbl9fY29tYW5kXCIpKTtcbiAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLmFkZFJhbmdlKHJhbmdlKTtcbiAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuXG4gICAgICAgICAgLy8gY2hhbmdlIHRvb2x0aXAgdGV4dFxuICAgICAgICAgIHRva2VuLnF1ZXJ5U2VsZWN0b3IoJy50b2tlbl9fdG9vbHRpcCcpLmlubmVyVGV4dCA9ICdDb3BpZWQnO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdG9rZW4ucXVlcnlTZWxlY3RvcignLnRva2VuX190b29sdGlwJykuaW5uZXJUZXh0ID0gJ0NvcHkgVG8gQ2xpcGJvYXJkJztcbiAgICAgICAgICB9LCAxMjUwKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVTaWRlYmFyKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjb3B5VG9DbGlwYm9hcmQpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc3dpdGNoQWN0aXZlT25MaXN0SXRlbSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdG9nZ2xlU2lkZWJhcik7XG4gIH1cbn1cbiJdfQ==
