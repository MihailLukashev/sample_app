function updateCountdown() {

    var $countdown = $('.countdown');

    // 140 is the max message length
   // $('#micropost_content').val().maxLength = "140";
    var remaining = 140 - $('#micropost_content').val().length;

    $countdown.text(remaining + ' characters remaining');

    var color = 'grey';
    if (remaining < 21) { color = 'black'; }
    if (remaining < 11) { color = 'red'; }
    if (remaining <= 0) { alert("Limit"); }
    $countdown.css( { color: color} );
}

$(document).ready(function($) {
    updateCountdown();
    $micropost_content = $('#micropost_content');

    //$micropost_content.maxLength = "140";
    $micropost_content.change(updateCountdown);
    $micropost_content.keyup(updateCountdown);
    $micropost_content.keydown(updateCountdown);
});