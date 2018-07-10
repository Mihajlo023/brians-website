function updateUserAttributes(attributeList) {
    if (window.location.hostname === "mygear.bike") {           
        // refreshAccessToken
        auth.getSession();

        var params = {
            AccessToken: currentUser.getAccessToken(),
            UserAttributes: attributeList
        }

        cognitoidentityserviceprovider.updateUserAttributes(params, function(err, data) {
            if (err) console.log(err);
            else {
                console.log(data);
                
                //console.log(data);
            }
        });
    }
}

// jQuery functions
$(function() {    
    const editPencilIconHtml = '<i class="fas fa-pencil-alt d-none"></i>';
    // set UserData
    $('.data-user-name-full').html(currentUser.getFullName()).append(editPencilIconHtml);
    $('#inputName').val(currentUser.getFirstName());
    $('#inputLastName').val(currentUser.getLastName());
    
    $('.data-user-email').html(currentUser.getEmail()).append(editPencilIconHtml);
    $('#inputEmail').val(currentUser.getEmail());
    console.log(currentUser.getEmail());
    


    $(".profile-item").click(function(event) {
        if(event.target.nodeName != "BUTTON") {
            const plainProfileText = $(this).find(".col-md-12");
            plainProfileText.addClass("d-none");   
             $(this).find("div.w-100").removeClass("d-none").addClass("d-flex");
        }
    });

    $("button.close").click(function(event) {
        const parent = $(this).parents(".form-row");
        parent.children().first().removeClass("d-flex").addClass("d-none");
        parent.children().eq(1).removeClass("d-none");
    });

    $(".profile-name-save").click(function(event){        
        const firstName = $("#inputName").val();
        const lastName = $("#inputLastName").val();

        var attributeList = [
            {
                Name : 'name',
                Value : firstName
            },
            {
                Name : 'family_name',
                Value : lastName
            }
        ];            

        updateUserAttributes(attributeList);
        
        event.preventDefault();
        const parent = $(this).parents(".form-row");
        const displayedName = $(".data-user-name-full");

        displayedName.html(firstName + " " + lastName).append(editPencilIconHtml);     
        parent.children().first().removeClass("d-flex").addClass("d-none");
        parent.children().eq(1).removeClass("d-none");
    });

    $(".profile-email-save").click(function(event){
        event.preventDefault();
        const parent = $(this).parents(".form-row");        
        const email = $("#inputEmail").val();

        var attributeList = [
            {
                Name : 'email',
                Value : email
            }
        ];  

        updateUserAttributes(attributeList);

        const displayedName = $(".data-user-email");

        displayedName.html(email).append(editPencilIconHtml);     
        parent.children().first().removeClass("d-flex").addClass("d-none");
        parent.children().eq(1).removeClass("d-none");
    });
    
    $(".profile-bday-save").click(function(event) {
        event.preventDefault();
        const parent = $(this).parents(".form-row");
        const birthday = $("#inputBirthday").val();
        const displayedBirthday = $(".profile-bday");
        displayedBirthday.html(birthday).append(editPencilIconHtml);
        parent.children().first().removeClass("d-flex").addClass("d-none");
        parent.children().eq(1).removeClass("d-none");
    });

    $(".profile-address-save").click(function(event) {
        event.preventDefault();
        const parent = $(this).parents(".form-row");
        const city = $("#inputCity").val();
        const postalCode = $("#inputPostalCode").val();
        const displayedAddress = $(".profile-address");

        displayedAddress.html(city + ", " + postalCode).append(editPencilIconHtml);
        parent.children().first().removeClass("d-flex").addClass("d-none");
        parent.children().eq(1).removeClass("d-none");
    });

    $(".profile-phone-save").click(function(event) {
        event.preventDefault();
        const parent = $(this).parents(".form-row");
        const phone = $("#inputPhone").val();
        const displayedPhone = $(".profile-phone");

        displayedPhone.html(phone).append(editPencilIconHtml);;
        parent.children().first().removeClass("d-flex").addClass("d-none");
        parent.children().eq(1).removeClass("d-none");
    });
    
});

