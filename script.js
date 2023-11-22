// script.js

function getFormValue() {
    var firstName = document.getElementById("firstName").value;
    var middleName = document.getElementById("middleName").value;
	var lastName = document.getElementById("lastName").value;

    var resultMessage =firstName +" " + middleName+" "+lastName;

    alert(resultMessage);
}
