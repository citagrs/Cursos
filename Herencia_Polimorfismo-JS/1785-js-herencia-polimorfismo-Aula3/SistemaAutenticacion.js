export class SistemaAutenticacion {
    static login (empleado,password){
        return empleado.password == password;
    }
}