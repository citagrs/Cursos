import { SistemaAutenticacion } from './SistemaAutenticacion.js';
import { Empleado } from './Empleados/Empleado.js';


const empleado = new Empleado('Oscar',1024545529,10000000);
empleado.asignarClave ('1234');
console.log(SistemaAutenticacion.login(empleado,'1234'));



