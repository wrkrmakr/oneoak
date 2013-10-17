// Slide menu up from bottom using negative margin
// http://jsfiddle.net/SpMns/

// Portfolio slideshow
// http://www.pixedelic.com/plugins/camera/

var portfolioInitialized = false;
var backgroundShouldChange = false;

var dimBackground = function(that){
    $('.img-background:visible').animate({'opacity': 0.15}, {'duration': 400});
}

var undimBackground = function(that){
    $('.img-background:visible').animate({'opacity': 1}, {'duration': 400});
}

var initializePortfolio = function(that){

    if (portfolioInitialized === false){
        $('#camera_wrap').camera({
            height: '380px',
            loader: 'bar',
            pagination: false,
            thumbnails: true,
            fx: 'simpleFade',
            playPause: false,
            autoAdvance: false,
            alignment: 'right'
        });
    }

    portfolioInitialized = true;
}

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
                initializePortfolio(that);

                dimBackground();
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
                dimBackground();
                $('.panel').toggle({effect: 'fold', complete: function(){
                    switchPanel(that);
                    $('#top_spacer').hide();
                    $('#small_panel').hide();
                    $('#portfolio_panel').toggle('fold');
                    initializePortfolio(that);
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
                undimBackground();

                return;
            }

            toggleButton(that);

            undimBackground();
            $('#portfolio_panel').toggle({'effect': 'fold', 'complete': function(){
                switchPanel(that);
                $('#top_spacer').show();
                $('#small_panel').show();
                $('.panel').toggle('fold');
            }});
        } 
    }
});

$('.nav-btn').click(function(event){
    event.preventDefault();

    if($(".sidebar-inner").is(':animated') != true){

        backgroundShouldChange = true;

        undimBackground();

        var sidebar_target = $(this).data('sidebarTarget');
        
        var backgroundToShow = '';

        switch(sidebar_target)
        {
        case '#sidebar-Vision':
          if ($('#sidebar-Vision').css('display') != 'none') return;
          backgroundToShow = '#background1';
          break;
        case '#sidebar-Services':
          if ($('#sidebar-Services').css('display') != 'none') return;
          backgroundToShow = '#background2';
          break;
        case '#sidebar-Work':
          if ($('#sidebar-Work').css('display') != 'none') return;
          backgroundToShow = '#background3';
          break;
        case '#sidebar-Contact':
          if ($('#sidebar-Contact').css('display') != 'none') return;
          backgroundToShow = '#background4';
          break;
        default:
          backgroundToShow = '#background1';
        }

        $('div.label').addClass('inactive').removeClass('active');
        $('.circle-btn').children('img').attr('src', 'img/plus.png');

        $('.nav-btn').addClass('nav-btn-inactive').removeClass('nav-btn-active');
        $(this).addClass('nav-btn-active').removeClass('nav-btn-inactive');
        
        if ($('.panel').css('display') === 'none' && $('#portfolio_panel').css('display') === 'none'){
            $('.sidebar-inner').animate({ 'marginBottom': -520 }, { queue: false, duration: 800, complete: function(){
                $('.sidebar-inner').hide();

                $(sidebar_target).show();
                $(sidebar_target).animate({ 'marginBottom': 0 }, { queue: false, duration: 800, complete: function(){
                    if (backgroundShouldChange === true){
                        $('.img-background').fadeOut(1000);
                        $(backgroundToShow).fadeIn(1000);
                        backgroundShouldChange = false;
                    } 
                }});                
            }});
        }
        else if ($('.panel').css('display') != 'none' && $('#portfolio_panel').css('display') === 'none'){
            $('.panel').toggle({effect: 'fold', complete: function(){
                $('.sidebar-inner').animate({ 'marginBottom': -520 }, { queue: false, duration: 800, complete: function(){
                    $('.sidebar-inner').hide();

                    $(sidebar_target).show();
                    $(sidebar_target).animate({ 'marginBottom': 0 }, { queue: false, duration: 800, complete: function(){
                        if (backgroundShouldChange === true){
                            $('.img-background').fadeOut(1000);
                            $(backgroundToShow).fadeIn(1000);
                            backgroundShouldChange = false;
                        } 
                    } });                    
                }});
            }});
        }
        else if ($('.panel').css('display') === 'none' && $('#portfolio_panel').css('display') != 'none'){
            $('#portfolio_panel').toggle({effect: 'fold', complete: function(){
                $('.sidebar-inner').animate({ 'marginBottom': -520 }, { queue: false, duration: 800, complete: function(){
                    $('.sidebar-inner').hide();

                    $(sidebar_target).show();
                    $(sidebar_target).animate({ 'marginBottom': 0 }, { queue: false, duration: 800, complete: function(){
                        if (backgroundShouldChange === true){
                            $('.img-background').fadeOut(1000);
                            $(backgroundToShow).fadeIn(1000);
                            backgroundShouldChange = false;
                        }                     
                        
                    } });                    
                }});
            }});
        }

    }
});


$(function () {
    var hash=location.hash.replace('#', '');

    if (hash != 'Vision' && hash != 'Services' && hash != 'Work' && hash != 'Contact'){
        hash = 'Vision';
    }

    var backgroundToShow = '';

    switch(hash)
    {
    case 'Vision':
      backgroundToShow = '#background1';
      break;
    case 'Services':
      backgroundToShow = '#background2';
      break;
    case 'Work':
      backgroundToShow = '#background3';
      break;
    case 'Contact':
      backgroundToShow = '#background4';
      break;
    default:
      backgroundToShow = '#background1';
    }

    $(backgroundToShow).show();

    // Set sidebars to below the screen (using margin-bottom, then slide up the requested one)
    $('.sidebar-inner').css('marginBottom', -520);
    $('#' + 'sidebar-' + hash).show();
    $('#' + 'sidebar-' + hash).css('marginBottom', -520)
    $('#' + 'sidebar-' + hash).stop(true).animate({ 'marginBottom': 0 }, { queue: false, duration: 400});
    
    $('#nav-btn-' + hash).addClass('nav-btn-active').removeClass('nav-btn-inactive');

    // Use left and right buttons for portfolio navigation
    $("body").keydown(function(e) {
      if($('#portfolio_panel').css('display') != 'none') {
          if(e.keyCode == 37) { // left
            $('.camera_prev').trigger('click');
          }
          else if(e.keyCode == 39) { // right
            $('.camera_next').trigger('click');
          }
      }
    });
});