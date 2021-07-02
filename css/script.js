$(document).ready(function(){

    $('.js-nav-icon').click(function () {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon img');
        nav.slideToggle(200);
        console.log("before if");
        if (icon.hasClass('ion-navicon-round')){
          icon.addClass('ion-close-round')
          console.log("in if");
          icon.removeClass('ion-navicon-round')
        }else{
          icon.addClass('ion-navicon-round')
          icon.removeClass('ion-close-round')
          console.log("else");
        }
      });



    //  $('.js-nav-icon').click(function(){
    //         var tosh = $('.js-main-nav')
    //         var san = $('.js-main-nav li');
    //         if(san.hasClass('.color-link')){
    //             console.log("Inside the cusotm nav")
    //         }else{
    //             tosh.addClass('.invisible-nav')
    //         }
    //  }) 

})