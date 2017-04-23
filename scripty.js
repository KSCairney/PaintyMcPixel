var creation = function(number) {
    var div = document.createElement("div");
    div.innerHTML = "";
    div.setAttribute("class", "blank");
    document.body.appendChild(div);
}

var lines = function(number) {
    for (var k = 1; k < 25; k++) {
        creation(k);
    }
}


for (var r = 1; r < 25; r++) {
    lines(r);
    var br = document.createElement("br");
    document.body.appendChild(br);
}

$(document).ready(function(){
                $('.blank').mouseover(function() {
                    $(this).addClass("white").removeClass("blank");
                 });
            });