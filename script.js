
//Descargar CV
function descargarCV() {
    alert('¡Gracias por tu interés! En un proyecto real, aquí se descarga mi CV.');
    console.log('CV clickeado');
}


// Efecto click
document.addEventListener('DOMContentLoaded', function() {
    const botonesRedes = document.querySelectorAll('.mis-redes a');
    
    botonesRedes.forEach(function(boton) {
        boton.addEventListener('click', function(evento) {
  
            boton.style.transform = 'scale(0.95)';
            setTimeout(function() {
                boton.style.transform = 'scale(1)';
            }, 150);
        });
    });
});


