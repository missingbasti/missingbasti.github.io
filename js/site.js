timeline = new TL.Timeline('timeline-embed',
  'https://docs.google.com/spreadsheets/d/11T-Ps3iIe5wJmFg-yaZSGqvawe5OiVqpVqEnAx1tgUY/edit#gid=0');

$("#map").load("https://snazzymaps.com/embed/34717");


$(document).ready(function(){
  $('.your-class').slick({
// adaptiveHeight: true,
accessibility: true,
dots: true,
centerMode: true,
variableWidth: true
});
});

$(document).ready(function(){
  $('.char-slider').slick({
adaptiveHeight: true,
accessibility: true,
dots: true,
// centerMode: true,
variableWidth: false
});
});

$(document).ready(function() {
  $("#lightgallery").lightGallery(); 
});


$(function(){
  $('.js-timeline').Timeline();
});
$(document).ready(function() {
  $('.drawer').drawer({
    class: {
      nav: 'map-nav',
      toggle: 'map-toggle'
    }
  });
});
$(document).ready(function(){
  $('.press-timeline').hide();
});

$( "#time-toggle" ).click(function() {
  $('.press-timeline').slideToggle()
});
$( ".drawer-toggle" ).click(function() {
  $('.press-timeline').hide();
});

