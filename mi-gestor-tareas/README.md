📝 Gestor de Tareas API

📋 Descripción
Aplicación web interactiva para gestionar tareas (ToDos) que se conecta a una API REST falsa (JSONPlaceholder). Permite crear, visualizar y organizar tareas con validación en tiempo real y una interfaz amigable.

🚀 Instrucciones de Uso
Simplemente abre el archivo `index.html` en cualquier navegador moderno

✨ Funcionalidades Implementadas
    ✅ Gestión de Tareas
    Ver ToDos: Carga automática de 10 tareas al iniciar

    Crear nuevas tareas: Formulario con validación en tiempo real

    Visualización diferenciada: Tareas completadas vs pendientes

    Orden inteligente: Nuevas tareas aparecen al inicio de la lista

    🛡️ Validaciones Avanzadas
    Título requerido: Campo obligatorio con mensaje de error visual

    UserId válido: Debe ser número mayor a 0

    Feedback inmediato: Errores mostrados en los mismos campos

    Validación múltiple: Revisa todos los campos antes de enviar

    🎨 Interfaz de Usuario
    Estado de carga: Muestra "Cargando..." mientras obtiene datos

    Indicadores visuales:

    ✅ Tareas completadas (fondo verde)

    ⬜ Tareas pendientes (fondo blanco)

    Mensajes de confirmación: Alertas para operaciones exitosas

    ⚡ Experiencia de Usuario
    Botón inteligente: Se deshabilita durante peticiones HTTP

    Restauración automática: Los campos de error se limpian al interactuar

    Lista acumulativa: Las tareas no se pierden al agregar nuevas

    🔧 Tecnologías Utilizadas
    HTML5: Estructura semántica

    CSS3: Estilos responsivos y animaciones

    JavaScript ES6+: Lógica de la aplicación

    Fetch API: Comunicación asíncrona con servidor

    JSONPlaceholder: API REST falsa para desarrollo