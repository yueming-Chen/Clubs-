$('ui-view').hide(500).show(300);
var ClubDetail =[
	{
		name :'StudentAssociation',
		introduce:'A students\' union, student government, free student union, student senate, students\' association, guild of students or government of student body is a student organization present in many colleges, universities, and high schools. In higher education, the students\' union is often accorded its own building on the campus, dedicated to social, organizational activities, representation and academic support of the membership.',
		Datetime:'Tues ,7:00AM',
		Contact:'Mr.Zack +64 987-654-321',
		Location:'Chung-Chang Hall 3-A',
		joiinfee:'free',
		imgUrl:'img/StudentAssociation.png'
	},
	{
		name :'StudentParliament',
		introduce:'The Student Parliament is the highest level of student representatives at the University of Oslo. We aim to improve the academic and social life for the students at the University. The Students\' House, Villa Eika, is open every day between 8 a.m. and 4 p.m. If you have any questions or just want to read the latest news, you are more than welcome!',
		imgUrl:'img/StudentParliament.png'
	},
	{
		name :'Schooldiscipline',
		introduce:'An obedient student is in compliance with the school rules and codes of conduct. These rules may, for example, define the expected standards of clothing, timekeeping, social conduct, and work ethic. The term discipline is also applied to the punishment that is the consequence of breaking the rules. The aim of discipline is to set limits restricting certain behaviors or attitudes that are seen as harmful or going against school policies, educational norms, school traditions, et cetera.',
		imgUrl:'img/Schooldiscipline.png'
	},
	{
		name :'Baseketballclub',
		introduce:'Basketball Club provides elite training and coaching for girls and boys participating on our Amateur Athletic Union teams and for all individual players. EBC\'s top level training offers specialized skill development in all areas of the game by experienced trainers and coaches. In addition to our on court development programs, EBC puts an emphasis on the discipline of having a healthy body, mind and spirit.',
		imgUrl:'img/Baseketballclub.png'
	},
	{
		name :'Baseballclub',
		introduce:'Baseball Australia (BA) is the governing body for all levels of baseball throughout the country.  Primarily responsible for the development of the sport; administration, conduct, participation, high performance and promotion, BA works with seven (7) State and Territory associations and 600+ clubs across the country.  BA also acts as the international liaison and represents Australian Baseball at all International forums.  They are a major stakeholder in the Australian Baseball League (ABL); the national league delivered in partnership with Major League Baseball (MLB).  The Southern Thunder and the Emeralds are the mens and women\'s National senior representative teams for Baseball Australia, both competing in the biennial IBAF World Cup and the men in the triennial World Baseball Classic.',
		imgUrl:'img/Baseballclub.png'
	},
	{
		name :'Footballclub',
		introduce:'A football team is the collective name given to a group of players selected together in the various team sports known as football.Such teams could be selected to play in a match against an opposing team, to represent a football club, group, state or nation, an All-star team or even selected as a hypothetical team (such as a Dream Team or Team of the Century) and never play an actual match.',
		imgUrl:'img/Footballclub.png'
	},
	{
		name :'Orchestraclub',
		introduce:'Performances by the TTSO are much in demand at home and in the most prestigious music capitals of the world. Led by renowned Taiwaness conductor ling-chung Tsheng as its tenth music director, the TTSO is working to fulfill his vision for the Orchestra to deepen its engagement with the Taipei community, to nurture the legacy of the TTSO while supporting a new generation of musicians, and to collaborate with visionary artists.',
		imgUrl:'img/Orchestraclub.png'
	},
	{
		name :'Pianoclub',
		introduce:'The Piano Club is a community of small businesses and individuals who benefit from working with other like minded folk. Hire a desk per month, or a pod of desks, to be part of the club and benefit from a professional, fun environment to further your ambitions.',
		imgUrl:'img/Pianoclub.png'
	},
	{
		name :'ChineseOrchestraclub',
		introduce:'To strengthen its service and foster better interaction with all lovers of traditional Chinese music, the TCO has established the TCO Club.In the past three decades, the TCO has grown in leaps and bounds as measured by these indicators: programs expansion, audience attendance, ticket sales, and sponsorships, signifying that the greater Taipei community of which the TCO is a part has moved forward together with us along its development path.If you want to share with others our mission and our vision, come join the TCO Club and inject your great energy into this big TCO family. Together let’s scale new heights in developing Taiwan’s traditional Chinese music and in creating a fertile ground for the musical arts.Various levels of membership are available to suit your level of interest and participation. Please get in touch with us for more details',
		imgUrl:'img/ChineseOrchestraclub.png'
	}
];

setTimeout(
  function() 
  {
  	//var ClubName = 'StudentAssociation';
    var ClubName = $('#clubTitle').text();
    for(var key in ClubDetail){
    	if(ClubDetail[key].name == ClubName){
    		console.log(ClubDetail[key].name + "done");
	    	$("#DetailImg").attr("src",ClubDetail[key].imgUrl);
	    	$("#DetailTime").text('club & societies : ' + ClubDetail[key].Datetime);
	    	$('#DetailContact').text('Contact Us : '+ClubDetail[key].Contact);
	    	$('#DetailLocation').text('Location : '+ClubDetail[key].Location);
	    	$('#Detailjoiinfee').text('Join fee : '+ClubDetail[key].joiinfee);
			$('#DetailDiscription').text(ClubDetail[key].introduce);	
    	}
    }
  }, 500);



