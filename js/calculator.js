var previous_value = "0"
var operation = "+"
var operationPerformed = true;
var spookinessEnabled = false;



function changeDisplay(new_display) {
	document.getElementById("calculator-face").innerHTML = new_display;
}

function appendDisplay(new_digit) {
	if (document.getElementById("calculator-face").innerHTML.length < 6) {
		document.getElementById("calculator-face").innerHTML += new_digit;
	}
}

function resetInput() {
	previous_value = "0";
	operation = "+";
	operationPerformed = true;
}

function enableSpooky() {
	document.title = "A SPOOKY calculator!";
	document.getElementById("spooky-1").style.visibility = "visible";
	document.getElementById("spooky-2").style.visibility = "visible";
	document.getElementById("2spooky").play();
}

function processInput(input_key) {
	switch(input_key) {
		case "+":
			performOperation();
			previous_value = document.getElementById("calculator-face").innerHTML;
			operation = "+";
			break;
		case "-":
			performOperation();
			previous_value = document.getElementById("calculator-face").innerHTML;
			operation = "-"
			break;
		case "x":
			performOperation();
			previous_value = document.getElementById("calculator-face").innerHTML;
			operation = "x"
			break;
		case "/":
			performOperation();
			previous_value = document.getElementById("calculator-face").innerHTML;
			operation = "/"
			break;
		case "=":
			performOperation();
			if (!spookinessEnabled) enableSpooky();
			resetInput();
			break;
		case "c":
			resetInput();
			changeDisplay("0");
			break;
		default:
			if (operationPerformed) {
				changeDisplay(input_key);
				operationPerformed = false;
			} else {
				appendDisplay(input_key);
			}
			break;
	} 
}

function performOperation() {
	var current_value = document.getElementById("calculator-face");
	switch(operation) {
		case "+":
			changeDisplay((parseInt(previous_value) + parseInt(current_value.innerHTML)).toString());
			break;
		case "-": 
			changeDisplay((parseInt(previous_value) - parseInt(current_value.innerHTML)).toString());
			break;
		case "x":
			changeDisplay((parseInt(previous_value) * parseInt(current_value.innerHTML)).toString());
			break;
		case "/":
			if (current_value.innerHTML != "0") {
				changeDisplay(Math.trunc((parseInt(previous_value) / parseInt(current_value.innerHTML)).toString()));
			} else {
				alert("Can't divide by zero!");
				resetInput();
				changeDisplay("0");
			}
			break;
	}
	operationPerformed = true;
}