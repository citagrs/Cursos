
public class ciclos {
	public static void main(String[] args) {
		
		int contador = 1;
		int suma = 0;
		/*
		 * Cuenta hasta 10
		 */
		while(contador <=10) {
			suma = suma+contador;
			System.out.println(contador);
			contador++;
			
		}
		System.out.println(suma);
		/*
		 * Cuenta hasta 10
		 */
		
		for (int contador2 = 0; contador2<=10;contador2++) {
			System.out.println(contador2);
			
		}
		System.out.println();
		/*
		 * Realiza multiplicacion hasta 10x10
		 */
		for (int contador2 = 0; contador2<=10;contador2++) {
			for (int multiplicar = 0; multiplicar<=10;multiplicar++) {
				System.out.println(contador2 + " x " + multiplicar + " = " +multiplicar*contador2);
				
			}
			
		}
		System.out.println();
		/*
		 * Realiza una tabla de multiplicar
		 */
		for (int contador2 = 1; contador2<=10;contador2++) {
			for (int multiplicar = 1; multiplicar<=10;multiplicar++) {
				System.out.print(multiplicar*contador2);
				System.out.print(" ");				
			}
			System.out.println();
			
		}
		System.out.println();
		/*
		 * Realiza triangulos con los asteriscos (*)
		 */
		for (int fila = 0; fila<=10;fila++) {
			for (int columna = 0; columna<fila;columna++) {
				System.out.print("*");
				System.out.print(" ");				
			}
			System.out.println();
			
		}
	}
}
