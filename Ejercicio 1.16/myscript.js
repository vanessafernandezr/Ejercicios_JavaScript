class cuadrado {
    constructor(lado) {
        this.perimetro = lado * 4;
        this.area = lado * lado;
   
    console.log ('Cuadrado de '+ lado+ ' cm de lado --> Perímetro: '+ this.perimetro + ' cm. Área: '+ this.area + ' cm2');
    }   
};

const pequeño = new cuadrado (2);
const mediano = new cuadrado (5);
const grande = new cuadrado (10);
