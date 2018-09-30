$(document).ready(function () {

    function ToggleMenu() {
        $("#menu").fadeToggle(600);
    }

    function EnableDesktopImages() {
        $('#section-1').css('background-image', "url('imgs/mountains.jpg')");
        $('#section-2').css('background-image', "url('imgs/bibleswag.jpg')");
        $('#section-3').css('background-image', "url('imgs/biblestudy.jpg')");
        $('#section-4').css('background-image', "url('imgs/woodwall.jpg')");
    }

    ToggleMenu();

    $("#hamburger, #menu").click(function () { //Toggle menu if hamburger or menu is clicked 
        ToggleMenu();
    });

    var mobile = (WURFL.form_factor != 'Desktop' && WURFL.form_factor != 'Tablet');

    // if (WURFL.form_factor == "Smartphone") { // If on smartphone, make sections 0.15 times taller. Won't apply if scrollify set height is true
    //     $(".fullscreen").height(window.innerHeight * 1.15);
    // } else {
    //     $(".fullscreen").height(window.innerHeight);
    // }

    $("#menu").css("padding-top", $("header").height());

    if (WURFL.form_factor == 'Desktop') {
        $(".section").css("background-attachment", "fixed");
    }

    if (mobile || window.innerWidth < 479) {
        $('.enable-on-mobile').show();
        $('.hide-on-mobile').hide();
        // $.scrollify.disable();
        $('#section-1').prepend('<img src="imgs/mobilewoodwall.jpg" class="enable-on-mobile background-image">');
    } else {
        $('.enable-on-mobile').hide();
        $('.hide-on-mobile').show();

        EnableDesktopImages();
    }

    $(window).resize(function () {

        $(".fullscreen").height(window.innerHeight);


        $("#menu").css("padding-top", $("header").height() + 45); //Make sure hamburger and logo are visible over menu items

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