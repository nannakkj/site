const elementos = [
  document.getElementById('circulo1'),
  document.getElementById('circulo2'),
  document.getElementById('quadradro1'),
  document.getElementById('quadradro2'),
  document.getElementById('quadradro3'),
  document.getElementById('quadradro4')
];

const blur = document.querySelector('.blur');

elementos.forEach(elemento => {
  const idHoverido = 'hoverido-' + elemento.id;
  const hoverido = document.getElementById(idHoverido);
  let timeoutId = null;

  elemento.addEventListener('mouseenter', () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    blur.classList.add('ativo');
    blur.style.zIndex = '3';

    document.querySelectorAll('.hoverido.ativo').forEach(h => {
      h.classList.remove('ativo');
    });

    if (hoverido) {
      hoverido.classList.add('ativo');
    }

    elemento.style.zIndex = '4';
  });

  elemento.addEventListener('mouseleave', () => {
    blur.classList.remove('ativo');

    if (hoverido) {
      hoverido.classList.remove('ativo');
    }

    timeoutId = setTimeout(() => {
      blur.style.zIndex = '0';
      elemento.style.zIndex = '2';
      timeoutId = null;
    }, 300);
  });
});
