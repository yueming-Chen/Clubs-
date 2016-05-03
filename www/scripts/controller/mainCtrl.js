$(document).ready(function() {
    $('.ui-view').load("view/clubs.html");

});

var Href = function(name){
    $('.ui-view').load("view/" + name.id + ".html").show(100);
}








