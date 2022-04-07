/* Agrupar la informacion por medio de clases */

let nombreCliente = "Oscar";
let documentoCliente = 1024545529;
let telefonoCliente = 7196739;
let saldoCuenta = 20000;

let nombreCliente2 = "Geral";
let documentoCliente2 = 1024599461;
let telefonoCliente2 = 5970338;
let saldoCuenta2 = 200000;

console.log(nombreCliente);
console.log(documentoCliente);
console.log(telefonoCliente);
console.log(saldoCuenta);


/* Si almacenamos varios datos, miles de datos este trabajo
seria muy engorroso, para evitar este proceso se crearon las clases, las 
cuales reduce la cantidad de codigo y ayuda a mantener el orden */

class clientes {
    nombreCliente;
    documentoCliente;
    telefonoCliente;
    saldoCuenta;
}

// se crea el primer cliente
const clientes1 = new clientes();
clientes1.nombreCliente = "Oscar Cita";
clientes1.documentoCliente = 1024545529;
clientes1.telefonoCliente = 7196739;
clientes1.saldoCuenta = 30000;

// se crea el segundo cliente
const clientes2 = new clientes();
clientes2.nombreCliente = "Geraldinne Romero";
clientes2.documentoCliente = 1024599461;
clientes2.telefonoCliente = 5970338;
clientes2.saldoCuenta = 1000000;

/* se imprime en pantalla el cliente2 y lo que contiene la clase cliente */
console.log(clientes2);
console.log(clientes);

