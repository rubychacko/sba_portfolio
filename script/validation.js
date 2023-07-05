function validate() {
    if (document.myForm.firstname.value == "") {
        alert("Please provide your name!");
        document.myForm.firstname.focus();
        return false;
    } else {
        let NAME = document.getElementById("fname").value;
    }
    if (document.myForm.lastname.value == "") {
        alert("Please provide your name!");
        document.myForm.lastname.focus();
        return false;
    } else {
        let LNAME = document.getElementById("lname").value;
    }
    if (document.myForm.email.value == "") {
        alert("Please provide your Email!");
        document.myForm.email.focus();
        return false;
    }
    // if (document.myForm.email.value != "") {
    //     if (validateEmail()) {
    //         let emailValue = document.getElementById("email").value;
    //     }
    // }

    if (document.myForm.country.value == "-1") {
        alert("Please provide your country!");
        return false;
    } else {
        let CountryId = document.getElementById("country").value;
        alert("Saved the enquiry. Thank you, " + NAME);
    }
    return (true);
}

function validateEmail() {
    let emailID = document.myForm.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID");
        document.myForm.email.focus();
        return false;
    } else {
        return true;
    }
    return (true)
}
