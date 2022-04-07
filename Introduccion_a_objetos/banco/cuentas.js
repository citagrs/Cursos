export class cuentaCorriente{
    /* Se escribe "export" para que permita llamar la informacion de este objeto en otro archivo js */
    cliente;
    numero;
    #saldo;
    agencia;
    constructor(){ 
        /* El costructor funciona para añadir un estado inicial a los parametros de la clase */
        this.cliente = null;
        this.#saldo = 0;
        this.numero = "";
        this.agencia = "";
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