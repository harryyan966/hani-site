$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() != 0) {
            $('#navbar').addClass('scrolled');
        }
        else {
            $('#navbar').removeClass('scrolled');
        }
    }
    )
})