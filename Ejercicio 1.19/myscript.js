// Cuando hagamos click sobre el botón de guardar aparecerá un alert.

function save () {
    alert ('Se han guardado los datos')
};

/* Cuando hagamos foco sobre el input del nombre el fondo será de un color y cuando
se lo quitemos, de otro */

const inputName = document.querySelector(".name");
  
function changeColorFocus() {
    inputName.style.backgroundColor = '#fff666';
};
  
function changeColorNoFocus() {
    inputName.style.backgroundColor = '#EC7063';
};
  


const inputRandom = document.querySelector('.random');
  
function checkLetter(event){
    const currentLetter = event.which;
    if (currentLetter === 97 || currentLetter === 101 || currentLetter === 111 || currentLetter === 117) {
        inputRandom.style.color = '#7B241C';
    } else {
        inputRandom.style.color = '#196F3D';
    }
};