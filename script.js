
const prevDisplay = document.getElementById('display_previous');
const currDisplay = document.getElementById('display_current');
const btn = Array.from(document.getElementsByClassName('btn'));


btn.forEach(button => {
    button.addEventListener("click" , () => {
        if (button.innerHTML === "%" || "/" || "X" || "-" || "+") {
            addOperation(button.innerHTML)
         }
    } )
});

addOperation = (theOp) => {
    console.log(theOp);
}
