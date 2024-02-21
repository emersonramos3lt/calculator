const display = document.getElementById("display"); // Mostra o resultado

function appendToDisplay(input) {
    display.value += input; // Se você clicar, em 5 por exemplo o elemento 5 será mostrado, porque o appendToDisplay(5) será chamado 
}

function clearDisplay() {
    display.value = ""; // Limpa o valor digitado, por isso que deixa ""
}

function calculate() {
    try {
        display.value = eval(display.value); // Para calcular os valores
    }
    catch(error) {
        display.value = "Error"
    }
} // Caso aconteça algum erro como colocar 7+ e apertar em igual