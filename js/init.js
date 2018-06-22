// Setup constants/enums
var Providers = Object.freeze({"Facebook":"Facebook", "Email":"Email", "None":"None"});
const COGNITO_IDENTITY_POOL_ID = "us-west-2:5c65b8e6-5e08-4e84-839f-76c157848d7b";

// User Object
var User = {
    Profile: {
        firstName: undefined,    
        lastName: undefined,        
        age: undefined,
        weight: undefined,
        Location: {
            city: undefined,
            state: undefined,
            zip: undefined
        },
        phone: undefined,
        profilePictureURL: undefined
    },
    OAuthState: {
        provider: undefined,
        token: undefined,
        isLoggedIn: false        
    },
    AWS : {
        cognitoId: undefined,
        credentials: undefined
    }
}

// initalize the FB SDK
window.fbAsyncInit = function() {
    FB.init({
        appId      : '172346763613383',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.7'
    });      
    FB.AppEvents.logPageView(); 
};

