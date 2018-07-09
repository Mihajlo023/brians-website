function edit() {
    let editInput = event.target.parentNode.children[0];
    event.target.classList.add("d-none");
    editInput.classList.remove("d-none");
    editInput.classList.add("d-flex");
}

function updateProfile() {
    event.preventDefault();
    let profileDataTarget = event.target.parentNode.parentNode.parentNode.children[1];
    let firstNameValue = event.target.parentNode.parentNode.children[0].children[0].value;
    let lastNameValue = event.target.parentNode.parentNode.children[1].children[0].value;
    profileDataTarget.innerHTML = firstNameValue + " " + lastNameValue;

    event.target.parentNode.parentNode.parentNode.children[0].classList.add("d-none");
    event.target.parentNode.parentNode.parentNode.children[0].classList.remove("d-flex");
    event.target.parentNode.parentNode.parentNode.children[1].classList.remove("d-none");
}


