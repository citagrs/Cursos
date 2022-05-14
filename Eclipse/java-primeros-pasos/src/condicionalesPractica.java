
public class condicionalesPractica {
	public static void main(String[] args) {

		/*
		 * A Juan le gustaría crear un programa sobre Impuesto sobre la Renta (IR), para
		 * ello, verificó las reglas de impuestos. Encontró en el sitio web de impuestos
		 * que:
		 * 
		 * De 1900.0 a 2800.0, el IR es de 7.5% y puede deducir de la declaración el
		 * monto de 142. De 2800.01 a 3751.0, el IR es del 15% y puede deducir 350. De
		 * 3751.01 a 4664.00, el IR es 22.5% y puede deducir 636.
		 */
		double salario = 3300.0;
		double interes;
		
		boolean primerCondicional = salario >= 1900.0 && salario <=2800;
		boolean segundoCOndicional = salario >= 2800.01 && salario <= 3751.0;
		boolean tercerCondicional = salario >= 3751.01 && salario <=4664.0;
		
		String respuestaTasa = "Su tasa es de: ";
		String respuestaDeduccion = " y su deducción es de: ";
		
		if (primerCondicional) {
			interes = 7.5;
			salario -= 142;
			System.out.println(respuestaTasa + interes + respuestaDeduccion + salario);
		}
		else if(segundoCOndicional) {
			interes = 15;
			salario -= 350;
			System.out.println(respuestaTasa + interes + respuestaDeduccion + salario);
		}
		else if (tercerCondicional) {
			interes = 22.5;
			salario -= 636;
			System.out.println(respuestaTasa + interes + respuestaDeduccion + salario);
		}
			
	}

}
