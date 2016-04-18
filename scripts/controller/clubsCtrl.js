$('#Welcome').mouseenter(function(){
    	console.log('mouseenter');
    	$(this).fadeOut(200).fadeIn(1000);
    });
    $('#Welcome').click(function(){
    	console.log('click');
    	$('.ui-view').load("view/introduce.html").show(100);
    });