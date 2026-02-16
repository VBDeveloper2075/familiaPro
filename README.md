# 🏠 Familia Pro

Una aplicación web moderna para la organización y gestión familiar. Diseñada para crecer junto con las necesidades de tu familia.

![Version](https://img.shields.io/badge/version-2.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📋 Descripción

**Familia Pro** es un centro de organización familiar completo que facilita la gestión del día a día del hogar. Con una interfaz moderna y amigable, permite a todos los miembros de la familia mantenerse organizados y coordinados.

## ✨ Características Principales

### 🛒 Lista de Compras
- ✅ Añade productos con nombre y cantidad
- ✅ Marca productos como comprados
- ✅ Estadísticas en tiempo real
- ✅ Almacenamiento local persistente
- ✅ Interfaz intuitiva y rápida

### 📝 Notas Familiares
- ✅ Crea notas con títulos y contenido
- ✅ Categorías personalizadas (General, Importante, Recordatorio, Compras, Salud)
- ✅ Filtros por categoría
- ✅ Diseño tipo tarjetas para fácil visualización
- ✅ Marca temporal automática

### ✅ Gestor de Tareas del Hogar
- ✅ Organiza tareas con prioridades (Alta, Media, Baja)
- ✅ Asigna responsables a cada tarea
- ✅ Fechas de vencimiento con alertas visuales
- ✅ Seguimiento de tareas completadas
- ✅ Estadísticas detalladas de progreso

### 📄 Acceso Rápido a Documentos
- ✅ Botón directo al documento familiar de Google Docs
- ✅ Apertura en nueva pestaña

## 🚀 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos personalizados
- **Tailwind CSS** - Framework de utilidades CSS
- **JavaScript ES6+** - Lógica de aplicación
- **LocalStorage API** - Persistencia de datos

## 📁 Estructura del Proyecto

```
familiaPro/
├── index.html              # Página principal (Dashboard)
├── compras.html            # [Legacy] Página antigua
├── README.md               # Documentación del proyecto
├── pages/                  # Páginas de funcionalidades
│   ├── compras.html       # Lista de compras
│   ├── notas.html         # Notas familiares
│   └── tareas.html        # Gestor de tareas
├── js/                    # Archivos JavaScript
│   ├── main.js           # Script principal del dashboard
│   ├── compras.js        # Lógica de lista de compras
│   ├── notas.js          # Lógica de notas
│   └── tareas.js         # Lógica de tareas
└── css/                   # Estilos personalizados
    └── styles.css        # Hojas de estilo adicionales
```

## 🔧 Instalación y Uso

### Opción 1: Uso Local

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/VBDeveloper2075/familiaPro.git
   cd familiaPro
   ```

2. **Abre el archivo principal:**
   - Simplemente abre `index.html` en tu navegador preferido
   - No requiere servidor web ni instalación de dependencias

### Opción 2: Servidor Local (Opcional)

Si prefieres usar un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx serve

# Con PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

## 💡 Cómo Usar

### Dashboard Principal
Al abrir la aplicación, verás un dashboard con:
- Tarjetas de acceso a cada funcionalidad
- Estadísticas rápidas de tus listas
- Fecha y hora actual
- Acceso directo al documento familiar

### Lista de Compras
1. Ingresa el nombre del producto y la cantidad
2. Haz clic en "Agregar"
3. Marca productos como comprados con el checkbox
4. Elimina productos individuales o limpia toda la lista

### Notas Familiares
1. Escribe un título y contenido para tu nota
2. Selecciona una categoría
3. Usa los filtros para ver notas específicas
4. Elimina notas cuando ya no las necesites

### Gestor de Tareas
1. Describe la tarea a realizar
2. Asigna un responsable (opcional)
3. Establece la prioridad y fecha de vencimiento
4. Marca tareas como completadas
5. Limpia tareas completadas cuando lo desees

## 🎨 Características de Diseño

- **Responsive Design**: Funciona perfectamente en móviles, tablets y escritorio
- **Tema Moderno**: Colores suaves con gradientes atractivos
- **Animaciones Suaves**: Transiciones y efectos hover elegantes
- **Iconos Descriptivos**: Emojis para mejor identificación visual
- **Accesibilidad**: Controles claros y estados visuales definidos

## 💾 Almacenamiento de Datos

Todos los datos se guardan localmente en el navegador usando `localStorage`:
- **shoppingList**: Lista de compras
- **notesList**: Notas familiares
- **tasksList**: Tareas del hogar

> ⚠️ **Nota importante**: Los datos se guardan en el navegador. Si limpias los datos del navegador o usas modo incógnito, los datos se perderán.

## 🔮 Roadmap - Próximas Funcionalidades

- [ ] 📅 **Calendario Familiar**: Eventos y citas importantes
- [ ] 💰 **Gestor de Gastos**: Control de presupuesto familiar
- [ ] 🍽️ **Planificador de Comidas**: Menús semanales y recetas
- [ ] 📞 **Directorio de Contactos**: Contactos importantes de la familia
- [ ] 🔔 **Sistema de Notificaciones**: Recordatorios y alertas
- [ ] 👥 **Perfiles de Usuario**: Personalización por miembro familiar
- [ ] 📊 **Reportes y Estadísticas**: Análisis de uso y productividad
- [ ] ☁️ **Sincronización en la Nube**: Backup y acceso multiplataforma
- [ ] 📱 **PWA (Progressive Web App)**: Instalable como app móvil
- [ ] 🌙 **Modo Oscuro**: Tema oscuro para la vista

## 🤝 Contribuciones

Este es un proyecto familiar en constante evolución. Las sugerencias y mejoras son bienvenidas:

1. Haz fork del proyecto
2. Crea una rama para tu función (`git checkout -b feature/NuevaFuncion`)
3. Commit tus cambios (`git commit -m 'Añade nueva función'`)
4. Push a la rama (`git push origin feature/NuevaFuncion`)
5. Abre un Pull Request

## 📝 Changelog

### v2.0 (Actual) - 2026
- ✅ Dashboard principal con navegación
- ✅ Sistema de Lista de Compras completo
- ✅ Sistema de Notas Familiares con categorías
- ✅ Gestor de Tareas con prioridades
- ✅ Estructura de proyecto profesional
- ✅ Estadísticas en tiempo real
- ✅ Diseño responsive mejorado

### v1.0 - 2024
- ✅ Botón básico con redirección a Google Docs
- ✅ Diseño inicial con Tailwind CSS

## 🐛 Reporte de Bugs

Si encuentras algún error o tienes sugerencias:
1. Abre un [Issue en GitHub](https://github.com/VBDeveloper2075/familiaPro/issues)
2. Describe el problema detalladamente
3. Incluye capturas de pantalla si es posible

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍👩‍👧‍👦 Sobre el Proyecto

**Familia Pro** nace de la necesidad de tener un lugar centralizado para la organización familiar. Es desarrollado con amor para familias que buscan simplificar su día a día.

---

## 📞 Contacto https://si-cb-vendes-mejor.com.ar

- **Repositorio**: [github.com/VBDeveloper2075/familiaPro](https://github.com/VBDeveloper2075/familiaPro)
- **Issues**: [github.com/VBDeveloper2075/familiaPro/issues](https://github.com/VBDeveloper2075/familiaPro/issues)

---

<div align="center">

**🏠 "Un proyecto que crece con la familia" ✨**

Hecho con ❤️ para familias organizadas

[⬆ Volver arriba](#-familia-pro)

</div>
