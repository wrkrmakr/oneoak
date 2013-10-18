var backgrounds = new Array();
backgrounds[0] = 'img/construction.jpg';
backgrounds[1] = 'img/oneoak_11.jpg';
backgrounds[2] = 'img/oneoak_12.jpg';
backgrounds[3] = 'img/oneoak3.jpg';
backgrounds[4] = 'img/oneoak_7.jpg';

var min = 0;
var max = 4;

$.fn.preload = function(complete) {
  this.each(function(){
    $('<img/>')[0].src = this;
  });

  complete();
}