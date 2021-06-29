$(document).ready(() => {
  $("#menu-mobile-open").click(()=>{
    $("body").toggleClass("no-scoll")
  })
  $(".icon-menu-mobile").click(()=>{
    $(".p-navbar_menu-mobile-open").toggleClass("display-none")
    $(".p-navbar_menu-mobile-close").toggleClass("display-block")
  })
});


window.onscroll=function(){
  const header=document.getElementsByClassName("c-header")[0]
  if(document.documentElement.scrollTop > 100){
    header.classList.add("header-fixed")
  }else{
    header.classList.remove("header-fixed")
  }
}

// back to top
function backtotop(){
  document.body.scrollTop=0
}

// Slide Main
var i;
var slideIndex = 1;
const slides = document.getElementsByClassName("c-slide");
const dots = document.getElementsByClassName("dot");
showSlides(slideIndex);
function nextSlide() {
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  showSlides();
}
function showSlides(currentSlide) {
  if (currentSlide) {
    slideIndex = currentSlide;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log(slideIndex)
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  } else {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
}

// Slide project jisekishoukai
