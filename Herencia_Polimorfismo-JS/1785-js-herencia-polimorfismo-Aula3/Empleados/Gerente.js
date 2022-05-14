import { Empleado } from "./Empleado";

export class Gerente extends Empleado{

    constructor(nombre,dni,sueldo){
        super (nombre,dni,sueldo);
    }

    verBonificacion(){
        const bono = 5;
        return super.verBonificacion(bono);
    }
}