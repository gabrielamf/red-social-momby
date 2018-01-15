$(document).ready(function() {
  // --------------> LOGIN <----------------------------
  // funccion para inicializar el formulario materialize
  $('select').material_select();
  $('.button-collapse').sideNav();
  $('.modal').modal();
  
  // splash
  $('#content').toggle();
  setTimeout(function() {
    $('#splash').delay().fadeOut(1000);
    $('#content').toggle();
  }, 1000);

  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyAczKOqhEEOO6n5OIs8XL4-BvaEn7QfnHg',
    authDomain: 'red-social-momby.firebaseapp.com',
    databaseURL: 'https://red-social-momby.firebaseio.com',
    projectId: 'red-social-momby',
    storageBucket: 'red-social-momby.appspot.com',
    messagingSenderId: '1096411966178'
  };

  firebase.initializeApp(config);

  function IngresoGoogle() {
    // alert('hi');
    if (!firebase.auth().currentUser) {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/plus.login');
      firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        window.location.href = 'views/home.html';
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        if (errorcode === 'auth/account-exists-with-different-credential') {
          alert('Es el mismo usuario');
        }
      });
    } else {
      firebase.auth().signOut();
    }
  };

  function IngresoFacebook() {
    // alert('hi');
    if (!firebase.auth().currentUser) {
      var provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('public_profile');
      firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // console.log(user);
        window.location.href = 'views/home.html';
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('Es el mismo usuario');
        }
      });
    } else {
      firebase.auth().signOut();
    }
  };
  
  $('#btn-google').on('click', IngresoGoogle);
  $('#btn-facebook').on('click', IngresoFacebook);

  var $userName = $('.username');
  var $userEmail = $('.directionMail');
  var $userProfile = $('.user-profile');
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var name = user.displayName;
      var email = user.email;
      var photoUrl = user.photoURL;
      var emailVerified = user.emailVerified;
      var uid = user.uid;
      console.log(user);
      $userName.text(name);
      $userEmail.text(email);
      $userProfile.attr('src', photoUrl);
    } else {
      // No user is signed in.
    }
  });

  // Función para salir de sesión
  $('#logout').on('click', function() {
    console.log('hi');
    firebase.auth().signOut().then(function() {
      // Salida exitosa
      console.log('saliendo');
      window.location.href = '../index.html';
    }).catch(function(error) {
      // Un error sucedido
      console.log(error);
    });
  });

  // --------------> HOME <----------------------------
  // Muestra menú lateral en side nav
  $('.button-collapse').sideNav();

  // Selecciona elementos
  var area = $('#text-post');
  var publish = $('#btn-post');
  var containerPost = $('#container-post');
  var addPhoto = $('#add-photo');
  var sendPhoto = $('.send-photo');
  var inputPhoto = $('.input-file');

  // Añade evento al botón 'publish' para crear posts
  $(publish).on('click', function(event) {
    // Creamos elementos    
    var comment = $(area).val();
    var textPost = 
      '<div class="card-content">' +
        '<p class="col s12 m12">' + comment + '</p>' +
      '</div>';
    var buttons =
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
      '</div>';

    if ($(area).val()) {
      var containerNewPost = '<div class="row"><div class="col s12 m12"><div class="card">' + textPost + buttons + '</div></div></div>';
      
      $(containerPost).prepend(containerNewPost);

      $(area).val('');
      $(area).focus();
    } 
  });

  // Genera modal
  $('.modal').modal();

  // funcion para filtrado
  var container = $('#container-posts');
  for (i = 0; i < data.length; i++) {
    var grupo = 
  '<div class="col s6 m4 l3 collection card-image card-border hoverable" data-type=' + data[i].type + ' >' + 
    '<div class="card">' +
      '<div class="card-image">' +
      '<img id="post-height" class="responsive-img modal-trigger content" data-name ="' + data[i].name + '" data-image =' + data[i].image + ' data-user =' + data[i].user + ' data-info =' + data[i].info + ' data-description = "' + data[i].description + '" href="#modal-post" src=' + data[i].image + '>' +
    '</div>' +
    '<div class="card-content espaciado">' +
    '<p class="name-color">' + data[i].name + '</p>' +
    '</div>' +
  '</div>';
    container.append(grupo);
  }

  // FILTRO DE POSTS
  $('#search-post').keyup(function() {
    var name = $(this).val().toLowerCase();
    $('.collection').hide();
    $('.collection').each(function() {
      var search = $(this).text().toLowerCase();
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

  // funcion para  contactos
  var contactos = $('#container-contactos');
  for (j = 0; j < data.length; j++) {
    var addContacs = 
  '<div class="col s12 m6 l4 collection2 hoverable">' + 
    '<div class="card horizontal">' +
      '<div class="card-image">' +
        '<img src=' + data[j].user + '>' +
      '</div>' +
      '<div class="card-stacked">' +
        '<div class="card-content contacto">' +
          '<p class="name-color">' + data[j].contact + '</p>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>';
    contactos.append(addContacs);
  }

  // FILTRO DE CONTACTOS
  $('#input-contact').keyup(function() {
    var name = $(this).val().toLowerCase();
    $('.collection2').hide();
    $('.collection2').each(function() {
      var search = $(this).text().toLowerCase();
      if (search.indexOf(name) !== -1) { // filtrado por nombre de contacto
        $(this).show();
      }
    });
  });
  
  $('.heart').click(function(event) {
    event.preventDefault();
    $(this).toggleClass('favorite');
  });
  
  // MODAL
  $('.content').click(function() {
    var name = $(this).data('name'),
      image = $(this).data('image'),
      description = $(this).data('description'),
      user = $(this).data('user');
    info = $(this).data('info');
        
    $('.name').text(name);
    $('.image').attr('src', image);
    $('.description').text(description);
    $('.user-post').attr('src', user);
    $('.info').text(info);
  });
});
