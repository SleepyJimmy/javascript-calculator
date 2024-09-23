let humanInput = "";

const numbers_top = document.querySelector(".numbers_top");
const numbers_bot = document.querySelector(".numbers_bot");
const operators = document.querySelector(".operators");

const numbers_arr = ["AC", "+/-", "\%", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const numbers_bot_arr = ["0", "."];
const operator_arr = ["+", "-", "*", "/", "="];

// create divs for top numbers container
for (let i = 0; i < 12; i++) {
    let button = document.createElement("button");
    button.textContent = numbers_arr[i];
    numbers_top.appendChild(button);
}

// create divs for bottom numbers container
for (let i = 0; i < 2; i++) {
    let className = `num_${numbers_bot_arr[i].replace('.', 'dot')}`;
    let button = document.createElement("button");
    button.textContent = numbers_bot_arr[i];
    button.classList.add(className);
    numbers_bot.appendChild(button);
}

// create divs for operators container
for (let i = 0; i < 5; i++) {
    let button = document.createElement("button");
    button.textContent = operator_arr[i];
    operators.appendChild(button);
}

const display = document.querySelector(".display");
function updateDisplay() {
    display.textContent += humanInput;
}
function clearDisplay() {
    humanInput = "";
    display.textContent = "";
    updateDisplay();
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent == "AC") {
            clearDisplay();
        } else if (button.textContent == "="){
            // apply the operation here
        } else {
            humanInput = button.textContent;
            updateDisplay();
        }
    })
})


function operate() {

}