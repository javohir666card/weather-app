let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');
let evalButton = document.querySelector('#evalButton');
let deleteButton = document.querySelector('.delButton');
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        input.value += button.innerHTML;
    })
})

evalButton.addEventListener("click", hisobla);
function hisobla() {
    input.value = eval(input.value);       
}
deleteButton.addEventListener("click", ()=> {
    input.value = "";
})

input.addEventListener("keypress", e => {
    if(e.key === "Enter") {
        hisobla();
    }
})