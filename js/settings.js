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


$(window).on('load', function() {    
    const editPencilIconHtml = '<i class="fas fa-pencil-alt d-none"></i>';
    // set UserData
    console.log(currentUser);
    $('.data-user-name-full').html(currentUser.getFullName()).append(editPencilIconHtml);
    $('#inputName').val(currentUser.getFirstName());
    $('#inputLastName').val(currentUser.getLastName());
    
    $('.data-user-email').html(currentUser.getEmail()).append(editPencilIconHtml);
    $('#inputEmail').val(currentUser.getEmail());
    
    $('.data-user-birthdate').html(currentUser.getBirthdate()).append(editPencilIconHtml);
    $('#inputBirthdate').val(currentUser.getBirthdate());
    


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

        displayedName.html("<strong>" + firstName + " " + lastName + "</strong>").append(editPencilIconHtml);     
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
<<<<<<< HEAD
        const birthday = $("#inputBirthday").val();
        const displayedBirthday = $(".profile-bday");
        displayedBirthday.html("<strong>" + birthday + "</strong>").append(editPencilIconHtml);
=======
        const birthdate = $("#inputBirthdate").val();

        var attributeList = [
            {
                Name : 'birthdate',
                Value : birthdate
            }
        ];  

        updateUserAttributes(attributeList);

        const displayedBirthdate = $(".data-user-birthdate");
        displayedBirthdate.html(birthdate).append(editPencilIconHtml);
>>>>>>> f76e2c6ac8f51b1bad12dd470dbe58e85c838271
        parent.children().first().removeClass("d-flex").addClass("d-none");
        parent.children().eq(1).removeClass("d-none");
        console.log(birthdate);
    });

    $(".profile-address-save").click(function(event) {
        event.preventDefault();
        const parent = $(this).parents(".form-row");
        const city = $("#inputCity").val();
        const postalCode = $("#inputPostalCode").val();
        const displayedAddress = $(".profile-address");

        displayedAddress.html("<strong>" + city + ", " + postalCode + "</strong>").append(editPencilIconHtml);
        parent.children().first().removeClass("d-flex").addClass("d-none");
        parent.children().eq(1).removeClass("d-none");
    });

    $(".profile-phone-save").click(function(event) {
        event.preventDefault();
        const parent = $(this).parents(".form-row");
        const phone = $("#inputPhone").val();
        const displayedPhone = $(".profile-phone");

        displayedPhone.html("<strong>" + phone + "</strong>").append(editPencilIconHtml);;
        parent.children().first().removeClass("d-flex").addClass("d-none");
        parent.children().eq(1).removeClass("d-none");
    });
    
});

