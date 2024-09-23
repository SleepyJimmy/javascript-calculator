let humanInput = "";

const numbers_top = document.querySelector(".numbers_top");
const numbers_bot = document.querySelector(".numbers_bot");
const operators = document.querySelector(".operators");
const display = document.querySelector(".display");
display.textContent = "0";

const numbers_arr = ["AC", "+/-", "\%", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const numbers_bot_arr = ["0", "."];
const operator_arr = ["+", "-", "*", "/", "="];

let cache = [];

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


let isResultDisplayed = false;
function updateDisplay() {
    if (isResultDisplayed) {
        display.textContent = humanInput;
        isResultDisplayed = false;
    } else {
        if (display.textContent === "0") {
            if (Number.isInteger(parseInt(humanInput))) {
                display.textContent = humanInput;
            } else if (humanInput == ".") {
                display.textContent += humanInput;
            }
        } else {
            display.textContent += humanInput;
        }
            
        
    }
};

function clearDisplay() {
    humanInput = "";
    display.textContent = "0";
    updateDisplay();
};

function operate() {
    if (cache.length == 3) {
        if (cache[1] == "+") {
            res = cache[0] + cache[2];
        } else if (cache[1] == "-") {
            res = cache[0] - cache[2];
        } else if (cache[1] == "*") {
            res = cache[0] * cache[2];
        } else {
            if (cache[2] == 0) {
                display.textContent = "stop >:(";
            } else {
                res = cache[0] / cache[2];
            }
        }
        display.textContent = res.toString().slice(0, 7);
        cache = [res];
        isResultDisplayed = true;
    } 
    
    
};


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent == "AC") {
            clearDisplay();
            cache = [];
        } else if (button.textContent == "="){
            if (cache.length > 1) {
                cache.push(parseFloat(display.textContent));
                operate();
            }
            
        } else if (operator_arr.includes(button.textContent)) {    // add current display into cache when user clicks an operator         
                       
            let operator = button.textContent
            if (!isResultDisplayed) {
                cache.push(parseFloat(display.textContent));
            }
            
            if (cache.length == 3) {
                operate();
                cache.push(operator);
            } else {
                cache.push(operator);
                display.textContent = "0";                    
            }

            console.log(cache)

        } else if (button.textContent == "+/-") {
            display.textContent = `-${display.textContent}`;
        } else if (button.textContent == "\%") {
            display.textContent /= 100;
        } else {
            if (display.textContent.length < 7) {
                humanInput = button.textContent;
                updateDisplay();    
                console.log(humanInput);
            }
        }
        
        
        
    });
});





