document.getElementById('startButton').addEventListener('click', function() {
    startExercise();
});

let columnshtml = document.getElementById("columns");
var visualInterval;
var timerInterval;
var column1Words, column2Words, column3Words;
var originalWords = [
    "Elefante", "Guitarra", "Playa", "Computadora", "Montaña", "Chocolate","Universo", "Libro", "Estrella", "Fresa", "Camino", "Perro","Aventura", "Canción", "Bosque", "Cielo", "Amor", "Piano",
    "Viaje", "Helado", "Océano", "Luna", "Sol", "Arcoiris",
    "Casa", "Flor", "Abeja", "Mariposa", "Aurora", "Nube",
    "Relámpago", "Héroe", "Sonrisa", "Bailarín", "Viento", "Catarata",
    "Girasol", "Desierto", "Reloj", "Mar", "Arena", "Coral",
    "Sirena", "Nave", "Olas", "Sueño", "Despertar", "Ocaso",
    "Horizonte", "Tranquilidad", "Reflejo", "Colina", "Neblina", "Silencio","Meditación", "Árbol", "Río", "Pájaro", "Hojas", "Cascada",
    "Escalera", "Barco", "Isla", "Nieve", "Copo", "Diamante",
    "Perla", "Brisa", "Murmullo", "Estanque", "Atardecer", "Montura",
    "Estrella fugaz", "Caballo", "Niebla", "Fuego", "Trueno","Relajación","Descanso", "Paseo", "Huella", "Paraíso", "Amistad","Corazón","Recuerdo", "Música", "Inspiración", "Creación","Nacimiento", "Juventud","Niñez", "Libertad", "Refugio", "Jardín","Orquídea", "Espejo","Caverna", "Templo", "Faro", "Armonía", "Esperanza", "Cascabel", "Lágrima", "Destello", "Alba",
    "Colores", "Luz", "Cristal", "Arco", "Río", "Bosquejo", "Marea", "Constelación", "Cúpula", "Tierra", "Relato",
    "Sonido", "Travesía", "Cabaña", "Fragancia", "Nube", "Trigal",
    "Cosecha", "Bruma", "Ondas", "Espuma", "Arena", "Lluvia",
    "Alondra", "Rocío", "Eco", "Ceniza", "Raíz", "Madera",
    "Barro", "Molino", "Mirada", "Silencio", "Susurro", "Gaviota",
    "Tallo", "Floración", "Ritmo", "Sombra", "Camino", "Mirador",
    "Vigía", "Montículo", "Estalactita", "Velero", "Náufrago", "Corriente",
    "Tótem", "Huerto", "Nebulosa", "Brillante", "Estrella polar", "Constancia",
    "Serenidad", "Compás", "Rayo", "Observatorio", "Torre", "Puente",
    "Atalaya", "Caverna","Césped", "Prado", "Madera",
    "Esplendor", "Firmamento", "Golondrina", "Melodía", "Sinfonía", "Calma",
    "Bravura", "Bravura", "Viento", "Corriente", "Canoa", "Sendero", "Espejismo", "Bosquecillo", "Sierra", "Solsticio", "Equinoccio", "Viento", "Brisa", "Huracán", "Tormenta", "Lluvia", "Neblina",
    "Vapor", "Niebla", "Cielo", "Noche", "Luz", "Amanecer",
    "Sol", "Luna", "Estrella", "Cometa", "Nube", "Rayo",
    "Relámpago", "Trueno", "Río", "Corriente", "Cascada", "Lago",
    "Laguna", "Charca", "Mar", "Océano", "Marea", "Arena",
    "Duna", "Desierto", "Tierra", "Valle", "Colina", "Montaña",
    "Cumbre", "Glaciar", "Sierra", "Bosque", "Selva", "Pradera",
    "Campo", "Jardín", "Cueva", "Gruta", "Acantilado", "Risco",
    "Volcán", "Cráter", "Fumarola", "Géiser", "Pantano", "Roca",
    "Arroyo", "Sendero", "Camino", "Carretera", "Calle", "Plaza",
    "Ciudad", "Pueblo", "Aldea", "Cabaña", "Mansión", "Palacio",
    "Castillo", "Fortaleza", "Muralla", "Puente", "Túnel", "Callejón",
    "Avenida", "Mercado", "Granero", "Establo", "Viñedo", "Huerto",
    "Prado", "Pinar", "Bahía", "Costa", "Playa", "Horizonte",
    "Nieve", "Nevada", "Viento", "Frío", "Cima", "Colina",
    "Árbol", "Pino", "Cedro", "Roble", "Sauce", "Abeto",
    "Almendro", "Cerezo", "Naranjo", "Olivo", "Higuera", "Ciprés",
    "Hiedra", "Enredadera", "Rosa", "Tulipán", "Orquídea", "Girasol",
    "Dalia", "Clavel", "Violeta", "Azucena", "Jazmín", "Lirio",
    "Magnolia", "Camelia", "Hortensia", "Geranio", "Petunia", "Verbena",
    "Amapola", "Diente", "Margarita", "Caléndula", "Zinnia", "Ruda",
    "Salvia", "Romero", "Tomillo", "Albahaca", "Lavanda", "Menta",
    "Hierbabuena", "Manzanilla", "Melisa", "Poleo", "Cúrcuma", "Jengibre",
    "Canela", "Nuez", "Clavo", "Pimienta", "Café", "Cacao",
    "Vainilla", "Azúcar", "Miel", "Caramelo", "Chocolate", "Pastel",
    "Tarta", "Galleta", "Bizcocho", "Flan", "Natilla", "Crema",
    "Merengue", "Helado", "Sorbet", "Granizado", "Yogur", "Queso",
    "Pan", "Baguette", "Croissant", "Sándwich", "Ensalada", "Verduras",
    "Sopa", "Guiso", "Paella", "Arroz", "Curry", "Sushi",
    "Tempura", "Pizza", "Pasta", "Espaguetis", "Risotto", "Pollo",
    "Filete", "Estofado", "Cordero", "Pescado", "Mariscos", "Langosta",
    "Calamares", "Camarones", "Mejillones", "Ostras", "Cangrejo", "Pulpo",
    "Sardinas", "Atún", "Salmón", "Trucha", "Merluza", "Bacalao",
    "Lenguado", "Boquerones", "Cocido", "Fabada", "Tortilla", "Gazpacho",
    "Salmorejo", "Caldo", "Churros", "Crema", "Turrón", "Polvorones",
    "Mantecados", "Empanada", "Pisto", "Escalivada", "Rabo", "Jamón",
    "Chorizo", "Morcilla", "Lomo", "Queso", "Tortas", "Pan",
    "Aceitunas", "Aceite", "Vino", "Cava", "Sidra", "Sangría",
    "Horchata", "Agua", "Zumo", "Limonada", "Café", "Té",
    "Infusión", "Cerveza", "Whisky", "Ron", "Vodka", "Gin",
    "Cóctel", "Margarita", "Piña", "Mojito", "Caipirinha", "Martini",
    "Bloody", "Daiquiri", "Negroni", "Manhattan", "Old", "Mai",
    "Sazerac", "Tequila", "Brandy", "Licor", "Baileys", "Jägermeister",
    "Absenta", "Champán", "Tormenta", "Aurora", "Rayo", "Mariposa",
    "Héroe", "Sonrisa", "Bailarín", "Piano", "Beso", "Cascada",
    "Viaje", "Amor", "Caricia", "Sonido", "Viento", "Canto",
    "Sombra", "Mirada", "Calor", "Templo", "Luz", "Silencio",
    "Aroma", "Risa", "Rueda", "Canción", "Ritmo", "Poema",
    "Corazón", "Llama", "Magia", "Cielo", "Melodía", "Reflejo",
    "Palabra", "Cuento", "Pasión", "Joya", "Paz", "Estrella",
    "Ceniza", "Velo", "Espejo", "Sabor", "Plenitud", "Lago",
    "Aventura", "Desafío", "Sueño", "Escudo", "Rayo", "Salto",
    "Fuerza", "Grito", "Libertad", "Sendero", "Poesía", "Explosión",
    "Caída", "Luz", "Golpe", "Destello", "Gema", "Susurro",
    "Destino", "Pasado", "Presente", "Futuro", "Guía", "Brillo",
    "Eco", "Sombras", "Tierra", "Lejanía", "Encuentro", "Voz",
    "Llamada", "Escalera", "Amanecer", "Horizonte", "Épica", "Roca",
    "Conquista", "Colores", "Esfera", "Orilla", "Cristal", "Tejido",
    "Brisa", "Niebla", "Amanecer", "Cascada", "Palacio", "Bailarina",
    "Fábula", "Fortaleza", "Nostalgia", "Fortuna", "Rayo", "Poeta",
    "Alba", "Neblina", "Labio", "Piel", "Luz", "Olvido",
    "Sombras", "Llama", "Tierra", "Pasión", "Eco", "Viaje",
    "Silencio", "Tiempo", "Destino", "Guía", "Cuento", "Amistad",
    "Sol", "Lluvia", "Viento", "Trueno", "Frío", "Despertar",
    "Vuelo", "Recuerdo", "Leyenda", "Destello", "Aventura", "Oscuridad",
    "Fuego", "Infinito", "Relámpago", "Espejo", "Río", "Susurro"
];

function startExercise() {
    var instructionParagraphs = document.querySelectorAll('.instruction');
    for (var i = 0; i < instructionParagraphs.length; i++) {
        instructionParagraphs[i].style.display = 'none';
    }
    // Ocultar botón de inicio
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('containerInputButton').style.display = 'none';
    columnshtml.classList.remove("hidden");
    
    columnshtml.style.display = "flex";
    // Obtener la velocidad del recorrido desde el campo de entrada
    var speedInput = document.getElementById('speedInput');
    var velocidadRecorrido = parseInt(speedInput.value);
    
    // Iniciar temporizador
    startTimer();
    
    // Inicializar las palabras y el recorrido visual
    initializeWords();
    startVisualRecorrido(velocidadRecorrido);
}

function initializeWords() {
    // Barajar las palabras aleatoriamente
    originalWords = shuffle(originalWords);
    // Dividir las palabras en tres columnas
    column1Words = originalWords.slice(0, 12);
    column2Words = originalWords.slice(12, 24);
    column3Words = originalWords.slice(24, 36);

    // Mostrar las palabras en las columnas
    displayWords();
}

function shuffle(array) {
    var currentIndex = array.length, randomIndex, temporaryValue;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function displayWords() {
    var column1 = document.getElementById('column1');
    var column2 = document.getElementById('column2');
    var column3 = document.getElementById('column3');

    // Limpiar columnas
    column1.innerHTML = '';
    column2.innerHTML = '';
    column3.innerHTML = '';

    // Mostrar palabras en las columnas
    for (var i = 0; i < 12; i++) {
        column1.innerHTML += '<p>' + column1Words[i] + '</p>';
        column2.innerHTML += '<p>' + column2Words[i] + '</p>';
        column3.innerHTML += '<p>' + column3Words[i] + '</p>';
    }
}

function startVisualRecorrido(velocidadRecorrido) {
    clearInterval(visualInterval);
    var columns = document.querySelectorAll('.column p');
    var currentColumnIndex = 0;
    var currentRowIndex = 0;
    var highlightedWordIndex = -1;

    visualInterval = setInterval(function() {
        // Resetear el estilo de la palabra anteriormente resaltada
        if (highlightedWordIndex >= 0) {
            var previousWordIndex = currentColumnIndex * 12 + highlightedWordIndex;
            columns[previousWordIndex].style.backgroundColor = '';
            columns[previousWordIndex].style.fontWeight = 'normal'; // Restaurar fuente normal
        }

        // Incrementar el índice de la palabra resaltada
        highlightedWordIndex++;

        // Si se ha llegado al final de una columna, pasar a la siguiente columna
        if (highlightedWordIndex >= 12) {
            currentColumnIndex++;
            currentRowIndex = 0; // Restablecer el índice de la fila
            highlightedWordIndex = 0;

            // Si se ha llegado al final de la última columna, reiniciar el recorrido
            if (currentColumnIndex >= 3) {
                currentColumnIndex = 0;
                // Barajar las palabras nuevamente
                shuffleWords();
                // Reiniciar el índice de la palabra resaltada
                highlightedWordIndex = -1;
                clearInterval(visualInterval);
                startVisualRecorrido(velocidadRecorrido); // Reiniciar el recorrido
            }
        }

        // Asegurarse de que el índice de la fila no exceda el número de palabras en la columna
        if (currentRowIndex < 12) {
           // Resaltar la palabra actual
           var currentWordIndex = currentColumnIndex * 12 + currentRowIndex;
           columns[currentWordIndex].style.backgroundColor = '#ffc107';
           columns[currentWordIndex].style.fontWeight = 'bold'; // Aplicar fuente en negrita
           currentRowIndex++;
        }
    }, velocidadRecorrido); // Usar la velocidad del recorrido proporcionada por el usuario
}




function shuffleWords() {
    clearInterval(visualInterval);

    // Barajar las palabras nuevamente
    column1Words = shuffle(column1Words);
    column2Words = shuffle(column2Words);
    column3Words = shuffle(column3Words);

    // Mostrar las palabras en las columnas
    displayWords();
    startVisualRecorrido();
                    
}

function startTimer(){
    var timerElement = document.getElementById('timer');
    var totalTime = 300; // 5 minutos en segundos
    var minutes, seconds;
    timerInterval = setInterval(function() {
        minutes = Math.floor(totalTime / 60);
        seconds = totalTime % 60;
        timerElement.innerHTML = 'Tiempo restante: ' + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

        if (totalTime <= 0) {
            clearInterval(timerInterval);
            clearInterval(visualInterval);
            alert('¡El ejercicio ha terminado!');
            return;
        }
        totalTime--;
    }, 1000); // Actualizar
}
