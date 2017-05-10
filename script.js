// JS File

function getBMI() {
	var weight = parseInt(document.getElementById("textbox1").value);
	var height = parseInt(document.getElementById("textbox2").value);
	var outputBMI = document.getElementById('output_bmi');
	var outputMeasure = document.getElementById('output_measure');
	var bmiText = document.getElementById('bmi_text');
	var measureText = document.getElementById('measure_text');
	var BMI = (weight / (height * height));
	if (weight == '0' || height == '0') {
		alert('Please enter a valid BMI.');
		console.log(BMI);
	} else if(BMI <= 18.4) {
		outputBMI.innerHTML = BMI;
		outputMeasure.innerHTML = 'Underweight';
		showOutput();
		console.log(BMI);
	} else if(BMI >= 30) {
		outputBMI.innerHTML = BMI;
		outputMeasure.innerHTML = 'Normal';
		showOutput();
		console.log(BMI);
	} else if(BMI >= 25) {
		outputBMI.innerHTML = BMI;
		outputBMI.style.display = 'block';
		outputMeasure.innerHTML = 'Overweight';
		showOutput();
		console.log(BMI);
	} else if(BMI >= 18.5) {
		outputBMI.innerHTML = BMI;
		outputMeasure.innerHTML = 'Obese';
		showOutput();
		console.log(BMI);
	} else {
		outputBMI.innerHTML = BMI;
		outputMeasure.innerHTML = 'Error';
		showOutput();
		console.log(BMI);
	}
}

function showOutput() {
	document.getElementById('bmi_text').style.display = 'block';
	document.getElementById('measure_text').style.display = 'block';
	document.getElementById('output_bmi').style.display = 'block';
	document.getElementById('output_measure').style.display = 'block';
}