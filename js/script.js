$(function(){
    $('.accordion_one .ac_header').click(function(){
      $(this).next('.ac_inner').slideToggle();
      $(this).toggleClass("open");
    });
  });