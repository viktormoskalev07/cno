body = document.querySelector("body");
html = document.querySelector("html");
header = document.querySelector("header");
btnMenu = document.querySelector(".btn-menu");



// мобильное меню
nav = document.querySelector(".nav");
document.querySelector(".btn-menu").addEventListener("click", togglenav);
document.querySelector(".nav-menu").onclick = closenav;

document.querySelector(".nav-background").onclick = closenav;

function closenav() {
    nav.classList.remove("nav-open");
    btnMenu.style.marginRight = "0";
    showscroll();

}

function togglenav() {
    nav.classList.toggle("nav-open");
    if (nav.classList.contains("nav-open")) {
        btnMenu.style.marginRight = window.innerWidth - html.offsetWidth + "px";
        hidescroll();

    } else {
        showscroll();
        btnMenu.style.marginRight = "0";
    }
}

// мобильное меню


// отключить прокрутку
function hidescroll() {
    body.style.paddingRight = window.innerWidth - html.offsetWidth + "px";
    body.style.overflow = "hidden";
}

function showscroll() {
    body.style.paddingRight = 0;
    body.style.overflow = "visible"
}

let scrolid = 0;

function togglescroll() {
    if (scrolid == 0) {
        body.style.paddingRight = window.innerWidth - html.offsetWidth + "px";
        body.style.overflow = "hidden";
        scrolid = 1;
    } else {
        body.style.paddingRight = 0;
        body.style.overflow = "visible"
        scrolid = 0;
    }
}

// отключить прокрутку


// Появление меню при прокрутке
window.onload = function () {
    pagescroll();
}

function pagescroll(){ 
  let pscroll = 0;
  
  window.addEventListener('scroll', function() { 
  
    if(pscroll>2){ 
      header.classList.add('header-bg-js'); 
    } else{
      try{
        header.classList.remove('header-bg-js'); 
      }
      catch(e){ console.log(e);}
    }
      if (pscroll<pageYOffset&pageYOffset>header.offsetHeight){
               header.style="transform:translateY(-100%)"; //прячем хедер при прокрутке вниз            
       }else { 
            header.style="transform:none ;"; //показываем хедер при прокрутке вверх           
       }  
   pscroll=pageYOffset;
 });
}

 //Появление меню при прокрутке
 //card
 const cards=document.querySelectorAll('.card-dark');
  function cardsToggler(){

  if(cards.length>-1){
    for(let i=0 ;i<cards.length ; i++){ 
      cards[i].addEventListener('click',function(){ 
        this.classList.toggle('card-dark-active'); 
      })
      cards[i].addEventListener('keypress',function(e){
        if(e.key=='Enter'){
          this.classList.toggle('card-dark-active'); 
        }  
      })
    }
  }
  }

  window.addEventListener('load' , cardsToggler);
 

 //card

 
 
 

(function () {
    window.addEventListener('load', function () {
      if(this.document.querySelector('.cards1')){
        try{
             const swiper = new Swiper(".cards1", {
        pagination: {
          el: ".swiper-pagination",
        }, 
      }); 
        }catch (e){
          console.log(e);
        }
            
      }



        const swiperContainer=document.getElementById('swiper-tabs-wrap');
        const tabs=document.getElementById('tabs-box');

        swiperMode();

        let swiperTabs = new Swiper(".swiper-tabs", {
            pagination: {
                el: ".swiper-pagination-tabs",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                }
            }
        });


        function swiperMode() {

            let mobile = window.matchMedia("(min-width: 0px) and (max-width:692px)");
            let desktop = window.matchMedia("(min-width: 693px)");

            if (mobile.matches) {
                if (swiperContainer&&tabs) {
                    tabs.style.display="none";
                    swiperContainer.style.display="block";
                }

            } else if (desktop.matches) {
                if (swiperContainer&&tabs) {
                    swiperContainer.style.display="none";
                    tabs.style.display="block";
                }

            }
        }

        if (document.querySelector(".swiper-tabs")) {
            window.addEventListener("load", function () {
                swiperMode();
            });

            window.addEventListener("resize", function () {
                swiperMode();
            });
        }
    })
}());
//swiper


//отправка формы
// let form = document.querySelectorAll('.order-form');

// const modal = document.getElementById("modal");

// function ajaxform(evt) {
//   gtag('event', 'submit', {
//     'event_category': 'Form'
//   });
//   evt.preventDefault();
//   let formstatus = this.querySelector('.formstatus');
//   formstatus.innerHTML = '<class="load-form">Соедиенеие ...';

//   let formData = {
//     desc: this.querySelector('input[name="description"]').value,
//     name: this.querySelector('input[name="name"]').value,

//     phone: this.querySelector('input[name="phone"]').value

//   };
//   console.log(formData);
//   let request = new XMLHttpRequest();

//   request.addEventListener('load', function () {

//     formstatus.innerHTML = 'Ваша заявка успешно отправлена, ожидайте звонка';

//   });

//   request.open('POST', '/mail.php', true);
//   request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
//   request.send('name=' + encodeURIComponent(formData.name) + '&phone=' + encodeURIComponent(formData.phone) + '&desc=' + encodeURIComponent(formData.desc));


// };


// for (i = 0; i < form.length; i++) {
//   form[i].addEventListener('submit', ajaxform);
// } 
//отправка формы

// accordion

// function accordionInit () {
// 	window.addEventListener("load", function () {
// 		const accordion = document.querySelector(".accordion");
// 		const items = accordion.querySelectorAll(".accordion__item");

// 		items.forEach((item) => {
// 			const title = item.querySelector(".accordion__title");

// 			title.addEventListener("click", (e) => {
// 				const opened_item = accordion.querySelector(".is-open");

// 				toggle_item(item);

// 				if (opened_item && opened_item !== item) {
// 					toggle_item(opened_item);
// 				}
// 			});
// 		});

// 		const toggle_item = (item) => {
// 			const body = item.querySelector(".accordion__body");
// 			const content = item.querySelector(".accordion__content");

// 			if (item.classList.contains("is-open")) {
// 				body.removeAttribute("style");
// 				item.classList.remove("is-open");
// 			} else {
// 				body.style.height = body.scrollHeight + "px";
// 				item.classList.add("is-open");
// 			}
// 		};
// 	});
// }

// if (document.querySelector('.accordion')) {
// 	accordionInit()
// }
// // accordion

//  //dropdown

// function dropdown() {
//   const drop = document.querySelector(".dropdown__activator");
//   drop.addEventListener("click", function () {
//     drop.classList.toggle("dropdown_open");
//   });
// }

// try {
//   dropdown();
// } catch (e) {
//   console.log(e);
// }
//dropdown