/* Copyrights-Developed by Qudos Technologies INC. */
var scroll = $(document).scrollTop();
$('img').on('dragstart', function(event) { event.preventDefault(); });
$(window).scrollTop(0);
// console.log(scroll);
var headerHeight = $('.header').outerHeight();

$('.header__icon').click(function(){
    // console.log("as");
  if($('.user1 ul').css('display')=='block'){
      console.log('click');
      $('#body').css('overflow-x','hidden');
      $('#body').css('overflow-y','scroll');
      $('.overlayMenu').css('display','none');
      $('.user1 ul').removeClass('showPopUp');

  }
  else {
      console.log('clicked');
      $('#body').css('overflow','hidden');
      $('.overlayMenu').css('display','block');
      $('.user1 ul').addClass('showPopUp');
  }
});
$('.overlayMenu').click(function () {
    $('#body').css('overflow-x','hidden');
    $('#body').css('overflow-y','scroll');
    $('.overlayMenu').css('display','none');
    $('.user1 ul').removeClass('showPopUp');
});
$('.user1 li a').click(function () {
    $('#body').css('overflow-x','hidden');
    $('#body').css('overflow-y','scroll');
    $('.overlayMenu').css('display','none');
    $('.user1 ul').removeClass('showPopUp');
});

if($(window).width()<601){
    $('.headerLogoImg').attr('src','img/SVG/header_white.svg')
}

$('.aboutUs').click(function () {
   $('html,body').animate({scrollTop:$('.carDiv').offset().top-150},{duration:2000})
});
$('.helpLink').click(function () {
   $('html,body').animate({scrollTop:$('.qFooter').offset().top},{duration:2000})
});

$(window).scroll(function() {
    var scrolled = $(document).scrollTop();
    // console.log(scrolled);

    if($(window).width()>680&&$(window).height()>480) {
        //  console.log(scrolled);
        if (scrolled > 5) {
            $('.menu').addClass('hideMenu');
            setTimeout(function () {
                if ($(document).scrollTop() > 175) {
                    $('.header').addClass('whiteHeader');
                    $('.header').removeClass('transparentHeader');
                    $('.menu1').addClass('showMenu');
                    // $('.menu1').addClass('showMenu1');
                    $('.headerLogoImg').attr('src', 'img/SVG/headerLogoDark.svg');
                    // $('.menu').removeClass('showMenu');
                }
            },400);
        } else {
            $('.headerLogoImg').attr('src', 'img/SVG/header_white.svg');
            $('.menu1').removeClass('showMenu');
            // $('.menu1').removeClass('showMenu1');
            // $('.menu').addClass('showMenu');
            // $('.menu').removeClass('hideMenu');
            $('.header').removeClass('whiteHeader');
            $('.header').addClass('transparentHeader');
        }
    }
    else {

        if (scrolled > 75) {
            $('.header').addClass('whiteHeader');
            $('.header').removeClass('transparentHeader');
            $('.headerLogoImg').attr('src', 'img/SVG/headerLogoDark.svg');
            $('#header__icon img').attr('src', 'img/SVG/menuDark.svg');
        }
        else {
            $('.header').removeClass('whiteHeader');
            $('.header').addClass('transparentHeader');
            $('#header__icon img').attr('src', 'img/SVG/menu.svg');
            $('.headerLogoImg').attr('src', 'img/SVG/header_white.svg');
        }
    }

});
