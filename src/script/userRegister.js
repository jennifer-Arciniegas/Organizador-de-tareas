export function userRegister({ nombre, edad, username, contraseña }, callback) {
  const users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[username]) {
    alert("El usuario ya existe");
    return;
  }
  users[username] = {
    nombre,
    edad,
    contraseña,
    tasks: [],
  };
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", username);
  if (callback) callback();
}

export function userLogin(username, contraseña) {
  const users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[username] && users[username].contraseña === contraseña) {
    localStorage.setItem("currentUser", username);
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}

export function logout() {
  localStorage.removeItem("currentUser");
}
