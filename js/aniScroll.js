// Función para verificar si el elemento está visible en el viewport
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return rect.top <= 0;
}

// Función para manejar el evento de scroll
function handleScroll() {
  var element = document.querySelector('.cont-sobremi');
  var element2 = document.querySelector('.cont-perfil');
  
  if (isElementInViewport(element) && !element2.classList.contains('no-animar')) {
      element2.classList.add('animacion-perfil');
      element2.classList.add('no-animar'); // Agregar la clase de control
  }
}

// Escuchar el evento de scroll
window.addEventListener('scroll', handleScroll);
