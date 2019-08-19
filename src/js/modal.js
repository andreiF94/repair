$(document).ready(function() {
  var button = $('#btn');
  var modal = $('#modal');
  var close = $('#close');
  var close2 = $('#close-2');


  button.on('click', function(){
    modal.addClass('modal_active');
  });
  
  close.on('click', function(){
    modal.removeClass('modal_active');
  });

  close2.on('click', function(){
    modal.removeClass('modal_active');
  });

  ////////////////
  
  var upscroll = $('#upscroll');
  var up = $('#up').offset().top;

  upscroll.on('click', function(){
    $("html, body").animate( {scrollTop: up }, 2000);
    return false;
  });
});