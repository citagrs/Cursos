import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta{

    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia) {
        super(cliente,numero,agencia,0); /* La palabra super me permite llamar los metodos de la clase padre cuenta */
        CuentaCorriente.cantidadCuentas++;
    }
    prueba(){
        console.log('clase hijo');
        /* Si llego a agregar la palabra super, formularia una una funcion" y agregaria "clase padre" y clase hijo */
        /* EN este caso, al llamar este metodo reemplzaria la herencia por parte de la clase "Cuenta" y arrojara solo:
        'clase hijo' */
    }
    retirarDeCuenta(valor){
        super.retirarDeCuenta(valor,5)
        /* Reemplazo la funcionalidad de la funcion retirarDeCuenta para que le anexe un porcentaje individual */
    }
}
