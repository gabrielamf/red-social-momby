$(document).ready(function() {
  $('.button-collapse').sideNav();

  var containerPost = $('.card');
  var area = $('#area-post');
  var publish = $('#btn-post');

  $(publish).on('click', function() {
    if (area.val()) {
      var textPost = $('<p/>', {
        'class': 'text-post'
      });
      $(containerPost).append(textPost);
      textPost.html();
    }
  });

  // button write
  var elem = $('.fixed-action-btn');
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
