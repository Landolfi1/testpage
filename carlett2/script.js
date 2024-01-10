const slider = document.getElementById('nivelInteres');
const body = document.body;
const mensajeError = document.getElementById('mensajeError');

function actualizarColorFondo(valor) {
  if (valor >= 60) {
    body.style.backgroundColor = '#4CAF50'; // Verde
  } else if (valor >= 20) {
    body.style.backgroundColor = '#FFD700'; // Amarillo
  } else {
    body.style.backgroundColor = '#FF0000'; // Rojo
  }
}

actualizarColorFondo(parseInt(slider.value));

slider.addEventListener('input', function() {
  const valor = parseInt(slider.value);
  document.getElementById('valorInteres').textContent = valor;
  actualizarColorFondo(valor);
});

function continuar() {
  const valor = parseInt(slider.value);

  if (valor > 90) {
    // Redirigir a otra página si el valor es mayor a 90
    window.location.href = '/carlett3/carlett3.html';
  } else {
    mensajeError.textContent = 'Pa seguir el interés debe ser mayor a 90';
    mensajeError.style.display = 'block'; // Mostrar el mensaje de error
    mensajeError.classList.remove('shake-animation');
    void mensajeError.offsetWidth; // Truco para reiniciar la animación
    mensajeError.classList.add('shake-animation');
  }
}
