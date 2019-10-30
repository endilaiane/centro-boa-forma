$(document).ready(function(){

    // MENU MOBILE
    $('.button-collapse').sideNav();
    // SCROLL SUAVE
    $('.scrollspy').scrollSpy({
        scrollOffset: 0
    });
    // CAROUSEL
    $('.carousel').carousel({
        fullWidth:true
    });
    // MODAL
    $('.modal').modal();
    // TABS
    $('ul.tabs').tabs();

    // SCROLL adaptativo
    $(window).on('scroll', function(){
       if ($(window).scrollTop() > 100){
           $(".navbar").addClass('nav-color');
       }else{
        $(".navbar").removeClass('nav-color');
       }
    });

    // ESCONDER MENU
    $('.hide-menu').click(function(){
        $('.button-collapse').sideNav('hide');
    });
    // AUTOPLAY
    function autoplay(){
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }
    autoplay();
});