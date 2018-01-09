$(document).ready(function() {
  $('.button-collapse').sideNav();
  var area = document.getElementById('texto');
  var boton = document.getElementById('boton');
  var lista = document.getElementById('nuevoEspacio');
  var restante = document.getElementById('restante');

  boton.addEventListener('click',showText);
  area.addEventListener('keyup',caracteres);
  area.addEventListener('keyup',autoSize);

  // Función para mostrar el tweet publicado
  function  showText() {

    if(area.value) {

      var li = document.createElement('li');
      var p = document.createElement('p');
      p.classList.add('hours');

      li.textContent = area.value;
      p.textContent = addTime();
      lista.appendChild(li);
      li.appendChild(p);

      area.value = '';
    }
  }

});