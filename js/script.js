$(document).ready(function){

  $('.navbar-toggler').click(function(){

    $('.navbar-toggler').toggleClass('change')
  })


//sticky navbar

$(window).scroll(function){

  let position = $(this).scrollTop();
  consol.log(position);


  if(position>= 710) {
    $('.navbar').addClass('navbar-background');
    $('.navbar').addClass('fixed-top');
  }
  else {
    $('.navbar').removeClass('navbar-background');
    $('.navbar').removeClass('fixed-top');

  }
})








    
    //ripples
    $("#header, .info").ripples({
        dropRadius:25,
        perturbance: 0.1,
         
      });

//magnific popup
    $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image'

    gallery:{
        enabled: true}

    // other options
  });



});