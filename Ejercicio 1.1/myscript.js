//Método directo

const volumen = 16 * 23 * 13;
console.log('Volumen =', volumen + ' cm3');

const areaLateral = 23 * 13;
const areaBase = 23 * 16;

const area = areaLateral + 2 * areaBase;
console.log('Área =', area + 'cm2');


//Método de generalización:  solo hay que cambiar los números de las variables principales

const altura = 13;
const ancho = 16;
const base = 23;

const volumen2 = altura * base * ancho;
console.log('Volumen =', volumen2 + ' cm3');

const area2 = base * altura + 2 * base * ancho;
console.log('Área =', area2 + ' cm2');
