
function init(){
    const buttons = document.querySelectorAll("button");

    buttons[0].addEventListener("click", event=>{
        writePrompt();
    })

    buttons[1].addEventListener("click", event=>{
        createText();
    })
}
window.onload = init;

function writePrompt(){
    const tal1 = Number(prompt("Ange ett tal: "));
    const tal2 = Number(prompt("Ange ett till tal: "));
    alert("Summan är: " + (tal1+tal2));
}

function createText(){
    const p = document.querySelector("p");

    p.innerHTML += "Tillagd text<br>";
}