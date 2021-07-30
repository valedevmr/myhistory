//exportar las funciones del modulo
export {revisarPerfil, revisarNombre, revisarTema,obtenerperfil,cambiarTema, cambiarnombre,guardar,listarHistorias}



/*usada para verificar si existe un tema por defecto o cambiarlo*/ 
function revisarPerfil(){
    
    const perfilphoto =  document.querySelector("#photo");
    //Si existe llave foto, regresa valor de esa llave y agrega una clase con el nombre del valor de la pareja de de la llave
    if("foto" in localStorage){
        perfilphoto.classList.add(localStorage.getItem("foto"));
    }
    //si aun no existe esa llave foto la crea, para que en el html se cargue una foto por defecto
    else{
        localStorage.setItem("foto","defaultF");
    
    }
    
}
/*
    revisa si se tiene guardado un tema en localStorage, si no, se guarda el tema por defeccto o se coloca el tema que este en localstorage
*/

function revisarTema(){
    const tema = document.querySelector("#theme");
    
    if("tema" in localStorage){
        tema.classList.add(localStorage.getItem("tema"));   
    }
    else{
    
        localStorage.setItem("tema","bodydefecto");
    }
}

/*
revisa si hay un nombre por defecto y se guarda en localstorage, cas contrario se obtiene le tema y guardado el localstorage y se aplica
*/

function revisarNombre(){
    const nombre =document.querySelector(".nombre");
    
    if("nombre" in localStorage){
        let nameLS = localStorage.getItem("nombre");
        nombre.innerHTML = nameLS;
    }
    else{
        
        localStorage.setItem("nombre",nombre.innerText);
    }
}

/*Funciones para el apartado de configuracion*/


/* cambia foto de perfil* */
function obtenerperfil(e){
    //realiza la delegacion de evento y si el elemenot selecinado su clase conrresponde a la cadena del if este 
    //remueve la clase y la remplaza por la cadena que del nombre,batman,capitanaamerica...etc
    //y se guarda con su clave foto en el local storage
    const photo = document.querySelector("#photo");
    if(e.target.classList.contains("batman")){
        photo.classList.remove(photo.classList[2]);
        photo.classList.add(e.target.classList[2]);
        localStorage.setItem("foto",e.target.classList[2]);
        
    }
    else if(e.target.classList.contains("capitanamerica")){
        photo.classList.remove(photo.classList[2]);
        photo.classList.add(e.target.classList[2]);
        localStorage.setItem("foto",e.target.classList[2]);
    }
    else if(e.target.classList.contains("marvel")){
        photo.classList.remove(photo.classList[2]);
        photo.classList.add(e.target.classList[2]);
        localStorage.setItem("foto",e.target.classList[2]);
    }
    else if(e.target.classList.contains("snow")){
        photo.classList.remove(photo.classList[2]);
        photo.classList.add(e.target.classList[2]);
        localStorage.setItem("foto",e.target.classList[2]);
    }
    else if(e.target.classList.contains("jAngular")){
        photo.classList.remove(photo.classList[2]);
        photo.classList.add(e.target.classList[2]);
        localStorage.setItem("foto",e.target.classList[2]);
    }
    else if(e.target.classList.contains("iron-man")){
        photo.classList.remove(photo.classList[2]);
        photo.classList.add(e.target.classList[2]);
        localStorage.setItem("foto",e.target.classList[2]);
    }
    else if(e.target.classList.contains("javascript")){
        photo.classList.remove(photo.classList[2]);
        photo.classList.add(e.target.classList[2]);
        localStorage.setItem("foto",e.target.classList[2]);
    }
    else if(e.target.classList.contains("default")){
        photo.classList.remove(photo.classList[2]);
        photo.classList.add(e.target.classList[2]);
        localStorage.setItem("foto",e.target.classList[2]);
    }
    else if(e.target.classList.contains("spiderman")){
        photo.classList.remove(photo.classList[2]);
        photo.classList.add(e.target.classList[2]);
        localStorage.setItem("foto",e.target.classList[2]);
    }
    else if(e.target.classList.contains("superman")){
        photo.classList.remove(photo.classList[2]);
        photo.classList.add(e.target.classList[2]);
        localStorage.setItem("foto",e.target.classList[2]);
    }
    else if(e.target.classList.contains("vaquera")){
        photo.classList.remove(photo.classList[2]);
        photo.classList.add(e.target.classList[2]);
        localStorage.setItem("foto",e.target.classList[2]);
    }
    else if(e.target.classList.contains("vaquero")){
        photo.classList.remove(photo.classList[2]);
        photo.classList.add(e.target.classList[2]);
        localStorage.setItem("foto",e.target.classList[2]);
    }
    else if(e.target.classList.contains("wanda")){
        photo.classList.remove(photo.classList[2]);
        photo.classList.add(e.target.classList[2]);
        localStorage.setItem("foto",e.target.classList[2]);
    }
    else if(e.target.classList.contains("wanda2")){
        photo.classList.remove(photo.classList[2]);
        photo.classList.add(e.target.classList[2]);
        localStorage.setItem("foto",e.target.classList[2]);

    }
    else if(e.target.classList.contains("maravilla")){
        photo.classList.remove(photo.classList[2]);
        photo.classList.add(e.target.classList[2]);
        localStorage.setItem("foto",e.target.classList[2]);
        
    }
    else if(e.target.classList.contains("flash")){
        photo.classList.remove(photo.classList[2]);
        photo.classList.add(e.target.classList[2]);
        localStorage.setItem("foto",e.target.classList[2]);
        
    }
    
}
/*cambia tema, revisa si se eligio algun tema o si ya se aplico un alguno */
function cambiarTema(){
    const temaselect = document.querySelector("#themeSeleccionado");
    const tema_body = document.querySelector("#theme");
    const themeactual =  document.querySelector("#theme").classList.value;
   
    if(!temaselect.value){
        alert("Elige una opción");
     }
     else{
         
         if(themeactual != temaselect.value){
             
            tema_body.classList.remove(themeactual);
             tema_body.classList.add(temaselect.value);
             localStorage.setItem("tema",temaselect.value)
         }
         else{
             alert("Tema ya aplicado, seleccione otro");
         }   
           
     }
   
}

/** modifica el nombre que se obtenga del input con clase noombre*/
function cambiarnombre(){
    const nombre = document.querySelector(".nombre");
    //si existe la clave  nombre xiste
    if("nombre" in localStorage){
        //si el campo es vacio se pide que se ingrese un valor dentro de este
        if(!nombre.value){
            alert("Texto vacío, ingrese un nombre");
        }
        //en la clave nombre como valor se le ingresa el contenido del contenedor nombre 
        else{
            localStorage.setItem("nombre",nombre.value);
            nombre.disabled=true;
        }
    }

}

/**
 * 
 * funcione para escriir un nuevo texto o visualizar los que ya esten en existencia
 * CRUD
 * 
 * */
//funciona como un select, pero usando localstorage con almacenamineto
//se llama cuando el evento que reconoce el id = guardar es presionado.

 function guardar(){
    //extraemos la historia que contiene el elemento con el id = historia y tambien
    //extraemos el contenido del titulo con la clase,  class = titulo 
    const historia = document.querySelector("#historia");
    const titulo = document.querySelector(".titulo");
    //valor de historia es verdadero= tiene contenido entra a la siguinete condicion
    if (historia.value) {
        //el titulo puede ir vacio o no, en caso de no ir vacio se invoca a la funcion 
        //ingresarHistoria y se pasa el valor del titulo como parametro, dentro de la funcion
        //ingresarHistoria se hace un insert 
        if (titulo.value) {
            IngresarHistoria(titulo.value);
        }
        else {
            //si no tiene titulo, se pasa un texto por defecto
            IngresarHistoria("Sin título");
        }

    }
    else {
        //si el campo esta vacio hacemos uso de la funcion crear error para avisar al usuario que el campo no debe ir vacio
        // se retorna nada para que el progrma no se siga ejecutandose
        crearError();
        return;
    }
 }

//
//Crea un aviso de que la historia no puede ir vacia.
function crearError() {
    //se crea un elemento parrafo para poner el texto de error
    const error = document.createElement('p');

    error.textContent = "la historia no puede ir vacia";
    //se agrega a ese parrfo la clase error que le asigan en el css los estilos
    error.classList.add("error");
    //seleccionamos el div donde se mostrara el la etiqueta parrafo que se creamos conel mensaje de error = "la historia no puede ir vacia"
    const contendorerror = document.querySelector(".guardar");
    //agregamos ese parraro como hijo a elemento div con la clase guardar
    contendorerror.appendChild(error);

    //despues de 1.5 segundos desaparesca ese parrafo que creamos con el mensaje de error
    setTimeout(() => {
        error.remove();
    }, 1500);
}

//esta funcion sirve como un creat =  insert ,
//
function IngresarHistoria(titulo) {
    const limpiar = document.querySelector(".titulo");
    //libreria moment para hacer uso de fechas en formato español

    moment.locale("es");
    // objeto que contiene los datos del texto. titulo de la historia, texto de la historia y la fecha en el momento que se guardo

    const textHistory = {
        titulo: titulo,
        text: historia.value,
        fecha: moment().format("DD MM YYYY"),

    }
    //el objeto guardado a continuacion es transformado a un string por medio del objeto JSON.stringify, y que localstorage
    //no acepta objetos unicamente la llave y el valor a guardar en este caso un string
    const arrayInfoTexto = JSON.stringify(textHistory);
    //es qui donde se inserta un nuevo regiustro(una nueva historia)
    //como id obtenemos los milisegundos por medio de Date.now() de javascript y como valor el objeto parseado a string
    localStorage.setItem(Date.now(), arrayInfoTexto);

    //limpia el contenido del elemento donde se ingreso la historia
    historia.value = "";
    //limpia el titulo de la historia
    limpiar.value = "";

}


//funcion que se invoca cuando se listan las historias o textos qu estan gurdadas
//en el localstorage

function listarHistorias() {
    //obtenemos el elemento con el selector tbody
    const tableta = document.querySelector('.tbody');
    
    let x, clave;
    //antes de listar los texto, limpiamos lo que tenga tbody, esto justo se para que 
    //cada que le den click se listen una unica vez todos los los textos y no se repitan
    tableta.innerHTML = ""
    //recorremos todos las llaves que tenemos guardadas en el localstorage
    for (x = 0; x <= localStorage.length - 1; x++) {
        //cada iteracion guardamos su clave de esa posicion y la usamos para extraer 
        //los datos que esten asociados a esa clave pero..-
        clave = localStorage.key(x);
        //uncamente traera las llaves de los texto, puesto que en el localstorage tambien tenemos
        //guardadas las llaves de foto, tema y nombre y esos calores no los queremos listar
        if (clave != "tema" && clave != "foto" && clave != "nombre") {
            //extraemos el valor asociado a la llave
            //y como esta en forma de string usamos json.parse para convertilo a un objeto
            const objetohi = JSON.parse(localStorage.getItem(clave));
            
            // Crea las hileras de la tabla
        
            const trnew = document.createElement('tr');
            tableta.appendChild(trnew);
            //creamos dentro de el tr los td que tendra los los iconos para ver, eliminar y actulizar una  historia    
            trnew.innerHTML = trnew.innerHTML + "<td>"+objetohi.titulo+" <span class='ocultar'>"+clave+" </span></td>" + "<td ><a href='#ver' rel='modal:open' ><i class='material-icons icon-color read look "+clave+"'>visibility</i></a></td>"+ "<td ><a href='#update' rel='modal:open'><i class='material-icons icon-color actualizar up "+clave+"'>update</i></a></td>"+ "<td><a href='#delete' rel='modal:open'><i class='material-icons icon-color delete "+clave+"'>delete</i></a></td>"; 

        }
    }

    //aqui tenemos la funcionalidad para leer, elimnar y actulizar un text de alguna historia
    const btn_ver = document.querySelector(".tbody");    
    
    btn_ver.addEventListener("click",e=>{

        
        //si la delegacion del evento apunta a llok entonces se abrira una ventana modal para poder observar ese texto que guardamos
        //anteriormente
        if(e.target.classList.contains("look")){

            //en el codigo se tiene en la curta posocion de la td de icono ver, a la clase al id de locastorage
            //y con ella extraemos unicamente la infromacion de esa clave
            const objetohistoria = JSON.parse(localStorage.getItem(e.target.classList[4]));
            const historia = document.querySelector(".historia");
            const fecha = document.querySelector(".fecha");
            const titulo = document.querySelector(".titulo2");
            //añadimos dinamicamente el contendio del objeto y sus atributos a los elemntos 
            //correspondientes en el html
            historia.innerText = objetohistoria.text;
            fecha.innerText =  objetohistoria.fecha;
            titulo.innerText = objetohistoria.titulo;
        }
        if(e.target.classList.contains("up")){
            
            const tituloUpdate = document.querySelector("#update .input-100.titulo");
            console.log(localStorage.getItem(e.target.classList[4]));
            const objetohistoria = JSON.parse(localStorage.getItem(e.target.classList[4]));
            
            const historia = document.querySelector("#historiaupdate");
            historia.innerText = objetohistoria.text;
            tituloUpdate.value= objetohistoria.titulo;
            
        }
        if(e.target.classList.contains("delete")){
            console.log(localStorage.getItem(e.target.classList[3]));
            localStorage.removeItem(e.target.classList[3]);
            listarHistorias();
           
        }
    })
    
}
