window.onload = () => {
    var inputField = document.querySelector("input");
    var buttons = document.querySelectorAll("button");
    var buttonEq = document.querySelector("#equals"); // Assuming you have a button with id equals
    var buttonCl = document.querySelector("#clear"); // Assuming you have a button with id clear

    buttons.forEach(button => {
        button.addEventListener('click', (el) => {
            if (el.target.innerHTML === "=") {
                inputField.value=eval(inputField.value);
            }else if(el.target.innerHTML === "C"){
                inputField.value="";
            }else{
            inputField.value += el.target.innerHTML;
            }
        });
    });
};
