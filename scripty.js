var t = prompt("How tall of a drawing board would you like? (1-100)");
if (isNaN(t)=== true) {
     alert("This is an invalid dimension, please reload the page a try again.");
}
else {
}
var w = prompt("How wide of a drawing board would you like? (1-100)");
if (isNaN(w) === true){
    alert("This is an invalid dimension, please reload the page a try again.");
}
else {
    alert("Generating Drawing Board");
}



/*var details = prompt("How detailed would you like the board? (1-5)")
    if (1)*/

var creation = function(number) {
    var div = document.createElement("div");
    /*div.innerHTML = "";*/
    div.setAttribute("class", "blank");
    document.body.appendChild(div);
}

var lines = function(number) {
    for (var k = 1; k <= w; k++) {
        creation(k);
    }
}

var stagetwo = function() {
    for (var r = 1; r <= t; r++) {
        lines(r);
        var br = document.createElement("br");
        document.body.appendChild(br);
    }
}

stagetwo();

$(document).ready(function(){
    $('.blank').mouseover(function() {
        $(this).addClass("pen").removeClass("blank");
    });
    $('.bttn').click(function() {
        $(".pen").addClass("blank").removeClass("pen");
        $(".blank").css("background-color", "#199e83");
    });
    $('#redd').click(function() {
        $('div').mouseover(function(){
            $(this).css("background-color", "#ff0000");
        });
    });
    $('#oranged').click(function() {
        $('div').mouseover(function(){
            $(this).css("background-color", "#f99100");
        });
    });
    $('#yellowd').click(function() {
        /*$(".pen").css("background-color", "#f9f500");*/
        $('div').mouseover(function(){
            $(this).css("background-color", "#f9f500");
        });
    });
    $('#greend').click(function() {
        $('div').mouseover(function(){
            $(this).css("background-color", "#00cc00");
        });
    });
    $('#teald').click(function() {
        $('div').mouseover(function(){
            $(this).css("background-color", "#199e83");
        });
    });
    $('#blued').click(function() {
        $('div').mouseover(function(){
            $(this).css("background-color", "#001bce");
        });
    });
    $('#purpled').click(function() {
        $('div').mouseover(function(){
            $(this).css("background-color", "#7f07f7");
        });
    });
    $('#pinkd').click(function() {
        $('div').mouseover(function(){
            $(this).css("background-color", "#ff75fa");
        });
    });
    $('#blackd').click(function() {
        $('div').mouseover(function(){
            $(this).css("background-color", "#000000");
        });
    });
    $('#greyd').click(function() {
        $('div').mouseover(function(){
            $(this).css("background-color", "#939393");
        });
    });
    $('#whited').click(function() {
        $('div').mouseover(function(){
            $(this).css("background-color", "#ffffff");
        });
    });
    $('#brownd').click(function() {
        $('div').mouseover(function(){
            $(this).css("background-color", "#593b26");
        });
    });
    /*background changes */
    $('#redb').click(function() {
        $(".blank").css("background-color", "#ff0000");
    });
    $('#orangeb').click(function() {
        $(".blank").css("background-color", "#f99100");
    });
    $('#yellowb').click(function() {
        $(".blank").css("background-color", "#f9f500");
    });
    $('#greenb').click(function() {
        $(".blank").css("background-color", "#00cc00");
    });
    $('#tealb').click(function() {
        $(".blank").css("background-color", "#199e83");
    });
    $('#blueb').click(function() {
        $(".blank").css("background-color", "#001bce");
    });
    $('#purpleb').click(function() {
        $(".blank").css("background-color", "#7f07f7");
    });
    $('#pinkb').click(function() {
        $(".blank").css("background-color", "#ff75fa");
    });
    $('#blackb').click(function() {
        $(".blank").css("background-color", "#000000");
    });
    $('#greyb').click(function() {
        $(".blank").css("background-color", "#939393");
    });
    $('#whiteb').click(function() {
        $(".blank").css("background-color", "#ffffff");
    });
    $('#brownb').click(function() {
        $(".blank").css("background-color", "#593b26");
    });
});