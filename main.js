const button = document.querySelectorAll('button');
const display = document.getElementById('screen');
let operator = "";
let operator1 = "";
let operator2 = "";

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
        let value = this.innerHTML
        if (value > 0 || value < 9) {
            if (operator === "") {
                operator1 += value
            } else {
                operator2 += value
            }
            display.value = operator1 + operator + operator2
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            operator = value
            display.value = operator1 + operator + operator2
        } else if (value === 'CLEAR') {
            operator = ''
            operator1 = ''
            operator2 = ''
            display.value = ''
        } else if (value === '=') {
            let result = eval(operator1 + operator + operator2)
            display.value = result;
        }
    })
}