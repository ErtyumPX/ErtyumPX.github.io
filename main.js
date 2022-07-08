console.log("Main Initialized")
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});