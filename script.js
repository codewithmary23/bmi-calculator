// Elements
let btnCalculate = document.querySelector('.calculate');
let btnReset = document.querySelector('.reset');
let outputMessage = document.querySelector('.result-message');

// Functions
function calculateBMI(event) {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    event.preventDefault();

    let bmi = weight / (height / 100 * height / 100);
    const finalBMI = (bmi.toFixed(2));

    if (height === '' || weight === '') {
        outputMessage.innerHTML = 'Enter a valid data.';
    } else if (finalBMI <= 18.5) {
        outputMessage.innerHTML = `Your BMI is ${finalBMI}. You are thin.`
    } else if (finalBMI > 18.5 && finalBMI < 24.9) {
        outputMessage.innerHTML = `Your BMI is ${finalBMI}. You are healthy.`
    } else {
        outputMessage.innerHTML = `Your BMI is ${finalBMI}. You are overweight.`
    }
}

function reloadPage() {
    window.location.reload();
}

// Event listeners
btnCalculate.addEventListener('click', calculateBMI);

btnReset.addEventListener('click', reloadPage);