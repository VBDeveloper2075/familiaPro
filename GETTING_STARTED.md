# 🚀 Guía de Inicio Rápido - Familia Pro

## Bienvenido a Familia Pro

Esta guía te ayudará a comenzar a usar la aplicación en minutos.

## 📦 Instalación

### Opción 1: Descarga Directa
1. Descarga o clona el repositorio
2. Abre `index.html` en tu navegador
3. ¡Listo para usar!

### Opción 2: Con Git
```bash
git clone https://github.com/VBDeveloper2075/familiaPro.git
cd familiaPro
```

Luego abre `index.html` en tu navegador preferido.

## 🎯 Primeros Pasos

### 1. Explora el Dashboard
Al abrir la aplicación, verás el dashboard principal con:
- Acceso rápido al documento familiar
- Tarjetas de funcionalidades disponibles
- Estadísticas en tiempo real

### 2. Configura tu Documento Familia Pro
Por defecto, el botón "Documento Familia Pro" redirige a un documento de ejemplo. Para usar tu propio documento:

1. Abre `index.html` en un editor de texto
2. Busca la línea con la URL del documento:
   ```javascript
   const url = "https://docs.google.com/document/d/...";
   ```
3. Reemplaza la URL con la de tu documento de Google Docs
4. Guarda el archivo

### 3. Agrega tu Primera Lista de Compras
1. Haz clic en "Lista de Compras"
2. Escribe el nombre de un producto
3. Ajusta la cantidad si es necesario
4. Haz clic en "Agregar"
5. Marca productos como comprados cuando los tengas

### 4. Crea tu Primera Nota
1. Ve a "Notas Familiares"
2. Escribe un título descriptivo
3. Agrega el contenido de la nota
4. Selecciona una categoría apropiada
5. Haz clic en "Guardar Nota"

### 5. Organiza tus Tareas
1. Accede a "Tareas del Hogar"
2. Describe la tarea a realizar
3. Asigna un responsable (opcional)
4. Establece prioridad y fecha
5. Haz clic en "Agregar Tarea"

## 💡 Consejos y Trucos

### Almacenamiento de Datos
- Todos los datos se guardan automáticamente en tu navegador
- Usa siempre el mismo navegador para acceder a tus datos
- Los datos persisten entre sesiones

### Acceso desde Múltiples Dispositivos
Para sincronizar entre dispositivos:
1. **Opción manual**: Exporta/importa datos (función futura)
2. **Opción recomendada**: Usa el documento de Google Docs como respaldo

### Respaldo de Datos
Por ahora, los datos se guardan localmente. Recomendaciones:
- Toma capturas de pantalla periódicamente
- Mantén un respaldo en el documento de Google Docs
- No limpies los datos del navegador

### Categorías de Notas
- 📌 **General**: Para notas cotidianas
- ⚠️ **Importante**: Información crítica
- ⏰ **Recordatorio**: Cosas que no debes olvidar
- 🛒 **Compras**: Relacionadas con compras
- 🏥 **Salud**: Información médica o de salud

### Prioridades de Tareas
- 🔴 **Alta**: Tareas urgentes o críticas
- 🟡 **Media**: Tareas importantes pero no urgentes
- 🟢 **Baja**: Tareas que pueden esperar

## 🌐 Acceso en Dispositivos Móviles

### Agregar a Pantalla de Inicio (iOS)
1. Abre la aplicación en Safari
2. Toca el botón de compartir
3. Selecciona "Agregar a pantalla de inicio"
4. Nombra el acceso directo "Familia Pro"

### Agregar a Pantalla de Inicio (Android)
1. Abre la aplicación en Chrome
2. Toca el menú (⋮)
3. Selecciona "Agregar a pantalla de inicio"
4. Confirma el nombre

## 🔧 Personalización

### Cambiar Colores
Los colores se pueden personalizar editando el archivo `css/styles.css`

### Agregar Miembros de Familia
En el selector de "Responsable" de tareas, edita `pages/tareas.html`:
```html
<option value="NuevoMiembro">👤 Nuevo Miembro</option>
```

### Agregar Categorías de Notas
En `pages/notas.html` y `js/notas.js`, agrega nuevas categorías siguiendo el patrón existente.

## ❓ Preguntas Frecuentes

**P: ¿Necesito conexión a internet?**
R: Solo para cargar la primera vez. Luego funciona offline (excepto el botón de Google Docs).

**P: ¿Puedo usar la aplicación en varios navegadores?**
R: Sí, pero cada navegador tendrá sus propios datos guardados.

**P: ¿Los datos están seguros?**
R: Los datos se guardan solo en tu dispositivo. Nadie más tiene acceso.

**P: ¿Cómo elimino todos mis datos?**
R: En el navegador, ve a Configuración > Privacidad > Limpiar datos de navegación > Datos de sitios web.

**P: ¿Habrá una aplicación móvil?**
R: Está en el roadmap como PWA (Progressive Web App).

## 📞 Soporte

Si tienes problemas:
1. Revisa esta guía
2. Consulta el README.md principal
3. Abre un issue en GitHub
4. Contacta al desarrollador

## 🎉 ¡Listo para Comenzar!

Ahora que conoces lo básico, explora todas las funcionalidades y organiza tu vida familiar de manera más eficiente.

---

**¿Necesitas ayuda?** Abre un issue en [GitHub](https://github.com/VBDeveloper2075/familiaPro/issues)

**¿Tienes sugerencias?** ¡Nos encantaría escucharlas!
