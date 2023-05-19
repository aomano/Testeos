function validarFormulario(event) {
    event.preventDefault();
  
    // Obtener los valores de los campos de entrada
    var nombre = document.getElementById('name').value;
    var apellido = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('phone').value;
    var pais = document.getElementById('country').value;
    var nivel = document.getElementById('nivel').value;
    var mensaje = document.getElementById('message').value;
  
    // Validar los campos
    if (nombre === '' || apellido === '' || email === '' || telefono === '' || pais === '' || nivel === '' || mensaje === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }
  
    if (!validarEmail(email)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }
  
    // Si todas las validaciones son exitosas, enviar el formulario
    event.target.submit();
  }
  
  function validarEmail(email) {
    // Patrón para validar el formato del correo electrónico
    var patronEmail = /\S+@\S+\.\S+/;
    return patronEmail.test(email);
  }