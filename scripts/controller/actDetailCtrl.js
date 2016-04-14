$('ui-view').hide(500).show(300);
var ActDetail=[
	{
		Name:'StudentParty',
		DateTime:'9,Dec,15 - 9:00PM',
		Location:'Chung-Chang Hall',
		introduce:'Come on!Anda play with us!You don\'t have any reason to miss our celebration.',
		imgUrl:'img/StudentParty.png'
	},
  {
    Name:'Djinthenight',
    DateTime:'8,Otc,15',
    Location:'Chung-Chang Hall',
    introduce:'Did you ever seen the great mixtrix in your life?Sure,in here,you gonna choose a best choice to make a surprise in your life change!Don\'t miss any time in our Party,We introduce the top 50 Dj fuckboy here.don\'t be cry and come with us!',
    imgUrl:'img/Djinthenight.png'
  }
];
/*
{
    Name:'',
    DateTime:'',
    Location:'Chung-Chang Hall',
    introduce:'',
    imgUrl:'img/.png'
  }
*/
setTimeout(
  function() 
  {
  	console.log('done');
    var ActName = $('#actTitle').text();
    for(var key in ActDetail){
    	if(ActDetail[key].Name == ActName){
    		$("#actDate").text('Date:' + ActDetail[key].DateTime);
    		$("#actLocation").text('Location:' + ActDetail[key].Location);
			$("#DetailImg").attr("src",ActDetail[key].imgUrl);
			$('#DetailDiscription').text(ActDetail[key].introduce);
    	}
    }
  }, 500);
