let form = document.getElementById('myForm');
function addition(result) {
    result = Number(form.value_one.value) + Number(form.value_two.value);
    document.getElementById('result').innerHTML = result;
}

function substraction(result) {
    result = form.value_one.value - form.value_two.value;
    document.getElementById('result').innerHTML = result;
}

function multiplication(result) {
    result = form.value_one.value * form.value_two.value;
    document.getElementById('result').innerHTML = result;
}

function division(result) {
    result = form.value_one.value / form.value_two.value;
    document.getElementById('result').innerHTML = result;
}