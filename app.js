import { bRegistroTarea } from "./registro.js";

const bNuevaTarea = document.getElementById("newTarea");
const espacioNuevatarea = document.getElementById("espacioNewTarea");

const registerUser = document.getElementById("registrarUser");

bNuevaTarea.addEventListener("click", ()=>{
    bRegistroTarea(espacioNuevatarea)
})

registerUser.addEventListener("click", ()=>{
    
})
