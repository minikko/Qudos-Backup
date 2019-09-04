/* Copyrights-Developed by Qudos Technologies INC. */
$('img').on('dragstart', function(event) { event.preventDefault(); });
$(window).scrollTop(0);
$('.header__icon').click(function(){
    console.log("as");
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
