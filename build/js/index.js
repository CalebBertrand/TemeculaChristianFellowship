$(document).ready(function () {
    
    function ToggleMenu() {
        $("#menu").fadeToggle(600);
    }
    
    ToggleMenu();

    $("#hamburger, #x, #menu a").click(function() {
        ToggleMenu();
    });

    var mobile = (WURFL.form_factor != 'Desktop' && WURFL.form_factor != 'Tablet');

    if (WURFL.form_factor == "Smartphone") {
        $(".fullscreen").height(window.innerHeight * 1.15);
    }else{
        $(".fullscreen").height(window.innerHeight);
    }

    $("#menu").css("padding-top", $("header").height());
    
    function EnableDesktopImages() {
        $('#section-1').css('background-image', "url('imgs/mountains.jpg')");
        $('#section-2').css('background-image', "url('imgs/bibleswag.jpg')");
        $('#section-3').css('background-image', "url('imgs/biblestudy.jpg')");
        $('#section-4').css('background-image', "url('imgs/woodwall.jpg')");
    }

    if (WURFL.form_factor == 'Desktop') {
        $(".section").css("background-attachment", "fixed");
    }

    if (mobile || window.innerWidth < 479) {
        $('.enable-on-mobile').show();
        $('.hide-on-mobile').hide();
        $.scrollify.disable();
        $('#section-1').prepend('<img src="imgs/mobilewoodwall.jpg" class="enable-on-mobile background-image fullheight">');
    }else{
        $('.enable-on-mobile').hide();
        $('.hide-on-mobile').show();

        EnableDesktopImages();
    }

    $(window).resize(function() {


        if (!mobile) {
            $(".fullscreen").height(window.innerHeight);
        }
        
        
        $("#menu").css("padding-top", $("header").height() + 45);

        if (mobile || window.innerWidth < 479) {
            $('.enable-on-mobile').show();
            $('.hide-on-mobile').hide();
        } else {
            $('.enable-on-mobile').hide();
            $('.hide-on-mobile').show();
            if (!mobile) {
                EnableDesktopImages();
                $.scrollify.enable();
            }
        }
    });
}); 