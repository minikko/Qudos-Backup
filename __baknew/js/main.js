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

	/*==============================
	Superior slider
	==============================*/
	$('.rating__slider .owl-carousel').owlCarousel({
		mouseDrag: false,
		dots: true,
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 2000,
	});
	$('.rating__btn').on('click', function() {
		$('.rating__slider .owl-carousel').trigger('next.owl.carousel');
	});

});
