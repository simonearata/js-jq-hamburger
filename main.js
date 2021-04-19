$(document).ready(function(){


  // creo referenze agli elementi
  var menu_hidden = $(".header-right");
  var menu_ham = $(".hamburger-menu");
  var bottone = $(".header-left");

  // menu principale nascosto
  menu_hidden.hide();

  // flag 
  var testo_visibile = false;

  // clicco sul tasto boolean e rendo visibile / nascosto il testo

  bottone.click(function(){

    if(testo_visibile === false){
      menu_hidden.show();
      testo_visibile = true;

    }else{
      menu_hidden.hide();
      testo_visibile = false
    }


  })



})