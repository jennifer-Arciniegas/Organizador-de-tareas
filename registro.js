export function bRegistroTarea(espacio){
    const registro = document.createElement("div")
    registro.classList.add("w-95", "bg-sky-100", "rounded-lg", "m-4", "p-4")
    registro.innerHTML=`
                    <form action="" id="formNewTarea">
                    <div class="flex justify-center"> 
                        <h1>tareas</h1>
                    </div>
                    <label for="title">titulo:</label>
                    <input type="text" name="title" id="title" required class="bg-gray-100 rounded-lg p-1 m-1 hover:bg-white  ">
                    <br>
                    <label for="description">Descripcion:</label>
                    <input type="text" name="description" id="description" required class="bg-gray-100 rounded-lg p-1 m-1 hover:bg-white  ">
                    <br>
                    <label for="imagen">Imagen</label>
                    <input type="text" name="imagen" id="imagen" placeholder: "url">
                    <br>
                    <label for="fInicio">Fecha de inicio</label>
                    <input type="date" name="fInicio" id="fInicio" required class="bg-gray-100 rounded-lg p-1 m-1 hover:bg-white  ">
                    <br>
                    <label for="fFin"> Fecha limite</label>
                    <input type="date" name="fFin" id="fFin" required class="bg-gray-100 rounded-lg p-1 m-1 hover:bg-white  ">   
                    <br> 
                    <select name="estadoTarea" id="estadoTarea" required class="bg-gray-100 rounded-lg p-1 m-1 hover:bg-white  ">
                        <option value="pendiente">Pendiente</option>
                        <option value="proceso">En proceso</option>
                        <option value="terminada">Finalizada</option>
                    </select>
                    <br>
                    <div class="flex justify-center">
                        <button type="submit"  class="bg-blue-300 rounded-lg p-1 m-1 hover:bg-blue-400" id="hacerRegistro">Enviar</button>
                    </div>
                </form>
    `;
    espacio.appendChild(registro)
    subirdatos(registro)
}

function subirdatos(registro){
    const registrar = document.getElementById("formNewTarea");
    registrar.addEventListener("submit", (event) =>{
        event.preventDefault();

    const TareasGuardadas={
        titulo: document.getElementById("title").value,
        descripcion: document.getElementById("description").value,
        imagen: document.getElementById("imagen").value,
        fechaInicio: document.getElementById("fInicio").value,
        fechaLimite: document.getElementById("fFin").value,
        estadoTarea: document.getElementById("estadoTarea").value
    }
    let tareas =JSON.parse(sessionStorage.getItem("formdata")) || [] //consulta las tareas para hacer un arreglo
    //envia las tareas al arreglo
    tareas.push(TareasGuardadas)
    //envio de datos al localStorage
   sessionStorage.setItem("formdata", JSON.stringify(tareas));
   registro.style.display = "none"
})
}

