<<<<<<< HEAD
// Configuración y datos 
const personalities = {
    sarcastic: { name: '😏 Sarcástico', emoji: '😏' },
    dramatic: { name: '🎭 Dramático', emoji: '🎭' },
    cheerful: { name: '😄 Optimista', emoji: '😄' },
    poet: { name: '📝 Poeta', emoji: '📝' },
    millennial: { name: '💅 Millennial', emoji: '💅' },
    grandpa: { name: '🧓 Abuelo Regañón', emoji: '🧓' },
    coach: { name: '💪 Coach Motivacional', emoji: '💪' },
    witch: { name: '🧙‍♀️ Bruja del Clima', emoji: '🧙‍♀️' },
    influencer: { name: '📸 Influencer Fitness', emoji: '📸' },
    scientist: { name: '🔬 Científico Loco', emoji: '🔬' }
};

// Comentarios por personalidad y condición climática - ¡EXPANDIDOS!
=======
// CONFIGURACION Y DATOS DE PERSONALIDADES
const personalities = {
    sarcastic: { name: 'Sarcástico', emoji: '😏' },
    dramatic: { name: 'Dramático', emoji: '🎭' },
    cheerful: { name: 'Optimista', emoji: '😄' },
    poet: { name: 'Poeta', emoji: '📝' },
    millennial: { name: 'Millennial', emoji: '💅' },
    grandpa: { name: 'Abuelo Regañón', emoji: '🧓' },
    coach: { name: 'Coach Motivacional', emoji: '💪' },
    witch: { name: 'Bruja del Clima', emoji: '🧙‍♀️' },
    influencer: { name: 'Influencer Fitness', emoji: '📸' },
    scientist: { name: 'Científico Loco', emoji: '🔬' }
};

// COMENTARIOS POR PERSONALIDAD Y CLIMA
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
const comments = {
    sarcastic: {
        clear: "Qué sorpresa, el sol decidió aparecer. ¿Milagro o coincidencia? 🙄",
        clouds: "Nubes... porque el cielo también necesita sus días grises. Como tú los lunes.",
        rain: "Llueve. Perfecto momento para quedarse en casa y cuestionar decisiones de vida. ☔",
        snow: "Nieva. La naturaleza decidió hacer cosplay de Frozen. ❄️",
        thunderstorm: "Tormenta eléctrica. Hasta el cielo tiene más drama que tu ex. ⚡",
        hot: "Hace un calor que ni el infierno lo aprobaría. Hidratarse o morir. 🔥",
        cold: "Hace tanto frío que hasta los pingüinos piden abrigo. 🐧"
    },
    dramatic: {
        clear: "¡El astro rey ilumina la tierra con su magnificencia dorada! ☀️✨",
        clouds: "Velos grises danzan en el teatro celestial, susurrando secretos antiguos...",
        rain: "Las lágrimas del cielo caen como diamantes líquidos sobre la tierra sedienta. 💎",
        snow: "¡El invierno despliega su manto de pureza cristalina! ❄️👑",
        thunderstorm: "¡Los dioses libran épicas batallas en las alturas! ⚡🌩️",
        hot: "El fuego celestial abrasa la tierra con pasión desenfrenada. 🔥💫",
        cold: "El aliento gélido del invierno conquista cada rincón del mundo. 🧊"
    },
    cheerful: {
        clear: "¡Qué día tan perfecto para sonreír! El sol está de buen humor ☀️😊",
        clouds: "Las nubes parecen algodones de azúcar en el cielo. ¡Qué bonito! ☁️",
        rain: "¡Lluvia! Perfecta para saltar en charcos y sentirse niño otra vez 🌧️💦",
        snow: "¡Nieve! Es como si el mundo fuera un cuento de hadas ❄️✨",
        thunderstorm: "¡Qué espectáculo natural tan increíble! La naturaleza es asombrosa ⚡🌈",
        hot: "¡Calorcito rico! Perfecto para helados y terrazas al sol 🍦☀️",
        cold: "¡Fresquito! Ideal para abrazos, mantitas y chocolate caliente ☕🤗"
    },
    poet: {
        clear: "El sol pinta versos dorados en el lienzo azul del día...",
        clouds: "Nubes viajeras escriben poemas efímeros en el pergamino celeste...",
        rain: "Cada gota es una estrofa que cae del cielo en verso libre...",
        snow: "Copos de nieve, palabras blancas que el invierno susurra al viento...",
        thunderstorm: "El trueno recita odas mientras los relámpagos iluminan metáforas...",
        hot: "El calor es un soneto ardiente que abraza cada verso del día...",
        cold: "El frío teje haikus cristalinos en el silencio del alba..."
    },
    millennial: {
        clear: "Literal el sol está siendo un mood hoy. ¿Alguien dijo vitamina D? ☀️✨",
        clouds: "Nubes aesthetic para mis stories. El cielo está en su era indie 📸",
        rain: "It's giving main character moment bajo la lluvia 🌧️💅",
        snow: "Snow day = excuse para no salir de casa. Self-care queen ❄️👑",
        thunderstorm: "La tormenta tiene más drama que mi timeline de Twitter ⚡📱",
        hot: "Hace tanto calor que mi rímel ya está crying. Send help 🆘💄",
        cold: "Frío nivel 'necesito 5 capas y un café grande'. Winter is not cute ❄️☕"
    },
    grandpa: {
        clear: "En mis tiempos el sol calentaba de verdad, no como ahora que está todo raro... ☀️👴",
        clouds: "Mira esas nubes, seguro va a cambiar el tiempo. Mi rodilla nunca miente. ☁️🦴",
        rain: "¡Te lo dije! Sabía que iba a llover. Deberías haberme hecho caso y traer paraguas. ☔😤",
        snow: "En el 78 nevó tanto que no podíamos salir de casa por 3 días. Esto no es nada. ❄️📰",
        thunderstorm: "¡Esa tormenta sí que es de verdad! Como las de antes. Ahora todo es más suave. ⚡💪",
        hot: "Este calor no es nada comparado con el verano del 85. ¡Ese sí que era calor! 🔥🏜️",
        cold: "¿Frío? ¡Ja! Cuando yo era joven caminaba 5km en la nieve para ir al colegio. 🧊🚶‍♂️"
    },
    coach: {
        clear: "¡PERFECTO! Este sol es tu momento para brillar. ¡Dale que se puede! ☀️💪",
        clouds: "Las nubes no van a detener tu entrenamiento. ¡Vamos, que tú puedes más! ☁️🏃‍♀️",
        rain: "La lluvia es solo agua. ¡Los campeones entrenan bajo cualquier condición! ☔🏆",
        snow: "¡Este frío va a activar tu metabolismo! ¡Hora de quemar calorías! ❄️🔥",
        thunderstorm: "¡La tormenta externa no puede con tu fuerza interna! ¡A por todas! ⚡⚡",
        hot: "¡Este calor va a hacerte sudar las toxinas! ¡Hidratación y a darle! 🔥💦",
        cold: "¡El frío es tu amigo! ¡Activa la termogénesis! ¡Tu cuerpo es una máquina! 🧊💪"
    },
    witch: {
        clear: "El astro dorado revela secretos ocultos... Los hechizos de luz son más poderosos hoy. ☀️🔮",
        clouds: "Las nubes susurran encantamientos antiguos... Siento magia en el aire. ☁️✨",
        rain: "Las lágrimas celestiales alimentan mis pociones... Momento perfecto para rituales. ☔🧪",
        snow: "Los cristales de hielo traen mensajes del reino invernal... ¡Qué poderoso! ❄️❄️",
        thunderstorm: "¡Los elementos desatados! ¡Mi poder se magnifica con cada rayo! ⚡🧙‍♀️",
        hot: "El fuego elemental arde intenso... Mis encantamientos de llama son invencibles. 🔥🕯️",
        cold: "El viento helado trae visiones... Los espíritus del invierno me hablan. 🧊👻"
    },
    influencer: {
        clear: "OMG este sunshine es perfect para mi morning workout! #VitaminD #Blessed ☀️💪",
        clouds: "Cloudy vibes pero we're still getting that outdoor cardio! #NoExcuses ☁️🏃‍♀️",
        rain: "Rain or shine, we train! Indoor HIIT session coming up! #Dedication ☔🏠",
<<<<<<< HEAD
        snow: "Snow day = time perfecto for some hot yoga! Namaste beautiful souls! ❄️🧘‍♀️",
        thunderstorm: "Storm energy = powerful meditación vibes! Sesión de Grounding necesaria! ⚡🧘",
        hot: "This heat me da vida! Perfect for that detox sweat session! 🔥💦",
        cold: "Cold therapy vibes! Time to boost el metabolismo! 🧊🔥"
=======
        snow: "Snow day = perfect time for some hot yoga! Namaste beautiful souls! ❄️🧘‍♀️",
        thunderstorm: "Storm energy = powerful meditation vibes! Grounding session activated! ⚡🧘",
        hot: "This heat is giving me life! Perfect for that detox sweat session! 🔥💦",
        cold: "Cold therapy vibes! Time to boost that metabolism naturally! 🧊🔥"
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
    },
    scientist: {
        clear: "¡Fascinante! La radiación solar directa alcanza 1000W/m². ¡Perfecto para mis experimentos! ☀️🔬",
        clouds: "Interesante formación de cúmulos... La humedad relativa debe estar aumentando. ☁️📊",
        rain: "¡Precipitación! Momento ideal para medir el pH del agua de lluvia. ¡Eureka! ☔🧪",
        snow: "¡Cristales hexagonales cayendo! Cada copo es único, ¡qué maravilla molecular! ❄️🔬",
        thunderstorm: "¡Descargas eléctricas de 30,000 amperios! ¡La atmósfera está cargada! ⚡⚗️",
        hot: "Temperatura elevada activando la evapotranspiración. ¡Mis plantas de laboratorio lo adoran! 🔥🌱",
        cold: "Baja temperatura ralentizando las reacciones químicas... ¡Perfecto para conservar muestras! 🧊🧪"
    }
};

<<<<<<< HEAD
// Iconos del clima
=======
// ICONOS DE FONT AWESOME PARA CADA CONDICION CLIMATICA
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
const weatherIcons = {
    clear: 'fas fa-sun',
    clouds: 'fas fa-cloud',
    rain: 'fas fa-cloud-rain',
    snow: 'fas fa-snowflake',
    thunderstorm: 'fas fa-bolt'
};

<<<<<<< HEAD
// CONFIGURACIÓN DE LA API REAL - ACTUALIZADA
const API_CONFIG = {
    API_KEY: '4ff3513f03471d115f9889e5ec25eb37', 
=======
// CONFIGURACION DE LA API - CAMBIO: Ahora incluye tu API key real
const API_CONFIG = {
    API_KEY: '4ff3513f03471d115f9889e5ec25eb37',
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
    BASE_URL: 'https://api.openweathermap.org/data/2.5/weather',
    FORECAST_URL: 'https://api.openweathermap.org/data/2.5/forecast'
};

<<<<<<< HEAD
// Variables globales
let currentWeather = null;
let currentPersonality = 'sarcastic';
let currentForecastData = null;
let hasData = false; 

// Elementos del DOM - ACTUALIZADOS CON EFECTOS
=======
// VARIABLES GLOBALES
let currentWeather = null;
let currentPersonality = 'sarcastic';
let currentForecastData = null;
let hasData = false; // CAMBIO: Controla si mostramos layout centrado o 2 columnas
let activeEffects = [];

// ELEMENTOS DEL DOM
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
const elements = {
    app: document.getElementById('app'),
    cityInput: document.getElementById('city-input'),
    personalitySelect: document.getElementById('personality-select'),
    fetchBtn: document.getElementById('fetch-weather-btn'),
    btnText: document.getElementById('btn-text'),
    loadingSpinner: document.getElementById('loading-spinner'),
    weatherDisplay: document.getElementById('weather-display'),
    weatherCity: document.getElementById('weather-city'),
    weatherIcon: document.getElementById('weather-icon'),
    weatherTemp: document.getElementById('weather-temp'),
    personalityText: document.getElementById('personality-text'),
    humidity: document.getElementById('humidity'),
    windSpeed: document.getElementById('wind-speed'),
    visibility: document.getElementById('visibility'),
<<<<<<< HEAD
    // Elementos de pronóstico
    forecastDisplay: document.getElementById('forecast-display'),
    forecastCards: document.getElementById('forecast-cards'),
    tempCanvas: document.getElementById('temp-canvas'),
    // 🔥 EFECTOS VISUALES
=======
    forecastDisplay: document.getElementById('forecast-display'),
    forecastCards: document.getElementById('forecast-cards'),
    tempCanvas: document.getElementById('temp-canvas'),
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
    weatherEffects: document.getElementById('weather-effects'),
    rainEffect: document.getElementById('rain-effect'),
    snowEffect: document.getElementById('snow-effect'),
    lightningEffect: document.getElementById('lightning-effect'),
    sunRays: document.getElementById('sun-rays'),
    floatingClouds: document.getElementById('floating-clouds')
};

<<<<<<< HEAD
// FUNCIÓN PARA CAMBIAR LAYOUT
=======
// CAMBIO: Nueva función para controlar el layout centrado vs 2 columnas
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
function updateLayout() {
    if (hasData) {
        elements.app.classList.remove('centered');
        elements.app.classList.add('with-data');
<<<<<<< HEAD
        console.log('🎯 Layout: Cambiado a 2 columnas');
    } else {
        elements.app.classList.remove('with-data');
        elements.app.classList.add('centered');
        console.log('🎯 Layout: Modo centrado');
    }
}

// SISTEMA DE EFECTOS VISUALES ÉPICOS
let activeEffects = [];

function clearAllEffects() {
    activeEffects.forEach(effect => {
        clearInterval(effect);
    });
=======
        console.log('Layout: 2 columnas activado');
    } else {
        elements.app.classList.remove('with-data');
        elements.app.classList.add('centered');
        console.log('Layout: Modo centrado');
    }
}

// SISTEMA DE EFECTOS VISUALES
function clearAllEffects() {
    activeEffects.forEach(effect => clearInterval(effect));
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
    activeEffects = [];
    
    elements.rainEffect.classList.add('hidden');
    elements.snowEffect.classList.add('hidden');
    elements.lightningEffect.classList.add('hidden');
    elements.sunRays.classList.add('hidden');
    elements.floatingClouds.classList.add('hidden');
    
    elements.rainEffect.innerHTML = '';
    elements.snowEffect.innerHTML = '';
    elements.lightningEffect.innerHTML = '';
}

function startRainEffect() {
<<<<<<< HEAD
    console.log('🌧️ Iniciando efecto de lluvia...');
=======
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
    elements.rainEffect.classList.remove('hidden');
    
    const createRaindrop = () => {
        const raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
        raindrop.style.left = Math.random() * 100 + '%';
        raindrop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
<<<<<<< HEAD
        raindrop.style.opacity = Math.random() * 0.6 + 0.4;
        
        elements.rainEffect.appendChild(raindrop);
        
        setTimeout(() => {
            if (raindrop.parentNode) {
                raindrop.parentNode.removeChild(raindrop);
            }
=======
        elements.rainEffect.appendChild(raindrop);
        
        setTimeout(() => {
            if (raindrop.parentNode) raindrop.parentNode.removeChild(raindrop);
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
        }, 1000);
    };
    
    const rainInterval = setInterval(createRaindrop, 50);
    activeEffects.push(rainInterval);
}

function startSnowEffect() {
<<<<<<< HEAD
    console.log('❄️ Iniciando efecto de nieve...');
    elements.snowEffect.classList.remove('hidden');
    
    const snowflakeSymbols = ['❄', '❅', '❆', '✦', '✧', '❄️'];
=======
    elements.snowEffect.classList.remove('hidden');
    const snowflakeSymbols = ['❄', '❅', '❆', '✦', '✧'];
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
    
    const createSnowflake = () => {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
<<<<<<< HEAD
        snowflake.style.fontSize = (Math.random() * 0.8 + 0.8) + 'rem';
        snowflake.style.opacity = Math.random() * 0.8 + 0.2;
        
        elements.snowEffect.appendChild(snowflake);
        
        setTimeout(() => {
            if (snowflake.parentNode) {
                snowflake.parentNode.removeChild(snowflake);
            }
=======
        elements.snowEffect.appendChild(snowflake);
        
        setTimeout(() => {
            if (snowflake.parentNode) snowflake.parentNode.removeChild(snowflake);
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
        }, 5000);
    };
    
    const snowInterval = setInterval(createSnowflake, 200);
    activeEffects.push(snowInterval);
}

function startLightningEffect() {
<<<<<<< HEAD
    console.log('⚡ Iniciando efecto de rayos...');
=======
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
    elements.lightningEffect.classList.remove('hidden');
    
    const createLightning = () => {
        const flash = document.createElement('div');
        flash.className = 'lightning-flash';
        elements.lightningEffect.appendChild(flash);
        
<<<<<<< HEAD
        if (navigator.vibrate) {
            navigator.vibrate([50, 100, 50]);
        }
        
        setTimeout(() => {
            if (flash.parentNode) {
                flash.parentNode.removeChild(flash);
            }
=======
        if (navigator.vibrate) navigator.vibrate([50, 100, 50]);
        
        setTimeout(() => {
            if (flash.parentNode) flash.parentNode.removeChild(flash);
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
        }, 200);
    };
    
    const lightningInterval = setInterval(() => {
<<<<<<< HEAD
        if (Math.random() < 0.3) {
            createLightning();
        }
=======
        if (Math.random() < 0.3) createLightning();
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
    }, 2000);
    
    activeEffects.push(lightningInterval);
}

function startSunRaysEffect() {
<<<<<<< HEAD
    console.log('☀️ Iniciando rayos de sol...');
=======
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
    elements.sunRays.classList.remove('hidden');
}

function startCloudEffect() {
<<<<<<< HEAD
    console.log('☁️ Iniciando nubes flotantes...');
=======
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
    elements.floatingClouds.classList.remove('hidden');
}

function startHeatWaveEffect() {
<<<<<<< HEAD
    console.log('🌊 Iniciando ondas de calor...');
    
=======
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
    const heatWaves = document.createElement('div');
    heatWaves.className = 'heat-waves';
    heatWaves.id = 'heat-waves-effect';
    elements.weatherEffects.appendChild(heatWaves);
    
    const heatTimeout = setTimeout(() => {
        const heatElement = document.getElementById('heat-waves-effect');
<<<<<<< HEAD
        if (heatElement && heatElement.parentNode) {
            heatElement.parentNode.removeChild(heatElement);
        }
=======
        if (heatElement && heatElement.parentNode) heatElement.parentNode.removeChild(heatElement);
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
    }, 30000);
    
    activeEffects.push(heatTimeout);
}

function activateWeatherEffects(condition, temperature) {
    clearAllEffects();
<<<<<<< HEAD
    
    const weatherType = getWeatherType(condition, temperature);
    
    console.log(`🎨 Activando efectos para: ${weatherType}`);
    
=======
    const weatherType = getWeatherType(condition, temperature);
    
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
    switch(weatherType) {
        case 'rain':
            startRainEffect();
            startCloudEffect();
            break;
        case 'snow':
            startSnowEffect();
            break;
        case 'thunderstorm':
            startRainEffect();
            startLightningEffect();
            startCloudEffect();
            break;
        case 'clear':
            startSunRaysEffect();
            break;
        case 'clouds':
            startCloudEffect();
            break;
        case 'hot':
            startSunRaysEffect();
            startHeatWaveEffect();
            break;
        case 'cold':
            startCloudEffect();
            break;
<<<<<<< HEAD
        default:
            console.log('🌤️ Clima sin efectos especiales');
    }
}

// FUNCIÓN PARA OBTENER PRONÓSTICO DE 5 DÍAS
=======
    }
}

// FUNCIONES DE API - Obtener datos del clima real
async function fetchRealWeather(city) {
    const url = `${API_CONFIG.BASE_URL}?q=${city}&appid=${API_CONFIG.API_KEY}&units=metric&lang=es`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
        if (response.status === 404) throw new Error('Ciudad no encontrada');
        if (response.status === 401) throw new Error('API Key inválida');
        throw new Error('Error del servidor: ' + response.status);
    }
    
    const data = await response.json();
    
    return {
        city: data.name,
        country: data.sys.country,
        temperature: Math.round(data.main.temp),
        condition: mapWeatherCondition(data.weather[0].main.toLowerCase()),
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed * 3.6),
        visibility: data.visibility ? Math.round(data.visibility / 1000) : 10
    };
}

>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
async function fetchForecast(city) {
    const url = `${API_CONFIG.FORECAST_URL}?q=${city}&appid=${API_CONFIG.API_KEY}&units=metric&lang=es`;
    const response = await fetch(url);
    
<<<<<<< HEAD
    try {
        console.log('📅 Obteniendo pronóstico de 5 días...');
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Error al obtener pronóstico: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('✅ Pronóstico recibido:', data);
        
        const dailyForecasts = processForecastData(data.list);
        return dailyForecasts;
        
    } catch (error) {
        console.error('❌ Error fetching forecast:', error);
        throw error;
    }
=======
    if (!response.ok) throw new Error('Error al obtener pronóstico');
    
    const data = await response.json();
    return processForecastData(data.list);
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
}

function processForecastData(forecastList) {
    const dailyData = {};
    
    forecastList.forEach(item => {
        const date = new Date(item.dt * 1000);
        const dayKey = date.toDateString();
        
        if (!dailyData[dayKey]) {
            dailyData[dayKey] = {
                date: date,
                temps: [],
                conditions: []
            };
        }
        
        dailyData[dayKey].temps.push(item.main.temp);
        dailyData[dayKey].conditions.push(item.weather[0].main.toLowerCase());
    });
    
<<<<<<< HEAD
    const dailyForecasts = Object.values(dailyData).slice(0, 5).map(day => {
=======
    return Object.values(dailyData).slice(0, 5).map(day => {
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
        const avgTemp = Math.round(day.temps.reduce((a, b) => a + b) / day.temps.length);
        const maxTemp = Math.round(Math.max(...day.temps));
        const minTemp = Math.round(Math.min(...day.temps));
        
        const conditionCounts = {};
        day.conditions.forEach(c => conditionCounts[c] = (conditionCounts[c] || 0) + 1);
        const mostCommon = Object.keys(conditionCounts).reduce((a, b) => 
            conditionCounts[a] > conditionCounts[b] ? a : b
        );
        
        return {
            date: day.date,
            dayName: getDayName(day.date),
            avgTemp,
            maxTemp,
            minTemp,
            condition: mapWeatherCondition(mostCommon)
        };
    });
}

function getDayName(date) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) return 'Hoy';
    if (date.toDateString() === tomorrow.toDateString()) return 'Mañana';
    
    const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    return days[date.getDay()];
}

<<<<<<< HEAD
function displayForecast(forecastData) {
    currentForecastData = forecastData;
    
    elements.forecastCards.innerHTML = '';
    
    forecastData.forEach((day, index) => {
        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.style.animationDelay = `${0.1 * index}s`;
        
        const iconClass = weatherIcons[day.condition] || 'fas fa-cloud';
        
        card.innerHTML = `
            <div class="forecast-day">${day.dayName}</div>
            <div class="forecast-icon">
                <i class="${iconClass}"></i>
            </div>
            <div class="forecast-temp">${day.maxTemp}°</div>
            <div class="forecast-temp-min">${day.minTemp}°</div>
        `;
        
        elements.forecastCards.appendChild(card);
    });
    
    drawTemperatureChart(forecastData);
    elements.forecastDisplay.classList.remove('hidden');
}

function drawTemperatureChart(forecastData) {
    const canvas = elements.tempCanvas;
    const ctx = canvas.getContext('2d');
    
    const containerWidth = canvas.parentElement.offsetWidth - 40;
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
        canvas.width = Math.min(350, containerWidth);
        canvas.height = 120;
    } else if (window.innerWidth < 1024) {
        canvas.width = Math.min(600, containerWidth);
        canvas.height = 150;
    } else {
        canvas.width = Math.min(800, containerWidth);
        canvas.height = 180;
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (forecastData.length === 0) return;
    
    const padding = isMobile ? 25 : 35;
    const chartWidth = canvas.width - (padding * 2);
    const chartHeight = canvas.height - (padding * 2);
    
    const temps = forecastData.map(d => d.avgTemp);
    const minTemp = Math.min(...temps) - 2;
    const maxTemp = Math.max(...temps) + 2;
    const tempRange = maxTemp - minTemp;
    
    const points = forecastData.map((day, index) => {
        const x = padding + (index * chartWidth / (forecastData.length - 1));
        const y = padding + chartHeight - ((day.avgTemp - minTemp) / tempRange * chartHeight);
        return { x, y, temp: day.avgTemp, day: day.dayName };
    });
    
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = isMobile ? 2 : 3;
    ctx.font = isMobile ? '11px Arial' : '14px Arial';
    ctx.textAlign = 'center';
    
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    
    for (let i = 1; i < points.length; i++) {
        const prevPoint = points[i - 1];
        const currentPoint = points[i];
        const midX = (prevPoint.x + currentPoint.x) / 2;
        
        ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, midX, (prevPoint.y + currentPoint.y) / 2);
        ctx.quadraticCurveTo(currentPoint.x, currentPoint.y, currentPoint.x, currentPoint.y);
    }
    
    ctx.stroke();
    
    points.forEach(point => {
        ctx.beginPath();
        const pointRadius = isMobile ? 3 : 5;
        ctx.arc(point.x, point.y, pointRadius, 0, 2 * Math.PI);
        ctx.fill();
        
        const textOffset = isMobile ? -12 : -15;
        ctx.fillText(`${point.temp}°`, point.x, point.y + textOffset);
    });
}

function resizeCanvas() {
    if (elements.forecastDisplay && !elements.forecastDisplay.classList.contains('hidden')) {
        const forecastData = getCurrentForecastData();
        if (forecastData) {
            drawTemperatureChart(forecastData);
        }
    }
}

function getCurrentForecastData() {
    return currentForecastData;
}

async function fetchRealWeather(city) {
    const url = `${API_CONFIG.BASE_URL}?q=${city}&appid=${API_CONFIG.API_KEY}&units=metric&lang=es`;
    
    try {
        console.log('🌐 Haciendo petición a:', url.replace(API_CONFIG.API_KEY, 'API_KEY_HIDDEN'));
        
        const response = await fetch(url);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Ciudad no encontrada. Intenta con otra ciudad.');
            } else if (response.status === 401) {
                throw new Error('API Key inválida. Verifica tu configuración.');
            } else {
                throw new Error(`Error del servidor: ${response.status}`);
            }
        }
        
        const data = await response.json();
        console.log('✅ Datos recibidos:', data);
        
        return {
            city: data.name,
            country: data.sys.country,
            temperature: Math.round(data.main.temp),
            condition: mapWeatherCondition(data.weather[0].main.toLowerCase()),
            description: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: Math.round(data.wind.speed * 3.6),
            visibility: data.visibility ? Math.round(data.visibility / 1000) : 10,
            pressure: data.main.pressure,
            feelsLike: Math.round(data.main.feels_like)
        };
    } catch (error) {
        console.error('❌ Error fetching weather:', error);
        throw error;
    }
}

function mapWeatherCondition(openWeatherCondition) {
    const conditionMap = {
=======
function mapWeatherCondition(condition) {
    const map = {
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
        'clear': 'clear',
        'clouds': 'clouds',
        'rain': 'rain',
        'drizzle': 'rain',
        'snow': 'snow',
        'thunderstorm': 'thunderstorm',
        'mist': 'clouds',
        'fog': 'clouds',
        'haze': 'clouds'
    };
    return map[condition] || 'clouds';
}

<<<<<<< HEAD
=======
// FUNCIONES DE DISPLAY Y UI
// CAMBIO: displayWeather ahora activa el layout de 2 columnas
function displayWeather(weatherData) {
    currentWeather = weatherData;
    hasData = true; // CAMBIO: Activamos el flag de datos
    updateLayout(); // CAMBIO: Actualizamos el layout a 2 columnas
    
    const emoji = personalities[currentPersonality].emoji;
    elements.weatherCity.textContent = `${weatherData.city}, ${weatherData.country} ${emoji}`;
    elements.weatherIcon.className = `weather-icon ${weatherIcons[weatherData.condition] || 'fas fa-cloud'}`;
    elements.weatherTemp.textContent = `${weatherData.temperature}°C`;
    elements.personalityText.textContent = getWeatherComment(weatherData.condition, weatherData.temperature, currentPersonality);
    elements.humidity.textContent = `${weatherData.humidity}%`;
    elements.windSpeed.textContent = `${weatherData.windSpeed} km/h`;
    elements.visibility.textContent = `${weatherData.visibility} km`;
    
    updateBackground(weatherData.condition, weatherData.temperature);
    activateWeatherEffects(weatherData.condition, weatherData.temperature);
    
    elements.weatherDisplay.classList.remove('hidden');
}

function displayForecast(forecastData) {
    currentForecastData = forecastData;
    elements.forecastCards.innerHTML = '';
    
    forecastData.forEach((day) => {
        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.innerHTML = `
            <div class="forecast-day">${day.dayName}</div>
            <div class="forecast-icon"><i class="${weatherIcons[day.condition]}"></i></div>
            <div class="forecast-temp">${day.maxTemp}°</div>
            <div class="forecast-temp-min">${day.minTemp}°</div>
        `;
        elements.forecastCards.appendChild(card);
    });
    
    drawTemperatureChart(forecastData);
    elements.forecastDisplay.classList.remove('hidden');
}

// CAMBIO: Gráfico ahora es responsive y se ajusta al tamaño de pantalla
function drawTemperatureChart(data) {
    const canvas = elements.tempCanvas;
    const ctx = canvas.getContext('2d');
    
    const isMobile = window.innerWidth < 768;
    canvas.width = isMobile ? 350 : 600;
    canvas.height = isMobile ? 120 : 150;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const padding = 30;
    const chartWidth = canvas.width - (padding * 2);
    const chartHeight = canvas.height - (padding * 2);
    
    const temps = data.map(d => d.avgTemp);
    const minTemp = Math.min(...temps) - 2;
    const maxTemp = Math.max(...temps) + 2;
    const tempRange = maxTemp - minTemp;
    
    const points = data.map((day, i) => ({
        x: padding + (i * chartWidth / (data.length - 1)),
        y: padding + chartHeight - ((day.avgTemp - minTemp) / tempRange * chartHeight),
        temp: day.avgTemp
    }));
    
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = 3;
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.stroke();
    
    points.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillText(p.temp + '°', p.x, p.y - 10);
    });
}

>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
function getWeatherType(condition, temperature) {
    if (temperature > 30) return 'hot';
    if (temperature < 5) return 'cold';
    return condition;
}

function getWeatherComment(condition, temperature, personality) {
    const type = getWeatherType(condition, temperature);
    return comments[personality][type] || comments[personality][condition] || "El clima es... climático";
}

function updateBackground(condition, temperature) {
<<<<<<< HEAD
    const weatherClasses = ['clear', 'clouds', 'rain', 'snow', 'thunderstorm', 'hot', 'cold'];
    weatherClasses.forEach(cls => elements.app.classList.remove(cls));
    
    const weatherType = getWeatherType(condition, temperature);
    elements.app.classList.add(weatherType);
}

function displayWeather(weatherData) {
    currentWeather = weatherData;
    
    // MARCAR QUE TENEMOS DATOS Y ACTUALIZAR LAYOUT
    hasData = true;
    updateLayout();
    
    const personalityEmoji = personalities[currentPersonality].emoji;
    const cityDisplay = weatherData.country 
        ? `${weatherData.city}, ${weatherData.country} ${personalityEmoji}`
        : `${weatherData.city} ${personalityEmoji}`;
    
    elements.weatherCity.textContent = cityDisplay;
    
    const iconClass = weatherIcons[weatherData.condition] || 'fas fa-cloud';
    elements.weatherIcon.className = `weather-icon ${iconClass}`;
    
    elements.weatherTemp.textContent = `${weatherData.temperature}°C`;
    
    const comment = getWeatherComment(weatherData.condition, weatherData.temperature, currentPersonality);
    elements.personalityText.textContent = comment;
    
    elements.humidity.textContent = `${weatherData.humidity}%`;
    elements.windSpeed.textContent = `${weatherData.windSpeed} km/h`;
    elements.visibility.textContent = `${weatherData.visibility} km`;
    
    updateBackground(weatherData.condition, weatherData.temperature);
    
    // ACTIVAR EFECTOS VISUALES
    activateWeatherEffects(weatherData.condition, weatherData.temperature);
    
    elements.weatherDisplay.classList.remove('hidden');
    
    console.log('✅ Clima mostrado:', weatherData);
}

=======
    const classes = ['clear', 'clouds', 'rain', 'snow', 'thunderstorm', 'hot', 'cold'];
    classes.forEach(c => elements.app.classList.remove(c));
    elements.app.classList.add(getWeatherType(condition, temperature));
}

// EVENTO PRINCIPAL - Obtener clima al hacer clic en el botón
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
async function fetchWeather() {
    const city = elements.cityInput.value.trim();
    if (!city) {
        alert('Por favor, ingresa una ciudad');
        return;
    }
    
    elements.fetchBtn.disabled = true;
    elements.btnText.classList.add('hidden');
    elements.loadingSpinner.classList.remove('hidden');
    
    try {
<<<<<<< HEAD
        console.log('🌤️ Obteniendo clima actual...');
=======
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
        const weatherData = await fetchRealWeather(city);
        const forecastData = await fetchForecast(city);
        
<<<<<<< HEAD
        // Mostrar datos del clima actual (esto activa el layout de 2 columnas)
        displayWeather(weatherData);
        
        // Mostrar pronóstico de 5 días
        displayForecast(forecastData);
        
        console.log('🎉 ¡Clima y pronóstico obtenidos con éxito!');
        
    } catch (error) {
        console.error('💥 Error:', error.message);
        alert(`❌ Error: ${error.message}`);
        
=======
        displayWeather(weatherData); // CAMBIO: Esto activa el layout de 2 columnas
        displayForecast(forecastData);
    } catch (error) {
        alert('Error: ' + error.message);
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
    } finally {
        elements.fetchBtn.disabled = false;
        elements.btnText.classList.remove('hidden');
        elements.loadingSpinner.classList.add('hidden');
    }
}

function updatePersonalityComment() {
    if (currentWeather) {
        const comment = getWeatherComment(currentWeather.condition, currentWeather.temperature, currentPersonality);
        elements.personalityText.textContent = comment;
        
<<<<<<< HEAD
        const personalityEmoji = personalities[currentPersonality].emoji;
        const cityDisplay = currentWeather.country 
            ? `${currentWeather.city}, ${currentWeather.country} ${personalityEmoji}`
            : `${currentWeather.city} ${personalityEmoji}`;
        elements.weatherCity.textContent = cityDisplay;
=======
        const emoji = personalities[currentPersonality].emoji;
        elements.weatherCity.textContent = `${currentWeather.city}, ${currentWeather.country} ${emoji}`;
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
    }
}

// EVENT LISTENERS
elements.fetchBtn.addEventListener('click', fetchWeather);

elements.personalitySelect.addEventListener('change', (e) => {
    currentPersonality = e.target.value;
    updatePersonalityComment();
});

elements.cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') fetchWeather();
});

<<<<<<< HEAD
// Inicialización - CON EFECTOS, RESPONSIVE Y LAYOUT INTELIGENTE
=======
// INICIALIZACION - Se ejecuta al cargar la página
// CAMBIO: Iniciamos en modo centrado, sin datos
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
document.addEventListener('DOMContentLoaded', () => {
    currentPersonality = elements.personalitySelect.value;
    hasData = false; // CAMBIO: Iniciamos sin datos
    updateLayout(); // CAMBIO: Activamos layout centrado
    
<<<<<<< HEAD
    // 🎯 Inicializar en modo centrado
    hasData = false;
    updateLayout();
    
    // Inicializar sistema de efectos
    console.log('🎨 Sistema de efectos visuales listo');
    
    // 📱 Event listeners para responsive
    window.addEventListener('resize', () => {
        resizeCanvas();
        // Mantener el layout correcto en resize
        updateLayout();
    });
    
    // NO cargar datos automáticamente, esperar interacción del usuario
    console.log('✅ Listo para obtener clima real con efectos épicos, diseño responsive y layout inteligente!');
    
    // Cleanup al cerrar la página
    window.addEventListener('beforeunload', () => {
        clearAllEffects();
        window.removeEventListener('resize', resizeCanvas);
=======
    window.addEventListener('resize', () => {
        if (currentForecastData) drawTemperatureChart(currentForecastData);
        updateLayout();
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
    });
    
    window.addEventListener('beforeunload', clearAllEffects);
    
    console.log('App lista - Estado inicial: centrado');
});

<<<<<<< HEAD
// Función simulada de respaldo (por si la API falla)
function simulateWeatherData(cityName) {
    const conditions = ['clear', 'clouds', 'rain', 'thunderstorm'];
    const temps = [15, 22, 8, 30, -2, 35, 18, 25, 12];
    const humidity = [45, 60, 80, 35, 70, 55];
    
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    const randomTemp = temps[Math.floor(Math.random() * temps.length)];
    const randomHumidity = humidity[Math.floor(Math.random() * humidity.length)];
    
    return {
        city: cityName,
        temperature: randomTemp,
        condition: randomCondition,
        humidity: randomHumidity,
        windSpeed: Math.floor(Math.random() * 20) + 5,
        visibility: Math.floor(Math.random() * 10) + 5
    };
}
=======
>>>>>>> c4b24b98201fa52d8ec51fd2714cf35e5248b6f0
