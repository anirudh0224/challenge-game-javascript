
let fnum = ''; // Initialize fnum as an empty string
let operator = '';

function fun(val) {
    fnum += val; // Append the clicked value to fnum
    document.getElementById('InputValue').value = fnum;
}

function op(val) {      
    num1 = parseFloat(fnum); // Convert fnum to a number
    operator = val;
    fnum = ''; // Clear fnum for the next input
}

function res() {
    num2 = parseFloat(fnum);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = num2; // If no operator, return the current value
    }

    document.getElementById('InputValue').value = result;
    fnum = result.toString(); // Store the result for further calculations
}

function del() {
    fnum = ''; // Clear the input
    document.getElementById('InputValue').value = '';
}
