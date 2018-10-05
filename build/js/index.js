$(document).ready(function () {

    function ToggleMenu() {
        $("#menu").fadeToggle(600);
    }

    function resizeBackground() {
        var newSize;

        if (window.innerWidth > window.innerHeight) {
            newSize = window.innerWidth;

        } else {
            newSize = window.innerHeight;

        }

        $(".background-image").width(newSize).height(newSize);
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
        $("#menu").height(window.innerHeight);
    // }
    $(".small-hero").height(window.innerHeight / 3);

    $("#menu").css("padding-top", $("header").height());

    if (WURFL.form_factor == 'Desktop') {
        $(".section, .small-hero").css("background-attachment", "fixed");
    }

    if (mobile || window.innerWidth < 479) {
        $('.enable-on-mobile').show();
        $('.hide-on-mobile').hide();
        // $.scrollify.disable();
        $('#section-1').prepend('<img src="imgs/mobilewoodwall.jpg" class="enable-on-mobile background-image">');
        resizeBackground();
    } else {
        $('.enable-on-mobile').hide();
        $('.hide-on-mobile').show();

        EnableDesktopImages();
    }

    $(window).resize(function () {

        $("#menu").height(window.innerHeight); // This messes up the scrollify behavior


        $("#menu").css("padding-top", $("header").height() + 45); //Make sure hamburger and logo are visible over menu items

        if (mobile || window.innerWidth < 479) {
            $('.enable-on-mobile').show();
            $('.hide-on-mobile').hide();
            resizeBackground();
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