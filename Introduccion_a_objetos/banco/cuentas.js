import {cliente} from "./clientes.js";

export class cuentaCorriente{
    /* Se escribe "export" para que permita llamar la informacion de este objeto en otro archivo js */
    #cliente; /* Atributo privado */
    numero; /* Atributo publico */
    #saldo;
    agencia;
    static contarCuenta; /* Atributo estatico */

    /* Set y Get funcionan para protejer los atributos del objeto */
    set setCliente(valor){
        if (valor instanceof cliente){ /* Si el valor coincide con la instancia del objeto entonces: */
            this.#cliente = valor;
        }
    } /* Atribuir al atributo #cliente */

     get getCliente(){
        return this.#cliente;
    } /* Obtener del atributo */

    constructor(cliente,numero,agencia){ 
        /* El costructor funciona para añadir un estado inicial a los parametros de la clase */
        this.setCliente = cliente; /* Ya que #cliente es un atributo privado usamos el set de éste para este caso */
        this.#saldo = 0;
        this.numero = numero;
        this.agencia = agencia;
        cuentaCorriente.contarCuenta++;
    }
    depositoEnCUenta(valor){ //esto es un metodo
        // cuentaCorriente.#saldo = cuentaCorriente.#saldo + valor; 
        this.#saldo += valor; /* version resumida de la linea anterior */
        return this.#saldo;
    }
    retiroEnCuenta(valor){
        if(valor <= this.#saldo){
            this.#saldo -= valor;
        }else{
            console.log('#saldo insuficiente')
        }
        return this.#saldo; 
    }
    verSaldo(){
        return this.#saldo;
    }
    transferirParaCuenta(valor,cuentaATransferir){
        this.retiroEnCuenta(valor);
        cuentaATransferir.depositoEnCUenta(valor);
    }
}