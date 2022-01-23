function petsCheck() {
    let pets = document.getElementsByName("fav_animal");
    let atLeastOne = false;

    for (a = 0; a < pets.length; a++) {
        if (pets[a].checked == true) {
            atLeastOne = true;
        }
    }

    if (atLeastOne == false) {
        alert("Please pick a favorite pet.")
        return false;
    }
}


function validateForm() {  

    if (petsCheck() == false) {
        return false;
    }
}