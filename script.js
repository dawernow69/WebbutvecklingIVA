let buttons;

function init(){
    buttons = document.querySelectorAll("button");

    buttons[0].addEventListener("click", event=>{
        writePrompt();
    })

    buttons[1].addEventListener("click", event=>{
        createText();
    })
}
window.onload = init;

function writePrompt(){
    let tal1 = prompt("Ange ett tal: ");
    let tal2 = prompt("Ange ett till tal: ");
    alert("Summan är: " + (tal1+tal2));
}

function createText(){
    let p = document.querySelector("p");

    p.textContent += "Tillagd text";

    let br = document.createElement("br");
    p.appendChild(br);
}