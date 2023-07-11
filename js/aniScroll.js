// Función para verificar si el elemento está visible en el viewport
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return rect.top <= 0;
    
}
  // Función para manejar el evento de scroll
function handleScroll() {
    var element = document.querySelector('.cont-sobremi');
    var element2 = document.querySelector('.cont-perfil')
    
    if (isElementInViewport(element)) {
        element2.classList.add('animacion-perfil');
    } else {
        element2.classList.remove('animacion-perfil');
    }
}

  // Escuchar el evento de scroll
window.addEventListener('scroll', handleScroll);