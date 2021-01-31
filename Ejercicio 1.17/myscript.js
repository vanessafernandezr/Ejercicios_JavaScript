// Se define la clase cliente el cual recibirá nombre, direccion, telefono, nif

class cliente {
    constructor (nombre, direccion, telefono, nif) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
}

// Se define la clase elementos el cual recibirá descripcion, cantidad, precio

class elemento  {
    constructor (descripcion, cantidad, precio) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

/* Se define la clase factura el cual recibe el nombre del cliente y un ARRAY de elementos
También contiene una pseudoclase llamada información con base imponible, iva, total y precio */

class factura {
    constructor (cliente, elementos) {
        this.cliente = cliente;
        this.elementos = elementos;
        this.informacion = {
            baseImponible: 0,
            iva: 16,
            total: 0,
            formaDePago: "en efectivo",
        };
    
    /* Los cáculos matemáticos (funciones) se hacen dentro de la clase factura 
    El primero se hace con una funcion for (bucle) 
    Base imponible = cantidad * precio 
    Total = base imponible * (1+ (16/100)) */

        this.calculoTotal = function() {
            for (var i = 0; i < this.elementos.length; i++) {
                this.informacion.baseImponible = this.elementos[i].cantidad * this.elementos[i].precio;    
            }
        
            this.informacion.total = this.informacion.baseImponible * (1 + (this.informacion.iva / 100));
        }

    // Pide mostrar el cálculo en pantalla. Se sigue usando el "this" porque está dentro del constructor

        this.resultado = function() {
            this.calculoTotal ();
            alert ('El total es: '+ this.informacion.total+ ' euros.');
        }
        
    };
}

// El de elementos es un array 

var primerCliente = new cliente ("Vanessa", "Madrid", "675557896", "55458625N");
var primerElemento = [new elemento ("elemento1", "2", "8"), new elemento ("elemento2", "5", "3")];
var facturaTotal = new factura (primerCliente, primerElemento);
facturaTotal.resultado();