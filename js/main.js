$(document).ready(function() {

    $('.mts2-section-advantage__card').click(function(){
        console.log('hello');
        $(this).toggleClass('active-advantage');
        $(this).find('.mts2-section-advantage__card-mobile').slideToggle();
    });
});