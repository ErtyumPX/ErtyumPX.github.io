console.log("Main Initialized")

window.fbAsyncInit = function() {
    FB.init({
      appId      : '335402648644925',
      xfbml      : true,
      version    : 'v14.0'
    });

    FB.getLoginStatus(function (response) {
        console.log(response);
    });


    FB.AppEvents.logPageView();


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

