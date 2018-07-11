function initCognitoSDK() {
    var authData = {
        ClientId : '1rk639l7gs6uhkmv05lg2g16ue',
        AppWebDomain : 'login.mygear.bike', 
        TokenScopesArray : ['email', 'openid', 'aws.cognito.sign.user.admin', 'profile'],
        RedirectUriSignIn : 'https://mygear.bike/login_redirect.html',
        RedirectUriSignOut : 'https://mygear.bike/login',
        IdentityProvider : ['COGNITO', 'Facebook'], 
        UserPoolId : 'us-west-2_AVgJdWIlj', 
        AdvancedSecurityDataCollectionFlag : false,
        Storage: new AmazonCognitoIdentity.CookieStorage({domain: ".mygear.bike"})
    };
    var auth = new AmazonCognitoIdentity.CognitoAuth(authData);    
    auth.userhandler = {
        onSuccess: function(result) { 
            window.location.replace("https://mygear.bike/");
        },
        onFailure: function(err) {
            alert("Error signing in.\nError Message: " + err);
            console.log(err);
        }        
    };    
    auth.useCodeGrantFlow();
    return auth;
}

// Initialize the Auth Object
var auth = initCognitoSDK();

// Capture code query string
var curUrl = window.location.href;

// make auth request, redirect if success, else return error.
auth.parseCognitoWebResponse(curUrl);