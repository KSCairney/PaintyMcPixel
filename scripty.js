var creation = function(number) {
    var div = document.createElement("div");
    div.innerHTML = "";
    document.body.appendChild(div);
}

var lines = function(number) {
    for (var k = 1; k < 17; k++) {
        creation(k);
    }
}

var shell = function(number) {
    var newLine = document.createElement("div");
    newLine.setAttribute("class", "NewLine");
    document.body.appendChild(newLine);
    /*newLine.innerHTML = "<a href='javascript:lines();></a>";*/
    var br = document.createElement("br");
    document.body.appendChild(br);
}

for (var s = 1; s < 17; s++) {
    shell(s);
}

/*
for (var r = 1; r < 17; r++) {
    var br = document.createElement("br");
    document.body.appendChild(br);
    lines(r);
}
*/