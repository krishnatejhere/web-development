document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    let currentOperand = '';
    let previousOperand = '';
    let operation = undefined;

    const updateDisplay = () => {
        display.innerText = currentOperand;
    };

    const clear = () => {
        currentOperand = '';
        previousOperand = '';
        operation = undefined;
    };

    const appendNumber = (number) => {
        if (number === '.' && currentOperand.includes('.')) return;
        currentOperand += number.toString();
    };

    const chooseOperation = (op) => {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            compute();
        }
        operation = op;
        previousOperand = currentOperand;
        currentOperand = '';
    };

    const compute = () => {
        let computation;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        currentOperand = computation;
        operation = undefined;
        previousOperand = '';
    };

    document.querySelector('.keys').addEventListener('click', (e) => {
        const target = e.target;
        if (!target.matches('button')) return;
        if (target.classList.contains('key')) {
            appendNumber(target.innerText);
            updateDisplay();
        } else if (target.classList.contains('operator')) {
            chooseOperation(target.value);
        } else if (target.classList.contains('decimal')) {
            appendNumber('.');
            updateDisplay();
        } else if (target.classList.contains('all-clear')) {
            clear();
            updateDisplay();
        } else if (target.classList.contains('equal')) {
            compute();
            updateDisplay();
        }
    });
});
