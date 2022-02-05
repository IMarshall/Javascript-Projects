function formValidation() {
    let x = document.forms["phoneForm"]["phone"].value;
    if (x == "") {
        alert("Please include a valid phone number");
        return false;
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}