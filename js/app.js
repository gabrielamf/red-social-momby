$(document).ready(function() {
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
    apiKey: "AIzaSyAczKOqhEEOO6n5OIs8XL4-BvaEn7QfnHg",
    authDomain: "red-social-momby.firebaseapp.com",
    databaseURL: "https://red-social-momby.firebaseio.com",
    projectId: "red-social-momby",
    storageBucket: "red-social-momby.appspot.com",
    messagingSenderId: "1096411966178"
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
  
});
