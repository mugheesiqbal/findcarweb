 let menu=document.querySelector("#menu-btn");
 let navbar=document.querySelector(".navabar");
 menu.onclick=()=>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
 }

 document.querySelector('#login-btn').onclick=()=>{
   document.querySelector('.login-form-container').classList.toggle('active');
 }
 document.querySelector('#close-login-form').onclick=()=>{
   document.querySelector('.login-form-container').classList.toggle.remove('active');
 }
 window.onscroll=()=>{

if(window.scrollY>0){
   document.querySelector('.header').classList.add('active');
}else{
   document.querySelector('.header').classList.remove('active');
}
    
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
 }
 window.onload=()=>{

   if(window.scrollY>0){
      document.querySelector('.heasder').classList.add('active');
   }else{
      document.querySelector('.header').classList.remove('active');
   }
       

    }

document.querySelector('.home').onmousemove=(e) => {
   document.querySelectorAll('.home-parallax').forEach(elm=>{
     let speed =elm.getAttribute('data-speed');
     
     let x=(window.innerWidth-e.pageX* speed)/90;
     let y=(window.innerHeight-e.pageY* speed)/90;
     elm.Style.transform= `translateX(${y}px) translateY(${x}px)`;
   });
}
 window.onload=()=>{

   if(window.scrollY>0){
      document.querySelector('.heasder').classList.add('active');
   }else{
      document.querySelector('.header').classList.remove('active');
   }
       

    }

document.querySelector('.home').onmouseleave=() => {
   document.querySelectorAll('.home-parallax').forEach(elm=>{

     elm.Style.transform= `translateX(0px) translateY(0px)`;
   });
}


var swiper = new Swiper(".vehicles-slide", {
   slidesPerView: 1,
   spaceBetween: 10,
   loop:true,
   grabCursor:true,
   centeredSlides:true,
   autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
     0: {
       slidesPerView: 1,
       
     },
     768: {
       slidesPerView: 2,
      
     },
     991: {
       slidesPerView: 3,
      
     },
   },
 });


 var swiper = new Swiper(".featured-slider", {
   slidesPerView: 1,
   spaceBetween: 10,
   loop:true,
   grabCursor:true,
   centeredSlides:true,
   autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
     0: {
       slidesPerView: 1,
       
     },
     768: {
       slidesPerView: 2,
      
     },
     991: {
       slidesPerView: 3,
      
     },
   },
 });


 var swiper = new Swiper(".reviews-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop:true,
  grabCursor:true,
  centeredSlides:true,
  autoplay: {
     delay: 9500,
     disableOnInteraction: false,
   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
     
    },
    991: {
      slidesPerView: 3,
     
    },
  },
});