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


});

