// BMI JS File

var weight = document.getElementById('textbox1');
var height = document.getElementById('textbox2');

function getBMI() {
  if (weight.value == '' || height.value == '') {
    alert('Both fields must be populated.');
  } else {
    alert('Your BMI is ', weight.value / height.value * height.value);
  }
}
