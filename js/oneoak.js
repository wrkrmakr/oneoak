$( document ).ready(function() {

  $('.btn').click(function(element){
    element.preventDefault();

    $('.innerPanel div').removeClass('visible').addClass('hidden');
    $('.innerPanel #' + this.id).removeClass('hidden').addClass('visible');

    $('div.label').addClass('inactive').removeClass('active');
    $(this).children('.label').addClass('active').removeClass('inactive');

    $('.circle-btn').children('img').attr('src', 'img/plus.png');
    $(this).children('.circle-btn').children('img').attr('src', 'img/minus.png');
  });
});