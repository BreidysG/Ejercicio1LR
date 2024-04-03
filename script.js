document.getElementById('startButton').addEventListener('click', function() {
    startExercise();
});
let columnshtml = document.getElementById("columns")
var visualInterval;
var timerInterval;
var column1Words, column2Words, column3Words;
var originalWords = [
    "Elefante", "Guitarra", "Playa", "Computadora", "Montaña", "Chocolate",
    "Universo", "Libro", "Estrella", "Fresa", "Camino", "Perro",
    "Aventura", "Canción", "Bosque", "Cielo", "Amor", "Piano",
    "Viaje", "Helado", "Océano", "Luna", "Sol", "Arcoiris",
    "Casa", "Flor", "Abeja", "Mariposa", "Aurora", "Nube",
    "Relámpago", "Héroe", "Sonrisa", "Bailarín", "Viento", "Catarata"
];

function startExercise() {
    var instructionParagraphs = document.querySelectorAll('.instruction');
    for (var i = 0; i < instructionParagraphs.length; i++) {
        instructionParagraphs[i].style.display = 'none';
    }
    // Ocultar botón de inicio
    document.getElementById('startButton').style.display = 'none';
    columnshtml.classList.remove("hidden");
    
    columnshtml.style.display = "flex";
     // Iniciar temporizador
     startTimer()
    
    // Inicializar las palabras y el recorrido visual
    initializeWords();
    startVisualRecorrido();
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

function startVisualRecorrido() {
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
    }, 90); // Velocidad del recorrido (80ms, más lento para facilitar la visualización)
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