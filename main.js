(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


console.log("Main Initialized")

window.fbAsyncInit = function() {
    FB.init({
      appId      : '335402648644925',
      xfbml      : true,
      version    : 'v14.0'
    });

    FB.AppEvents.logPageView();

    FB.getLoginStatus(function (response) {
        if (response.status == 'connected'){
            console.log(response.authResponse.userID);
        } 
    });




  };


document.getElementById('share-button').addEventListener('click', function () {
    FB.ui({
        method: 'share',
        href: "https://en.wikipedia.org/wiki/Main_Page"
    }, function (response) {
        if (!response) {
            console.log('User did not share the page.');
        }
        else {
            console.log('User shared the page!');
        }
    });
});

