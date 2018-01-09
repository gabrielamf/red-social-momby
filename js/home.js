$(document).ready(function() {
  $('.button-collapse').sideNav();

  // button write
  var elem = $('.fixed-action-btn');

  $('elem').floatingActionButton();
  var instance = M.FloatingActionButton.init(elem, {
    direction: 'left',
    hoverEnabled: false
  });

  // funcion para filtrado
  var container = $('#container-posts');
  for (i = 0; i < data.length; i++) {
    var grupo = 
		'<div class="row">' +
			'<div cla>'
		'</div>';
    container.append(grupo);
  };
});

'<div class="col-xs-4 photo collection text-center flip">' +
'<img class="img-responsive flip-1 content" src = ' + data[i].image + ' data-target="#imgModal" data-toggle="modal" data-name= "' + data[i].name + '" data-address= "' + data[i].address + '" data-phone= "' + data[i].phone + '" data-attention= "' + data[i].attention + '" data-type= "' + data[i].type + '" data-money= "' + data[i].money + '">' + 
'<p class="type-restaurant">' + data[i].type + '</p>' +
'<img class="img-responsive flip-2 content" src = ' + data[i].back + ' data-target="#imgModal" data-toggle="modal">' +
'</div>';