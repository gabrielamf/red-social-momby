$( document ).ready(function(){
  $(".button-collapse").sideNav();

  //button write
  var elem = $('.fixed-action-btn');

  $('elem').floatingActionButton();
  var instance = M.FloatingActionButton.init(elem, {
    direction: 'left',
    hoverEnabled: false
    });

});