window.addEventListener('load', function() {
  // alert('hola');
  var tablaDeBaseDatos = firebase.database().ref('Imagenes');
  $('#inputPhoto').change(function(event) {
    // alert('funcionando');
    if (this.files && this.files[0]) {
      // alert('hooogggi');
      var archivo = new FileReader();
      archivo.onload = function(event) {
        tablaDeBaseDatos.push({
          urlLarge: event.target.result,
        });
        // Visualizar la imagen en la etiqueta img
        // $('#img').attr('src', event.target.result);
      };
      archivo.readAsDataURL(this.files[0]);
    }
  });

  tablaDeBaseDatos.on('value', function(snapshot) {
    // alert('hoooi');
    $('#divImagenes').html(''); // Limpiamos el contenedor de imagenes
    snapshot.forEach(function(event) {
      console.log(event.target);
      var objeto = event.val();
      if (objeto.url !== null) {
        // Agregamos las imagenes que se encuentran en la base de datos
        $('#divImagenes').prepend(
          '<div class="card">' + 
            '<div class=" card-image">' +
              '<img  class="img-height" src="' + objeto.urlLarge + '"/>' + 
            '</div>' +
          '</div>' + 
          '<div class="card-action right-align">' +
            '<a href="#">' +
            '<i class="material-icons def-color heart">favorite</i>' +
            '</a>' +
            '<a href="#">' +
            '<i class="material-icons def-color">comment</i>' +
            '</a>' +
            '<a href="#">' +
            '<i class="material-icons def-color">share</i>' +
            '</a>' +
          '</div>'
        );
      }
    });
  });
});

/* function begin() {
  var tablaDeBaseDatos = firebase.database().ref('Imagenes');
  $('#inputPhoto').change(function(event) {
    // alert('funcionando');
    if (this.files && this.files[0]) {
      // alert('hooogggi');
      var archivo = new FileReader();
      archivo.onload = function(event) {
        tablaDeBaseDatos.push({
          urlLarge: event.target.result,
        });
        // Visualizar la imagen en la etiqueta img
        // $('#img').attr('src', event.target.result);
      };
      archivo.readAsDataURL(this.files[0]);
    }
  });

  tablaDeBaseDatos.on('value', function(snapshot) {
    // alert('hoooi');
    $('#divImagenes').html(''); // Limpiamos el contenedor de imagenes
    snapshot.forEach(function(event) {
      console.log(event.target);
      var objeto = event.val();
      if (objeto.url !== null) {
        // Agregamos las imagenes que se encuentran en la base de datos
        $('#divImagenes').prepend('<img src="' + objeto.urlLarge + '"/>');
      }
    });
  });
};*/