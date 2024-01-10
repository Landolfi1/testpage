document.addEventListener('DOMContentLoaded', function() {
  const starsContainer = document.querySelector('.stars');
  const numStars = 150; // Cambia la cantidad de estrellas según tu preferencia

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}vh`; // Posición aleatoria en altura
    star.style.left = `${Math.random() * 100}vw`; // Posición aleatoria en ancho
    star.style.animationDuration = `${Math.random() * 1 + 3}s`; // Duración de brillo aleatoria
    starsContainer.appendChild(star);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const parallax = document.querySelector('.parallax');
  const content = document.querySelector('.content');

  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    // Cambiar el color de fondo a verde cuando se hace scroll
    if (scrollPosition > 0) {
      document.body.style.backgroundColor = '#00FF00'; // Cambia el fondo a verde
    } else {
      document.body.style.backgroundColor = ''; // Restaura el color de fondo predeterminado
    }
  });
});