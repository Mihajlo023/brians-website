
$(function() {    
    const editPencilIconHtml = '<i class="fas fa-pencil-alt d-none"></i>';

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
        event.preventDefault();
        const parent = $(this).parents(".form-row");
        const firstName = $("#inputName").val();
        const lastName = $("#inputLastName").val();
        const displayedName = $(".profile-name");

        displayedName.html(firstName + " " + lastName).append(editPencilIconHtml);     
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

