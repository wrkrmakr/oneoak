$( document ).ready(function() {

    var hash=location.hash.replace('#', '');
    // $('.sidebar').show();
    $('#' + 'sidebar-' + hash).show();

    $('#' + 'sidebar-' + hash).switchClass('sidebar-inner-minimized', 'sidebar-inner', 2000);
    // $('.sidebar').switchClass('sidebar-parent-minimized',    'sidebar-parent', 2000);

    // $('#' + 'sidebar-' + hash).hide();
    // $('#' + 'sidebar-' + hash).slideUp(2000);
    // $('.sidebar').switchClass('.sidebar-minimized', 'sidebar', 2000);
    
    $('#nav-btn-' + hash).addClass('nav-btn-active').removeClass('nav-btn-inactive');

    $('.btn').click(function(event){
        event.preventDefault();

        $('.panel').fadeIn();

        $('.innerPanel div').removeClass('visible').addClass('hidden');
        $('.innerPanel #' + this.id).removeClass('hidden').addClass('visible');

        $('div.label').addClass('inactive').removeClass('active');
        $(this).children('.label').addClass('active').removeClass('inactive');

        $('.circle-btn').children('img').attr('src', 'img/plus.png');
        $(this).children('.circle-btn').children('img').attr('src', 'img/minus.png');
    });

    $('.nav-btn').click(function(event){
        event.preventDefault();

        $('.panel').fadeOut();

        $('div.label').addClass('inactive').removeClass('active');
        $('.circle-btn').children('img').attr('src', 'img/plus.png');

        $('.nav-btn').addClass('nav-btn-inactive').removeClass('nav-btn-active');
        $('.nav-btn-vision').addClass('nav-btn-inactive').removeClass('nav-btn-active');
        $(this).addClass('nav-btn-active').removeClass('nav-btn-inactive');

        // showing sidebar associated with the nav button clicked
        var sidebar_target = $(this).data('sidebarTarget');
        $('.sidebar-inner').hide();
        $(sidebar_target).show();
    });

    $('.nav-btn-vision').click(function(event){
        event.preventDefault();

        $('.panel').fadeOut();

        $('div.label').addClass('inactive').removeClass('active');
        $('.circle-btn').children('img').attr('src', 'img/plus.png');

        // highlighting active nav button 
        $('.nav-btn').addClass('nav-btn-inactive').removeClass('nav-btn-active');
        $(this).addClass('nav-btn-active').removeClass('nav-btn-inactive');

        // showing sidebar associated with the nav button clicked
        var sidebar_target = $(this).data('sidebarTarget');
        $('.sidebar-inner').hide();
        $(sidebar_target).show();
    });
});