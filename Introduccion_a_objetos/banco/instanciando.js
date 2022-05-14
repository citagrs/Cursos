import { cuentaCorriente } from './cuentas.js'; /* Se importa el archivo para usarlo aquí */
import { cliente } from './clientes.js';

/* Se crea una nueva instancia añadiendo la informacion del constructor */
const clienteUno = new cliente('Oscar Cita','1024545529','3196890769'); 

const cuentaDeOscar = new cuentaCorriente(clienteUno,'1','001');

console.log(cuentaDeOscar.getCliente);