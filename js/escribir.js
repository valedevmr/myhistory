
import {revisarTema,guardar,listarHistorias} from './mymodule.js';

revisarTema();


const btn_listar = document.querySelector(".listar");
const btnGuardar = document.querySelector("#guardar");

//atento al evento click sobre el elemento con id =  guardar
btnGuardar.addEventListener("click",guardar)
//atento al evento clcik con el elemento class = listar
btn_listar.addEventListener("click", listarHistorias);







