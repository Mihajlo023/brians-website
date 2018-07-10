
function edit() {
    let editInput = event.target.parentNode.children[0];
    event.target.classList.add("d-none");
    editInput.classList.remove("d-none");
    editInput.classList.add("d-flex");
}


$(function() {    
    $(".profile-name-save").click(function(event){
        event.preventDefault();
        const parent = $(this).parents(".form-row");
        const firstName = $("#inputName").val();
        const lastName = $("#inputLastName").val();
        const displayedName = $(".profile-name");

        displayedName.html(firstName + " " + lastName);      
        parent.children().first().removeClass("d-flex").addClass("d-none");
        parent.children().eq(1).removeClass("d-none");
        $(".desktop-form div.border-bottom:hover i").css("display: initial;");
    });

    $(".profile-bday-save").click(function(event) {
        event.preventDefault();
        const parent = $(this).parents(".form-row");
        const birthday = $("#inputBirthday").val();
        console.log(birthday);
    });
});

