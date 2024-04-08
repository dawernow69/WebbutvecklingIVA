
function init(){
    const form = document.querySelector("form");

    form.addEventListener("submit", event=>{
        getForm(form);
        event.preventDefault();
    })
}
window.onload = init;

function getForm(form){
    const name = form.elements.name.value;
    const radio = form.elements.radio.value;

    console.log("Namn: " + name + " Fordon: " + radio);
}
