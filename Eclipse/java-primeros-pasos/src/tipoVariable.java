
public class tipoVariable {
	public static void main (String[] args) {
		System.out.println("Claro mi socio");
		
		int edad = 28; /* enteros de 16 bits (aprox 9 digitos)*/
		long telefono = 1222222222222222222L; /*Enteros de 32 bits (aprox 21 digitos)
		 importante tener en cuenta la "L" al final del valor*/
		short numeroMediano = 12345;
		byte numeroPequeno = 123;
		
		double altura = 1.28+.40; /* decimales*/
		float decimalPequeno = 22222.44F;
		
		System.out.println("Mi edad es de " + edad + " y mi altura es de " + altura);
		
		int valorEnteroAltura = (int) altura; /*convertir decimal a entero*/
		
		System.out.println(valorEnteroAltura);
		
	}
}
