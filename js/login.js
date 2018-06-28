// functions

var userPool = new AmazonCognitoIdentity.CognitoUserPool(COGNITO_POOL_DATA);

function validateUserData(callback) {

}

$("#register-form").submit(function(event) {
    alert("Clicked");
    event.preventDefault();    
});

function createUser() {
    console.log("hello");
    let attributeList = [];
    let dataFirstName = {
        Name : "name",
        Value : $("#first_name").val()
    };
    let dataLastName = {
        Name : "family_name",
        Value : $("#last_name").val()
    };
    let dataEmail = {
        Name :"email",
        Value : $("#email").val()
    };

    //TODO OPTIONAL TO DO LATER   
    let attributeFirstName = new AmazonCognitoIdentity.CognitoUserAttribute(dataFirstName);
    let attributeLastName = new AmazonCognitoIdentity.CognitoUserAttribute(dataLastName);
    let attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

    attributeList.push(attributeFirstName);
    attributeList.push(attributeLastName);
    attributeList.push(attributeEmail);

    userPool.signUp(dataEmail.Value, $("#password").val(), attributeList, null, function(err, result) {
        if (err) {
            alert(err);
            return;
        }
        cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());    
    });
};



// JQUERY
/*
$("#register").click(function() {
    validateUserData(createUser());
});
*/
/*
userPool.signUp('brianwthomas@gmail.com', '!Passw0rd', attributeList, null, function(err, result){
    if (err) {
        alert(err);
        return;
    }
    cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
});
*/