$('ui-view').hide(500).show(300);
var ActDetail=[
	{
		Name:'StudentParty',
    displayName:'Student Party',
		DateTime:'9,Dec,15 - 9:00PM',
		Location:'Chung-Chang Hall',
		introduce:'Come on!Anda play with us!You don\'t have any reason to miss our celebration.',
		imgUrl:'img/StudentParty.png'
	},
  {
    Name:'Djinthenight',
    displayName:'Dj in the night',
    DateTime:'8,Otc,15 - 9:00PM',
    Location:'Chung-Chang Hall',
    introduce:'Did you ever seen the great mixtrix in your life?Sure,in here,you gonna choose a best choice to make a surprise in your life change!Don\'t miss any time in our Party,We introduce the top 50 Dj fuckboy here.don\'t be cry and come with us!',
    imgUrl:'img/Djinthenight.png'
  },{
    Name:'SuckParty',
    displayName:'Suck Party',
    DateTime:'8,Otc,15 - 9:00PM',
    Location:'Chung-Chang Hall',
    introduce:'The introduction of a wedding party is very important because it sets the stage for the reception. Make sure that everything is coordinated well ahead of time.Anda wts SUCKs?Come on And we gonna give you a big gift your your first mature.',
    imgUrl:'img/suckparty.png'
  },{
    Name:'Shameonyoucomeon',
    displayName:'Shame on you come on',
    DateTime:'12,Mar,16 - 9:00PM',
    Location:'Chung-Chang Hall',
    introduce:'Being asked to MC a wedding is an honor, but this role also requires plenty of attention to detail to ensure the reception runs without any hiccups. Although you\'ll present the speakers later in the evening and might even offer a toast yourself, one of your initial duties once the reception is underway is to officially introduce not just the bride and groom but also the wedding party.',
    imgUrl:'img/Shameonyoucomeon.png'
  },{
    Name:'Mortallity',
    displayName:'\"Mortallity\" Taipei Tech Orchestra',
    DateTime:'11,May,16 - 9:00PM',
    Location:'Chung-Chang Hall',
    introduce:'Music of the nineteenth century forms the very heart of the standard orchestral repertory, and this is the music that kicks off the NSO’s new season. Three of the most famous and beloved composers of the century are represented. First off is the overture to Rossini’s last opera, William Tell (1829), an epic work with a grand overture to match, one equal in length and scope to many symphonic movements. Just two years after William Tell was premiered, Mendelssohn played the solo part in the premiere of his own First Piano Concerto, music of gentle elegance, fluid lyricism and dashing brilliance. The NSO audience will hear Taiwan’s foremost young pianist of international reputation, Chun-Chieh Yen, who at thirteen made history as the youngest to give a recital at the National Concert Hall. The program concludes with one of the pillars of the symphonic repertory, Brahms’s Second – “bathed in a mellow glow of instrumental sound” is just one of the many glowing tributes listeners have bestowed on this masterpiece.',
    imgUrl:'img/Mortallity.png'
  }
];
/*
{
    Name:'',
    displayName:'',
    DateTime:'',
    Location:'Chung-Chang Hall',
    introduce:'',
    imgUrl:'img/.png'
  }
*/
setTimeout(
  function() 
  {
    var ActName = $('#actTitle').text();
    for(var key in ActDetail){
    	if(ActDetail[key].Name == ActName){
        $("#DetailImg").attr("src",ActDetail[key].imgUrl);
    		$("#actDate").text('Date:' + ActDetail[key].DateTime);
    		$("#actLocation").text('Location:' + ActDetail[key].Location);
  			$('#DetailDiscription').text(ActDetail[key].introduce);
    	}
    }
  }, 500);
