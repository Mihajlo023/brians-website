// Init FB SDK
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


$(document).ready(function () {
    // animate the carousel
    $('.carousel').carousel({
        interval: 3000
    });
});


// facebook login
$('#facebook-login-button').click(function() {
    loginWithFacebook();    
  });
  
  function loginWithFacebook() {
    FB.login(function(response) {
        if (response.authResponse) {
            // TODO remove console.log here
            console.log('Welcome!  Fetching your cognito information.... ');
            AWS.config.region = 'us-west-2'; // Region
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: COGNITO_IDENTITY_POOL_ID,             
                Logins: {
                'graph.facebook.com': response.authResponse.accessToken
                // add userpool later
                }              
            });         
            AWS.config.credentials.get(function(){
            console.log(AWS.config.credentials);
        });
         //, 'email', 'profile_pic' add this when app live
         FB.api('/me', {fields: ['first_name', 'last_name'] },  function(response) {
           console.log(response);
         });
        } else {
         console.log('User cancelled login or did not fully authorize.');
        }
    });    
  }