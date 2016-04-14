$(document).ready(function() {
    $('.ui-view').load("view/clubs.html");
});
var Href = function(name){
	$('.ui-view').hide(1);
    $('.ui-view').load("view/" + name.id + ".html").show(100);
}








