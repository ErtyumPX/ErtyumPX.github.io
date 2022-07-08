console.log("Initialized")
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});