// script.js

function getFormValue() {
    var form = document.getElementById('myForm');
    
    // Get the values of the first and last name input fields
    var firstName = form.elements['firstName'].value;
    var lastName = form.elements['lastName'].value;
    
    // Display the first and last name using alert
    alert(firstName + " " + lastName);
	
}
