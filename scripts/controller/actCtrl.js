$('.list').click(function(){
	if($(this).hasClass('select')){
		$(this).children().fadeToggle('slow');
		$(this).removeClass('select');
	}else{
		$(this).children().fadeToggle('slow');
		$(this).addClass('select');
	}
});

var toDetail = function(name){
	$('.ui-view').hide(1);
    $('.ui-view').load("view/actDetail.html",function(response,status,xhr){
    	$('#actTitle').text(name);
    }).show(500);
}
