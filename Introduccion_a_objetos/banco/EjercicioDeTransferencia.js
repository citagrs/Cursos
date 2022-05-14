import { cuentaCorriente } from './cuentas.js'; /* Se importa el archivo para usarlo aquí */
import { cliente } from './clientes.js';

const clienteUno = new cliente();
clienteUno.cedula = '1024545529';
clienteUno.telefono = '3196890769';
clienteUno.nombre = 'Oscar Cita';

const cuentaDeOscar = new cuentaCorriente();
cuentaDeOscar.numero = '1';
cuentaDeOscar.agencia = '001';
cuentaDeOscar.cliente = clienteUno;

console.log(cuentaDeOscar);

/* Es importante dejar en null aquellas variables que iniciamos pero que aun no le damos un valor */

/* CUENTA DE GERAL */

const clienteDos = new cliente();
clienteDos.cedula = '1024599461';
clienteDos.telefono = '3024446047';
clienteDos.nombre = 'Geraldinne Romero';

const cuentaDeGeral = new cuentaCorriente();
cuentaDeGeral.numero = '2';
cuentaDeGeral.agencia = '002';
cuentaDeGeral.cliente = clienteDos;

console.log(cuentaDeGeral);


cuentaDeGeral.depositoEnCUenta(3000000);
cuentaDeOscar.depositoEnCUenta(700000);

let saldo = cuentaDeOscar.verSaldo();
let saldo2 = cuentaDeGeral.verSaldo();

console.log(`El saldo de la cuenta de Oscar es de ${saldo}`);
console.log(`El saldo de la cuenta de Geral es de ${saldo2}`);

cuentaDeGeral.transferirParaCuenta(300000, cuentaDeOscar);

saldo = cuentaDeOscar.verSaldo();
saldo2 = cuentaDeGeral.verSaldo();

console.log(`El nuevo saldo de la cuenta de Oscar es de ${saldo}`);
console.log(`El nuevo saldo de la cuenta de Geral es de ${saldo2}`);




