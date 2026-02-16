# 🤝 Guía de Contribución - Familia Pro

¡Gracias por tu interés en contribuir a Familia Pro! Esta guía te ayudará a comenzar.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
- [Configuración del Entorno](#configuración-del-entorno)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Guías de Estilo](#guías-de-estilo)
- [Commit Messages](#commit-messages)

## 📜 Código de Conducta

Este proyecto se adhiere a un código de conducta. Al participar, se espera que mantengas este código:

- Sé respetuoso y considerado
- Acepta críticas constructivas
- Enfócate en lo mejor para la comunidad
- Muestra empatía hacia otros miembros

## 🚀 ¿Cómo puedo contribuir?

### Reportar Bugs

Antes de crear un reporte de bug:
- Verifica que no exista ya un issue similar
- Asegúrate de estar usando la última versión
- Recopila información sobre el problema

Para crear un buen reporte de bug incluye:
- **Descripción clara** del problema
- **Pasos para reproducir** el comportamiento
- **Comportamiento esperado** vs comportamiento actual
- **Capturas de pantalla** si es posible
- **Entorno**: navegador, versión, sistema operativo

### Sugerir Mejoras

Para sugerir una nueva funcionalidad:
1. Abre un issue con el tag `enhancement`
2. Describe la funcionalidad deseada
3. Explica por qué sería útil
4. Proporciona ejemplos de uso

### Pull Requests

1. Fork el repositorio
2. Crea una rama desde `main`:
   ```bash
   git checkout -b feature/mi-nueva-funcionalidad
   ```
3. Realiza tus cambios
4. Commit tus cambios (ver guía de commits)
5. Push a tu fork
6. Abre un Pull Request

## 🔧 Configuración del Entorno

### Requisitos Previos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code, Sublime Text, etc.)
- Git instalado
- (Opcional) Node.js para servidor local

### Instalación

```bash
# Clona tu fork
git clone https://github.com/TU-USUARIO/familiaPro.git
cd familiaPro

# Configura el repositorio upstream
git remote add upstream https://github.com/VBDeveloper2075/familiaPro.git

# Abre en tu editor
code .
```

### Ejecutar Localmente

Simplemente abre `index.html` en tu navegador o usa un servidor local:

```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve

# Con PHP
php -S localhost:8000
```

## 💻 Proceso de Desarrollo

### Estructura del Proyecto

```
familiaPro/
├── index.html          # Dashboard principal
├── pages/              # Páginas de funcionalidades
├── js/                 # Lógica de la aplicación
├── css/                # Estilos personalizados
└── docs/               # Documentación
```

### Flujo de Trabajo

1. **Asigna o crea un issue** para trabajar en él
2. **Crea una rama** desde `main`
3. **Desarrolla** tu funcionalidad o corrección
4. **Prueba** tus cambios en múltiples navegadores
5. **Documenta** los cambios si es necesario
6. **Commit** siguiendo las convenciones
7. **Abre un PR** con descripción detallada

### Testing

Por ahora, las pruebas son manuales:

- [ ] Prueba en Chrome
- [ ] Prueba en Firefox
- [ ] Prueba en Safari (si es posible)
- [ ] Prueba en móvil (responsive)
- [ ] Verifica que el localStorage funcione
- [ ] Comprueba que no hay errores en consola

## 🎨 Guías de Estilo

### HTML

```html
<!-- Usa indentación de 4 espacios -->
<div class="container">
    <h1>Título</h1>
    <p>Párrafo</p>
</div>

<!-- Usa nombres descriptivos para IDs y clases -->
<button id="addItemBtn" class="btn-primary">Agregar</button>

<!-- Incluye atributos alt en imágenes -->
<img src="icon.png" alt="Descripción del icono">
```

### CSS

```css
/* Usa nombres de clases descriptivos en inglés */
.shopping-list-item {
    display: flex;
    padding: 1rem;
}

/* Agrupa propiedades relacionadas */
.card {
    /* Posicionamiento */
    position: relative;
    
    /* Box Model */
    display: flex;
    padding: 1rem;
    margin: 0.5rem;
    
    /* Visual */
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### JavaScript

```javascript
// Usa camelCase para variables y funciones
const shoppingList = [];

function addItemToList(item) {
    // Tu código aquí
}

// Usa const por defecto, let cuando sea necesario
const API_URL = 'https://api.example.com';
let counter = 0;

// Comenta código complejo
// Esta función calcula el total considerando descuentos
function calculateTotal(items, discount) {
    // Implementación
}

// Usa nombres descriptivos
// ❌ Mal
function calc(x, y) { }

// ✅ Bien
function calculateTotalPrice(items, taxRate) { }
```

## 📝 Commit Messages

Usa el formato de [Conventional Commits](https://www.conventionalcommits.org/):

```
tipo(alcance): descripción breve

Descripción más detallada si es necesaria.

Closes #123
```

### Tipos de Commit

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan código)
- `refactor`: Refactorización de código
- `test`: Agregar o modificar tests
- `chore`: Tareas de mantenimiento

### Ejemplos

```bash
feat(compras): agregar contador de productos

Implementa un contador visual que muestra el número total
de productos en la lista de compras.

Closes #42
```

```bash
fix(notas): corregir filtro de categorías

El filtro no funcionaba correctamente cuando se eliminaban
notas. Ahora actualiza la vista después de cada eliminación.

Fixes #37
```

## 🔍 Revisión de Código

Cuando revises un PR:

- Sé constructivo y amable
- Explica el "por qué" de tus comentarios
- Reconoce las buenas prácticas
- Sugiere alternativas cuando sea posible

## 📚 Recursos Adicionales

- [HTML Best Practices](https://github.com/hail2u/html-best-practices)
- [JavaScript Style Guide](https://github.com/airbnb/javascript)
- [CSS Guidelines](https://cssguidelin.es/)

## ❓ Preguntas

Si tienes preguntas:

1. Revisa la documentación existente
2. Busca en issues cerrados
3. Abre un nuevo issue con el tag `question`

## 🎉 Agradecimientos

¡Gracias por contribuir a hacer de Familia Pro una mejor herramienta para las familias!

---

**¿Listo para contribuir?** Encuentra un [issue bueno para empezar](https://github.com/VBDeveloper2075/familiaPro/labels/good%20first%20issue)
