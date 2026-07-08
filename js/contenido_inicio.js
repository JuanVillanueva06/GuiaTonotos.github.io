const cards = document.querySelectorAll('.mural-board');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

let currentIndex = 0;
let totalCards = cards.length;
let autoPlayInterval;

// Función principal que actualiza las clases
function updateCarousel() {
    // 1. Limpiar todas las clases primero
    cards.forEach(card => {
        card.classList.remove('active', 'prev', 'next');
    });

    // 2. Calcular índices (circular)
    let prevIndex = (currentIndex - 1 + totalCards) % totalCards;
    let nextIndex = (currentIndex + 1) % totalCards;

    // 3. Asignar las clases a las tarjetas correspondientes
    cards[currentIndex].classList.add('active');
    cards[prevIndex].classList.add('prev');
    cards[nextIndex].classList.add('next');
}

// Función para avanzar o retroceder
function moveSlide(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalCards;
    } else {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    }
    updateCarousel();
    resetAutoPlay(); // Reiniciar el contador automático si el usuario hace clic
}

// Configurar el movimiento automático (pasa cada 4 segundos)
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        moveSlide('next');
    }, 4000);
}

// Reiniciar el contador automático
function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

// Eventos de los botones
btnNext.addEventListener('click', () => moveSlide('next'));
btnPrev.addEventListener('click', () => moveSlide('prev'));

// Iniciar el carrusel
updateCarousel();
startAutoPlay();

