// Slide menu up from bottom using negative margin
// http://jsfiddle.net/SpMns/


$(function(){

    var hash=location.hash.replace('#', '');

    // $('#' + 'sidebar-' + hash).css('marginBottom', -520)
    // $('#' + 'sidebar-' + hash).stop(true).animate({ 'marginBottom': -520 }, { queue: false, duration: 1500});
    
    // $('#' + 'sidebar-' + hash).attr('margin-bottom', '-300px');

    // $('#' + 'sidebar-' + hash).animate({'margin-bottom':"0px"}, 1500);

    // alert(hash);

    // $('#' + 'sidebar-' + hash).attr({'margin-bottom':"-500px"});
    
    // $('#' + 'sidebar-' + hash).animate({'margin-bottom':"-500px"}, 1500);
    
    // $('#' + 'sidebar-' + hash).show();

    // $('.sidebar').show();
    // $('#' + 'sidebar-' + hash).show();

    // $('.sidebar').switchClass('sidebar-parent-minimized',    'sidebar-parent', 2000);

    // $('#' + 'sidebar-' + hash).hide();
    // $('#' + 'sidebar-' + hash).slideUp(2000);
    // $('.sidebar').switchClass('.sidebar-minimized', 'sidebar', 2000);
    
    $('#nav-btn-' + hash).addClass('nav-btn-active').removeClass('nav-btn-inactive');

    $('.btn').click(function(event){
        event.preventDefault();

        var that = this;

        if ($('.panel').css('display') === 'none'){
            switchPanel(that);
            toggleButtons(that);
            $('.panel').toggle('fold');
        }
        else {
            toggleButtons(that);
            $('.panel').toggle({effect: 'fold', complete: function(){
                switchPanel(that);
                $('.panel').toggle('fold');
            }});
        }               
    });

    var switchPanel = function(that){
        $('.innerPanel div').removeClass('visible').addClass('hidden');
        $('.innerPanel #' + that.id).removeClass('hidden').addClass('visible');
    }

    var toggleButtons = function(that){
        $('div.label').addClass('inactive').removeClass('active');
        $(that).children('.label').addClass('active').removeClass('inactive');

        $('.circle-btn').children('img').attr('src', 'img/plus.png');
        $(that).children('.circle-btn').children('img').attr('src', 'img/minus.png'); 
    }

    $('.nav-btn').click(function(event){
        event.preventDefault();

        $('div.label').addClass('inactive').removeClass('active');
        $('.circle-btn').children('img').attr('src', 'img/plus.png');

        $('.nav-btn').addClass('nav-btn-inactive').removeClass('nav-btn-active');
        $(this).addClass('nav-btn-active').removeClass('nav-btn-inactive');
        
        var sidebar_target = $(this).data('sidebarTarget');

        if ($('.panel').css('display') === 'none'){
            $('.sidebar-inner').animate({ 'marginBottom': -520 }, { queue: false, duration: 600, complete: function(){
                $('.sidebar-inner').hide();

                // alert(sidebar_target);

                $(sidebar_target).show();
                $(sidebar_target).animate({ 'marginBottom': 0 }, { queue: false, duration: 600 });
            }});
        }
        else {
            $('.panel').toggle({effect: 'fold', complete: function(){
                $('.sidebar-inner').animate({ 'marginBottom': -520 }, { queue: false, duration: 600, complete: function(){
                    $('.sidebar-inner').hide();

                    // alert(sidebar_target);

                    $(sidebar_target).show();
                    $(sidebar_target).animate({ 'marginBottom': 0 }, { queue: false, duration: 600 });
                }});
            }});
        }

        // // showing sidebar associated with the nav button clicked
    });

    // $('.nav-btn-vision').click(function(event){
    //     event.preventDefault();

    //     $('.panel').fadeOut();

    //     $('div.label').addClass('inactive').removeClass('active');
    //     $('.circle-btn').children('img').attr('src', 'img/plus.png');

    //     // highlighting active nav button 
    //     $('.nav-btn').addClass('nav-btn-inactive').removeClass('nav-btn-active');
    //     $(this).addClass('nav-btn-active').removeClass('nav-btn-inactive');

    //     // showing sidebar associated with the nav button clicked
    //     var sidebar_target = $(this).data('sidebarTarget');
    //     $('.sidebar-inner').hide();
    //     $(sidebar_target).show();
    // });
});