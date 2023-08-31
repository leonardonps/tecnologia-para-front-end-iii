var notas = [6, 5, 10];
var total = 0;

for(let i = 0; i < notas.length; i++){
    total = total + notas[i];
}

var media = total/notas.length;

console.log(media.toFixed(2));

if(media < 0) {
    console.log('Média inválida - menor que 0.');
} else if (media < 7) {
    console.log('Reprovado');
} else {
    console.log('Aprovado');
}