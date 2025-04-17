export function bRegistroTarea(modal) {
  modal.classList.remove("hidden");
  const form = document.getElementById("formNewTarea");
  form.reset(); // Clear form fields
  subirDatos(modal);
}

function subirDatos(modal) {
  const registrar = document.getElementById("formNewTarea");
  const cancelar = document.getElementById("cancelarTarea");

  // Handle form submission
  registrar.addEventListener(
    "submit",
    (event) => {
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
      modal.classList.add("hidden");
      renderTasks();
    },
    { once: true }
  ); // Ensure listener is added only once

  // Handle cancel button
  cancelar.addEventListener(
    "click",
    () => {
      modal.classList.add("hidden");
    },
    { once: true }
  );
}

function renderTasks() {
  const event = new Event("renderTasks");
  document.dispatchEvent(event);
}
