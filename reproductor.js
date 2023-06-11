// Definir la lista de reproducción con las canciones
var listaReproduccion = [
    "cancion1.mp3",
    "cancion2.mp3",
    "cancion3.mp3"
];

// Función para reproducir una canción aleatoria de la lista
function reproducir() {
    // Obtener un índice aleatorio para seleccionar la canción
    var indice = Math.floor(Math.random() * listaReproduccion.length);
    
    // Crear un elemento de audio
    var reproductor = document.createElement("audio");
    
    // Establecer la fuente de la canción
    reproductor.src = listaReproduccion[indice];
    
    // Reproducir la canción
    reproductor.play();
    
    // Agregar el reproductor al cuerpo del documento
    document.body.appendChild(reproductor);
}

// Función para detener la reproducción actual
function detener() {
    // Obtener todos los elementos de audio en el cuerpo del documento
    var reproductores = document.getElementsByTagName("audio");
    
    // Detener la reproducción de todos los elementos de audio
    for (var i = 0; i < reproductores.length; i++) {
        reproductores[i].pause();
        reproductores[i].currentTime = 0;
        document.body.removeChild(reproductores[i]);
    }
}

// Reproducir automáticamente al cargar la página
window.onload = reproducir;
