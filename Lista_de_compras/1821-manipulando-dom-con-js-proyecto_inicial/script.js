/* Se almacena en la variable btn al objeto llamado data-form-btn el cual es el boton de la pagina */
const btn = document.querySelector("[data-form-btn]");

//Arrow functions o Funciones Anonimas =>
const agregarProducto = (evento) => {

    /* Evita que la pagina se refresque al dar hacer click en el elemento boton */
    evento.preventDefault();
    
    /* Añade a la constante input la informacion que se agrega en el input */
    const input = document.querySelector("[data-form-input]");
    

    console.log(input.value);
}

/* Ahora se toma la constante btn y se llama el metodo addEventListener para "escuchar" el evento, el cual posee dos 
parametros, el tipo de evento (en este caso click) y la que se realizara al usar el evento, en otras palabras, lo que
sucedera al dar click sobre el boton */
btn.addEventListener("click", agregarProducto);
