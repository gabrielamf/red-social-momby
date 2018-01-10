$(document).ready(function() {
  $('.button-collapse').sideNav();

  // button write
  var elem = $('.fixed-action-btn');
  $('.modal').modal();

  // funcion para filtrado
  var container = $('#container-posts');
  for (i = 0; i < data.length; i++) {
    var grupo = 
    '<div class="col s6 collection">' +
      '<img class="responsive-img modal-trigger" href="#modal-post" src=' + data[i].image + '>' +
      '<p class="">' + data[i].name + '</p>' +
    '</div>';
    container.append(grupo);
  }
	
  // filtro
  $('#search').keyup(function(event) {
    console.log(event.target);
    var name = $(this).val();
    $('.collection').hide();
    $('.collection').each(function() {
      var search = $(this).text().toLowerCase();
      if (search.indexOf(name) !== -1) {
        $(this).show();
      }
    });
  });
});
