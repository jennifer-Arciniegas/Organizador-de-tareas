import { bRegistroTarea } from "./registro.js";
import { userRegister, userLogin, logout } from "./userRegister.js";

const bNuevaTarea = document.getElementById("newTarea");
const espacioNuevatarea = document.getElementById("espacioNewTarea");
const registerUser = document.getElementById("registrarUser");
const iniciarSesion = document.getElementById("iniciarSesion");
const cerrarSesion = document.getElementById("cerrarSesion");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const taskSection = document.getElementById("taskSection");
const notification = document.getElementById("notification");

function showNotification() {
  notification.classList.remove("hidden");
  setTimeout(() => {
    notification.classList.add("hidden");
  }, 3000);
}

function checkLoginStatus() {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    taskSection.classList.remove("hidden");
    iniciarSesion.classList.add("hidden");
    registerUser.classList.add("hidden");
    cerrarSesion.classList.remove("hidden");
    renderTasks();
  } else {
    taskSection.classList.add("hidden");
    iniciarSesion.classList.remove("hidden");
    registerUser.classList.remove("hidden");
    cerrarSesion.classList.add("hidden");
  }
}

bNuevaTarea.addEventListener("click", () => {
  bRegistroTarea(espacioNuevatarea);
});

registerUser.addEventListener("click", () => {
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
});

iniciarSesion.addEventListener("click", () => {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
});

cerrarSesion.addEventListener("click", () => {
  logout();
  checkLoginStatus();
});

document.getElementById("formRegister").addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const username = document.getElementById("username").value;
  const contraseña = document.getElementById("contraseña").value;
  userRegister({ nombre, edad, username, contraseña }, showNotification);
  registerForm.classList.add("hidden");
  checkLoginStatus();
});

document.getElementById("formLogin").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("usernameLogin").value;
  const contraseña = document.getElementById("contraseñaLogin").value;
  userLogin(username, contraseña);
  loginForm.classList.add("hidden");
  checkLoginStatus();
});

function renderTasks() {
  const currentUser = localStorage.getItem("currentUser");
  const users = JSON.parse(localStorage.getItem("users")) || {};
  const tasks = users[currentUser]?.tasks || [];
  const espacioPendiente = document.getElementById("espacioPendiente");
  const espacioProceso = document.getElementById("espacioProceso");
  const espacioTerminadas = document.getElementById("espacioTerminadas");

  espacioPendiente.innerHTML = "";
  espacioProceso.innerHTML = "";
  espacioTerminadas.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add(
      "bg-white",
      "p-4",
      "m-2",
      "rounded-lg",
      "shadow",
      "cursor-move"
    );
    taskElement.setAttribute("draggable", "true");
    taskElement.setAttribute("data-index", index);
    taskElement.innerHTML = `
            <h3 class="font-bold text-lg">${task.titulo}</h3>
            <p>${task.descripcion}</p>
            ${
              task.imagen
                ? `<img src="${task.imagen}" alt="Task Image" class="w-24 h-24 object-cover mt-2">`
                : ""
            }
            <p class="text-sm">Inicio: ${task.fechaInicio}</p>
            <p class="text-sm">Límite: ${task.fechaLimite}</p>
            <select class="estadoTarea bg-gray-200 rounded-lg p-2 mt-2 w-full" data-index="${index}">
                <option value="pendiente" ${
                  task.estadoTarea === "pendiente" ? "selected" : ""
                }>Pendiente</option>
                <option value="proceso" ${
                  task.estadoTarea === "proceso" ? "selected" : ""
                }>En proceso</option>
                <option value="terminada" ${
                  task.estadoTarea === "terminada" ? "selected" : ""
                }>Finalizada</option>
            </select>
        `;
    if (task.estadoTarea === "pendiente") {
      espacioPendiente.appendChild(taskElement);
    } else if (task.estadoTarea === "proceso") {
      espacioProceso.appendChild(taskElement);
    } else {
      espacioTerminadas.appendChild(taskElement);
    }

    taskElement.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", index);
      taskElement.classList.add("opacity-50");
    });

    taskElement.addEventListener("dragend", () => {
      taskElement.classList.remove("opacity-50");
    });
  });

  document.querySelectorAll(".estadoTarea").forEach((select) => {
    select.addEventListener("change", (event) => {
      const index = event.target.dataset.index;
      const newState = event.target.value;
      updateTaskState(index, newState);
    });
  });
}

function updateTaskState(index, newState) {
  const currentUser = localStorage.getItem("currentUser");
  const users = JSON.parse(localStorage.getItem("users")) || {};
  users[currentUser].tasks[index].estadoTarea = newState;
  localStorage.setItem("users", JSON.stringify(users));
  renderTasks();
}

window.drop = function (event, newState) {
  event.preventDefault();
  const index = event.dataTransfer.getData("text/plain");
  updateTaskState(index, newState);
};

document.addEventListener("renderTasks", renderTasks);
checkLoginStatus();
