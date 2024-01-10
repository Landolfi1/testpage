const noButton = document.getElementById('noButton');

noButton.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  
  // Generar un número aleatorio para mover el botón "No"
  const xPos = Math.random() * (window.innerWidth - noButton.clientWidth);
  const yPos = Math.random() * (window.innerHeight - noButton.clientHeight);
  
  // Mover el botón "No" a la nueva posición
  noButton.style.position = 'absolute';
  noButton.style.left = xPos + 'px';
  noButton.style.top = yPos + 'px';
});
