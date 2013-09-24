$(document).ready(function() {
    $('body').addClass('ready');
    window.setTimeout(function(){$("body").addClass("delayed-now-ready");}, 1000);
    $('.tooltip').tooltipster();


     // Fade directions in and out then out.
    $prompt = $(".small.prompt"),
    setTimeout(function(){
    $prompt.fadeIn(1000, function(){
        $prompt.animate({opacity: 0.1}, 1000, function(){
            $prompt.animate({opacity:1}, 1000, function(){
                $prompt.animate({opacity: 0.1}, 1000, function(){
                    $prompt.animate({opacity:1}, 1000, function(){
                        $prompt.animate({opacity: 0.1}, 1000, function(){
                            $prompt.animate({opacity:1}, 1000, function(){
                                $prompt.fadeOut(1000);
                            });
                        });
                    });
                });
            });
        });
    });
    }, 2500);

});

