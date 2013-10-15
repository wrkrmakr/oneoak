// Slide menu up from bottom using negative margin
// http://jsfiddle.net/SpMns/

// Portfolio slideshow
// http://www.pixedelic.com/plugins/camera/

$('.btn').click(function(event){
    event.preventDefault();

    if($(".panel").is(':animated') != true){

        var that = this;

        // Panel, nor portfolio_panel are not visible
        if ($('.panel').css('display') === 'none' && $('#portfolio_panel').css('display') === 'none'){

            adjustIfConMgmt(that);

            if (that.id === 'portfolio'){ // But portfolio is clicked first
                toggleButton(that);
                $('#top_spacer').hide();
                $('#small_panel').hide();
                $('#portfolio_panel').toggle('fold');
            }
            else { // Another btn is clicked
                toggleButton(that);
                $('#top_spacer').show();
                $('#small_panel').show();
                switchPanel(that);
                $('.panel').toggle('fold');
            }            
        }
        else if ($('.panel').css('display') != 'none' && $('#portfolio_panel').css('display') === 'none')
        { // Panel is visible
            if ($('.innerPanel #' + that.id).hasClass("visible")) {
                allButtonsOff(that);

                $('.panel').toggle('fold');

                return;
            }

            if (that.id === 'portfolio'){
                toggleButton(that);
                $('.panel').toggle({effect: 'fold', complete: function(){
                    switchPanel(that);
                    $('#top_spacer').hide();
                    $('#small_panel').hide();
                    $('#portfolio_panel').toggle('fold');
                }});
            }
            else {
                toggleButton(that);
                $('.panel').toggle({effect: 'fold', complete: function(){ // fold
                    switchPanel(that);
                    adjustIfConMgmt(that);
                    $('.panel').toggle('fold'); // unfold
                }});
            }
        }       
        // Portfolio is visible
        else if ($('.panel').css('display') === 'none' && $('#portfolio_panel').css('display') != 'none'){
            
            if (that.id === 'portfolio') {
                allButtonsOff(that);

                $('#portfolio_panel').toggle('fold');

                return;
            }

            toggleButton(that);

            $('#portfolio_panel').toggle({'effect': 'fold', 'complete': function(){
                switchPanel(that);
                $('#top_spacer').show();
                $('#small_panel').show();
                $('.panel').toggle('fold');
            }});
        } 
    }
});

var adjustIfConMgmt = function(that){
    if (that.id === 'con_mgmt'){
        $(".panel").css('height', 280);
    }
    else {
        $(".panel").css('height', 230);
    }
}

var switchPanel = function(that){
    $('.innerPanel div').removeClass('visible').addClass('hidden');

    $('.innerPanel #' + that.id).removeClass('hidden').addClass('visible');
}

var toggleButton = function(that){
    $('div.label').addClass('inactive').removeClass('active');
    $(that).children('.label').addClass('active').removeClass('inactive');

    $('.circle-btn').children('img').attr('src', 'img/plus.png');
    $(that).children('.circle-btn').children('img').attr('src', 'img/minus.png'); 
}

var allButtonsOff = function(that){
    $('div.label').addClass('inactive').removeClass('active');

    $('.circle-btn').children('img').attr('src', 'img/plus.png');
}

$('.nav-btn').click(function(event){
    event.preventDefault();

    if($(".sidebar-inner").is(':animated') != true){

        var sidebar_target = $(this).data('sidebarTarget');

        $('div.label').addClass('inactive').removeClass('active');
        $('.circle-btn').children('img').attr('src', 'img/plus.png');

        $('.nav-btn').addClass('nav-btn-inactive').removeClass('nav-btn-active');
        $(this).addClass('nav-btn-active').removeClass('nav-btn-inactive');
        
        if ($('.panel').css('display') === 'none' && $('#portfolio_panel').css('display') === 'none'){
            $('.sidebar-inner').animate({ 'marginBottom': -520 }, { queue: false, duration: 400, complete: function(){
                $('.sidebar-inner').hide();

                $(sidebar_target).show();
                $(sidebar_target).animate({ 'marginBottom': 0 }, { queue: false, duration: 400 });
            }});
        }
        else if ($('.panel').css('display') != 'none' && $('#portfolio_panel').css('display') === 'none'){
            $('.panel').toggle({effect: 'fold', complete: function(){
                $('.sidebar-inner').animate({ 'marginBottom': -520 }, { queue: false, duration: 400, complete: function(){
                    $('.sidebar-inner').hide();

                    $(sidebar_target).show();
                    $(sidebar_target).animate({ 'marginBottom': 0 }, { queue: false, duration: 400 });
                }});
            }});
        }
        else if ($('.panel').css('display') === 'none' && $('#portfolio_panel').css('display') != 'none'){
            $('#portfolio_panel').toggle({effect: 'fold', complete: function(){
                $('.sidebar-inner').animate({ 'marginBottom': -520 }, { queue: false, duration: 400, complete: function(){
                    $('.sidebar-inner').hide();

                    $(sidebar_target).show();
                    $(sidebar_target).animate({ 'marginBottom': 0 }, { queue: false, duration: 400 });
                }});
            }});
        }

    }
});


$(function () {

    var hash=location.hash.replace('#', '');

    $('.sidebar-inner').hide();
    $('.sidebar-inner').css('marginBottom', -520);

    $('#' + 'sidebar-' + hash).show();

    $('#' + 'sidebar-' + hash).css('marginBottom', -520)
    $('#' + 'sidebar-' + hash).stop(true).animate({ 'marginBottom': 0 }, { queue: false, duration: 400});
    
    $('#nav-btn-' + hash).addClass('nav-btn-active').removeClass('nav-btn-inactive');

    
});
