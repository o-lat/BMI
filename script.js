// JS File

function getBMI() {
	var weight = document.getElementById("textbox1").value;
	var height = document.getElementById("textbox2").value;
	var outputBMI = document.getElementById('output_bmi');
	var outputMeasure = document.getElementById('output_measure');
	var bmiText = document.getElementById('bmi_text');
	var measureText = document.getElementById('measure_text');
	var BMI = (weight / (height * height));
	if (weight == '0' || height == '0') {
		alert('Please enter a valid BMI.');
		console.log(BMI);
	} else if(BMI <= 18.4) {
		outputBMI.innerHTML = Math.round(BMI);
		outputMeasure.innerHTML = 'Underweight';
		showOutput();
		console.log(BMI);
	} else if(BMI <= 24.9) {
		outputBMI.innerHTML = Math.round(BMI);
		outputMeasure.innerHTML = 'Normal';
		showOutput();
		console.log(BMI);
	} else if(BMI <= 29.9) {
		outputBMI.innerHTML = Math.round(BMI);
		outputBMI.style.display = 'block';
		outputMeasure.innerHTML = 'Overweight';
		showOutput();
		console.log(BMI);
	} else if(BMI >= 30) {
		outputBMI.innerHTML = Math.round(BMI);
		outputMeasure.innerHTML = 'Obese';
		showOutput();
		console.log(BMI);
	} else {
		outputBMI.innerHTML = Math.round(BMI);
		outputMeasure.innerHTML = 'Error';
		showOutput();
		console.log(BMI);
	}
}

function showOutput() {
	document.getElementById('output').style.display = 'block';
}