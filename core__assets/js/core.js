$(document).ready(function () {
    "use strict";

    /*==============================
    Header
    ==============================*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
            $('.header').addClass("header--active");
        } else {
            $('.header').removeClass("header--active");
        }
    });

    $('.header__menu').on('click', function () {
        $(this).toggleClass('header__menu--active');
        $('.header__nav').toggleClass('header__nav--active');
    });

    /*==============================
    Superior slider
    ==============================*/
    $('.rating__slider .owl-carousel').owlCarousel({
        mouseDrag: false,
        dots: true,
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
    });
    $('.rating__btn').on('click', function () {
        $('.rating__slider .owl-carousel').trigger('next.owl.carousel');
    });


    /*==============================
    Dynamic HTML
    ==============================*/
    function includeHTML() {
        var z, i, elmnt, file, xhttp;
        /* Loop through a collection of all HTML elements: */
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            /*search for elements with a certain atrribute:*/
            file = elmnt.getAttribute("include-html");
            if (file) {
                /* Make an HTTP request using the attribute value as the file name: */
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            elmnt.innerHTML = this.responseText;
                        }
                        if (this.status == 404) {
                            elmnt.innerHTML = "Page not found.";
                        }
                        /* Remove the attribute, and call this function once more: */
                        elmnt.removeAttribute("include-html");
                        includeHTML();
                    }
                }
                xhttp.open("GET", file, true);
                xhttp.send();
                /* Exit the function: */
                return;
            }
        }
    }

    includeHTML();
});


/*==============================
    Copy to clipboard function
  ==============================*/
$(document).ready(function() {
    $("#c1").click(function(event) {
        event.preventDefault();
        CopyToClipboard("QUDOSRIDER25", true, "Copied!");
    });
    $("#c2").click(function(event) {
        event.preventDefault();
        CopyToClipboard("QUDOSRIDER18", true, "Copied!");
    });
    $("#c3").click(function(event) {
        event.preventDefault();
        CopyToClipboard("QUDOSRIDER16", true, "Copied!");
    });
    $("#c4").click(function(event) {
        event.preventDefault();
        CopyToClipboard("QUDOSRIDER15", true, "Copied!");
    });
    
    $('.clip-btn').click(function() {
        $(this).addClass('action');
        setTimeout(function(){
            $('.action').removeClass('action');
        },2000);
    }); 
});

function CopyToClipboard(value, showNotification, notificationText) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(value).select();
    document.execCommand("copy");
    $temp.remove();

    if (typeof showNotification === 'undefined') {
        showNotification = true;
    }
    if (typeof notificationText === 'undefined') {
        notificationText = "Copied to clipboard";
    }

    var notificationTag = $("div.copy-notification");
    if (showNotification && notificationTag.length == 0) {
        notificationTag = $("<div/>", {
            "class": "copy-notification",
            text: notificationText
        });
        $("body").append(notificationTag);

        notificationTag.fadeIn("slow", function() {
            setTimeout(function() {
                notificationTag.fadeOut("slow", function() {
                    notificationTag.remove();
                });
            }, 1000);
        });
    }
}