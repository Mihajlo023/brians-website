AWS.config.update({region: 'us-west-2'});
var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

function AppUser() {
    this._firstName = "";    
    this.getFirstName = function() { return this._firstName };
    this.setFirstName = function(name) { this._firstName = name; };

    this._lastName = "";    
    this.getLastName = function() { return this._lastName };
    this.setLastName = function(name) { this._lastName = name; };
    
    this.getFullName = function() { return `${this._firstName} ${this._lastName}` };

    this._email = "";    
    this.getEmail = function() { return this._email };
    this.setEmail = function(email) { this._email = email; };

    this._birthdate = "";    
    this.getBirthdate = function() { return this._birthdate };
    this.setBirthdate = function(birthdate) { this._birthdate = birthdate; };

    this._accessToken = "";
    this.getAccessToken = function() { return this._accessToken };
    this.setAccessToken = function(accessToken) { this._accessToken = accessToken; };
}

var currentUser = new AppUser();

const CLIENT_ID = '1rk639l7gs6uhkmv05lg2g16ue';
const USER_POOL_ID = 'us-west-2_AVgJdWIlj';

function setUserInfo(cognitoUser) {
    let tempAttributes = {};
    cognitoUser.UserAttributes.forEach(function(attribute) {
        tempAttributes[attribute.Name] = attribute.Value;
    });
    currentUser.setFirstName(tempAttributes.name);
    currentUser.setLastName(tempAttributes.family_name);
    currentUser.setEmail(tempAttributes.email);    
    currentUser.setBirthdate(tempAttributes.birthdate);    
}


function initCognitoSDK() {
    var authData = {
        ClientId : CLIENT_ID,
        AppWebDomain : 'login.mygear.bike', 
        TokenScopesArray : ['email', 'openid', 'aws.cognito.sign.user.admin', 'profile'],
        RedirectUriSignIn : 'https://mygear.bike/login',
        RedirectUriSignOut : 'https://mygear.bike/login',
        IdentityProvider : ['COGNITO', 'Facebook'], 
        UserPoolId : USER_POOL_ID, 
        AdvancedSecurityDataCollectionFlag : false,
        Storage: new AmazonCognitoIdentity.CookieStorage({domain: ".mygear.bike"})
    };
    var auth = new AmazonCognitoIdentity.CognitoAuth(authData);    
    auth.userhandler = {
        onSuccess: function(result) { 
            //window.location.replace("https://mygear.bike/");                        
            currentUser.setAccessToken(result.accessToken.getJwtToken());
            cognitoidentityserviceprovider.getUser({AccessToken: currentUser.getAccessToken()}, function(err, data) {
                if (err) console.log(err);
                else {
                    setUserInfo(data);                    
                    //console.log(data);
                }
            });            
        },
        onFailure: function(err) {
            alert("Error signing in.\nError Message: " + err);
            console.log(err);
        }        
    };    
    //auth.useCodeGrantFlow();
    return auth;
}

// Initialize the Auth Object

var auth = initCognitoSDK();
if (window.location.hostname === "mygear.bike")
    auth.getSession();



// Capture code query string
// make auth request, redirect if success, else return error.

