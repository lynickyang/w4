$(document).ready(function(){
  $(".hamburger").click(function(e){
      e.preventDefault();
      $('.nav-menu').toggleClass('active');
  })
})