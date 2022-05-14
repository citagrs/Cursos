import { cuentaCorriente } from './cuentas.js'; /* Se importa el archivo para usarlo aquí */
import { cliente } from './clientes.js';

/* Uso de Set y Get con el atributo 'cliente'*/
const clienteUno = new cliente(); /* Se crea una nueva instancia */
clienteUno.cedula = '1024545529';
clienteUno.telefono = '3196890769';
clienteUno.nombre = 'Oscar Cita';

const cuentaDeOscar = new cuentaCorriente();
cuentaDeOscar.numero = '1';
cuentaDeOscar.agencia = '001';
cuentaDeOscar.setCliente = clienteUno;

console.log(cuentaDeOscar.getCliente);

cuentaDeOscar.setCliente = 0;

console.log(cuentaDeOscar.getCliente);