function getPin() {
    const pin = Math.random() * 10000;
    const disit = Math.round(pin);
    const pinString = disit + '';
    if (pinString.length == 4) {
        return disit;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-number').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = (event.target.innerText);
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {

        const previousNumber = calcInput.value;
        const newCalc = previousNumber + number;
        calcInput.value = newCalc;
    }
})

function verifyPin() {
    const pin = document.getElementById('display-number').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const success = document.getElementById('notify-success');
    const fail = document.getElementById('notify-fail');
    if (pin == typedNumbers) {
        success.style.display = 'block';
        fail.style.display = 'none';
    }
    else {
        fail.style.display = 'block';
        success.style.display = 'none';
    }

}