// JS File

function getBMI() {
    var weight = parseInt(document.getElementById("textbox1").value);
    var height = parseInt(document.getElementById("textbox2").value);
	var outputBMI = document.getElementById('ouput_bmi');
	var outputMeasure = document.getElementById('ouput_measure');
	var bmiText = document.getElementById('bmi_text');
	var measureText = document.getElementById('measure_text');
	var BMI = (weight / (height * height));
	
	if (weight == '0' || height == '0') {
		alert('Please enter a valid BMI.');
		console.log(BMI);
	} else if(BMI <= 18.4) {
		outputBMI.innerHTML(BMI);
		outputMeasure.innerHTML('underweight');
		bmiText.style.display = 'block';
		measureText.style.display = 'block';
		console.log(BMI);
	} else if(BMI >= 30) {
		outputBMI.innerHTML(BMI);
		outputMeasure.innerHTML('normal');
		bmiText.style.display = 'block';
		measureText.style.display = 'block';
		console.log(BMI);
	} else if(BMI >= 25) {
		outputBMI.innerHTML(BMI);
		outputMeasure.innerHTML('overweight');
		bmiText.style.display = 'block';
		measureText.style.display = 'block';
		console.log(BMI);
	} else if(BMI >= 18.5) {
		outputBMI.innerHTML(BMI);
		outputMeasure.innerHTML('obese');
		bmiText.style.display = 'block';
		measureText.style.display = 'block';
		console.log(BMI);
	} else {
		outputBMI.innerHTML(BMI);
		outputMeasure.innerHTML('Error');
		bmiText.style.display = 'block';
		measureText.style.display = 'block';
		console.log(BMI);
	}
}