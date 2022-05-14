import { Empleado } from "./Empleado";

export class Director extends Empleado{
    constructor(nombre,dni,sueldo){
        super(nombre,dni,sueldo);
    }

    verBonificacion(){
        const bono = 10;
        return super.verBonificacion(bono);
    }
}