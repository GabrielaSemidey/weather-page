# ⛈️ Clima con Personalidad

> **El pronóstico del tiempo que realmente querías escuchar** ✨

Una aplicación web moderna e interactiva que no solo te dice el clima, sino que lo hace con **personalidad**, **humor** y **efectos visuales épicos**. Porque ¿por qué conformarse con un pronóstico aburrido cuando puedes tener uno que te haga sonreír? 😄

---

## 🌟 Características Principales

### 🎭 **10 Personalidades Únicas**
Cada personalidad interpreta el clima de manera diferente:

- **😏 Sarcástico**: *"Qué sorpresa, el sol decidió aparecer. ¿Milagro o coincidencia?"*
- **🎭 Dramático**: *"¡El astro rey ilumina la tierra con su magnificencia dorada!"*
- **😄 Optimista**: *"¡Qué día tan perfecto para sonreír!"*
- **📝 Poeta**: *"El sol pinta versos dorados en el lienzo azul del día..."*
- **💅 Millennial**: *"Literal el sol está siendo un mood hoy. ¿Alguien dijo vitamina D?"*
- **🧓 Abuelo Regañón**: *"En mis tiempos el sol calentaba de verdad..."*
- **💪 Coach Motivacional**: *"¡PERFECTO! Este sol es tu momento para brillar!"*
- **🧙‍♀️ Bruja del Clima**: *"El astro dorado revela secretos ocultos..."*
- **📸 Influencer Fitness**: *"OMG este sunshine es perfect para mi morning workout!"*
- **🔬 Científico Loco**: *"¡Fascinante! La radiación solar directa alcanza 1000W/m²!"*

### 📅 **Pronóstico Extendido**
- Predicción de **5 días** con datos reales
- **Gráfico interactivo** de tendencia de temperatura
- Tarjetas responsivas con animaciones suaves

### ⚡ **Efectos Visuales Épicos**
- **🌧️ Lluvia realista**: Gotas animadas con diferentes velocidades
- **❄️ Nieve mágica**: Copos únicos que rotan mientras caen
- **⚡ Rayos de tormenta**: Flashes dramáticos con vibración
- **☀️ Rayos solares**: Animación de rayos dorados giratorios
- **☁️ Nubes flotantes**: Movimiento realista de nubes
- **🌊 Ondas de calor**: Efecto de distorsión para temperaturas extremas

### 🌍 **Datos Reales**
- Integración con **OpenWeatherMap API**
- Información meteorológica actualizada
- Cobertura mundial de ciudades

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica moderna
- **CSS3**: Estilos avanzados con glassmorphism y animaciones
- **JavaScript ES6+**: Lógica de aplicación con async/await
- **Canvas API**: Gráficos de temperatura dibujados nativamente
- **OpenWeatherMap API**: Datos meteorológicos reales
- **Font Awesome**: Iconografía profesional
- **Responsive Design**: Compatible con todos los dispositivos

---

## ⚙️ Instalación y Configuración

### 1. **Clona el repositorio**
```bash
git clone https://github.com/tu-usuario/clima-con-personalidad.git
cd clima-con-personalidad
```

### 2. **Obtén tu API Key**
1. Visita [OpenWeatherMap](https://openweathermap.org/api)
2. Crea una cuenta gratuita
3. Obtén tu API Key

### 3. **Configura la aplicación**
Abre `script.js` y reemplaza tu API Key:
```javascript
const API_CONFIG = {
    API_KEY: 'TU_API_KEY_AQUI', // 👈 Pega tu API key aquí
    BASE_URL: 'https://api.openweathermap.org/data/2.5/weather',
    FORECAST_URL: 'https://api.openweathermap.org/data/2.5/forecast'
};
```

### 4. **Ejecuta la aplicación**

#### Opción A: Servidor Local (Recomendado)
```bash
# Usando Live Server en VS Code
# 1. Instala la extensión "Live Server"
# 2. Click derecho en index.html
# 3. "Open with Live Server"
```

#### Opción B: Navegador Directo
```bash
# Simplemente abre index.html en tu navegador
open index.html
```

---

## 📁 Estructura del Proyecto

```
clima-con-personalidad/
│
├── 📄 index.html          # Estructura HTML principal
├── 🎨 styles.css          # Estilos y animaciones
├── ⚙️ script.js           # Lógica de la aplicación
├── 📖 README.md           # Este archivo
│
├── 📁 docs/               # Documentación y capturas
│   ├── screenshot-main.png
│   ├── screenshot-rain.png
│   └── ...
│
└── 📁 assets/             # Recursos adicionales
    └── icons/
```

---

## 🔧 Personalización

### Agregar Nueva Personalidad

1. **Actualiza el objeto `personalities`**:
```javascript
const personalities = {
    // ... personalidades existentes
    tuPersonalidad: { name: '🤖 Tu Personalidad', emoji: '🤖' }
};
```

2. **Agrega los comentarios**:
```javascript
const comments = {
    // ... comentarios existentes
    tuPersonalidad: {
        clear: "Tu comentario para día soleado",
        rain: "Tu comentario para lluvia",
        // ... más condiciones
    }
};
```

3. **Actualiza el HTML**:
```html
<option value="tuPersonalidad">🤖 Tu Personalidad</option>
```

### Modificar Efectos Visuales

Los efectos están en la función `activateWeatherEffects()`. Puedes:
- Cambiar velocidades de animación
- Agregar nuevos tipos de partículas
- Modificar colores y opacidades

---

## 🐛 Solución de Problemas

### Error: "API Key inválida"
- ✅ Verifica que hayas copiado correctamente la API key
- ✅ Asegúrate de que la key esté activada (puede tomar hasta 2 horas)

### Error: "CORS"
- ✅ No abras el archivo directamente (`file://`)
- ✅ Usa un servidor local como Live Server

### Los efectos no se ven
- ✅ Verifica que tu navegador soporte CSS3 avanzado
- ✅ Asegúrate de que JavaScript esté habilitado

### Ciudad no encontrada
- ✅ Usa nombres en inglés: "New York" en lugar de "Nueva York"
- ✅ Prueba con ciudades principales primero

---

## 🤝 Contribución

¡Las contribuciones son bienvenidas! 🎉

### Cómo contribuir:

1. **Fork** el proyecto
2. **Crea una rama** para tu feature (`git checkout -b feature/nueva-personalidad`)
3. **Commit** tus cambios (`git commit -m 'Agregada personalidad de pirata'`)
4. **Push** a la rama (`git push origin feature/nueva-personalidad`)
5. **Abre un Pull Request**

---

## 👨‍💻 Autor

**Gab**
- GitHub: [@tu-usuario] (https://github.com/GabSemidey)
- LinkedIn: [Tu Perfil][(https://linkedin.com/in/tu-perfil)](https://www.linkedin.com/in/gabrielaojedasemidey/)
  
---

## ⭐ ¿Te gustó el proyecto?

Si este proyecto te fue útil o te hizo sonreír, ¡considera darle una **estrella** ⭐! 

También puedes:
- 🐛 Reportar bugs
- 💡 Sugerir nuevas características  
- 🤝 Contribuir al código
- 📢 Compartir con amigos

---

<div align="center">

**Hecho con ❤️ y mucho ☕ en 2025**

[⬆️ Volver al inicio](#️-clima-con-personalidad)

</div>
