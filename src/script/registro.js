export function bRegistroTarea(espacio) {
  const registro = document.createElement("div");
  registro.classList.add(
    "bg-sky-100",
    "rounded-lg",
    "p-6",
    "shadow-lg",
    "max-w-md",
    "mx-auto"
  );
  registro.innerHTML = `
        <form id="formNewTarea">
      <h1 class="text-xl font-bold text-center mb-4">Nueva Tarea</h1>
      <div class="grid grid-cols-2 gap-6">
        <div>
          <label for="title" class="block mb-2">Título:</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            class="w-full p-2 rounded-lg bg-gray-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div>
          <label for="description" class="block mt-4 mb-2">Descripción:</label>
          <input
            type="text"
            name="description"
            id="description"
            required
            class="w-full p-2 rounded-lg bg-gray-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>
      <label for="imagen" class="block mt-4 mb-2">Imagen (URL):</label>
      <input
        type="text"
        name="imagen"
        id="imagen"
        placeholder="URL"
        class="w-full p-2 rounded-lg bg-gray-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <div class="grid grid-cols-2 gap-6">
        <div> 
            <label for="fInicio" class="block mt-4 mb-2">Fecha de inicio:</label>
      <input
        type="date"
        name="fInicio"
        id="fInicio"
        required
        class="w-full p-2 rounded-lg bg-gray-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
        </div>
        <div>
             <label for="fFin" class="block mt-4 mb-2">Fecha límite:</label>
      <input
        type="date"
        name="fFin"
        id="fFin"
        required
        class="w-full p-2 rounded-lg bg-gray-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
        </div>
      </div>
      
     
      <label for="estadoTarea" class="block mt-4 mb-2">Estado:</label>
      <select
        name="estadoTarea"
        id="estadoTarea"
        required
        class="w-full p-2 rounded-lg bg-gray-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <option value="pendiente">Pendiente</option>
        <option value="proceso">En proceso</option>
        <option value="terminada">Finalizada</option>
      </select>
      <div class="flex justify-center mt-6 gap-4">
        <button
          type="submit"
          class="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600"
        >
          Enviar
        </button>
        <button
          type="button"
          id="cancelarTarea"
          class="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
        >
          Cancelar
        </button>
      </div>
    </form>
    `;
  espacio.appendChild(registro);
  subirDatos(registro);
  document.getElementById("cancelarTarea").addEventListener("click", () => {
    registro.style.display = "none";
  });
}

function subirDatos(registro) {
  const registrar = document.getElementById("formNewTarea");
  registrar.addEventListener("submit", (event) => {
    event.preventDefault();
    const TareasGuardadas = {
      titulo: document.getElementById("title").value,
      descripcion: document.getElementById("description").value,
      imagen: document.getElementById("imagen").value,
      fechaInicio: document.getElementById("fInicio").value,
      fechaLimite: document.getElementById("fFin").value,
      estadoTarea: document.getElementById("estadoTarea").value,
    };
    const currentUser = localStorage.getItem("currentUser");
    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (!users[currentUser]) {
      users[currentUser] = { tasks: [] };
    }
    users[currentUser].tasks.push(TareasGuardadas);
    localStorage.setItem("users", JSON.stringify(users));
    registro.style.display = "none";
    renderTasks();
  });
}

function renderTasks() {
  const event = new Event("renderTasks");
  document.dispatchEvent(event);
}
