$(document).ready(function() {
  // Muestra menú lateral en side nav
  $('.button-collapse').sideNav();

  // Selecciona elementos
  var area = $('#text-post');
  var publish = $('#btn-post');
  var containerPost = $('#container-post');
  var publishPhoto = $('#send-photo');

  // Añade evento al botón 'publish' para crear posts
  $(publish).on('click', function(event) {
    // Creamos elementos    
    var comment = $(area).val();
    var infoUser = 
      '<div class="row">' + 
        '<div class="col s2 m2">' + 
          '<img class="circle responsive-img valign-wrapper user-post" src="../assets/images/user-data/user.jpg" alt="foto del usuario">' +
        '</div>' +
        '<div class="col s10 m10">' + 
          '<label for="user-post" class="black-text">' +
            '<h5>Hanna Dick</h5>' + infoHour +
          '</label>' +
        '</div>' + 
      '</div>';
    var hora = moment().format('LLL');
    var infoHour = '<p>' + hora + '</p>';
    var textPost = 
      '<div class="card-content">' +
        '<p class="col s12 m12">' + comment + '</p>' +
      '</div>';
    var buttons =
      '<div class="card-action right-align">' +
        '<a href="#">' +
          '<i class="material-icons red-text lighten-3-text">favorite_border</i>' +
        '</a>' +
        '<a href="#">' +
          '<i class="material-icons red-text lighten-3-text">comment</i>' +
        '</a>' +
        '<a href="#">' +
          '<i class="material-icons red-text lighten-3-text">share</i>' +
        '</a>' +
      '</div>';
    
    if ($(area).val()) {
      var containerNewPost = '<div class="row"><div class="col s12 m12"><div class="card">' + infoUser + textPost + buttons + '</div></div></div>';
      
      $(containerPost).prepend(containerNewPost);

      $(area).val('');
      $(area).focus();
    } 
    // else {
    //   $(this).attr('disabled', 'true');
    // }
  });

  // Añade evento al botón 'publishPhoto' para crear posts
  /*$(publishPhoto).on('click', function(event) {
    // Creamos elementos    
    var comment = $(area).val();
    var infoUser = 
      '<div class="row">' + 
        '<div class="col s2 m2">' + 
          '<img class="circle responsive-img valign-wrapper user-post" src="../assets/images/user-data/user.jpg" alt="foto del usuario">' +
        '</div>' +
        '<div class="col s10 m10">' + 
          '<label for="user-post" class="black-text">' +
            '<h5>Hanna Dick</h5>' + infoHour +
          '</label>' +
        '</div>' + 
      '</div>';
    var hora = moment().format('LLL');
    var infoHour = '<p>' + hora + '</p>';
    var textPost = 
      '<div class="card-content">' +
        '<p class="col s12 m12">' + comment + '</p>' +
      '</div>';
    var buttons =
      '<div class="card-action right-align">' +
        '<a href="#">' +
          '<i class="material-icons red-text lighten-3-text">favorite_border</i>' +
        '</a>' +
        '<a href="#">' +
          '<i class="material-icons red-text lighten-3-text">comment</i>' +
        '</a>' +
        '<a href="#">' +
          '<i class="material-icons red-text lighten-3-text">share</i>' +
        '</a>' +
      '</div>';
    
    if ($(area).val()) {
      var containerNewPost = '<div class="row"><div class="col s12 m12"><div class="card">' + infoUser + textPost + buttons + '</div></div></div>';
      
      $(containerPost).prepend(containerNewPost);

      $(area).val('');
      $(area).focus();
    } 
    // else {
    //   $(this).attr('disabled', 'true');
    // }
  });*/

  // genera modal
  $('.modal').modal();

  // funcion para filtrado
  var container = $('#container-posts');
  for (i = 0; i < data.length; i++) {
    var grupo = 
   '<div class="col s6 m4 l3 collection card-image card-border hoverable" data-type=' + data[i].type + ' >' + 
     '<div class="card">' +
       '<div class="card-image">' +
       '<img id="post-height" class="responsive-img modal-trigger content" data-name =' + data[i].name + ' data-image =' + data[i].image + ' data-user =' + data[i].user + ' data-description = "' + data[i].description + '" href="#modal-post" src=' + data[i].image + '>' +
     '</div>' +
     '<div class="card-content">' +
     '<p>' + data[i].name + '</p>' +
     '</div>' +
   '</div>';
    container.append(grupo);
  }
 
  $('.heart').click(function(event) {
    console.log(event.target);
    $(this).toggleClass('favorite');
  });
     
  // FILTRO DE POSTS
  $('#search-post').keyup(function() {
    var name = $(this).val().toLowerCase();
    $('.collection').hide();
    $('.collection').each(function() {
      var search = $(this).text();
      if (search.indexOf(name) !== -1) { // filtrado por nombre
        $(this).show();
      }
    });
    $('.collection').each(function() { 
      var search = $(this).text();
      var type = $(this).data('type');// filtrado por tipo
      if (type.indexOf(name) !== -1) {
        $(this).show();
      }
    });
  });
 
  // MODAL
  $('.content').click(function() {
    var name = $(this).data('name'),
      image = $(this).data('image'),
      description = $(this).data('description'),
      user = $(this).data('user');
       
    $('.name').text(name);
    $('.image').attr('src', image);
    $('.description').text(description);
    $('.user-post').attr('src', user);
  });
});