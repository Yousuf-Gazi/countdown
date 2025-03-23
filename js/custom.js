$("#countdown")
.countdown("2025/06/01", function(event) {

    $('#days').text(
        event.strftime('%D')
    );

    $('#hours').text(
        event.strftime('%H')
    );

    $('#minutes').text(
        event.strftime('%M')
    );

    $('#seconds').text(
        event.strftime('%S')
    );

});
