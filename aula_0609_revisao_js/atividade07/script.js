var isClicked = false;
var total = 1;

function mudarTexto() {
    if (isClicked == false) {
        document.getElementById("titulo").innerText = "Novo Título 1";
        isClicked = true;
    } else {
        document.getElementById("titulo").innerText = "Novo Título 2";
        isClicked = false;
    }
}

function incrementarMaisUm(){
    total += 1;
    document.getElementById("numero").innerText = total;
}

function decrementarMaisUm(){
    total -= 1;
    document.getElementById("numero").innerText = total;
}