function updateClocks() {
    const mexicoTime = new Date().toLocaleString('es-MX', {
        timeZone: 'America/Mexico_City',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    const germanyTime = new Date().toLocaleString('de-DE', {
        timeZone: 'Europe/Berlin',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    document.getElementById('mexico-clock').innerText = mexicoTime;
    document.getElementById('germany-clock').innerText = germanyTime;
}

// Actualizar los relojes cada segundo
setInterval(updateClocks, 1000);

// Cargar relojes al inicio
window.onload = updateClocks;

// Detectar cuando el usuario hace scroll
window.addEventListener('scroll', function() {
    const mainContent = document.querySelector('.main-content');
    const heroHeight = document.querySelector('.hero').offsetHeight;

    // Comprobar si el usuario ha hecho scroll más allá de la sección "hero"
    if (window.scrollY > heroHeight - 100) {
        document.body.classList.add('scrolled');  // Añadir la clase 'scrolled'
    } else {
        document.body.classList.remove('scrolled');  // Eliminar la clase 'scrolled' si volvemos arriba
    }

    

});


