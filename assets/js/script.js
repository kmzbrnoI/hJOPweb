$(function () {
    // add `target="_blank"` into all outer links.
    var host = document.location.host;
    $("a[href]").each(function() {
        var re = new RegExp(host, "g");
        if ($(this).attr("href").match(/\/\//) && !$(this).attr("href").match(re)) {
            $(this).attr("target", "_blank");
        }
    });

    // center and linkable all images.
    var $images = $("article img:not(.emoji, .eye-catch, .no-center)");
    $images.closest("p").css("text-align", "center");
    var $images = $("article img:not(.emoji, .eye-catch, .no-link)");
    $images.each(function () {
        var imgUrl = $(this).attr("src");
        var $a = $("<a><div class='img-wrap'>").attr("href", imgUrl).attr("target", "_blank");
        $(this).wrap($a);
    });

    // stick aside.
    $(".site-aside .sticky").sticky({
        topSpacing: 10
    });
});
