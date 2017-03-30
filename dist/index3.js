$(function() {
    var $carouselItems = $('#carousel .item'); // 轮播图
    var carouselNum = $carouselItems.toArray().length; // 轮播长度
    var duration = 1000;
    var activeNum = 0; // 当前激活的轮播
    var timmer = null; //计时器
    $('#carousel .item').not(':first').hide();

    function carousel() {
        return setInterval(function() {
            console.log(activeNum);
            activeNum = activeNum >= carouselNum - 1 ? 0 : ++activeNum;
            $carouselItems.hide();
            $($carouselItems.get(activeNum)).show();

        }, duration);
    }

    timmer = carousel();


    // 鼠标划过 需要知道划过的第几个红点
    $('.navigation li').mouseenter(function() {
        var index = $('.navigation li').index($(this));
        console.log(index);
        $('#carousel .item').hide();
        $($('#carousel .item').get(index)).show();

        clearInterval(timmer);

    }).mouseleave(function() {
        timmer = carousel();
    });

    // 鼠标停留在轮播图上,轮播不转动,放下自动转动
    $('#carousel .item').mouseenter(function() {
        var index = $('#carousel .item').index($(this));
        activeNum = index;
        clearInterval(timmer);

    }).mouseleave(function() {
        timmer = carousel(activeNum);
    });

});