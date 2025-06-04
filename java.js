
const circulo = document.getElementById('circulo1') 
const quad = document.getElementById('quadradro1');
const quad2 = document.getElementById('quadradro2');
const quad3 = document.getElementById('quadradro3');


const blur = document.querySelector('.blur');
let timeoutId = null;

circulo.addEventListener('mouseenter', () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
  
  blur.classList.add('ativo');
  blur.style.zIndex = '3';
});

circulo.addEventListener('mouseleave', () => {
  blur.classList.remove('ativo');
  
  timeoutId = setTimeout(() => {
    blur.style.zIndex = '0';
    timeoutId = null;
  }, 400); 
});

quad.addEventListener('mouseenter', () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
  
  blur.classList.add('ativo');
  blur.style.zIndex = '3';
});

quad.addEventListener('mouseleave', () => {
  blur.classList.remove('ativo');
  
  timeoutId = setTimeout(() => {
    blur.style.zIndex = '0';
    timeoutId = null;
  }, 400); 
});

quad2.addEventListener('mouseenter', () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
  
  blur.classList.add('ativo');
  blur.style.zIndex = '3';
});

quad2.addEventListener('mouseleave', () => {
  blur.classList.remove('ativo');
  
  timeoutId = setTimeout(() => {
    blur.style.zIndex = '0';
    timeoutId = null;
  }, 400); 
});

quad3.addEventListener('mouseenter', () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
  
  blur.classList.add('ativo');
  blur.style.zIndex = '3';
});

quad3.addEventListener('mouseleave', () => {
  blur.classList.remove('ativo');
  
  timeoutId = setTimeout(() => {
    blur.style.zIndex = '0';
    timeoutId = null;
  }, 400); 
});