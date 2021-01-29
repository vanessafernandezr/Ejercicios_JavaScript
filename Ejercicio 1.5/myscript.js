var dni = prompt('Escriba su número de DNI sin la letra', 'XXXXXXXXX');
console.log ('dni', dni);

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if (dni<0 || dni>99999999) {
    alert ('El número no es válido');
} 
else {
    const letra = letras[dni%23];
    alert ('Tu letra del DNI es: '+letra);
}

