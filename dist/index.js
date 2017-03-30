$('.moon_3 .moon_3_1 img').mouseenter(function() {
    var src = $(this).attr('src');

    $(this).css('opacity', 0.5);
    $('.moon_3 .moon_3_1 img').not($(this)).css('opacity', 1);

    $('.moon_2 img').attr('src', src);
})