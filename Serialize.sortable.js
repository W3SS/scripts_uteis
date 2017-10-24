$(function () {
    $("#sortable").sortable({
        update: function (event, ui) {
            var order = $(this).sortable('serialize');

            $(document).on("click", "button", function () { //that doesn't work
                $.ajax({
                    data: order,
                    type: 'POST',
                    url: 'saverank.php'
                });
            });
        }
    }).disableSelection();
    $('button').on('click', function () {
        var r = $("#sortable").sortable("toArray");
        var a = $("#sortable").sortable("serialize", {
            attribute: "id"
        });
        console.log(r, a);
    });
});


//
So here's how I would serialize this, into an object with two members, src_arr and caption_arr:

var getPaths = function() {
    var imgPaths = { 'src_arr': [], 'caption_arr': []};
    $('.gallery img').each(function(){
        imgPaths.src_arr.push($(this).attr('src'));
        imgPaths.caption_arr.push($(this).attr('alt'));
    });
    return imgPaths;
};
So I'd do this with your code:

$.ajax({
    url: "sort.php",
    type: "POST",
    dataType: 'html',
    data: getPaths(),
    success: function(data, textStatus, XMLHttpRequest) {
        // you need to do something in here
        $('#debug').html('<pre>' + data + '</pre>');
    },
    error: function() {
        alert("theres an error with AJAX");
    }
});
The raw data as print_r() out of sort.php looks like:

Array
(
    [src] => Array
        (
            [0] => tn/001.jpg
            [1] => tn/002.jpg
        )

    [caption] => Array
        (
            [0] => first caption
            [1] => second caption with Ã©Ã¨Ã§Ã  international chars
        )

)
