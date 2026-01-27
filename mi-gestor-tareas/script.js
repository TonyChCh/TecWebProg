const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

// 1. Cargar y mostrar todos inicialmente
async function cargarTodos() {
    const container = document.getElementById('listaTodos');
    container.innerHTML = '<p class="cargando">🔄 Cargando tareas...</p>';
     try {
        const response = await fetch(`${BASE_URL}?_limit=10`);
        const todos = await response.json();
        container.innerHTML = '';
        mostrarTodos(todos);
    } catch (error) {
        container.innerHTML = '<p class="error">❌ Error cargando tareas</p>';
        console.error('Error:', error);
    }
}

// 2. Mostrar en pantalla
function mostrarTodos(todos) {
    const container = document.getElementById('listaTodos');

    todos.reverse().forEach(todo => {
        const div = document.createElement('div');
        div.className = `todo ${todo.completed ? 'completed' : ''}`;
        div.innerHTML = `
            <strong>#${todo.id}:</strong> ${todo.title}
            <label>
                ${todo.completed ? '✅ Completada' : '⬜ Pendiente'}
            </label>
        `;
        container.insertBefore(div, container.firstChild);
    });
}

// Mostrar mensaje de error
function mostrarError(elem, mensaje) {
    const elemPlaceholder = elem.placeholder;

    elem.placeholder = mensaje;
    elem.value = "";
    elem.focus();
    
    setTimeout(() => {
        elem.placeholder = elemPlaceholder;
    }, 2000);
    
    return;
}

 function validacion(titulo, userId) {
    
 }

// 3. Crear nuevo todo
async function crearTodo() {
    const titulo = document.querySelector('input#titulo');
    const userId = document.querySelector("input#userId");
    const checkbox = document.querySelector("input#completado");

    // Validación
    const tituloValor = titulo.value.trim();
    const userIdValor = userId.value.trim();
    const userIdNumero = Number(userIdValor);
    let hayError = false;

    if (!tituloValor) {
        mostrarError(titulo, "⚠️ El título es requerido");
        hayError = true;
    }
    
    if (!userIdValor) {
        mostrarError(userId, "⚠️ El userId es requerido");
        hayError = true;
    }
    
    else if (isNaN(userIdNumero)) {
        mostrarError(userId, "⚠️ Debe ser un número");
        hayError = true;
    }
    
    else if (userIdNumero < 1) {
        mostrarError(userId, "⚠️ Debe ser mayor a 0");
        hayError = true;
    }

    if (hayError) return;

    const btn = document.getElementById("btnAgregar");
    const btnTextoOriginal = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Creando...";
    
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: tituloValor,
                completed: checkbox.checked,
                userId: userIdValor
            })
        });
        
        const nuevoTodo = await response.json();
        
        // Limpiar input
        titulo.value = '';
        userId.value = '';
        checkbox.checked = false;

        mostrarTodos([nuevoTodo]);
        alert(`✅ ¡Tarea creada exitosamente!\nID: ${nuevoTodo.id}\nTítulo: "${nuevoTodo.title}"`);
    } catch (error) {
        console.error('Error creando ToDo:', error);
        alert('❌ Error creando la tarea. Intenta nuevamente.');
    } finally {
        btn.disabled = false;
        btn.textContent = btnTextoOriginal;
    }
}

// Manejo del formulario
const form = document.querySelector("form");

form.addEventListener("submit", async function (event) {
    const btn = document.getElementById("btnAgregar");
    event.preventDefault();
    btn.disabled = true;
    await crearTodo();
    btn.disabled = false;
});

// 4. Iniciar la aplicación cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    cargarTodos();
});
        