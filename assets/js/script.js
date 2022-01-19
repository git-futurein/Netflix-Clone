$(function () {
  'use strict';
  // WoW Js
  var wow = new WOW({
    offset: 2,
    mobile: false
  })
  wow.init();



  // $('.slider-for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.slider-nav'
  // });
  // $('.slider-nav').slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider-for',
  //   dots: true,
  // });


  // banner slide
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    fade: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    swipe: false,
    centerMode: false,
    focusOnSelect: true,
    prevArrow: '<button class="slide-arrow prev-arrow"> <i class="fas fa-chevron-right"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-left"></i></button>'
  });




});