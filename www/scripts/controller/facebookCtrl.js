  window.fbAsyncInit = function() {
    FB.init({
      appId      : '697357817058462',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/zh_TW/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


  //*share
  var share = function(){
        FB.ui({
      method: 'feed',
      link: 'http://www.cc.ntut.edu.tw/~t102590019/mid/',
      caption: 'An example caption',
    }, function(response){});
  };

  var cclick = function(){
      $.ajax({
        url:'/view/introduce.html',
        success:function(e){
          console.log("success " + e);
          $("section").html(e);
        }
      });
  }