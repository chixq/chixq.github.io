var scrollTimer = null;

$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var viewportHeight = $(this).height(),
        scrollbarHeight = viewportHeight / $(document).height() * viewportHeight,
        progress = scrollTop / ($(document).height() - viewportHeight),
        distance = progress * (viewportHeight - scrollbarHeight) + scrollbarHeight / 2 - $('#indicator').height() / 2
        ;
    $('h3').each(function (i, e) {
        if (scrollTop > (e.offsetTop - viewportHeight/2)){
            $('#indicator').text(e.innerText);
        }
        if (scrollTop < $('h3')[0].offsetTop) {
            $('#indicator').text($('h1')[0].innerText);
        }
    });

    $('#indicator')
        .css('top', distance)
        .fadeIn(100)
    ;
    // Fade out the annotation after 1 second of no scrolling.
    if (scrollTimer !== null) {
        clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(function () {
        $('#indicator').fadeOut();
    }, 800);
});
