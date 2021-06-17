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
  if(pageYOffset>2){ 
    header.classList.add('header-bg-js'); 
  }
  window.addEventListener('scroll', function() { 
 
    if(pageYOffset>2){ 
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

        if (document.querySelector(".swiper-tabs")) {

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
        }



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
 