const patron1 = ['red', 'green', 'red', 'green', 'red', 'green', 'red', 'green', 'red', 'green'];
const patron2 = ['blue', 'yellow', 'blue', 'yellow', 'blue', 'yellow', 'blue', 'yellow', 'blue', 'yellow'];
const patron3 = ['green', 'green', 'red', 'red', 'green', 'green', 'red', 'red', 'green', 'green'];
const patron4 = ['yellow', 'blue', 'red', 'yellow', 'blue', 'red', 'yellow', 'blue', 'red', 'yellow'];
const patron5 = ['red', 'red', 'red', 'red', 'red', 'green', 'green', 'green', 'green', 'green'];

const patrones = [patron1, patron2, patron3, patron4, patron5];

let luces = [];
let indicePatronActual = 0;
let velocidad = 1500;

function crearLuces() {
    // Esta función creará los 10 divs de luces
    const app = document.getElementById('app');

    const titulo = document.createElement('h1');
    titulo.textContent = '🎄 Luces Navideñas Animadas 🎄';
    app.appendChild(titulo);

    const contenedorLuces = document.createElement('div');
    contenedorLuces.className = 'contenedor-luces';
    app.appendChild(contenedorLuces);

    for (let i = 0; i < 10; i++) {
        const luz = document.createElement('div');
        luz.classList.add('luz');
        contenedorLuces.appendChild(luz);
        luces.push(luz);
    }
}

function actualizarLuces(patron) {
    // Esta función cambiará los colores según el patrón
    luces.forEach((luz, index) => {
        luz.style.backgroundColor = patron[index];
        luz.style.boxShadow = `0 0 10px ${patron[index]}, 0 0 20px ${patron[index]},
        0 0 40px ${patron[index]}`;
    });
}

function iniciarAnimacion() {
    // Esta función manejará el ciclo de animación
    actualizarLuces(patrones[indicePatronActual]);
    
    indicePatronActual++;
    
    if (indicePatronActual >= patrones.length) {
        indicePatronActual = 0;
    }

    tiempoAnimacion = setTimeout(iniciarAnimacion, velocidad);
}

function crearControles() {
    const app = document.getElementById('app');
    const btnPausar = document.createElement('button');
    const btnSpeed = document.createElement('button');
    // Botón pausar/reanudar la animación
    btnPausar.textContent = '⏸️ Pausar';
    btnPausar.onclick = function() {
        if (btnPausar.textContent === '⏸️ Pausar') {
            clearTimeout(tiempoAnimacion);
            btnPausar.textContent = '▶️ Reanudar';
        } else {
            iniciarAnimacion();
            btnPausar.textContent = '⏸️ Pausar';
        }
    };
    // Botón para acelerar la animación
    btnSpeed.textContent = '⚡ Acelerar';
    btnSpeed.onclick = function() {
        velocidad -= 300;
        
        if (velocidad < 300) {
            velocidad = 1500;
        }

        btnSpeed.textContent = `⚡ Acelerar (${velocidad}ms)`;

        if (btnPausar.textContent === '⏸️ Pausar') {
            clearTimeout(tiempoAnimacion);
            iniciarAnimacion();
        }
    }
    app.appendChild(btnPausar);
    app.appendChild(btnSpeed);
}

function inicializar() {
    // Esta función inicializa la aplicación
    crearLuces();
    iniciarAnimacion();
    crearControles();
}

// Iniciar la aplicación cuando cargue la página
document.addEventListener('DOMContentLoaded', inicializar); 