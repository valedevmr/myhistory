/** importar los modulos donde se implemetan la funciones de revisartemy revisar fotodeperifl.
 * varibles para obetener contenido de etiquetas
*/
import {revisarPerfil,revisarTema,obtenerperfil,cambiarTema,cambiarnombre} from './mymodule.js';  
//selecion de los selectores para lso eventos de click
const photo =  document.querySelector(".avatares");
const btn_tema = document.querySelector("#btn_tema");
const nombre = document.querySelector(".editnombre");

//revisar los temas a aplicar guadados en el locastorage
revisarPerfil(); 
revisarTema();

//eventos para obtener cambiar la foto de perfil, cambiar el tema y editar el nombre o agregar uno nuevo
photo.addEventListener('click',obtenerperfil);
btn_tema.addEventListener("click",cambiarTema);
nombre.addEventListener("click",cambiarnombre);



