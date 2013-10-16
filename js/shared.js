var backgrounds = new Array();
backgrounds[0] = 'img/construction.jpg';
backgrounds[1] = 'img/oneoak1.jpg';
backgrounds[2] = 'img/oneoak2.jpg';
backgrounds[3] = 'img/oneoak3.jpg';
backgrounds[4] = 'img/oneoak_2.jpg';

var min = 0;
var max = 4;

$.fn.preload = function() {
  this.each(function(){
    $('<img/>')[0].src = this;
  });
}