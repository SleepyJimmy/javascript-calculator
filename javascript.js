let humanInput = "";

const numbers_top = document.querySelector(".numbers_top");
const numbers_bot = document.querySelector(".numbers_bot");
const operators = document.querySelector(".operators");

const numbers_arr = ["AC", "+/-", "\%", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const numbers_bot_arr = ["0", "."];
const operator_arr = ["+", "-", "*", "/", "="];

const cache = [];

// create divs for buttons
function createDivs() {
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
};
createDivs();


const display = document.querySelector(".display");
display.textContent = "0";
function updateDisplay() {
    if (display.textContent == 0 && (Number.isInteger(parseInt(humanInput)))) {
        display.textContent = humanInput;
    } else {
        display.textContent += humanInput;
    }
}
function clearDisplay() {
    humanInput = "";
    display.textContent = "0";
    updateDisplay();
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent == "AC") {
            clearDisplay();
        } else if (button.textContent == "="){
            operate();
        } else if (operator_arr.includes(button.textContent)) {    // add current display into cache when user clicks an operator
            let operator = button.textContent
            
            cache.push(parseInt(display.textContent))
            if (cache.length == 3) {
                operate();
            }
            cache.push(operator)
            console.log(cache);
        } else {
            if (display.textContent.length < 8) {
                humanInput = button.textContent;
                updateDisplay();    
                console.log(humanInput);
            }
        }
        
        
    })
})


function operate() {

}

