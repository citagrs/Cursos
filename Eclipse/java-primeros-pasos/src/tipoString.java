
public class tipoString {
	
	//main crtl+esp
	
	public static void main(String[] args) {
		
		char caracter = 'a'; /*Almacena solo un cacarter*/
		caracter = 64; //imprime  el caracter @
		System.out.println(caracter);
		
		caracter = 64-1;
		char segundoCaracter = (char)(caracter - 2); /*Se debe hacer la conversion
		para que no genere error, ya que inicialmente Eclipse lo entendera como INT*/
		
		System.out.println(segundoCaracter);
		//sysout ctrl + esp = atajo
	}

}
