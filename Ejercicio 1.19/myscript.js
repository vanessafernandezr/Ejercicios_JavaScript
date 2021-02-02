// Cuando hagamos click sobre el botón de guardar aparecerá un alert.

function save () {
    alert ('Se han guardado los datos')
};

/* Cuando hagamos foco sobre el input del nombre el fondo será amarillo y cuando
    se lo quitemos, de otro.

    La variable inputName es la que captura el nombre que se escriba en la casilla.

    Se ha definido el onFocus (changeColorFocus) el color lila y en el onFocusOut (changeColorNoFocus) el rosa*/

const inputName = document.querySelector(".name");
  
function changeColorFocus() {
    inputName.style.backgroundColor = '#D2B4DE';
};
  
function changeColorNoFocus() {
    inputName.style.backgroundColor = '#F5B7B1';
};
  

/* Se define la variable que captura la tecla pulsada como inputLetter
   La propiedad which devuelve el código de carácter Unicode de la tecla que activó el evento onkeypress
   Los números 97, 101, 105, 111, 117 definen las vocales
   Amarillo para las vocales, azul para consonantes */

const inputLetter = document.querySelector('.random');
  
function checkLetter(event){
    const letter = event.which;
    if (letter === 97 || letter === 101 || letter === 105 || letter === 111 || letter === 117) {
        inputLetter.style.color = '#F4D03F' ;
    } else {
        inputLetter.style.color = '#3498DB';
    }
};