export class Empleado {
    #nombre;
    #dni;
    #salario
    #password

    constructor(nombre,dni,salario){
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
        this.#password = '';
    }

    asignarClave(password){
        this.#password = password;
    }
    get password(){
        return this.#password;
    }
    verBonificacion(){
        return this.#salario;
    }
    _verBonificacion(bono){
        return this.#salario + this.#salario*bono/100;
    }
}