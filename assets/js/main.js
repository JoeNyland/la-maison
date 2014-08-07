/**
 * Project: la-maison.github.io
 */

$(document).ready(function () {
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    });

    /* Add the current year to the footer */
    function getYear() {
        var d = new Date();
        var n = d.getFullYear();
        return n.toString();
    }

    $('#year').html(getYear());

});
