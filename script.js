
let prevDisplay = document.getElementById("display_previous");
let currDisplay = document.getElementById("display_current");

let btnNum = document.querySelectorAll(".btn_num");
let btnOp = document.querySelectorAll(".btn_op");
let btnClear = document.querySelector(".btn_c");
let btnDel = document.querySelector(".btn_del");
let btnEqual = document.querySelector(".btn_equal");

var previousOp = "";
var currentOp = "";
var operation = undefined;



btnNum.forEach(button => {
    button.addEventListener("click", () => {
        if (button.innerHTML === "."){
            if 
        }
        addNumber(button.innerHTML);
    })
})

btnOp.forEach(button => {
    button.addEventListener("click", () => {
        opSelection();
        addOperand(button.innerHTML);
    })
})

btnClear.addEventListener("click" , () => {
    clear()
})

btnDel.addEventListener("click", () => {
    currDisplay.value = currDisplay.value.slice(0, -1);
})

btnClear.addEventListener("click" , () => {
    clear()
})

btnEqual.addEventListener("click", () => {
    calculate()
    displaySwitch()
})

updateDisplay = () => {
    currDisplay = currentOp;
    prevDisplay = previousOp;
}

clear = () => {
    prevDisplay.value = "";
    currDisplay.value = "";
}

addNumber = (num) => {
    currDisplay.value += num;
}

addOperand = (oper) => {
    previousOp = currentOp
    currentOp = "";
}

// calculate = () => {
    
// }


