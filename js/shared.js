var backgrounds = new Array();
backgrounds[0] = 'img/oneoak-1.jpg';
backgrounds[1] = 'img/oneoak-3.jpg';
backgrounds[2] = 'img/oneoak-9.jpg';

var siteContentBackgrounds = new Array();
siteContentBackgrounds[0] = 'img/construction.jpg';

var min = 0;
var max = 4;

$.fn.preload = function(complete) {
  this.each(function(){
    $('<img/>')[0].src = this;
  });

  complete();
}