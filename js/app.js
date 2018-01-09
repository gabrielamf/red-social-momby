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
  }, 100);
	
  // VALIDACIÓN REGISTRATE
  var $email = $('#email');
  var $password = $('#password');
  var $checked = $('#indeterminate-checkbox');
  
  var validateEmail = false;
  var validatePassword = false; 
  var validateChecked = false;  

  // Aqui indicar que se puede implementar la función como variable
  function activeButton() {
    if (validateEmail && validatePassword && validateChecked) {
      $('#sign-up').removeClass('disabled');
    }
  }

  function desactiveButton() {
    $('#sign-up').addClass('disabled');
  } 

  $email.on('input', function(event) {
    // console.log(event.target.value);
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    console.log(REGEXEMAIL.test($(this).val()));
    console.log($(this).val());
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton(); 
    } else {
      desactiveButton();
    }
  });
  // !$('#email').hasClass('invalid') && ($('#email').val().trim().length !== 0
  $password.on('input', function() {
    console.log($(this).val());
    if ($(this).val()) {
      validatePassword = true;
      activeButton(); 
    } else {
      desactiveButton(); 
    }
  });
 
  $checked.on('click', function(event) {
    if (event.target.checked) {
    //   alert('entre');
      validateChecked = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });
 
  $('#sign-up').on('click', function(event) {
    event.preventDefault();
    localStorage.email = $email.val();
    localStorage.password = $password.val();
    window.location.href = '../views/home.html';
  });
	
  // VALIDACIÓN INICIA SESIÓN
  var $email2 = $('#email2');
  var $password2 = $('#password2');
  var $buttonLogIn = $('#log-in');

  // variable booleanas para la activación del boton  
  var validateEmail2 = false;
  var validatePassword2 = false; 

  // llamamos a los valores guardados en el localStorage
  console.log(localStorage.email);
  console.log(localStorage.password);

  $email2.on('input', function() {
    if ($(this).val() === localStorage.email) {
      alert('pasa');
      validateEmail2 = true;
    }
  });

  $password2.on('input', function() {
    if ($(this).val() === localStorage.password) {
      alert('esto tambien pasa');
      validatePassword2 = true;
    }
  });

  $buttonLogIn.on('click', function(event) {
    event.preventDefault();
    if (validateEmail2 && validatePassword2) {
      alert('Oh my gad!! You are papanuelll Yupi!!');
      // window.location.href = '../views/home.html';
    } else {
      alert('Oh no, you need register');
    }
  });
});
