const times = [60, 75, 79, 80, 55, 59];

const suma = times.reduce((accumulator, currentValue) => accumulator + currentValue);

const media = suma / times.length;

console.log ('La media es: ', media);
