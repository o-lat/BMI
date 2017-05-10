// BMI JS File

function getBMI() {
    var weight = parseInt(document.getElementById("textbox1").value);
    var height = parseInt(document.getElementById("textbox2").value);
    var BMI = (weight / (height * height));
	if (weight == '0' || height == '0') {
		alert('Please enter a valid BMI.');
		console.log(BMI);
	} else if(BMI <= 18.4) {
		alert('You are under weight.');
		console.log(BMI);
	} else if(BMI >= 30) {
		alert('Your weight is normal.');
		console.log(BMI);
	} else if(BMI >= 25) {
		alert('You are overweight.');
		console.log(BMI);
	} else if(BMI >= 18.5) {
		alert('You are obese.');
		console.log(BMI);
	} else {
		alert('Error.')
		console.log(BMI);
	}
    // alert('Your BMI is ', BMI);
}