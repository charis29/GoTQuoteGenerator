$(document).ready(function () {

    $("#getQuote").on("click", function () {
        $.getJSON("https://got-quotes.herokuapp.com/quotes", function (json) {
            $("span#character").html(json.character);
            $("span#charQuote").html('"' + json.quote + '"');
            $('#tweet').attr("href", 'https://twitter.com/intent/tweet?hashtags=gameofthrones&via=dblj29&text="' + json.quote + '" ' + json.character);
        });
    });

});
