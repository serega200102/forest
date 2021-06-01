function slowScroll(id){
   $('html, body').animate({
      scrollTop: $(id).offset().top
   }, 500);
   return false;
}
$(".header-top .menu").on("click", function(){
   $("header .mobile-menu").slideToggle();
})
