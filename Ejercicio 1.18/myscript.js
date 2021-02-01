/* Número de enlaces de la página.

getElementsByTagName(valor etiqueta): con esta función obtenemos un array con todos los elementos de la página que tenga la 
etiqueta seleccionada */

const allLinks = document.getElementsByTagName('a');

// Dirección a la que enlanza el penúltimo (-1) enlace.

const penultimateLink = allLinks [allLinks.length - 1].href;

/* Número de enlaces del tercer párrafo. 

getElementsById(valor ID): esta función busca en el documento el elemento con el
valor del identificador que le hayamos indicado */

const third = document.getElementById('thirdparagraph');
const linksThird = third.getElementsByTagName('a').length;

// Mostrar el primer resultado 

const result1 = document.querySelector('#number-links');
result1.innerHTML = 'En esta página hay '+ allLinks.length+' enlaces';

// Crear un nodo para el segundo 

const result2 = document.createElement('p');
const contentResult2 = document.createTextNode(penultimateLink);
result2.appendChild(contentResult2);

const resultsParagraph = document.querySelector('.results');
resultsParagraph.appendChild(result2);

// Mostrar el tercer resultado

const result3 = document.querySelector('#third-result');
result3.innerHTML = 'En el tercer párrafo hay '+linksThird+ ' enlaces.';


