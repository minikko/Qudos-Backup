$(document).ready(function () {
	"use strict";

	/*==============================
	Header
	==============================*/
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 0){
			$('.header').addClass("header--active");
		} else {
			$('.header').removeClass("header--active");
		}
	});

	$('.header__menu').on('click', function() {
		$(this).toggleClass('header__menu--active');
		$('.header__nav').toggleClass('header__nav--active');
	});


	AOS.init();

	new WOW().init();

	var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #b3b4b4}";
        document.body.appendChild(css);
    };

    	animateRight();
		animateRight2();
		animateRight3();


		function animateRight() {
		  $("#i1").animate({
		        'marginLeft' : "+=20px" //moves left
		    }, 1000, 'swing', animateLeft);
		   
		}

		function animateLeft() {
		    $("#i1").animate({
		        'marginLeft' : "-=20px" //moves right
		    }, 1000, 'swing', animateRight);


		}

		function animateRight2() {
		    $("#i2").animate({
		        'marginLeft' : "+=50px" //moves left
		    }, 2000, 'swing', animateLeft2);
		   
		}

		function animateLeft2() {
		    $("#i2").animate({
		        'marginLeft' : "-=50px" //moves right
		    }, 2000, 'swing', animateRight2);


		}
		function animateRight3() {
		    $("#i3").animate({
		        'marginLeft' : "+=75px" //moves left
		    }, 1500, 'swing', animateLeft3);
		   
		}

		function animateLeft3() {
		    $("#i3").animate({
		        'marginLeft' : "-=75px" //moves right
		    }, 1500, 'swing', animateRight3);


		}

});



			


