$(document).ready(function(){
  
  // click del tag a 
  $('.header-right > a').click(function(){
    // aggiungo la classe active a .hamburger-menu
    $('.hamburger-menu').addClass('active');

  });


  $('.close').click(function(){

    $('.hamburger-menu').removeClass('active');
  });


});