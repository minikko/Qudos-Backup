$(document).ready(function() {
    "use strict";
    /*==============================
    Header
    ==============================*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 0) {
            $('.header').addClass("header--active");
        } else {
            $('.header').removeClass("header--active");
        }
    });

    $('.header__menu').on('click', function() {
        $(this).toggleClass('header__menu--active');
        $('.header__nav').toggleClass('header__nav--active');
    });
});

function collapse(e) {
    var h2 = document.getElementsByClassName("card-header");
    for (var i = 0; i < h2.length; i++) {
        h2[i].style.borderColor = "#fff";
    }
    var a = document.getElementsByClassName("fa-angle-down");
    for (var i = 0; i < a.length; i++) {
        a[i].classList.add("fa-angle-right");
        a[i].classList.remove("fa-angle-down");
    }
    var h = e.querySelectorAll(".card-header");
    var x = e.querySelectorAll(".fas");
    var c = e.querySelectorAll(".collapse");
    if (c[0].classList.contains("show")) {
        x[0].classList.remove("fa-angle-down");
        x[0].classList.add("fa-angle-right");
        h[0].style.borderColor = "#fff";
    } else {
        h[0].style.borderColor = "rgba(0,0,0,.1)";
        x[0].classList.remove("fa-angle-right");
        x[0].classList.add("fa-angle-down");
    }
}

function collapseddd(e) {

    var x = e.querySelectorAll(".fas");

    var c = e.querySelectorAll(".collapse");
    if (c.classList.contains("show")) {
        x[0].classList.remove("fa-angle-right");
        x[0].classList.add("fa-angle-down");
    } else {

    }

    if (e.classList.contains("card-header") && e.classList.contains("collapsed")) {

        //e.style.borderColor = "rgba(0,0,0,.1)";
    } else {
        e.style.borderColor = "#fff";
        x[0].classList.remove("fa-angle-down");
        x[0].classList.add("fa-angle-right");

    }
}

function GetElementInsideContainer(containerID, childID) {
    var elm = document.getElementById(childID);
    var parent = elm ? elm.parentNode : {};
    return (parent.id && parent.id === containerID) ? elm : {};
}


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
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
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