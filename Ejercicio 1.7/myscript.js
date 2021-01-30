const numero = prompt("Introduce un número entero:");

const resultado = checkNumber (numero);
alert("El número " + numero + " es " + resultado);

function checkNumber (numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
};