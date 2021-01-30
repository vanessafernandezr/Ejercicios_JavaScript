const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2, 5, 7];

let puntuacion = 0;

// LENGTH: Obtiene o establece la longitud de la matriz. Este es un número uno más alto que el elemento más alto definido en una matriz.

for (let i = 0; i < notas.length; i++) {
  puntuacion += notas[i];
};
console.log('Con el bucle FOR la nota total es ' + puntuacion);

let puntuacion1 = 0;
for (let score of notas) {
  puntuacion1 += score;
};
console.log('Con el bucle FOR OF la nota total es ' + puntuacion1);