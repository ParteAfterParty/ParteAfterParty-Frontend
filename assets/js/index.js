$(document).ready(function () {
    $('.show-hide').click(function () {
        $(this).next().toggleClass('toggle');
    });
});