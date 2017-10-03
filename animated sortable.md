function moveUp(item) {
    var prev = item.prev();
    if (prev.length == 0) return;
    prev.css('z-index', 999).css('position', 'relative').animate({
        top: item.height()
    }, 250);
    item.css('z-index', 1000).css('position', 'relative').animate({
        top: '-' + prev.height()
    }, 300, function () {
        prev.css('z-index', '').css('top', '').css('position', '');
        item.css('z-index', '').css('top', '').css('position', '');
        item.insertBefore(prev);

        sendOrderToServer();
    });
}

function moveDown(item) {
    var next = item.next();
    if (next.length == 0) return;
    next.css('z-index', 999).css('position', 'relative').animate({
        top: '-' + item.height()
    }, 250);
    item.css('z-index', 1000).css('position', 'relative').animate({
        top: next.height()
    }, 300, function () {
        next.css('z-index', '').css('top', '').css('position', '');
        item.css('z-index', '').css('top', '').css('position', '');
        item.insertAfter(next);

        sendOrderToServer();
    });
}

function sendOrderToServer() {
    var items = $(".collection").sortable('toArray');
    var itemList = jQuery.grep(items, function (n, i) {
        return (n !== "" && n != null);
    });
    $("#items").html(itemList);
}


$(".collection").sortable({
    items: ".item"
});

$('button').click(function () {
    var btn = $(this);
    var val = btn.val();
    if (val == 'up') moveUp(btn.parents('.item'));
    else moveDown(btn.parents('.item'));
});
var orderList = jQuery.grep($(".collection").sortable('toArray'), function (n, i) {
    return (n !== "" && n != null);
});
$("#items").html(orderList);

<div class="collection">
    <div class="item" id="1">
        <div class="LeftFloat">Item1</div>
        <div class="RightFloat Commands">
            <button value='up'>Up</button>
            <button value='down'>Down</button>
        </div>
    </div>
    <div class="item" id="2">
        <div class="LeftFloat">Item2</div>
        <div class="RightFloat Commands">
            <button value='up'>Up</button>
            <button value='down'>Down</button>
        </div>
    </div>
    <div class="item" id="3">
        <div class="LeftFloat">Item3</div>
        <div class="RightFloat Commands">
            <button value='up'>Up</button>
            <button value='down'>Down</button>
        </div>
    </div>
    <div class="item" id="4">
        <div class="LeftFloat">Item4</div>
        <div class="RightFloat Commands">
            <button value='up'>Up</button>
            <button value='down'>Down</button>
        </div>
    </div>
    <div class="item" id="5">
        <div class="LeftFloat">Item5</div>
        <div class="RightFloat Commands">
            <button value='up'>Up</button>
            <button value='down'>Down</button>
        </div>
    </div>
</div>Output
<br/>
<div id="items"></div>

.LeftFloat {
    float: left
}
.RightFloat {
    float: right
}
.collection {
    border: 1px solid black;
    width: 400px;
    height: 300px;
    overflow-y: auto;
    font-family:tahoma;
}
