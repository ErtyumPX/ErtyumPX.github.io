console.log("Main Initialized")




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

