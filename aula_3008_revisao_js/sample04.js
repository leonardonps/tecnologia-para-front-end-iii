var notas = [8, 9.5, 10];
var total = 0;

for(let i = 0; i < notas.length; i++){
    total = total + notas[i];
}

var media = total/notas.length;

console.log(media.toFixed(2));
