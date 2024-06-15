// script.js

function getFormValue() {
    var form = document.getElementById('myForm');
    
    // Get the values of the first and last name input fields
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    
    // Display the first and last name using alert
    alert(firstName + " " + lastName);
	
}
