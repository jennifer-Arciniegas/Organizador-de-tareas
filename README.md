# Organizador de Tareas

Un organizador de tareas basado en la web que permite a los usuarios registrarse, iniciar sesión y crear tareas mediante modales. Las tareas pueden moverse entre estados (pendiente, en proceso, terminada) mediante **drag-and-drop** o menús desplegables, y los datos se almacenan en `localStorage`. Incluye notificaciones para registro exitoso, botones de cancelar en todos los modales, y una interfaz moderna con Tailwind CSS.

## Características

- **Registro de Usuarios:**  
  Regístrate mediante un modal con nombre, edad, usuario y contraseña. Se muestra una notificación al crear un usuario.

- **Inicio de Sesión:**  
  Inicia sesión mediante un modal con usuario y contraseña para acceder a tus tareas.

- **Gestión de Tareas:**  
  Crea tareas en un modal con título, descripción, imagen (URL), fechas de inicio y límite, y estado. Incluye botones "Crear" y "Cancelar".

- **Drag-and-Drop:**  
  Arrastra tareas entre las columnas de estado (Pendiente, En Proceso, Terminadas) para cambiar su estado.

- **Persistencia:**  
  Los datos de usuarios y tareas se almacenan en `localStorage`, persistiendo entre sesiones.

- **Interfaz:**  
  Diseño responsivo con Tailwind CSS, tres modales para registro, inicio de sesión y creación de tareas, notificaciones visuales y retroalimentación visual para drag-and-drop.

- **Seguridad de Sesión:**  
  Las tareas solo son visibles para el usuario conectado. Un botón "Cerrar Sesión" aparece tras iniciar sesión y las tareas se ocultan al cerrar sesión.

## Instalación

1. Clona el repositorio.
2. Asegúrate de que los archivos estén en las ubicaciones correctas.
3. Abre `index.html` en un navegador o usa un servidor local (por ejemplo, **Live Server** en VS Code).

## Uso

- **Registrarse:**  
  Haz clic en "Registrarse" para abrir el modal, completa el formulario (nombre, edad, usuario, contraseña) y haz clic en "Registrarse" para guardar, o en "Cancelar" para cerrar. Verás una notificación de éxito.

- **Iniciar Sesión:**  
  Haz clic en "Iniciar Sesión" para abrir el modal, ingresa usuario y contraseña, y haz clic en "Iniciar Sesión" para acceder, o en "Cancelar" para cerrar.

- **Crear Tareas:**  
  Con la sesión iniciada, haz clic en "Nueva Tarea" para abrir el modal, completa el formulario y haz clic en "Crear" para guardar, o "Cancelar" para cerrar sin guardar. Las tareas aparecerán en la columna correspondiente (Pendiente, En Proceso, Terminadas).

### Mover Tareas

- **Drag-and-Drop:**  
  Arrastra una tarea a otra columna para cambiar su estado.

- **Menú Desplegable:**  
  Usa el menú en cada tarea para cambiar su estado.

- **Cerrar Sesión:**  
  Haz clic en "Cerrar Sesión" (visible tras iniciar sesión) para ocultar las tareas y volver al estado inicial.

## Tecnologías

- **HTML/CSS/JavaScript:**  
  Estructura, estilo y lógica del cliente.

- **Tailwind CSS:**  
  Framework de CSS para un diseño moderno y responsivo.

- **localStorage:**  
  Almacenamiento de datos en el navegador para persistencia.

- **HTML5 Drag and Drop API:**  
  Para la funcionalidad de arrastrar y soltar tareas.

