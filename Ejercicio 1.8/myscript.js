const texto = prompt("Introduce el texto que desee");

const resultado = mayMin (texto);
alert('El texto "' + texto + '" está en ' + resultado);

function mayMin (texto) {
  if (texto === texto.toUpperCase()) {
    return "mayúsculas";
  } 
  
  else if (texto === texto.toLowerCase()) {
      return "minúsculas"
  }
  else {
    return "mayúsculas y minúsculas";
  }
};